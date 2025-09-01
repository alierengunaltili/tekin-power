'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      image: '/hizmetlerimiz/telekomunikasyonbazistasyonu.jpg',
      title: 'Telekomünikasyon Baz İstasyonu',
      category: 'Telekomünikasyon',
      gradient: 'from-blue-600 via-cyan-500 to-blue-400',
      slug: 'telekomunikasyon'
    },
    {
      id: 2,
      image: '/hizmetlerimiz/askerisistemuygulamalari.jpg',
      title: 'Askeri Sistem Uygulamaları',
      category: 'Savunma Sanayi',
      gradient: 'from-green-900 via-green-700 to-green-600',
      slug: 'askeri-sistem-uygulamalari'
    },
    {
      id: 3,
      image: '/hizmetlerimiz/mobil-solar.jpg',
      title: 'Mobil Solar',
      category: 'Mobil Solar Panel',
      gradient: 'from-yellow-600 via-orange-500 to-red-400',
      slug: 'mobil-solar'
    },
    {
      id: 4,
      image: '/hizmetlerimiz/homesolarsystem.jpg',
      title: 'Home Solar System',
      category: 'Konut',
      gradient: 'from-amber-600 via-yellow-500 to-lime-400',
      slug: 'konut-cozumleri'
    },
    {
      id: 5,
      image: '/hizmetlerimiz/drone.jpg',
      title: 'Drone',
      category: 'Havacılık',
      gradient: 'from-purple-600 via-pink-500 to-red-400',
      slug: 'drone'
    },
    {
      id: 6,
      image: '/hizmetlerimiz/enerjidepolama.jpg',
      title: 'Enerji Depolama Sistemleri',
      category: 'Enerji Depolama',
      gradient: 'from-indigo-600 via-blue-500 to-teal-400',
      slug: 'enerji-depolama'
    },
    {
      id: 7,
      image: '/hizmetlerimiz/ebus.jpg',
      title: 'E Bus',
      category: 'Ulaşım',
      gradient: 'from-teal-600 via-blue-500 to-cyan-400',
      slug: 'e-bus'
    },
    {
      id: 8,
      image: '/hizmetlerimiz/carport.jpg',
      title: 'Car Port',
      category: 'Otomotiv',
      gradient: 'from-green-600 via-emerald-500 to-teal-400',
      slug: 'car-port'
    },
    {
      id: 9,
      image: '/hizmetlerimiz/golfcar.jpg',
      title: 'Golf Car',
      category: 'Rekreasyon',
      gradient: 'from-lime-600 via-green-500 to-emerald-400',
      slug: 'golf-araclari'
    },
    {
      id: 10,
      image: '/hizmetlerimiz/marin.jpg',
      title: 'Marin',
      category: 'Denizcilik',
      gradient: 'from-blue-600 via-cyan-500 to-blue-400',
      slug: 'marin'
    },
    {
      id: 11,
      image: '/hizmetlerimiz/forklift.jpg',
      title: 'Forklift',
      category: 'Endüstriyel',
      gradient: 'from-orange-600 via-red-500 to-pink-400',
      slug: 'forklift'
    }
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => (
            <Link 
              key={service.id} 
              href={`/hizmetlerimiz/${service.slug}`}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                
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
                <div className={`inline-block px-2.5 sm:px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-xs font-semibold rounded-full mb-2 sm:mb-3`}>
                  {service.category}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Bottom Border Animation */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
