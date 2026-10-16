import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Habitaciones Estándar",
    subtitle: "Confort y elegancia con una sencillez refinada",
    image: "/images/best-places-to-stay-in-marrakech.webp",
    alt: "Habitación Estándar con decoración artesanal marroquí y cama queen-size en Pure House Marrakech",
    link: "/es/estandar",
    ariaLabel: "Descubrir nuestras Habitaciones Estándar en Pure House Marrakech",
  },
  {
    title: "Habitaciones Deluxe",
    subtitle: "Disfruta de un confort refinado y un lujo contemporáneo",
    image: "/images/hotels-in-marrakech.webp",
    alt: "Habitación Deluxe con baño en tadelakt tradicional y cama king-size en la Medina de Marrakech",
    link: "/es/deluxe",
    ariaLabel: "Descubrir nuestras Habitaciones Deluxe en Pure House Marrakech",
  },
  {
    title: "Suites",
    subtitle: "Donde el lujo se encuentra con experiencias inolvidables",
    image: "/images/pure-house-marrakech-riad-medina.webp",
    alt: "Suite espaciosa de lujo con arquitectura marroquí auténtica y sala de estar privada",
    link: "/es/suites",
    ariaLabel: "Descubrir nuestras Suites de Lujo en Pure House Marrakech",
  },
];

const Categories = () => {
  return (
    <section className="px-6 py-12" aria-labelledby="accommodations-es-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="accommodations-es-heading" className="sr-only">
          Habitaciones y Suites en Pure House Marrakech
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
                    <span aria-hidden="true">{"Ver más ➔"}</span>
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
