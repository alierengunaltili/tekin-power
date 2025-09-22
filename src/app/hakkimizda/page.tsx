'use client';

import Navbar from '@/components/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Battery,
  ChevronLeft,
  ChevronRight,
  Eye,
  Globe,
  Leaf,
  Target,
  Users,
  Zap
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const HakkimizdaPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const photos = [
    {
      src: '/hakkimizda-photos/solar-panel-plant-on-roof-top-2023-11-27-04-54-39-utc.jpg',
      title: 'Güneş Enerjisi Sistemleri',
      description: 'Sürdürülebilir geleceğin temeli'
    },
    {
      src: '/hakkimizda-photos/marin.jpg',
      title: 'Denizcilik Çözümleri',
      description: 'Mavi sularda güvenilir enerji'
    },
    {
      src: '/hakkimizda-photos/e-bus.jpg',
      title: 'Elektrikli Ulaşım',
      description: 'Temiz şehir yaşamı için'
    },
    {
      src: '/hakkimizda-photos/drone.jpg',
      title: 'Havacılık Teknolojileri',
      description: 'Gökyüzünde yenilikçi çözümler'
    },
    {
      src: '/hakkimizda-photos/carport.jpg',
      title: 'Akıllı Otopark Sistemleri',
      description: 'Enerji üreten altyapılar'
    }
  ];

  // Auto swiper effect
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % photos.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [photos.length, isAutoPlaying]);

  // Clear auto-play temporarily when manual navigation
  const handleManualNavigation = (newSlide: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(newSlide);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Scroll animations
  useEffect(() => {
    const sections = sectionsRef.current?.children;
    if (sections) {
      gsap.fromTo(Array.from(sections), 
        {
          opacity: 0,
          y: 80,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % photos.length;
    handleManualNavigation(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + photos.length) % photos.length;
    handleManualNavigation(newSlide);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Photo Swiper Section */}
      <section className="relative h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
        {/* Swiper Container */}
        <div className="relative w-full h-full">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Background Image */}
              <Image
                src={photo.src}
                alt={photo.title}
                className="object-cover"
                fill
                priority={index === 0}
                sizes="100vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-transparent to-cyan-900/60"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-3 sm:px-4 z-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
                  {photo.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light drop-shadow-md max-w-2xl leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-20 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-20 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronRight className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Services Button */}
          <div className="absolute bottom-4 sm:bottom-6 right-2 sm:right-4 lg:right-6 z-30">
            <Link
              href="/hizmetlerimiz"
              className="group bg-gradient-to-r from-blue-500/90 to-cyan-500/90 backdrop-blur-lg border border-white/20 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 hover:from-blue-600/90 hover:to-cyan-600/90 hover:scale-105 hover:shadow-xl shadow-blue-500/25 flex items-center space-x-1 sm:space-x-2"
            >
              <span className="hidden sm:inline">Hizmetlerimizi Detaylı Görüntüle</span>
              <span className="sm:hidden">Hizmetler</span>
              <svg 
                className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="bg-gray-50 min-h-screen w-full">
        <div ref={sectionsRef} className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-8 sm:space-y-10 lg:space-y-12">
          
          {/* About Us Section */}
          <section className="text-center">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Hakkımızda
              </h2>
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 sm:mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Content Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-left space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Biz Kimiz?</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Tekin Power Energy</span>, yenilikçi projeleriyle enerji sektöründe fark yaratan bir çözüm ortağıdır. 
                    Gelişen teknolojiye uyum sağlayarak; marin, solar enerji sistemleri, ebus, drone, golf araçları, forklift, carport, solar pole gibi 
                    farklı alanlarda çözümler sunan şirket, enerji verimliliği ve sürdürülebilirliği hedeflemektedir.
                  </p>
                  
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Yüksek performanslı ve uzun ömürlü enerji çözümlerinde LiFePO4 bataryalar kullanarak, 
                    güvenilir ve sürdürülebilir bir gelecek inşa etmeyi hedefler.
                  </p>

                  
                </div>
              </div>

              {/* Statistics Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div className="text-center">
                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">500+</h4>
                    <p className="text-sm sm:text-base text-gray-600">Müşteri</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">1000+</h4>
                    <p className="text-sm sm:text-base text-gray-600">Proje</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Battery className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">50MW</h4>
                    <p className="text-sm sm:text-base text-gray-600">Kurulu Güç</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">25K</h4>
                    <p className="text-sm sm:text-base text-gray-600">Ton CO₂ Tasarruf</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Vizyonumuz</h3>
              </div>
              
              <p className="text-lg leading-relaxed opacity-95 mb-6">
                Sıfır karbon salınımı hedefi doğrultusunda gelecek nesillere daha yaşanabilir bir dünya bırakmak için 
                yenilenebilir ve sürdürülebilir enerji teknolojilerinde lider bir firma olmaktır.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Yenilenebilir enerji çözümleri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Sıfır karbon hedefine uygun teknolojiler</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Sürdürülebilir gelecek</span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Misyonumuz</h3>
              </div>
              
              <p className="text-lg leading-relaxed opacity-95 mb-6">
                Güncel, çevreci, kaliteli ve verimli depolama teknolojilerini, yenilenebilir ve sürdürülebilir enerji 
                sistemleri alanında her bir müşterimiz özelinde kullanmak ve kullandırmaktır.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Her bir müşterimiz özelinde</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Güncel, çevreci, kaliteli ve verimli</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Kullanmak ve kullandırmak</span>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Değerlerimiz</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Innovation Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Battery className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Yenilikçilik</h4>
                  <p className="text-gray-600">Sürekli araştırma ve geliştirme ile teknolojide öncü olmak</p>
                </div>
              </div>
              
              {/* Sustainability Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Sürdürülebilirlik</h4>
                  <p className="text-gray-600">Çevre dostu teknolojiler ile geleceği korumak</p>
                </div>
              </div>
              
              {/* Quality Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Kalite</h4>
                  <p className="text-gray-600">Her projede mükemmelliği hedeflemek</p>
                </div>
              </div>
              
              {/* Collaboration Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">İşbirliği</h4>
                  <p className="text-gray-600">Müşterilerle güçlü ortaklıklar kurmak</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HakkimizdaPage;
