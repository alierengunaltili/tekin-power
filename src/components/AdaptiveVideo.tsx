'use client';

import { useEffect, useRef, useState } from 'react';
import { canSustainVideo, chooseVideoQuality, lowerVideoQuality, shouldPlayVideo, type ConnectionHints, type VideoQuality } from '@/lib/videoQuality';
import { startVideoPlayback } from '@/lib/videoPlayback';
import { videoAssets } from '@/lib/videoAssets';

type NetworkConnection = ConnectionHints & EventTarget;

/** One decoder, bounded downloads and a poster when motion/data preferences disallow autoplay. */
export default function AdaptiveVideo({ name, prefix, label, loop = false, onEnded, fit = 'cover', fillBackground = false, poster: posterOverride, smoothStart = true }: {
  name: string;
  prefix: 'landing-page' | 'service';
  label: string;
  loop?: boolean;
  onEnded?: () => void;
  fit?: 'cover' | 'contain';
  fillBackground?: boolean;
  poster?: string;
  smoothStart?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const resumeAt = useRef(0);
  const [quality, setQuality] = useState<VideoQuality>('balanced');
  const [codec, setCodec] = useState<'vp9' | 'h264'>('h264');
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);
  const [presentedSource, setPresentedSource] = useState('');
  const asset = videoAssets[`${prefix}/${name}`];
  const rendition = asset?.[quality];
  const usingVp9 = codec === 'vp9' && !!rendition && rendition.webmBytes <= rendition.mp4Bytes;
  const poster = asset?.poster ?? posterOverride ?? `/${prefix}-posters/${name}.jpg`;
  const source = rendition
    ? (usingVp9 ? rendition.webm : rendition.mp4)
    : `/${prefix}-videos-hd/${name}.mp4`;
  const hasPresentedFrame = presentedSource === source;

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: NetworkConnection }).connection;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: number | undefined;
    const applyPreferences = () => {
      window.clearTimeout(timer);
      if (!shouldPlayVideo(connection) || motion.matches) {
        setEnabled(false);
        return;
      }
      const supportsVp9 = !!document.createElement('video').canPlayType('video/webm; codecs="vp9"');
      const preferred = chooseVideoQuality(connection, window.innerWidth, window.devicePixelRatio);
      const candidates: VideoQuality[] = preferred === 'full' ? ['full', 'balanced'] : ['balanced'];
      const selected = !asset ? preferred : candidates.find(tier => {
        const option = asset[tier];
        const bytes = supportsVp9 ? Math.min(option.webmBytes, option.mp4Bytes) : option.mp4Bytes;
        return canSustainVideo(bytes, asset.duration, connection);
      });
      if (!selected) { setEnabled(false); return; }
      resumeAt.current = videoRef.current?.currentTime ?? resumeAt.current;
      setQuality(selected);
      setCodec(supportsVp9 ? 'vp9' : 'h264');
      setFailed(false);
      timer = window.setTimeout(() => setEnabled(true), 0);
    };
    applyPreferences();
    connection?.addEventListener('change', applyPreferences);
    motion.addEventListener('change', applyPreferences);
    return () => {
      window.clearTimeout(timer);
      connection?.removeEventListener('change', applyPreferences);
      motion.removeEventListener('change', applyPreferences);
    };
  }, [asset]);

  useEffect(() => {
    let inViewport = false;
    const update = () => setVisible(inViewport && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inViewport = entry.isIntersecting;
      update();
    }, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  useEffect(() => {
    resumeAt.current = 0;
    setFailed(false);
    setPresentedSource('');
  }, [name]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled || !visible || failed) return;
    const fallBack = (time: number) => {
      resumeAt.current = time;
      const next = lowerVideoQuality(quality);
      if (next && asset && asset.balanced.width < asset.full.width) setQuality(next);
      else setFailed(true);
    };
    const stop = startVideoPlayback(video, resumeAt.current, fallBack, () => setFailed(true), (time) => {
      resumeAt.current = time;
      if (usingVp9) setCodec('h264');
      else fallBack(time);
    });
    return () => {
      resumeAt.current = video.currentTime;
      stop();
    };
  }, [enabled, visible, failed, quality, name, source, usingVp9, asset]);

  // Reveal only after a decoded frame is submitted, not just after metadata loads.
  // Buffering must not bring the opening still back over an already playing video.
  useEffect(() => {
    const video = videoRef.current;
    if (!smoothStart || !video || !enabled || !visible || failed || hasPresentedFrame) return;
    let disposed = false;
    let frameId: number | undefined;
    let animationId: number | undefined;
    const reveal = () => { if (!disposed) setPresentedSource(source); };
    const revealAfterPaint = () => { animationId = requestAnimationFrame(reveal); };
    if (typeof video.requestVideoFrameCallback === 'function') {
      frameId = video.requestVideoFrameCallback(reveal);
    } else {
      video.addEventListener('playing', revealAfterPaint, { once: true });
      if (!video.paused && video.readyState >= 3) revealAfterPaint();
    }
    return () => {
      disposed = true;
      if (frameId !== undefined) video.cancelVideoFrameCallback(frameId);
      if (animationId !== undefined) cancelAnimationFrame(animationId);
      video.removeEventListener('playing', revealAfterPaint);
    };
  }, [smoothStart, enabled, visible, failed, hasPresentedFrame, source]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {fillBackground && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950"
          aria-hidden="true"
        />
      )}
      <div className={`absolute inset-0 bg-center bg-no-repeat ${fit === 'contain' ? 'bg-contain' : 'bg-cover'}`} style={{
        backgroundImage: `url(${poster})`,
      }}>
        {enabled && !failed && (
          <video
            key={source}
            ref={videoRef}
            // Keep the decoded frame and buffer when scrolled out of view.
            // Playback pauses in the effect; preload="none" defers the initial load.
            src={source}
            poster={poster}
            className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${smoothStart ? 'transition-opacity duration-150 ease-out motion-reduce:transition-none' : ''}`}
            style={smoothStart ? { opacity: hasPresentedFrame ? 1 : 0 } : undefined}
            aria-label={label}
            data-quality={quality}
            data-codec={usingVp9 ? 'vp9' : 'h264'}
            data-width={rendition?.width}
            muted
            playsInline
            loop={loop}
            preload="none"
            onEnded={onEnded}
          />
        )}
      </div>
    </div>
  );
}
