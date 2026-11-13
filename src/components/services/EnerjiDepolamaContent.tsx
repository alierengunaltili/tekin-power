'use client';

import Image from 'next/image';
import { GuideIntro, GuideBody } from '@/components/SolutionGuide';
import { unisunStorageContent } from '@/data/pageContent';
import LiFePO4BatterySection from '@/components/lifepo4/LiFePO4BatterySection';
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
    hasImage?: boolean;
    imageKey?: string;
    hasImages?: boolean;
    multipleImages?: string[];
    hasCarousel?: boolean;
    carouselType?: 'elektrik' | 'batarya';
  }> = [
    {
      title: 'Enerji Depolama Sistemleri',
      hasImage: true,
      imageKey: 'photo1'
    },
    {
      title: 'Mobil Enerji Depolama Görseli',
      hasImage: true,
      imageKey: 'photo2'
    },
    {
      title: 'Yedek Güç Sistemi Görselleri',
      hasImages: true,
      multipleImages: ['photo3', 'photo4', 'photo5']
    },
    {
            title: 'Elektrik Dolabı',
      hasCarousel: true,
      carouselType: 'elektrik'
    },
    {
            title: 'Batarya Dolabı',
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
    <>
    <nav aria-label="Enerji ve batarya bölümleri" className="bg-white px-5 pt-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-3">
        <a href="#enerji-depolama-gorselleri" className="rounded-xl bg-blue-950 px-5 py-3 font-semibold text-white hover:bg-blue-900">Enerji Depolama Sistemleri</a>
        <a href="#lifepo4-bataryalar" className="rounded-xl bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800">LiFePO₄ Bataryalar</a>
        <a href="/unisun/unisun-2024-katalog.pdf" download className="rounded-xl border border-blue-200 px-5 py-3 font-semibold text-blue-950 hover:bg-blue-50">Unisun 2024 Kataloğunu İndir (PDF)</a>
      </div>
    </nav>
    <GuideIntro content={unisunStorageContent} />
    <GuideBody content={unisunStorageContent} />
    <section id="enerji-depolama-gorselleri" className="content-section scroll-mt-40 py-12 sm:py-16 lg:py-20 bg-gray-50">
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
    <div id="lifepo4-bataryalar" className="scroll-mt-40">
      <LiFePO4BatterySection />
    </div>
    </>
  );
};

export default EnerjiDepolamaContent;
