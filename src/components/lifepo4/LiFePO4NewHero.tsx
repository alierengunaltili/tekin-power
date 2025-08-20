'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Battery, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';

import LiFePO4WhatModal from './LiFePO4WhatModal';
import LiFePO4WhyModal from './LiFePO4WhyModal';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

type ModalType = 'what' | 'why' | null;

interface UsageArea { id: string; title: string; image: string; }
interface BatteryCategory { id: string; title: string; subCategories?: string[]; }

/* --- DATA --- */
const usageAreas: UsageArea[] = [
  { id: 'home',       title: 'Konut Enerji Sistemleri',            image: '/lifepo4/home.jpg' },
  { id: 'carport',    title: 'Carport Sistemleri',                 image: '/lifepo4/carport.jpg' },
  { id: 'marin',      title: 'Denizcilik Uygulamaları',            image: '/lifepo4/marin.jpg' },
  { id: 'ebus',       title: 'Elektrikli Otobüsler',               image: '/lifepo4/ebus.jpg' },
  { id: 'forklift',   title: 'Forklift ve Endüstriyel Araçlar',    image: '/lifepo4/forklift.jpg' },
  { id: 'drone',      title: 'Drone Teknolojileri',                image: '/lifepo4/drone.jpg' },
  { id: 'solarpoles', title: 'Solar Aydınlatma Direkleri',         image: '/lifepo4/solarpoles.jpg' },
];

const batteryCategories: BatteryCategory[] = [
  { id: '12.8v',         title: '12.8V - Ekranlı',          subCategories: ['100AH','300AH','400AH','600AH'] },
  { id: '25.6v',         title: '25.6V - Ekranlı',          subCategories: ['100AH','200AH','300AH'] },
  { id: '36v',           title: '36V - Ekranlı' },
  { id: '51.2v',         title: '51.2V - Ekranlı',          subCategories: ['100AH','200AH'] },
  { id: 'prismatic',     title: 'Prizmatik Hücreler',       subCategories: ['3.2V 150AH','3.2V 230AH','3.2V 280AH','3.2V 102AH','3.2V 314AH'] },
  { id: 'lithium-types', title: 'Lityum Akü Çeşitleri',     subCategories: ['25.6V 100AH','25.6V 200AH'] },
  { id: 'unisun-digital',  title: 'Unisun Energy 51.2V 100 Ah LiFePO₄ Dijital Ekranlı' },
  { id: 'unisun-standard', title: 'Unisun Energy 51.2V 100 Ah LiFePO₄ Lityum Akü' },
];

/* --- MARQUEE TRACK (tek liste; tekrar yok) --- */
const MarqueeTrack = () => (
  <>
    {batteryCategories.map((c) => (
      <div
        key={c.id}
        className="battery-category flex-shrink-0 w-64 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
      >
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-xl shadow-lg mr-3">
            <Battery className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-sm font-semibold text-white">{c.title}</h3>
        </div>
      </div>
    ))}
  </>
);

