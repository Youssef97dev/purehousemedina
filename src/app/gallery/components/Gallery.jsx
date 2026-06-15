import Image from "next/image";
import gallery from "@/data/gallery.json";

export default function Gallery() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Pure House Marrakech Luxury Riad Gallery",
    description:
      "Explore the beautifully designed spaces of Pure House Marrakech. View our adults-only boutique rooms, peaceful courtyard pool, authentic hammam, and sunny rooftop terrace.",
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
              alt={image.alt.en}
              title={image.title.en}
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

            <figcaption className="sr-only">{image.title.en}</figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
