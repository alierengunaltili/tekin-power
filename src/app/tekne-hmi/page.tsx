import SolutionInfoPage from '@/components/SolutionInfoPage';
import { hmiContent } from '@/data/pageContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(hmiContent.path, hmiContent.seoTitle, hmiContent.description);

export default function TekneHmiPage() {
  return <SolutionInfoPage content={hmiContent} />;
}
