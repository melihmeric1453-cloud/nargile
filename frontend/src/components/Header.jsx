import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#anasayfa', label: 'Ana Sayfa' },
    { href: '#hakkimizda', label: 'Hakkımızda' },
    { href: '#hizmetler', label: 'Hizmetler' },
    { href: '#neden-biz', label: 'Neden Biz?' },
    { href: '#iletisim', label: 'İletişim' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#anasayfa" onClick={(e) => scrollToSection(e, '#anasayfa')} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00FFD1] flex items-center justify-center">
              <span className="text-black font-bold text-xl">M</span>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">{businessInfo.name}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[#4D4D4D] hover:text-white text-base font-normal transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={businessInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4D4D4D] hover:text-white transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href={`tel:${businessInfo.phone}`}
              className="bg-[#00FFD1] text-black px-5 py-2.5 font-medium hover:bg-[rgba(0,255,209,0.1)] hover:text-[#00FFD1] transition-all duration-400 flex items-center gap-2"
            >
              <Phone size={18} />
              Hemen Ara
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menü"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black/98 backdrop-blur-md overflow-hidden transition-all duration-400 ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white/80 hover:text-[#00FFD1] text-lg py-2 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <a
              href={businessInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white"
            >
              <Instagram size={22} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
