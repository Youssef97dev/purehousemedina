import Image from "next/image";

const About = () => {
  return (
    <section className="w-full h-full px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Left big image */}
        <div className="flex flex-col gap-10 lg:gap-16 order-2 lg:order-1">
          <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden">
            <Image
              src="/riad/room.jpg"
              alt="Luxury resort pool"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="lg:text-[31px] lg:leading-[34px] text-[28px] leading-[30px] font-light text-riad_secondary text-center px-4 lg:px-36">
            {"Là où les intérieurs raffinés rencontrent l’harmonie naturelle."}
          </h2>
          <div className="relative w-full h-[250px] overflow-hidden shadow-lg block lg:hidden">
            <Image
              src="/riad/about-small.jpg"
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
                "Laissez-vous envoûter par le charme intemporel de Pure House Medina et laissez chaque instant inspirer votre âme."
              }
            </h2>
            <p className="text-riad_primary text-[14px] leading-[21px] font-light">
              {
                "Plongez dans notre philosophie du bien-être, où une atmosphère ressourçante et un engagement envers votre santé occupent une place centrale. Notre cadre serein et chaleureux vous invite à vous détendre et à savourer la quiétude. Ornés d’œuvres captivantes, nos espaces sont conçus avec soin pour inspirer et revitaliser. Découvrez la véritable chaleur de notre équipe attentive, veillant à votre confort avec le plus grand soin. Bienvenue dans un havre où la philosophie rencontre le confort, et où chaque séjour est une harmonie entre détente et expression artistique."
              }
            </p>
          </div>

          {/* Small image */}
          <div className="relative w-full h-full overflow-hidden shadow-lg hidden lg:block">
            <Image
              src="/riad/about-small.jpg"
              alt="Resort villa"
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
