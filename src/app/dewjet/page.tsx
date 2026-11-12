import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/dewjet', 'DewJet Motor ve Elektrikli Pompa | Tekin Power', 'DewJet elektrikli tekne motorları ve elektrikli su pompası çözümlerini inceleyin. Ürün seçimi ve proje ihtiyaçları için Tekin Power ile iletişime geçin.');

export default function DewJetPage() {
  return <div className="bg-white">
    <Navbar />
    <main>
      <header className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 px-5 pb-20 pt-44 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">DewJet Motor ve Pompa Çözümleri</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">DewJet elektrikli tekne motoru ve elektrikli su pompası ihtiyaçlarınız için ilgili ürün grubunu inceleyin. Motor seçimi, batarya uyumu veya pompa çalışma koşulları hakkında Tekin Power ile görüşebilirsiniz.</p>
        </div>
      </header>
      <section aria-label="DewJet ürün grupları" className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2">
        <article className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
          <h2 className="text-2xl font-bold text-slate-900">DewJet elektrikli tekne motorları</h2>
          <p className="my-5 leading-8 text-slate-700">DewJet dıştan takma elektrikli tekne motorunda çarkı çevresindeki motor döndürür. Şaftsız tasarımı keşfedin; 16, 18, 20 ve 45 kW seçeneklerini teknenizin yüküne ve günlük rotasına göre değerlendirin.</p>
          <Link href="/dewjet-elektrikli-motor" className="font-semibold text-blue-800 underline underline-offset-4">Elektrikli tekne motorlarını inceleyin</Link>
        </article>
        <article className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
          <h2 className="text-2xl font-bold text-slate-900">DewJet elektrikli su pompası</h2>
          <p className="my-5 leading-8 text-slate-700">Debi, basınç, suyun niteliği ve güç kaynağı bilgileriyle pompa ihtiyacınızı tanımlayın. Taşınabilirlik ve kullanım koşullarınızı paylaşarak bilgi talep edebilirsiniz.</p>
          <Link href="/dewjet-pompa" className="font-semibold text-blue-800 underline underline-offset-4">Elektrikli su pompasını inceleyin</Link>
        </article>
      </section>
    </main>
    <Footer />
  </div>;
}
