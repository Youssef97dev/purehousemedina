import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h1 className="text-[20px] leading-[24px] text-center lg:text-[28px] lg:leading-[34px] text-riad_primary font-light">
        A Magical Photoshoot in the Heart of Marrakech
      </h1>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        {
          "Capture timeless memories with an exclusive photoshoot at our Riad in Marrakech. Surrounded by elegant architecture, vibrant hues, and authentic Moroccan charm, each image reveals the soul of the city blending culture, beauty, and emotion into unforgettable moments."
        }
      </p>
    </div>
  );
};

export default Intro;
