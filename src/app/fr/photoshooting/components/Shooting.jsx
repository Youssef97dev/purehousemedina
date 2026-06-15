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
    name: "Photographie Lifestyle et Ambiance - Pure House Marrakech",
    description:
      "Découvrez l'élégance et l'atmosphère exclusive du Pure House Marrakech à travers une série de photographies lifestyle. Cette collection met en scène des personnes profitant des espaces luxueux de notre riad réservé aux adultes.",
    // Si votre 'fetch' renvoie directement le tableau (comme vu précédemment) :
    image: shooting.map((img) => img.src),
    // Ou si votre donnée est encore imbriquée : data.shooting.map((img) => img.src)
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
              alt={image.alt.fr}
              title={image.title.fr}
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

            <figcaption className="sr-only">{image.title.fr}</figcaption>
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
