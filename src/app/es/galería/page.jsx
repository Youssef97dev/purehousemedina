import Container from "./components/Container";

export const metadata = {
  title: "Galería | Riad de Lujo en Marrakech | Pure House",
  description:
    "Explora la galería de Pure House Marrakech, un riad boutique de lujo solo para adultos en la Medina. Descubre nuestras habitaciones, patios, piscina, hammam y terraza con vistas a Marrakech.",
  keywords: [
    "galería Pure House Marrakech",
    "fotos riad Marrakech",
    "riad de lujo Marrakech",
    "hotel boutique Marrakech",
    "riad solo para adultos Marrakech",
    "fotos Medina Marrakech",
    "riad con piscina Marrakech",
    "hammam Marrakech",
    "Pure House Marrakech",
  ],
  alternates: {
    canonical: "https://purehousemarrakech.com/es/galeria/",
    languages: {
      en: "https://purehousemarrakech.com/gallery/",
      fr: "https://purehousemarrakech.com/fr/gallery/",
      es: "https://purehousemarrakech.com/es/galeria/",
    },
  },
  openGraph: {
    title: "Galería | Pure House Marrakech",
    description:
      "Descubre en imágenes Pure House Marrakech, un riad de lujo solo para adultos en la Medina, con habitaciones elegantes, piscina, hammam y terraza panorámica.",
    url: "https://purehousemarrakech.com/es/galeria/",
    siteName: "Pure House Marrakech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 800,
        alt: "Pure House Marrakech, riad de lujo solo para adultos en la Medina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galería | Pure House Marrakech",
    description:
      "Explora las imágenes de Pure House Marrakech, un riad boutique de lujo solo para adultos en la Medina de Marrakech.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const page = () => {
  return <Container />;
};

export default page;
