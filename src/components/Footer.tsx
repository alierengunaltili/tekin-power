'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
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
    { label: 'İletişim', href: 'contact' }
  ];

  const services = [
    { label: 'Marin', href: '/hizmetlerimiz/marin' },
    { label: 'Enerji Depolama Sistemleri', href: '/hizmetlerimiz/enerji-depolama' },
    { label: 'Telekomünikasyon Baz İstasyonu', href: '/hizmetlerimiz/telekomunikasyon' },
    { label: 'Askeri Sistem Uygulamaları', href: '/hizmetlerimiz/askeri-sistem-uygulamalari' },
    { label: 'Car Port', href: '/hizmetlerimiz/car-port' },
    { label: 'Mobil Solar Panel', href: '/hizmetlerimiz/mobil-solar' },
    { label: 'Konut Çözümleri', href: '/hizmetlerimiz/konut-cozumleri' },
    { label: 'Golf Araçları', href: '/hizmetlerimiz/golf-araclari' },
    { label: 'Drone', href: '/hizmetlerimiz/drone' },
    { label: 'Forklift', href: '/hizmetlerimiz/forklift' },
    { label: 'E-Bus', href: '/hizmetlerimiz/e-bus' }
  ];



  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
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
              <div className="relative">
                <Zap className="h-8 w-8 text-blue-400" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 rounded-full blur-lg"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tekin Power
              </span>
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
                    {service.label}
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
                    Teknokent İstanbul<br />
                    Kurtköy / İstanbul, Türkiye
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+902125550123" className="text-blue-200 hover:text-white transition-colors duration-300">
                  +90 (212) 555 0123
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@tekinpower.com.tr" className="text-blue-200 hover:text-white transition-colors duration-300">
                  info@tekinpower.com.tr
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Çalışma Saatleri</h4>
              <p className="text-blue-200 text-sm">
                Pazartesi - Cuma: 09:00 - 18:00<br />
                Cumartesi: 09:00 - 13:00<br />
                Pazar: Kapalı
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border border-white/20 rounded-xl p-6 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Enerji Dünyasından Haberdar Olun
            </h3>
            <p className="text-blue-100 mb-4 text-sm max-w-xl mx-auto">
              Yeni teknolojiler, sektörel gelişmeler ve özel fırsatlardan ilk siz haberdar olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 text-sm">
                Abone Ol
              </button>
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
