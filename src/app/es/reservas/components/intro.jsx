import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 pt-28 px-4 lg:px-56">
      <h1 className="text-[35px] leading-[45px] text-center tracking-[2px] font-light text-riad_primary mb-2 px-10">{`Reservas`}</h1>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Un santuario de paz en el corazón de la Ciudad Roja, nuestro riad le invita a desconectar, relajarse y sentirse como en casa desde el momento de su llegada.`}</p>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Gracias a su ubicación privilegiada en Marrakech, Pure House Marrakech ofrece habitaciones con aire acondicionado, una piscina exterior de temporada, Wi-Fi gratuito y un patio.`}</p>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Siéntase como en casa: su escapada a Marrakech comienza aquí.`}</p>
      <Link
        href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
        className={`w-[40%] text-center  lg:w-[60%] tracking-[0.1em] lg:tracking-[0.2em]  text-[12px] lg:text-[12px] leading-[28px] lg:leading-[28px] py-1 px-4 lg:px-6 italic transition-all duration-300 ease-in-out text-riad_background bg-riad_secondary hover:bg-riad_primary`}
      >
        Reservar
      </Link>
    </div>
  );
};

export default Intro;
