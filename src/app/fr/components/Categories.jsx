import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Chambres Standard",
    subtitle: "Le confort et l’élégance en toute simplicité",
    image: "/images/best-places-to-stay-in-marrakech.webp",
    alt: "Chambre Standard au décor marocain artisanal avec literie queen-size au Pure House Marrakech",
    link: "/fr/standard",
    ariaLabel: "Découvrir nos Chambres Standard au Pure House Marrakech",
  },
  {
    title: "Chambres Deluxe",
    subtitle: "Savourez le confort raffiné et le luxe moderne",
    image: "/images/hotels-in-marrakech.webp",
    alt: "Chambre Deluxe avec salle de bain en tadelakt et grand lit king-size dans la Médina",
    link: "/fr/deluxe",
    ariaLabel: "Découvrir nos Chambres Deluxe au Pure House Marrakech",
  },
  {
    title: "Suites",
    subtitle: "Là où le luxe rencontre des expériences inoubliables",
    image: "/images/pure-house-marrakech-riad-medina.webp",
    alt: "Suite spacieuse alliant architecture marocaine authentique et salon privé",
    link: "/fr/suites",
    ariaLabel: "Découvrir nos Suites au Pure House Marrakech",
  },
];

const Categories = () => {
  return (
    <section className="px-6 py-12" aria-labelledby="accommodations-fr-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="accommodations-fr-heading" className="sr-only">
          Chambres et Suites au Pure House Marrakech
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <div className="relative w-full h-72 md:h-96">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-4 text-left">
                <p className="text-[10px] leading-[15.2px] text-riad_secondary uppercase">
                  {category.subtitle}
                </p>
                <h3 className="mt-3 text-[22px] leading-[30.1px] text-riad_primary font-light">
                  {category.title}
                </h3>
                <div className="mt-4 w-full h-[1px] bg-riad_secondary mx-auto"></div>
                <div className="mt-2 text-right">
                  <Link
                    href={category.link}
                    className="text-[10px] leading-[13px] text-riad_primary tracking-[0.3em] underline italic uppercase hover:text-riad_secondary transition-colors"
                    aria-label={category.ariaLabel}
                  >
                    <span className="sr-only">{category.ariaLabel} - </span>
                    <span aria-hidden="true">{"Voir plus ➔"}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
