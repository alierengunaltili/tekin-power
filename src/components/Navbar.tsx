'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type MouseEvent, useEffect, useRef, useState } from 'react';
import ServiceNavigation from '@/components/ServiceNavigation';
import { isWaterPagePath } from '@/lib/waterPages';

const Navbar = () => {
  const pathname = usePathname();
  const isWaterPage = isWaterPagePath(pathname);
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const useDarkText = isScrolled;

  useEffect(() => {
    // Navbar animasyonu
    const animation = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? undefined
      : navRef.current?.animate(
          [{ transform: 'translateY(-100px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }],
          { duration: 1000, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
        );

    // Scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      animation?.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    setIsMenuOpen(false);
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
    if (href === '/' && pathname === '/') {
      event.preventDefault();
      window.history.replaceState(null, '', '/');
      window.scrollTo({ top: 0, behavior });
    } else if (href === '/#contact') {
      const contact = document.getElementById('contact');
      if (contact) {
        event.preventDefault();
        window.history.replaceState(null, '', `${pathname}#contact`);
        contact.scrollIntoView({ behavior, block: 'start' });
      }
    }
  };

  const navItems = [
    { label: 'AnaSayfa', href: '/' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
    { label: 'Deniz & Göl Dibi Tarama ve Temizleme', href: '/hizmetlerimiz/deniz-gol-dibi-arama-tarama', lineTitle: 'Deniz & Göl Dibi', subtitle: 'Tarama ve Temizleme' },
    { label: 'DewJet Elektrikli Tekne Motorları', href: '/dewjet-elektrikli-motor', subtitle: 'Elektrikli Tekne Motorları' },
    { label: 'DewJet Elektrikli Pompa', href: '/dewjet-pompa', subtitle: 'Elektrikli Pompa' },
    { label: 'Yenilenebilir Enerji ve Unisun Enerji Depolama Sistemleri', href: '/hizmetlerimiz/enerji-depolama', lineTitle: 'Yenilenebilir Enerji ve', subtitle: 'Unisun Enerji Depolama Sistemleri' },
    { label: 'İletişim', href: '/#contact' }
  ];

  return (
    <nav ref={navRef} aria-label="Ana menü" className={`navbar fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
      isScrolled
        ? 'bg-white/50 backdrop-blur-lg shadow-lg ' 
        : ' '
    }`}>
       <div className="max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6 lg:px-6 xl:px-8 w-full">
         <div className="flex items-center justify-between h-28 sm:h-28 lg:h-32 gap-2 lg:gap-4">
          {/* Logo */}
           <Link 
             href="/"
             onClick={(event) => handleNavClick(event, '/')}
             className="flex items-center justify-start cursor-pointer flex-1 xl:flex-none min-w-0 overflow-hidden"
           >
             <div className={isWaterPage ? 'relative h-24 w-48 sm:w-52 xl:w-48 2xl:w-52 max-w-full' : 'relative w-64 sm:w-80 xl:w-40 2xl:w-52 h-24 max-w-full'}>
              <Image
                src={isWaterPage ? (useDarkText ? '/tekinpowerlogos/tekinpower-marin-dark-v2.png' : '/tekinpowerlogos/tekinpower-marin-light-v2.png') : useDarkText ? '/tekinpowerlogos/tekinpower-dark.png' : '/tekinpowerlogos/tekinpower-02.webp'}
                alt={isWaterPage ? 'Tekin Power Marin Logo' : 'Tekin Power Logo'}
                fill
                sizes={isWaterPage ? '208px' : '(min-width: 1536px) 208px, (min-width: 1280px) 160px, (min-width: 640px) 320px, 256px'}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-3 2xl:gap-4 flex-shrink-0">
            {navItems.map((item) => {
              const baseClasses = `relative text-sm 2xl:text-base font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                useDarkText
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white/90 hover:text-white'
              } group`;

              if (item.href === '/hizmetlerimiz') {
                return <ServiceNavigation key={item.href} linkClass={baseClasses} onNavigate={handleNavClick} />;
              }
              if (item.href === '/hizmetlerimiz/enerji-depolama') {
                return <ServiceNavigation key={item.href} group="energy" linkClass={baseClasses} onNavigate={handleNavClick} />;
              }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={baseClasses}
                    aria-label={item.label}
                    onClick={(event) => handleNavClick(event, item.href)}
                  >
                    {item.subtitle ? <span className="block text-center leading-snug"><span className="block">{item.lineTitle ?? 'DewJet'}</span><span className="block text-xs 2xl:text-sm">{item.subtitle}</span></span> : item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                );
            })}
            

          </div>

           {/* Mobile Menu Button */}
           <div className="xl:hidden flex-shrink-0">
             <button
               onClick={toggleMenu}
               aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
               aria-expanded={isMenuOpen}
               aria-controls="mobile-navigation"
               className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-300 ${
                 useDarkText
                   ? 'text-gray-700 hover:bg-gray-100' 
                   : 'text-white hover:bg-white/10'
               }`}
             >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-navigation" inert={!isMenuOpen} className={`xl:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[calc(100dvh-8rem)] overflow-y-auto opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}>
          <div className=" m-5 py-2 space-y-2 bg-white/95 backdrop-blur-lg rounded-lg mt-4 shadow-lg border border-blue-100 mx-4 sm:mx-8 md:mx-12">
            {navItems.map((item) => {
              const baseClasses = "block w-full text-left px-4 sm:px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium text-base";

              if (item.href === '/hizmetlerimiz') {
                return <ServiceNavigation key={item.href} mobile linkClass={baseClasses} onNavigate={handleNavClick} />;
              }
              if (item.href === '/hizmetlerimiz/enerji-depolama') {
                return <ServiceNavigation key={item.href} group="energy" mobile linkClass={baseClasses} onNavigate={handleNavClick} />;
              }
              
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={baseClasses}
                    aria-label={item.label}
                    onClick={(event) => handleNavClick(event, item.href)}
                  >
                    {item.subtitle ? <span className="block leading-snug"><span className="block">{item.lineTitle ?? 'DewJet'}</span><span className="block text-sm">{item.subtitle}</span></span> : item.label}
                  </Link>
                );
            })}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
