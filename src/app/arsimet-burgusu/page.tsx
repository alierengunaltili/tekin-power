import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUp, Check, Download, Gauge, MapPin, Waves, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/seo';
import { archimedesAlternatives, archimedesFaqs, archimedesSteps } from '@/data/archimedes';

export const metadata = pageMetadata(
  '/arsimet-burgusu',
  'Arşimet Burgusu ile Sudan Elektrik Üretimi | Tekin Power',
  'Kanal ve derelerde Arşimet burgusu ile elektrik üretimi. Çalışma prensibi, saha uygunluğu, türbin alternatifleri ve Tekin Power proje değerlendirmesi.',
);

const assets = '/arsimet-burgusu';
const brochure = `${assets}/tekin-power-arsimet-sunumu-2026.pdf`;
const contact = `https://wa.me/905323276293?text=${encodeURIComponent('Merhaba, Arşimet burgusu ve sudan elektrik üretimi için sahamızın değerlendirilmesi hakkında bilgi almak istiyorum.')}`;
const sectionLinks = [
  ['calisma-prensibi', 'Nasıl çalışır?'], ['saha-uygunlugu', 'Saha uygunluğu'],
  ['teknoloji-secimi', 'Teknoloji seçimi'], ['uretim-ornegi', 'Üretim örneği'], ['yol-haritasi', 'Proje adımları'],
];

function TechnicalFigure({ file, alt, width, height, caption }: { file: string; alt: string; width: number; height: number; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <a href={`${assets}/${file}`} target="_blank" rel="noopener noreferrer" aria-label={`${alt} — tam boy aç`} className="block p-3 focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-emerald-600 sm:p-6">
        <Image src={`${assets}/${file}`} alt={alt} width={width} height={height} unoptimized className="h-auto w-full object-contain" />
      </a>
      <figcaption className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-500">{caption} <span className="text-emerald-700">Görsele dokunarak büyütebilirsiniz.</span></figcaption>
    </figure>
  );
}

