import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/hakkimizda', 'Tekin Power Hakkında | Marin ve Enerji Çözümleri', 'Tekin Power elektrikli marin, tekne motoru, su pompası ve LiFePO4 enerji depolama çözümleri. Projeniz hakkında görüşmek için iletişime geçin.');

export default function AboutLayout({ children }: { children: ReactNode }) { return children; }
