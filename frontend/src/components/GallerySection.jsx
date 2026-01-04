import React from 'react';

const GallerySection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1635547821500-77542481940c?w=600&q=80",
      alt: "Atmosferik Nargile"
    },
    {
      src: "https://images.unsplash.com/photo-1574238752695-675b86d49267?w=600&q=80",
      alt: "Premium Takım"
    },
    {
      src: "https://images.unsplash.com/photo-1574751749605-0f1e41b6cf67?w=600&q=80",
      alt: "Nargile Detay"
    }
  ];

  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#00FFD1] text-sm tracking-[0.2em] uppercase mb-4">
            Galeri
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-white">
            Mekânımızdan Kareler
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
