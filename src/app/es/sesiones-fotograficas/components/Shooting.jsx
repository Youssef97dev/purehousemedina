import Image from "next/image";
import shooting from "@/data/shooting.json";

const GalleryVideo = [
  {
    video: "/videos/stay-at-pure-house-marrakech-reviews.mp4",
  },
  {
    video: "/videos/pure-house-marrakech-clean-design.mp4",
  },
];

const Shooting = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Fotografía de Estilo de Vida en Pure House Marrakech",
    description:
      "Descubre Pure House Marrakech a través de fotografías de estilo de vida que muestran la elegancia, el ambiente exclusivo y los espacios de lujo de nuestro riad boutique solo para adultos en la Medina de Marrakech.",
    image: shooting.map((img) => img.src),
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
        {shooting.map((image, index) => (
          <figure key={image.src}>
            <Image
              src={image.src}
              alt={image.alt.es}
              title={image.title.es}
              width={900}
              height={1200}
              priority={index < 4}
              quality={75}
              loading={index < 4 ? "eager" : "lazy"}
              sizes="
                                (max-width: 768px) 100vw,
                                (max-width: 1024px) 33vw,
                                25vw
                              "
              className="rounded-sm w-full h-full aspect-[3/4] object-cover"
            />

            <figcaption className="sr-only">{image.title.es}</figcaption>
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
