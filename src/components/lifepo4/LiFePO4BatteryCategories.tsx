'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Battery } from 'lucide-react';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface BatteryCategory {
  id: string;
  title: string;
  subCategories?: string[];
}

const LiFePO4BatteryCategories = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  // Batarya kategorileri
  const batteryCategories: BatteryCategory[] = [
    {
      id: '12.8v',
      title: '12.8V - Ekranlı',
      subCategories: ['100AH', '300AH', '400AH', '600AH']
    },
    {
      id: '25.6v',
      title: '25.6V - Ekranlı',
      subCategories: ['100AH', '200AH', '300AH']
    },
    {
      id: '36v',
      title: '36V - Ekranlı'
    },
    {
      id: '51.2v',
      title: '51.2V - Ekranlı',
      subCategories: ['100AH', '200AH']
    },
    {
      id: 'prismatic',
      title: 'Prizmatik Hücreler',
      subCategories: ['3.2V 150AH', '3.2V 230AH', '3.2V 280AH', '3.2V 102AH', '3.2V 314AH']
    },
    {
      id: 'lithium-types',
      title: 'Lityum Akü Çeşitleri',
      subCategories: ['25.6V 100AH', '25.6V 200AH']
    },
    {
      id: 'unisun-digital',
      title: 'Unisun Energy 51.2V 100 Ah LiFEPO4 Dijital Ekranlı'
    },
    {
      id: 'unisun-standard',
      title: 'Unisun Energy 51.2V 100 Ah LiFEPO4 Lityum Akü'
    }
  ];

  // Auto-scroll ve animasyon için useEffect
  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return;

    const scroller = scrollerRef.current;
    const scrollerWidth = scroller.scrollWidth;
    const containerWidth = containerRef.current.offsetWidth;
    
    // Eğer içerik container'dan büyükse, otomatik scroll başlat
    if (scrollerWidth > containerWidth) {
      const autoScroll = gsap.to(scroller, {
        x: -(scrollerWidth - containerWidth),
        ease: "none",
        duration: 30,
        repeat: -1,
        yoyo: true,
        paused: true
      });
      
      // Mouse üzerine gelince durdur, çıkınca devam et
      const handleMouseEnter = () => autoScroll.pause();
      const handleMouseLeave = () => autoScroll.play();
      
      scroller.addEventListener('mouseenter', handleMouseEnter);
      scroller.addEventListener('mouseleave', handleMouseLeave);
      
      // Otomatik scroll'u başlat
      autoScroll.play();
      
      return () => {
        autoScroll.kill();
        scroller.removeEventListener('mouseenter', handleMouseEnter);
        scroller.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  // GSAP animasyonları için useEffect
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Container animasyonu
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
          }
        }
      );
      
      // Kategori kartları animasyonu
      gsap.fromTo(
        '.battery-category',
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-16 bg-gradient-to-b from-blue-900/20 to-blue-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            LiFePO4 Akü Çeşitleri
          </span>
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            ref={scrollerRef} 
            className="flex space-x-6 py-4 px-2 cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'pan-x' }}
          >
            {batteryCategories.map((category) => (
              <div 
                key={category.id}
                className="battery-category flex-shrink-0 w-72 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-xl shadow-lg mr-4">
                    <Battery className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                {category.subCategories && category.subCategories.length > 0 && (
                  <div className="mt-4 pl-4 border-l-2 border-blue-500/30">
                    <ul className="space-y-2">
                      {category.subCategories.map((subCategory, index) => (
                        <li key={index} className="text-blue-100">
                          {subCategory}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Scroll göstergesi */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-4">
            <div className="w-16 h-1 rounded-full bg-blue-400/30"></div>
            <div className="w-8 h-1 rounded-full bg-blue-400/60"></div>
            <div className="w-4 h-1 rounded-full bg-blue-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiFePO4BatteryCategories;
