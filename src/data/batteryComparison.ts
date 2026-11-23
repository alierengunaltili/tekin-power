/** Reviewed 2026-11-22. Source limitations and variant mapping: docs/lifepo4-comparison.md. */
export const unisunBatterySource = 'https://unisunenerji.com.tr/urun/';

export const batteryComparison = [
  { voltage: 12.8, capacity: 100, bluetooth: null, slug: '12-8v-100ah-lifepo4-batarya-6000-cycle-ekran' },
  { voltage: 12.8, capacity: 300, bluetooth: true, slug: '12-8v-300ah-lifepo4-batarya-6000-cycle-ekran-bluetooth' },
  { voltage: 12.8, capacity: 400, bluetooth: true, slug: '12-8v-400ah-lifepo4-batarya-6000-cycle-ekran-bluetooth' },
  { voltage: 12.8, capacity: 600, bluetooth: true, slug: '12-8v-600ah-lifepo4-batarya-6000-cycle-ekran-bluetooth' },
  { voltage: 25.6, capacity: 100, bluetooth: true, slug: '25-6v-100ah-lifepo4-batarya-6000-cycle-ekran-bluetooth' },
  { voltage: 25.6, capacity: 200, bluetooth: true, slug: '25-6v-200ah-lifepo4-batarya-6000-cycle-ekran-bluetooth' },
  { voltage: 25.6, capacity: 300, bluetooth: true, slug: '25-6v-300ah-lifepo4-batarya-6000-cycle-ekran-bluetooth' },
  { voltage: 36, capacity: 100, bluetooth: true, slug: '36v-100ah-lifepo4-batarya-6001-cycle-ekran-bluetooth' },
  { voltage: 51.2, capacity: 100, bluetooth: true, slug: '51-2v-100ah-lifepo4-batarya-6000-cycle-ekran-bluetooth' },
] as const;

// Do not assign these specifications to the similarly rated ABS/marine product cards.
export const unisunRackReference = {
  source: `${unisunBatterySource}51-2v-100ah-lifepo4-batarya-6000-cycle-ekran-bluetooth/`,
  weightKg: 40,
  chargeVoltage: 58.4,
  floatVoltage: 54.4,
} as const;
