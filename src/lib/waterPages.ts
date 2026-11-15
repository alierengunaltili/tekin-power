const waterPagePaths = [
  '/tekne-hmi',
  '/hizmetlerimiz/marin',
  '/hizmetlerimiz/deniz-gol-dibi-arama-tarama',
  '/dewjet-elektrikli-motor',
  '/dewjet-pompa',
  '/dewjet',
  '/dalyan',
  '/sahadan-gorseller/marin-cozumler',
  '/sahadan-gorseller/elektrikli-pompa-cozumleri',
];

export function isWaterPagePath(pathname: string): boolean {
  return waterPagePaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}
