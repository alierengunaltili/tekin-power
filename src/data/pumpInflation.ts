// Verified against the TCMB Governor's 12 November 2026 Inflation Report briefing.
// These CPI assumptions index this calculator's costs; they are not electricity tariff forecasts.
export const pumpInflation = {
  source: 'Türkiye Cumhuriyet Merkez Bankası (TCMB) · Enflasyon Raporu 2026-IV',
  date: '12 Kasım 2026',
  url: 'https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb%2Btr/main%2Bmenu/duyurular/baskanin%2Bkonusmalari/2026/konusmab12_11_2026',
  periods: [
    { year: 2026, rate: 0.295, label: 'Yıl sonu enflasyon tahmini' },
    { year: 2027, rate: 0.21, label: 'Yıl sonu tahmini / ara hedef' },
    { year: 2028, rate: 0.135, label: 'Yıl sonu tahmini / ara hedef' },
    { year: 2029, rate: 0.09, label: 'Yıl sonu öngörüsü / ara hedef' },
    { year: 2030, rate: 0.05, label: 'Orta vadeli hedef varsayımı' },
  ],
} as const;
