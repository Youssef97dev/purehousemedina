import Gallery from "./Gallery";
import gallery from "@/data/gallery.json";
import { IMAGES_PER_PAGE } from "@/lib/constants";

const Container = () => {
  const page = 1;

  const images = gallery.slice(0, IMAGES_PER_PAGE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Pure House Marrakech Luxury Riad Photo Gallery",
    description:
      "Explore the beautifully designed spaces of Pure House Marrakech. View photos of our adults-only boutique rooms, peaceful courtyard pool, authentic hammam, and sunny rooftop terrace in the Medina.",
    url: "https://purehousemarrakech.com/gallery/",
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
