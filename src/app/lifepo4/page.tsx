import SolutionInfoPage from '@/components/SolutionInfoPage';
import LiFePO4BatterySection from '@/components/lifepo4/LiFePO4BatterySection';
import { batteryContent } from '@/data/pageContent';
import { pageMetadata } from '@/lib/seo';
import Image from 'next/image';

export const metadata = pageMetadata(batteryContent.path, batteryContent.seoTitle, batteryContent.description);

export default function LiFePO4Page() {
  return (
    <div className="battery-selection-page">
      <SolutionInfoPage content={batteryContent} headerMedia={
        <Image
          src="/akuler/hero/green-marine-coast-v1.png"
          alt="Yeşil doğa ve teknelerin bulunduğu mavi deniz önünde yeşil ve mavi etiketli 12.8V 100Ah LiFePO4 aküler"
          fill priority sizes="100vw" quality={90} className="object-cover"
        />
      }>
        <LiFePO4BatterySection />
      </SolutionInfoPage>
    </div>
  );
}
