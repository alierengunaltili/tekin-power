'use client';

import { useRef, useState, type FormEvent } from 'react';
import { Download, Calculator, RotateCcw } from 'lucide-react';
import type { PumpDetailInput, PumpSavingsResult } from '@/types/pumpSavings';
import PumpSavingsResults from './PumpSavingsResults';

function Field({ label, unit, value, max, min = 0, change }: { label: string; unit: string; value: number; max: number; min?: number; change: (n: number) => void }) {
  return <label className="block min-w-0 text-sm font-medium text-slate-700"><span className="mb-2 block">{label} <span className="font-normal text-slate-500">({unit})</span></span><input type="number" inputMode="decimal" required min={min} max={max} step="any" value={Number.isNaN(value) ? '' : value} onChange={e => change(e.target.value === '' ? NaN : Number(e.target.value))} className="min-h-12 w-full min-w-0 rounded-xl border border-amber-300 bg-amber-50 px-3 font-semibold text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" /></label>;
}

export default function PumpSavingsDetail({ initialInput, initialResult }: { initialInput: PumpDetailInput; initialResult: PumpSavingsResult }) {
  const [input, setInput] = useState(initialInput);
  const [result, setResult] = useState<PumpSavingsResult | null>(initialResult);
  const [company, setCompany] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const request = useRef<AbortController | null>(null);
  const revision = useRef(0);
  const section = 'rounded-3xl border border-slate-200 bg-white p-5 sm:p-8';
  function edit(next: PumpDetailInput) {
    request.current?.abort(); revision.current++; setBusy(false); setResult(null); setMessage('Değerler değişti. Güncel sonuçlar için hesaplayın.'); setInput(next);
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const pdf = (event.nativeEvent as SubmitEvent).submitter?.getAttribute('value') === 'pdf';
    request.current?.abort(); const controller = new AbortController(); request.current = controller;
    const version = ++revision.current; setBusy(true); setMessage('');
    try {
      const response = await fetch('/api/pump-savings/detail', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ input, company, format:pdf?'pdf':'json' }), signal:controller.signal });
      if (!response.ok) { const data = await response.json(); throw new Error(data.error || 'İşlem tamamlanamadı.'); }
      if (pdf) {
        const blob = await response.blob(); if (revision.current !== version) return;
        const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = 'Tekin-Power-Enerji-Tasarruf-Raporu.pdf'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 60000);
        setMessage('PDF raporunuz hazırlandı. İndirilenler klasörünüzden açabilirsiniz.');
      } else { const data = await response.json(); if (revision.current !== version) return; setResult(data); setMessage('Sonuçlar girdiğiniz değerlere göre güncellendi.'); }
    } catch (error) { if (!controller.signal.aborted && revision.current === version) setMessage(error instanceof Error ? error.message : 'Bağlantı kurulamadı.'); }
    finally { if (revision.current === version) setBusy(false); }
  }
  return <div className="space-y-8">
    <form onSubmit={submit} className="space-y-6">
      <section className={section}><h2 className="text-xl font-bold text-slate-900">01 · Pompa ve su bilgileri</h2><p className="mt-2 text-sm leading-6 text-slate-600">(Saatte tahliye edilen su miktarını esas alınız.) Sarı kutuları firmanızın değerlerine göre değiştirebilirsiniz.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Saatlik tahliye edilen su" unit="m³/saat" value={input.pump.water} min={0.01} max={1000000} change={water => edit({...input,pump:{...input.pump,water}})} />
          <label className="block min-w-0 text-sm font-medium text-slate-700"><span className="mb-2 block">DewJet pompa gücü</span><select value={input.pump.dewjetPower} onChange={e => edit({...input,pump:{...input.pump,dewjetPower:Number(e.target.value)}})} className="min-h-12 w-full min-w-0 rounded-xl border border-amber-300 bg-amber-50 px-3 font-semibold text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"><option value={20}>DEWJET 20 kW</option><option value={45}>DEWJET 45 kW</option></select></label>
          <Field label="Diğer pompa çekilen güç" unit="kW" value={input.pump.competitorPower} min={0.01} max={1000000} change={competitorPower => edit({...input,pump:{...input.pump,competitorPower}})} />
          <Field label="Karbon emisyon katsayısı" unit="ton CO₂e/MWh" value={input.emissionFactor} max={10} change={emissionFactor => edit({...input,emissionFactor})} />
        </div>
      </section>
      <section className={section}><h2 className="text-xl font-bold text-slate-900">02 · Firmanızın elektrik tarifesi</h2><p className="mt-2 text-sm leading-6 text-slate-600">Faturanızdaki KDV hariç bedelleri girin. Çok zamanlı planda gündüz, puant ve gece; tek zamanlı planda referans tarifesi kullanılır.</p>
        <div className="mt-6 space-y-6">{['Gündüz · 06.00–17.00','Puant · 17.00–22.00','Gece · 22.00–06.00','Tek zamanlı · 24 saat'].map((label,i) => <fieldset key={label} className="rounded-2xl bg-slate-50 p-4"><legend className="px-2 text-sm font-bold text-sky-900">{label}</legend><div className="grid gap-4 sm:grid-cols-3">{(['active','distribution','tax'] as const).map((key,j) => <Field key={key} label={['Aktif enerji','Dağıtım bedeli','BTV oranı'][j]} unit={j===2?'%':'TL/kWh'} value={input.tariffs[i][key]*(j===2?100:1)} max={j===2?100:1000} change={n => edit({...input,tariffs:input.tariffs.map((t,k) => k===i?{...t,[key]:n/(j===2?100:1)}:t)})} />)}</div></fieldset>)}</div>
      </section>
      <section className={section}><h2 className="text-xl font-bold text-slate-900">03 · İki çalışma planını karşılaştırın</h2><p className="mt-2 text-sm leading-6 text-slate-600">Her planda iki pompa da aynı süre çalışır. Başlangıç değerleri tek vardiya ve sürekli çalışma örnekleridir.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">{input.schedules.map((s,i) => <fieldset key={i} className="min-w-0 rounded-2xl border border-slate-200 p-4"><legend className="px-2 font-bold text-sky-900">Çalışma planı {i+1}</legend>
          <label className="block text-sm font-semibold text-slate-700">Uygulanacak tarife<select value={s.mode} onChange={e => edit({...input,schedules:input.schedules.map((v,k)=>k===i?{...v,mode:e.target.value as 'timed'|'single'}:v)})} className="mb-5 mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3"><option value="timed">Çok zamanlı · saatlere göre</option><option value="single">Tek zamanlı · referans tarife</option></select></label>
          <div className="grid gap-4 sm:grid-cols-2">{(['day','peak','night','days'] as const).map((key,j) => <Field key={key} label={['Gündüz çalışması','Puant çalışması','Gece çalışması','Aylık çalışma'][j]} unit={j===3?'gün/ay':'saat/gün'} min={j===3?0.01:0} max={[11,5,8,31][j]} value={s[key]} change={n => edit({...input,schedules:input.schedules.map((v,k)=>k===i?{...v,[key]:n}:v)})} />)}</div>
        </fieldset>)}</div>
      </section>
      <section className="rounded-3xl bg-[#0b213a] p-5 text-white sm:p-8"><div className="grid gap-6 lg:grid-cols-2"><div><h2 className="text-2xl font-bold">Yöneticinize sunmaya hazır</h2><p className="mt-3 text-sm leading-7 text-slate-300">Firma bilgileriniz, çalışma planlarınız ve beş yıllık maliyet karşılaştırmanız tek bir PDF raporda. Rapor, o anda girdiğiniz değerlerle hazırlanır.</p></div><label className="block text-sm font-semibold">Firma / proje adı <span className="font-normal text-slate-300">(isteğe bağlı)</span><input type="text" maxLength={80} value={company} onChange={e => { request.current?.abort(); revision.current++; setBusy(false); setMessage(''); setCompany(e.target.value); }} placeholder="Örn. ABC Belediyesi · Su Tahliye Projesi" className="mt-3 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900" /></label></div>
        <div className="mt-6 flex flex-wrap gap-3"><button type="submit" value="calculate" disabled={busy} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 disabled:opacity-50"><Calculator size={18} />Sonuçları hesapla</button><button type="submit" value="pdf" disabled={busy} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-sky-950 disabled:opacity-50"><Download size={18} />PDF rapor indir</button><button type="button" onClick={() => {edit(initialInput);setResult(initialResult);setCompany('');setMessage('Başlangıç değerlerine dönüldü.');}} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/30 px-5"><RotateCcw size={16} />Sıfırla</button></div>
        <p role="status" className="mt-4 min-h-6 text-sm text-cyan-100">{busy?'Hazırlanıyor…':message}</p>
      </section>
    </form>
    {result ? <PumpSavingsResults result={result} /> : <p className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">Değerler değiştiği için önceki sonuçlar gizlendi. Yeni değerlerle hesaplayın veya doğrudan güncel PDF raporu indirin.</p>}
  </div>;
}
