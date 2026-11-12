import Image from 'next/image';

const measures = [
  { name: 'Güç seçenekleri', detail: '16 kW · 18 kW · 20 kW · 45 kW' },
  { name: 'Manevra', detail: 'Elektronik gaz koluyla ileri ve geri yönde kademesiz güç ayarı.' },
  { name: 'Seyir takibi', detail: 'Kaptan ekranında motor devri, anlık güç ve batarya gerilimi.' },
];

export default function MotorOverview() {
  return (
    <section aria-labelledby="motor-performans-basligi" className="bg-white px-5 pb-12 sm:px-8 sm:pb-16">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-slate-200 lg:grid-cols-[1.15fr_1fr]">
        <figure className="flex min-w-0 flex-col justify-center gap-4 bg-white py-6 sm:py-10">
          <Image
            src="/dewjet-motor/rim-motor.jpg"
            alt="DewJet dıştan takma elektrikli motorların gövdeye bağlantısı ve kapalı çark ünitesi"
            width={1600}
            height={728}
            sizes="(min-width: 1024px) 610px, (min-width: 640px) 94vw, 90vw"
            className="h-auto w-full object-contain"
          />
          <figcaption className="px-5 text-sm leading-6 text-slate-600 sm:px-8">DewJet dıştan takma tahrik sistemi. Çark, su altındaki motor gövdesinin içinde yer alır.</figcaption>
        </figure>
        <div className="bg-blue-950 p-6 text-white sm:p-8">
          <h2 id="motor-performans-basligi" className="scroll-mt-40 text-2xl font-bold leading-tight sm:text-3xl">Kapalı çarklı RIM motor seçenekleri</h2>
          <dl className="mt-5 divide-y divide-blue-200/20">
            {measures.map(({ name, detail }) => (
              <div key={name} className="py-3 first:pt-0 last:pb-0">
                <dt className="font-semibold text-cyan-200">{name}</dt>
                <dd className="mt-1 max-w-lg leading-7 text-blue-50">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
