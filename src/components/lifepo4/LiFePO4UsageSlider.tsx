'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Anchor, Home, Truck, Zap } from 'lucide-react';

interface UsageArea {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const USAGE_AREAS: UsageArea[] = [
  {
    id: 'marin',
    title: 'Denizcilik Uygulamaları',
    description: 'Tekneler, yatlar ve deniz araçları için güvenli ve dayanıklı enerji çözümleri',
    image: '/lifepo4/marin.jpg',
    icon: <Anchor className="w-6 h-6" />
  },
  {
    id: 'home',
    title: 'Konut Enerji Sistemleri',
    description: 'Evler için güvenli, uzun ömürlü ve çevre dostu enerji depolama',
    image: '/lifepo4/home.jpg',
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 'forklift',
    title: 'Endüstriyel Araçlar',
    description: 'Forklift, golf arabası ve diğer endüstriyel araçlar için yüksek performans',
    image: '/lifepo4/forklift.jpg',
    icon: <Truck className="w-6 h-6" />
  },
  {
    id: 'solar',
    title: 'Solar Enerji Sistemleri',
    description: 'Güneş enerjisi sistemleri için optimize edilmiş enerji depolama',
    image: '/lifepo4/solarpoles.jpg',
    icon: <Zap className="w-6 h-6" />
  }
];

interface UsageSliderProps {
  title?: string;
  className?: string;
}

const LiFePO4UsageSlider: React.FC<UsageSliderProps> = ({ 
  title = "Kullanım Alanları",
  className = ""
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % USAGE_AREAS.length);
    }, 4000);

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
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg">
          {currentArea.icon}
        </div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>

      <div className="relative group">
        {/* Main slider container */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
          <Image
            src={currentArea.image}
            alt={currentArea.title}
            fill
            className="object-cover transition-all duration-500"
            priority
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">{currentArea.title}</h3>
              <p className="text-blue-100/90 text-sm leading-relaxed max-w-md">
                {currentArea.description}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center space-x-2 mt-4">
          {USAGE_AREAS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white shadow-lg scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                : 'bg-white/10 text-white/60 border border-white/20'
            }`}
          >
            {isAutoPlaying ? 'Otomatik Oynatma Açık' : 'Otomatik Oynatma Kapalı'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiFePO4UsageSlider;