export default function ArsimetBurgusuPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 px-5 pb-16 pt-40 text-white sm:px-8 lg:pb-20 lg:pt-48">
          <div className="mx-auto max-w-6xl">
            <nav aria-label="Sayfa yolu" className="mb-9 flex flex-wrap gap-2 text-sm text-emerald-100/80">
              <Link href="/" className="hover:underline">Ana Sayfa</Link><span aria-hidden="true">/</span><span>Yenilenebilir Enerji</span>
            </nav>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Suyun akışından yenilenebilir enerji</p>
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">Arşimet Burgusu<span className="mt-3 block text-emerald-300">ile sudan elektrik.</span></h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">Kanal ve derelerdeki kot farkını enerjiye dönüştürün. Sahanızın su potansiyelini birlikte ölçelim, doğru teknolojiyi birlikte seçelim.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={contact} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 font-semibold text-emerald-950 transition-colors hover:bg-emerald-300">Sahanızı birlikte değerlendirelim <ArrowRight size={18} aria-hidden="true" /></a>
                  <a href={brochure} download className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3.5 font-semibold hover:bg-white/10"><Download size={18} aria-hidden="true" /> Sunumu indir</a>
                </div>
              </div>
              <figure className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                <Image src={`${assets}/burgu-konsepti-v1.jpg`} alt="Üst ve alt su havuzunu birbirine bağlayan Arşimet burgusu konsepti" width={891} height={504} priority unoptimized className="h-auto w-full p-4" />
                <figcaption className="flex items-center justify-between gap-4 border-t border-slate-100 px-6 py-4 text-sm text-slate-500"><span>Arşimet burgusu · Türbin uygulaması</span><span className="shrink-0 text-emerald-700">Temsili konsept</span></figcaption>
              </figure>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 lg:grid-cols-4">
              {[['1–6 m', 'Uygun kot aralığı'], ['%70–80', 'Verim aralığı'], ['20–40', 'Devir/dk · çapa bağlı'], ['22–30°', 'Burgu eğimi']].map(([value, label]) => (
                <div key={label}><p className="text-3xl font-bold text-white">{value}</p><p className="mt-2 text-sm text-emerald-100/80">{label}</p></div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-slate-300">Sunumdaki aralıklar ön tahmindir; kesin değerler saha ölçümleri ve üretici teklifiyle doğrulanır.</p>
          </div>
        </header>

        <nav aria-label="Sayfa bölümleri" className="border-b border-slate-200 bg-slate-50 px-5 py-5 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-3">{sectionLinks.map(([id, label]) => <a key={id} href={`#${id}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-emerald-500 hover:text-emerald-800">{label}</a>)}</div>
        </nav>

        <section id="calisma-prensibi" className="mx-auto max-w-6xl scroll-mt-36 px-5 py-16 sm:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">01 / Çalışma prensibi</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Yavaş bir dönüş. Sürekli bir enerji akışı.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">Su, burgu kanatları arasındaki ceplerde aşağı inerken ağırlığıyla mili döndürür. Bu mekanik hareket, jeneratör üzerinden elektrik enerjisine dönüşür.</p>
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <TechnicalFigure file="calisma-prensibi-v1.png" alt="Arşimet burgusunda su girişi, kanatlar, redüktör ve jeneratörün çalışma şeması" width={1399} height={839} caption="Üst su ile alt su arasındaki kot farkı, üretimin temel girdilerinden biridir." />
            <ol className="space-y-7">{[
              ['Su giriş yapar', 'Üst havuzdan gelen su eğik oluğa ve kanatlar arasındaki ceplere girer.'],
              ['Burgu döner', 'Aşağı doğru ilerleyen suyun ağırlığı, burgunun yavaşça dönmesini sağlar.'],
              ['Elektrik üretilir', 'Redüktör dönüş hızını artırır; jeneratör mekanik enerjiyi elektriğe çevirir.'],
            ].map(([title, text], index) => <li key={title} className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">{index + 1}</span><div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 leading-relaxed text-slate-600">{text}</p></div></li>)}</ol>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">Aynı prensip, iki farklı amaç</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Su taşımak mı,<br />elektrik üretmek mi?</h2>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-blue-100 bg-white p-6"><h3 className="flex items-center gap-2 text-xl font-semibold text-blue-800"><ArrowUp size={22} aria-hidden="true" /> Pompa uygulaması</h3><p className="mt-3 leading-relaxed text-slate-600">Enerji harcayarak suyu alt seviyeden üst seviyeye taşır.</p></div>
                <div className="rounded-2xl border border-emerald-200 bg-white p-6"><h3 className="flex items-center gap-2 text-xl font-semibold text-emerald-800"><ArrowDown size={22} aria-hidden="true" /> Türbin uygulaması</h3><p className="mt-3 leading-relaxed text-slate-600">Yukarıdan aşağı akan suyun enerjisini kullanarak elektrik üretir.</p></div>
              </div>
            </div>
            <TechnicalFigure file="pompa-turbin-v1.jpg" alt="Arşimet burgusunun pompa ve türbin olarak iki farklı kullanımında su yönleri" width={952} height={393} caption="Solda suyu yukarı taşıyan pompa, sağda aşağı akan sudan enerji üreten türbin. Temsili teknik konseptler." />
          </div>
        </section>

        <section id="saha-uygunlugu" className="mx-auto max-w-6xl scroll-mt-36 px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-3xl bg-slate-100">
              <Image src={`${assets}/tesis-konsepti-v1.jpg`} alt="Kanal üzerinde iki Arşimet burgusundan oluşan temsili enerji üretim tesisi" width={937} height={526} unoptimized className="h-auto w-full" />
              <figcaption className="px-5 py-4 text-sm text-slate-500">Sunumdaki temsili tesis konsepti.</figcaption>
            </figure>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">02 / Saha uygunluğu</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Debi kadar,<br />kot farkı da belirleyici.</h2>
              <p className="mt-5 leading-relaxed text-slate-600">Suyun miktarını, kullanılabilir düşü yüksekliğini ve yıl içindeki sürekliliğini birlikte değerlendiriyoruz.</p>
              <div className="mt-7 space-y-5">{[
                { icon: Gauge, title: 'Kullanılabilir net kot', text: 'Üst ve alt su seviyesi arasındaki gerçek fark ile hidrolik kayıplar.' },
                { icon: Waves, title: 'Yıl boyunca su', text: 'Debi-süre eğrisi, mevsimsel değişimler ve sulama sezonu.' },
                { icon: MapPin, title: 'Uygulanabilir yerleşim', text: 'Erişim, arazi, şebeke bağlantısı, su kullanımı ve çevresel koşullar.' },
              ].map(({icon: Icon, title, text}) => <div key={title} className="flex gap-4"><Icon size={24} className="mt-1 shrink-0 text-emerald-700" aria-hidden="true" /><div><h3 className="font-semibold">{title}</h3><p className="mt-1 leading-relaxed text-slate-600">{text}</p></div></div>)}</div>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8"><h3 className="text-xl font-semibold text-emerald-950">Sahaya göre birlikte planlayalım</h3><p className="mt-3 leading-relaxed text-emerald-900">Mevsimsel su azalması, çöp ve çökelti, sulama önceliği ve bağlantı koşulları üretimi etkiler. Debi kayıtları, bypass yerleşimi, uygun ızgara ve bakım planını ön değerlendirmeye dahil ediyoruz.</p></div>
        </section>

        <section id="teknoloji-secimi" className="scroll-mt-36 bg-slate-50 px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">03 / Teknoloji seçimi</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Her saha için aynı türbin değil,<br className="hidden sm:block" /> sahaya uygun çözüm.</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">Arşimet burgusunu alternatiflerle birlikte karşılaştırıyoruz. Kot farkı, su kalitesi, bakım ihtiyacı ve yerleşim koşulları seçimde birlikte ele alınır.</p>
            <div className="mt-9 overflow-x-auto rounded-2xl border border-slate-200 bg-white" role="region" aria-label="Türbin alternatifleri karşılaştırması" tabIndex={0}>
              <table className="w-full min-w-[700px] text-left text-sm">
                <caption className="sr-only">Sunuma göre ön değerlendirme aralıkları</caption>
                <thead className="bg-slate-900 text-white"><tr>{['Teknoloji', 'Uygun kot', 'Verim', 'Öne çıkan saha koşulu'].map(h => <th key={h} scope="col" className="px-5 py-4 font-semibold">{h}</th>)}</tr></thead>
                <tbody>{archimedesAlternatives.map(row => <tr key={row.name} className={`border-t border-slate-100 ${row.featured ? 'bg-emerald-50' : ''}`}><th scope="row" className="px-5 py-5 font-semibold text-slate-900">{row.name}</th><td className="whitespace-nowrap px-5 py-5">{row.head}</td><td className="whitespace-nowrap px-5 py-5">{row.efficiency}</td><td className="px-5 py-5 leading-relaxed text-slate-600">{row.fit}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">Bu değerler sunumdaki ön tahminlerdir; ürün garantisi veya kesin proje değeri değildir. Seçim, ölçüm ve üretici teklifleriyle netleştirilir.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-950 p-7 text-white"><p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">Düşük kot / bulanık su</p><h3 className="mt-3 text-xl font-semibold">Arşimet burgusu ön planda</h3><p className="mt-3 leading-relaxed text-emerald-50/85">Özellikle 3 m altındaki kotlarda burguyu değerlendirelim; uygun sahalarda VLH teklifiyle de karşılaştıralım.</p></div>
              <div className="rounded-2xl bg-slate-900 p-7 text-white"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Daha yüksek kot / boru hattı</p><h3 className="mt-3 text-xl font-semibold">Cross-flow alternatifini inceleyelim</h3><p className="mt-3 leading-relaxed text-slate-200">4 m ve üzeri kotta veya boru hattıyla yoğunlaşan düşüde cross-flow çözümünü karşılaştırmaya dahil edelim.</p></div>
            </div>
            <div className="mt-12 grid items-center gap-9 lg:grid-cols-2">
              <TechnicalFigure file="cross-flow-v1.png" alt="Cross-flow türbinde suyun çark kanatlarından iki kez geçişini gösteren teknik şema" width={1399} height={839} caption="Cross-flow türbinin çalışma prensibi." />
              <div><h3 className="text-2xl font-bold">Cross-flow nasıl çalışır?</h3><p className="mt-4 leading-relaxed text-slate-600">Kılavuz kanat gelen suyun debisini ayarlar. Su, çark kanatlarından ilk geçişini yapar; çarkın içinden ilerleyerek kanatları ikinci kez geçer. Mil hareketi jeneratöre aktarılır.</p><ul className="mt-5 space-y-3 text-slate-700">{['Yaklaşık 0,1–10 m³/s debi aralığı', '100–500 dev/dk dönüş hızı', 'Giriş ızgarası ve çökelti kontrolü ihtiyacı'].map(item => <li key={item} className="flex items-start gap-2"><Check size={18} className="mt-1 shrink-0 text-emerald-700" aria-hidden="true" />{item}</li>)}</ul><p className="mt-4 text-sm text-slate-500">Aralıklar sunumdaki ön değerlendirme verileridir.</p></div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Kanal yapısına göre iki yerleşim</h2>
          <p className="mb-8 mt-5 max-w-3xl leading-relaxed text-slate-600">Mevcut su kullanımını dikkate alan bir yerleşim planlarız. Burgu için düşü yapısına paralel bypass; cross-flow için kotu yoğunlaştıran boru hattı değerlendirilebilir.</p>
          <TechnicalFigure file="kurulum-v1.png" alt="Arşimet burgusu için bypass ve cross-flow için boru hattı yerleşimlerinin karşılaştırması" width={2400} height={840} caption="Temsili kurulum şemaları. Yerleşim ve ölçüler saha projesiyle belirlenir." />
          <div className="mt-6 grid gap-5 md:grid-cols-2"><p className="rounded-xl bg-slate-50 p-5 leading-relaxed text-slate-600"><strong className="text-slate-900">Burgu:</strong> Düşü yapısına paralel bir olukta çalışır; ana kanaldaki sulama akışı tasarımda korunur.</p><p className="rounded-xl bg-slate-50 p-5 leading-relaxed text-slate-600"><strong className="text-slate-900">Cross-flow:</strong> Boru hattı suyu türbine taşır; türbin çıkışı suyu kanala geri verir.</p></div>
        </section>

        <section id="uretim-ornegi" className="scroll-mt-36 bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">04 / Örnek üretim senaryosu</p>
            <div className="mt-3 grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]"><div><h2 className="text-3xl font-bold sm:text-4xl">Gücü kot ve debi,<br />yıllık enerjiyi süre belirler.</h2><p className="mt-5 max-w-xl leading-relaxed text-slate-300">Sunumdaki örnek; 1,5 m³/s debi, 2,5 m net kot ve %75 toplam verim varsayımına dayanır.</p></div><div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-7"><p className="flex items-center gap-2 text-sm text-emerald-200"><Zap size={18} aria-hidden="true" /> Örnek elektrik gücü</p><p className="mt-3 text-5xl font-bold text-emerald-300">27,6 <span className="text-2xl">kW</span></p></div></div>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">{[['3.000', '83'], ['4.000', '110'], ['5.000', '138']].map(([hours,energy]) => <div key={hours} className="rounded-2xl border border-white/15 bg-white/5 p-6"><p className="text-sm text-slate-300">{hours} saat/yıl eşdeğer tam yük</p><p className="mt-4 text-3xl font-bold">≈ {energy} <span className="text-lg font-medium text-slate-300">MWh/yıl</span></p></div>)}</div>
            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-slate-400">Tamamen örnek senaryodur; üretim veya geri ödeme garantisi değildir. Yıllık üretim için debi-süre eğrisini doğrular, yatırım değerlendirmesini saha verileri ve güncel tekliflerle yaparız.</p>
          </div>
        </section>

        <section id="yol-haritasi" className="mx-auto max-w-6xl scroll-mt-36 px-5 py-16 sm:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">05 / Birlikte ilerleyelim</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Önce ölçelim.<br />Sonra birlikte karar verelim.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{archimedesSteps.map((step,i) => <article key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="text-3xl font-bold text-emerald-700">0{i+1}</span><h3 className="mt-5 text-lg font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{step.text}</p></article>)}</div>
          <div className="mt-14 grid gap-8 rounded-3xl bg-emerald-950 p-7 text-white sm:p-10 lg:grid-cols-[1.2fr_1fr]">
            <div><h3 className="text-2xl font-bold sm:text-3xl">Sahanızın potansiyelini konuşalım.</h3><p className="mt-4 leading-relaxed text-emerald-50/80">Mevcut bilgilerinizi paylaşın; ihtiyacınızı, saha koşullarını ve uygun çözüm seçeneklerini Tekin Power ekibiyle birlikte değerlendirelim.</p><a href={contact} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 font-semibold text-emerald-950 hover:bg-emerald-50">WhatsApp’tan bilgi alın <ArrowRight size={18} aria-hidden="true" /></a></div>
            <ul className="space-y-3 text-sm leading-relaxed text-emerald-50">{['Konum, yapı planı ve saha fotoğrafları', 'Varsa kot ölçümü ve yıl içi debi kayıtları', 'Su taşıma veya elektrik üretimi hedefi', 'Şebeke noktası ve enerji tüketim bilgileri', 'Su bulanıklığı, çöp ve çökelti durumu'].map(item => <li key={item} className="flex gap-3"><Check size={18} className="mt-0.5 shrink-0 text-emerald-300" aria-hidden="true" />{item}</li>)}</ul>
          </div>
        </section>

        <section className="bg-slate-50 px-5 pb-24 pt-14 sm:px-8">
          <div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold">Sık sorulan sorular</h2><div className="mt-8 space-y-3">{archimedesFaqs.map(item => <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><summary className="cursor-pointer font-semibold leading-relaxed">{item.question}</summary><p className="mt-4 max-w-4xl leading-relaxed text-slate-600">{item.answer}</p></details>)}</div>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-slate-200 pt-8"><div><h3 className="font-semibold">Arşimet Burgusu ve Alternatifler Sunumu</h3><p className="mt-2 text-sm text-slate-500">Tekin Power · Kasım 2026 · 14 sayfa</p></div><a href={brochure} download className="inline-flex items-center gap-2 rounded-xl border border-emerald-700 px-5 py-3 font-semibold text-emerald-800 hover:bg-emerald-50"><Download size={18} aria-hidden="true" /> PDF’yi indir</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
