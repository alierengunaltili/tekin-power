'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Navbar animasyonu
    gsap.fromTo('.navbar', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Ana Sayfa', href: 'hero' },
    { label: 'Hizmetlerimiz', href: 'services' },
    { label: 'Kurumsal', href: 'about' },
    { label: 'Projeler', href: 'projects' },
    { label: 'İletişim', href: 'contact' }
  ];

  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <Zap className={`h-8 w-8 transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 rounded-full blur-lg"></div>
            </div>
            <span className={`text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent ${
              !isScrolled ? 'text-white bg-none' : ''
            }`}>
              Tekin Power
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'
                } group`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-blue-500/25"
            >
              Teklif Al
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-3 bg-white/95 backdrop-blur-lg rounded-lg mt-4 shadow-lg border border-blue-100">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 py-3">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-blue-500/25"
              >
                Teklif Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
