import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Standard Rooms",
    subtitle: "Comfort and elegance made simple",
    image: "/images/best-places-to-stay-in-marrakech.webp", // replace with your image path
    alt: "A hidden gem luxury Riad located inside the Marrakech Medina walls",
    link: "/standard",
  },
  {
    title: "Deluxe Rooms",
    subtitle: "Indulge in refined comfort and modern luxury",
    image: "/images/hotels-in-marrakech.webp",
    alt: "Hand-crafted Moroccan artisan decor inside the Riad",
    link: "/deluxe",
  },
  {
    title: "Suites",
    subtitle: "Where luxury meets unforgettable experiences",
    image: "/images/pure-house-marrakech-riad-medina.webp",
    alt: "Experiencing an authentic Moroccan Riad stay in Marrakech",
    link: "/suites",
  },
];

const Categories = () => {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <p className="text-[10px] leading-[15.2px] text-riad_secondary uppercase">
                {category.subtitle}
              </p>
              <h3 className="mt-3 text-[22px] leading-[30.1px] text-riad_primary">
                {category.title}
              </h3>
              <div className="mt-4 w-full h-[1px] bg-riad_secondary mx-auto"></div>
              <div className="mt-2 text-right">
                <Link
                  href={category.link}
                  className="text-[10px] leading-[13px] text-riad_primary tracking-[0.3em] underline italic"
                >
                  {"VIEW MORE ➔"}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
