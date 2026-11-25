'use client';

import { useEffect } from 'react';
import { installContactTracking } from '@/lib/contactAnalytics';

export default function ContactClickTracking() {
  useEffect(installContactTracking, []);
  return null;
}
