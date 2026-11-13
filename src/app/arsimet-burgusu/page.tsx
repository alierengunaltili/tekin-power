import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  '/arsimet-burgusu',
  'Arşimet Burgusu | Tekin Power',
  'Arşimet Burgusu hakkında bilgi almak için Tekin Power ile iletişime geçin.',
);

export default function ArsimetBurgusuPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <header className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 px-5 pb-20 pt-44 text-white sm:px-8">
          <div className="mx-auto max-w-6xl">
            <nav aria-label="Sayfa yolu" className="mb-7 flex gap-2 text-sm text-blue-100">
              <Link href="/" className="hover:underline">Ana Sayfa</Link><span aria-hidden="true">/</span><span>Yenilenebilir Enerji</span>
            </nav>
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">Arşimet Burgusu</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-blue-100">Arşimet Burgusu hakkında bilgi almak için ekibimizle iletişime geçin.</p>
            <Link href="/#contact" className="mt-8 inline-flex rounded-xl border border-white/30 px-6 py-3 font-semibold transition-colors hover:bg-white/10">Projeniz için bilgi alın</Link>
          </div>
        </header>
      </main>
      <Footer />
    </div>
  );
}
