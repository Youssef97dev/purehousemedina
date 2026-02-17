import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h3 className="text-[28px] leading-[34px] text-riad_primary font-light">
        Intimate Patio Rooms: A Cozy Medina Retreat
      </h3>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Step directly from the <strong>vibrant energy of Marrakech</strong> into
        your <strong>cozy</strong>,<strong>air-conditioned retreat</strong>.
        Opening onto our serene central patio, these
        <strong>intimate rooms</strong> are perfectly designed for a romantic
        getaway for two.
      </p>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Experience authentic <strong>riad living</strong> with an elegant{" "}
        <strong>private bathroom</strong>,<strong>premium comfort</strong>, and
        all the essential modern amenities, including your personal smartphone
        to stay connected while exploring the Red City.
      </p>
    </div>
  );
};

export default Intro;
