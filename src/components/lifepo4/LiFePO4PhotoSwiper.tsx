'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UsageArea {
  id: string;
  title: string;
  description: string;
  image: string;
}

const LiFePO4PhotoSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Kullanım alanları
  const usageAreas: UsageArea[] = [
    {
      id: 'home',
      title: 'Konut Enerji Sistemleri',
      description: 'Evlerde kesintisiz enerji için LiFePO4 bataryalar, güneş panelleri ile entegre çalışarak enerji bağımsızlığı sağlar.',
      image: '/lifepo4/home.jpg'
    },
    {
      id: 'carport',
      title: 'Carport Sistemleri',
      description: 'Araç park alanlarında güneş enerjisi ve depolama çözümleri için ideal LiFePO4 bataryalar.',
      image: '/lifepo4/carport.jpg'
    },
    {
      id: 'marin',
      title: 'Denizcilik Uygulamaları',
      description: 'Tekneler ve yatlarda güvenli, uzun ömürlü ve yüksek performanslı enerji depolama çözümleri.',
      image: '/lifepo4/marin.jpg'
    },
    {
      id: 'ebus',
      title: 'Elektrikli Otobüsler',
      description: 'Toplu taşıma araçları için yüksek kapasiteli, hızlı şarj olabilen ve uzun ömürlü batarya sistemleri.',
      image: '/lifepo4/ebus.jpg'
    },
    {
      id: 'forklift',
      title: 'Forklift ve Endüstriyel Araçlar',
      description: 'Endüstriyel araçlar için dayanıklı, yüksek güç çıkışlı ve hızlı şarj olabilen batarya çözümleri.',
      image: '/lifepo4/forklift.jpg'
    },
    {
      id: 'drone',
      title: 'Drone Teknolojileri',
      description: 'Hafif, yüksek enerji yoğunluklu ve güvenli drone bataryaları ile daha uzun uçuş süreleri.',
      image: '/lifepo4/drone.jpg'
    },
    {
      id: 'solarpoles',
      title: 'Solar Aydınlatma Direkleri',
      description: 'Sokak aydınlatmaları için güneş enerjisi ile çalışan, bakım gerektirmeyen batarya sistemleri.',
      image: '/lifepo4/solarpoles.jpg'
    }
  ];

  // Otomatik geçiş için useEffect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % usageAreas.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, usageAreas.length]);

  // GSAP animasyonları için useEffect
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section animasyonu
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Slide değiştiğinde animasyon
  useEffect(() => {
    if (imageRef.current && contentRef.current) {
      // Image fade
      gsap.fromTo(
        imageRef.current,
        { opacity: 0.7 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      );

      // Content slide
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentSlide]);

  // Önceki slide'a geçiş
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? usageAreas.length - 1 : prev - 1));
    resetInterval();
  };

  // Sonraki slide'a geçiş
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % usageAreas.length);
    resetInterval();
  };

  // Otomatik geçişi durdur/başlat
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Interval'i sıfırla
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      if (!isPaused) {
        intervalRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % usageAreas.length);
        }, 5000);
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image
          src={usageAreas[currentSlide].image}
          alt={usageAreas[currentSlide].title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
              Kullanım Alanları
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            LiFePO4 batarya teknolojisi, yüksek güvenlik ve uzun ömür özellikleri sayesinde birçok farklı alanda tercih edilmektedir.
          </p>
        </div>

        {/* Content Box */}
        <div ref={contentRef} className="  rounded-3xl p-8 md:p-12  max-w-3xl mx-auto bg-white/5  border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold text-white">
              {usageAreas[currentSlide].title}
            </h3>
            <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
              {currentSlide + 1} / {usageAreas.length}
            </span>
          </div>
          
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            {usageAreas[currentSlide].description}
          </p>
          
          {/* Controls */}
          <div className="flex items-center justify-between">
            {/* Navigation Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Önceki"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Sonraki"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePause}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              aria-label={isPaused ? "Oynat" : "Duraklat"}
            >
              {isPaused ? (
                <Play className="w-5 h-5 text-white" />
              ) : (
                <Pause className="w-5 h-5 text-white" />
              )}
            </button>
            
            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {usageAreas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    resetInterval();
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiFePO4PhotoSwiper;
