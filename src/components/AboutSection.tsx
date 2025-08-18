'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Target, 
  Award, 
  Users, 
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

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

      // Stats animasyonu
      gsap.fromTo(statsRef.current?.children || [],
        { y: 40, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Values animasyonu
      gsap.fromTo(valuesRef.current?.children || [],
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: '10+', label: 'Yıllık Deneyim', icon: Award },
    { number: '500+', label: 'Tamamlanan Proje', icon: Target },
    { number: '50+', label: 'Mutlu Müşteri', icon: Users },
    { number: '24/7', label: 'Teknik Destek', icon: Lightbulb }
  ];

  const values = [
    'Kaliteli ve güvenilir enerji çözümleri',
    'Müşteri memnuniyeti odaklı hizmet',
    'Yenilikçi teknoloji kullanımı',
    'Çevre dostu sürdürülebilir projeler',
    'Uzman ekip ve profesyonel destek',
    '7/24 teknik servis garantisi'
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Hakkımızda
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enerji sektöründe 10+ yıllık deneyimimizle, modern teknoloji ve 
            <span className="text-gray-900 font-semibold"> sürdürülebilir çözümler </span>
            sunarak geleceğin enerjisini bugünden inşa ediyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Güçlü Enerji, Güvenilir Gelecek
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold text-blue-600">Tekin Power</span> olarak, enerji sektöründeki derin deneyimimizi 
                modern teknoloji ile birleştirerek müşterilerimize en ileri düzeyde çözümler sunuyoruz.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                LiFePO₄ batarya teknolojileri, güneş enerjisi sistemleri ve hibrit enerji çözümleri alanında 
                uzmanlaşmış ekibimizle, her projeyi benzersiz ihtiyaçlar doğrultusunda özel olarak tasarlıyoruz.
              </p>

              {/* Values List */}
              <div ref={valuesRef} className="space-y-3 mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Değerlerimiz:</h4>
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{value}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link href="/hakkimizda" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-2 w-fit">
                  <span>Daha Fazla Bilgi</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-3xl p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 hover:border-blue-200"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
