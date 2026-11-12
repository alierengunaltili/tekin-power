/** Owns playback listeners/timers so a hidden or replaced video cannot trigger a stale fallback. */
export function startVideoPlayback(video: HTMLVideoElement, resumeAt: number, onFallback: (time: number) => void, onBlocked: () => void, onDecodeError?: (time: number) => void) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let disposed = false;
  const clear = () => clearTimeout(timer);
  const fallback = () => { clear(); onFallback(video.currentTime); };
  const waiting = () => { clear(); timer = setTimeout(fallback, 2500); };
  // A network stall is harmless while enough video is already buffered.
  const stalled = () => { if (video.readyState < 3) waiting(); };
  const decodeError = () => { clear(); if (onDecodeError) onDecodeError(video.currentTime); else fallback(); };
  const restorePosition = () => {
    if (resumeAt > 0 && Number.isFinite(video.duration)) {
      const position = Math.min(resumeAt, Math.max(0, video.duration - 0.1));
      if (Math.abs(video.currentTime - position) > 0.1) video.currentTime = position;
    }
  };
  video.addEventListener('loadedmetadata', restorePosition);
  video.addEventListener('waiting', waiting);
  video.addEventListener('stalled', stalled);
  video.addEventListener('playing', clear);
  video.addEventListener('error', decodeError);
  // Metadata may already be cached when the effect starts; retained scroll
  // playback stays at its exact current position without an unnecessary seek.
  if (video.readyState >= 1) restorePosition();
  timer = setTimeout(fallback, 5000);
  void video.play().catch((error: DOMException) => {
    if (!disposed && error.name === 'NotAllowedError') { clear(); onBlocked(); }
  });
  return () => {
    disposed = true;
    clear();
    video.pause();
    video.removeEventListener('loadedmetadata', restorePosition);
    video.removeEventListener('waiting', waiting);
    video.removeEventListener('stalled', stalled);
    video.removeEventListener('playing', clear);
    video.removeEventListener('error', decodeError);
  };
}
