import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/riad/riad-1.jpg",
    class: "object-bottom",
  },
  {
    image: "/riad/riad-12.jpg",
    class: "object-bottom",
  },
  {
    image: "/riad/suite-room-riad.jpg",
    class: "object-center",
  },
  {
    image: "/riad/riad-hero-5.jpg",
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
                alt="Gallery Pure House Marrakech, Medina, Marrakech Vibes"
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
