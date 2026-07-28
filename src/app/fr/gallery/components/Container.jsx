import Gallery from "./Gallery";
import gallery from "@/data/gallery.json";
import { IMAGES_PER_PAGE } from "@/lib/constants";

const Container = () => {
  const page = 1;

  const images = gallery.slice(0, IMAGES_PER_PAGE);

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
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Gallery
        images={images}
        currentPage={page}
        totalImages={gallery.length}
      />
    </div>
  );
};

export default Container;
