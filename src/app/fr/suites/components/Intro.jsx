import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h1 className="text-[28px] leading-[34px] text-riad_primary font-light">
        Suites
      </h1>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        {
          "Cette suite climatisée dispose d'un Smartphone, d'une télévision à écran plat avec des services de streaming. L'unité dispose d'un lit."
        }
      </p>
    </div>
  );
};

export default Intro;
