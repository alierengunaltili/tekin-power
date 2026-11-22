'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceContent {
  title: string;
  description: string;
}

interface Service {
  title: string;
  category: string;
  image?: string;
  gradient: string;
  video?: string;
  photos?: any[];
  content: ServiceContent[];
}

interface AnimatedServicePageProps {
  service: Service;
  children: React.ReactNode;
  immediateMobileContent?: boolean;
}

const AnimatedServicePage = ({ children, immediateMobileContent = false }: AnimatedServicePageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add(immediateMobileContent
      ? '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'
      : '(prefers-reduced-motion: no-preference)', () => {
      // Set initial states for all sections
      gsap.set('.hero-section', {
        opacity: 0,
        y: 50
      });

      gsap.set('.content-section', {
        opacity: 0,
        y: 30
      });

      gsap.set('.content-item', {
        opacity: 0,
        y: 30
      });

      // Main timeline for page entrance
      const tl = gsap.timeline();

      // Animate hero section first
      tl.to('.hero-section', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
        // Then animate content section
        .to('.content-section', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.5');

      // Animate content items with scroll trigger
      gsap.utils.toArray('.content-item').forEach((item, index) => {
        gsap.to(item as gsap.TweenTarget, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item as gsap.DOMTarget,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
      });

    }, containerRef);

    return () => media.revert();
  }, [immediateMobileContent]);

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  );
};

export default AnimatedServicePage;
