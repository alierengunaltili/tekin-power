'use client';

import { useRef, useState, type FormEvent } from 'react';
import { ArrowRight, Droplets, RotateCcw, Zap, Leaf } from 'lucide-react';
import { pumpComparisons } from '@/data/pumpComparisons';
import type { PumpSavingsInput, PumpSavingsResult } from '@/types/pumpSavings';

const numberFormats = new Map<number, Intl.NumberFormat>();
const format = (value: number, digits = 0) => {
  let formatter = numberFormats.get(digits);
  if (!formatter) {
    formatter = new Intl.NumberFormat('tr-TR', { maximumFractionDigits: digits });
    numberFormats.set(digits, formatter);
  }
  return formatter.format(value);
};
const money = (value: number) => `${format(value)} TL`;
type Fields = Record<keyof PumpSavingsInput, string>;


function NumberField({ id, label, unit, value, onChange }: { id: keyof Fields; label: string; unit: string; value: string; onChange: (value: string) => void }) {
  return <div className="min-w-0">
    <label htmlFor={`savings-${id}`} className="mb-2 block text-sm font-semibold text-slate-700">{label}</label>
    <div className="flex items-center rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
      <input id={`savings-${id}`} type="number" inputMode="decimal" min="0.01" max="1000000" step="any" required value={value} onChange={e => onChange(e.target.value)} className="min-h-14 w-full min-w-0 rounded-xl bg-transparent px-4 text-2xl font-bold tabular-nums text-slate-900 outline-none" />
      <span className="shrink-0 pr-4 text-sm text-slate-500">{unit}</span>
    </div>
  </div>;
}

