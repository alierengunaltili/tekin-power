'use client';

import { solutions } from '@/data/solutions';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const ServicesGrid = () => {
  const services = solutions;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Tekin Power olarak, geniş hizmet yelpazemizdeki her alanda uzman ekibimizle 
            müşterilerimize en iyi çözümleri sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => {
            const cardImage = service.cardImage ?? service.image;
            return (
            <Link 
              key={service.id} 
              href={service.href}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 bg-gray-100 overflow-hidden">
                {cardImage && <Image
                  src={cardImage}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 33vw"
                />}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-full p-2.5 sm:p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {service.productTitle}
                </h3>
              </div>

              {/* Bottom Border Animation */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`}></div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
