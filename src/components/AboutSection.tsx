"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Target,
  Award,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animasyonu
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content animasyonu
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Values animasyonu
      gsap.fromTo(
        valuesRef.current?.children || [],
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    "Kaliteli ve güvenilir enerji çözümleri",
    "Müşteri memnuniyeti odaklı hizmet",
    "Yenilikçi teknoloji kullanımı",
    "Çevre dostu sürdürülebilir projeler",
    "Uzman ekip ve profesyonel destek",
    "7/24 teknik servis garantisi",
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Hakkımızda
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Enerji sektöründe 10+ yıllık deneyimimizle, modern teknoloji ve
            <span className="text-gray-900 font-semibold">
              {" "}
              sürdürülebilir çözümler{" "}
            </span>
            sunarak geleceğin enerjisini bugünden inşa ediyoruz.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Centered Content */}
          <div ref={contentRef} className="px-4 sm:px-0 max-w-4xl">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Güçlü Enerji, Güvenilir Gelecek
              </h3>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold text-blue-600">Tekin Power</span>{" "}
                olarak, enerji sektöründeki derin deneyimimizi modern teknoloji
                ile birleştirerek müşterilerimize en ileri düzeyde çözümler
                sunuyoruz.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                LiFePO₄ batarya teknolojileri, güneş enerjisi sistemleri ve
                hibrit enerji çözümleri alanında uzmanlaşmış ekibimizle, her
                projeyi benzersiz ihtiyaçlar doğrultusunda özel olarak
                tasarlıyoruz.
              </p>

              {/* Values List */}
              <div
                ref={valuesRef}
                className="space-y-2 sm:space-y-3 mt-6 sm:mt-8"
              >
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Değerlerimiz:
                </h4>
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4 sm:pt-6">
                <Link
                  href="/hakkimizda"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-2 w-full sm:w-fit justify-center sm:justify-start"
                >
                  <span>Daha Fazla Bilgi</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
