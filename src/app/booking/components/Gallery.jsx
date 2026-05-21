import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/images/luxury-riad-marrakech-interior-patio.webp",
    alt: "Elegant interior courtyard and patio of Pure House Marrakech riad",
    class: "object-center",
  },
  {
    image: "/images/boutique-room-medina-marrakech-riad.webp",
    alt: "High-end luxury bedroom suite with traditional Moroccan design at Pure House",
    class: "object-center",
  },
  {
    image: "/images/pure-house-marrakech-yoga-pool-space.webp",
    alt: "Rooftop terrace with swimming pool and lounge area at Pure House Marrakech",
    class: "object-center",
  },
  {
    image: "/images/romantic-riad-for-couples-marrakech.webp",
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
