import { notFound, permanentRedirect } from 'next/navigation';

const destinations: Record<string, string> = {
  'marin-cozumler': '/hizmetlerimiz/marin',
  'elektrikli-pompa-cozumleri': '/dewjet-pompa',
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}

export default async function RetiredFieldGalleryCategory({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations[slug];
  if (!destination) notFound();
  permanentRedirect(destination);
}
