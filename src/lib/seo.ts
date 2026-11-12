import type { Metadata } from 'next';

export const SITE_URL = 'https://tekinpower.com';
export const SITE_LOGO = '/tekinpowerlogos/tekinpower-dark.png';

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title, description, url: `${SITE_URL}${path}`,
      siteName: 'Tekin Power', locale: 'tr_TR', type: 'website',
      images: [{ url: `${SITE_URL}${SITE_LOGO}`, alt: 'Tekin Power' }],
    },
    twitter: { card: 'summary', title, description, images: [`${SITE_URL}${SITE_LOGO}`] },
  };
}

