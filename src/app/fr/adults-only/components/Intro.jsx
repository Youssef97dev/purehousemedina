import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Text Left */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
            Le véritable luxe commence par la sérénité absolue.
          </h2>
          <div className="leading-relaxed space-y-6 text-riad_primary text-[14px] font-light">
            <p>
              Au Pure House Marrakech, nous sommes convaincus que le véritable
              luxe commence par une sérénité absolue. Conçu exclusivement pour
              les adultes {"(18+)"}, notre riad de charme offre un havre de paix
              sophistiqué, loin de {"l'effervescence et de l'énergie"} de la
              Médina.
            </p>
            <p>
              Nous avons façonné un espace où le temps suspend son vol. Que vous
              célébriez une lune de miel, un anniversaire, ou que vous
              recherchiez simplement une escapade paisible, notre environnement
              réservé aux adultes permet aux voyageurs exigeants de se
              déconnecter, de se ressourcer et de {"s'immerger"} sans
              interruption dans le romantisme du Maroc.
            </p>
          </div>
        </div>
        {/* Image Right */}
        <div className="w-full md:w-1/2 h-[500px]">
          <Image
            src="/images/peaceful-rooftop-terrace-pure-house-marrakech.webp"
            alt="Sun-drenched peaceful rooftop terrace offering a quiet escape at Pure House Marrakech"
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
