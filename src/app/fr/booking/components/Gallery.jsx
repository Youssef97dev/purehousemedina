import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/riad-marrakech/luxury-riad-marrakech-interior-patio.webp",
    alt: "Patio intérieur élégant et décor traditionnel du Riad Pure House Marrakech",
    class: "object-bottom",
  },
  {
    image: "/riad-marrakech/boutique-room-medina-marrakech-riad.webp",
    alt: "Suite de luxe haut de gamme avec design marocain traditionnel à Pure House",
    class: "object-bottom",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-yoga-pool-space.webp",
    alt: "Terrasse sur le toit avec piscine et espace détente au Riad Pure House Marrakech",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/romantic-riad-for-couples-marrakech.webp",
    alt: "Fresh flowers and a warm welcome at a Marrakech Riad",
    class: "object-center",
  },
];

const Gallery = () => {
  return (
    <section className="px-5 md:px-14 py-12 space-y-8 pt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full aspect-square ">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                className={`object-cover aspect-square h-full ${category.class}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
