'use client';

import Link from 'next/link';
import { solutions } from '@/data/solutions';
import { ChevronDown } from 'lucide-react';
import { type MouseEvent, useRef, useState } from 'react';

const services = solutions;
const energyLinks = [
  { productTitle: 'Unisun Enerji Depolama Sistemleri', href: '/hizmetlerimiz/enerji-depolama' },
  { productTitle: 'LiFePO4', href: '/lifepo4' },
  { productTitle: 'Güneş Panelleri', href: '/gunespaneli' },
  { productTitle: 'Arşimet Burgusu', href: '/arsimet-burgusu' },
];

export default function ServiceNavigation({ mobile = false, group = 'services', linkClass, onNavigate }: {
  mobile?: boolean;
  group?: 'services' | 'energy';
  linkClass: string;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isEnergy = group === 'energy';
  const panelId = `${mobile ? 'mobile' : 'desktop'}-${isEnergy ? 'energy' : 'service'}-links`;
  const parentHref = isEnergy ? '/hizmetlerimiz/enerji-depolama' : '/hizmetlerimiz';
  const label = isEnergy ? 'Yenilenebilir Enerji ve Unisun Enerji Depolama Sistemleri' : 'Hizmetlerimiz';

  return (
    <div
      className={mobile ? '' : 'relative'}
      onMouseEnter={mobile ? undefined : () => setOpen(true)}
      onMouseLeave={mobile ? undefined : (event) => {
        if (!event.currentTarget.contains(document.activeElement)) setOpen(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className={`flex items-center ${mobile ? 'pr-3' : 'gap-1'}`}>
        <Link href={parentHref} aria-label={label} className={linkClass} onClick={(event) => {
          setOpen(false);
          onNavigate(event, parentHref);
        }}>{isEnergy ? <span className={`block leading-snug ${mobile ? '' : 'text-center'}`}><span className="block">Yenilenebilir Enerji ve</span><span className={`block ${mobile ? 'text-sm' : 'text-xs 2xl:text-sm'}`}>Unisun Enerji Depolama Sistemleri</span></span> : label}</Link>
        <button
          ref={toggleRef}
          type="button"
          aria-label={`${isEnergy ? 'Enerji' : 'Hizmet'} alt menüsünü ${open ? 'kapat' : 'aç'}`}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(!open)}
          className={`shrink-0 rounded-md p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${mobile ? 'text-gray-700 hover:bg-blue-50' : `${linkClass} hover:bg-white/10`}`}
        ><ChevronDown size={16} aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`} /></button>
      </div>
      <div id={panelId} hidden={!open} className={mobile ? 'mx-3 mb-2' : `absolute ${isEnergy ? 'right-0' : 'left-0'} top-full w-[360px] pt-3`}>
        <ul className={`overflow-hidden border ${mobile
          ? 'rounded-lg border-blue-100 bg-blue-50/80 text-slate-800'
          : 'rounded-xl border-white/25 bg-slate-950/60 text-white shadow-lg'}`}>
          {(isEnergy ? energyLinks : services).map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className={`block border-b px-4 py-4 text-xs font-semibold leading-relaxed transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 sm:text-sm ${mobile
                  ? 'border-blue-50 hover:bg-blue-50 hover:text-blue-700 focus-visible:bg-blue-50 focus-visible:outline-blue-500'
                  : 'border-white/15 hover:bg-slate-950/30 focus-visible:bg-slate-950/30 focus-visible:outline-white'}`}
                onClick={(event) => {
                  setOpen(false);
                  onNavigate(event, service.href);
                }}
              >{isEnergy ? service.productTitle : service.productTitle.toLocaleUpperCase('tr-TR')}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
