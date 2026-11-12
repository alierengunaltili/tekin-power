import SolutionInfoPage from '@/components/SolutionInfoPage';
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
