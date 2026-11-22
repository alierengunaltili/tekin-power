import { pumps } from '@/data/pumps';

// User-supplied comparison, 2026-11-16. Competitor identities are deliberately
// omitted, including model identifiers. DewJet values use the current catalogue.
export const pumpComparisons = [
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
