import SolutionInfoPage from '@/components/SolutionInfoPage';
import { hmiContent } from '@/data/pageContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(hmiContent.path, hmiContent.seoTitle, hmiContent.description);

export default function TekneHmiPage() {
  return (
    <SolutionInfoPage
      content={hmiContent}
      sectionMedia={{
        izleme: (
          <figure className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <video
              controls
              controlsList="nodownload"
              playsInline
              preload="none"
              poster="/saha-videolari/tekne-hmi-izleme-v1/poster.jpg"
              aria-label="Motor, Batarya ve Enerji İzleme Ekranı"
              width={464}
              height={832}
              className="max-h-[440px] w-full bg-slate-950 object-contain"
            >
              <source src="/saha-videolari/tekne-hmi-izleme-v1/video.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
            <figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Motor, Batarya ve Enerji İzleme Ekranı</figcaption>
          </figure>
        ),
      }}
    />
  );
}
