import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { whyUsReasons, businessInfo } from '../data/mock';

const WhyUsSection = () => {
  return (
    <section id="neden-biz" className="bg-black py-24 lg:py-32 relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Content */}
          <div>
            <span className="text-[#00FFD1] text-sm font-medium tracking-wider uppercase mb-4 block">
              Farkımız
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] mb-8">
              Neden Mac Lounge?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Konya Selçuklu'da kaliteli nargile arayan binlerce kişinin tercihi.
            </p>

            {/* Reasons List */}
            <div className="space-y-6">
              {whyUsReasons.map((reason) => (
                <div key={reason.id} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <CheckCircle size={24} className="text-[#00FFD1]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-white/60">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="flex items-center justify-center">
            <div className="bg-[#121212] p-10 lg:p-12 w-full max-w-md">
              <div className="text-center">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={32}
                      className={i < Math.floor(businessInfo.rating.score) ? 'text-[#00FFD1] fill-[#00FFD1]' : 'text-white/20'}
                    />
                  ))}
                </div>
                <div className="text-6xl font-bold text-white mb-2">
                  {businessInfo.rating.score}
                </div>
                <p className="text-white/60 text-lg mb-6">
                  Google Puanı
                </p>
                <div className="border-t border-white/10 pt-6">
                  <div className="text-4xl font-bold text-[#00FFD1] mb-2">
                    {businessInfo.rating.reviews}+
                  </div>
                  <p className="text-white/60">
                    Gerçek Müşteri Yorumu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
