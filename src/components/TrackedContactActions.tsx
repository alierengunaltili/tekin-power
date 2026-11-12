'use client';

import type { MouseEvent, ReactNode } from 'react';

type ContactPage = '/dewjet-elektrikli-motor' | '/hizmetlerimiz/marin';

export default function TrackedContactActions({ page, children, className }: {
  page: ContactPage;
  children: ReactNode;
  className: string;
}) {
  function recordContact(event: MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof Element) || typeof window.gtag !== 'function') return;

    const protocol = event.target.closest('a')?.protocol;
    if (protocol !== 'mailto:' && protocol !== 'tel:') return;

    window.gtag('event', 'contact_click', {
      page_path: page,
      contact_channel: protocol === 'mailto:' ? 'email' : 'phone',
    });
  }

  return <div className={className} onClick={recordContact}>{children}</div>;
}
