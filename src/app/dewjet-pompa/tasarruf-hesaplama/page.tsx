import type { Metadata } from 'next';
import PumpSavingsDetail from '@/components/PumpSavingsDetail';
import { calculatePumpDetail, defaultPumpDetailInput, defaultPumpSavingsInput, validPumpSavingsInput } from '@/lib/pumpSavings.server';

export const metadata: Metadata = { title: 'DewJet Detaylı Enerji Tasarruf Raporu | Tekin Power', robots: { index:false, follow:false } };
export default async function SavingsDetailPage({ searchParams }: { searchParams: Promise<Record<string,string|string[]|undefined>> }) {
  const params = await searchParams;
  const candidate = { water:Number(params.water), competitorPower:Number(params.competitorPower), dewjetPower:Number(params.dewjetPower) };
  if (candidate.dewjetPower !== 20 && candidate.dewjetPower !== 45) candidate.dewjetPower = defaultPumpSavingsInput.dewjetPower;
  const input = defaultPumpDetailInput(validPumpSavingsInput(candidate)?candidate:defaultPumpSavingsInput);
  return <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8 sm:py-16"><div className="mx-auto max-w-6xl">
    <a href="/dewjet-pompa#elektrik-tasarrufu" className="text-sm font-semibold text-sky-800">← Pompa sayfasına dön</a>
    <header className="mb-9 mt-8 max-w-3xl"><p className="text-xs font-bold tracking-[0.2em] text-sky-700">TEKİN POWER · DEWJET</p><h1 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">Firmanızın verileriyle<br /><span className="text-blue-700">enerji tasarruf raporu.</span></h1><p className="mt-5 text-base leading-7 text-slate-600">Elektrik maliyetlerinizi ve çalışma sürelerinizi özelleştirin. Sonuçları karşılaştırın, raporunuzu PDF olarak yöneticinizle paylaşın.</p></header>
    <PumpSavingsDetail initialInput={input} initialResult={calculatePumpDetail(input)} />
  </div></main>;
}
