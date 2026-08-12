import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-24 lg:mt-32">
      <h3 className="text-[28px] leading-[34px] text-riad_primary font-light">
        Habitaciones Deluxe: Encanto Marroquí Auténtico y Confort Refinado
      </h3>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Íntimas y cuidadosamente decoradas, nuestras{" "}
        <strong>Habitaciones Deluxe</strong> ofrecen el equilibrio perfecto
        entre el <strong>patrimonio de la Medina</strong>y el{" "}
        <strong>lujo contemporáneo</strong>.
      </p>
      <p className="text-riad_primary text-[14px] leading-[21px] px-5 md:px-80 lg:px-96 text-center">
        Duerme plácidamente en una cómoda cama doble y refréscate en tu elegante{" "}
        <strong>baño privado</strong>, equipado con una amplia ducha a ras de
        suelo y detalles artesanales. Detalles cuidadosamente seleccionados,
        desde el aire acondicionado silencioso hasta un smartphone exclusivo
        para tus excursiones, garantizan una estancia fluida y confortable: una{" "}
        <strong>
          escapada romántica para parejas que buscan elegancia y privacidad
        </strong>
        .
      </p>
    </div>
  );
};

export default Intro;
