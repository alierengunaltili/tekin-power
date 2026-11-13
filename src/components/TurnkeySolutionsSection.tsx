import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, ClipboardList, Settings2, Wrench, CircleCheck, MessageCircle } from 'lucide-react';

const unisunHref = '/hizmetlerimiz/enerji-depolama';
const sharedProducts = [
  { name: 'Güneş Paneli', image: '/gunespaneli-redesign/monokristal solar panel.jpg', href: '/gunespaneli', alt: 'Monokristal güneş panelleri' },
  { name: 'Akü', image: '/anahtar-teslim/unisun-aku.webp', href: unisunHref, alt: 'Unisun LiFePO4 akü' },
  { name: 'İnverter', image: '/anahtar-teslim/inverter.webp', href: unisunHref, alt: 'Unisun inverter' },
  { name: 'Yardımcı Ekipmanlar', image: '/anahtar-teslim/yardimci-ekipman.webp', href: unisunHref, alt: 'Yardımcı ekipman grubundan DC koruma sigortası' },
  { name: 'Bağlantı Elemanları', image: '/anahtar-teslim/baglanti-elemanlari.webp', href: unisunHref, alt: 'Solar bağlantı konnektörleri' },
];

const packages = [
  {
    id: 'elektrikli-pompa-paketi', title: 'Elektrikli Pompa Paketi', product: 'Elektrikli Pompa',
    description: 'Su transferi için pompa ve enerji altyapısını birlikte kuruyor, çalışır durumda teslim ediyoruz.',
    image: '/dewjet-pompa/pompa-doga-deniz-v1.png', href: '/dewjet-pompa',
    alt: 'Deniz ve doğa manzarası önünde turkuaz ve turuncu DewJet elektrikli su pompaları',
  },
  {
    id: 'elektrikli-motor-paketi', title: 'Elektrikli Motor Paketi', product: 'Elektrikli Motor',
    description: 'Teknenizin elektrikli tahrik ve enerji altyapısını birlikte kuruyor, kullanıma hazır teslim ediyoruz.',
    image: '/dewjet-motor/motor-coast-card-v2.png', href: '/dewjet-elektrikli-motor',
    alt: 'Deniz manzarası önünde DewJet içten ve dıştan takma elektrikli tekne motorları',
  },
];

const deliverySteps = [
  { title: 'İhtiyacınızı dinliyoruz', description: 'Kullanım alanınızı ve proje hedeflerinizi birlikte değerlendiriyoruz.', icon: ClipboardList },
  { title: 'Sistemi planlıyoruz', description: 'Paketin ürünlerini ve kapasitesini projenize göre belirliyoruz.', icon: Settings2 },
  { title: 'Kurulumu yapıyoruz', description: 'Montajı, bağlantıları ve sistem entegrasyonunu gerçekleştiriyoruz.', icon: Wrench },
  { title: 'Devreye alıyoruz', description: 'Kontrolleri tamamlayıp sistemi kullanıma hazır teslim ediyoruz.', icon: CircleCheck },
];

