'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Home,
  Anchor,
  Car,
  Plane
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const backgroundRef = useRef<HTMLDivElement>(null);

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
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Services cards animasyonu
      gsap.fromTo(servicesRef.current?.children || [],
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Konut Çözümleri',
      description: 'Akıllı enerji yönetimi ile evinizde maksimum verimlilik sağlayın.',
      features: ['Akıllı Enerji Yönetimi', 'Otomatik Kontrol', 'Mobil Uygulama'],
      gradient: 'from-blue-500 to-cyan-500',
      image: '/landing-page-photos/home-related/home-solar-panel-2.jpg'
    },
    {
      icon: Anchor,
      title: 'Denizcilik',
      description: 'Denizcilik güç sistemleri ile gemilerde güvenilir enerji çözümleri.',
      features: ['Marine Bataryalar', 'Su Geçirmez Sistemler', 'Uzun Menzil'],
      gradient: 'from-cyan-500 to-blue-500',
      image: '/landing-page-photos/yat-related/y3.jpg'
    },
    {
      icon: Car,
      title: 'Otomotiv',
      description: 'Güneş enerjili otopark sistemleri ile araçlarınızı güneşle şarj edin.',
      features: ['Solar Carport', 'EV Şarj İstasyonu', 'Akıllı Park Sistemi'],
      gradient: 'from-green-500 to-emerald-500',
      image: '/landing-page-photos/car-related/por4.jpg'
    },
    {
      icon: Plane,
      title: 'Havacılık',
      description: 'Gelişmiş drone teknolojisi ile hava araçları için enerji çözümleri.',
      features: ['Drone Bataryaları', 'Hafif Sistemler', 'Uzun Uçuş Süresi'],
      gradient: 'from-purple-500 to-pink-500',
      image: '/landing-page-photos/drone/drone-2.jpg'
    }
  ];



  return (
    <section id="services" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden" ref={sectionRef}>
      {/* Dynamic Background */}
      <div ref={backgroundRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"></div>
        
        {/* Animated background shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Modern enerji ihtiyaçlarınız için kapsamlı çözümler sunuyoruz. 
            <span className="text-gray-900 font-semibold"> Güvenilir teknoloji, uzman ekip ve 7/24 destek </span>
            ile yanınızdayız.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 shadow-lg"
              >
                {/* Image Section */}
                <div className="relative h-40 sm:h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20"></div>
                  {/* Icon Overlay */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} p-2.5 sm:p-3 shadow-lg group-hover:scale-110 transition-all duration-500`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-xs sm:text-sm">
                        <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Link href="/hizmetlerimiz" className={`w-full bg-gradient-to-r ${service.gradient} text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm inline-flex items-center justify-center`}>
                    Detayları İncele
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          <Link href="/hizmetlerimiz" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
            <span>Tüm Hizmetlerimizi İnceleyin</span>
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
