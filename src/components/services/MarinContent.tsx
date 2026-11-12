import Image from 'next/image';
import Link from 'next/link';
import { marin_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/marin';
import { GuideIntro, GuideBody } from '@/components/SolutionGuide';
import { marineContent } from '@/data/pageContent';

const systemLinks = [
  { label: 'DewJet elektrikli tekne motorları', href: '/dewjet-elektrikli-motor', detail: 'Teknenin gövdesine ve hedef seyir hızına uygun tahrik seçeneklerini inceleyin.' },
  { label: 'LiFePO4 bataryalar', href: '/lifepo4', detail: 'Hedef çalışma süresine ve teknedeki elektrik tüketimine göre kapasite seçimini inceleyin.' },
  { label: 'Tekne HMI ekranı', href: '/tekne-hmi', detail: 'Dümen başında güç, motor devri ve batarya bilgilerinin nasıl izlendiğini keşfedin.' },
];

export default function MarinContent({ gradient }: { gradient: string }) {
  const photos = [marin_photo_mapping.photo1, marin_photo_mapping.photo2, marin_photo_mapping.photo3, marin_photo_mapping.photo4, marin_photo_mapping.photo5];
  return <>
    <GuideIntro content={marineContent} />
    <section aria-labelledby="marin-sistem-basligi" className="bg-white px-5 pb-12 sm:px-8 sm:pb-16">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-slate-200 lg:grid-cols-2">
        <div className="bg-slate-50 p-6 sm:p-9">
          <h2 id="marin-sistem-basligi" className="scroll-mt-40 text-2xl font-bold leading-tight text-blue-950 sm:text-3xl">Teknenizde tahrik, enerji ve kontrol</h2>
          <ul className="mt-5 divide-y divide-slate-200">
            {systemLinks.map(({ label, href, detail }) => (
              <li key={href} className="py-4 last:pb-0">
                <Link href={href} className="inline-flex items-center gap-2 rounded font-semibold text-blue-800 underline decoration-blue-300 underline-offset-4 hover:text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-4">
                  {label}<span aria-hidden="true">→</span>
                </Link>
                <p className="mt-2 max-w-md leading-7 text-slate-700">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <figure className="flex min-w-0 flex-col items-center justify-center gap-4 p-6 sm:p-9">
          <Image
            src="/dewjet-motor/kaptan-ekrani.jpg"
            alt="Kaptan ekranında iki motorun devir ve güç göstergeleri ile batarya gerilimi alanı"
            width={1048}
            height={792}
            sizes="(min-width: 640px) 430px, 84vw"
            className="h-auto w-full max-w-md object-contain"
          />
          <figcaption className="max-w-md text-sm leading-6 text-slate-600">DewJet çift motorlu sistem için örnek kaptan ekranı.</figcaption>
        </figure>
      </div>
    </section>
    <GuideBody content={marineContent} />
    <section className="bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className={`mb-8 bg-gradient-to-r ${gradient} bg-clip-text text-2xl font-bold text-transparent sm:text-3xl`}>Marin uygulama görselleri</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => <div key={photo} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
            <Image src={photo} alt={`Marin enerji uygulaması görseli ${index + 1}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
          </div>)}
        </div>
      </div>
    </section>
  </>;
}
