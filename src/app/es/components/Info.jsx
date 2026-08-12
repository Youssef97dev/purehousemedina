import Image from "next/image";

const Info = () => {
  return (
    <section className="w-full h-full px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Left big image */}
        <div className="w-full h-full space-y-4">
          <h2 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
            Explora Marrakech justo a la puerta de tu alojamiento
          </h2>
          <p className="text-riad_primary text-[14px] leading-[21px] font-light">
            {
              "Con una ubicación privilegiada en Marrakech, Pure House Marrakech ofrece habitaciones con aire acondicionado, una piscina exterior de temporada, conexión Wi-Fi gratuita y un jardín."
            }
            <br />
            <br />
            {
              "Todas las habitaciones de este riad disponen de baño privado con ducha a ras de suelo y artículos de aseo. Se proporcionan ropa de cama y toallas."
            }
            <br />
            <br />
            {"Cada día se sirve un desayuno continental y vegetariano."}
            <br />
            <br />
            {
              "Situado a 500 metros de la plaza Jemaa el-Fna y a menos de 1 km de la mezquita Koutoubia, el riad cuenta con una terraza y un bar. El Palacio de la Bahía se encuentra a menos de 1 km, mientras que el Jardín Majorelle está a 3,2 km."
            }
          </p>
        </div>

        {/* Right column */}

        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
          <Image
            src="/images/luxury-riad-marrakech.webp"
            alt="Servicio de conserjería atento y personalizado en Pure House Marrakech"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
