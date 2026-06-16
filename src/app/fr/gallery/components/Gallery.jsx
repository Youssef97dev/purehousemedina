import Image from "next/image";
import gallery from "@/data/gallery.json";

export default function Gallery() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Galerie Photos du Riad de Luxe Pure House Marrakech",
    description:
      "Explorez les espaces magnifiquement conçus du Pure House Marrakech. Découvrez les photos de nos chambres de charme pour adultes, de notre piscine paisible, du hammam authentique et de la terrasse ensoleillée.",
    url: "https://purehousemarrakech.com/fr/gallery/",
    image: gallery.map((img) => img.src),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section
        id="gallery"
        className="mx-auto px-0 lg:px-4 py-[0.5px] lg:py-4 pt-[81px] lg:pt-28 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[0.8px] lg:gap-4"
      >
        {gallery.map((image, index) => (
          <figure key={image.src}>
            <Image
              src={image.src}
              alt={image.alt.fr}
              title={image.title.fr}
              width={900}
              height={1200}
              priority={index < 8}
              quality={75}
              loading={index < 8 ? "eager" : "lazy"}
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1024px) 33vw,
                25vw
              "
              className="rounded-sm w-full h-full aspect-[3/4] object-cover"
            />

            <figcaption className="sr-only">{image.title.fr}</figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
