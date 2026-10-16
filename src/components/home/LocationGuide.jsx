import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { homeContent } from "@/data/homeContent";

export default function LocationGuide({ locale = "en" }) {
  const content = homeContent[locale]?.location || homeContent.en.location;

  return (
    <section
      id="location-guide"
      className="w-full px-6 py-14 lg:py-20 border-t-[0.2px] border-riad_secondary/40"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-riad_secondary block mb-3">
            {content.tag}
          </span>
          <h2
            id="location-heading"
            className="text-[26px] md:text-[34px] leading-[32px] md:leading-[40px] font-light text-riad_primary"
          >
            {content.title}
          </h2>
          <p className="mt-4 text-[13px] md:text-[14px] leading-[22px] text-riad_secondary font-light">
            {content.subtitle}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left Column: NAP & Arrival */}
          <div className="space-y-6">
            <div className="border-[0.2px] border-riad_secondary/60 p-7 lg:p-8">
              <h3 className="text-[18px] md:text-[20px] font-light text-riad_primary mb-4 flex items-center gap-2">
                <FaLocationDot className="text-riad_secondary" size={16} />
                {content.addressTitle}
              </h3>
              <address className="not-italic text-[13px] leading-[22px] text-riad_primary font-light space-y-1">
                <p className="font-normal">{content.addressName}</p>
                <p>{content.street}</p>
                <p>{content.city}</p>
                <p className="pt-2">Tel: {content.phone}</p>
                <p>Email: {content.email}</p>
              </address>
              <div className="mt-5">
                <Link
                  href="https://maps.app.goo.gl/8tuwf921xh2fhjGe8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-[0.2em] text-riad_primary underline underline-offset-4 hover:text-riad_secondary transition-colors"
                >
                  {content.mapLinkText} ➔
                </Link>
              </div>
            </div>

            <div className="border-[0.2px] border-riad_secondary/60 p-7 lg:p-8">
              <h3 className="text-[18px] md:text-[20px] font-light text-riad_primary mb-3">
                {content.arrivalTitle}
              </h3>
              <p className="text-[13px] leading-[22px] text-riad_primary font-light mb-3">
                {content.arrivalText}
              </p>
              <p className="text-[12px] leading-[20px] text-riad_secondary font-light italic">
                {content.airportNote}
              </p>
            </div>
          </div>

          {/* Right Column: Walking Distances */}
          <div className="border-[0.2px] border-riad_secondary/60 p-7 lg:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] md:text-[20px] font-light text-riad_primary mb-6">
                {content.distancesTitle}
              </h3>
              <div className="divide-y divide-riad_secondary/30">
                {content.distances.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-4 flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-[14px] text-riad_primary font-light">
                        {item.landmark}
                      </p>
                      <p className="text-[11px] text-riad_secondary tracking-wider">
                        {item.distance}
                      </p>
                    </div>
                    <span className="text-[12px] uppercase tracking-wider text-riad_secondary bg-riad_background px-3 py-1 border border-riad_secondary/30">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-riad_secondary/80 font-light mt-6 pt-4 border-t border-riad_secondary/20">
              * Exact times are approximate walking times through the Medina alleys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
