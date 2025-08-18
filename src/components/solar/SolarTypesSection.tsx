'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { 
  Home, 
  Lightbulb, 
  Car, 
  Building, 
  Waves,
  CheckCircle,
  Camera,
  Grid3X3,
  Zap,
  Shield,
  Award,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  X,
  ZoomIn
} from 'lucide-react';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SolarTypesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          }
        }
      );

      // Animate each section
      const sections = document.querySelectorAll('.solar-type-section');
      sections.forEach((section, index) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 80 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const solarTypes = [
    {
      id: 1,
      title: 'Home Solar Systems',
      subtitle: 'Konut Güneş Paneli Sistemleri',
      description: 'Evleriniz için özel olarak tasarlanmış güneş paneli çözümleri. Enerji faturalarınızı sıfırlayın ve çevreye duyarlı bir yaşam sürün.',
      icon: Home,
      gradient: 'from-green-500 to-emerald-500',
      features: [
        { text: 'Esnek Kurulum Seçenekleri', icon: CheckCircle },
        { text: '%90\'a Varan Enerji Tasarrufu', icon: Zap },
        { text: '25 Yıl Performans Garantisi', icon: Shield },
        { text: 'Profesyonel Kurulum ve Servis', icon: Award }
      ],
      specs: {
        power: '5-10 kW',
        area: '25-50 m²',
        savings: '₺2,000-4,000/ay'
      },
      galleryFolder: 'konut',
      imageCount: 3
    },
    {
      id: 2,
      title: 'Solar Street Lighting',
      subtitle: 'Güneş Enerjili Sokak Aydınlatması',
      description: 'Sokak lambalarında yenilikçi güneş enerjisi teknolojisi. Şehir aydınlatmasında sürdürülebilir ve ekonomik çözümler.',
      icon: Lightbulb,
      gradient: 'from-yellow-500 to-orange-500',
      features: [
        { text: 'Otomatik Gece/Gündüz Sensörü', icon: CheckCircle },
        { text: 'Sıfır Elektrik Faturası', icon: Zap },
        { text: 'Hava Koşullarına Dayanıklılık', icon: Shield },
        { text: 'Uzaktan İzleme Sistemi', icon: Award }
      ],
      specs: {
        power: '50-200W',
        area: 'Tek Direk',
        savings: '₺500-1,500/ay'
      },
      galleryFolder: 'sokak',
      imageCount: 3
    },
    {
      id: 3,
      title: 'Carport Solar Systems',
      subtitle: 'Güneş Enerjili Otopark Sistemleri',
      description: 'Araç park alanlarınızı enerji üretim merkezlerine dönüştürün. Hem araçlarınızı koruyun hem de enerji üretin.',
      icon: Car,
      gradient: 'from-blue-500 to-purple-500',
      features: [
        { text: 'Araç Koruması + Enerji Üretimi', icon: CheckCircle },
        { text: 'Modüler Tasarım', icon: Zap },
        { text: 'Elektrikli Araç Şarj Entegrasyonu', icon: Shield },
        { text: 'Estetik ve Fonksiyonel', icon: Award }
      ],
      specs: {
        power: '10-50 kW',
        area: '100-500 m²',
        savings: '₺5,000-25,000/ay'
      },
      galleryFolder: 'carport',
      imageCount: 3
    },
    {
      id: 4,
      title: 'Commercial Rooftop',
      subtitle: 'Ticari Çatı Güneş Paneli Projeleri',
      description: 'Büyük ölçekli ticari binalar için endüstriyel güneş paneli çözümleri. İşletmenizin enerji maliyetlerini minimize edin.',
      icon: Building,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        { text: 'Büyük Ölçekli Kurulum', icon: CheckCircle },
        { text: 'Hızlı Geri Ödeme Süresi', icon: Zap },
        { text: 'Endüstriyel Dayanıklılık', icon: Shield },
        { text: '7/24 İzleme ve Bakım', icon: Award }
      ],
      specs: {
        power: '100-1000 kW',
        area: '1000-10,000 m²',
        savings: '₺50,000-500,000/ay'
      },
      galleryFolder: 'ticari',
      imageCount: 3
    },
    {
      id: 5,
      title: 'Floating Solar Panels',
      subtitle: 'Yüzer Güneş Paneli Sistemleri',
      description: 'Su yüzeyleri üzerinde kurulabilen yenilikçi güneş paneli teknolojisi. Su kaynaklarını verimli kullanarak enerji üretimi.',
      icon: Waves,
      gradient: 'from-cyan-500 to-blue-500',
      features: [
        { text: 'Su Yüzeyi Optimizasyonu', icon: CheckCircle },
        { text: '%15 Daha Yüksek Verim', icon: Zap },
        { text: 'Su Buharlaşmasını Azaltır', icon: Shield },
        { text: 'Çevre Dostu Teknoloji', icon: Award }
      ],
      specs: {
        power: '50-500 kW',
        area: '500-5,000 m²',
        savings: '₺25,000-250,000/ay'
      },
      galleryFolder: 'yuzer',
      imageCount: 2
    }
  ];

  return (
    <section id="solar-details" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Güneş Paneli
            </span>
            <span className="block text-gray-700 text-3xl lg:text-4xl mt-2">
              Çeşitlerimiz & Detayları
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Her ihtiyaca uygun güneş paneli çözümlerimizi keşfedin. 
            Teknoloji, verimlilik ve sürdürülebilirliği bir araya getiren sistemlerimiz.
          </p>
        </div>

        {/* Solar Types Sections */}
        <div className="space-y-32">
          {solarTypes.map((type, index) => {
            const IconComponent = type.icon;
            const isEven = index % 2 === 0;
            
            const isExpanded = expandedSections.includes(type.id);
            
            return (
              <div key={type.id} id={`solar-type-${type.id}`} className="solar-type-section">
                {/* Section Header - Clickable */}
                <button 
                  onClick={() => toggleSection(type.id)}
                  className="w-full text-center mb-8 group hover:bg-white/50 rounded-3xl p-6 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${type.gradient} p-5 mr-6 shadow-xl group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className={`text-2xl font-bold bg-gradient-to-r ${type.gradient} bg-clip-text text-transparent`}>
                          {String(type.id).padStart(2, '0')}
                        </span>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                          {type.subtitle}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600">{type.title}</p>
                    </div>
                    <div className="ml-4">
                      {isExpanded ? (
                        <ChevronUp className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                      ) : (
                        <ChevronDown className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${!isEven ? 'lg:grid-cols-2' : ''} animate-in slide-in-from-top-4 duration-500`}>
                  {/* Content Side */}
                  <div className={`${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Description */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Sistem Açıklaması</h4>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {type.description}
                      </p>
                      
                      {/* Specs */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br ${type.gradient} p-3`}>
                            <Zap className="w-full h-full text-white" />
                          </div>
                          <div className="text-sm text-gray-600">Güç</div>
                          <div className="font-bold text-gray-900">{type.specs.power}</div>
                        </div>
                        <div className="text-center">
                          <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br ${type.gradient} p-3`}>
                            <Grid3X3 className="w-full h-full text-white" />
                          </div>
                          <div className="text-sm text-gray-600">Alan</div>
                          <div className="font-bold text-gray-900">{type.specs.area}</div>
                        </div>
                        <div className="text-center">
                          <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br ${type.gradient} p-3`}>
                            <TrendingUp className="w-full h-full text-white" />
                          </div>
                          <div className="text-sm text-gray-600">Tasarruf</div>
                          <div className="font-bold text-gray-900">{type.specs.savings}</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        {type.features.map((feature, featureIndex) => {
                          const FeatureIcon = feature.icon;
                          return (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${type.gradient} p-2 flex-shrink-0`}>
                                <FeatureIcon className="w-full h-full text-white" />
                              </div>
                              <span className="text-gray-700 font-medium">{feature.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Gallery Side */}
                  <div className={`${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                      <div className="flex items-center mb-6">
                        <Camera className={`w-8 h-8 mr-3 bg-gradient-to-br ${type.gradient} text-white p-2 rounded-lg`} />
                        <h4 className="text-2xl font-bold text-gray-900">Proje Galerisi</h4>
                      </div>
                      
                      {/* Gallery Grid */}
                      <div className="grid grid-cols-3 gap-3">
                        {Array.from({ length: type.imageCount }).map((_, imgIndex) => {
                          const imageSrc = `/gunespaneli/${type.galleryFolder}/${type.galleryFolder}-${imgIndex + 1}.jpg`;
                          const imageAlt = `${type.subtitle} Proje ${imgIndex + 1}`;
                          
                          return (
                            <button
                            key={imgIndex}
                            onClick={() => openModal(imageSrc, imageAlt)}
                            className="group relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden border border-gray-300 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                          >
                            <Image
                              src={imageSrc}
                              alt={imageAlt}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                // Fallback to placeholder if image not found
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="absolute inset-0 flex items-center justify-center">
                                      <div class="text-center">
                                        <svg class="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <div class="text-gray-500 font-medium text-sm">
                                          Proje ${imgIndex + 1}
                                        </div>
                                        <div class="text-gray-400 text-xs mt-1">
                                          Yakında eklenecek
                                        </div>
                                      </div>
                                    </div>
                                  `;
                                }
                              }}
                            />
                            
                            {/* Hover overlay with zoom icon */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                                <ZoomIn className="w-6 h-6 text-gray-700" />
                              </div>
                            </div>
                            
                            {/* Image label */}
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {type.subtitle} - {imgIndex + 1}
                            </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full p-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <Image
                src={modalImage.src}
                alt={modalImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl">
                <p className="font-medium">{modalImage.alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolarTypesSection;