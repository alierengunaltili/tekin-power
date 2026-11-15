import Image from 'next/image';
import Link from 'next/link';
import { GuideIntro, GuideBody } from '@/components/SolutionGuide';
import { marineContent } from '@/data/pageContent';

const systemLinks = [
  { label: 'DewJet elektrikli tekne motorları', href: '/dewjet-elektrikli-motor', detail: 'Teknenin gövdesine ve hedef seyir hızına uygun tahrik seçeneklerini inceleyin.' },
  { label: 'LiFePO4 bataryalar', href: '/lifepo4', detail: 'Hedef çalışma süresine ve teknedeki elektrik tüketimine göre kapasite seçimini inceleyin.' },
  { label: 'Tekne HMI ekranı', href: '/tekne-hmi', detail: 'Dümen başında güç, motor devri ve batarya bilgilerinin nasıl izlendiğini keşfedin.' },
];

const photos = [
  { src: '/saha-gorselleri/marin-demre-ekip-v1.jpeg', caption: 'Antalya Demre Elektrikli Tekne Dönüşümü', alt: 'Demre elektrikli tekne dönüşümü projesinde tekne önünde ekip fotoğrafı' },
  { src: '/saha-gorselleri/marin-manavgat-gunes-v1.jpeg', caption: 'Antalya Manavgat Elektrikli Tekne Dönüşümü', alt: 'Manavgat elektrikli tekne dönüşümünde tekne üzerindeki güneş panelleri' },
  { src: '/saha-gorselleri/marin-demre-tekneler-v1.jpeg', caption: 'Antalya Demre Elektrikli Tekne Dönüşümü', alt: 'Demre elektrikli tekne dönüşümü uygulamasına ait iki gezi teknesi' },
  { src: '/saha-gorselleri/marin-manavgat-batarya-v1.jpeg', caption: 'Antalya Manavgat Elektrikli Tekne Dönüşümü', alt: 'Manavgat elektrikli tekne dönüşümünde batarya grupları ve bağlantı çalışmaları' },
];

export default function MarinContent({ gradient }: { gradient: string }) {
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
    <GuideBody content={marineContent} sectionMedia={{
      'elektrikli-tahrik': (
        <div className="min-w-0 space-y-5">
        <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <video
            controls
            controlsList="nodownload"
            playsInline
            preload="none"
            poster="/saha-videolari/manavgat-donusum-v1/poster.jpg"
            aria-label="Antalya Manavgat Elektrikli Tekne Dönüşümü"
            width={832}
            height={464}
            className="h-auto w-full bg-slate-950 object-contain"
          >
            <source src="/saha-videolari/manavgat-donusum-v1/video.mp4" type="video/mp4" />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
          <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Antalya Manavgat Elektrikli Tekne Dönüşümü</figcaption>
        </figure>
        <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <video
            controls
            controlsList="nodownload"
            playsInline
            preload="none"
            poster="/saha-videolari/demre-donusum-v1/poster.jpg"
            aria-label="Antalya Demre Elektrikli Tekne Dönüşümü"
            width={1024}
            height={576}
            className="h-auto w-full bg-slate-950 object-contain"
          >
            <source src="/saha-videolari/demre-donusum-v1/video.mp4" type="video/mp4" />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
          <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Antalya Demre Elektrikli Tekne Dönüşümü</figcaption>
        </figure>
        <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <video
            controls
            controlsList="nodownload"
            playsInline
            preload="none"
            poster="/saha-videolari/manavgat-seyir-v1/poster.jpg"
            aria-label="Antalya Manavgat Elektrikli Tekne Dönüşümü — seyir videosu"
            width={848}
            height={478}
            className="h-auto w-full bg-slate-950 object-contain"
          >
            <source src="/saha-videolari/manavgat-seyir-v1/video.mp4" type="video/mp4" />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
          <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Antalya Manavgat Elektrikli Tekne Dönüşümü</figcaption>
        </figure>
        </div>
      ),
      'marin-batarya': (
        <div className="min-w-0 space-y-5">
        <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <video
            controls
            controlsList="nodownload"
            playsInline
            preload="none"
            poster="/saha-videolari/manavgat-batarya-v1/poster.jpg"
            aria-label="Antalya Manavgat Elektrikli Tekne Dönüşümü — batarya sistemi"
            width={464}
            height={832}
            className="max-h-[440px] w-full bg-slate-950 object-contain"
          >
            <source src="/saha-videolari/manavgat-batarya-v1/video.mp4" type="video/mp4" />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
          <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Antalya Manavgat Elektrikli Tekne Dönüşümü</figcaption>
        </figure>
        <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <video
            controls
            controlsList="nodownload"
            playsInline
            preload="none"
            poster="/saha-videolari/batarya-tasarimi-v1/poster.jpg"
            aria-label="Batarya Tasarımı Detaylı Anlatım"
            width={576}
            height={1024}
            className="max-h-[440px] w-full bg-slate-950 object-contain"
          >
            <source src="/saha-videolari/batarya-tasarimi-v1/video.mp4" type="video/mp4" />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
          <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Batarya Tasarımı Detaylı Anlatım</figcaption>
        </figure>
        </div>
      ),
      'marin-hmi': (
        <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <video
            controls
            controlsList="nodownload"
            playsInline
            preload="none"
            poster="/saha-videolari/marin-hmi-v1/poster.jpg"
            aria-label="Dümen başında motor ve batarya takibi saha videosu"
            width={464}
            height={832}
            className="max-h-[440px] w-full bg-slate-950 object-contain"
          >
            <source src="/saha-videolari/marin-hmi-v1/video.mp4" type="video/mp4" />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
          <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Tekne kontrol ekranı · Saha videosu</figcaption>
        </figure>
      ),
    }} />
    <section aria-labelledby="marin-uygulama-gorselleri" className="bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 id="marin-uygulama-gorselleri" className={`mb-8 bg-gradient-to-r ${gradient} bg-clip-text text-2xl font-bold text-transparent sm:text-3xl`}>Marin uygulama görselleri</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {photos.map((photo) => <figure key={photo.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`${photo.alt} — fotoğrafı büyütün`} className="relative block aspect-[4/3] bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1215px) calc((100vw - 84px) / 2), 566px" className="object-contain" />
            </a>
            <figcaption className="px-5 py-4 text-sm font-medium leading-6 text-slate-600">{photo.caption}</figcaption>
          </figure>)}
        </div>
      </div>
    </section>
  </>;
}
