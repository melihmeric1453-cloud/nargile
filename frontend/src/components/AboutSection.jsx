import React from 'react';

const AboutSection = () => {
  return (
    <section id="hakkimizda" className="bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1574238752695-675b86d49267?w=800&q=80"
              alt="Premium Nargile"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 border border-[#00FFD1]/20" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-[#00FFD1] text-sm tracking-[0.2em] uppercase mb-4">
              Hakkımızda
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
              Kalite ve Konforun
              <span className="block font-semibold">Buluştuğu Nokta</span>
            </h2>
            
            <div className="space-y-6 text-white/70 font-light leading-relaxed">
              <p>
                Mac Lounge, Konya Selçuklu'da premium nargile deneyimi sunan seçkin bir mekândır. 
                Kaliteli takımlarımız ve geniş aroma yelpazemizle her ziyaretinizi özel kılıyoruz.
              </p>
              <p>
                Deneyimli ekibimiz, konforlu ortamımız ve özenli hizmet anlayışımızla 
                misafirlerimize unutulmaz anlar yaşatmayı hedefliyoruz.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <p className="text-3xl font-light text-white">4.8</p>
                <p className="text-sm text-white/50 mt-1">Google Puanı</p>
              </div>
              <div>
                <p className="text-3xl font-light text-white">408+</p>
                <p className="text-sm text-white/50 mt-1">Değerlendirme</p>
              </div>
              <div>
                <p className="text-3xl font-light text-white">01:30</p>
                <p className="text-sm text-white/50 mt-1">Kapanış</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
