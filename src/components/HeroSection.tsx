"use client";

import { gsap } from "gsap";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { useEffect, useRef, useState } from "react";
import AdaptiveVideo from "@/components/AdaptiveVideo";
import MotorHeroPresentation from "@/components/MotorHeroPresentation";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [particles, setParticles] = useState<
    Array<{ left: number; top: number; delay: number }>
  >([]);
  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = Array.from({ length: 8 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Background animasyonu
    tl.fromTo(
      backgroundRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
    )
      // Title animasyonu
      .fromTo(
        titleRef.current?.children || [],
        { y: 100, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=1.5"
      )
      // Subtitle animasyonu
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      // CTA butonları animasyonu
      .fromTo(
        ctaRef.current?.children || [],
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      // Kategori indicators animasyonu
      .fromTo(
        categoriesRef.current?.children || [],
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

    // Floating animasyonu
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });

    // Particle animasyonu
    gsap.to(".particle", {
      y: -100,
      x: "random(-50, 50)",
      opacity: 0,
      duration: "random(3, 6)",
      ease: "power2.out",
      repeat: -1,
      delay: "random(0, 3)",
    });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const categories = solutions;

  // Slider navigation functions
  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % categories.length;
    changeSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + categories.length) % categories.length;
    changeSlide(newSlide);
  };

  const changeSlide = (newSlide: number) => {
    setCurrentSlide(newSlide);
  };

  const currentCategory = categories[currentSlide];

  // Empty media slots still advance; no video or poster request is made for them.
  useEffect(() => {
    if (currentCategory.video) return;
    const timer = window.setTimeout(() => {
      setCurrentSlide((slide) => (slide + 1) % solutions.length);
    }, currentCategory.presentation ? 12000 : 6000);
    return () => window.clearTimeout(timer);
  }, [currentSlide, currentCategory.video, currentCategory.presentation]);

  return (
    <section
      id="hero"
      className={`relative flex items-center justify-center overflow-hidden bg-slate-950 pt-28 sm:pt-32 ${currentCategory.video || currentCategory.presentation ? 'mobile-video-hero' : ''} ${currentCategory.videoFit === 'contain' ? 'lg:aspect-video' : ''}`}
      ref={heroRef}
    >
      {/* Dynamic Animated Background */}
      <div ref={backgroundRef} className="pointer-events-none absolute inset-0">
        {currentCategory.presentation === 'black-outboard' && <MotorHeroPresentation />}
        {currentCategory.video && (
          <div className="mobile-video-stage absolute inset-0">
            <AdaptiveVideo
              key={currentCategory.id}
              name={currentCategory.video}
              poster={currentCategory.videoPoster}
              smoothStart
              prefix="landing-page"
              fit={currentCategory.videoFit ?? 'cover'}
              fillBackground={currentCategory.videoFit === 'contain'}
              label={`${currentCategory.productTitle} arka plan videosu`}
              onEnded={nextSlide}
            />
          </div>
        )}

        {/* Light overlay for better text visibility */}
        <div className={`mobile-video-shade absolute inset-0 ${currentCategory.id === 'tekne' ? 'bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-slate-950/10' : currentCategory.videoFit === 'contain' ? 'bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/15' : 'bg-black/30'}`}></div>

        {/* Dynamic gradient overlay - more subtle */}
        <div
          className={`mobile-video-tint absolute inset-0 bg-gradient-to-br ${currentCategory.bgGradient} ${currentCategory.videoFit === 'contain' ? 'opacity-20' : 'opacity-40'} transition-all duration-1000`}
        ></div>

        {/* Animated particles */}
        {currentCategory.videoFit !== 'contain' && particles.map((particle, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

        {/* Geometric shapes */}
        <div hidden={currentCategory.videoFit === 'contain'}>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl floating-element"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl floating-element"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl floating-element"></div>
        </div>
      </div>

      <div className="mobile-video-content relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className={`mobile-video-copy flex flex-col justify-center gap-8 min-h-[620px] py-12 sm:py-14 ${currentCategory.videoFit === 'contain' ? 'lg:min-h-0 lg:py-8' : 'lg:min-h-[640px]'}`}>
          <div className="max-w-3xl text-left">
            <div ref={titleRef} className="mb-4 sm:mb-6">
              <h1 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg leading-tight">
                {currentCategory.productTitle.toLocaleUpperCase('tr-TR')}
              </h1>
            </div>

            <div ref={subtitleRef}>
              <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed drop-shadow-md px-2 lg:px-0">
                {currentCategory.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
            >
              <Link
                href={currentCategory.href}
                aria-label={`${currentCategory.productTitle} detaylarını incele`}
                className="group bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
                <span>Detayları İncele</span>
              </Link>
            </div>
          </div>

          {/* Controls for the full-screen video; no thumbnail video cards. */}
          <div className="max-w-2xl border-t border-white/25 pt-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white/90">
                  Çözümlerimiz · {currentSlide + 1} / {categories.length}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  aria-label="Önceki çözüm"
                  onClick={prevSlide}
                  className="w-10 h-10 bg-white/15 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group"
                >
                  <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </button>

                <button
                  aria-label="Sonraki çözüm"
                  onClick={nextSlide}
                  className="w-10 h-10 bg-white/15 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group"
                >
                  <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </button>

              </div>
            </div>

            {/* Category Indicators */}
            <div ref={categoriesRef} className="mt-5 flex flex-wrap gap-2">
              {categories.map((_, index) => (
                <button
                  key={index}
                  aria-label={`${categories[index].productTitle} slaydını göster`}
                  aria-current={index === currentSlide ? "true" : undefined}
                  onClick={() => {
                    changeSlide(index);
                  }}
                  className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? `bg-gradient-to-r ${categories[index].gradient} scale-125`
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// empty commit
