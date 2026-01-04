import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/mock';

const MobileStickyCTA = () => {
  const whatsappLink = `https://wa.me/${businessInfo.whatsapp}?text=Merhaba, bilgi almak istiyorum.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-black border-t border-white/10 px-4 py-3 safe-area-pb">
        <div className="flex gap-3">
          <a
            href={`tel:${businessInfo.phone}`}
            className="flex-1 bg-[#00FFD1] text-black py-3.5 text-sm font-medium tracking-wide uppercase flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            Ara
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-white/30 text-white py-3.5 text-sm font-medium tracking-wide uppercase flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
