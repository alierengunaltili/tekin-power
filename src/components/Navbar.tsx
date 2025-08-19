'use client';

import { gsap } from 'gsap';
import { Menu, X, Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

  const handleNavClick = (item: { label: string; href: string; type: string }) => {
    if (item.type === 'scroll') {
      scrollToSection(item.href);
    }
    // For navigation type, Link component will handle the routing
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Ana Sayfa', href: '/', type: 'navigate' },
    { label: 'Hakkımızda', href: '/hakkimizda', type: 'navigate' },
    { label: 'Hizmetlerimiz', href: '/hizmetlerimiz', type: 'navigate' },
    { label: 'LiFePO4', href: '/lifepo4', type: 'navigate' },
    { label: 'Güneş Paneli', href: '/gunespaneli', type: 'navigate' },
    { label: 'İletişim', href: 'contact', type: 'scroll' }
  ];

  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100' 
        : ' '
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center space-x-2 cursor-pointer"
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const baseClasses = `relative text-base font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white/90 hover:text-white'
              } group`;

              if (item.type === 'navigate') {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={baseClasses}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                );
              }

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className={baseClasses}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              );
            })}
            

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
            {navItems.map((item, index) => {
              const baseClasses = "block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium";
              
              if (item.type === 'navigate') {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={baseClasses}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className={baseClasses}
                >
                  {item.label}
                </button>
              );
            })}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
