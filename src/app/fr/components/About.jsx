import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full h-full px-6 py-12" aria-labelledby="about-fr-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Right column in DOM / Left column on desktop / Top on mobile */}
        <div className="w-full h-full flex flex-col justify-between gap-16 order-1 lg:order-2">
          {/* Text content with single H1 */}
          <div className="space-y-4">
            <h1
              id="about-fr-heading"
              className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6"
            >
              Riad de Luxe Réservé aux Adultes au Cœur de la Médina de Marrakech
            </h1>
            <div className="text-riad_primary text-[14px] leading-[21px] font-light space-y-3">
              <p>
                <strong>Pure House Marrakech</strong> est un{" "}
                <strong>riad de luxe exclusif réservé aux adultes</strong> situé à seulement{" "}
                <strong>quelques pas de la place Jemaa el-Fna</strong> au cœur de la Médina.
                Conçu pour les voyageurs en quête de sérénité, d&apos;intimité et d&apos;élégance,
                notre établissement offre une expérience hôtelière intimiste portée par un service
                personnalisé et une équipe multilingue attentionnée.
              </p>
              <p>
                Découvrez nos havres de paix entre{" "}
                <Link
                  href="/fr/standard"
                  className="underline hover:text-riad_secondary transition-colors"
                >
                  Chambres Standard
                </Link>
                ,{" "}
                <Link
                  href="/fr/deluxe"
                  className="underline hover:text-riad_secondary transition-colors"
                >
                  Chambres Deluxe
                </Link>
                {" "}et{" "}
                <Link
                  href="/fr/suites"
                  className="underline hover:text-riad_secondary transition-colors"
                >
                  Suites
                </Link>
                {" "}raffinées. Prélassez-vous au bord du bassin dans le patio ombragé ou admirez
                le coucher de soleil depuis notre toit-terrasse romantique.{" "}
                <Link
                  href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
                  target="_blank"
                  rel="noopener"
                  className="underline font-normal hover:text-riad_secondary transition-colors"
                >
                  Réservez votre séjour en direct
                </Link>{" "}
                pour bénéficier des meilleures conditions garanties.
              </p>
            </div>
          </div>

          {/* Small image */}
          <div className="relative w-full h-full overflow-hidden shadow-lg hidden lg:block min-h-[300px]">
            <Image
              src="/images/private-riad-marrakech-with-pool.webp"
              alt="Vue plongeante sur le bassin émeraude et la végétation du patio au Pure House Marrakech"
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
              alt="Cour intérieure ensoleillée et bassin au Pure House Marrakech"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <h2 className="lg:text-[31px] lg:leading-[34px] text-[28px] leading-[30px] font-light text-riad_secondary text-center px-4 lg:px-36">
            Là où les intérieurs raffinés rencontrent l’harmonie naturelle.
          </h2>
          <div className="relative w-full h-[250px] overflow-hidden shadow-lg block lg:hidden">
            <Image
              src="/images/family-friendly-riad-marrakech.webp"
              alt="Espace salon serein aux détails architecturaux traditionnels marocains"
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
