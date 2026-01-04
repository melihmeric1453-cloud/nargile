import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Navigation } from 'lucide-react';
import { businessInfo } from '../data/mock';

const ContactSection = () => {
  const whatsappLink = `https://wa.me/${businessInfo.whatsapp}?text=Merhaba, bilgi almak istiyorum.`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address)}`;

  return (
    <section id="iletisim" className="bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#00FFD1] text-sm tracking-[0.2em] uppercase mb-4">
            İletişim
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-white">
            Bize Ulaşın
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center gap-6 p-6 border border-white/10 hover:border-[#00FFD1]/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 border border-[#00FFD1] flex items-center justify-center">
                <Phone size={20} className="text-[#00FFD1]" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Telefon</p>
                <p className="text-white text-lg">{businessInfo.phone}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 border border-white/10 hover:border-[#00FFD1]/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 border border-[#00FFD1] flex items-center justify-center">
                <MessageCircle size={20} className="text-[#00FFD1]" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                <p className="text-white text-lg">Mesaj Gönder</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-6 p-6 border border-white/10">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-white/60" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Adres</p>
                <p className="text-white/80">{businessInfo.address}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-6 p-6 border border-white/10">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Clock size={20} className="text-white/60" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Çalışma Saatleri</p>
                <p className="text-white/80">{businessInfo.hours.days} · Kapanış: {businessInfo.hours.closing}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-white/30 text-white py-4 text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Navigation size={16} />
                Yol Tarifi
              </a>
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex-1 bg-[#00FFD1] text-black py-4 text-sm font-medium tracking-wide uppercase hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Hemen Ara
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-[500px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.5!2d32.4544!3d37.8791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0851e1c0e4f53%3A0x8d2e6f9b0a0c0d0e!2sSancak%2C%20Veysel%20Karani%20Cd.%20No%3A18%2C%2042250%20Sel%C3%A7uklu%2FKonya!5e0!3m2!1str!2str!4v1704000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mac Lounge Konum"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
