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
          src="/akuler/hero/green-marine-camping-v2.png"
          alt="Karavanlarının yanında kamp sandalyelerinde denizi izleyen kadın ve erkek; tekneli kıyıda yeşil ve mavi etiketli 12.8V 100Ah LiFePO4 aküler"
          fill priority fetchPriority="high" sizes="100vw" quality={80} className="object-cover"
        />
      } afterHeader={<LiFePO4BatterySection />} />
    </div>
  );
}
