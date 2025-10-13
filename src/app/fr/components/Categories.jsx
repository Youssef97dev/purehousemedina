import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Chambres Standard",
    subtitle: "Le confort et l’élégance en toute simplicité",
    image: "/riad/riad-19.jpg", // replace with your image path
    link: "/fr/standard",
  },
  {
    title: "Chambres Deluxe",
    subtitle: "Savourez le confort raffiné et le luxe moderne",
    image: "/riad/riad-hero-3.jpg",
    link: "/fr/deluxe",
  },
  {
    title: "Suites",
    subtitle: "Là où le luxe rencontre des expériences inoubliables",
    image: "/riad/suite-room-riad.jpg",
    link: "/fr/suites",
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
                alt={category.title}
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
                  className="text-[10px] leading-[13px] text-riad_primary tracking-[0.3em] underline italic uppercase"
                >
                  {"Voir plus ➔"}
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
