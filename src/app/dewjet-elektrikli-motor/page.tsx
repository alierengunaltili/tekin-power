import SolutionInfoPage from '@/components/SolutionInfoPage';
import Image from 'next/image';
import MotorProducts from '@/components/MotorProducts';
import AdaptiveVideo from '@/components/AdaptiveVideo';
import { motorContent } from '@/data/pageContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(motorContent.path, motorContent.seoTitle, motorContent.description);

export default function DewJetElektrikliMotorPage() {
  return (
    <SolutionInfoPage
      content={motorContent}
      featuredContent={<MotorProducts />}
      showGuideNavigation={false}
      sectionMedia={{
        'motor-secimi': (
          <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <a href="/saha-gorselleri/dewjet-rim-fuar-v1.jpeg" target="_blank" rel="noopener noreferrer" aria-label="DewJet RIM motorlarının fuar fotoğrafını büyütün" className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
              <Image
                src="/saha-gorselleri/dewjet-rim-fuar-v1.jpeg"
                alt="DewJet fuar standında kapalı çarklı elektrikli tekne motorları ve su tankında çalışan motor"
                width={996}
                height={1600}
                sizes="(min-width: 1024px) 487px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                className="max-h-[560px] w-full bg-slate-100 object-contain"
              />
            </a>
            <figcaption className="px-5 py-4 text-sm font-medium leading-6 text-slate-600">DewJet RIM elektrikli tekne motorları — fuar standında ürün ve su içi çalışma gösterimi.</figcaption>
          </figure>
        ),
        'tahrik-yerlesimi': (
          <div className="min-w-0 space-y-5">
          <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <video
              controls
              controlsList="nodownload"
              playsInline
              preload="none"
              poster="/saha-videolari/demre-motor-secimi-v1/poster.jpg"
              aria-label="Antalya Oymapınar Elektrikli Tekne Dönüşümü"
              width={832}
              height={464}
              className="h-auto w-full bg-slate-950 object-contain"
            >
              <source src="/saha-videolari/demre-motor-secimi-v1/video.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
            <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Antalya Oymapınar Elektrikli Tekne Dönüşümü</figcaption>
          </figure>
          <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <video
              controls
              controlsList="nodownload"
              playsInline
              preload="none"
              poster="/saha-videolari/pervaneli-motor-v1/poster.jpg"
              aria-label="Elektrikli Pervaneli Motor"
              width={478}
              height={850}
              className="max-h-[440px] w-full bg-slate-950 object-contain"
            >
              <source src="/saha-videolari/pervaneli-motor-v1/video.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
            <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Elektrikli Pervaneli Motor</figcaption>
          </figure>
          </div>
        ),
        menzil: (
          <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <video
              controls
              controlsList="nodownload"
              playsInline
              preload="none"
              poster="/saha-videolari/motor-su-itisi-v1/poster.jpg"
              aria-label="Elektrikli Motor Su İtiş Gücü"
              width={848}
              height={478}
              className="h-auto w-full bg-slate-950 object-contain"
            >
              <source src="/saha-videolari/motor-su-itisi-v1/video.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
            <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Elektrikli Motor Su İtiş Gücü</figcaption>
          </figure>
        ),
      }}
      headerMedia={
        <AdaptiveVideo
          name="dewjet-twin-marine-v2"
          prefix="service"
          label="Lüks teknede iki DewJet motor ve su altı akışı konsept animasyonu"
          fit="contain"
          fillBackground
          smoothStart
          loop
        />
      }
    />
  );
}
