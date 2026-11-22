import 'server-only';
import { pumpComparisons } from '@/data/pumpComparisons';
import type { PumpDetailInput, PumpSavingsInput, PumpSavingsResult } from '@/types/pumpSavings';

// Source: supplied workbook Sayfa1 C2:C5, C9:F12, B16:G17, B20:F20.
// Private calculation code: never import into a client component or copy the XLSX to public/.
export const defaultPumpSavingsInput: PumpSavingsInput = { water: 1200, competitorPower: Number.parseFloat(pumpComparisons[0].alternatives[0].power), dewjetPower: 45 };
const annualIncreases = [0.29, 0.24, 0.18, 0.16, 0.12];
const emissionFactor = 0.434;
const distribution = 1.829503;
const tax = 0.01;
const scenarios = [
  { id: 'shift', label: '8 saat tek vardiya', hoursPerDay: 8, daysPerMonth: 22, activeTariff: 3.0346 },
  { id: 'continuous', label: '24 saat sürekli çalışma', hoursPerDay: 24, daysPerMonth: 30.4167, activeTariff: 2.985253 },
];

export function validPumpSavingsInput(value: unknown): value is PumpSavingsInput {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const input = value as Record<string, unknown>;
  const keys = ['water', 'competitorPower', 'dewjetPower'];
  return Object.keys(input).length === keys.length && keys.every(key =>
    typeof input[key] === 'number' && Number.isFinite(input[key]) && input[key] >= 0.01 && input[key] <= 1000000);
}

type CalculationConfig = { emissionFactor: number; scenarios: { id: string; label: string; hoursPerDay: number; daysPerMonth: number; tariff: number }[] };

export function calculatePumpSavings(input: PumpSavingsInput, config?: CalculationConfig): PumpSavingsResult {
  if (!validPumpSavingsInput(input)) throw new Error('Geçersiz pompa değerleri.');
  const savedPower = input.competitorPower - input.dewjetPower;
  return {
    input: { ...input },
    savingsPercent: savedPower / input.competitorPower * 100,
    savedPower,
    // C2 was disconnected in the spreadsheet. Compare a common water volume at the entered flow.
    dewjetEnergyPer1000: input.dewjetPower * 1000 / input.water,
    competitorEnergyPer1000: input.competitorPower * 1000 / input.water,
    annualIncreases: [...annualIncreases],
    emissionFactor: config?.emissionFactor ?? emissionFactor,
    scenarios: (config?.scenarios ?? scenarios.map(s => ({ ...s, tariff: s.activeTariff * (1 + tax) + distribution }))).map(scenario => {
      const hoursPerMonth = scenario.hoursPerDay * scenario.daysPerMonth;
      const tariff = scenario.tariff;
      const dewjetEnergy = input.dewjetPower * hoursPerMonth;
      const competitorEnergy = input.competitorPower * hoursPerMonth;
      const savedEnergy = competitorEnergy - dewjetEnergy;
      const dewjetMonthlyCost = dewjetEnergy * tariff;
      const competitorMonthlyCost = competitorEnergy * tariff;
      let dewjetAnnual = dewjetMonthlyCost * 12;
      let competitorAnnual = competitorMonthlyCost * 12;
      let cumulativeSavings = 0;
      // Apply the workbook's year-one increase, then compound equally for both pumps in both scenarios.
      const years = annualIncreases.map((increase, index) => {
        dewjetAnnual *= 1 + increase;
        competitorAnnual *= 1 + increase;
        const savings = competitorAnnual - dewjetAnnual;
        cumulativeSavings += savings;
        return { year: index + 1, dewjetCost: dewjetAnnual, competitorCost: competitorAnnual, savings, cumulativeSavings };
      });
      const monthlyCarbon = savedEnergy / 1000 * (config?.emissionFactor ?? emissionFactor);
      return {
        id: scenario.id, label: scenario.label, hoursPerMonth, daysPerMonth: scenario.daysPerMonth,
        tariff, dewjetEnergy, competitorEnergy, savedEnergy, dewjetMonthlyCost, competitorMonthlyCost,
        monthlySavings: competitorMonthlyCost - dewjetMonthlyCost,
        fiveYearSavings: cumulativeSavings,
        monthlyCarbon, yearlyCarbon: monthlyCarbon * 12, fiveYearCarbon: monthlyCarbon * 60,
        years,
      };
    }),
  };
}

export function defaultPumpDetailInput(pump = defaultPumpSavingsInput): PumpDetailInput {
  return {
    pump: { ...pump }, emissionFactor,
    tariffs: [3.0346, 5.1574, 1.3212, 2.985253].map(active => ({ active, distribution, tax })),
    schedules: [
      { day: 8, peak: 0, night: 0, days: 22, mode: 'timed' },
      { day: 11, peak: 5, night: 8, days: 30.4167, mode: 'single' },
    ],
  };
}

function keys(value: unknown, names: string[]): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value) &&
    Object.keys(value).length === names.length && names.every(k => Object.hasOwn(value, k));
}
const between = (v: unknown, min: number, max: number): v is number => typeof v === 'number' && Number.isFinite(v) && v >= min && v <= max;

export function validPumpDetailInput(v: unknown): v is PumpDetailInput {
  if (!keys(v, ['pump', 'emissionFactor', 'tariffs', 'schedules']) || !validPumpSavingsInput(v.pump) || !between(v.emissionFactor, 0, 10)) return false;
  if (v.pump.dewjetPower !== 20 && v.pump.dewjetPower !== 45) return false;
  if (!Array.isArray(v.tariffs) || v.tariffs.length !== 4 || !v.tariffs.every(t => keys(t, ['active','distribution','tax']) && between(t.active,0,1000) && between(t.distribution,0,1000) && between(t.tax,0,1))) return false;
  return Array.isArray(v.schedules) && v.schedules.length === 2 && v.schedules.every(s => keys(s, ['day','peak','night','days','mode']) &&
    between(s.day,0,11) && between(s.peak,0,5) && between(s.night,0,8) && s.day+s.peak+s.night > 0 &&
    between(s.days,0.01,31) && (s.mode === 'timed' || s.mode === 'single'));
}

export function calculatePumpDetail(input: PumpDetailInput): PumpSavingsResult {
  if (!validPumpDetailInput(input)) throw new Error('Güç, tarife ve çalışma sürelerini kontrol edin.');
  const prices = input.tariffs.map(t => t.active * (1 + t.tax) + t.distribution);
  return calculatePumpSavings(input.pump, {
    emissionFactor: input.emissionFactor,
    scenarios: input.schedules.map((s, i) => ({
      id: i === 0 ? 'shift' : 'continuous', label: `Çalışma planı ${i + 1}`,
      hoursPerDay: s.day+s.peak+s.night, daysPerMonth: s.days,
      tariff: s.mode === 'single' ? prices[3] : (s.day*prices[0]+s.peak*prices[1]+s.night*prices[2])/(s.day+s.peak+s.night),
    })),
  });
}
