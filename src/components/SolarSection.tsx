'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Leaf
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SolarSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const typesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animasyonu
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Content animasyonu
      gsap.fromTo(contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Benefits animasyonu
      gsap.fromTo(benefitsRef.current?.children || [],
        { y: 40, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Types animasyonu
      gsap.fromTo(typesRef.current?.children || [],
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: typesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: '%80 Tasarruf',
      description: 'Elektrik faturanızda yıllık tasarruf'
    },
    {
      icon: Leaf,
      title: 'Çevre Dostu',
      description: 'Yıllık 3 ton CO₂ tasarrufu'
    },
    {
      icon: Zap,
      title: '25 Yıl Garanti',
      description: 'Panel performans garantisi'
    },
    {
      icon: CheckCircle,
      title: 'Hızlı Kurulum',
      description: '1-3 gün içinde kurulum'
    }
  ];



  return (
    <section id="solar" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            
                         <h2 className="text-4xl lg:text-5xl font-bold">
               <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                 Güneş Paneli Sistemleri
               </span>
             </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Güneş enerjisi ile elektrik üretimi yaparak hem çevreyi koruyun hem de 
            <span className="text-gray-900 font-semibold"> enerji maliyetlerinizi %80&apos;e varan oranda azaltın.</span>
          </p>
        </div>

        {/* Hero Card */}
        <div ref={contentRef} className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-[400px]">
              {/* Left - Main Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-full bg-gradient-to-br from-orange-100 to-yellow-100">
                <Image
                  src="/landing-page-photos/home-related/home-solar-panel.jpg"
                  alt="Güneş Paneli Sistemleri"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20"></div>
                {/* Floating stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-orange-600">25+</div>
                  <div className="text-sm text-gray-600">Yıl Garanti</div>
                </div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-green-600">%80</div>
                  <div className="text-sm text-gray-600">Tasarruf</div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Güneş Enerjisi ile Geleceğe Yatırım
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Modern güneş paneli sistemleri ile temiz enerji üretimi yapın. 
                  Hem çevreyi koruyun hem de uzun vadede büyük tasarruf sağlayın.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Yüksek kaliteli monokristal paneller</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Profesyonel kurulum ve garanti</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">25 yıl performans garantisi</span>
                  </div>
                </div>

                {/* Mini Benefits */}
                <div className="grid grid-cols-2 gap-3">
                  {benefits.slice(0, 2).map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-2">
                          <IconComponent className="w-full h-full text-white" />
                        </div>
                        <div className="text-sm font-bold text-gray-900">{benefit.title}</div>
                        <div className="text-xs text-gray-600">{benefit.description}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extended Benefits Grid */}
        <div ref={benefitsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 hover:border-blue-200"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <IconComponent className="w-full h-full text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>



        {/* CTA Section */}
        <div className="text-center">
          <Link href="/gunes-paneli" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-2">
            <span>Daha Fazla Bilgi</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolarSection;
