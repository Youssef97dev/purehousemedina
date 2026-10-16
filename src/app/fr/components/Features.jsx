import React from "react";
import Image from "next/image";

const categories = [
  {
    title: "Spa & Hammam Traditionnel",
    subtitle:
      "Entrez dans notre hammam marocain privé, un sanctuaire de vapeur ancestral au cœur de la tradition marocaine. Laissez la chaleur bienfaisante purifier votre corps et apaiser votre esprit après l'effervescence des souks. Nos thérapeutes qualifiées vous proposent un gommage délicat au savon noir naturel suivi de soins relaxants à l'huile d'argan pure de la région.",
    image: "/images/marrakech-riad-with-hammam-and-spa.webp",
    alt: "Hammam marocain traditionnel en marbre et espace bien-être au Pure House Marrakech",
  },
  {
    title: "Gastronomie & Douceur de Vivre",
    subtitle:
      "Au Pure House Marrakech, chaque repas célèbre les saveurs authentiques du Maroc relevées d'influences méditerranéennes raffinées. Savourez un petit-déjeuner paisible servi dans le patio ou partagez un dîner romantique aux chandelles sur le toit-terrasse, préparé avec des ingrédients frais issus des marchés locaux.",
    image: "/images/luxury-stay-in-marrakech-medina.webp",
    alt: "Table de petit-déjeuner marocain et méditerranéen dressée dans le patio du riad",
  },
];

const Features = () => {
  return (
    <section className="px-6 py-12" aria-labelledby="wellness-dining-fr-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="wellness-dining-fr-heading" className="sr-only">
          Bien-être et Gastronomie au Pure House Marrakech
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <div className="relative w-full h-72 md:h-96">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-4 text-left">
                <h3 className="text-[22px] leading-[30.1px] text-riad_primary font-light">
                  {category.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[21px] text-riad_primary md:pr-12 pr-0 text-justify font-light">
                  {category.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
