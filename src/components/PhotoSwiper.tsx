'use client';

import { solutions } from '@/data/solutions';
import DredgingHeroPresentation from '@/components/DredgingHeroPresentation';

import { gsap } from 'gsap';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Pause,
  Play
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const PhotoSwiper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const dotsRef = useRef<HTMLButtonElement[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const blurredImageRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = solutions;

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !slidesRef.current.includes(el)) {
      slidesRef.current[index] = el;
    }
  };

  const addToDotsRefs = (el: HTMLButtonElement | null, index: number) => {
    if (el && !dotsRef.current.includes(el)) {
      dotsRef.current[index] = el;
    }
  };

  const animateSlide = (newIndex: number, direction: 'next' | 'prev' = 'next') => {
    const currentSlideEl = slidesRef.current[currentSlide];
    const newSlideEl = slidesRef.current[newIndex];
    const currentDot = dotsRef.current[currentSlide];
    const newDot = dotsRef.current[newIndex];

    if (!currentSlideEl || !newSlideEl) return;

    const tl = gsap.timeline();

    // Background transition
    tl.to([backgroundRef.current, blurredImageRef.current], {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    })
      .call(() => {
        setCurrentSlide(newIndex);
      })
      .to([backgroundRef.current, blurredImageRef.current], {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.inOut'
      }, '-=0.4');

    // Slide out current
    gsap.to(currentSlideEl, {
      x: direction === 'next' ? -100 : 100,
      opacity: 0,
      scale: 0.8,
      rotationY: direction === 'next' ? -15 : 15,
      duration: 1.0,
      ease: 'power2.inOut'
    });

    // Slide in new
    gsap.fromTo(newSlideEl,
      {
        x: direction === 'next' ? 100 : -100,
        opacity: 0,
        scale: 0.8,
        rotationY: direction === 'next' ? 15 : -15
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.0,
        ease: 'back.out(1.7)',
        delay: 0.3
      }
    );

    // Title animation
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 }
    );

    // Dots animation
    if (currentDot) {
      gsap.to(currentDot, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (newDot) {
      gsap.to(newDot, {
        scale: 1.3,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    }
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    animateSlide(newIndex, 'next');
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    animateSlide(newIndex, 'prev');
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    const direction = index > currentSlide ? 'next' : 'prev';
    animateSlide(index, direction);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, slides[currentSlide].id === 'deniz-gol' ? 10000 : 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentSlide, nextSlide]);

  // Initial animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(slidesRef.current[0],
        { scale: 0.8, opacity: 0, rotationY: 15 },
        { scale: 1, opacity: 1, rotationY: 0, duration: 1, ease: 'back.out(1.7)' },
        '-=0.5'
      )
      .fromTo(titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      );

    // Set initial dot state
    if (dotsRef.current[0]) {
      gsap.set(dotsRef.current[0], { scale: 1.3 });
    }
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <section aria-label="Çözümlerimiz" className="relative w-full overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div ref={backgroundRef} className="absolute inset-0">
        {/* Blurred background image/video */}
        <div ref={blurredImageRef} className="absolute inset-0">
          <div className="relative w-full h-full overflow-hidden">
            {currentSlideData.image && <Image
              src={currentSlideData.image}
              alt={`${currentSlideData.title} background`}
              fill
              className="object-cover blur-2xl scale-110 transition-all duration-1000"
              sizes="100vw"
              loading="lazy"
              quality={50}
            />}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        <div className={`absolute inset-0 ${currentSlideData.bgGradient} transition-all duration-1000`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} opacity-10 transition-all duration-1000`}></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div ref={containerRef} className="relative z-10 w-full">
        <div className="sr-only">
          <div ref={titleRef}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              <span className="block">Tekin Power</span>
              <span className={`block bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text text-transparent transition-all duration-1000`}>
                Çözümlerimiz
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4 sm:px-0">
              Gelişmiş LiFePO4 batarya teknolojisi ile yenilenebilir enerji dönüşümünde öncülük eden,
              elektrikli marin, tekne, pompa, enerji depolama, askeri sistem çözümleri ve su altı tarama ve temizleme çözümleri sunuyoruz.
            </p>
          </div>
        </div>

        {/* Main Swiper Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            aria-label="Önceki çözüm"
            onClick={prevSlide}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-black/30 border border-white/30 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors group shadow-xl"
          >
            <ChevronLeft className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button
            aria-label="Sonraki çözüm"
            onClick={nextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-black/30 border border-white/30 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors group shadow-xl"
          >
            <ChevronRight className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Slides Container */}
          <div className={`relative w-full h-[100svh] min-h-[640px] perspective-1000 ${currentSlideData.id === 'deniz-gol' ? 'dredging-service-slides' : ''}`}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                ref={el => addToRefs(el, index)}
                className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
                style={{ display: index === currentSlide ? 'block' : 'none' }}
              >
                <div className="relative w-full h-full overflow-hidden">

                  {slide.id === 'deniz-gol' && <DredgingHeroPresentation selected={index === currentSlide && isPlaying} />}
                  {slide.id !== 'deniz-gol' && slide.image && <div className={slide.presentation === 'motor-lineup' ? 'motor-service-stage absolute inset-0' : 'absolute inset-0'}><Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className={slide.slideImage ? 'object-cover hidden sm:block' : 'object-cover'}
                    sizes={slide.presentation === 'motor-lineup' ? '170vw' : '100vw'}
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={85}
                  /></div>}
                  {slide.slideImage && <Image
                    src={slide.slideImage}
                    alt=""
                    fill
                    className="object-cover sm:hidden"
                    sizes="100vw"
                    quality={85}
                  />}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30"></div>

                  {/* Content */}
                  <div className="absolute bottom-28 left-0 right-0 px-6 sm:px-24 lg:px-28">
                    <div className="max-w-2xl">
                      <span className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${slide.gradient} text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 shadow-lg`}>
                        {slide.title}
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 drop-shadow-lg">
                        {slide.productTitle}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed drop-shadow-md mb-4 sm:mb-6">
                        {slide.description}
                      </p>

                      {/* Detail Button */}
                      <Link
                        href={slide.href}
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg group text-sm sm:text-base"
                      >
                        <span>Detay İçin</span>
                        <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-5 inset-x-0 z-20 flex flex-col items-center justify-center space-y-3 sm:space-y-4">
          {/* Interaction Hint */}
          <div className="text-center">
            <p className="text-white/70 text-xs sm:text-sm font-medium mb-2">
              Gezinmek için oklara veya noktalara tıklayın
            </p>
            <div className="flex items-center justify-center space-x-4 sm:space-x-6">
              {/* Dots */}
              <div className="flex space-x-2 sm:space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`${slides[index].productTitle} slaydını göster`}
                    aria-current={index === currentSlide ? 'true' : undefined}
                    ref={el => addToDotsRefs(el, index)}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                      ? `bg-gradient-to-r ${slides[index].gradient} scale-125`
                      : 'bg-white/30 hover:bg-white/50'
                      }`}
                  />
                ))}
              </div>

              {/* Play/Pause Button */}
              <button
                aria-label={isPlaying ? 'Slaytları duraklat' : 'Slaytları oynat'}
                onClick={toggleAutoplay}
                className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group shadow-lg"
              >
                {isPlaying ? (
                  <Pause className="w-4 sm:w-5 h-4 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <Play className="w-4 sm:w-5 h-4 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSwiper;
