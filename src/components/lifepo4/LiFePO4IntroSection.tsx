'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Battery, HelpCircle, Zap, Shield } from 'lucide-react';

const HERO_IMAGES = [
  '/lifepo4/home.jpg',
  '/lifepo4/marin.jpg',
  '/lifepo4/forklift.jpg',
  '/lifepo4/solarpoles.jpg',
  '/lifepo4/carport.jpg',
  '/lifepo4/ebus.jpg'
];

interface IntroCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  hoverBorderColor: string;
  hoverShadowColor: string;
  delay: string;
}

const IntroCard: React.FC<IntroCardProps> = ({
  title,
  description,
  icon,
  gradientFrom,
  gradientTo,
  borderColor,
  hoverBorderColor,
  hoverShadowColor,
  delay,
}) => {
  return (
    <div 
      className={`
        group relative overflow-hidden rounded-3xl border-2 p-8 
        bg-white/5 backdrop-blur-sm transition-all duration-700 
        hover:scale-105 hover:z-10 hover:shadow-2xl
        ${borderColor} hover:${hoverBorderColor} hover:${hoverShadowColor}
        cursor-pointer animate-fade-in-up
      `}
      style={{ animationDelay: delay }}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-ping" />
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
          {icon}
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-500">
          {title}
        </h2>
        
        <p className="text-blue-100/90 text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
          {description}
        </p>

        {/* Hover effect line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-700" />
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-cyan-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-cyan-600/10 group-hover:to-blue-600/10 transition-all duration-700" />
    </div>
  );
};

const LiFePO4IntroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`LiFePO4 Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight pt-30">
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              LiFePO₄
            </span>
            <span className="block text-3xl lg:text-5xl mt-4 text-white/90 font-light">
              Batarya Teknolojisi
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Güvenli, uzun ömürlü ve yüksek performanslı Lityum Demir Fosfat batarya teknolojisi. 
            <span className="text-cyan-300 font-semibold"> Modern enerji çözümlerinin geleceği.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-30">
          {/* LiFePO4 Nedir? */}
          <IntroCard
            title="LiFePO4 Nedir?"
            description="Lityum Demir Fosfat (LiFePO4) batarya teknolojisi, güvenli, uzun ömürlü ve yüksek performanslı enerji depolama çözümüdür. Termal kararlılığı ve güvenlik özellikleri ile öne çıkan bu teknoloji, modern enerji sistemlerinin vazgeçilmez parçasıdır."
            icon={<Battery className="w-10 h-10 text-white" />}
            gradientFrom="from-blue-600"
            gradientTo="to-cyan-600"
            borderColor="border-blue-500/30"
            hoverBorderColor="border-blue-400/60"
            hoverShadowColor="shadow-blue-500/25"
            delay="0ms"
          />
          
          {/* Neden LiFePO4? */}
          <IntroCard
            title="Neden LiFePO4?"
            description="LiFePO4 bataryalar, geleneksel lityum iyon bataryalara göre daha güvenli, daha uzun ömürlü ve daha kararlıdır. Yüksek enerji yoğunluğu, hızlı şarj kapasitesi ve çevre dostu yapısı ile endüstriyel ve ticari uygulamalarda tercih edilen teknolojidir."
            icon={<HelpCircle className="w-10 h-10 text-white" />}
            gradientFrom="from-cyan-600"
            gradientTo="to-blue-600"
            borderColor="border-cyan-500/30"
            hoverBorderColor="border-cyan-400/60"
            hoverShadowColor="shadow-cyan-500/25"
            delay="200ms"
          />
        </div>

        

        
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default LiFePO4IntroSection;