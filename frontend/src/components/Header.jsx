import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
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
    { href: '#neden-biz', label: 'Neden Biz' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#anasayfa" 
            onClick={(e) => scrollToSection(e, '#anasayfa')} 
            className="text-white text-xl tracking-wide"
          >
            <span className="font-light">Mac</span>
            <span className="font-semibold"> Lounge</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={`tel:${businessInfo.phone}`}
            className="hidden lg:flex items-center gap-2 text-[#00FFD1] text-sm tracking-wide hover:text-white transition-colors duration-300"
          >
            <Phone size={16} />
            {businessInfo.phone}
          </a>

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
        className={`lg:hidden bg-black/98 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white/70 hover:text-white text-base py-2 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${businessInfo.phone}`}
            className="text-[#00FFD1] text-base py-2 flex items-center gap-2"
          >
            <Phone size={18} />
            {businessInfo.phone}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
