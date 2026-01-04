import React from 'react';
import { Star } from 'lucide-react';
import { businessInfo } from '../data/mock';

const WhyUsSection = () => {
  const reasons = [
    "Yüksek müşteri memnuniyeti",
    "İstikrarlı kalite ve sunum",
    "Konya'da güvenilir tercih",
    "Samimi ve konforlu atmosfer"
  ];

  return (
    <section id="neden-biz" className="bg-[#0a0a0a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-[#00FFD1] text-sm tracking-[0.2em] uppercase mb-4">
              Neden Biz
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
              Farkımız
            </h2>
            
            <p className="text-white/70 font-light leading-relaxed mb-10">
              Konya Selçuklu'da kaliteli nargile arayan binlerce kişinin tercihi. 
              Google değerlendirmelerimiz kalitemizin kanıtı.
            </p>

            {/* Reasons List */}
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-4 text-white/80">
                  <span className="w-1.5 h-1.5 bg-[#00FFD1]"></span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Rating Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-black border border-white/10 p-12 text-center max-w-sm w-full">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(businessInfo.rating.score) ? 'text-[#00FFD1] fill-[#00FFD1]' : 'text-white/20'}
                  />
                ))}
              </div>
              <p className="text-5xl font-light text-white mb-2">
                {businessInfo.rating.score}
              </p>
              <p className="text-white/50 text-sm mb-8">Google Puanı</p>
              
              <div className="border-t border-white/10 pt-8">
                <p className="text-3xl font-light text-[#00FFD1] mb-2">
                  {businessInfo.rating.reviews}+
                </p>
                <p className="text-white/50 text-sm">Müşteri Değerlendirmesi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
