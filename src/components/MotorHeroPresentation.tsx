'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/** User-supplied motor lineup with subtle scene motion behind the foreground copy. */
export default function MotorHeroPresentation() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    let visible = false;
    const update = () => setActive(visible && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
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
    <div ref={ref} className="mobile-video-stage motor-presentation absolute inset-0" data-active={active}>
      <div className="motor-presentation-scene absolute inset-0">
        <Image
          src="/dewjet-motor/motor-lineup-20261114.jpg"
          alt="Deniz manzarası önünde DewJet pervaneli dıştan takma, RIM dıştan takma ve şaftlı içten takma elektrikli motorları"
          fill sizes="170vw"
          quality={90}
          className="object-cover"
        />
      </div>
    </div>
  );
}
