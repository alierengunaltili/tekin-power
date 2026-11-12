export interface MotorModel {
  id: string;
  name: string;
  type: string;
  power: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  brochure?: string;
}

// OB/UB names, nominal power, voltage and images: dewjet.com/tr/urunlerimiz, 2026-11-12.
// IB technical values: supplied February 2026 brochure. Propeller outboard: user-confirmed 18 kW.
export const motorModels: MotorModel[] = [
  {
    id: 'icten-takma-18kw', name: 'DWE IB-30', type: 'İçten takma · Pervaneli', power: '18 kW maksimum',
    image: '/dewjet-motor/18kw/inboard-propeller.png',
    description: 'Tekne içine yerleşen PMS motor, gücü şaft üzerinden pervaneye aktarır. Şanzımansız tasarım ve elektronik gaz koluyla kademesiz ileri-geri kontrolü sunar.',
    specs: [
      { label: 'Maksimum giriş gücü', value: '18 kW' }, { label: 'Sürekli giriş gücü', value: '15 kW' },
      { label: 'Nominal gerilim', value: '96 V' }, { label: 'Maksimum tork', value: '100 Nm' },
      { label: 'Maksimum pervane devri', value: '1.800 dev/dk' }, { label: 'Motor ağırlığı', value: '55 kg' },
      { label: 'Motor koruma sınıfı', value: 'IP68' }, { label: 'Tahrik', value: 'Şaftlı, pervaneli' },
    ],
    brochure: '/dewjet-motor/18kw/dewjet-inboard-2026.pdf',
  },
  {
    id: 'distan-takma-18kw', name: '18 kW Pervaneli', type: 'Dıştan takma', power: '18 kW',
    image: '/dewjet-motor/18kw/outboard-18kw-studio-v1.png',
    description: 'Teknenin kıçına monte edilen pervaneli elektrikli motor. Motor, batarya ve montaj düzeni teknenizin yapısına ve seyir ihtiyacına göre planlanır.',
    specs: [{ label: 'Güç seçeneği', value: '18 kW' }, { label: 'Yerleşim', value: 'Dıştan takma' }, { label: 'Tahrik', value: 'Pervaneli' }],
  },
  ...[
    { id: 'ob-10', name: 'DWE OB-10', power: '7 kW' },
    { id: 'ob-30', name: 'DWE OB-30', power: '18 kW' },
    { id: 'ob-80', name: 'DWE OB-80', power: '45 kW' },
  ].map(({ id, name, power }) => ({
    id, name, type: 'Dıştan takma · RIM', power: `${power} nominal`, image: `/dewjet-motor/models/${id}.jpg`,
    description: `${name}, kıçtan montajlı elektrikli tahrik sistemidir. Kapalı çarklı RIM yapısı, su altındaki motor gövdesi içinde çalışır.`,
    specs: [{ label: 'Nominal güç', value: power }, { label: 'Nominal gerilim', value: '96 V' }, { label: 'Yerleşim', value: 'Dıştan takma' }, { label: 'Tahrik', value: 'Kapalı çarklı RIM' }],
    brochure: `/dewjet-motor/brochures/dwe-${id}.pdf`,
  })),
  {
    id: 'ub-80', name: 'DWE UB-80', type: 'Gövde altı · RIM', power: '45 kW nominal',
    image: '/dewjet-motor/models/ub-80.jpg',
    description: 'DWE UB-80, tekne gövdesinin altına yerleşen elektrikli tahrik çözümüdür. Kapalı çark ünitesi su altında çalışır; montaj yerleşimi teknenin gövde yapısına göre belirlenir.',
    specs: [{ label: 'Nominal güç', value: '45 kW' }, { label: 'Nominal gerilim', value: '96 V' }, { label: 'Yerleşim', value: 'Gövde altı' }, { label: 'Tahrik', value: 'Kapalı çarklı RIM' }],
    brochure: '/dewjet-motor/brochures/dwe-ub-80.pdf',
  },
];
