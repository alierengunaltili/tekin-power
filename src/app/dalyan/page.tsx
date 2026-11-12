import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Waves } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { dalyanNews, dalyanReviewedAt } from '@/data/dalyan';

export const metadata: Metadata = {
  title: 'DALYAN | Elektrikli Tekne Haberleri | Tekin Power',
  description: 'Dalyan’dan ve dünyadan elektrikli tekne haberleri, görseller ve deniz ulaşımındaki elektrikli dönüşümden gelişmeler.',
  alternates: { canonical: 'https://tekinpower.com.tr/dalyan' },
};

const externalLinkProps = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function DalyanPage() {
  const featured = dalyanNews[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 px-6 pb-16 pt-44 text-white sm:pb-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full bg-cyan-700/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-cyan-300">TEKİN POWER · ELEKTRİKLİ DENİZ ULAŞIMI</p>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">DALYAN</h1>
              <p className="mt-4 max-w-xl text-3xl font-medium leading-tight sm:text-4xl">Suyun üzerinde<br /><span className="text-cyan-300">sessiz bir dönüşüm.</span></p>
              <p className="mt-6 max-w-lg leading-relaxed text-slate-300">Dalyan’dan ve dünyadan elektrikli tekne haberleri. Yeni projeler, deneme seferleri ve deniz ulaşımının elektrikli geleceğinden gelişmeler.</p>
              <a href="#haberler" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200">Haberleri keşfet <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <figure className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl">
              <div className="relative aspect-[16/10]">
                <Image src={featured.image} alt={featured.imageAlt} fill priority sizes="(min-width: 1280px) 616px, (min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <span className="absolute left-5 top-5 rounded-full bg-slate-950/85 px-4 py-2 text-xs font-medium">Dalyan’dan haberler</span>
              </div>
              <figcaption className="p-6">
                <time dateTime={featured.date} className="text-xs text-cyan-300">{featured.displayDate}</time>
                <a href={featured.url} {...externalLinkProps} className="mt-2 flex items-center justify-between gap-4 text-lg font-semibold hover:text-cyan-200">{featured.title}<ArrowUpRight className="shrink-0" size={22} aria-hidden="true" /></a>
                <p className="mt-3 text-xs text-slate-400">Haber ve görsel: {featured.source} · Kaynak yeni sekmede açılır.</p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="haberler" aria-labelledby="news-title" className="scroll-mt-36 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-blue-700">HABERLER & GÖRSELLER</p>
            <h2 id="news-title" className="text-3xl font-bold sm:text-4xl">Elektrikli teknelerden gelişmeler</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">Dalyan’daki dönüşüm çalışmalarından dünyadaki yeni projelere, kaynaklarından derlenen haberler. Bu seçki elle güncellenir. Son içerik kontrolü: {dalyanReviewedAt}.</p>
            <div className="mt-9 grid gap-6 md:grid-cols-3">
              {dalyanNews.map((news) => (
                <article key={news.url} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="relative aspect-[16/10] bg-blue-950">
                    <Image src={news.image} alt={news.imageAlt} fill sizes="(min-width: 1280px) 411px, (min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold text-blue-700">{news.category}</p>
                    <time dateTime={news.date} className="mt-2 text-xs text-slate-500">{news.displayDate}</time>
                    <h3 className="mt-4 text-xl font-semibold leading-snug">{news.title}</h3>
                    <p className="mb-6 mt-3 text-sm leading-relaxed text-slate-600">{news.description}</p>
                    <a href={news.url} {...externalLinkProps} aria-label={`${news.title} — haberi kaynağında oku (yeni sekme)`} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">Haberi kaynağında oku <ArrowUpRight size={16} aria-hidden="true" /></a>
                    <p className="mt-4 text-xs text-slate-500">Kaynak: {news.source}<br />Görsel: {news.imageCredit}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="marine-title" className="px-6 pb-16 sm:pb-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-blue-950 p-7 text-white sm:flex-row sm:items-center sm:p-10">
            <div className="flex items-start gap-4"><Waves className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /><div><h2 id="marine-title" className="text-2xl font-semibold">Denizde elektrikli geleceğe doğru.</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-100">Tekin Power’ın deniz araçlarına yönelik enerji ve elektrikli tahrik çözümlerini keşfedin.</p></div></div>
            <Link href="/hizmetlerimiz/marin" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-950 hover:bg-cyan-100">Marin çözümleri <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
