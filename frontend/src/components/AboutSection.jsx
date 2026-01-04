import React from 'react';
import { aboutContent } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="hakkimizda" className="bg-black py-24 lg:py-32 relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#00FFD1] text-sm font-medium tracking-wider uppercase mb-4 block">
              {aboutContent.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] mb-8">
              {aboutContent.title}
            </h2>
            <div className="space-y-5">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-white/75 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-[#121212] relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border border-[#00FFD1]/30 rotate-45" />
                <div className="absolute w-32 h-32 border border-[#00FFD1]/20 rotate-45" />
                <div className="absolute w-16 h-16 bg-[#00FFD1]/10" />
              </div>
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#00FFD1]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#00FFD1]" />
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl font-bold text-[#00FFD1]">M</span>
                  <p className="text-white/50 text-sm mt-2">Est. Selçuklu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
