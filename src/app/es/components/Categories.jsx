import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Habitaciones Estándar",
    subtitle: "Confort y elegancia con una sencillez refinada",
    image: "/images/best-places-to-stay-in-marrakech.webp",
    alt: "Riad de lujo escondido dentro de las murallas de la Medina de Marrakech",
    link: "/es/estandar",
  },
  {
    title: "Habitaciones Deluxe",
    subtitle: "Disfruta de un confort refinado y un lujo contemporáneo",
    image: "/images/hotels-in-marrakech.webp",
    alt: "Decoración artesanal marroquí hecha a mano en el interior del riad",
    link: "/es/deluxe",
  },
  {
    title: "Suites",
    subtitle: "Donde el lujo se encuentra con experiencias inolvidables",
    image: "/images/pure-house-marrakech-riad-medina.webp",
    alt: "Descubre una auténtica experiencia de alojamiento en un riad marroquí en Marrakech",
    link: "/es/suites",
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
                  className="text-[10px] leading-[13px] text-riad_primary tracking-[0.3em] underline italic uppercase"
                >
                  {"Ver más ➔"}
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
