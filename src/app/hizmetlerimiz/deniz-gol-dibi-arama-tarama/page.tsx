import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, Download, Waves, ScanLine, Ship, Wrench, Compass, BatteryCharging, Phone, Mail, FileText, Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/seo';
import { dredgingCatalog, dredgingEquipment, dredgingProcess, dredgingReferences, dredgingServices } from '@/data/dredging';

export const metadata = pageMetadata(
  '/hizmetlerimiz/deniz-gol-dibi-arama-tarama',
  'Deniz ve Göl Dibi Tarama, Dip Temizleme Sistemleri | Tekin Power',
  'Batimetrik ölçüm, dip temizleme, tarama gemisi imalatı, split mavna ve bakım çözümleri. Yütek Denizcilik tecrübesiyle Tekin Power ürün ve referans kataloğu.',
);

const serviceIcons = [ScanLine, Ship, Waves, Wrench, Compass, BatteryCharging];
const container = 'mx-auto max-w-7xl px-5 sm:px-8';
const sectionLabel = 'text-xs font-bold uppercase tracking-[0.22em] text-cyan-700';

export default function UnderwaterSearchPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[#071d32] pb-12 pt-36 text-white sm:pt-44 lg:pb-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-12 h-[650px] w-[650px] rounded-full border border-cyan-300/10 shadow-[0_0_0_80px_#67e8f906,0_0_0_160px_#67e8f904]" />
          <div className={`${container} relative`}>
            <nav aria-label="Sayfa yolu" className="mb-10 flex gap-3 text-xs text-slate-300">
              <Link href="/" className="hover:text-cyan-300">Ana Sayfa</Link><span>/</span><Link href="/hizmetlerimiz" className="hover:text-cyan-300">Hizmetlerimiz</Link><span>/</span><span>Su Altı Tarama</span>
            </nav>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
              <div>
                <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300"><span className="h-px w-8 bg-amber-400" />Su altı tarama ve dip temizleme</p>
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[58px]">Deniz ve göl dibi<br /><span className="text-cyan-300">arama &amp; tarama</span></h1>
                <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">Dip haritasından tarama makinasına, çamur tahliyesinden bakıma. Dere, göl, baraj, liman ve deniz yatakları için sahaya özel çözümler.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#ekipmanlar" className="inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-[#071d32] transition-colors hover:bg-cyan-200">Ekipmanları keşfedin <ArrowDown size={17} /></a>
                  <a href={dredgingCatalog} download className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3.5 font-semibold transition-colors hover:bg-white/10"><Download size={17} /> Kataloğu indir</a>
                </div>
                <p className="mt-8 text-sm text-slate-300">Tekin Power <span className="mx-2 text-cyan-500">/</span> Yütek Denizcilik tecrübesiyle</p>
              </div>
              <figure className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-800 shadow-2xl">
                <Image src="/deniz-gol-tarama/kesici-emici.jpg" alt="Limandaki kırmızı kesici başlıklı kesici emici tarama gemisi" width={1354} height={899} priority sizes="(min-width: 1024px) 600px, 100vw" className="h-auto w-full" />
                <figcaption className="flex items-center justify-between gap-4 bg-[#0c2b45] px-5 py-5"><div><p className="text-xs uppercase tracking-widest text-cyan-300">İmalat tecrübesi</p><p className="mt-1 font-semibold">Kesici emici tarama gemisi</p></div><Ship className="shrink-0 text-cyan-300" size={26} /></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <nav aria-label="Tarama sayfası bölümleri" className="border-b border-slate-200 bg-slate-50">
          <div className={`${container} flex flex-wrap gap-x-7 gap-y-1 py-4 text-sm font-semibold text-slate-600`}>
            {[['Çözümlerimiz', 'cozumler'], ['Ekipmanlar', 'ekipmanlar'], ['Çalışma süreci', 'surec'], ['Referanslar', 'referanslar'], ['Katalog & iletişim', 'katalog']].map(([label, id]) => <a key={id} href={`#${id}`} className="py-2 transition-colors hover:text-cyan-700">{label}</a>)}
          </div>
        </nav>

        <section id="cozumler" className={`${container} scroll-mt-40 py-16 sm:py-24`}>
          <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
            <div><p className={sectionLabel}>Ölçüm · İmalat · Hizmet</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Suyun altında başlayan,<br />uçtan uca devam eden çözüm.</h2></div>
            <p className="max-w-lg leading-8 text-slate-600 lg:justify-self-end">Sahanızın ihtiyaçlarını belirliyor, uygun ekipmanı ve operasyonu birlikte planlıyoruz. Tekin Power’ın enerji çözümlerini Yütek Denizcilik’in gemi inşa ve tarama tecrübesiyle birleştiriyoruz.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dredgingServices.map((service, index) => { const Icon = serviceIcons[index]; return (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-7">
                <Icon className="mb-6 text-cyan-700" size={29} strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-xl font-bold">{service.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
              </article>
            ); })}
          </div>
        </section>

        <section id="ekipmanlar" className="scroll-mt-40 bg-[#eef4f7] py-16 sm:py-24">
          <div className={container}>
            <p className={sectionLabel}>Ekipman portföyü</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-6"><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Her saha için<br />doğru tarama sistemi.</h2><a href="#tarama-iletisim" className="inline-flex items-center gap-2 font-semibold text-cyan-800">Projenizi birlikte değerlendirelim <ArrowRight size={18} /></a></div>
            <p className="mb-9 mt-6 max-w-3xl text-sm leading-7 text-slate-600">Aşağıdaki teknik değerler, tamamlanan referans projelerdeki ekipmanlara aittir. Yeni imalat ve saha uygulamalarını derinlik, zemin yapısı ve ihtiyaç duyulan kapasiteye göre projelendiriyoruz.</p>
            <div className="grid items-start gap-6 lg:grid-cols-2">
              {dredgingEquipment.map((equipment, index) => (
                <article id={equipment.id} key={equipment.id} className="scroll-mt-40 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                  <div className="relative aspect-[16/10] bg-[#dfe9ef]">
                    <Image src={`/deniz-gol-tarama/${equipment.image}`} alt={equipment.title} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-contain" />
                    <span className="absolute left-4 top-4 rounded-full bg-[#071d32] px-3 py-1.5 text-xs font-semibold text-white">0{index + 1} / {equipment.category}</span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-bold tracking-tight">{equipment.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{equipment.description}</p>
                    <dl className="mt-6 grid grid-cols-1 gap-4 border-y border-slate-200 py-6 min-[380px]:grid-cols-3">
                      {equipment.stats.map(stat => <div key={stat.label}><dt className="text-xs leading-5 text-slate-500">{stat.label}</dt><dd className="mt-1 text-xl font-bold tracking-tight text-cyan-800 sm:text-2xl">{stat.value}</dd></div>)}
                    </dl>
                    <details className="group mt-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded py-2 text-sm font-semibold text-slate-800 [&::-webkit-details-marker]:hidden">Teknik detaylar ve proje bilgisi <Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
                      <dl className="mt-3 divide-y divide-slate-200 rounded-xl bg-slate-50 px-4">
                        {equipment.details.map(([label, value]) => <div key={label} className="grid grid-cols-2 gap-4 py-3 text-sm"><dt className="text-slate-500">{label}</dt><dd className="font-medium">{value}</dd></div>)}
                      </dl>
                      <p className="mt-4 border-l-2 border-amber-400 pl-4 text-sm leading-6 text-slate-600">{equipment.reference}</p>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="surec" className="scroll-mt-40 bg-[#071d32] py-16 text-white sm:py-24">
          <div className={container}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Sahadan servise</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Tek bir süreç. Birlikte çalışan çözümler.</h2>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {dredgingProcess.map(([title, text], index) => <li key={title} className="border-t border-white/20 pt-6"><span className="text-3xl font-light text-cyan-300">0{index + 1}</span><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p></li>)}
            </ol>
          </div>
        </section>

        <section id="referanslar" className={`${container} scroll-mt-40 py-16 sm:py-24`}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className={sectionLabel}>Yütek Denizcilik tecrübesiyle</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Sahada karşılığı<br />olan birikim.</h2><p className="mt-6 text-base leading-8 text-slate-600">2001 yılında İzmir’de kurulan grup firmamız Yütek Denizcilik; gemi inşa, bakım, onarım ve tarama projelerinde faaliyet gösterir. Bu sayfadaki imalat ve proje referansları Yütek Denizcilik’in tecrübesine dayanır.</p><p className="mt-5 text-sm leading-7 text-slate-500">Tarama gemilerinden Mogan Gölü dip temizliğine, split mavnalardan amfibi araç bakımına uzanan bir çalışma alanı.</p></div>
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {dredgingReferences.map(([year, title, detail]) => <article key={year} className="border-l-2 border-cyan-200 pl-5"><p className="text-sm font-bold text-cyan-700">{year}</p><h3 className="mt-2 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p></article>)}
            </div>
          </div>
          <article className="mt-14 grid overflow-hidden rounded-3xl bg-slate-50 md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-64"><Image src="/deniz-gol-tarama/yuzer-havuz.jpg" alt="Yütek Denizcilik 3.000 tonluk denizaltı yüzer havuzu" fill sizes="(min-width: 768px) 480px, 100vw" className="object-contain" /></div>
            <div className="p-7 sm:p-10"><p className={sectionLabel}>Özel denizcilik projesi · 2023</p><h3 className="mt-4 text-2xl font-bold">3.000 tonluk denizaltı yüzer havuzu</h3><p className="mt-4 text-sm leading-7 text-slate-600">Yütek Denizcilik’in özel proje tecrübesi: Deniz Kuvvetleri Komutanlığı, NATO ve ASFAT A.Ş. ortaklığıyla gerçekleştirilen yüzer havuz projesi.</p><div className="mt-6 flex flex-wrap gap-6 text-sm"><span><strong className="block text-2xl text-cyan-800">3.000 ton</strong>Kaldırma kapasitesi</span><span><strong className="block text-2xl text-cyan-800">90 m</strong>Havuz boyu</span><span><strong className="block text-2xl text-cyan-800">19,90 m</strong>Derinlik</span></div></div>
          </article>
        </section>

        <section id="katalog" className="scroll-mt-40 border-y border-slate-200 bg-slate-50 py-14">
          <div className={`${container} grid items-center gap-8 md:grid-cols-[1fr_auto]`}>
            <div className="flex items-start gap-5"><div className="rounded-2xl bg-cyan-100 p-4 text-cyan-800"><FileText size={32} /></div><div><p className={sectionLabel}>Ürün ve referans kataloğu · 2026</p><h2 className="mt-3 text-2xl font-bold">Tüm detaylar tek dosyada.</h2><p className="mt-3 text-sm leading-7 text-slate-600">Teknik tablolar, ekipman görselleri ve referans projeler.<br />16 sayfa · PDF · 1,8 MB</p></div></div>
            <div className="flex flex-col gap-3"><a href={dredgingCatalog} download className="inline-flex items-center justify-center gap-3 rounded-full bg-[#071d32] px-7 py-4 font-semibold text-white hover:bg-cyan-900"><Download size={19} /> Kataloğu indir (PDF)</a><a href={dredgingCatalog} target="_blank" rel="noopener noreferrer" className="py-2 text-center text-sm font-semibold text-cyan-800 underline underline-offset-4">Kataloğu yeni sekmede incele</a></div>
          </div>
        </section>

        <section id="tarama-iletisim" className={`${container} scroll-mt-40 py-16 sm:py-24`}>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className={sectionLabel}>Projenizi konuşalım</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Sahanıza uygun çözümü<br />birlikte planlayalım.</h2><p className="mt-5 max-w-2xl leading-8 text-slate-600">Çalışma alanınızı ve tarama ihtiyacınızı ekibimizle paylaşın. Ölçüm, ekipman seçimi, imalat ve saha hizmetlerini projenize göre değerlendirelim.</p></div><div className="flex flex-col gap-3"><a href="tel:+905323276293" className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-700 px-7 py-4 font-semibold text-white hover:bg-cyan-800"><Phone size={18} /> +90 (532) 327 62 93</a><a href="mailto:info@tekinpower.com?subject=Su%20alt%C4%B1%20tarama%20projesi" className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 px-7 py-4 font-semibold hover:bg-slate-50"><Mail size={18} /> info@tekinpower.com</a></div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

