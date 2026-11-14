'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function DredgingHeroPresentation({ selected }: { selected: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let intersects = false;
    const update = () => setVisible(intersects && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      intersects = entry.isIntersecting;
      update();
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return (
    <div ref={ref} className="dredging-presentation pointer-events-none absolute inset-0 overflow-hidden" data-active={selected && visible}>
      <div aria-hidden="true" className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl opacity-60" style={{ backgroundImage: "url('/deniz-gol-tarama/3d-sahne-v1.png')" }} />
      <div className="dredging-scene-frame absolute inset-0">
        <div className="dredging-scene-motion absolute inset-0">
          <Image src="/deniz-gol-tarama/3d-sahne-v1.png" alt="Denizde kesici emici tarama gemisi ve yüzer ekskavatörün 3B tasarımı" fill sizes="100vw" quality={90} className="object-contain" />
        </div>
      </div>
    </div>
  );
}
