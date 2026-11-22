import 'server-only';
import { pumpComparisons } from '@/data/pumpComparisons';
import type { PumpSavingsInput, PumpSavingsResult } from '@/types/pumpSavings';

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

export function calculatePumpSavings(input: PumpSavingsInput): PumpSavingsResult {
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
    emissionFactor,
    scenarios: scenarios.map(scenario => {
      const hoursPerMonth = scenario.hoursPerDay * scenario.daysPerMonth;
      const tariff = scenario.activeTariff * (1 + tax) + distribution;
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
      const monthlyCarbon = savedEnergy / 1000 * emissionFactor;
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
