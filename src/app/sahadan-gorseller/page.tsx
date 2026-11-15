import Link from 'next/link';
import { ArrowUpRight, Camera, Droplets, Film, Sailboat } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fieldGalleries } from '@/data/fieldGalleries';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/sahadan-gorseller', 'Sahadan Görseller | Tekin Power', 'Marin ve elektrikli pompa çözümlerimizin saha fotoğraf ve video galerileri.');

export default function FieldGalleriesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <header className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 px-5 pb-20 pt-44 text-white sm:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Tekin Power · Saha Galerisi</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Sahadan Görseller</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">Çözümlerimizi sahada keşfedin. Fotoğraf ve videoları görmek için ilgilendiğiniz uygulama alanını seçin.</p>
          </div>
        </header>
        <section aria-label="Saha galerileri" className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-2">
          {fieldGalleries.map((gallery) => {
            const Icon = gallery.kind === 'marine' ? Sailboat : Droplets;
            return (
              <Link key={gallery.slug} href={`/sahadan-gorseller/${gallery.slug}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-500">
                <div className={`relative flex h-52 items-center justify-center overflow-hidden ${gallery.kind === 'marine' ? 'bg-gradient-to-br from-blue-950 to-blue-600' : 'bg-gradient-to-br from-teal-950 to-cyan-600'}`}>
                  <div aria-hidden="true" className="absolute h-72 w-72 rounded-full border border-white/10" />
                  <div aria-hidden="true" className="absolute h-48 w-48 rounded-full border border-white/20" />
                  <Icon size={72} strokeWidth={1.2} className="relative text-white" aria-hidden="true" />
                  <span className="absolute bottom-5 left-6 flex items-center gap-2 text-xs font-medium text-white/90"><Camera size={15} aria-hidden="true" /> Fotoğraf <span aria-hidden="true">/</span> <Film size={15} aria-hidden="true" /> Video</span>
                </div>
                <div className="p-7 sm:p-8">
                  <h2 className="text-2xl font-bold leading-snug text-slate-900">{gallery.title}</h2>
                  <p className="mt-3 leading-relaxed text-slate-600">{gallery.description}</p>
                  <span className="mt-7 flex items-center justify-between font-semibold text-blue-700">Galeriyi keşfet <ArrowUpRight size={23} aria-hidden="true" /></span>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}
