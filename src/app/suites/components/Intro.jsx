import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h3 className="text-[28px] leading-[34px] text-riad_primary font-light">
        Luxury Suites: Your Spacious Sanctuary in Marrakech
      </h3>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Unwind in our most expansive and elegant spaces. Designed exclusively
        for two, our <strong>Luxury Suites</strong> blend{" "}
        <strong>traditional Moroccan</strong> artistry with contemporary
        sophistication.
      </p>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Enjoy the ultimate comfort with <strong>premium bedding</strong>, a
        beautifully crafted en-suite bathroom, and climate control for{" "}
        <strong>perfect nights</strong>. For your moments of relaxation, each
        suite features a smart TV with streaming services and a complimentary
        local smartphone to navigate the <strong>Medina</strong>
        effortlessly. A true, <strong>private haven of peace</strong>.
      </p>
    </div>
  );
};

export default Intro;
