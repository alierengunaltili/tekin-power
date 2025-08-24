'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Download, 
  FileText, 
  BookOpen, 
  Zap,
  Eye,
  Star,
  Calendar
} from 'lucide-react';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CatalogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const catalogsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

      // Catalogs animasyonu
      gsap.fromTo(catalogsRef.current?.children || [],
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: catalogsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Features animasyonu
      gsap.fromTo(featuresRef.current?.children || [],
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const catalogs = [
    {
      title: 'Tekin Power Çözümlerimiz',
      description: 'Enerji sistemlerimizin kapsamlı tanıtımı, teknik özellikler ve uygulama alanları hakkında detaylı bilgiler.',
      year: '2024',
      pages: '48',
      type: 'Genel Katalog',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      highlights: [
        'LiFePO₄ Batarya Sistemleri',
        'Güneş Enerjisi Çözümleri', 
        'Hibrit Enerji Sistemleri',
        'Proje Referansları'
      ]
    },
    {
      title: 'LiFePO₄ Batarya Ürün Kataloğu',
      description: 'LiFePO₄ batarya teknolojimiz, teknik spesifikasyonlar, performans değerleri ve sertifikalar.',
      year: '2024',
      pages: '32',
      type: 'Ürün Kataloğu',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      highlights: [
        'Teknik Spesifikasyonlar',
        'Performans Grafikleri',
        'Güvenlik Sertifikaları',
        'Kullanım Kılavuzu'
      ]
    },
    {
      title: 'Solar Sistem Tasarım Rehberi',
      description: 'Güneş enerjisi sistemi tasarımı, boyutlandırma hesaplamaları ve kurulum rehberi.',
      year: '2024',
      pages: '56',
      type: 'Teknik Doküman',
      icon: FileText,
      color: 'from-orange-500 to-yellow-500',
      featured: true,
      highlights: [
        'Sistem Tasarımı',
        'Hesaplama Araçları',
        'Kurulum Rehberi',
        'Bakım Prosedürleri'
      ]
    }
  ];

  const features = [
    {
      icon: Download,
      title: 'Ücretsiz İndirme',
      description: 'Tüm katalog ve broşürlerimiz ücretsiz olarak indirilebilir'
    },
    {
      icon: Eye,
      title: 'Güncel İçerik',
      description: 'En son ürün bilgileri ve teknolojik gelişmeler'
    },
    {
      icon: Star,
      title: 'Profesyonel Tasarım',
      description: 'Kolay okunabilir ve anlaşılır içerik düzeni'
    },
    {
      icon: Calendar,
      title: 'Düzenli Güncelleme',
      description: 'Kataloglarımız düzenli olarak güncellenmektedir'
    }
  ];

  const handleDownload = (catalogTitle: string) => {
    // Gerçek uygulamada burası dosya indirme işlemini tetikleyecek
    console.log(`${catalogTitle} indiriliyor...`);
    // Bu alanda actual file download logic'i olacak
  };

  const handlePreview = (catalogTitle: string) => {
    // Gerçek uygulamada burası katalog önizleme modalını açacak
    console.log(`${catalogTitle} önizleniyor...`);
  };

  return (
    <section id="catalog" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Katalog & Broşür
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ürünlerimiz ve çözümlerimiz hakkında detaylı bilgi edinmek için 
            katalog ve broşürlerimizi inceleyebilirsiniz.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <IconComponent className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Catalogs Grid */}
        <div ref={catalogsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {catalogs.map((catalog, index) => {
            const IconComponent = catalog.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-500 ${
                  catalog.featured ? 'ring-2 ring-blue-400/50' : ''
                }`}
              >
                {/* Featured Badge */}
                {catalog.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Öne Çıkan
                  </div>
                )}

                {/* Icon and Header */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br ${catalog.color} p-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-blue-200 mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full">{catalog.year}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">{catalog.pages} sayfa</span>
                  </div>
                  
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {catalog.type}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-blue-300 transition-colors duration-300">
                  {catalog.title}
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed text-center">
                  {catalog.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">İçeriğinde:</h4>
                  <ul className="space-y-2">
                    {catalog.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${catalog.color}`}></div>
                        <span className="text-blue-200 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleDownload(catalog.title)}
                    className={`w-full bg-gradient-to-r ${catalog.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2`}
                  >
                    <Download className="w-5 h-5" />
                    <span>İndir</span>
                  </button>
                  
                  <button
                    onClick={() => handlePreview(catalog.title)}
                    className="w-full bg-white/20 backdrop-blur-lg border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Önizle</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default CatalogSection;
