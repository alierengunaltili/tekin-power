import SolutionInfoPage from '@/components/SolutionInfoPage';
import LiFePO4BatterySection from '@/components/lifepo4/LiFePO4BatterySection';
import { batteryContent } from '@/data/pageContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(batteryContent.path, batteryContent.seoTitle, batteryContent.description);

export default function LiFePO4Page() {
  return <SolutionInfoPage content={batteryContent}><LiFePO4BatterySection /></SolutionInfoPage>;
}
