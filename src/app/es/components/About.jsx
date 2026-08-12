import Image from "next/image";

const About = () => {
  return (
    <section className="w-full h-full px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Left big image */}
        <div className="flex flex-col gap-10 lg:gap-16 order-2 lg:order-1">
          <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden">
            <Image
              src="/images/riad-in-marrakech.webp"
              alt="Viviendo una auténtica experiencia en un riad marroquí en Marrakech"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="lg:text-[31px] lg:leading-[34px] text-[28px] leading-[30px] font-light text-riad_secondary text-center px-4 lg:px-36">
            {
              "Donde los interiores refinados se encuentran con la armonía natural."
            }
          </h2>
          <div className="relative w-full h-[250px] overflow-hidden shadow-lg block lg:hidden">
            <Image
              src="/images/family-friendly-riad-marrakech.webp"
              alt="Resort villa"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="w-full h-full flex flex-col justify-between gap-16 order-1 lg:order-2">
          {/* Text content */}
          <div className="space-y-4">
            <h2 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
              {
                "Déjate cautivar por el encanto atemporal de Pure House Medina y permite que cada instante inspire tu alma."
              }
            </h2>
            <p className="text-riad_primary text-[14px] leading-[21px] font-light">
              {
                "Sumérgete en nuestra filosofía del bienestar, donde una atmósfera revitalizante y el compromiso con tu bienestar ocupan un lugar central. Nuestro entorno sereno y acogedor te invita a relajarte y disfrutar de la tranquilidad. Adornados con obras cautivadoras, nuestros espacios han sido cuidadosamente diseñados para inspirar y revitalizar. Descubre la verdadera calidez de nuestro equipo atento, dedicado a cuidar de tu comodidad con la máxima atención. Bienvenido a un refugio donde la filosofía se encuentra con el confort, y donde cada estancia se convierte en una armonía entre relajación y expresión artística."
              }
            </p>
          </div>

          {/* Small image */}
          <div className="relative w-full h-full overflow-hidden shadow-lg hidden lg:block">
            <Image
              src="/images/private-riad-marrakech-with-pool.webp"
              alt="Auténtica experiencia en un riad marroquí de lujo en la Medina de Marrakech"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
