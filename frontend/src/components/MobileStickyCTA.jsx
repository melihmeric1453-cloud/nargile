import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/mock';

const MobileStickyCTA = () => {
  const whatsappLink = `https://wa.me/${businessInfo.whatsapp}?text=Merhaba, bilgi almak istiyorum.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      {/* Gradient overlay for smooth blend */}
      <div className="h-6 bg-gradient-to-t from-black to-transparent" />
      
      <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-area-pb">
        <div className="flex gap-3">
          <a
            href={`tel:${businessInfo.phone}`}
            className="flex-1 bg-[#00FFD1] text-black py-4 text-base font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform duration-200"
          >
            <Phone size={20} />
            Hemen Ara
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white py-4 text-base font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform duration-200"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
