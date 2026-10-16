import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full h-full px-6 py-12" aria-labelledby="about-es-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Right column in DOM / Left column on desktop / Top on mobile */}
        <div className="w-full h-full flex flex-col justify-between gap-16 order-1 lg:order-2">
          {/* Text content with single H1 */}
          <div className="space-y-4">
            <h1
              id="about-es-heading"
              className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6"
            >
              Riad de Lujo Solo Adultos en el Corazón de la Medina de Marrakech
            </h1>
            <div className="text-riad_primary text-[14px] leading-[21px] font-light space-y-3">
              <p>
                <strong>Pure House Marrakech</strong> es un exclusivo{" "}
                <strong>riad de lujo solo para adultos</strong> ubicado a escasos{" "}
                <strong>pasos de la plaza Jemaa el-Fna</strong> en el corazón de la Medina histórica.
                Diseñado para parejas y viajeros que buscan desconexión, privacidad y diseño refinado,
                ofrecemos una experiencia boutique cuidada con hospitalidad personalizada y un equipo atento.
              </p>
              <p>
                Descubre nuestras acogedoras{" "}
                <Link
                  href="/es/estandar"
                  className="underline hover:text-riad_secondary transition-colors"
                >
                  Habitaciones Estándar
                </Link>
                , elegantes{" "}
                <Link
                  href="/es/deluxe"
                  className="underline hover:text-riad_secondary transition-colors"
                >
                  Habitaciones Deluxe
                </Link>
                {" "}y espaciosas{" "}
                <Link
                  href="/es/suites"
                  className="underline hover:text-riad_secondary transition-colors"
                >
                  Suites
                </Link>
                . Relájate junto a la piscina del patio central o contempla los atardeceres de Marrakech
                desde nuestra terraza en la azotea.{" "}
                <Link
                  href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
                  target="_blank"
                  rel="noopener"
                  className="underline font-normal hover:text-riad_secondary transition-colors"
                >
                  Reserva directamente tu estancia
                </Link>{" "}
                con la mejor tarifa garantizada.
              </p>
            </div>
          </div>

          {/* Small image */}
          <div className="relative w-full h-full overflow-hidden shadow-lg hidden lg:block min-h-[300px]">
            <Image
              src="/images/private-riad-marrakech-with-pool.webp"
              alt="Vista desde el balcón a la piscina esmeralda y la vegetación del patio en Pure House Marrakech"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Left column in DOM / Left on desktop / Second on mobile */}
        <div className="flex flex-col gap-10 lg:gap-16 order-2 lg:order-1">
          <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden">
            <Image
              src="/images/riad-in-marrakech.webp"
              alt="Patio central soleado y piscina en Pure House Marrakech"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <h2 className="lg:text-[31px] lg:leading-[34px] text-[28px] leading-[30px] font-light text-riad_secondary text-center px-4 lg:px-36">
            Donde los interiores refinados se encuentran con la armonía natural.
          </h2>
          <div className="relative w-full h-[250px] overflow-hidden shadow-lg block lg:hidden">
            <Image
              src="/images/family-friendly-riad-marrakech.webp"
              alt="Zona de descanso serena con detalles arquitectónicos tradicionales marroquíes"
              fill
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
