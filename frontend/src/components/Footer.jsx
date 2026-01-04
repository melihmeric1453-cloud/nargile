import React from 'react';
import { Phone, Instagram, MapPin } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#anasayfa" onClick={scrollToTop} className="text-white text-xl tracking-wide inline-block mb-6">
              <span className="font-light">Mac</span>
              <span className="font-semibold"> Lounge</span>
            </a>
            <p className="text-white/50 font-light text-sm leading-relaxed">
              Selçuklu'da premium nargile deneyimi.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm uppercase tracking-wider mb-6">İletişim</h3>
            <div className="space-y-4">
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center gap-3 text-white/50 hover:text-[#00FFD1] transition-colors duration-300 text-sm"
              >
                <Phone size={14} />
                {businessInfo.phone}
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </div>
              <a
                href={businessInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-[#00FFD1] transition-colors duration-300 text-sm"
              >
                <Instagram size={14} />
                Instagram
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white text-sm uppercase tracking-wider mb-6">Çalışma Saatleri</h3>
            <p className="text-white/50 text-sm">{businessInfo.hours.days}</p>
            <p className="text-white/50 text-sm">Kapanış: {businessInfo.hours.closing}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} Mac Lounge & Shop
          </p>
          <p className="text-white/30 text-xs">
            Selçuklu / Konya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
