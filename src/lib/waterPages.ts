const waterPagePaths = [
  '/tekne-hmi',
  '/hizmetlerimiz/marin',
  '/hizmetlerimiz/deniz-gol-dibi-arama-tarama',
  '/dewjet-elektrikli-motor',
  '/dewjet-pompa',
  '/dewjet',
];

export function isWaterPagePath(pathname: string): boolean {
  return waterPagePaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}
