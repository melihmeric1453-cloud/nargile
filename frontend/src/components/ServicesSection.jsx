import React from 'react';

const services = [
  {
    title: "Premium Nargile",
    description: "Yüksek kalite takımlar ve özenli hazırlık."
  },
  {
    title: "Geniş Aroma Seçeneği",
    description: "Klasiklerden özel karışımlara zengin yelpaze."
  },
  {
    title: "Konforlu Ortam",
    description: "Rahat oturma alanları ve huzurlu atmosfer."
  },
  {
    title: "Profesyonel Hizmet",
    description: "Deneyimli ve ilgili ekip."
  }
];

const ServicesSection = () => {
  return (
    <section id="hizmetler" className="bg-[#0a0a0a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-[#00FFD1] text-sm tracking-[0.2em] uppercase mb-4">
            Hizmetlerimiz
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-white">
            Size Sunduklarımız
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-6">
                  <span className="text-[#00FFD1]/40 text-sm font-light">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl text-white font-medium mb-2 group-hover:text-[#00FFD1] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/50 font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="border-b border-white/10 mt-8" />
                )}
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1574751749605-0f1e41b6cf67?w=800&q=80"
              alt="Nargile Detay"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 border border-[#00FFD1]/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
