'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Battery, ChevronRight, Zap, Shield, Clock, ChevronLeft } from 'lucide-react';

interface BatteryProduct {
  id: string;
  title: string;
  image: string;
  voltage: string;
  capacity: string;
}

interface BatteryCategory {
  id: string;
  title: string;
  products: BatteryProduct[];
}

const MARIN_BATTERIES: BatteryCategory[] = [
  {
    id: '12.8v-marin',
    title: '12.8V Marin',
    products: [
      { id: '12.8v-100ah', title: '12.8V 100Ah', image: '/akuler/marin/12.8v/100 Ah.png', voltage: '12.8V', capacity: '100Ah' },
      { id: '12.8v-300ah', title: '12.8V 300Ah', image: '/akuler/marin/12.8v/300 Ah.png', voltage: '12.8V', capacity: '300Ah' },
      { id: '12.8v-400ah', title: '12.8V 400Ah', image: '/akuler/marin/12.8v/400 Ah.png', voltage: '12.8V', capacity: '400Ah' },
      { id: '12.8v-600ah', title: '12.8V 600Ah', image: '/akuler/marin/12.8v/600 Ah.png', voltage: '12.8V', capacity: '600Ah' },
    ]
  },
  {
    id: '25.6v-marin',
    title: '25.6V Marin',
    products: [
      { id: '25.6v-100ah', title: '25.6V 100Ah', image: '/akuler/marin/25.6v/100Ah .png', voltage: '25.6V', capacity: '100Ah' },
      { id: '25.6v-200ah', title: '25.6V 200Ah', image: '/akuler/marin/25.6v/200 Ah.png', voltage: '25.6V', capacity: '200Ah' },
      { id: '25.6v-300ah', title: '25.6V 300Ah', image: '/akuler/marin/25.6v/300 Ah.png', voltage: '25.6V', capacity: '300Ah' },
    ]
  },
  {
    id: '36v-marin',
    title: '36V Marin',
    products: [
      { id: '36v-100ah', title: '36V 100Ah', image: '/akuler/marin/36v/100 Ah.png', voltage: '36V', capacity: '100Ah' },
    ]
  },
  {
    id: '51.2v-marin',
    title: '51.2V Marin',
    products: [
      { id: '51.2v-100ah', title: '51.2V 100Ah', image: '/akuler/marin/51.2v/100 Ah.png', voltage: '51.2V', capacity: '100Ah' },
    ]
  }
];

const NORMAL_BATTERIES: BatteryCategory[] = [
  {
    id: '12.8v-normal',
    title: '12.8V Normal',
    products: [
      { id: '12.8v-100ah-n', title: '12.8V 100Ah', image: '/akuler/doğa/12.8v/100 Ah.png', voltage: '12.8V', capacity: '100Ah' },
      { id: '12.8v-300ah-n', title: '12.8V 300Ah', image: '/akuler/doğa/12.8v/300 Ah.png', voltage: '12.8V', capacity: '300Ah' },
      { id: '12.8v-400ah-n', title: '12.8V 400Ah', image: '/akuler/doğa/12.8v/400 Ah.png', voltage: '12.8V', capacity: '400Ah' },
      { id: '12.8v-600ah-n', title: '12.8V 600Ah', image: '/akuler/doğa/12.8v/600 Ah.png', voltage: '12.8V', capacity: '600Ah' },
    ]
  },
  {
    id: '25.6v-normal',
    title: '25.6V Normal',
    products: [
      { id: '25.6v-100ah-n', title: '25.6V 100Ah', image: '/akuler/doğa/25.6v/100 Ah.png', voltage: '25.6V', capacity: '100Ah' },
      { id: '25.6v-200ah-n', title: '25.6V 200Ah', image: '/akuler/doğa/25.6v/200 Ah.png', voltage: '25.6V', capacity: '200Ah' },
      { id: '25.6v-300ah-n', title: '25.6V 300Ah', image: '/akuler/doğa/25.6v/300 Ah.png', voltage: '25.6V', capacity: '300Ah' },
    ]
  },
  {
    id: '36v-normal',
    title: '36V Normal',
    products: [
      { id: '36v-100ah-n', title: '36V 100Ah', image: '/akuler/doğa/36v/100 Ah.png', voltage: '36V', capacity: '100Ah' },
    ]
  },
  {
    id: '51.2v-normal',
    title: '51.2V Normal',
    products: [
      { id: '51.2v-100ah-n', title: '51.2V 100Ah', image: '/akuler/doğa/51.2v/100 Ah.png', voltage: '51.2V', capacity: '100Ah' },
    ]
  }
];

interface BatteryCardProps {
  product: BatteryProduct;
  onClick: () => void;
}

const BatteryCard: React.FC<BatteryCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/40 cursor-pointer"
    >
      <div className="relative aspect-square p-6">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6 border-t border-gray-100">
        <h4 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h4>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <Zap className="w-4 h-4" />
            <span>{product.voltage}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Battery className="w-4 h-4" />
            <span>{product.capacity}</span>
          </span>
        </div>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

interface BatterySectionProps {
  title: string;
  categories: BatteryCategory[];
  type: 'marin' | 'normal';
  bgColor: string;
}

