import Image from "next/image";

const Info = () => {
  return (
    <section className="w-full h-full px-6 py-12" aria-labelledby="sanctuary-es-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Left column */}
        <div className="w-full h-full space-y-4">
          <h2
            id="sanctuary-es-heading"
            className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6"
          >
            Explora Marrakech Justo a la Puerta de Tu Alojamiento
          </h2>
          <div className="text-riad_primary text-[14px] leading-[21px] font-light space-y-3">
            <p>
              Con una ubicación privilegiada en la Medina de Marrakech,{" "}
              <strong>Pure House Marrakech</strong> ofrece suites con aire acondicionado,
              piscina en el patio interior, conexión Wi-Fi gratuita y un ambiente tranquilo
              exclusivo para adultos.
            </p>
            <p>
              Todas las habitaciones de este riad disponen de baño privado en tadelakt
              con ducha a ras de suelo y artículos de aseo de cortesía. Se proporcionan
              ropa de cama de primera calidad y toallas.
            </p>
            <p>
              Cada mañana se sirve un delicioso desayuno continental y vegetariano
              elaborado con productos frescos de mercado.
            </p>
            <p>
              Situado a 500 metros de la plaza Jemaa el-Fna y a menos de 1 km de la
              mezquita Koutoubia, el riad cuenta con terraza y bar. El Palacio de la Bahía
              se encuentra a menos de 1 km, mientras que el Jardín Majorelle está a 3,2 km.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
          <Image
            src="/images/luxury-riad-marrakech.webp"
            alt="Atención personalizada y acogedora en la recepción de Pure House Marrakech"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
