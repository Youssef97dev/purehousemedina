import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h1 className="text-[28px] leading-[34px] text-riad_primary font-light">
        Chambres Deluxe
      </h1>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        {
          "La chambre double dispose d'une armoire et d'une salle de bains privée avec douche à l'italienne et sèche-cheveux. La plus part des chambres Deluxe dispose d'un écran TV avec des services de streaming, un Smartphone. L'unité dispose d'un lit King size."
        }
      </p>
    </div>
  );
};

export default Intro;
