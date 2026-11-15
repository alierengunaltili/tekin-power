import { pumps } from '@/data/pumps';

// User-supplied comparison, 2026-11-16. Competitor identities are deliberately
// omitted, including model identifiers. DewJet values use the current catalogue.
const comparisons = [
  {
    id: '1200', title: '1.200 Ton/Saat Kapasite Sınıfı', pump: pumps[1],
    alternatives: [
      { power: '250 kW', current: '≈ 800 A', weight: '1.200–1.500 kg' },
      { power: '315 kW', current: '≈ 1.000 A', weight: '1.450–1.800 kg' },
      { power: '200 kW', current: '≈ 700 A', weight: '1.100–1.350 kg' },
      { power: '355 kW', current: '≈ 1.300 A', weight: '1.600–2.100 kg' },
      { power: '315 kW', current: '≈ 1.000 A', weight: '1.500–1.900 kg' },
    ],
  },
  {
    id: '400', title: '400 Ton/Saat Kapasite Sınıfı', pump: pumps[0],
    alternatives: [
      { power: '55 kW', current: '≈ 105 A', weight: '≈ 680 kg' },
      { power: '45 kW', current: '≈ 85 A', weight: '≈ 420 kg' },
      { power: '45 kW', current: '≈ 85 A', weight: '≈ 390 kg' },
      { power: '75 kW', current: '≈ 140 A', weight: '≈ 850 kg' },
      { power: '92 kW', current: '≈ 175 A', weight: '≈ 1.100 kg' },
    ],
  },
];

const advantages = [
  { title: 'Hafif ve kolay taşınabilir', text: '20 kW model 25 kg, 45 kW model 55 kg. Kompakt gövdeler taşıma ve yerleşimi kolaylaştırır.' },
  { title: 'Demaraj gerektirmez', text: 'Sürücü kontrollü çalışma; her iki model de mevcut güce göre su pompalar.' },
  { title: 'Düşük güçle yüksek debi', text: '20 kW ile 420 m³/h, 45 kW ile 1.200 m³/h maksimum debi sunar.' },
  { title: 'Kolay montaj ve uyarlama', text: 'Mevcut platformlara uyarlanabilir; kompakt yapı kurulum alanının verimli kullanılmasını sağlar.' },
  { title: 'Sessiz çalışma, düşük bakım', text: 'Dişli kutusuz RIM Drive tasarımı mekanik parça sayısını azaltır; uzun ömürlü kullanım ve düşük bakım ihtiyacını destekler.' },
  { title: 'Zorlu su koşullarına uygun', text: 'Kirli su, çamur, taş, çakıl ve müsilaj transferine yönelik uygulamalarda kullanılabilir. Uygun model ve donanım, suyun niteliğine göre seçilir.' },
  { title: 'Yağsız tasarım', text: 'Yağ içermeyen yapı. Temiz su, gıda ve ilaç uygulamalarına uygunluk, malzeme ve sistem gereksinimleriyle birlikte değerlendirilir.' },
  { title: 'IP69 koruma sınıfı', text: 'Her iki modelde IP69 koruma sınıfı ve 2 yıl garanti.' },
];

export default function PumpComparison() {
  return (
    <section id="pompa-karsilastirma" aria-labelledby="pompa-karsilastirma-baslik" className="scroll-mt-36 bg-white px-5 pb-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-700">DewJet avantajları</p>
          <h2 id="pompa-karsilastirma-baslik" className="mt-3 text-2xl font-bold leading-snug text-blue-950 sm:text-4xl sm:leading-tight">İddialıyız! Dünyadaki rakiplerimizden yaklaşık 30 kat daha hafifiz, 5 kat daha az enerji harcıyoruz.</h2>
          <p className="mt-4 leading-7 text-slate-600">Endüstriyel pompa seçeneklerini güç, demaraj akımı ve ağırlık açısından karşılaştırın. DewJet modelleri mavi satırlarda öne çıkarılmıştır.</p>
        </header>

        <div className="space-y-8">
          {comparisons.map(({ id, title, pump, alternatives }) => (
            <div key={id} className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <div className="bg-blue-950 px-5 py-5 text-white sm:px-7">
                <h3 id={`karsilastirma-${id}`} className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-cyan-100">DewJet {pump.model} · {pump.power} · {pump.weight} · Maksimum {pump.flow}</p>
              </div>
              <p className="px-5 pt-4 text-xs text-slate-500 sm:hidden">Tüm sütunları görmek için tabloyu yana kaydırın.</p>
              <div role="region" aria-labelledby={`karsilastirma-${id}`} tabIndex={0} className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-sky-500">
                <table className="w-full min-w-[650px] text-left text-sm sm:text-base">
                  <caption className="sr-only">{title} endüstriyel pompa karşılaştırması</caption>
                  <thead className="bg-slate-100 text-slate-600">
                    <tr>
                      <th scope="col" className="px-5 py-4 sm:px-7">Üretici / Model</th>
                      <th scope="col" className="px-4 py-4">Motor Gücü</th>
                      <th scope="col" className="px-4 py-4">Demaraj Akımı</th>
                      <th scope="col" className="px-4 py-4">Yaklaşık Ağırlık</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {alternatives.map((row, index) => (
                      <tr key={index} className="even:bg-slate-50">
                        <th scope="row" className="px-5 py-4 font-medium text-slate-500 sm:px-7">
                          <span className="block text-xs">Alternatif {index + 1}</span>
                          <span aria-hidden="true" className="mt-1 inline-block select-none rounded bg-slate-200/60 text-slate-500 blur-[5px]">Marka ve model gizli</span>
                          <span className="sr-only">Marka ve model bilgisi gizlenmiştir</span>
                        </th>
                        <td className="whitespace-nowrap px-4 py-4 text-slate-600">{row.power}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-slate-600">{row.current}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-slate-600">{row.weight}</td>
                      </tr>
                    ))}
                    <tr className="bg-sky-50 text-blue-950">
                      <th scope="row" className="border-l-4 border-cyan-500 px-5 py-5 sm:px-6">
                        <span className="block text-lg font-extrabold">DEWJET</span>
                        <span className="mt-1 block text-xs font-semibold">{pump.model}</span>
                      </th>
                      <td className="whitespace-nowrap px-4 py-5 text-xl font-extrabold">{pump.power}</td>
                      <td className="px-4 py-5 font-bold">Gerektirmez<span className="mt-1 block text-xs font-normal">Sürücü kontrollü</span></td>
                      <td className="whitespace-nowrap px-4 py-5 text-xl font-extrabold">{pump.weight}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="border-t border-cyan-100 bg-sky-50 px-5 py-4 text-sm font-semibold leading-6 text-blue-900 sm:px-7">Demaraj gerektirmez. Mevcut güce göre su pompalar.</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-blue-950 p-6 text-white sm:p-8">
          <h3 className="text-2xl font-bold">Sahada DewJet farkı</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {advantages.map(({ title, text }) => (
              <div key={title} className="flex gap-3">
                <span aria-hidden="true" className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-blue-950">✓</span>
                <div><h4 className="font-bold text-cyan-100">{title}</h4><p className="mt-2 text-sm leading-6 text-blue-100">{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
