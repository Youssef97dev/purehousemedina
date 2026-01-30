import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/riad-marrakech/pure-house-marrakech-terrace-sunset.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-candlelight-dinner.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/wellness-products-pure-house-bathroom.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-rooftop-dining-area.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/luxury-travel-marrakech-morocco.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/spacious-family-suite-pure-house-marrakech.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-staircase-design.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/luxury-suite-bedroom-pure-house-marrakech.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/artistic-details-pure-house-riad-marrakech.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/yoga-spot-pure-house-marrakech-terrace.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-room-amenities.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/cozy-reading-corner-pure-house-marrakech.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/chic-moroccan-lounge-pure-house-marrakech.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/relaxing-pool-area-pure-house-riad.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/riad-marrakech-with-swimming-pool.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-bathroom-design.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/romantic-suite-decor-pure-house-riad.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-night-ambiance.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/riad-in-marrakech.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-yoga-pool-space.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/best-places-to-stay-in-marrakech.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/boutique-marrakech.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/boutique-hotel-marrakech.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-hospitality-service.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/marrakech-riad-with-rooftop-terrace.webp",
    alt: "",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/family-friendly-riad-marrakech.webp",
    alt: "",
    class: "object-center",
  },
];

const Gallery = () => {
  return (
    <section className="px-1 lg:px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 lg:gap-5">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <Image
                src={category.image}
                alt={category.alt}
                loading="lazy"
                fill
                className={`object-cover h-full ${category.class}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
