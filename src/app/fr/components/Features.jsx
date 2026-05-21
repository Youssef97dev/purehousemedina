import React from "react";
import Image from "next/image";

const categories = [
  {
    title: "Spa & Bien-être",
    subtitle:
      "Entrez dans notre hammam marocain, un bain de vapeur ancestral qui fait partie intégrante de la culture du pays depuis des siècles. Laissez la chaleur apaisante de la vapeur vous envelopper, purifier votre corps et revitaliser vos sens. Nos thérapeutes expérimentés vous offriront un gommage doux au savon noir traditionnel, suivi d’un rinçage rafraîchissant à l’eau pure.",
    image: "/images/marrakech-riad-with-hammam-and-spa.webp", // replace with your image path
    alt: "Lifestyle photography of a luxury stay in Marrakech",
  },
  {
    title: "Restauration",
    subtitle:
      "Au Pure House Marrakech, les hôtes peuvent savourer de délicieux plats marocains et méditerranéens préparés avec des ingrédients frais. Profitez d’un petit-déjeuner paisible dans le jardin ou d’un dîner relaxant sur la terrasse, où chaque repas est soigneusement conçu pour éveiller vos sens, créer des instants mémorables et offrir un véritable aperçu du charme culinaire de Marrakech.",
    image: "/images/luxury-stay-in-marrakech-medina.webp",
    alt: "Luxury Riad located walking distance from Jemaa El-Fna square",
  },
];

const Features = () => {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-72 md:h-96">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="mt-4 text-left">
              <h3 className="text-[22px] leading-[30.1px] text-riad_primary">
                {category.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[21px] text-riad_primary md:pr-32 pr-0 text-justify font-light">
                {category.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
