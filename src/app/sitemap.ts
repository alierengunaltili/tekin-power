import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tekinpower.com.tr';
  
  // Ana sayfalar
  const routes = [
    '',
    '/hakkimizda',
    '/hizmetlerimiz',
    '/lifepo4',
    '/gunespaneli',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Hizmet sayfaları
  const serviceRoutes = [
    '/hizmetlerimiz/marin',
    '/hizmetlerimiz/enerji-depolama',
    '/hizmetlerimiz/telekomunikasyon',
    '/hizmetlerimiz/askeri-sistem-uygulamalari',
    '/hizmetlerimiz/car-port',
    '/hizmetlerimiz/mobil-solar',
    '/hizmetlerimiz/konut-cozumleri',
    '/hizmetlerimiz/golf-araclari',
    '/hizmetlerimiz/drone',
    '/hizmetlerimiz/forklift',
    '/hizmetlerimiz/e-bus',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}
