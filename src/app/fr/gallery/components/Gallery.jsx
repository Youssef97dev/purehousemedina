import React from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/imageData";

const Gallery = () => {
  return (
    <section className="px-1 lg:px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 lg:gap-5">
        {GalleryImage.map((category, index) => (
          <figure key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <Image
                src={category.image}
                alt={category.alt_fr}
                title={category.title_fr}
                fill
                priority={index < 8}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover h-full ${category.class}`}
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
