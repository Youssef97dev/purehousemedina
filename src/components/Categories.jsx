import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Standard Rooms",
    subtitle: "Comfort and elegance made simple",
    image: "/images/best-places-to-stay-in-marrakech.webp",
    alt: "Standard Room featuring handcrafted Moroccan decor and plush queen bedding at Pure House Marrakech",
    link: "/standard",
    ariaLabel: "Discover our Standard Rooms at Pure House Marrakech",
  },
  {
    title: "Deluxe Rooms",
    subtitle: "Indulge in refined comfort and modern luxury",
    image: "/images/hotels-in-marrakech.webp",
    alt: "Deluxe Room showcasing traditional tadelakt bathroom and spacious king bed in Marrakech Medina",
    link: "/deluxe",
    ariaLabel: "Discover our Deluxe Rooms at Pure House Marrakech",
  },
  {
    title: "Suites",
    subtitle: "Where luxury meets unforgettable experiences",
    image: "/images/pure-house-marrakech-riad-medina.webp",
    alt: "Spacious luxury Suite with authentic Moroccan architecture and private sitting area",
    link: "/suites",
    ariaLabel: "Discover our Luxury Suites at Pure House Marrakech",
  },
];

const Categories = () => {
  return (
    <section className="px-6 py-12" aria-labelledby="accommodations-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="accommodations-heading" className="sr-only">
          Accommodations & Suites at Pure House Marrakech
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
                    <span aria-hidden="true">{"VIEW MORE ➔"}</span>
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
