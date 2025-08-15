'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Battery,
  Car,
  Clock,
  Home,
  Recycle,
  Shield,
  ShieldCheck,
  Smartphone,
  ThermometerSun,
  Truck,
  Zap
} from 'lucide-react';
import { useEffect, useRef } from 'react';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const BatterySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const usageAreasRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

      // Advantages animasyonu
      gsap.fromTo(advantagesRef.current?.children || [],
        { y: 60, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: advantagesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Usage areas animasyonu
      gsap.fromTo(usageAreasRef.current?.children || [],
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: usageAreasRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stats counter animasyonu
      gsap.fromTo('.stat-number',
        { textContent: 0 },
        {
          textContent: (i: number, target: HTMLElement) => target.getAttribute('data-value'),
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const advantages = [
    {
      icon: Zap,
      title: 'Yüksek Verimlilik',
      description: 'LiFePO₄ bataryalar, yüksek enerji yoğunluğu ile hızlı şarj olup enerjiyi verimli bir şekilde depolar. Enerji kaybı düşük olduğu için enerji verimliliği yüksektir.',
      number: '01',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Uzun Ömürlü',
      description: 'LiFePO₄ bataryalar, 6.000-10.000 şarj-deşarj döngüsüne sahiptir ve geleneksel kurşun-asit bataryalara kıyasla çok daha uzun kullanım ömrü sunar.',
      number: '02',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Üst Düzey Güvenlik',
      description: 'Diğer lityum-iyon bataryalara göre çok daha güvenlidir. Yüksek sıcaklıklara karşı dayanıklı, aşırı ısınma, yanma ve patlama riski yoktur.',
      number: '03',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Recycle,
      title: 'Çevre Dostu',
      description: 'Toksik maddeler içermez ve geri dönüştürülebilir yapısı sayesinde çevreye daha az zarar verir, karbon ayak izini azaltır.',
      number: '04',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const usageAreas = [
    {
      icon: Home,
      title: 'Ev Enerji Sistemleri',
      description: 'Güneş enerjisi sistemleri ve yedek güç kaynakları'
    },
    {
      icon: Car,
      title: 'Elektrikli Araçlar',
      description: 'EV, e-bisiklet ve elektrikli araç uygulamaları'
    },
    {
      icon: Smartphone,
      title: 'Telekomünikasyon',
      description: 'Baz istasyonları ve yedek güç kaynakları'
    },
    {
      icon: Truck,
      title: 'Endüstriyel Araçlar',
      description: 'Forklift, marin ve karavan uygulamaları'
    },
    {
      icon: ShieldCheck,
      title: 'Askeri Uygulamalar',
      description: 'Güvenlik kritik askeri sistem uygulamaları'
    },
    {
      icon: ThermometerSun,
      title: 'Medikal Cihazlar',
      description: 'Kritik medikal ekipman güç kaynakları'
    }
  ];

  const stats = [
    { number: 10000, suffix: '+', label: 'Şarj Döngüsü', description: 'Uzun ömürlü kullanım' },
    { number: 95, suffix: '%', label: 'Enerji Verimliliği', description: 'Düşük enerji kaybı' },
    { number: 25, suffix: '+', label: 'Yıl Ömür', description: 'Güvenilir performans' },
    { number: 0, suffix: '%', label: 'Toksik Madde', description: 'Çevre dostu yapı' }
  ];

  return (
    <section id="battery" className="py-20 bg-gradient-to-br from-slate-300 via-blue-900 to-indigo-900 text-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Battery className="w-12 h-12 text-blue-400 mr-4" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                LiFePO₄ Batarya
              </span>
            </h2>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Lityum Demir Fosfat batarya teknolojisi ile güvenlik, uzun ömür, yüksek performans ve 
            çevre dostu özellikler arayan kullanıcılar için ideal enerji depolama çözümü.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <span className="stat-number" data-value={stat.number}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-blue-300 font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            LiFePO₄ Batarya Avantajları
          </h3>
          <div ref={advantagesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-500"
                >
                  {/* Background number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                    {advantage.number}
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${advantage.color} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {advantage.title}
                    </h4>
                    <p className="text-blue-100 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Usage Areas Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Kullanım Alanları
          </h3>
          <div ref={usageAreasRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usageAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 p-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {area.title}
                      </h4>
                      <p className="text-blue-200 text-sm">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-blue-500/25">
              LiFePO₄ Batarya Çözümlerimizi İnceleyin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatterySection;
