import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h3 className="text-[28px] leading-[34px] text-riad_primary font-light">
        Suites de Lujo: Tu Refugio Espacioso en Marrakech
      </h3>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Relájate en nuestros espacios más amplios y elegantes. Diseñadas
        exclusivamente para dos personas, nuestras{" "}
        <strong>Suites de Lujo</strong> combinan la artesanía{" "}
        <strong>marroquí tradicional</strong> con una sofisticación
        contemporánea.
      </p>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Disfruta del máximo confort con{" "}
        <strong>ropa de cama de alta calidad</strong>, un elegante baño privado
        cuidadosamente diseñado y climatización para disfrutar de{" "}
        <strong>noches perfectas</strong>. Para tus momentos de relajación, cada
        suite cuenta con una Smart TV con servicios de streaming y un smartphone
        local gratuito para recorrer la <strong>Medina</strong> con facilidad.
        Un auténtico <strong>refugio privado de paz</strong>.
      </p>
    </div>
  );
};

export default Intro;
