import Gallery from "./Gallery";
import gallery from "@/data/gallery.json";
import { IMAGES_PER_PAGE } from "@/lib/constants";

const Container = () => {
  const page = 1;

  const images = gallery.slice(0, IMAGES_PER_PAGE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Galería de Fotos de Pure House Marrakech | Riad de Lujo",
    description:
      "Explora la galería de fotos de Pure House Marrakech, un riad boutique de lujo solo para adultos en la Medina. Descubre nuestras habitaciones, piscina, hammam marroquí y terraza panorámica con vistas a Marrakech.",
    url: "https://purehousemarrakech.com/es/galería/",
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
