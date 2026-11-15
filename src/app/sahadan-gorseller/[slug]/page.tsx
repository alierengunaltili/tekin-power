import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Camera } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fieldGalleries } from '@/data/fieldGalleries';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return fieldGalleries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const gallery = fieldGalleries.find((item) => item.slug === slug);
  if (!gallery) notFound();
  return pageMetadata(`/sahadan-gorseller/${slug}`, `${gallery.title} | Tekin Power`, gallery.description);
}

export default async function FieldGalleryPage({ params }: Props) {
  const { slug } = await params;
  const gallery = fieldGalleries.find((item) => item.slug === slug);
  if (!gallery) notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <header className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 px-5 pb-16 pt-44 text-white sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Link href="/sahadan-gorseller" className="mb-7 inline-flex items-center gap-2 text-sm text-cyan-200 hover:underline"><ArrowLeft size={17} aria-hidden="true" /> Sahadan Görseller</Link>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">{gallery.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-blue-100">{gallery.description}</p>
          </div>
        </header>
        <section aria-label="Galeri içerikleri" className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8">
          <nav aria-label="Galeri seçimi" className="mb-10 flex flex-wrap gap-3">
            {fieldGalleries.map((item) => (
              <Link key={item.slug} href={`/sahadan-gorseller/${item.slug}`} aria-current={item.slug === slug ? 'page' : undefined} className={`rounded-xl border px-5 py-3 text-sm font-semibold transition-colors ${item.slug === slug ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-400'}`}>{item.title}</Link>
            ))}
          </nav>
          {gallery.media.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Camera size={30} strokeWidth={1.5} aria-hidden="true" /></span>
              <h2 className="mt-6 text-2xl font-bold text-slate-900">Saha çekimleri yakında burada</h2>
              <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate-600">Bu bölümün fotoğraf ve videoları henüz eklenmedi. Yeni saha paylaşımlarımızı burada bulabileceksiniz.</p>
            </div>
          ) : (
            <div className="space-y-14">
              {(['video', 'image'] as const).map((type) => {
                const items = gallery.media.filter((media) => media.type === type);
                if (items.length === 0) return null;
                return (
                  <section key={type} aria-labelledby={`${type}-heading`}>
                    <div className="mb-6 flex items-center gap-3">
                      <h2 id={`${type}-heading`} className="text-2xl font-bold text-slate-900 sm:text-3xl">{type === 'video' ? 'Videolar' : 'Fotoğraflar'}</h2>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">{items.length}</span>
                    </div>
                    <div className="grid items-start gap-6 md:grid-cols-2">
                      {items.map((media) => (
                        <figure key={media.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                          {media.type === 'image' ? (
                            <a href={media.src} target="_blank" rel="noopener noreferrer" aria-label={`${media.title} — tam boy görseli aç`} className="block bg-slate-100 focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-blue-500">
                              <Image src={media.src} alt={media.alt} width={media.width} height={media.height} unoptimized className="aspect-[4/3] w-full object-contain" />
                            </a>
                          ) : (
                            <video controls playsInline preload="none" poster={media.poster} aria-label={media.title} className="aspect-[4/3] w-full bg-slate-950 object-contain">
                              <source src={media.src} type="video/mp4" />
                              {media.captions && <track kind="captions" src={media.captions} srcLang="tr" label="Türkçe" default />}
                              Tarayıcınız videoyu desteklemiyor. <a href={media.src}>Videoyu açın</a>.
                            </video>
                          )}
                          <figcaption className="p-5"><h3 className="text-lg font-semibold text-slate-900">{media.title}</h3>{media.description && <p className="mt-2 leading-relaxed text-slate-600">{media.description}</p>}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
