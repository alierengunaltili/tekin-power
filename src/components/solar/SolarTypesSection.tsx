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

  // Listen for expand events from swiper
  useEffect(() => {
    const handleExpandSection = (event: CustomEvent) => {
      const { sectionId } = event.detail;
      const isCurrentlyExpanded = expandedSections.includes(sectionId);
      
      if (!isCurrentlyExpanded) {
        setExpandedSections(prev => [...prev, sectionId]);
        
        // Animate in after DOM update
        setTimeout(() => {
          const contentElement = document.querySelector(`#solar-type-${sectionId} .collapsible-content`);
          if (contentElement) {
            gsap.fromTo(contentElement, 
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
            );
          }
        }, 100);
      }
    };

    window.addEventListener('expandSection', handleExpandSection as EventListener);
    
    return () => {
      window.removeEventListener('expandSection', handleExpandSection as EventListener);
    };
  }, [expandedSections]);

  const toggleSection = (sectionId: number) => {
    const isCurrentlyExpanded = expandedSections.includes(sectionId);
    
    if (isCurrentlyExpanded) {
      // Closing animation
      const contentElement = document.querySelector(`#solar-type-${sectionId} .collapsible-content`);
      if (contentElement) {
        gsap.to(contentElement, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            setExpandedSections(prev => prev.filter(id => id !== sectionId));
          }
        });
      } else {
        setExpandedSections(prev => prev.filter(id => id !== sectionId));
      }
    } else {
      // Opening animation
      setExpandedSections(prev => [...prev, sectionId]);
      
      // Animate in after DOM update
      setTimeout(() => {
        const contentElement = document.querySelector(`#solar-type-${sectionId} .collapsible-content`);
        if (contentElement) {
          gsap.fromTo(contentElement, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
          );
        }
      }, 50);
    }
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
      gradient: 'from-cyan-500 to-blue-500',
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
      gradient: 'from-green-500 to-emerald-500',
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
      gradient: 'from-purple-500 to-pink-500 ',
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
      gradient: 'from-yellow-500 to-orange-500',
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
    <section id="solar-details" ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Main Title */}
        <div ref={titleRef} className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-200/50 rounded-full mb-6 sm:mb-8">
            <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold text-sm sm:text-base">Güneş Enerjisi Teknolojileri</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 bg-clip-text text-transparent">
              Güneş Paneli
            </span>
            <span className="block text-gray-800 text-xl sm:text-2xl lg:text-3xl mt-2">
              Çözümlerimiz
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
            Her ihtiyaca özel tasarlanmış, yenilikçi güneş paneli sistemlerimizle enerji bağımsızlığınızı kazanın.
          </p>
          
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-500 max-w-4xl mx-auto">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>25 Yıl Garanti</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>%90+ Verimlilik</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Profesyonel Kurulum</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>7/24 Destek</span>
              </div>
            </div>
        </div>

        {/* Solar Types Sections */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {solarTypes.map((type, index) => {
            const IconComponent = type.icon;
            const isEven = index % 2 === 0;
            
            const isExpanded = expandedSections.includes(type.id);
            
            return (
              <div key={type.id} id={`solar-type-${type.id}`} className="solar-type-section">
                {/* Section Header - Clickable */}
                <button 
                  onClick={() => toggleSection(type.id)}
                  className="w-full mb-8 sm:mb-10 lg:mb-12 group transition-all duration-300"
                >
                  <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white/90 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
                        {/* Icon with modern styling */}
                        <div className={`relative w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br ${type.gradient} p-3 sm:p-4 lg:p-6 shadow-xl group-hover:scale-110 transition-all duration-500`}>
                          <IconComponent className="w-full h-full text-white" />
                          <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${type.gradient} opacity-20 blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                        </div>
                        
                        {/* Content */}
                        <div className="text-left flex-1">
                          <div className="flex items-center space-x-4 mb-2 sm:mb-3">
                            
                            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                              {type.subtitle}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base lg:text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                            {type.title}
                          </p>
                          <div className="mt-2 sm:mt-4 flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${type.gradient}`}></div>
                            <span className="text-xs sm:text-sm text-gray-500">
                              {isExpanded ? 'Detayları gizle' : 'Detayları görüntüle'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Expand/Collapse icon */}
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${type.gradient} p-2.5 sm:p-3 lg:p-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                          {isExpanded ? (
                            <ChevronUp className="w-full h-full text-white" />
                          ) : (
                            <ChevronDown className="w-full h-full text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className={`collapsible-content grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start`}>
                  {/* Content Side */}
                  <div className={`${!isEven ? 'lg:order-2' : 'lg:order-1'} px-4 sm:px-0`}>
                    {/* Main Description Card */}
                    <div className="bg-white/90 backdrop-blur-lg border border-gray-200/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl mb-4 sm:mb-6 hover:shadow-2xl transition-all duration-500">
                      <div className="flex items-center mb-4 sm:mb-5">
                        <div className={`w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${type.gradient} p-2 sm:p-2.5 mr-2 sm:mr-3`}>
                          <IconComponent className="w-full h-full text-white" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">Sistem Açıklaması</h4>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                        {type.description}
                      </p>
                      
                      {/* Enhanced Specs */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
                        <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl border border-gray-100">
                          <div className={`w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 rounded-lg sm:rounded-xl bg-gradient-to-br ${type.gradient} p-2 sm:p-2.5 lg:p-3 shadow-lg`}>
                            <Zap className="w-full h-full text-white" />
                          </div>
                          <div className="text-xs text-gray-500 mb-1">Güç Kapasitesi</div>
                          <div className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">{type.specs.power}</div>
                        </div>
                        <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl border border-gray-100">
                          <div className={`w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 rounded-lg sm:rounded-xl bg-gradient-to-br ${type.gradient} p-2 sm:p-2.5 lg:p-3 shadow-lg`}>
                            <Grid3X3 className="w-full h-full text-white" />
                          </div>
                          <div className="text-xs text-gray-500 mb-1">Kurulum Alanı</div>
                          <div className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">{type.specs.area}</div>
                        </div>
                        <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl border border-gray-100">
                          <div className={`w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 rounded-lg sm:rounded-xl bg-gradient-to-br ${type.gradient} p-2 sm:p-2.5 lg:p-3 shadow-lg`}>
                            <TrendingUp className="w-full h-full text-white" />
                          </div>
                          <div className="text-xs text-gray-500 mb-1">Aylık Tasarruf</div>
                          <div className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">{type.specs.savings}</div>
                        </div>
                      </div>

                      {/* Simplified Features */}
                      <div>
                        <h5 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                          Öne Çıkan Özellikler
                        </h5>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3 text-gray-700">
                              <span className="text-blue-600 font-bold mt-0.5 sm:mt-1">•</span>
                              <span className="text-xs sm:text-sm leading-relaxed">{feature.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Side */}
                  <div className={`${!isEven ? 'lg:order-1' : 'lg:order-2'} px-4 sm:px-0`}>
                    <div className="bg-white/90 backdrop-blur-lg border border-gray-200/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className={`w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${type.gradient} p-2 sm:p-2.5 mr-2 sm:mr-3 shadow-lg`}>
                          <Camera className="w-full h-full text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-gray-900">Proje Galerisi</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Gerçekleşen projelerimizden örnekler</p>
                        </div>
                      </div>
                      
                      {/* Enhanced Gallery Grid */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {Array.from({ length: type.imageCount }).map((_, imgIndex) => {
                          const imageSrc = `/gunespaneli/${type.galleryFolder}/${type.galleryFolder}-${imgIndex + 1}.jpg`;
                          const imageAlt = `${type.subtitle} Proje ${imgIndex + 1}`;
                          
                          return (
                            <button
                            key={imgIndex}
                            onClick={() => openModal(imageSrc, imageAlt)}
                            className="group relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                          >
                            <Image
                              src={imageSrc}
                              alt={imageAlt}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                // Fallback to placeholder if image not found
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                                      <div class="text-center p-4">
                                        <svg class="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <div class="text-gray-600 font-semibold text-sm mb-1">
                                          Proje ${imgIndex + 1}
                                        </div>
                                        <div class="text-gray-400 text-xs">
                                          Yakında eklenecek
                                        </div>
                                      </div>
                                    </div>
                                  `;
                                }
                              }}
                            />
                            
                            {/* Modern hover overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                                <ZoomIn className="w-8 h-8 text-gray-700" />
                              </div>
                            </div>
                            
                            {/* Enhanced image label */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                <div className="font-semibold text-sm">{type.subtitle}</div>
                                <div className="text-xs text-gray-300">Proje #{imgIndex + 1}</div>
                              </div>
                            </div>
                            </button>
                          );
                        })}
                      </div>
                      
                      {/* Gallery Footer */}
                      <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100">
                        <div className="flex items-center justify-between text-xs text-gray-600">
                          <span>Toplam {type.imageCount} proje görseli</span>
                          <span className="flex items-center space-x-1">
                            <ZoomIn className="w-3 h-3" />
                            <span>Büyütmek için tıklayın</span>
                          </span>
                        </div>
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

      {/* Enhanced Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg" onClick={closeModal}>
          <div className="relative w-full h-full max-w-7xl max-h-screen p-6">
            {/* Enhanced Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-30 right-8 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl p-4 transition-all duration-300 hover:scale-110 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
                <Image
                  src={modalImage.src}
                  alt={modalImage.alt}
                  fill
                  className="object-contain rounded-2xl"
                  sizes="90vw"
                  priority
                />
              </div>
              
              {/* Enhanced Image Info */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-4 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg">{modalImage.alt}</p>
                      <p className="text-white/80 text-sm">Tekin Power Güneş Paneli Projesi</p>
                    </div>
                    <div className="text-white/60">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolarTypesSection;