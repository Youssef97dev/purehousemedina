import Image from "next/image";
import React from "react";

const SectionNd = () => {
  return (
    <section className="py-12 bg-[#F9F8F6] px-6 md:px-12">
      <div className="flex flex-col md:flex-row-reverse items-center gap-16">
        {/* Text Left */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
            The Pure House Difference: Redefining Luxury
          </h2>
          <div className="leading-relaxed space-y-6 text-riad_primary text-[14px] font-light">
            <p>
              While many properties offer premium accommodations, Pure House
              Marrakech elevates the very definition of a luxury riad marrakech.
              Designed for those who demand high-end aesthetics and flawless
              attention to detail, the property masterfully blends traditional
              Moroccan craftsmanship with sophisticated, modern exclusivity. The
              core of this sanctuary is its breathtaking interior courtyard,
              showcasing authentic artisanal zellige tilework, hand-carved
              stucco, and a serene atmosphere designed for complete relaxation.
            </p>
            <p>
              Beyond the exquisite architecture, Pure House Marrakech sets
              itself apart with plush, high-end finishes in every suite, deeply
              personalized concierge service, and an atmosphere of refined
              elegance. It is not merely a place to stay; it is a meticulously
              curated destination that captures the authentic, luxurious soul of
              the Red City.
            </p>
          </div>
        </div>
        {/* Image Right */}
        <div className="w-full md:w-1/2 h-[500px]">
          <Image
            src="/images/pure-house-top-luxury-riad-marrakech.webp"
            alt="High-end finishes and authentic artisanal Moroccan craftsmanship inside a luxury riad Marrakech suite at Pure House."
            title="Pure House Marrakech: A Premium Luxury Riad Experience"
            width={1500}
            height={1500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionNd;
