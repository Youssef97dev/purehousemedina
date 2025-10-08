import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h1 className="text-[28px] leading-[34px] text-riad_primary font-light">
        Deluxe Rooms
      </h1>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        {
          "The double rooms feature a wardrobe, and a private bathroom with a walk-in shower and a hairdryer. Most Deluxe rooms include a TV with streaming services and a smartphone. Each unit is furnished with a king-size bed."
        }
      </p>
    </div>
  );
};

export default Intro;
