'use client';

import Navbar from '@/components/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
      <section className="relative h-screen overflow-hidden">
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
              <img
                src={photo.src}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-transparent to-cyan-900/60"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {photo.title}
                </h2>
                <p className="text-xl md:text-2xl font-light drop-shadow-md max-w-2xl">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div ref={sectionsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* About Us Section */}
        <section className="text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Enerji SA</span>, gelişmiş LiFePO₄ batarya teknolojileri 
                ve yenilikçi güneş enerjisi sistemleri konusunda uzmanlaşmış, öncü bir enerji çözümleri şirketidir. 
                2010 yılından bu yana, sürdürülebilir ve güvenilir enerji çözümleri sunarak sektörde öncü rol oynamaktayız.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Denizcilik, havacılık, endüstriyel otomasyon ve elektrikli ulaşım gibi kritik sektörlerde 
                faaliyet gösteren müşterilerimize, özel tasarlanmış enerji depolama ve yönetim sistemleri 
                geliştiriyoruz. Teknolojik yeniliği sürdürülebilirlik ile harmanlayarak, geleceğin enerji 
                ihtiyaçlarına bugünden cevap veriyoruz.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">ISO 9001 Belgeli</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <Battery className="w-5 h-5" />
                  <span className="font-medium">LiFePO₄ Uzmanı</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-600">
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">Uluslararası Hizmet</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">500+</h4>
                  <p className="text-gray-600">Müşteri</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">1000+</h4>
                  <p className="text-gray-600">Proje</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Battery className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">50MW</h4>
                  <p className="text-gray-600">Kurulu Güç</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">25K</h4>
                  <p className="text-gray-600">Ton CO₂ Tasarruf</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Vizyonumuz</h3>
            </div>
            
            <p className="text-lg leading-relaxed opacity-95">
              Sürdürülebilir enerji teknolojilerinde küresel bir lider olmak ve gelecek nesillere 
              temiz, güvenilir enerji çözümleri bırakmak. Teknolojik yeniliği çevresel sorumluluk 
              ile harmanlayarak, karbon nötr bir dünya vizyonuna katkıda bulunmak.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Karbon nötr enerji çözümleri</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Teknolojik liderlik</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Sürdürülebilir gelecek</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Misyonumuz</h3>
            </div>
            
            <p className="text-lg leading-relaxed opacity-95">
              En ileri LiFePO₄ batarya teknolojisi ve güneş enerjisi sistemleri ile müşterilerimize 
              özel tasarlanmış, güvenilir ve verimli enerji çözümleri sunmak. Her projede kalite, 
              güvenlik ve sürdürülebilirliği ön planda tutarak sektörde standartları belirlemek.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Müşteri odaklı çözümler</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Kalite ve güvenilirlik</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Yenilikçi teknoloji</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="text-center bg-gray-50 rounded-3xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Değerlerimiz</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Yenilikçilik</h4>
              <p className="text-gray-600">Sürekli araştırma ve geliştirme ile teknolojide öncü olmak</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Sürdürülebilirlik</h4>
              <p className="text-gray-600">Çevre dostu teknolojiler ile geleceği korumak</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Kalite</h4>
              <p className="text-gray-600">Her projede mükemmelliği hedeflemek</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">İşbirliği</h4>
              <p className="text-gray-600">Müşterilerle güçlü ortaklıklar kurmak</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HakkimizdaPage;
