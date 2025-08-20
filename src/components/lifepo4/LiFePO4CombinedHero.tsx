'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Battery, 
  HelpCircle,
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

import LiFePO4WhatModal from './LiFePO4WhatModal';
import LiFePO4WhyModal from './LiFePO4WhyModal';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Modal tipleri
type ModalType = 'what' | 'why' | null;

// Kullanım alanları interface
interface UsageArea {
  id: string;
  title: string;
  image: string;
}

const LiFePO4CombinedHero = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Kullanım alanları
  const usageAreas: UsageArea[] = [
    {
      id: 'home',
      title: 'Konut Enerji Sistemleri',
      image: '/lifepo4/home.jpg'
    },
    {
      id: 'carport',
      title: 'Carport Sistemleri',
      image: '/lifepo4/carport.jpg'
    },
    {
      id: 'marin',
      title: 'Denizcilik Uygulamaları',
      image: '/lifepo4/marin.jpg'
    },
    {
      id: 'ebus',
      title: 'Elektrikli Otobüsler',
      image: '/lifepo4/ebus.jpg'
    },
    {
      id: 'forklift',
      title: 'Forklift ve Endüstriyel Araçlar',
      image: '/lifepo4/forklift.jpg'
    },
    {
      id: 'drone',
      title: 'Drone Teknolojileri',
      image: '/lifepo4/drone.jpg'
    },
    {
      id: 'solarpoles',
      title: 'Solar Aydınlatma Direkleri',
      image: '/lifepo4/solarpoles.jpg'
    }
  ];

  // Otomatik geçiş için useEffect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % usageAreas.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [usageAreas.length]);

  // GSAP animasyonları
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animasyonu
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      // Butonlar animasyonu
      gsap.fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0, x: 30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.5
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Slide değiştiğinde animasyon
  useEffect(() => {
    if (imageRef.current && swiperRef.current) {
      // Image fade
      gsap.fromTo(
        imageRef.current,
        { opacity: 0.7 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      );

      // Title slide
      gsap.fromTo(
        swiperRef.current.querySelector('.slide-title'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentSlide]);

  // Modal açma fonksiyonu
  const openModal = (type: ModalType) => {
    setActiveModal(type);
    // Modal açıldığında body'yi scroll edilemez yap
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  // Modal kapatma fonksiyonu
  const closeModal = () => {
    setActiveModal(null);
    // Modal kapandığında body'nin scroll'unu geri aç
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  };

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

  // Interval'i sıfırla
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % usageAreas.length);
      }, 5000);
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-[100vh] flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/lifepo4/2920369.jpg"
          alt="LiFePO4 Battery Technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content and Modal Buttons */}
          <div className="flex flex-col space-y-10">
            {/* Text Content */}
            <div ref={textRef} className="text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  LiFePO4
                </span>
                <span className="block text-white text-3xl lg:text-4xl mt-2">
                  Batarya Teknolojisi
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 max-w-xl leading-relaxed mb-8">
                Güvenli, uzun ömürlü ve yüksek performanslı Lityum Demir Fosfat batarya teknolojisi ile 
                enerji depolama çözümlerimiz. Tekin Power kalitesi ve güvencesiyle.
              </p>
            </div>
            
            {/* Modal Buttons - Smaller Size */}
            <div ref={buttonsRef} className="flex flex-col space-y-4">
              {/* What is LiFePO4 Button */}
              <button
                onClick={() => openModal('what')}
                className="group flex items-center bg-blue-900/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 hover:bg-blue-800/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 w-full max-w-md"
              >
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg shadow-lg mr-4">
                  <Battery className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    LiFePO4 Nedir?
                  </h3>
                  <p className="text-blue-200/80 text-sm">
                    Lityum Demir Fosfat batarya teknolojisi
                  </p>
                </div>
              </button>
              
              {/* Why LiFePO4 Button */}
              <button
                onClick={() => openModal('why')}
                className="group flex items-center bg-cyan-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 hover:bg-cyan-800/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 w-full max-w-md"
              >
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-3 rounded-lg shadow-lg mr-4">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    Neden LiFePO4?
                  </h3>
                  <p className="text-cyan-200/80 text-sm">
                    LiFePO4 bataryaların avantajları
                  </p>
                </div>
              </button>
            </div>
          </div>
          
          {/* Right Side - Usage Areas Swiper */}
          <div ref={swiperRef} className="flex flex-col items-center">
            {/* Section Title */}
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              <span className="bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
                Kullanım Alanları
              </span>
            </h2>
            
            {/* Swiper Content */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              {/* Image */}
              <div ref={imageRef} className="absolute inset-0">
                <Image
                  src={usageAreas[currentSlide].image}
                  alt={usageAreas[currentSlide].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="slide-title text-2xl font-bold text-white mb-2">
                  {usageAreas[currentSlide].title}
                </h3>
              </div>
              
              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors duration-300"
                  aria-label="Önceki"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors duration-300"
                  aria-label="Sonraki"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
              
              {/* Indicators */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-1 p-3">
                {usageAreas.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      resetInterval();
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
      </div>

      {/* Modals */}
      <LiFePO4WhatModal 
        isOpen={activeModal === 'what'} 
        onClose={closeModal} 
      />
      
      <LiFePO4WhyModal 
        isOpen={activeModal === 'why'} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default LiFePO4CombinedHero;
