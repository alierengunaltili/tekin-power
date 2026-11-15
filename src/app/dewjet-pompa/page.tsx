import SolutionInfoPage from '@/components/SolutionInfoPage';
import Image from 'next/image';
import PumpProducts from '@/components/PumpProducts';
import AdaptiveVideo from '@/components/AdaptiveVideo';
import { pumpContent } from '@/data/pageContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(pumpContent.path, pumpContent.seoTitle, pumpContent.description);

const fieldPhotos = [
  { src: '/saha-gorselleri/pompa-afad-ekip-1-v1.jpeg', caption: 'AFAD Ekibi ve Tekin Power Ekibi Saha Tatbikatı', alt: 'AFAD ve Tekin Power ekipleri su kenarında pompa tatbikatı için görüşüyor' },
  { src: '/saha-gorselleri/pompa-afad-ekip-2-v1.jpeg', caption: 'AFAD Ekibi ve Tekin Power Ekibi Saha Tatbikatı', alt: 'AFAD aracı önünde AFAD ve Tekin Power ekiplerinin toplu fotoğrafı' },
  { src: '/saha-gorselleri/pompa-belediye-ekip-1-v1.jpeg', caption: 'Kocaeli-Sakarya Belediyesi Ekipleri ve Tekin Power Ekibi Saha Tatbikatı', alt: 'Kocaeli-Sakarya Belediyesi ve Tekin Power ekipleri göl kıyısında uygulamayı inceliyor' },
  { src: '/saha-gorselleri/pompa-belediye-ekip-2-v1.jpeg', caption: 'Kocaeli-Sakarya Belediyesi Ekipleri ve Tekin Power Ekibi Saha Tatbikatı', alt: 'Belediye ve Tekin Power ekiplerinin saha tatbikatından yakın görünüm' },
];

export default function DewJetPompaPage() {
  return (
    <SolutionInfoPage
      content={pumpContent}
      featuredContent={<PumpProducts />}
      sectionMedia={{
        'debi-basinc': (
          <div className="min-w-0 space-y-5">
            {[
              { name: 'pompa-debi-1-v1', caption: 'Sapanca Gölü — Kocaeli Belediyesi, Sakarya Belediyesi Elektrikli Su Pompası Tatbikatı', width: 848, height: 478 },
              { name: 'pompa-debi-2-v1', caption: 'Sapanca Gölü — Kocaeli Belediyesi, Sakarya Belediyesi Elektrikli Su Pompası Tatbikatı', width: 478, height: 850 },
            ].map(({ name, caption, width, height }) => (
              <figure key={name} className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <video
                  controls
                  controlsList="nodownload"
                  playsInline
                  preload="none"
                  poster={`/saha-videolari/${name}/poster.jpg`}
                  aria-label={caption}
                  width={width}
                  height={height}
                  className={`${height > width ? 'max-h-[440px]' : 'h-auto'} w-full bg-slate-950 object-contain`}
                >
                  <source src={`/saha-videolari/${name}/video.mp4`} type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
                <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">{caption}</figcaption>
              </figure>
            ))}
          </div>
        ),
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
            <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <video
                controls
                controlsList="nodownload"
                playsInline
                preload="none"
                poster="/saha-videolari/pompa-20kw-hafiflik-v1/poster.jpg"
                aria-label="20 kW Elektrikli Su Pompası Hafifliği"
                width={464}
                height={832}
                className="max-h-[440px] w-full bg-slate-950 object-contain"
              >
                <source src="/saha-videolari/pompa-20kw-hafiflik-v1/video.mp4" type="video/mp4" />
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
              <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">20 kW Elektrikli Su Pompası Hafifliği</figcaption>
            </figure>
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
    >
      <section aria-labelledby="pompa-uygulama-gorselleri" className="bg-white px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 id="pompa-uygulama-gorselleri" className="mb-8 scroll-mt-40 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">Pompa uygulama görselleri</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {fieldPhotos.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`${photo.alt} — fotoğrafı büyütün`} className="relative block aspect-[4/3] bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1215px) calc((100vw - 84px) / 2), 566px" className="object-contain" />
                </a>
                <figcaption className="px-5 py-4 text-sm font-medium leading-6 text-slate-600">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </SolutionInfoPage>
  );
}