/* --- COMPONENT --- */
const LiFePO4NewHero = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const infoCardsRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const marqueeScrollRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const marqueeTweenRef = useRef<gsap.core.Tween | null>(null);
  const wheelTimeoutRef = useRef<number | null>(null);

  /* Slider auto-play */
  useEffect(() => {
    const id = setInterval(() => setCurrentSlide((p) => (p + 1) % usageAreas.length), 5000);
    return () => clearInterval(id);
  }, []);

  /* Marquee auto-scroll with yoyo behavior */
  useEffect(() => {
    const el = marqueeScrollRef.current;
    if (!el) return;

    const setupTween = () => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;

      marqueeTweenRef.current?.kill();
      marqueeTweenRef.current = gsap.to(el, {
        scrollLeft: maxScroll,
        ease: 'none',
        duration: 30,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.8
      });
    };

    setupTween();

    const onResize = () => {
      setupTween();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      marqueeTweenRef.current?.kill();
    };
  }, []);

  /* Giriş animasyonları */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo(
        infoCardsRef.current?.children || [],
        { autoAlpha: 0, x: -18 },
        { autoAlpha: 1, x: 0, duration: 0.45, stagger: 0.12, ease: 'power2.out', delay: 0.2 }
      );
      gsap.fromTo(rightRef.current, { autoAlpha: 0, x: 18 }, { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.15 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  /* Slide değişim animasyonu */
  useEffect(() => {
    if (!imageRef.current || !rightRef.current) return;
    gsap.fromTo(imageRef.current, { opacity: 0.75 }, { opacity: 1, duration: 0.5, ease: 'power2.out' });
    gsap.fromTo(
      rightRef.current.querySelector('.slide-title'),
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out' }
    );
  }, [currentSlide]);

  /* Modal controls */
  const openModal = (t: ModalType) => {
    setActiveModal(t);
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setActiveModal(null);
    if (typeof document !== 'undefined') document.body.style.overflow = '';
  };

  const prevSlide = () => setCurrentSlide((p) => (p === 0 ? usageAreas.length - 1 : p - 1));
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % usageAreas.length);

  /* Marquee mouse dragging handlers */
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!marqueeScrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - marqueeScrollRef.current.offsetLeft);
    setScrollLeft(marqueeScrollRef.current.scrollLeft);
    marqueeTweenRef.current?.pause();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    marqueeTweenRef.current?.resume();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !marqueeScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - marqueeScrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    marqueeScrollRef.current.scrollLeft = scrollLeft - walk;
  };

  /* Touch events for mobile */
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!marqueeScrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - marqueeScrollRef.current.offsetLeft);
    setScrollLeft(marqueeScrollRef.current.scrollLeft);
    marqueeTweenRef.current?.pause();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    marqueeTweenRef.current?.resume();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !marqueeScrollRef.current) return;
    const x = e.touches[0].pageX - marqueeScrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    marqueeScrollRef.current.scrollLeft = scrollLeft - walk;
  };

  /* Wheel (touchpad) handler: pause tween while user is scrolling */
  const handleWheel: React.WheelEventHandler<HTMLDivElement> = () => {
    marqueeTweenRef.current?.pause();
    if (wheelTimeoutRef.current) window.clearTimeout(wheelTimeoutRef.current);
    wheelTimeoutRef.current = window.setTimeout(() => {
      marqueeTweenRef.current?.resume();
      wheelTimeoutRef.current = null;
    }, 600);
  };

  return (
    <div ref={heroRef} className="relative min-h-[100vh] overflow-hidden pt-20">
      {/* Blur arkaplan: aktif slayt */}
      <div className="absolute inset-0 -z-10">
        <Image src={usageAreas[currentSlide].image} alt="LiFePO₄ Background" fill className="object-cover blur-sm" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ÜST: 2 sütun — ORTALI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-center">
          {/* SOL (ortada hizalı) */}
          <div ref={leftRef} className="flex flex-col justify-center">
            <div className="text-white mb-6">
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">LiFePO₄</span>
                <span className="block text-white text-2xl lg:text-3xl mt-2">Batarya Teknolojisi</span>
              </h1>
              <p className="mt-4 text-blue-100/90 max-w-xl">
                Güvenli, uzun ömürlü ve yüksek performanslı Lityum Demir Fosfat batarya teknolojisi. Tekin Power güvencesiyle.
              </p>
            </div>

            <div ref={infoCardsRef} className="flex flex-col space-y-4 max-w-md">
              <button
                onClick={() => openModal('what')}
                className="group flex items-center bg-blue-900/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 hover:bg-blue-800/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg shadow-lg mr-4">
                  <Battery className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300">LiFePO₄ Nedir?</h3>
                  <p className="text-blue-200/80 text-sm">Lityum Demir Fosfat batarya teknolojisi</p>
                </div>
              </button>

              <button
                onClick={() => openModal('why')}
                className="group flex items-center bg-cyan-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 hover:bg-cyan-800/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-3 rounded-lg shadow-lg mr-4">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300">Neden LiFePO₄?</h3>
                  <p className="text-cyan-200/80 text-sm">LiFePO₄ bataryaların avantajları</p>
                </div>
              </button>
            </div>
          </div>

          {/* SAĞ (slider, ortada hizalı) */}
          <div ref={rightRef} className="flex items-center justify-center">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-6 text-center text-white">
                <span className="bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">Kullanım Alanları</span>
              </h2>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <div ref={imageRef} className="absolute inset-0">
                  <Image
                    src={usageAreas[currentSlide].image}
                    alt={usageAreas[currentSlide].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="slide-title text-2xl font-bold text-white mb-2">{usageAreas[currentSlide].title}</h3>
                </div>

                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-black/50 transition"
                    aria-label="Önceki"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-black/50 transition"
                    aria-label="Sonraki"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-1 p-3">
                  {usageAreas.map((_, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full ${i === currentSlide ? 'bg-white' : 'bg-white/40'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ALT ŞERİT — SAĞDAN SOLA MARQUEE */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-3 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">LiFePO₄ Akü Çeşitleri</span>
          </h2>

          <div className="relative overflow-hidden">
            {/* kenar fade maskeleri */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-blue-900/80 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-blue-900/80 to-transparent z-10" />

            <div
              ref={marqueeScrollRef}
              className="overflow-x-auto no-scrollbar"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              onTouchMove={handleTouchMove}
              style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              <div ref={marqueeTrackRef} className="flex w-max items-stretch gap-6 py-4">
                <MarqueeTrack />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <LiFePO4WhatModal isOpen={activeModal === 'what'} onClose={closeModal} />
      <LiFePO4WhyModal  isOpen={activeModal === 'why'}  onClose={closeModal} />

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        /* Hide horizontal scrollbar in supported browsers */
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default LiFePO4NewHero;
