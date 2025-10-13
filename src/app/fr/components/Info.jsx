import Image from "next/image";

const Info = () => {
  return (
    <section className="w-full h-full px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Left big image */}
        <div className="w-full h-full space-y-4">
          <h2 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
            Explorez Marrakech juste au pas de votre porte
          </h2>
          <p className="text-riad_primary text-[14px] leading-[21px] font-light">
            {
              "Bénéficiant d'un emplacement privilégié à Marrakech, le Pure House Marrakech propose des chambres climatisées, une piscine extérieure ouverte en saison, une connexion Wi-Fi gratuite et un jardin."
            }
            <br />
            <br />
            {
              "Toutes les chambres de ce riad disposent de leur propre salle de bains privative avec douche à l’italienne et articles de toilette. Le linge de lit et les serviettes sont fournis."
            }
            <br />
            <br />
            {
              "Un petit-déjeuner continental, végétarien est servi tous les jours."
            }
            <br />
            <br />
            {
              "Situé à 500 mètres de la place Jemaa el-Fna et à moins de 1 km de la mosquée Koutoubia, il dispose d'une terrasse et d'un bar. Le palais de la Bahia se trouve à moins de 1 km et le jardin Majorelle à 3,2 km."
            }
          </p>
        </div>

        {/* Right column */}

        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
          <Image
            src="/riad/riad-hero-2.jpg"
            alt="Luxury resort pool"
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
