import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h1 className="text-[20px] leading-[24px] text-center lg:text-[28px] lg:leading-[34px] text-riad_primary font-light">
        Une séance photo magique au cœur de Marrakech
      </h1>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        {
          "Immortalisez des souvenirs intemporels lors d’une séance photo exclusive dans notre riad à Marrakech. Entouré d’une architecture élégante, de couleurs vibrantes et du charme authentique du Maroc, chaque image révèle l’âme de la ville, mêlant culture, beauté et émotion pour créer des moments inoubliables."
        }
      </p>
    </div>
  );
};

export default Intro;
