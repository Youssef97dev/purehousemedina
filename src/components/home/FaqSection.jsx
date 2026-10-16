import React from "react";
import { homeContent } from "@/data/homeContent";

export default function FaqSection({ locale = "en" }) {
  const content = homeContent[locale]?.faq || homeContent.en.faq;

  return (
    <section
      id="faq"
      className="w-full px-6 py-14 lg:py-20 border-t-[0.2px] border-riad_secondary/40"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-riad_secondary block mb-3">
            {content.tag}
          </span>
          <h2
            id="faq-heading"
            className="text-[26px] md:text-[34px] leading-[32px] md:leading-[40px] font-light text-riad_primary"
          >
            {content.title}
          </h2>
          <p className="mt-4 text-[13px] md:text-[14px] leading-[22px] text-riad_secondary font-light max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Semantic Accordion List */}
        <div className="divide-y divide-riad_secondary/40 border-t border-b border-riad_secondary/40">
          {content.items.map((item, idx) => (
            <details
              key={idx}
              className="group py-5 transition-colors duration-200"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none text-[16px] md:text-[18px] font-light text-riad_primary hover:text-riad_secondary transition-colors focus:outline-none">
                <span className="pr-4">{item.question}</span>
                <span className="text-riad_secondary text-[20px] transition-transform duration-300 group-open:rotate-45 select-none">
                  +
                </span>
              </summary>
              <div className="pt-4 pb-2 text-[13px] md:text-[14px] leading-[23px] text-riad_primary/90 font-light pr-8">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
