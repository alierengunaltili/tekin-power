export type PumpSavingsInput = { water: number; competitorPower: number; dewjetPower: number };
export type PumpTariff = { active: number; distribution: number; tax: number };
export type PumpSchedule = { day: number; peak: number; night: number; days: number; mode: 'timed' | 'single' };
export type PumpDetailInput = {
  pump: PumpSavingsInput;
  emissionFactor: number;
  tariffs: PumpTariff[];
  schedules: PumpSchedule[];
};
export type PumpScenarioResult = {
  id: string;
  label: string;
  hoursPerMonth: number;
  daysPerMonth: number;
  tariff: number;
  dewjetEnergy: number;
  competitorEnergy: number;
  savedEnergy: number;
  dewjetMonthlyCost: number;
  competitorMonthlyCost: number;
  monthlySavings: number;
  fiveYearSavings: number;
  monthlyCarbon: number;
  yearlyCarbon: number;
  fiveYearCarbon: number;
  years: { year: number; dewjetCost: number; competitorCost: number; savings: number; cumulativeSavings: number }[];
};
export type PumpSavingsResult = {
  input: PumpSavingsInput;
  savingsPercent: number;
  savedPower: number;
  dewjetEnergyPer1000: number;
  competitorEnergyPer1000: number;
  annualIncreases: number[];
  emissionFactor: number;
  scenarios: PumpScenarioResult[];
};
