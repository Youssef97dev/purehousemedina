import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { homeContent } from "@/data/homeContent";

export default function BookingCtaBand({ locale = "en" }) {
  const content = homeContent[locale]?.ctaBand || homeContent.en.ctaBand;

  return (
    <section
      id="stay-with-us"
      className="w-full px-6 py-16 lg:py-20 border-t-[0.2px] border-riad_secondary/40 bg-riad_background/60"
      aria-labelledby="cta-band-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.35em] text-riad_secondary block mb-3">
          {content.tag}
        </span>
        <h2
          id="cta-band-heading"
          className="text-[26px] md:text-[36px] leading-[34px] md:leading-[44px] font-light text-riad_primary max-w-2xl mx-auto"
        >
          {content.title}
        </h2>
        <p className="mt-4 text-[13px] md:text-[15px] leading-[24px] text-riad_secondary font-light max-w-xl mx-auto">
          {content.subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
            target="_blank"
            rel="noopener"
            className="w-full sm:w-auto px-8 py-3.5 text-[11px] md:text-[12px] uppercase tracking-[0.2em] italic text-riad_background bg-riad_primary hover:bg-riad_secondary transition-colors duration-300 text-center"
          >
            {content.bookButton} ➔
          </Link>
          <Link
            href="https://wa.me/212682225235"
            target="_blank"
            rel="noopener"
            className="w-full sm:w-auto px-8 py-3.5 text-[11px] md:text-[12px] uppercase tracking-[0.2em] italic text-riad_primary border border-riad_primary hover:bg-riad_primary hover:text-riad_background transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={16} />
            <span>{content.whatsappButton}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
