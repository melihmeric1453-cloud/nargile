import React from 'react';
import { Phone, MessageCircle, Star, Clock, MapPin } from 'lucide-react';
import { businessInfo } from '../data/mock';

const HeroSection = () => {
  const whatsappLink = `https://wa.me/${businessInfo.whatsapp}?text=Merhaba, bilgi almak istiyorum.`;

  return (
    <section id="anasayfa" className="min-h-screen bg-black relative flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%),
              repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)
            `,
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 mb-8">
            <MapPin size={16} className="text-[#00FFD1]" />
            <span className="text-white/70 text-sm">Selçuklu / Konya</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[66px] font-semibold text-white leading-[1.1] tracking-[-0.62px] mb-6">
            Selçuklu'da Kaliteli{' '}
            <span className="text-[#00FFD1]">Nargilenin</span> Adresi
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
            {businessInfo.description}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(businessInfo.rating.score) ? 'text-[#00FFD1] fill-[#00FFD1]' : 'text-white/30'}
                  />
                ))}
              </div>
              <span className="text-white font-semibold">{businessInfo.rating.score}</span>
              <span className="text-white/60">({businessInfo.rating.reviews} yorum)</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Clock size={18} className="text-[#00FFD1]" />
              <span>{businessInfo.hours.days} • {businessInfo.hours.closing}'e kadar</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${businessInfo.phone}`}
              className="bg-[#00FFD1] text-black px-8 py-4 text-lg font-medium hover:bg-[rgba(0,255,209,0.1)] hover:text-[#00FFD1] transition-all duration-400 flex items-center justify-center gap-3 min-h-[56px]"
            >
              <Phone size={22} />
              Hemen Ara
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-all duration-400 flex items-center justify-center gap-3 min-h-[56px]"
            >
              <MessageCircle size={22} />
              WhatsApp'tan Yaz
            </a>
          </div>

          {/* Price Range */}
          <p className="mt-8 text-white/50 text-sm">
            Kişi başı: <span className="text-white/70">{businessInfo.priceRange}</span>
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;
