'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
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
import Link from 'next/link';
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

  // Kullanım alanları tanımı
  const applicationAreas = [
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

  // İstatistik verileri
  const batteryStats = [
    { number: 10000, suffix: '+', label: 'Şarj Döngüsü', description: 'Uzun ömürlü kullanım' },
    { number: 95, suffix: '%', label: 'Enerji Verimliliği', description: 'Düşük enerji kaybı' },
    { number: 25, suffix: '+', label: 'Yıl Ömür', description: 'Güvenilir performans' },
    { number: 0, suffix: '%', label: 'Toksik Madde', description: 'Çevre dostu yapı' }
  ];

  return (
    <section id="battery" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              LiFePO₄ Batarya Nedir?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lityum Demir Fosfat batarya teknolojisi ile güvenlik, uzun ömür ve yüksek performans 
            sunan ideal enerji depolama çözümü.
          </p>
        </div>

        {/* Main Content - Clean and Simple */}
        <div className="max-w-4xl mx-auto">
          {/* Quick Intro */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              <span className="text-gray-900 font-semibold">LiFePO₄ (Lityum Demir Fosfat)</span> batarya, 
              güvenlik ve uzun ömür arayan kullanıcılar için ideal enerji depolama çözümüdür.
            </p>
          </div>

          {/* Why LiFePO4 - Card Design */}
          <div ref={advantagesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {advantages.slice(0, 3).map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-500"
                >
                  {/* Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${advantage.color} p-4 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description.substring(0, 120)}...
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/lifepo4" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-2">
              <span>LiFePO₄ Çözümlerimizi İnceleyin</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatterySection;
