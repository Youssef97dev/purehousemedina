import React from "react";
import { homeContent } from "@/data/homeContent";

export default function Attractions({ locale = "en" }) {
  const content = homeContent[locale]?.attractions || homeContent.en.attractions;

  return (
    <section
      id="nearby-attractions"
      className="w-full px-6 py-14 lg:py-20 border-t-[0.2px] border-riad_secondary/40"
      aria-labelledby="attractions-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-riad_secondary block mb-3">
            {content.tag}
          </span>
          <h2
            id="attractions-heading"
            className="text-[26px] md:text-[34px] leading-[32px] md:leading-[40px] font-light text-riad_primary"
          >
            {content.title}
          </h2>
          <p className="mt-4 text-[13px] md:text-[14px] leading-[22px] text-riad_secondary font-light">
            {content.subtitle}
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {content.items.map((item, idx) => (
            <div
              key={idx}
              className="border-[0.2px] border-riad_secondary/60 p-6 lg:p-7 flex flex-col justify-between hover:border-riad_primary transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-[17px] md:text-[18px] font-light text-riad_primary">
                    {item.name}
                  </h3>
                  <span className="text-[11px] text-riad_secondary tracking-widest pl-2">
                    {item.distance}
                  </span>
                </div>
                <div className="w-6 h-[1px] bg-riad_secondary/50 mb-3"></div>
                <p className="text-[13px] leading-[21px] text-riad_primary/90 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
