import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h3 className="text-[28px] leading-[34px] text-riad_primary font-light">
        Habitaciones con Patio Íntimo: Un Acogedor Refugio en la Medina
      </h3>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Pasa directamente de la <strong>energía vibrante de Marrakech</strong> a
        tu <strong>acogedor refugio con aire acondicionado</strong>. Con acceso
        a nuestro tranquilo patio central, estas{" "}
        <strong>habitaciones íntimas</strong> están diseñadas especialmente para
        una escapada romántica para dos.
      </p>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Vive la auténtica <strong>experiencia de alojarte en un riad</strong>{" "}
        con un elegante <strong>baño privado</strong>,{" "}
        <strong>confort premium</strong> y todas las comodidades modernas
        esenciales, incluido un smartphone personal para mantenerte conectado
        mientras exploras la Ciudad Roja.
      </p>
    </div>
  );
};

export default Intro;
