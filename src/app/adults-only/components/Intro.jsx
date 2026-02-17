import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Text Left */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
            True luxury begins with absolute tranquility.
          </h2>
          <div className="leading-relaxed space-y-6 text-riad_primary text-[14px] font-light">
            <p>
              At Pure House Marrakech, we believe true luxury begins with
              absolute tranquility. Designed exclusively for adults (18+), our
              boutique riad offers a sophisticated haven away from the bustling
              energy of the Medina.
            </p>
            <p>
              We have crafted a space where time slows down. Whether you are
              celebrating a honeymoon, an anniversary, or simply seeking a quiet
              escape, our child-free environment allows discerning travelers to
              disconnect, recharge, and immerse themselves in the romance of
              Morocco without interruption.
            </p>
          </div>
        </div>
        {/* Image Right */}
        <div className="w-full md:w-1/2 h-[500px]">
          <Image
            src="/riad-marrakech/peaceful-rooftop-terrace-pure-house-marrakech.webp"
            alt="Sun-drenched peaceful rooftop terrace offering a quiet escape at Pure House Marrakech"
            width={1500}
            height={1500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
