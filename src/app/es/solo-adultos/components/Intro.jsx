import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Text Left */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
            El verdadero lujo comienza con la tranquilidad absoluta.
          </h2>
          <div className="leading-relaxed space-y-6 text-riad_primary text-[14px] font-light">
            <p>
              En Pure House Marrakech, creemos que el verdadero lujo comienza
              con la tranquilidad absoluta. Diseñado exclusivamente para adultos
              {"(18+)"}, nuestro riad boutique ofrece un refugio sofisticado,
              alejado del bullicio de la Medina.
            </p>
            <p>
              Hemos creado un espacio donde el tiempo se detiene. Ya sea que
              estés celebrando una luna de miel, un aniversario o simplemente
              buscando una escapada tranquila, nuestro entorno sin niños permite
              a los viajeros más exigentes desconectar, recargar energías y
              sumergirse en el romanticismo de Marruecos sin interrupciones.
            </p>
          </div>
        </div>
        {/* Image Right */}
        <div className="w-full md:w-1/2 h-[500px]">
          <Image
            src="/images/peaceful-rooftop-terrace-pure-house-marrakech.webp"
            alt="Terraza panorámica tranquila y bañada por el sol con vistas a la Medina, que ofrece una escapada serena solo para adultos en Pure House Marrakech."
            title="Tranquila Terraza en la Azotea del Riad Pure House Marrakech"
            width={1500}
            height={1500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
