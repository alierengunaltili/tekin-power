'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/** A single product view with subtle motion, never an invented 360-degree view. */
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
      <Image src="/dewjet-motor/motor-deniz-doga-v1.png" alt="" fill sizes="100vw" className="object-cover" />
      <div className="motor-presentation-product">
        <Image
          src="/dewjet-motor/18kw/outboard-18kw-cutout-v1.webp"
          alt="Siyah gövdeli, altın renkli pervaneli DewJet elektrikli tekne motoru"
          fill sizes="(max-width: 639px) 45vw, 36vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