export default function PumpSavingsDashboard({ initialResult }: { initialResult: PumpSavingsResult }) {
  const [water, setWater] = useState(String(initialResult.input.water));
  const [capacity, setCapacity] = useState('1200');
  const [alternative, setAlternative] = useState('0');
  const [result, setResult] = useState<PumpSavingsResult | null>(initialResult);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const request = useRef<AbortController | null>(null);
  const revision = useRef(0);
  const group = pumpComparisons.find(item => item.id === capacity)!;
  const fields: Fields = { water, dewjetPower: String(Number.parseFloat(group.pump.power)), competitorPower: String(Number.parseFloat(group.alternatives[Number(alternative)].power)) };

  function invalidate() {
    revision.current += 1;
    request.current?.abort();
    setBusy(false); setResult(null); setError('');
  }
  function editWater(value: string) {
    invalidate(); setWater(value);
  }
  function chooseCapacity(id: string) {
    invalidate(); setCapacity(id); setAlternative('0');
  }
  function chooseAlternative(value: string) {
    invalidate(); setAlternative(value);
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    request.current?.abort();
    const controller = new AbortController(); request.current = controller;
    const thisRevision = ++revision.current;
    setBusy(true); setError(''); setResult(null);
    try {
      const response = await fetch('/api/pump-savings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ water: Number(fields.water), competitorPower: Number(fields.competitorPower), dewjetPower: Number(fields.dewjetPower) }), signal: controller.signal });
      const data = await response.json();
      if (thisRevision !== revision.current) return;
      if (!response.ok) throw new Error(data.error || 'Hesaplama tamamlanamadı.');
      setResult(data as PumpSavingsResult);
    } catch (cause) {
      if (controller.signal.aborted || thisRevision !== revision.current) return;
      setError(cause instanceof Error ? cause.message : 'Bağlantı kurulamadı. Tekrar deneyin.');
    } finally { if (thisRevision === revision.current) setBusy(false); }
  }
  function reset() {
    invalidate(); setWater(String(initialResult.input.water)); setCapacity('1200'); setAlternative('0'); setResult(initialResult);
  }
  const advantage = result ? result.savingsPercent >= 0 : true;
  const display = (value: number | undefined, unit: string, digits = 0) => value === undefined ? '—' : `${format(value, digits)} ${unit}`;

  return <section id="elektrik-tasarrufu" aria-labelledby="pump-savings-heading" className="scroll-mt-28 bg-slate-50 px-5 py-14 sm:px-8 sm:py-20">
    <div className="mx-auto max-w-6xl">
      <header className="mb-9 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">DEWJET · ENERJİ TASARRUFU</p>
        <h2 id="pump-savings-heading" className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">Aynı suyu tahliye edin.<br /><span className="text-blue-700">Enerji farkını görün.</span></h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">Pompanızı ve karşılaştırmak istediğiniz alternatifi seçin. Su miktarını girerek elektrik giderinizi, beş yıllık tasarrufunuzu ve karbon farkını görün.</p>
      </header>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_60px_-30px_rgba(15,23,42,0.25)]">
        <div className="grid lg:grid-cols-[1.45fr_1fr]">
          <form onSubmit={submit} className="min-w-0 p-5 sm:p-8">
            <h3 className="mb-5 flex items-center gap-3 text-lg font-bold text-slate-900"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-800">01</span>Karşılaştırmanızı oluşturun</h3>
            <div className="mb-5 grid gap-3 sm:grid-cols-2">
              <div><label htmlFor="savings-capacity" className="mb-2 block text-xs font-semibold text-slate-600">Pompa kapasite sınıfı</label><select id="savings-capacity" value={capacity} onChange={e => chooseCapacity(e.target.value)} className="min-h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 focus-visible:outline-blue-600"><option value="1200">1.200 ton/saat · DewJet 45 kW</option><option value="400">420 ton/saat · DewJet 20 kW</option></select></div>
              <div><label htmlFor="savings-alternative" className="mb-2 block text-xs font-semibold text-slate-600">Karşılaştırılacak pompa</label><select id="savings-alternative" value={alternative} onChange={e => chooseAlternative(e.target.value)} className="min-h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 focus-visible:outline-blue-600">{group.alternatives.map((row, index) => <option key={index} value={index}>Alternatif {index + 1} · {row.power}</option>)}</select></div>
            </div>
            <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-5"><div className="mb-3 flex items-center gap-2 text-xs font-semibold text-sky-800"><Droplets size={16} aria-hidden="true" />Her iki pompa için aynı su miktarı</div><NumberField id="water" label="Saatlik tahliye edilen su" unit="m³/saat" value={fields.water} onChange={editWater} /></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="min-w-0 rounded-2xl border border-cyan-200 bg-cyan-50/60 p-5"><p className="mb-4 text-xl font-extrabold text-sky-900">DewJet</p><p id="savings-dewjetPower-label" className="mb-2 text-sm font-semibold text-slate-700">DewJet çekilen güç</p><output id="savings-dewjetPower" aria-labelledby="savings-dewjetPower-label" className="flex min-h-14 items-center rounded-xl border border-slate-200 bg-white px-4 text-2xl font-bold tabular-nums text-slate-900">{fields.dewjetPower}<span className="ml-auto text-sm font-normal text-slate-500">kW</span></output></div>
              <div className="min-w-0 rounded-2xl border border-slate-200 p-5"><p className="mb-4 text-xl font-extrabold text-slate-700">Diğer pompa</p><p id="savings-competitorPower-label" className="mb-2 text-sm font-semibold text-slate-700">Rakip pompa çekilen güç</p><output id="savings-competitorPower" aria-labelledby="savings-competitorPower-label" className="flex min-h-14 items-center rounded-xl border border-slate-200 bg-white px-4 text-2xl font-bold tabular-nums text-slate-900">{fields.competitorPower}<span className="ml-auto text-sm font-normal text-slate-500">kW</span></output></div>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">Güç değerleri seçtiğiniz kapasite ve pompaya göre otomatik belirlenir. Yalnızca su miktarı elle girilebilir. Aynı basma yüksekliği ve uygulama koşullarındaki değerlerle karşılaştırın.</p>
            <div className="mt-5 flex flex-wrap gap-3"><button type="submit" disabled={busy} className="inline-flex min-h-12 flex-1 items-center justify-center gap-3 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 disabled:opacity-60">{busy ? 'Hesaplanıyor…' : 'Tasarrufu karşılaştır'}<ArrowRight size={18} aria-hidden="true" /></button><button type="button" onClick={reset} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-slate-300 px-4 text-sm font-semibold text-slate-600 hover:bg-slate-50"><RotateCcw size={16} aria-hidden="true" />Sıfırla</button></div>
            <p role="status" className={`mt-3 min-h-5 text-xs leading-5 ${error ? 'text-red-700' : 'text-slate-500'}`}>{error || (busy ? 'Değerleriniz hesaplanıyor.' : result ? 'Sonuçlar girilen değerlere göre güncel.' : 'Değerler değişti. Yeni sonuçlar için karşılaştırın.')}</p>
          </form>
          <aside aria-label="Tasarruf özeti" aria-busy={busy} className="relative min-w-0 overflow-hidden bg-[#0b213a] p-6 text-white sm:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[40px] border-cyan-300/5" />
            <div className="relative"><h3 className="flex items-center gap-3 text-lg font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-cyan-100">02</span>Tasarruf özetiniz</h3>
              <p className={`mt-9 flex items-center gap-2 text-sm font-medium ${advantage ? 'text-cyan-200' : 'text-amber-200'}`}><Zap size={18} aria-hidden="true" />{advantage ? 'Daha az elektrik tüketimi' : 'Daha fazla elektrik tüketimi'}</p>
              <p className="mt-2 break-words text-6xl font-bold tracking-tight sm:text-7xl">{result ? `%${format(Math.abs(result.savingsPercent), 1)}` : '—'}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{result ? `Saatte ${format(result.input.water)} m³ su için ${format(Math.abs(result.savedPower), 2)} kW ${advantage ? 'daha az' : 'daha fazla'} güç.` : 'Karşılaştırmayı tamamladığınızda sonuçlar burada görünecek.'}</p>
              <div className="mt-8 space-y-5 border-t border-white/15 pt-6">{initialResult.scenarios.map((scenario, i) => <div key={scenario.id}><p className="text-xs text-slate-300">{scenario.label} · Aylık {advantage ? 'tasarruf' : 'ek maliyet'}</p><p className={`mt-2 break-words text-3xl font-bold tabular-nums ${advantage ? 'text-cyan-200' : 'text-amber-200'}`}>{result ? money(Math.abs(result.scenarios[i].monthlySavings)) : '—'}</p></div>)}</div>
              <p className="mt-7 text-xs leading-5 text-slate-400">Tutarlar sabit tarife varsayımlarıyla hesaplanır. KDV hariçtir; güncel elektrik faturası teklifi değildir.</p>
            </div>
          </aside>
        </div>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">{initialResult.scenarios.map((base, index) => {
        const s = result?.scenarios[index];
        const maximum = s ? Math.max(s.competitorEnergy, s.dewjetEnergy) : 1;
        return <article key={base.id} className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">Çalışma senaryosu {index + 1}</p><h3 className="mt-2 text-xl font-bold text-slate-900">{base.label}</h3><p className="mt-2 text-xs text-slate-500">Ayda {format(base.daysPerMonth, 4)} gün · {format(base.hoursPerMonth, 4)} saat</p>
          <div className="mt-6 rounded-2xl bg-sky-50 p-5"><p className="text-xs font-semibold text-sky-800">5 yılda toplam {advantage ? 'elektrik tasarrufu' : 'ek elektrik maliyeti'}</p><p className="mt-2 break-words text-3xl font-bold text-blue-950">{s ? money(Math.abs(s.fiveYearSavings)) : '—'}</p></div>
          <p className="mb-4 mt-6 text-sm font-bold text-slate-800">Aylık elektrik tüketimi</p>
          {[{name:'DewJet', value:s?.dewjetEnergy, color:'bg-cyan-500'}, {name:'Diğer pompa', value:s?.competitorEnergy, color:'bg-slate-400'}].map(row => <div key={row.name} className="mt-4"><div className="mb-2 flex flex-wrap justify-between gap-2 text-xs text-slate-600"><span>{row.name}</span><span className="font-semibold">{display(row.value, 'kWh', 1)}</span></div><div className="h-3 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${row.color}`} style={{width: `${row.value === undefined ? 0 : row.value / maximum * 100}%`}} /></div></div>)}
          <dl className="mt-6 divide-y divide-slate-100 text-sm">{[['Diğer pompa aylık maliyeti', s ? money(s.competitorMonthlyCost) : '—'], ['DewJet aylık maliyeti', s ? money(s.dewjetMonthlyCost) : '—'], ['Aylık enerji farkı', display(s?.savedEnergy, 'kWh', 1)]].map(([label, value]) => <div key={label} className="flex flex-wrap justify-between gap-2 py-3"><dt className="text-slate-600">{label}</dt><dd className="font-semibold text-slate-900">{value}</dd></div>)}</dl>
          <div className="mt-3 rounded-xl bg-emerald-50 p-4 text-emerald-900"><p className="flex items-center gap-2 text-xs font-semibold"><Leaf size={16} aria-hidden="true" />{advantage ? 'Önlenen karbon emisyonu' : 'Ek karbon emisyonu'}</p><p className="mt-2 text-lg font-bold">{display(s ? Math.abs(s.yearlyCarbon) : undefined, 'ton CO₂e / yıl', 2)}</p><p className="mt-1 text-xs">5 yılda {display(s ? Math.abs(s.fiveYearCarbon) : undefined, 'ton CO₂e', 2)}</p></div>
        </article>;
      })}</div>
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="p-5 sm:px-7"><h3 className="text-lg font-bold text-slate-900">Tasarrufunuz yıllar içinde nasıl birikir?</h3><p className="mt-2 text-sm text-slate-500">İki çalışma senaryosunda yıl sonuna kadar biriken toplam elektrik maliyeti farkı.</p></div>
        <div role="region" aria-label="Beş yıllık birikimli tasarruf tablosu" tabIndex={0} className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm"><caption className="sr-only">Yıllara göre birikimli elektrik tasarrufu, TL</caption><thead className="bg-slate-100 text-slate-600"><tr><th scope="col" className="px-5 py-4">Yıl sonu</th><th scope="col" className="px-5 py-4 text-right">8 saat tek vardiya</th><th scope="col" className="px-5 py-4 text-right">24 saat sürekli</th></tr></thead><tbody className="divide-y divide-slate-100">{initialResult.annualIncreases.map((_, i) => <tr key={i} className={i === 4 ? 'bg-cyan-50 font-bold text-sky-900' : 'text-slate-700'}><th scope="row" className="px-5 py-4">{i + 1}. yıl</th>{[0,1].map(j => <td key={j} className="px-5 py-4 text-right tabular-nums">{result ? money(result.scenarios[j].years[i].cumulativeSavings) : '—'}</td>)}</tr>)}</tbody></table>
        </div>
      </div>
      <details className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
        <summary className="cursor-pointer font-semibold text-slate-800">Hesaplamanın sabit varsayımları</summary>
        <div className="mt-4 space-y-3 leading-6"><p>8 saatlik vardiya: ayda 22 gün, 176 saat; birim elektrik bedeli {format(initialResult.scenarios[0].tariff, 6)} TL/kWh. Sürekli çalışma: ayda 30,4167 gün, 730,0008 saat; tek zamanlı referans bedeli {format(initialResult.scenarios[1].tariff, 6)} TL/kWh.</p><p>Dağıtım bedeli ve %1 BTV dahildir, KDV hariçtir. Bunlar sağlanan hesaplama cetvelindeki sabit varsayımlardır; güncel tarife taahhüdü değildir.</p><p>Yıllık fiyat artışı varsayımları sırasıyla %29, %24, %18, %16 ve %12’dir. İlk yılın artışı ilk yıllık tutara uygulanır; sonraki artışlar birikimli ilerler. Aynı oranlar iki pompaya da uygulanır.</p><p>Karbon emisyon katsayısı {format(initialResult.emissionFactor, 3)} ton CO₂e/MWh’dir. Çalışma süresi ve güçlerin dönem boyunca sabit kaldığı varsayılır.</p><p>Su miktarı, 1.000 m³ başına enerji ihtiyacını değiştirir. Güçler ve çalışma saatleri sabitken aylık elektrik maliyeti değişmez. Girilen güçte belirtilen debinin sağlandığı varsayılır; bu araç pompa performans eğrisi değildir.</p></div>
      </details>
    </div>
  </section>;
}
