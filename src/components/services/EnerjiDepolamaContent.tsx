'use client';

import Image from 'next/image';
import { useState } from 'react';
import { energidepolama_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/enerjidepolama';

interface EnerjiDepolamaContentProps {
  gradient: string;
}

const EnerjiDepolamaContent = ({ gradient }: EnerjiDepolamaContentProps) => {
  const [elektrikDolabiIndex, setElektrikDolabiIndex] = useState(0);
  const [bataryaDolabiIndex, setBataryaDolabiIndex] = useState(0);

  // Elektrik Dolabı fotoğrafları (photo6-photo10)
  const elektrikDolabiPhotos = ['photo6', 'photo7', 'photo8', 'photo9', 'photo10'];
  
  // Batarya Dolabı fotoğrafları (photo11-photo23)
  const bataryaDolabiPhotos = [
    'photo11', 'photo12', 'photo13', 'photo14', 'photo15', 'photo16',
    'photo17', 'photo18', 'photo19', 'photo20', 'photo21', 'photo22', 'photo23'
  ];

  const contentSections: Array<{
    title: string;
    content: string;
    hasImage?: boolean;
    imageKey?: string;
    hasImages?: boolean;
    multipleImages?: string[];
    hasCarousel?: boolean;
    carouselType?: 'elektrik' | 'batarya';
  }> = [
    {
      title: 'Enerji Depolama Sistemleri',
      content: `
<div class="bg-gray-50 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
  <h3 class="text-2xl font-bold text-gray-900 mb-4">Entegre Güneş Enerjisi Depolama</h3>
  <p class="text-gray-700 text-lg leading-relaxed">
    Fotovoltaik enerji üretim sistemi ile enerji depolama sisteminin organik birleşimi, pasif enerji tasarrufundan aktif enerji üretimine dönüşümü gerçekleştirebilir. PMS kontrol stratejisi sayesinde güç şebekesi, yenilenebilir enerji kaynakları ve enerji depolama bataryası birbirleriyle entegre olabilir ve enerji birbirlerini tamamlayabilir, müşteri elektrik maliyetini önemli ölçüde azaltabilir.
  </p>
</div>

<div class="bg-white p-8 rounded-xl border border-gray-200">
  <p class="text-gray-700 text-lg leading-relaxed mb-6">
    <strong>ONNO POWER</strong>, fotovoltaik (PV) kontrol modüller ile yapılandırılabilir ve doğrudan PV sistemlerine bağlanmayı destekler. Park veya işletme sahipleri, fabrika çatılarını kullanarak güneş enerji kaynaklarını tamamen kullanabilir, kendi kendine enerji üretimini gerçekleştirebilir ve müşterilerin yeni enerji için çeşitli uygulama ihtiyaçlarını karşılayabilir.
  </p>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
      <h4 class="font-semibold text-blue-900 mb-2">Şebekeye Bağlı Güç Sağlama</h4>
      <p class="text-blue-700 text-sm">Grid-tie sistem ile şebeke entegrasyonu</p>
    </div>
    <div class="bg-green-50 p-6 rounded-lg border border-green-100">
      <h4 class="font-semibold text-green-900 mb-2">Şebekeye Bağlı Olmayan Güç</h4>
      <p class="text-green-700 text-sm">Off-grid sistemler ile bağımsız enerji</p>
    </div>
    <div class="bg-gray-50 p-6 rounded-lg border border-gray-100">
      <h4 class="font-semibold text-gray-900 mb-2">Çevrimdışı Güç Sağlama</h4>
      <p class="text-gray-700 text-sm">Backup sistemler ile kesintisiz enerji</p>
    </div>
  </div>
</div>
      `,
      hasImage: true,
      imageKey: 'photo1'
    },
    {
      title: 'Mobil Enerji Depolama Sistemi',
      content: `
<div class="bg-gray-50 p-8 rounded-xl border-l-4 border-orange-600">
  <h3 class="text-2xl font-bold text-gray-900 mb-4">Akıllı Taşınabilir Enerji Depolama Sistem</h3>
  <p class="text-gray-700 text-lg leading-relaxed mb-6">
    "Akıllı Taşınabilir Enerji Depolama Sistem (Araç)", <strong>tepe doldurma ve vadileri doldurma, güç koruma, acil durum, yedek, kapasite genişletme, akıllı şarj ve satış, mobil kurtarma</strong> gibi çoklu uygulama entegrasyonunun sistem entegrasyonunu başarıyla gerçekleştirir.
  </p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white p-6 rounded-xl border border-gray-200">
      <h4 class="text-xl font-bold text-gray-900 mb-3">Acil Durum Enerji Sağlama</h4>
      <ul class="text-gray-700 space-y-2">
        <li>• Deprem, buz felaket, maden felaket</li>
        <li>• Büyük politik güç koruma etkinlikleri</li>
        <li>• Acil durum onarımlarının enerji ihtiyacı</li>
      </ul>
    </div>
    
    <div class="bg-white p-6 rounded-xl border border-gray-200">
      <h4 class="text-xl font-bold text-gray-900 mb-3">Kritik Altyapı Desteği</h4>
      <ul class="text-gray-700 space-y-2">
        <li>• Büyük veri merkezler</li>
        <li>• Hastaneler ve sağlık tesisleri</li>
        <li>• Havaalanları ve iletişim sistemleri</li>
      </ul>
    </div>
  </div>
  
  <div class="mt-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
    <h4 class="text-xl font-bold text-blue-900 mb-3">Çok Fonksiyonlu Kullanım</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
      <div class="text-gray-700">Hat bakımı sırasında geçici enerji</div>
      <div class="text-gray-700">Buzla kaplı hatlardaki buzları eritme</div>
      <div class="text-gray-700">Ada ve dağlık bölgelerde güç düzenleme</div>
      <div class="text-gray-700">Şehirlerde elektrikli araç şarjı</div>
    </div>
  </div>
</div>
      `,
      hasImage: true,
      imageKey: 'photo2'
    },
    {
      title: 'Yedek Güç Sistemi',
      content: `
<div class="bg-gray-50 p-8 rounded-xl border-l-4 border-purple-600">
  <h3 class="text-2xl font-bold text-gray-900 mb-6">ONNO POWER Yedek Güç Sistemleri</h3>
  
  <div class="space-y-6">
    <div class="bg-white p-6 rounded-xl border border-gray-200">
      <h4 class="text-xl font-bold text-gray-900 mb-4">Sistem Bileşenleri</h4>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div class="text-sm font-medium text-blue-900">Enerji Depolama Bataryası</div>
        </div>
        <div class="text-center p-4 bg-green-50 rounded-lg border border-green-100">
          <div class="text-sm font-medium text-green-900">Enerji Depolama Dönüştürücüsü</div>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div class="text-sm font-medium text-gray-900">İzleme Sistemi</div>
        </div>
        <div class="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
          <div class="text-sm font-medium text-purple-900">Akıllı Anahtarlama</div>
        </div>
      </div>
    </div>
    
    <div class="bg-white p-6 rounded-xl border border-gray-200">
      <h4 class="text-xl font-bold text-gray-900 mb-4">Siyah Başlatma Fonksiyonu</h4>
      <p class="text-gray-700 mb-4">
        Şebeke kesintisi olduğunda kesintisiz güç kaynağı sağlamak için akıllı anahtarlama yapabilir. 
        Dizel jeneratör gibi geleneksel güç kaynağı yöntemleriyle karşılaştırıldığında:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-green-50 p-4 rounded-lg border border-green-100">
          <h5 class="font-semibold text-green-900 mb-2">Avantajları</h5>
          <ul class="text-green-800 text-sm space-y-1">
            <li>• Modüler tasarım - kolay kurulum</li>
            <li>• Taşınabilir açık hava tasarımı</li>
            <li>• Düşük ses seviyesi</li>
            <li>• Çevre dostu özellikler</li>
          </ul>
        </div>
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h5 class="font-semibold text-blue-900 mb-2">STS Entegrasyonu</h5>
          <p class="text-blue-800 text-sm">
            STS (Statik Transfer Switch) modülünün entegrasyonu, kullanıcıların kritik yüklerinin kesintisiz güç sağlanmasını sağlar.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      `,
      hasImages: true,
      multipleImages: ['photo3', 'photo4', 'photo5']
    },
    {
            title: 'Elektrik Dolabı',
      content: `

      `,
      hasCarousel: true,
      carouselType: 'elektrik'
    },
    {
            title: 'Batarya Dolabı',
      content: `

      `,
      hasCarousel: true,
      carouselType: 'batarya'
    }
  ];

  const nextElektrik = () => {
    setElektrikDolabiIndex((prev) => (prev + 1) % elektrikDolabiPhotos.length);
  };

  const prevElektrik = () => {
    setElektrikDolabiIndex((prev) => (prev - 1 + elektrikDolabiPhotos.length) % elektrikDolabiPhotos.length);
  };

  const nextBatarya = () => {
    setBataryaDolabiIndex((prev) => (prev + 1) % bataryaDolabiPhotos.length);
  };

  const prevBatarya = () => {
    setBataryaDolabiIndex((prev) => (prev - 1 + bataryaDolabiPhotos.length) % bataryaDolabiPhotos.length);
  };

  return (
    <section className="content-section py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="w-full px-3 sm:px-4 lg:px-8">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {contentSections.map((section, index) => (
            <div key={index} className="content-item bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
              {/* Banner Header */}
              <div className={`bg-gradient-to-r ${gradient} py-6 sm:py-8 px-4 sm:px-6 lg:px-12`}>
                <div className="max-w-7xl mx-auto">
                  <div className="w-12 sm:w-16 h-1 bg-white/30 rounded-full mb-3 sm:mb-4"></div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">
                    {section.title}
                  </h2>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                  {/* Main Content */}
                  <div className="mb-8 sm:mb-10">
                    <div
                      className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line prose prose-sm sm:prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                  
                  {/* Single Image */}
                  {section.hasImage && 'imageKey' in section && section.imageKey && (
                    <div className="w-full">
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={energidepolama_photo_mapping[section.imageKey as keyof typeof energidepolama_photo_mapping]}
                          alt="Enerji Depolama Sistemleri"
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
                      </div>
                    </div>
                  )}

                  {/* Multiple Images */}
                  {section.hasImages && section.multipleImages && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {section.multipleImages.map((imageKey, imgIndex) => (
                        <div key={imgIndex} className="w-full">
                          <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src={energidepolama_photo_mapping[imageKey as keyof typeof energidepolama_photo_mapping]}
                              alt={`Yedek Güç Sistemi ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Carousel for Elektrik Dolabı */}
                  {section.hasCarousel && section.carouselType === 'elektrik' && (
                    <div className="relative">
                      <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                        <div className="relative aspect-[16/9]">
                          <Image
                            src={energidepolama_photo_mapping[elektrikDolabiPhotos[elektrikDolabiIndex] as keyof typeof energidepolama_photo_mapping]}
                            alt={`Elektrik Dolabı ${elektrikDolabiIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
                        </div>
                      </div>
                      
                      {/* Carousel Controls */}
                      <button
                        onClick={prevElektrik}
                        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                      >
                        <svg className="w-4 sm:w-6 h-4 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button
                        onClick={nextElektrik}
                        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                      >
                        <svg className="w-4 sm:w-6 h-4 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* Indicators */}
                      <div className="flex justify-center mt-3 sm:mt-4 space-x-1.5 sm:space-x-2">
                        {elektrikDolabiPhotos.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setElektrikDolabiIndex(idx)}
                            className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                              idx === elektrikDolabiIndex 
                                ? 'bg-blue-600 w-6 sm:w-8' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <div className="text-center mt-3 sm:mt-4">
                        <span className="text-xs sm:text-sm text-gray-600">
                          {elektrikDolabiIndex + 1} / {elektrikDolabiPhotos.length}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Carousel for Batarya Dolabı */}
                  {section.hasCarousel && section.carouselType === 'batarya' && (
                    <div className="relative">
                      {/* Responsive: Single image for both mobile and desktop */}
                      <div>
                        <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg max-w-3xl mx-auto">
                          <div className="relative aspect-[16/9]">
                            <Image
                              src={energidepolama_photo_mapping[bataryaDolabiPhotos[bataryaDolabiIndex] as keyof typeof energidepolama_photo_mapping]}
                              alt={`Batarya Dolabı ${bataryaDolabiIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
                          </div>
                        </div>
                        
                        {/* Controls */}
                        <button
                          onClick={prevBatarya}
                          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                        >
                          <svg className="w-4 sm:w-6 h-4 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <button
                          onClick={nextBatarya}
                          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                        >
                          <svg className="w-4 sm:w-6 h-4 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      
                     
                      
                      {/* Indicators */}
                      <div className="flex justify-center mt-3 sm:mt-4 space-x-1 sm:space-x-1.5 flex-wrap gap-y-1">
                        {bataryaDolabiPhotos.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setBataryaDolabiIndex(idx)}
                            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                              idx === bataryaDolabiIndex 
                                ? 'bg-green-600 w-3 sm:w-4' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <div className="text-center mt-3 sm:mt-4">
                        <span className="text-xs sm:text-sm text-gray-600">
                          {bataryaDolabiIndex + 1} / {bataryaDolabiPhotos.length}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnerjiDepolamaContent;