const BatterySection: React.FC<BatterySectionProps> = ({ title, categories, type, bgColor }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);
  const [selectedProduct, setSelectedProduct] = useState<BatteryProduct | null>(null);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  const handleProductClick = (product: BatteryProduct) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  // Modal dışına tıklandığında kapat
  const handleModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
          <span className={`bg-gradient-to-r ${
            type === 'marin' 
              ? 'from-blue-600 via-cyan-600 to-indigo-600' 
              : 'from-emerald-600 via-green-600 to-teal-600'
          } bg-clip-text text-transparent`}>
            {title}
          </span>
        </h2>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? `bg-gradient-to-r ${
                    type === 'marin' 
                      ? 'from-blue-600 to-cyan-600 shadow-blue-500/25' 
                      : 'from-emerald-600 to-green-600 shadow-emerald-500/25'
                  } text-white shadow-2xl scale-105`
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Products grid */}
      {currentCategory && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentCategory.products.map((product) => (
            <BatteryCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      )}

      {/* Product detail modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleModalBackdropClick}
        >
          <div 
            className="bg-white border border-gray-200 rounded-3xl p-8 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.title}</h3>
              <button
                onClick={handleModalClose}
                className="text-gray-400 hover:text-gray-600 transition-colors text-2xl font-bold"
              >
                ✕
              </button>
            </div>
            
            <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-gray-50">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-600 flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Voltaj:</span>
                </span>
                <span className="font-bold text-lg text-gray-900">{selectedProduct.voltage}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-600 flex items-center space-x-2">
                  <Battery className="w-5 h-5" />
                  <span>Kapasite:</span>
                </span>
                <span className="font-bold text-lg text-gray-900">{selectedProduct.capacity}</span>
              </div>
            </div>
            
            <button className={`w-full bg-gradient-to-r ${
              type === 'marin' 
                ? 'from-blue-600 to-cyan-600 hover:shadow-blue-500/25' 
                : 'from-emerald-600 to-green-600 hover:shadow-emerald-500/25'
            } text-white py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2`}>
              <span>Teknik Özellikler</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Usage Areas Data
const MARIN_USAGE_AREAS = [
  {
    id: 'marin-boats',
    title: 'Tekneler ve Yatlar',
    description: 'Denizcilik uygulamaları için özel olarak tasarlanmış güvenli enerji çözümleri',
    image: '/lifepo4/marin.jpg',
    features: ['Su geçirmez', 'Tuzlu suya dayanıklı', 'Yüksek güvenlik', 'Uzun ömür']
  },
  {
    id: 'marin-safety',
    title: 'Deniz Güvenliği',
    description: 'Deniz koşullarında maksimum güvenlik ve kararlılık sağlayan teknoloji',
    image: '/lifepo4/marin.jpg',
    features: ['Termal kararlılık', 'Aşırı şarj koruması', 'Kısa devre koruması', 'Düşük sıcaklık performansı']
  },
  {
    id: 'marin-durability',
    title: 'Dayanıklılık',
    description: 'Zorlu deniz koşullarında uzun süreli güvenilir performans',
    image: '/lifepo4/marin.jpg',
    features: ['Korozyon direnci', 'Titreşim dayanımı', 'Nem direnci', 'UV dayanımı']
  }
];

const NORMAL_USAGE_AREAS = [
  {
    id: 'home-systems',
    title: 'Konut Sistemleri',
    description: 'Evler için güvenli ve uzun ömürlü enerji depolama çözümleri',
    image: '/lifepo4/home.jpg',
    features: ['Güvenli', 'Sessiz çalışma', 'Çevre dostu', 'Düşük bakım']
  },
  {
    id: 'industrial-apps',
    title: 'Endüstriyel Uygulamalar',
    description: 'Forklift, golf arabası ve endüstriyel araçlar için yüksek performans',
    image: '/lifepo4/forklift.jpg',
    features: ['Yüksek performans', 'Hızlı şarj', 'Dayanıklı', 'Verimli']
  },
  {
    id: 'solar-systems',
    title: 'Solar Enerji Sistemleri',
    description: 'Güneş enerjisi sistemleri için optimize edilmiş enerji depolama',
    image: '/lifepo4/solarpoles.jpg',
    features: ['Solar uyumlu', 'Yüksek verim', 'Uzun ömür', 'Çevre dostu']
  }
];

// Usage Slider Component
interface UsageSliderProps {
  areas: typeof MARIN_USAGE_AREAS;
  type: 'marin' | 'normal';
}

const UsageSlider: React.FC<UsageSliderProps> = ({ areas, type }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % areas.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, areas.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % areas.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? areas.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentArea = areas[currentSlide];

  return (
          <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
            Kullanım Alanları
          </h2>
        </div>

      <div className="relative">
        {/* Main slider container */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
          <Image
            src={currentArea.image}
            alt={currentArea.title}
            fill
            className="object-cover transition-all duration-1000"
            priority
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{currentArea.title}</h3>
              <p className="text-blue-100/90 text-sm lg:text-base leading-relaxed">
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
        <div className="flex justify-center space-x-2 mt-6">
          {areas.map((_, index) => (
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


      </div>
    </div>
  );
};

const LiFePO4BatterySection: React.FC = () => {
  return (
    <>
      {/* Marin Batteries with Usage Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Marin Batteries */}
            <div className="space-y-8">
              <BatterySection
                title="LiFePO4 Ekranlı Marin Aküler"
                categories={MARIN_BATTERIES}
                type="marin"
                bgColor=""
              />
            </div>

            {/* Right: Usage Areas Slider for Marin */}
            <div className="flex items-center">
              <UsageSlider areas={MARIN_USAGE_AREAS} type="marin" />
            </div>
          </div>
        </div>
      </section>

      {/* Normal Batteries with Usage Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Normal Batteries */}
            <div className="space-y-8">
              <BatterySection
                title="LiFePO4 Ekranlı Aküler"
                categories={NORMAL_BATTERIES}
                type="normal"
                bgColor=""
              />
            </div>

            {/* Right: Usage Areas Slider for Normal */}
            <div className="flex items-center">
              <UsageSlider areas={NORMAL_USAGE_AREAS} type="normal" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiFePO4BatterySection;