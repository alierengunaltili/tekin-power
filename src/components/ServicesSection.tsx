'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Zap, 
  Shield, 
  Recycle, 
  Clock, 
  TrendingUp, 
  Award,
  Battery,
  Sun,
  Wind,
  Cog
} from 'lucide-react';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
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

      // Features animasyonu
      gsap.fromTo(featuresRef.current?.children || [],
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current,
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
      icon: Battery,
      title: 'LiFePO₄ Batarya Sistemleri',
      description: 'Yüksek performanslı, güvenli ve uzun ömürlü batarya çözümleri. 6000+ şarj döngüsü ile maliyet avantajı.',
      features: ['10+ Yıl Garanti', 'Hızlı Şarj', 'Yangın Güvenliği'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sun,
      title: 'Güneş Enerjisi Sistemleri',
      description: 'Ev, işletme ve endüstriyel tesisler için özel tasarlanmış solar enerji çözümleri.',
      features: ['25 Yıl Panel Garantisi', 'Uzaktan İzleme', 'Yüksek Verimlilik'],
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Wind,
      title: 'Hibrit Enerji Sistemleri',
      description: 'Güneş, rüzgar ve batarya teknolojilerini birleştiren entegre enerji çözümleri.',
      features: ['7/24 Enerji', 'Akıllı Yönetim', 'Şebeke Desteği'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cog,
      title: 'Bakım & Destek',
      description: 'Profesyonel montaj, bakım ve 7/24 teknik destek hizmetleri ile tam hizmet deneyimi.',
      features: ['24/7 Destek', 'Predictive Maintenance', 'Uzman Ekip'],
      gradient: 'from-purple-500 to-violet-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Güvenilir Teknoloji',
      description: 'Uluslararası sertifikalı ürünler'
    },
    {
      icon: Zap,
      title: 'Yüksek Performans',
      description: 'Endüstri lideri verimlilik oranları'
    },
    {
      icon: Recycle,
      title: 'Çevre Dostu',
      description: 'Sürdürülebilir ve geri dönüştürülebilir'
    },
    {
      icon: Clock,
      title: 'Uzun Ömürlü',
      description: '10+ yıl kesintisiz hizmet garantisi'
    },
    {
      icon: TrendingUp,
      title: 'Maliyet Avantajı',
      description: 'Düşük işletme maliyeti ve yüksek ROI'
    },
    {
      icon: Award,
      title: 'Sektör Deneyimi',
      description: '10+ yıllık uzman ekip deneyimi'
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden" ref={sectionRef}>
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Modern enerji ihtiyaçlarınız için kapsamlı çözümler sunuyoruz. 
            <span className="text-gray-900 font-semibold"> Güvenilir teknoloji, uzman ekip ve 7/24 destek </span>
            ile yanınızdayız.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden shadow-lg"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-20 h-20 mb-6 rounded-3xl bg-gradient-to-br ${service.gradient} p-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl"></div>
                    <IconComponent className="w-full h-full text-white relative z-10" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 group/feature hover:translate-x-2 transition-transform duration-300">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg group-hover/feature:scale-125 transition-transform duration-300`}></div>
                        <span className="text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <button className={`w-full bg-gradient-to-r ${service.gradient} text-white px-6 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0`}>
                    <span className="flex items-center justify-center space-x-2">
                      <span>Detayları İncele</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="relative bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 overflow-hidden shadow-xl">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Neden Tekin Power?
                </span>
              </h3>
              <p className="text-lg text-gray-600">
                Sektördeki deneyimimiz ve teknolojik üstünlüğümüzle fark yaratıyoruz
              </p>
            </div>
            
            <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
                      <IconComponent className="w-full h-full text-white relative z-10" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
