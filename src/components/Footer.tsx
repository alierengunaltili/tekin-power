'use client';

import { solutions } from '@/data/solutions';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isWaterPagePath } from '@/lib/waterPages';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const isWaterPage = isWaterPagePath(usePathname());
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Tekne HMI', href: '/tekne-hmi' },
    { label: 'İletişim', href: 'contact' }
  ];

  const services = solutions;



  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        type="button"
        aria-label="Sayfanın başına dön"
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className={isWaterPage ? 'relative w-56 max-w-full h-28' : 'relative w-72 sm:w-96 lg:w-[28rem] h-20 sm:h-24 lg:h-28'}>
                <Image
                  src={isWaterPage ? '/tekinpowerlogos/tekinpower-marin-light-v2.png' : '/tekinpowerlogos/tekinpower-02.webp'}
                  alt={isWaterPage ? 'Tekin Power Marin Logo' : 'Tekin Power Logo'}
                  fill
                  sizes={isWaterPage ? '224px' : '(min-width: 1024px) 448px, (min-width: 640px) 384px, 288px'}
                  className={isWaterPage ? 'object-contain object-left' : 'object-contain'}
                />
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Güçlü enerji çözümleri ile geleceği bugünden inşa ediyoruz. 
              LiFePO₄ batarya teknolojisi ve yenilikçi solar sistemlerle 
              sürdürülebilir enerji geleceğinde yanınızdayız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-sm block hover:translate-x-1 transform"
                  >
                    {service.productTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm">
                    <strong>Satış:</strong> Koza Cad. No:66/64<br />
                    Çankaya/Ankara<br />
                    <strong>Depo:</strong> Perpa Ticaret Merkezi A Blok Kat:8<br />
                    No:823-825 Şişli/İstanbul
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+905323276293" className="text-blue-200 hover:text-white transition-colors duration-300 block">
                    +90 (532) 327 62 93
                  </a>
                  <a href="tel:+905056853393" className="text-blue-200 hover:text-white transition-colors duration-300 block">
                    +90 (505) 685 33 93
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@tekinpower.com?subject=Tekin Power İletişim&body=Merhaba, bilgi almak istiyorum." className="text-blue-200 hover:text-white transition-colors duration-300">
                  info@tekinpower.com
                </a>
              </div>
            </div>

        
          </div>
        </div>

      

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-blue-200 text-sm">
              © {currentYear} Tekin Power. Tüm hakları saklıdır.
            </div>
            
            <div className="flex items-center space-x-1 text-blue-200 text-sm">
              <span>Türkiye&apos;de</span>
              <Heart className="w-4 h-4 text-red-400 mx-1" />
              <span>ile tasarlandı</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
