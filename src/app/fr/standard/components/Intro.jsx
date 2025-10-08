import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h1 className="text-[28px] leading-[34px] text-riad_primary font-light">
        Chambres Standard
      </h1>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        {
          "Cette chambre double climatisée dispose d'une salle de bain privée, d'un Smartphone et d'un patio. L'unité offre 1 lit."
        }
      </p>
    </div>
  );
};

export default Intro;
