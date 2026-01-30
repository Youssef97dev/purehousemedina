import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/riad-marrakech/marrakech-riad-with-rooftop-terrace.webp",
    alt: "Modern boutique Riad styling at Pure House Marrakech",
    class: "object-bottom",
  },
  {
    image: "/riad-marrakech/luxury-accommodation-marrakech-center.webp",
    alt: "Authentic entrance of Pure House Marrakech, a luxury Riad in the Medina",
    class: "object-bottom",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-riad-medina.webp",
    alt: "pure house riad medina marrakech",
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
