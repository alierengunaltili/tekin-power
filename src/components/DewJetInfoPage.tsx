import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DewJetInfoPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="flex min-h-[80svh] items-center bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 px-6 pb-24 pt-44 text-white">
        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-cyan-300">TEKİN POWER · DEWJET</p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <div className="mt-10 max-w-2xl rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Bilgilendirme sayfası hazırlanıyor</h2>
            <p className="mt-3 leading-relaxed text-blue-100">Ürün bilgileri ve teknik detaylar yakında bu sayfada paylaşılacaktır.</p>
          </div>
          <Link href="/" className="mt-8 inline-flex rounded-full border border-white/25 px-6 py-3 font-medium transition-colors hover:bg-white/10">
            Ana sayfaya dön
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
