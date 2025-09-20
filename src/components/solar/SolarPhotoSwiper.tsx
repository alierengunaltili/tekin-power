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
      id: 'esnek-paneller',
      title: 'Esnek Paneller',
      description: 'Esnek güneş panelleri, ince film tabakalarının plastik veya metal yüzeylere entegre edilmesiyle üretilir. ETFE polimer kaplama ile 240 dereceye kadar esneyebilir.',
      image: '/gunespaneli-redesign/esnekgunespaneli.jpg',
      features: ['%60 daha hafif', 'Kırılmaz yapı', 'Kolay kurulum', 'Bükülebilir tasarım'],
      link: '/hizmetlerimiz',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'half-cut',
      title: 'Half-cut Güneş Panelleri',
      description: 'Yarım kesim güneş panelleri, standart hücrelerin ortadan ikiye kesilmesiyle oluşturulur. Bu tasarım, panelin elektrik üretim verimini artırır.',
      image: '/gunespaneli-redesign/half-cut solar panel.jpg',
      features: ['Daha az enerji kaybı', 'Gölgeye dayanıklı', 'Uzun ömür', 'Yüksek verim'],
      link: '/hizmetlerimiz',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'monokristal',
      title: 'Monokristal Güneş Panelleri',
      description: 'Tek tip ve saf kristal yapıya sahip silikon hücrelerden üretilen panellerdir. Koyu siyah renkte ve yüksek verimlidir.',
      image: '/gunespaneli-redesign/monokristal solar panel.jpg',
      features: ['En yüksek verimlilik', 'Uzun ömür (25+ yıl)', 'Az ışıkta çalışır', 'Estetik görünüm'],
      link: '/hizmetlerimiz',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'polikristal',
      title: 'Polikristal Güneş Panelleri',
      description: 'Birden fazla silikon kristalinin bir araya gelmesiyle oluşturulan, mavi tonlarda görünen ve ekonomik güneş panelleridir.',
      image: '/gunespaneli-redesign/polikristal gunespaneli.jpg',
      features: ['Ekonomik fiyat', 'Güvenilir performans', 'Çevre dostu üretim', 'Geniş kullanım'],
      link: '/hizmetlerimiz',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'solar-kiremit',
      title: 'Solar Kiremit',
      description: 'Geleneksel kiremitlerin yerine geçebilen ve aynı zamanda güneş enerjisi üretebilen özel bir çatı kaplama malzemesidir.',
      image: '/gunespaneli-redesign/kiremitgunespaneli.png',
      features: ['Estetik görünüm', 'İki işlev bir arada', 'Dayanıklı yapı', 'Temiz enerji'],
      link: '/hizmetlerimiz',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 'bifacial',
      title: 'Çift Yüzlü (Bifacial) Güneş Panelleri',
      description: 'Hem ön hem de arka yüzeyinden güneş ışığını toplayarak elektrik üretebilen, yere yansıyan ışığı da kullanabilen panellerdir.',
      image: '/gunespaneli-redesign/cifttarafligunespaneli.png',
      features: ['Çift yüzey üretimi', '%10-30 ek verim', 'Cam kaplı dayanıklılık', 'Kolay bakım'],
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
    const currentTypeId = solarTypes[currentSlide].id;
    const detailsSection = document.getElementById(`detail-${currentTypeId}`);
    if (detailsSection) {
      // Calculate scroll position with offset for navbar
      const elementTop = detailsSection.getBoundingClientRect().top;
      const offsetPosition = elementTop + window.pageYOffset - 100; // 100px offset for navbar
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Auto-expand the section after scrolling
      setTimeout(() => {
        // Dispatch a custom event to trigger expansion
        const expandEvent = new CustomEvent('expandSolarDetail', { 
          detail: { typeId: currentTypeId } 
        });
        window.dispatchEvent(expandEvent);
      }, 800); // Wait for scroll to complete
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
      <section ref={sectionRef} className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 relative overflow-hidden min-h-[90vh] sm:min-h-[95vh] lg:min-h-[110vh]">
        {/* Dynamic Background */}
        <div ref={backgroundRef} className="absolute inset-0 -z-10">
          <Image
            src={currentType.image}
            alt={currentType.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 sm:from-black/70 sm:via-black/50 sm:to-black/80"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Güneş Paneli
              </span>
              <span className="block text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
                Çeşitleri
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
              Geleceğin enerji teknolojisi ile tanışın. İhtiyacınıza uygun güneş paneli çeşitlerimizi keşfedin.
            </p>
          </div>

        {/* Swiper Container */}
        <div ref={swiperRef} className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left - Content Card */}
          <div ref={cardRef} className="order-2 lg:order-1 lg:col-span-2 px-4 sm:px-0">
            <div className="bg-white/5 sm:bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-2xl">
              <div className={`inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r ${currentType.gradient} text-white text-xs font-medium mb-3 sm:mb-4`}>
                {currentSlide + 1} / {solarTypes.length}
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                {currentType.title}
              </h3>
              
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 line-clamp-3">
                {currentType.description}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                {currentType.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-1.5 text-white">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentType.gradient}`}></div>
                    <span className="text-xs">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <button 
                onClick={scrollToDetails}
                className={`inline-flex items-center space-x-1.5 bg-gradient-to-r ${currentType.gradient} text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg w-full justify-center text-xs sm:text-sm`}
              >
                <span>İncele</span>
                <ArrowDown className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right - Navigation & Indicators */}
          <div className="order-1 lg:order-2 lg:col-span-3 flex flex-col items-center space-y-4 sm:space-y-6 px-4 sm:px-0">
            {/* Navigation Arrows */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              
              <button
                onClick={nextSlide}
                className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-1.5 sm:space-x-2">
              {solarTypes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            {/* Type Thumbnails */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
              {solarTypes.map((type, index) => (
                <button
                  key={type.id}
                  onClick={() => changeSlide(index)}
                  className={`relative w-24 sm:w-20 h-24 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentSlide 
                      ? 'border-white scale-105' 
                      : 'border-white/30 hover:border-white/70'
                  }`}
                >
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-1 px-1.5">
                    <p className="text-white text-[8px] sm:text-[10px] truncate text-center">{type.title}</p>
                  </div>
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
