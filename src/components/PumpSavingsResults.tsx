import type { PumpSavingsResult } from '@/types/pumpSavings';
import { pumpInflation } from '@/data/pumpInflation';

const number = new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 });
const f = (n: number) => number.format(n);
const precise = (n: number) => new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 6 }).format(n);
export default function PumpSavingsResults({ result }: { result: PumpSavingsResult }) {
  const benefit = result.savedPower >= 0;
  return <div className="space-y-6">
    <div className="rounded-3xl bg-[#0b213a] p-6 text-white sm:p-8">
      <p className="text-sm text-cyan-200">DewJet ile {benefit ? 'daha az' : 'daha fazla'} elektrik tüketimi</p>
      <p className="mt-2 break-words text-5xl font-bold">%{f(Math.abs(result.savingsPercent))}</p>
      <p className="mt-4 text-sm leading-6 text-slate-200">Aynı saatlik {f(result.input.water)} m³ debi varsayımında DewJet: {f(result.input.dewjetPower)} kW · Diğer pompa: {f(result.input.competitorPower)} kW.</p>
      {!benefit && <p className="mt-3 text-sm text-amber-200">Girdiğiniz değerlere göre DewJet daha fazla enerji tüketiyor. Negatif farklar ek maliyeti ve ek emisyonu gösterir.</p>}
    </div>
    <div className="grid gap-6 lg:grid-cols-2">{result.scenarios.map(s => <article key={s.id} className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-bold text-slate-900">{s.label}</h2>
      <p className="mt-2 text-sm text-slate-500">{f(s.hoursPerMonth / s.daysPerMonth)} saat × {f(s.daysPerMonth)} gün = {f(s.hoursPerMonth)} saat/ay</p>
      <div className="my-5 rounded-2xl bg-cyan-50 p-5"><p className="text-sm text-sky-900">5 yılda {benefit ? 'tasarruf' : 'ek maliyet'}</p><p className="mt-2 break-words text-3xl font-bold text-sky-950">{f(Math.abs(s.fiveYearSavings))} TL</p></div>
      <dl className="divide-y divide-slate-100 text-sm">{[
        ['Birim elektrik bedeli', `${precise(s.tariff)} TL/kWh`],
        ['Diğer pompa · aylık tüketim', `${f(s.competitorEnergy)} kWh`],
        ['DewJet · aylık tüketim', `${f(s.dewjetEnergy)} kWh`],
        ['Diğer pompa · aylık gider', `${f(s.competitorMonthlyCost)} TL`],
        ['DewJet · aylık gider', `${f(s.dewjetMonthlyCost)} TL`],
        [`Aylık ${benefit ? 'tasarruf' : 'ek maliyet'}`, `${f(Math.abs(s.monthlySavings))} TL`],
        [`Yıllık ${benefit ? 'önlenen' : 'ek'} emisyon`, `${f(Math.abs(s.yearlyCarbon))} ton CO₂e`],
        [`5 yıllık ${benefit ? 'önlenen' : 'ek'} emisyon`, `${f(Math.abs(s.fiveYearCarbon))} ton CO₂e`],
      ].map(([label,value]) => <div key={label} className="flex flex-wrap justify-between gap-2 py-3"><dt className="text-slate-600">{label}</dt><dd className="break-words font-semibold text-slate-900">{value}</dd></div>)}</dl>
      <div className="mt-6 overflow-x-auto" role="region" aria-label={`${s.label} beş yıllık maliyet tablosu`} tabIndex={0}><table className="w-full min-w-[520px] text-right text-xs text-slate-800"><caption className="mb-3 text-left text-sm font-bold text-slate-900">Yıllık maliyet karşılaştırması (TL)</caption><thead className="bg-slate-100"><tr>{['Yıl','Diğer pompa','DewJet','Yıllık fark','Birikimli fark'].map(h => <th key={h} scope="col" className="p-3">{h}</th>)}</tr></thead><tbody>{s.years.map(y => <tr key={y.year} className="border-b border-slate-100"><th scope="row" className="p-3">{y.year}</th>{[y.competitorCost,y.dewjetCost,y.savings,y.cumulativeSavings].map((v,i) => <td key={i} className="p-3 tabular-nums">{f(v)}</td>)}</tr>)}</tbody></table></div>
    </article>)}</div>
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
      <h2 className="font-bold text-slate-900">Raporun dayandığı varsayımlar</h2>
      <p>KDV hariçtir. Girilen aktif enerji, dağıtım ve BTV bedelleri kullanılır. İki pompa aynı çalışma süresi ve saatlik su miktarıyla karşılaştırılır; gerçek debi için aynı basma yüksekliği ve uygulama koşulları esas alınmalıdır.</p>
      <h3 className="mt-5 font-bold text-slate-900">TCMB verileriyle 2026–2030 maliyet projeksiyonu</h3>
      <ul className="my-3 space-y-1">{pumpInflation.periods.map(p => <li key={p.year}><strong>{p.year}: %{f(p.rate * 100)}</strong> · {p.label}</li>)}</ul>
      <p>Kaynak: <a className="text-sky-700 underline" href={pumpInflation.url} target="_blank" rel="noopener noreferrer">{pumpInflation.source} ({pumpInflation.date})</a>.</p>
      <p>2030 için TCMB’nin %5 orta vadeli hedefi varsayım olarak kullanılır. Bu oranlar elektrik tarifesi tahmini değil, enflasyona bağlı maliyet senaryosudur. Girilen aylık gider baz alınır; 2026 oranı ilk 12 aylık tutara, sonraki oranlar birikimli ve iki pompaya eşit uygulanır. Yıllar senaryo dönemlerini gösterir; gerçekleşmiş gider değildir. Karbon katsayısı: {precise(result.emissionFactor)} ton CO₂e/MWh.</p>
      <p>Su miktarı değişirken güçler ve çalışma süreleri sabit kalırsa aylık gider değişmez. Sonuçlar girilen değerlere dayalı bir öngörüdür; satın alma, bakım ve finansman giderleri dahil değildir.</p>
    </div>
  </div>;
}
