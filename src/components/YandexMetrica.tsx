'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackMetricaPage } from '@/lib/yandexMetrica';

export default function YandexMetrica() {
  const pathname = usePathname();
  useEffect(() => { trackMetricaPage(); }, [pathname]);
  return null;
}
