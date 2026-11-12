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
      headerMedia={
        <AdaptiveVideo
          name="dewjet-pompa-showcase-v1"
          prefix="service"
          label="DewJet elektrikli su pompaları tanıtım videosu"
          fit="contain"
          fillBackground
          loop
        />
      }
    />
  );
}
