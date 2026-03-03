import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h1 className="text-[20px] leading-[24px] text-center lg:text-[28px] lg:leading-[34px] text-riad_primary font-light px-1 md:px-96">
        Découvrez le Pure House Marrakech : Galerie de notre Riad de Luxe dans
        la Médina
      </h1>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-justify">
        {"Plongez au cœur de notre sanctuaire visuel et découvrez l'âme du "}
        <strong>Pure House Marrakech</strong>
        {", un "}
        <strong>riad de luxe confidentiel</strong> situé au centre de la{" "}
        <strong>Médina de Marrakech</strong>
        {". Notre galerie illustre l'accord parfait entre "}
        <strong>{"l'architecture marocaine traditionnelle"}</strong> et le
        confort moderne épuré. De notre patio serein avec{" "}
        <strong>piscine intérieure</strong> à notre{" "}
        <strong>terrasse panoramique</strong>
        {" offrant une vue imprenable sur l'Atlas, chaque recoin de notre "}
        <strong>{"maison d'hôtes"}</strong> invite à la détente. Que vous
        recherchiez une <strong>suite romantique</strong> ou la{" "}
        <strong>{"privatisation d'un riad à Marrakech"}</strong>
        {
          ", explorez nos photos pour comprendre pourquoi nous sommes l'une des "
        }
        <strong>meilleures adresses de séjour au Maroc</strong>.
      </p>
    </div>
  );
};

export default Intro;
