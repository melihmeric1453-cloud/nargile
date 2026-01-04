import React from 'react';
import { Phone, MessageCircle, Star } from 'lucide-react';
import { businessInfo } from '../data/mock';

const HeroSection = () => {
  const whatsappLink = `https://wa.me/${businessInfo.whatsapp}?text=Merhaba, bilgi almak istiyorum.`;

  return (
    <section id="anasayfa" className="min-h-screen bg-black relative flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1635547821500-77542481940c?w=1920&q=80"
          alt="Mac Lounge Atmosfer"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 lg:py-40">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <p className="text-[#00FFD1] text-sm tracking-[0.2em] uppercase mb-6 font-medium">
            Selçuklu / Konya
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
            Kaliteli Nargilenin
            <span className="block font-semibold">Adresi</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/70 leading-relaxed mb-10 font-light">
            Premium nargile deneyimi, özenli sunum ve samimi atmosfer.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(businessInfo.rating.score) ? 'text-[#00FFD1] fill-[#00FFD1]' : 'text-white/20'}
                />
              ))}
            </div>
            <span className="text-white/60 text-sm">
              {businessInfo.rating.score} · {businessInfo.rating.reviews} değerlendirme
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${businessInfo.phone}`}
              className="bg-[#00FFD1] text-black px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-white transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone size={18} />
              Rezervasyon
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-wrap justify-between items-center gap-4 text-sm text-white/60">
          <span>Her gün açık · Kapanış: {businessInfo.hours.closing}</span>
          <span>Kişi başı: {businessInfo.priceRange}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
