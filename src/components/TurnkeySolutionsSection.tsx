import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, ClipboardList, Settings2, Wrench, CircleCheck, Phone } from 'lucide-react';
import { pumps } from '@/data/pumps';

const deliverySteps = [
  { title: 'İhtiyacınızı dinliyoruz', description: 'Kullanım alanınızı ve proje hedeflerinizi birlikte değerlendiriyoruz.', icon: ClipboardList },
  { title: 'Sistemi planlıyoruz', description: 'Pompa veya motoru, güç altyapısını ve kontrol donanımını projenize göre seçiyoruz.', icon: Settings2 },
  { title: 'Kurulumu yapıyoruz', description: 'Montaj ve sistem entegrasyonunu ekibimizle gerçekleştiriyoruz.', icon: Wrench },
  { title: 'Devreye alıyoruz', description: 'Kontrolleri tamamlayıp sistemi kullanıma hazır teslim ediyoruz.', icon: CircleCheck },
];

export default function TurnkeySolutionsSection() {
  return (
    <section id="anahtar-teslim" aria-labelledby="anahtar-teslim-baslik" className="relative scroll-mt-36 overflow-hidden bg-[#071d32] py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-72 -top-72 h-[700px] w-[700px] rounded-full border border-cyan-200/10 shadow-[0_0_0_90px_#67e8f904,0_0_0_180px_#67e8f903]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[1.35fr_0.8fr] lg:items-end lg:gap-12">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300"><span className="h-px w-8 bg-cyan-300" />Tekin Power · DewJet</p>
            <h2 id="anahtar-teslim-baslik" className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">Elektrikli pompa ve motorlarda <span className="text-cyan-300">anahtar teslim çözümler.</span></h2>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-200">Ürün seçiminden kuruluma ve devreye almaya kadar tüm süreci üstleniyoruz. Elektrikli su pompanızı veya tekne motorunuzu, ihtiyacınıza uygun bir sistem olarak kullanıma hazır teslim ediyoruz.</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded py-2 font-semibold text-cyan-300 underline-offset-4 hover:underline">Projenizi bizimle paylaşın <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-3xl bg-white text-slate-900">
            <div className="relative aspect-[16/10] overflow-hidden bg-sky-100">
              <Image src="/dewjet-pompa/pompa-doga-deniz-v1.png" alt="Deniz ve doğa manzarası önünde turkuaz 20 kW ve turuncu 45 kW DewJet elektrikli su pompaları" fill sizes="(min-width: 1024px) 1140px, 180vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Su transferi için elektrikli güç</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">DewJet Elektrikli Pompalar</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">Yüksek debi, kompakt gövde ve hafif tasarım. Pompa seçimini, 96 V veya 380 V güç altyapısını ve kurulumunu kullanım alanınıza göre birlikte planlıyoruz.</p>
              <div className="my-6 grid grid-cols-2 gap-3">
                {pumps.map(pump => (
                  <div key={pump.model} className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4">
                    <p className="text-xs font-semibold text-slate-600">{pump.power} · {pump.weight}</p>
                    <p className="mt-2 text-xl font-bold tracking-tight text-cyan-800 sm:text-2xl">{pump.flow}</p>
                    <p className="mt-1 text-xs text-slate-500">Maksimum debi</p>
                  </div>
                ))}
              </div>
              <Link href="/dewjet-pompa" className="mt-auto inline-flex min-h-12 items-center justify-between gap-3 rounded-xl bg-[#071d32] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-900">Pompaları ve özelliklerini inceleyin <ArrowRight size={18} className="shrink-0" aria-hidden="true" /></Link>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-3xl bg-white text-slate-900">
            <div className="relative aspect-[16/10] overflow-hidden bg-sky-100">
              <Image src="/dewjet-motor/motor-coast-card-v2.png" alt="Deniz manzarası önünde DewJet pervaneli dıştan takma, RIM dıştan takma ve şaftlı içten takma elektrikli tekne motorları" fill sizes="(min-width: 1024px) 1140px, 180vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Teknenize özel elektrikli tahrik</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">DewJet Elektrikli Tekne Motorları</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">Yeni tekneniz veya elektrikliye dönüşüm projeniz için motor, batarya ve kontrol sistemini birlikte ele alıyoruz. Montajdan devreye almaya kadar yanınızdayız.</p>
              <ul className="my-6 grid gap-3 text-sm font-medium text-slate-700">
                {['İçten ve dıştan takma motor seçenekleri', 'Pervaneli ve kapalı çarklı RIM tahrik', 'Motor, batarya ve kumanda entegrasyonu'].map(feature => <li key={feature} className="flex items-start gap-3"><Check size={18} className="mt-0.5 shrink-0 text-cyan-700" aria-hidden="true" />{feature}</li>)}
              </ul>
              <Link href="/dewjet-elektrikli-motor#motor-modelleri" className="mt-auto inline-flex min-h-12 items-center justify-between gap-3 rounded-xl bg-[#071d32] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-900">Motor modellerini inceleyin <ArrowRight size={18} className="shrink-0" aria-hidden="true" /></Link>
            </div>
          </article>
        </div>

        <div className="mt-12 border-t border-white/15 pt-10 lg:mt-16 lg:pt-12">
          <div className="flex flex-wrap items-center justify-between gap-4"><h3 className="text-2xl font-bold">Birlikte planlayalım, anahtar teslim tamamlayalım.</h3><span className="text-sm text-cyan-200">İhtiyaçtan teslimata Tekin Power</span></div>
          <ol className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map(({ title, description, icon: Icon }, index) => <li key={title} className="border-l border-cyan-300/30 pl-5"><div className="mb-4 flex items-center gap-3 text-cyan-300"><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><span className="text-xs font-semibold tracking-widest">0{index + 1}</span></div><h4 className="text-base font-bold">{title}</h4><p className="mt-2 text-sm leading-7 text-slate-300">{description}</p></li>)}
          </ol>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 sm:flex-row sm:items-center sm:p-7">
            <div><p className="text-lg font-semibold">Projeniz için doğru sistemi birlikte belirleyelim.</p><p className="mt-2 text-sm leading-6 text-slate-300">Pompa ve motor çözümlerimiz hakkında ekibimizden bilgi alın.</p></div>
            <a href="tel:+905323276293" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-[#071d32] transition-colors hover:bg-cyan-200"><Phone size={17} aria-hidden="true" /> Bizi arayın</a>
          </div>
        </div>
      </div>
    </section>
  );
}
