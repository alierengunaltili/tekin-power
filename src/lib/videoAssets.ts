import assets from '@/data/videoAssets.json';

export type VideoRendition = {
  width: number;
  height: number;
  fps: number;
  webm: string;
  mp4: string;
  webmBytes: number;
  mp4Bytes: number;
};
export type VideoAsset = {
  poster: string;
  duration: number;
  full: VideoRendition;
  balanced: VideoRendition;
};
export const videoAssets = assets as Record<string, VideoAsset>;
