import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/mock';

const ContactSection = () => {
  const whatsappLink = `https://wa.me/${businessInfo.whatsapp}?text=Merhaba, bilgi almak istiyorum.`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address)}`;

  return (
    <section id="iletisim" className="bg-[#121212] py-24 lg:py-32 relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00FFD1] text-sm font-medium tracking-wider uppercase mb-4 block">
            Bize Ulaşın
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] mb-6">
            İletişim
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Sorularınız için bizi arayın veya WhatsApp'tan yazın. Sizi ağırlamaktan mutluluk duyarız.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone Card */}
            <a
              href={`tel:${businessInfo.phone}`}
              className="bg-black p-6 flex items-center gap-5 group hover:bg-[rgba(0,255,209,0.05)] transition-all duration-400 border border-transparent hover:border-[#00FFD1]/20"
            >
              <div className="w-14 h-14 bg-[#00FFD1] flex items-center justify-center flex-shrink-0">
                <Phone size={26} className="text-black" />
              </div>
              <div>
                <p className="text-white/50 text-sm mb-1">Telefon</p>
                <p className="text-white text-xl font-semibold">{businessInfo.phone}</p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-6 flex items-center gap-5 group hover:bg-[rgba(0,255,209,0.05)] transition-all duration-400 border border-transparent hover:border-[#00FFD1]/20"
            >
              <div className="w-14 h-14 bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={26} className="text-white" />
              </div>
              <div>
                <p className="text-white/50 text-sm mb-1">WhatsApp</p>
                <p className="text-white text-xl font-semibold">Mesaj Gönder</p>
              </div>
            </a>

            {/* Address Card */}
            <div className="bg-black p-6 flex items-start gap-5">
              <div className="w-14 h-14 bg-[#00FFD1]/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={26} className="text-[#00FFD1]" />
              </div>
              <div>
                <p className="text-white/50 text-sm mb-1">Adres</p>
                <p className="text-white text-lg leading-relaxed">{businessInfo.address}</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-black p-6 flex items-center gap-5">
              <div className="w-14 h-14 bg-[#00FFD1]/10 flex items-center justify-center flex-shrink-0">
                <Clock size={26} className="text-[#00FFD1]" />
              </div>
              <div>
                <p className="text-white/50 text-sm mb-1">Çalışma Saatleri</p>
                <p className="text-white text-lg">{businessInfo.hours.days}</p>
                <p className="text-white/60">Kapanış: {businessInfo.hours.closing}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white px-6 py-4 text-lg font-medium hover:bg-white hover:text-black transition-all duration-400 flex items-center justify-center gap-3"
              >
                <Navigation size={20} />
                Yol Tarifi Al
              </a>
              <a
                href={`tel:${businessInfo.phone}`}
                className="bg-[#00FFD1] text-black px-6 py-4 text-lg font-medium hover:bg-[rgba(0,255,209,0.1)] hover:text-[#00FFD1] transition-all duration-400 flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                Hemen Ara
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-black p-2 h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.5!2d32.4544!3d37.8791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0851e1c0e4f53%3A0x8d2e6f9b0a0c0d0e!2sSancak%2C%20Veysel%20Karani%20Cd.%20No%3A18%2C%2042250%20Sel%C3%A7uklu%2FKonya!5e0!3m2!1str!2str!4v1704000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mac Lounge Konum"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
