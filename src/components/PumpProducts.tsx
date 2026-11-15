import Image from 'next/image';
import { pumps } from '@/data/pumps';

export default function PumpProducts() {
  return (
    <section aria-labelledby="pompa-one-cikanlar" className="px-5 pb-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-blue-950 to-slate-950 p-6 text-white sm:p-10 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">DewJet RIM Drive • Elektrikli su pompası</p>
          <h2 id="pompa-one-cikanlar" className="mt-5 scroll-mt-40 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
            <span className="mb-3 block text-base font-medium leading-6 tracking-normal text-blue-100 sm:text-xl">Eşdeğer güç ve performans sınıfında</span>
            DÜNYANIN<br className="hidden sm:block" /> EN HAFİF POMPASI
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">RIM Drive tasarımı, yüksek debiyi kompakt bir elektrikli pompa gövdesinde buluşturur. Her iki model de demaraj gerektirmez ve mevcut güce göre su pompalar.</p>
          </div>
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {pumps.map((pump) => (
              <a key={pump.model} href={`#${pump.model.toLowerCase()}`} aria-label={`${pump.displayName}, ${pump.power}, ${pump.weight} — ürün detayları`} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/25 bg-slate-950/40 transition-colors hover:border-cyan-200/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
                <div className="flex flex-1 items-center justify-center bg-slate-950/40 p-2">
                  <Image src={pump.poster} alt={`${pump.displayName}: ${pump.power} ${pump.weight} ${pump.model} elektrikli su pompası`} width={pump.posterWidth} height={pump.posterHeight} sizes="(max-width: 639px) 280px, (max-width: 1023px) 280px, 260px" className="h-auto max-h-[350px] w-full max-w-[309px] object-contain" />
                </div>
                <div className="border-t border-white/15 p-4">
                  <span className="block text-base font-semibold text-white">{pump.displayName}</span>
                  <span className="mt-1 block text-xs leading-5 text-cyan-200">{pump.model} · {pump.power}</span>
                  <span className="mt-3 block text-4xl font-bold">{pump.weight}</span>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm text-blue-100">Ürün detayları <span aria-hidden="true">↗</span></span>
                </div>
              </a>
            ))}
          </div>
          </div>
        </div>

        <div id="pompa-modelleri" className="mt-14 scroll-mt-40">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">20 ve 45 kW elektrikli pompa modelleri</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">Güç, ağırlık ve çalışma ihtiyacını birlikte karşılaştırın. Her iki model de RIM Drive elektrikli teknoloji, 96 V veya 380 V besleme seçenekleri ve IP69 koruma sınıfıyla sunulur.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {pumps.map((pump) => (
              <article id={pump.model.toLowerCase()} key={pump.model} className="min-w-0 scroll-mt-40 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <a href={pump.image} target="_blank" rel="noopener noreferrer" aria-label={`${pump.displayName} dört açıdan ürün görselini büyüt (yeni sekme)`} className="block bg-[#161616] p-3 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 sm:p-4">
                  <Image src={pump.image} alt={`${pump.model} ${pump.power} ${pump.weight} DewJet pompanın ön, arka, sol yan ve sağ yan görünümü`} width={pump.width} height={pump.height} sizes="(max-width: 1023px) 90vw, 540px" className="aspect-[3/1] w-full object-contain" />
                  <span className="mt-2 block text-right text-xs leading-6 text-slate-200">Görseli büyüt <span aria-hidden="true">↗</span></span>
                </a>
                <div className="p-5 sm:p-8">
                  <p className="font-semibold text-blue-700">{pump.power} • {pump.weight}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">{pump.model}</h3>
                  <div className="mt-5 rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-800">Maksimum debi</p>
                    <p className="mt-2 text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl">{pump.flow}</p>
                    <p className="mt-3 text-base leading-7 text-slate-700">
                      Sadece <strong className="font-extrabold text-blue-950">{pump.weight}</strong> ağırlıkla,<br />
                      <strong className="font-extrabold text-blue-950">{pump.power}</strong> güç harcayarak.
                    </p>
                  </div>
                  <dl className="mt-5 divide-y divide-slate-200 text-sm sm:text-base">
                    {[
                      ['Motor gücü', pump.power], ['Ağırlık', pump.weight], ['Maksimum debi', pump.flow],
                      ['Demaraj', 'Gerektirmez'], ['Güce göre çalışma', 'Mevcut güce göre su pompalar'],
                      ['Basma yüksekliği', pump.head], ['Maksimum devir', pump.speed],
                      ['Besleme seçenekleri', pump.supply], ['Koruma sınıfı', 'IP69'],
                      ['Ölçüler (en × boy × yükseklik)', pump.dimensions], ['Garanti süresi', '2 yıl'],
                    ].map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3 py-3">
                        <dt className="text-slate-600">{label}</dt>
                        <dd className="text-right font-semibold text-slate-900">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href={`https://wa.me/905323276293?text=${encodeURIComponent(`Merhaba, ${pump.model} (${pump.power}) elektrikli su pompası için bilgi ve teklif almak istiyorum.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`${pump.model} için WhatsApp üzerinden teklif isteyin (yeni sekmede açılır)`} className="mt-6 inline-flex rounded-xl bg-blue-900 px-5 py-3 font-semibold text-white hover:bg-blue-800">Bu model için teklif isteyin</a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-600">Maksimum debi ile belirtilen basma yüksekliği, aynı çalışma noktasında birlikte sağlanan değerler olarak yorumlanmamalıdır. Seçim için uygulamanızın debi ve basınç ihtiyacını paylaşın.</p>
        </div>
      </div>
    </section>
  );
}
