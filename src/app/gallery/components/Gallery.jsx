import Image from "next/image";

async function getImages() {
  const res = await fetch(
    "https://purehousemarrakech.com/api/gallery.php?type=gallery",
    {
      next: { revalidate: 86400 }, // 24h cache
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch gallery");
  }

  return res.json();
}

export default async function Gallery() {
  const data = await getImages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Pure House Marrakech Luxury Riad Gallery",
    description:
      "Explore the beautifully designed spaces of Pure House Marrakech. View our adults-only boutique rooms, peaceful courtyard pool, authentic hammam, and sunny rooftop terrace.",
    image: data.map((img) => img.src),
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
        {data.map((image, index) => (
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
