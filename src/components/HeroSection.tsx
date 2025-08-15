'use client';

import { gsap } from 'gsap';
import {
  ArrowRight,
  Bus,
  Car,
  ChevronLeft,
  ChevronRight,
  Drone,
  Play,
  Ship
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const cardVideoRef = useRef<HTMLVideoElement>(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Background animasyonu
    tl.fromTo(backgroundRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
    )
    // Title animasyonu
    .fromTo(titleRef.current?.children || [],
      { y: 100, opacity: 0, rotateX: 45 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out' }, 
      '-=1.5'
    )
    // Subtitle animasyonu
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    // CTA butonları animasyonu
    .fromTo(ctaRef.current?.children || [],
      { y: 30, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' },
      '-=0.5'
    )
    // Sağ taraf kart animasyonu
    .fromTo(cardRef.current,
      { x: 80, opacity: 0, scale: 0.8, rotateY: 15 },
      { x: 0, opacity: 1, scale: 1, rotateY: 0, duration: 1.2, ease: 'back.out(1.2)' },
      '-=0.7'
    )
    // Kategori indicators animasyonu
    .fromTo(categoriesRef.current?.children || [],
      { y: 30, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.3'
    );

    // Floating animasyonu
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    // Particle animasyonu
    gsap.to('.particle', {
      y: -100,
      x: 'random(-50, 50)',
      opacity: 0,
      duration: 'random(3, 6)',
      ease: 'power2.out',
      repeat: -1,
      delay: 'random(0, 3)'
    });

  }, []);

  const categories = [
    {
      icon: Ship,
      title: 'Marin',
      description: 'Denizcilik enerji çözümleri',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-900/90 via-cyan-800/90 to-blue-900/90',
      video: '/landing-page-videos/A_luxury_yacht_202508131341.mp4',
      details: 'Denizcilik sektörü için özel tasarlanmış LiFePO₄ batarya sistemleri ve solar çözümler.'
    },
    {
      icon: Car,
      title: 'Car Port',
      description: 'Solar otopark sistemleri',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-900/90 via-emerald-800/90 to-green-900/90',
      video: '/landing-page-videos/A_fully_equipped_202508131355.mp4',
      details: 'Otopark alanlarının üzerine kurulu güneş panelleri ile enerji üretimi ve araç koruması.'
    },
    {
      icon: Bus,
      title: 'E-Bus',
      description: 'Elektrikli otobüs sistemleri',
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-900/90 via-violet-800/90 to-purple-900/90',
      video: '/landing-page-videos/Aug_13__1322_16s_202508131415_y7xsn.mp4',
      details: 'Şehir içi toplu taşıma için sürdürülebilir ve sessiz elektrikli otobüs teknolojileri.'
    },
    {
      icon: Drone,
      title: 'Drone',
      description: 'İHA enerji teknolojileri',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-900/90 via-red-800/90 to-orange-900/90',
      video: '/landing-page-videos/A_fully_equipped_202508131355.mp4',
      details: 'Havacılık sektörü için yüksek performanslı ve hafif enerji depolama çözümleri.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Slider navigation functions
  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % categories.length;
    changeSlide(newSlide, 'next');
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + categories.length) % categories.length;
    changeSlide(newSlide, 'prev');
  };

  const changeSlide = (newSlide: number, direction: 'next' | 'prev' = 'next') => {
    const tl = gsap.timeline();
    
    // Only background fade - card stays visible
    tl.to(backgroundRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
    // Change slide content instantly
    .call(() => {
      setCurrentSlide(newSlide);
    })
    // Quick background fade in
    .to(backgroundRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out'
    })
    // Restart videos when slide changes
    .call(() => {
      const backgroundVideo = backgroundVideoRef.current;
      const cardVideo = cardVideoRef.current;
      
      if (backgroundVideo) {
        backgroundVideo.currentTime = 0;
        backgroundVideo.play().catch(e => console.log('Video play failed:', e));
      }
      if (cardVideo) {
        cardVideo.currentTime = 0;
        cardVideo.play().catch(e => console.log('Video play failed:', e));
      }
    });
  };

  // Video event handlers
  useEffect(() => {
    const handleVideoEnd = () => {
      const newSlide = (currentSlide + 1) % categories.length;
      changeSlide(newSlide, 'next');
    };

    const backgroundVideo = backgroundVideoRef.current;
    const cardVideo = cardVideoRef.current;

    if (backgroundVideo) {
      backgroundVideo.addEventListener('ended', handleVideoEnd);
    }
    if (cardVideo) {
      cardVideo.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (backgroundVideo) {
        backgroundVideo.removeEventListener('ended', handleVideoEnd);
      }
      if (cardVideo) {
        cardVideo.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [currentSlide, categories.length]);



  const currentCategory = categories[currentSlide];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" ref={heroRef}>
      {/* Dynamic Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0">
        {/* Background Video - Full Hero */}
        <video
          ref={backgroundVideoRef}
          src={currentCategory.video}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
          autoPlay
          muted
          playsInline
          preload="metadata"
        />
        
        {/* Light overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Dynamic gradient overlay - more subtle */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentCategory.bgGradient} opacity-40 transition-all duration-1000`}></div>
        
        {/* Animated particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}

        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl floating-element"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl floating-element"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl floating-element"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div ref={titleRef} className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                <span className="block">Geleceğin</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  Enerji Çözümleri
                </span>
                <span className="block">Bugünden Başlar</span>
              </h1>
            </div>

            <div ref={subtitleRef}>
              <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed drop-shadow-md">
                Modern LiFePO₄ batarya teknolojisi ve yenilikçi güneş enerjisi sistemleri ile 
                <span className="text-white font-semibold"> güçlü, sürdürülebilir ve güvenilir </span>
                enerji çözümleri sunuyoruz.
              </p>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-blue-500/25 flex items-center space-x-2"
              >
                <span>Hemen Teklif Al</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="group bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Çözümlerimizi Keşfet</span>
              </button>
            </div>
          </div>

          {/* Right Content - Category Slider */}
          <div className="relative">
            {/* Navigation Arrows - Outside the card */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-20 w-12 h-12 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Main Category Card */}
            <div className="relative mx-8">
              <div ref={cardRef} className="relative rounded-3xl mb-6 min-h-[400px] flex flex-col justify-center items-center text-center transition-all duration-500 hover:scale-105 overflow-hidden shadow-xl">
                {/* Background Video - Full Card */}
                <video
                  ref={cardVideoRef}
                  src={currentCategory.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                />
                
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col justify-center items-center text-center h-full">
                  <h3 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">{currentCategory.title}</h3>
                  <p className="text-white text-xl leading-relaxed drop-shadow-md max-w-md">{currentCategory.details}</p>
                </div>
              </div>
            </div>

            {/* Category Indicators */}
            <div className="flex justify-center space-x-2">
              {categories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const direction = index > currentSlide ? 'next' : 'prev';
                    changeSlide(index, direction);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? `bg-gradient-to-r ${categories[index].gradient}` 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>


          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
