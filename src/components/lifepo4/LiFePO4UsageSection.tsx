'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Anchor, Home, Truck, Zap, Car, Building } from 'lucide-react';

interface UsageArea {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
}

const USAGE_AREAS: UsageArea[] = [
  {
    id: 'marin',
    title: 'Denizcilik Uygulamaları',
    description: 'Tekneler, yatlar ve deniz araçları için güvenli ve dayanıklı enerji çözümleri',
    image: '/lifepo4/marin.jpg',
    icon: <Anchor className="w-8 h-8" />,
    features: ['Su geçirmez', 'Tuzlu suya dayanıklı', 'Yüksek güvenlik', 'Uzun ömür']
  },
  {
    id: 'home',
    title: 'Konut Enerji Sistemleri',
    description: 'Evler için güvenli, uzun ömürlü ve çevre dostu enerji depolama',
    image: '/lifepo4/home.jpg',
    icon: <Home className="w-8 h-8" />,
    features: ['Güvenli', 'Sessiz çalışma', 'Çevre dostu', 'Düşük bakım']
  },
  {
    id: 'forklift',
    title: 'Endüstriyel Araçlar',
    description: 'Forklift, golf arabası ve diğer endüstriyel araçlar için yüksek performans',
    image: '/lifepo4/forklift.jpg',
    icon: <Truck className="w-8 h-8" />,
    features: ['Yüksek performans', 'Hızlı şarj', 'Dayanıklı', 'Verimli']
  },
  {
    id: 'solar',
    title: 'Solar Enerji Sistemleri',
    description: 'Güneş enerjisi sistemleri için optimize edilmiş enerji depolama',
    image: '/lifepo4/solarpoles.jpg',
    icon: <Zap className="w-8 h-8" />,
    features: ['Solar uyumlu', 'Yüksek verim', 'Uzun ömür', 'Çevre dostu']
  },
  {
    id: 'carport',
    title: 'Carport Sistemleri',
    description: 'Elektrikli araç şarj istasyonları ve carport uygulamaları',
    image: '/lifepo4/carport.jpg',
    icon: <Car className="w-8 h-8" />,
    features: ['Hızlı şarj', 'Güvenli', 'Dayanıklı', 'Modern tasarım']
  },
  {
    id: 'commercial',
    title: 'Ticari Uygulamalar',
    description: 'Büyük ölçekli ticari ve endüstriyel enerji depolama çözümleri',
    image: '/lifepo4/ebus.jpg',
    icon: <Building className="w-8 h-8" />,
    features: ['Büyük kapasite', 'Yüksek güvenilirlik', 'Ölçeklenebilir', 'Maliyet etkin']
  }
];

const LiFePO4UsageSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % USAGE_AREAS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % USAGE_AREAS.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? USAGE_AREAS.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentArea = USAGE_AREAS[currentSlide];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-900 via-teal-900 to-emerald-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <span className="text-white/90 text-sm font-medium">Uygulama Alanları</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Kullanım Alanları
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            LiFePO4 bataryalarımız çok çeşitli sektörlerde güvenilir enerji çözümleri sunar
          </p>
        </div>

        <div className="relative">
          {/* Main slider container */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
            <Image
              src={currentArea.image}
              alt={currentArea.title}
              fill
              className="object-cover transition-all duration-1000"
              priority
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-lg">
                    {currentArea.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">{currentArea.title}</h3>
                </div>
                
                <p className="text-blue-100/90 text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
                  {currentArea.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentArea.features.map((feature, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-center"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-white font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {USAGE_AREAS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white shadow-lg scale-125'
                    : 'bg-white/40 hover:bg-white/60 hover:scale-110'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                  : 'bg-white/10 text-white/60 border border-white/20'
              }`}
            >
              {isAutoPlaying ? 'Otomatik Oynatma Açık' : 'Otomatik Oynatma Kapalı'}
            </button>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Yüksek Performans</h3>
            <p className="text-blue-200/80">Maksimum enerji verimliliği</p>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Anchor className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Güvenilir</h3>
            <p className="text-blue-200/80">7/24 kesintisiz çalışma</p>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Çevre Dostu</h3>
            <p className="text-blue-200/80">Sürdürülebilir enerji</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiFePO4UsageSection;
