import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h1 className="text-[20px] leading-[24px] text-center lg:text-[28px] lg:leading-[34px] text-riad_primary font-light">
        Exclusive Photoshoot: Your Private Backdrop in Marrakech
      </h1>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Turn your Moroccan getaway into timeless art. With its elegant arches,
        lush patio, and authentic Moroccan craftsmanship,{" "}
        <strong>Pure House Marrakech</strong>
        provides a stunning, <strong>private</strong> backdrop for an{" "}
        <strong>exclusive photoshoot</strong>.
      </p>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Whether you are celebrating a <strong>honeymoon</strong>, an{" "}
        <strong>anniversary</strong>, or simply the joy of{" "}
        <strong>travel</strong>, capture the emotion of your{" "}
        <strong>stay away</strong> from the crowds. Let the vibrant hues and
        serene, adults-only atmosphere of our riad frame your most treasured
        memories.
      </p>
    </div>
  );
};

export default Intro;
