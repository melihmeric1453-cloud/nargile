import React from 'react';
import { Flame, Sparkles, Sofa, Users, Heart, MapPin } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Flame: Flame,
  Sparkles: Sparkles,
  Sofa: Sofa,
  Users: Users,
  Heart: Heart,
  MapPin: MapPin
};

const ServicesSection = () => {
  return (
    <section id="hizmetler" className="bg-[#121212] py-24 lg:py-32 relative">
      {/* Subtle borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00FFD1] text-sm font-medium tracking-wider uppercase mb-4 block">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] mb-6">
            Neler Sunuyoruz?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Kaliteli nargile deneyimi için ihtiyacınız olan her şey Mac Lounge'da.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-black p-8 group hover:bg-[rgba(0,255,209,0.05)] transition-all duration-400 border border-transparent hover:border-[#00FFD1]/20"
              >
                <div className="w-12 h-12 bg-[#00FFD1]/10 flex items-center justify-center mb-6 group-hover:bg-[#00FFD1]/20 transition-colors duration-400">
                  {IconComponent && <IconComponent size={24} className="text-[#00FFD1]" />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
