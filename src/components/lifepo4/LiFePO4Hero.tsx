'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Battery, 
  HelpCircle
} from 'lucide-react';

import LiFePO4WhatModal from './LiFePO4WhatModal';
import LiFePO4WhyModal from './LiFePO4WhyModal';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Modal tipleri
type ModalType = 'what' | 'why' | null;

const LiFePO4Hero = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

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
          {/* Left Side - Text Content */}
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
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Ürünleri Keşfedin
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                Teknik Özellikler
              </button>
            </div>
          </div>
          
          {/* Right Side - Info Buttons */}
          <div ref={buttonsRef} className="flex flex-col space-y-6 justify-center">
            {/* What is LiFePO4 Button */}
            <button
              onClick={() => openModal('what')}
              className="group flex items-center bg-blue-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:bg-blue-800/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-xl shadow-lg mr-6">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  LiFePO4 Nedir?
                </h3>
                <p className="text-blue-200/80">
                  Lityum Demir Fosfat batarya teknolojisi hakkında detaylı bilgi
                </p>
              </div>
            </button>
            
            {/* Why LiFePO4 Button */}
            <button
              onClick={() => openModal('why')}
              className="group flex items-center bg-cyan-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:bg-cyan-800/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-4 rounded-xl shadow-lg mr-6">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Neden LiFePO4?
                </h3>
                <p className="text-cyan-200/80">
                  LiFePO4 bataryaların avantajları ve diğer teknolojilere göre üstünlükleri
                </p>
              </div>
            </button>
            

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

export default LiFePO4Hero;