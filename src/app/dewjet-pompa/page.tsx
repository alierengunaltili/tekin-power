import SolutionInfoPage from '@/components/SolutionInfoPage';
import PumpProducts from '@/components/PumpProducts';
import AdaptiveVideo from '@/components/AdaptiveVideo';
import { pumpContent } from '@/data/pageContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(pumpContent.path, pumpContent.seoTitle, pumpContent.description);

export default function DewJetPompaPage() {
  return (
    <SolutionInfoPage
      content={pumpContent}
      featuredContent={<PumpProducts />}
      sectionMedia={{
        'kullanim-alanlari': (
          <div className="min-w-0 space-y-5">
          <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <video
              controls
              controlsList="nodownload"
              playsInline
              preload="none"
              poster="/saha-videolari/konya-gulistan-tahliye-v1/poster.jpg"
              aria-label="Konya Gülistan Altgeçiti Su Tahliyesi Uygulaması"
              width={464}
              height={832}
              className="max-h-[440px] w-full bg-slate-950 object-contain"
            >
              <source src="/saha-videolari/konya-gulistan-tahliye-v1/video.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
            <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Konya Gülistan Altgeçiti Su Tahliyesi Uygulaması</figcaption>
          </figure>
          <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <video
              controls
              controlsList="nodownload"
              playsInline
              preload="none"
              poster="/saha-videolari/pompa-kirli-su-v1/poster.jpg"
              aria-label="DewJet Elektrikli Su Pompası Taş, Çamur, Kirli Su Uygulaması"
              width={464}
              height={832}
              className="max-h-[440px] w-full bg-slate-950 object-contain"
            >
              <source src="/saha-videolari/pompa-kirli-su-v1/video.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
            <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">DewJet Elektrikli Su Pompası Taş, Çamur, Kirli Su Uygulaması</figcaption>
          </figure>
          </div>
        ),
        tasinabilirlik: (
          <div className="min-w-0 space-y-5">
            {['afad-tatbikat-1-v1', 'afad-tatbikat-2-v1'].map((name, index) => (
              <figure key={name} className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <video
                  controls
                  controlsList="nodownload"
                  playsInline
                  preload="none"
                  poster={`/saha-videolari/${name}/poster.jpg`}
                  aria-label={`AFAD Ortak Tatbikat — ${index + 1}. video`}
                  width={848}
                  height={480}
                  className="h-auto w-full bg-slate-950 object-contain"
                >
                  <source src={`/saha-videolari/${name}/video.mp4`} type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
                <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">AFAD Ortak Tatbikat</figcaption>
              </figure>
            ))}
          </div>
        ),
        'rim-drive': (
          <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <video
              controls
              controlsList="nodownload"
              playsInline
              preload="none"
              poster="/saha-videolari/pompa-detayli-anlatim-v1/poster.jpg"
              aria-label="DewJet 20 kW Elektrikli Pompa Detaylı Anlatım"
              width={848}
              height={480}
              className="h-auto w-full bg-slate-950 object-contain"
            >
              <source src="/saha-videolari/pompa-detayli-anlatim-v1/video.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
            <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">DewJet 20 kW Elektrikli Pompa Detaylı Anlatım</figcaption>
          </figure>
        ),
      }}
      headerMedia={
        <AdaptiveVideo
          name="dewjet-pompa-showcase-v1"
          prefix="service"
          label="DewJet elektrikli su pompaları tanıtım videosu"
          fit="contain"
          fillBackground
          playbackControl
          loop
        />
      }
    />
  );
}
