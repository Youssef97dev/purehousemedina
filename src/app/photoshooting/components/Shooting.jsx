import Image from "next/image";

async function getImageShooting() {
  const res = await fetch(
    "https://purehousemarrakech.com/api/gallery.php?type=shooting",
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
    const errorText = await res.text();
    console.error("❌ SERVER REJECTED THE REQUEST");
    console.error("Status:", res.status, res.statusText);
    console.error("Response Body:", errorText.substring(0, 500)); // Print first 500 chars of the block page
    throw new Error(`Failed to fetch images: ${res.status}`);
  }

  return res.json();
}

const GalleryVideo = [
  {
    video: "/videos/stay-at-pure-house-marrakech-reviews.mp4",
  },
  {
    video: "/videos/pure-house-marrakech-clean-design.mp4",
  },
];

const Shooting = async () => {
  const data = await getImageShooting();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Lifestyle Photography: The Pure House Experience",
    description:
      "Experience the exclusive atmosphere and elegance of Pure House Marrakech through a series of lifestyle photographs. This collection features people enjoying the luxurious spaces of our adults-only riad.",
    image: data.map((img) => img.src),
  };

  return (
    <section className="px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
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
        {GalleryVideo.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <video
                src={category.video} // ton lien ou fichier vidéo
                autoPlay
                muted
                loop
                playsInline
                className={`object-cover w-full h-full `}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shooting;
