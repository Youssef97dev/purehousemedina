import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h1 className="text-[20px] leading-[24px] text-center lg:text-[28px] lg:leading-[34px] text-riad_primary font-light">
        Sesión Fotográfica Exclusiva: Tu Escenario Privado en Marrakech
      </h1>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Convierte tu escapada marroquí en un recuerdo convertido en arte
        atemporal. Con sus elegantes arcos, su exuberante patio y su auténtica
        artesanía marroquí, <strong>Pure House Marrakech</strong> ofrece un
        impresionante escenario <strong>privado</strong> para una{" "}
        <strong>sesión fotográfica exclusiva</strong>.
      </p>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Ya sea que estés celebrando una <strong>luna de miel</strong>, un{" "}
        <strong>aniversario</strong> o simplemente disfrutando del placer de{" "}
        <strong>viajar</strong>, captura la emoción de tu{" "}
        <strong>estancia</strong> lejos de las multitudes. Deja que los colores
        vibrantes y la atmósfera serena y exclusiva para adultos de nuestro riad
        enmarquen tus recuerdos más preciados.
      </p>
    </div>
  );
};

export default Intro;
