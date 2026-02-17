import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h3 className="text-[28px] leading-[34px] text-riad_primary font-light">
        Deluxe Rooms: Authentic Moroccan Charm & Refined Comfort
      </h3>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Intimate and beautifully appointed, our <strong>Deluxe Rooms</strong>{" "}
        offer a perfect balance of <strong>Medina heritage</strong> and{" "}
        <strong>modern luxury</strong>.
      </p>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Sleep soundly in a plush double bed and refresh in your elegant{" "}
        <strong>private bathroom</strong> featuring a spacious walk-in shower
        and artisanal details. Thoughtful touches—from quiet air-conditioning to
        a dedicated smartphone for your excursions—ensure a seamless,{" "}
        <strong>romantic stay for couples seeking elegance and privacy</strong>.
      </p>
    </div>
  );
};

export default Intro;
