'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown
} from 'lucide-react';
import Image from 'next/image';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SolarType {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  link: string;
  gradient: string;
}

const SolarPhotoSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const solarTypes: SolarType[] = [
    {
      id: 'home-solar',
      title: 'Home Solar System',
      description: 'Evler için özel tasarlanmış çatı üstü güneş paneli sistemleri. Konut ihtiyaçlarına göre optimize edilmiş enerji çözümleri.',
      image: '/gunespaneli/konutgunes.jpg',
      features: ['5-20 kW Kapasite', 'Çatı Entegrasyonu', 'Net Metering', 'Remote Monitoring'],
      link: '/hizmetlerimiz',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'solar-pole',
      title: 'Solar Pole',
      description: 'Sokak lambalarına entegre güneş paneli sistemleri. Kentsel aydınlatma için bağımsız enerji çözümleri.',
      image: '/gunespaneli/sokaklambaları-ustune-gunespanellerii.jpg',
      features: ['LED Aydınlatma', 'Otonom Sistem', 'Akıllı Kontrol', 'Uzun Ömür'],
      link: '/hizmetlerimiz',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'carport-solar',
      title: 'Carport Solar System',
      description: 'Araç park alanları için güneş paneli sistemleri. Hem araç koruması hem de enerji üretimi sağlayan çift fonksiyonlu çözüm.',
      image: '/gunespaneli/arabagunespaneli.jpg',
      features: ['Araç Koruması', 'EV Şarj İstasyonu', 'Modüler Tasarım', 'Çift Fayda'],
      link: '/hizmetlerimiz',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'roof-projects',
      title: 'Çatı Projeleri',
      description: 'Büyük ölçekli endüstriyel ve ticari binalar için çatı üstü güneş paneli projeleri. Yüksek kapasite ve verim.',
      image: '/gunespaneli/large-building-with-solar-panels-roof.jpg',
      features: ['100+ kW Kapasite', 'Endüstriyel Çözüm', 'Yüksek ROI', 'Kurumsal Destek'],
      link: '/hizmetlerimiz',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'floating-solar',
      title: 'Floating Solar Panels',
      description: 'Su yüzeyleri üzerinde kurulabilen yüzer güneş paneli sistemleri. İnovatif teknoloji ile su kaynakları üzerinde enerji üretimi.',
      image: '/gunespaneli/floating-solar-panels.jpg',
      features: ['Su Üstü Kurulum', 'Yenilikçi Teknoloji', 'Çevre Dostu', 'Yüksek Verim'],
      link: '/hizmetlerimiz',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Swiper animasyonu
      gsap.fromTo(swiperRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: swiperRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Initial card animation
      if (cardRef.current) {
        gsap.fromTo(cardRef.current,
          { x: 50, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.2)', delay: 0.5 }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solarTypes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [solarTypes.length]);

  const changeSlide = (newSlide: number) => {
    if (backgroundRef.current && cardRef.current) {
      const tl = gsap.timeline();
      
      // Background fade
      tl.to(backgroundRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
      // Card slide out
      .to(cardRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      }, 0)
      // Change content
      .call(() => {
        setCurrentSlide(newSlide);
      })
      // Background fade in
      .to(backgroundRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
      // Card slide in
      .to(cardRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.2)'
      }, '-=0.2');
    }
  };

  const scrollToDetails = () => {
    const detailsSection = document.getElementById(`solar-type-${currentSlide + 1}`);
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % solarTypes.length;
    changeSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide = currentSlide === 0 ? solarTypes.length - 1 : currentSlide - 1;
    changeSlide(newSlide);
  };

  const currentType = solarTypes[currentSlide];

    return (
    <>
      {/* Photo Swiper Section */}
      <section ref={sectionRef} className="pt-24 pb-20 relative overflow-hidden">
        {/* Dynamic Background */}
        <div ref={backgroundRef} className="absolute inset-0 -z-10">
          <Image
            src={currentType.image}
            alt={currentType.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Güneş Paneli
              </span>
              <span className="block text-white text-4xl lg:text-5xl mt-2">
                Sistemleri
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Geleceğin enerji teknolojisi ile tanışın. Her ihtiyaca uygun güneş paneli çözümlerimizi keşfedin.
              <span className="block mt-2 text-white font-semibold">Modern teknoloji ile tasarlanmış sistemlerimiz ile enerji bağımsızlığına adım atın.</span>
            </p>
          </div>

        {/* Swiper Container */}
        <div ref={swiperRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content Card */}
          <div ref={cardRef} className="order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${currentType.gradient} text-white text-sm font-medium mb-6`}>
                {currentSlide + 1} / {solarTypes.length}
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                {currentType.title}
              </h3>
              
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                {currentType.description}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentType.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-white">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentType.gradient}`}></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <button 
                onClick={scrollToDetails}
                className={`inline-flex items-center space-x-2 bg-gradient-to-r ${currentType.gradient} text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                <span>İncele</span>
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right - Navigation & Indicators */}
          <div className="order-1 lg:order-2 flex flex-col items-center space-y-8">
            {/* Navigation Arrows */}
            <div className="flex items-center space-x-6">
              <button
                onClick={prevSlide}
                className="w-14 h-14 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="w-14 h-14 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {solarTypes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            {/* Type Thumbnails */}
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:space-y-3">
              {solarTypes.map((type, index) => (
                <button
                  key={type.id}
                  onClick={() => changeSlide(index)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    index === currentSlide 
                      ? 'border-white scale-110' 
                      : 'border-white/30 hover:border-white/70'
                  }`}
                >
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SolarPhotoSwiper;