export default function TurnkeySolutionsSection() {
  return (
    <section id="anahtar-teslim" aria-labelledby="anahtar-teslim-baslik" className="relative scroll-mt-36 overflow-hidden bg-[#071d32] py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-72 -top-72 h-[700px] w-[700px] rounded-full border border-cyan-200/10 shadow-[0_0_0_90px_#67e8f904,0_0_0_180px_#67e8f903]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mb-10 max-w-4xl lg:mb-12">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300"><span className="h-px w-8 bg-cyan-300" />Tekin Power · Anahtar Teslim</p>
          <h2 id="anahtar-teslim-baslik" className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">İki paket.<br /><span className="text-cyan-300">Ürün seçiminden çalışan sisteme.</span></h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">Elektrikli pompa veya elektrikli motor; güneş paneli, akü, inverter, yardımcı ekipmanlar ve bağlantı elemanlarıyla birlikte. Planlama, kurulum ve devreye alma sürecinin tamamını üstleniyoruz.</p>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {packages.map((pack, index) => (
            <article key={pack.id} id={pack.id} aria-labelledby={`${pack.id}-baslik`} className="scroll-mt-36 overflow-hidden rounded-3xl bg-white text-slate-900">
              <div className="p-6 pb-5 sm:p-8 sm:pb-6">
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-cyan-700"><span className="rounded-full bg-cyan-50 px-3 py-1.5">Paket 0{index + 1}</span><Check size={16} aria-hidden="true" />Anahtar teslim</p>
                <h3 id={`${pack.id}-baslik`} className="text-2xl font-bold tracking-tight sm:text-3xl">{pack.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pack.description}</p>
              </div>
              <Link href={pack.href} aria-label={`${pack.product} ürünlerini inceleyin`} className="group relative block focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-cyan-600">
                <div className="relative aspect-[3/1] bg-sky-50">
                  <Image src={pack.image} alt={pack.alt} fill sizes="(min-width: 1280px) 600px, (min-width: 1024px) 46vw, 94vw" className="object-contain" />
                </div>
                <span className="mx-3 mt-3 flex items-center justify-between gap-2 rounded-xl bg-[#071d32] px-4 py-3 text-sm font-semibold text-white group-hover:bg-cyan-900">{pack.product}<ArrowRight size={18} aria-hidden="true" /></span>
              </Link>
              <div className="p-5 sm:p-7">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Paketin diğer bileşenleri</p>
                <ul className="grid grid-cols-6 gap-3">
                  {sharedProducts.map((product, productIndex) => (
                    <li key={product.name} className={productIndex < 3 ? 'col-span-2' : 'col-span-3'}>
                      <Link href={product.href} aria-label={`${pack.title}: ${product.name} bilgilerini inceleyin`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-2 transition-colors hover:border-cyan-500 hover:bg-cyan-50/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 sm:p-3">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white">
                          <Image src={product.image} alt={product.alt} fill sizes="(min-width: 1024px) 190px, (min-width: 640px) 240px, 40vw" className="object-contain p-1" />
                        </div>
                        <span className="mt-3 flex flex-1 items-center justify-between gap-1 text-xs font-semibold leading-5 sm:text-sm">{product.name}<ArrowRight size={14} className="shrink-0 text-cyan-700" aria-hidden="true" /></span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="mb-4 text-sm leading-6 text-slate-600">Paketin model ve kapasitesini ihtiyacınıza göre belirleyelim. Detaylı bilgi için bizimle iletişime geçin.</p>
                  <a href={`https://wa.me/905323276293?text=${encodeURIComponent(`Merhaba, ${pack.title} için anahtar teslim çözümünüz hakkında detaylı bilgi almak istiyorum.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`${pack.title} hakkında WhatsApp ile bilgi alın (yeni sekmede açılır)`} className="flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#087f47] px-4 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#06653a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"><MessageCircle size={20} className="shrink-0" aria-hidden="true" />Paket hakkında bilgi alın<ArrowRight size={18} className="shrink-0" aria-hidden="true" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-300">Her iki pakette de kurulum ve devreye alma dahildir. Görseller ürün gruplarını gösterir; kullanılacak model, adet ve kapasite projenize göre belirlenir.</p>
        <div className="mt-12 border-t border-white/15 pt-10">
          <h3 className="text-2xl font-bold">Birlikte planlayalım, anahtar teslim tamamlayalım.</h3>
          <ol className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map(({ title, description, icon: Icon }, index) => <li key={title} className="border-l border-cyan-300/30 pl-5"><div className="mb-4 flex items-center gap-3 text-cyan-300"><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><span className="text-xs font-semibold tracking-widest">0{index + 1}</span></div><h4 className="text-base font-bold">{title}</h4><p className="mt-2 text-sm leading-7 text-slate-300">{description}</p></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
