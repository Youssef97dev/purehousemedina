import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/riad-marrakech/pure-house-marrakech-terrace-sunset.webp",
    alt: "Interior patio of Pure House Marrakech, a luxury adults-only riad offering a romantic and peaceful sanctuary in the Medina",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-candlelight-dinner.webp",
    alt: "Sophisticated guest room with warm lighting and elegant seating, perfect for a romantic adults-only escape in Marrakech",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/wellness-products-pure-house-bathroom.webp",
    alt: "Clean, modern ensuite bathroom with traditional Moroccan Tadelakt finishes in a luxury boutique riad",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-rooftop-dining-area.webp",
    alt: "Serene rooftop terrace at Pure House Marrakech where guests enjoy quiet mornings and the charm of the Medina",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/luxury-travel-marrakech-morocco.webp",
    alt: "Luxury boutique hotel room featuring a plush bed and sitting area, designed for discerning travelers seeking peace",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/aerial-view-pure-house-marrakech-medina.webp",
    alt: "Aerial view of Pure House Marrakech, showing the traditional architecture of an exclusive adults-only riad in the Medina",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/riad-room-terrace-view-marrakech.webp",
    alt: "Romantic bedroom view from the courtyard at night, featuring warm ambient lighting for an intimate couples stay",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/spacious-family-suite-pure-house-marrakech.webp",
    alt: "Close-up of a luxurious bed with warm lighting, highlighting the romantic atmosphere of our child-free riad",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-staircase-design.webp",
    alt: "Refined lounge area at Pure House, offering a quiet space for relaxation and authentic Moroccan hospitality",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/luxury-suite-bedroom-pure-house-marrakech.webp",
    alt: "Mood lighting in a luxury suite, creating a sophisticated haven for adults visiting Marrakech",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/artistic-details-pure-house-riad-marrakech.webp",
    alt: "Elegant seating corner in the riad, ideal for quiet reading or intimate conversation in a peaceful environment",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/yoga-spot-pure-house-marrakech-terrace.webp",
    alt: "Intricate architectural details and Moroccan decoration at the entrance of our exclusive boutique riad",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-room-amenities.webp",
    alt: "Warmly lit boutique hotel room at Pure House Marrakech, focusing on comfort and romantic aesthetics",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/cozy-reading-corner-pure-house-marrakech.webp",
    alt: "Premium linens and comfortable bedding in a quiet, adults-only suite in the heart of the Medina",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/chic-moroccan-lounge-pure-house-marrakech.webp",
    alt: "Spacious luxury suite at Pure House Marrakech, combining traditional craftsmanship with modern romantic comfort",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/relaxing-pool-area-pure-house-riad.webp",
    alt: "Refreshing pool in the central courtyard, a quiet oasis for adults to relax away from the bustling city",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/riad-marrakech-with-swimming-pool.webp",
    alt: "Guest relaxing in the courtyard pool, enjoying the tranquility of an exclusive child-free riad experience",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-bathroom-design.webp",
    alt: "Luxury walk-in shower with high-end amenities and traditional Moroccan design elements",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/romantic-suite-decor-pure-house-riad.webp",
    alt: "Stylish guest room featuring a comfortable bed and a work desk for the modern discerning traveler",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-night-ambiance.webp",
    alt: "Romantic dining area with warm lighting, perfect for intimate candlelit dinners in Marrakech",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/riad-in-marrakech.webp",
    alt: "Sun-drenched rooftop terrace offering privacy and panoramic views of the historic Medina",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-yoga-pool-space.webp",
    alt: "Rooftop pool at night with a stunning view of Jemaa el-Fnaa, the ultimate romantic spot in Marrakech",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/best-places-to-stay-in-marrakech.webp",
    alt: "High-end bedroom decor in a quiet riad suite, ensuring a restful and romantic night for couples",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/boutique-marrakech.webp",
    alt: "Beautifully designed interior of a Pure House Marrakech room, highlighting peace and exclusivity",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/boutique-hotel-marrakech.webp",
    alt: "Serene swimming pool area at Pure House, a sophisticated haven for adults only",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/pure-house-marrakech-hospitality-service.webp",
    alt: "Elegant dining setting at Pure House Marrakech, offering authentic Moroccan cuisine in a quiet atmosphere",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/marrakech-riad-with-rooftop-terrace.webp",
    alt: "Top-down view of the riad structure, showcasing the hidden luxury of Pure House in the Marrakech Medina",
    class: "object-center",
  },
  {
    image: "/riad-marrakech/family-friendly-riad-marrakech.webp",
    alt: "Beautiful sky view above the Pure House Marrakech terrace, symbolizing the freedom and peace of your stay",
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
