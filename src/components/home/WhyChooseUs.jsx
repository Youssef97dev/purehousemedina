import React from "react";
import { homeContent } from "@/data/homeContent";

export default function WhyChooseUs({ locale = "en" }) {
  const content = homeContent[locale]?.whyChoose || homeContent.en.whyChoose;

  return (
    <section
      id="why-choose-us"
      className="w-full px-6 py-14 lg:py-20 border-t-[0.2px] border-riad_secondary/40"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-riad_secondary block mb-3">
            {content.tag}
          </span>
          <h2
            id="why-choose-heading"
            className="text-[26px] md:text-[34px] leading-[32px] md:leading-[40px] font-light text-riad_primary"
          >
            {content.title}
          </h2>
          <p className="mt-4 text-[13px] md:text-[14px] leading-[22px] text-riad_secondary font-light">
            {content.subtitle}
          </p>
        </div>

        {/* 6 USP Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {content.items.map((item, idx) => (
            <div
              key={idx}
              className="border-[0.2px] border-riad_secondary/60 bg-transparent p-7 lg:p-8 flex flex-col justify-start transition-colors duration-300 hover:border-riad_primary"
            >
              <span className="text-[11px] font-light text-riad_secondary tracking-widest mb-4">
                0{idx + 1}
              </span>
              <h3 className="text-[19px] md:text-[21px] leading-[26px] font-light text-riad_primary">
                {item.title}
              </h3>
              <div className="w-8 h-[1px] bg-riad_secondary my-4"></div>
              <p className="text-[13px] leading-[22px] text-riad_primary/90 font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
