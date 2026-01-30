import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/riad-marrakech/pure-house-marrakech-luxury-boutique-hotel.webp",
    alt: "Relaxation area by the pool at Pure House Marrakech",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-riad-patio-swimming-pool.webp",
    alt: "A quiet oasis with a swimming pool in the busy Marrakech Medina",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/best-riad-design-pure-house-marrakech.webp",
    alt: "Traditionally designed swimming pool in a Moroccan Riad",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-architecture-interior.webp",
    alt: "Cooling off in the Riad pool during a summer trip to Marrakech",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-entrance-door.webp",
    alt: "Indoor courtyard oasis with water features and greenery",
    class: "object-center",
  },
];

const GalleryVideo = [
  {
    video: "/riad/stay-at-pure-house-marrakech-reviews.mp4",
  },
  {
    video: "/riad/pure-house-marrakech-clean-design.mp4",
  },
];

const Shooting = () => {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                className={`object-cover h-full ${category.class}`}
              />
            </div>
          </div>
        ))}
        {GalleryVideo.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <video
                src={category.video} // ton lien ou fichier vidéo
                autoPlay
                muted
                loop
                playsInline
                className={`object-cover w-full h-full `}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shooting;
