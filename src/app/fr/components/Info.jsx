import Image from "next/image";

const Info = () => {
  return (
    <section className="w-full h-full px-6 py-12" aria-labelledby="sanctuary-fr-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Left column */}
        <div className="w-full h-full space-y-4">
          <h2
            id="sanctuary-fr-heading"
            className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6"
          >
            Explorez Marrakech Juste au Pas de Votre Porte
          </h2>
          <div className="text-riad_primary text-[14px] leading-[21px] font-light space-y-3">
            <p>
              Bénéficiant d&apos;un emplacement privilégié dans la Médina de Marrakech,{" "}
              <strong>Pure House Marrakech</strong> propose des suites climatisées avec
              salles de bains en tadelakt, un bassin rafraîchissant dans le patio et un
              havre de paix réservé aux adultes.
            </p>
            <p>
              Toutes les chambres de ce riad disposent de leur propre salle de bains privative
              avec douche à l’italienne et articles de toilette raffinés. Le linge de lit et
              les serviettes sont soigneusement fournis.
            </p>
            <p>
              Un petit-déjeuner continental et végétarien composé de produits frais locaux est
              servi tous les jours à votre convenance.
            </p>
            <p>
              Situé à seulement 500 mètres de la place Jemaa el-Fna et à moins de 1 km de la
              mosquée Koutoubia, le riad dispose d&apos;un toit-terrasse panoramique et d&apos;un bar.
              Le palais de la Bahia se trouve à moins de 1 km et le jardin Majorelle à 3,2 km.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
          <Image
            src="/images/luxury-riad-marrakech.webp"
            alt="Accueil attentionné et personnalisé à la réception du Pure House Marrakech"
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
