export type VideoQuality = 'balanced' | 'full';
export type ConnectionHints = { saveData?: boolean; effectiveType?: string; downlink?: number };

export function shouldPlayVideo(connection: ConnectionHints | undefined): boolean {
  if (connection?.saveData || ['slow-2g', '2g'].includes(connection?.effectiveType ?? '')) return false;
  if (connection?.downlink !== undefined) return connection.downlink >= 1.5;
  return connection?.effectiveType !== '3g';
}

export function chooseVideoQuality(connection: ConnectionHints | undefined, width: number, pixelRatio = 1): VideoQuality {
  // Balanced is 1080p where the source supports it, never a blurry 360p/540p rendition.
  const needsDetail = width * Math.max(1, pixelRatio) >= 1800;
  const hasCapacity = connection?.effectiveType !== '3g' && (connection?.downlink ?? 8) >= 8;
  return needsDetail && hasCapacity ? 'full' : 'balanced';
}

export function lowerVideoQuality(quality: VideoQuality): VideoQuality | null {
  return quality === 'full' ? 'balanced' : null;
}

export function canSustainVideo(bytes: number, duration: number, connection: ConnectionHints | undefined): boolean {
  if (!shouldPlayVideo(connection)) return false;
  if (connection?.downlink === undefined || duration <= 0) return true;
  // Use the actual delivered file rate, with room for network variation.
  return connection.downlink >= (bytes * 8 / duration / 1_000_000) * 1.25;
}
