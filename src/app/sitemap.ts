import { MetadataRoute } from 'next';
import { solutions } from '@/data/solutions';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  
  // Ana sayfalar
  const routes = [
    '',
    '/hakkimizda',
    '/hizmetlerimiz',
    '/lifepo4',
    '/tekne-hmi',
    '/gunespaneli',
    '/arsimet-burgusu',
    '/dewjet-pompa/tasarruf-hesaplama',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Hizmet sayfaları
  const serviceRoutes = solutions.map(({ href: route }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}
