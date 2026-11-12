// Sources: supplied DWE-APUMP material cards (page 1).
// 45 kW weight is overridden by the user's 2026-11-04 confirmation: 55 kg.
// Supplied presentation pages 5/6/10 and the card table contain older conflicting weights.
export const pumps = [
  {
    model: 'DWE-APUMP-20', power: '20 kW', weight: '25 kg', flow: '420 m³/h',
    supply: '96 V / 380 V',
    head: '15 m', speed: '4.000 rpm', dimensions: '33 × 33 × 25 cm',
    image: '/dewjet-pompa/turkuaz-four-views.png', width: 1017, height: 316,
    displayName: 'Turkuaz Pompa', poster: '/dewjet-pompa/turkuaz-25kg-poster.png', posterWidth: 279, posterHeight: 350,
    description: '25 kg ağırlık ve kompakt ölçüler. Taşıma ve yerleşim alanının önemli olduğu projeler için 20 kW elektrikli pompa seçeneği.',
  },
  {
    model: 'DWE-APUMP-45', power: '45 kW', weight: '55 kg', flow: '1.200 m³/h',
    supply: '96 V / 380 V',
    head: '18 m', speed: '3.500 rpm', dimensions: '62 × 62 × 41 cm',
    image: '/dewjet-pompa/mobil-four-views.png', width: 1021, height: 353,
    displayName: 'Mobil Pompa Sistemi', poster: '/dewjet-pompa/mobil-55kg-poster.png', posterWidth: 309, posterHeight: 339,
    description: '55 kg ağırlıkta 45 kW güç. Yüksek hacimli su transferi ihtiyacında, 1.200 m³/h maksimum debi sunan model.',
  },
] as const;
