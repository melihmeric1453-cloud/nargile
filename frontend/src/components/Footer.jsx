import React from 'react';
import { Instagram, Phone, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#00FFD1] flex items-center justify-center">
                <span className="text-black font-bold text-xl">M</span>
              </div>
              <span className="text-white font-semibold text-lg">{businessInfo.name}</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Selçuklu'da kaliteli nargilenin adresi. Samimi ortamımız ve kaliteli hizmetimizle sizleri bekliyoruz.
            </p>
            <a
              href={businessInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#00FFD1] transition-colors duration-300"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-6">Sayfalar</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white/60 hover:text-[#00FFD1] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">İletişim</h3>
            <div className="space-y-4">
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center gap-3 text-white/60 hover:text-[#00FFD1] transition-colors duration-300"
              >
                <Phone size={18} />
                <span>{businessInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>{businessInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Clock size={18} />
                <span>{businessInfo.hours.days} • {businessInfo.hours.closing}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-6">Çalışma Saatleri</h3>
            <div className="space-y-2 text-white/60">
              <p>Pazartesi - Pazar</p>
              <p className="text-[#00FFD1] font-medium">Her gün açık</p>
              <p className="mt-4">Kapanış Saati</p>
              <p className="text-white font-semibold text-2xl">{businessInfo.hours.closing}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} {businessInfo.name}. Tüm hakları saklıdır.
          </p>
          <p className="text-white/40 text-sm">
            Selçuklu / Konya / Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
