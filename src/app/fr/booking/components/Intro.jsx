import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 pt-28 px-4 lg:px-56">
      <h1 className="text-[35px] leading-[45px] text-center tracking-[2px] font-light text-riad_primary mb-2 px-10">{`Résérvation`}</h1>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Un havre de paix au cœur de la Ville Rouge, notre riad vous invite à ralentir, à vous détendre et à vous sentir comme chez vous dès votre arrivée.`}</p>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Bénéficiant d’un emplacement privilégié à Marrakech, Pure House Marrakech propose des chambres climatisées, une piscine extérieure saisonnière, une connexion Wi-Fi gratuite et un patio.`}</p>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Faites comme chez vous — votre escapade à Marrakech commence ici.`}</p>
      <Link
        href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
        className={`w-[40%] text-center  lg:w-[60%] tracking-[0.1em] lg:tracking-[0.2em]  text-[12px] lg:text-[12px] leading-[28px] lg:leading-[28px] py-1 px-4 lg:px-6 italic transition-all duration-300 ease-in-out text-riad_background bg-riad_secondary hover:bg-riad_primary`}
      >
        Résérvation
      </Link>
    </div>
  );
};

export default Intro;
