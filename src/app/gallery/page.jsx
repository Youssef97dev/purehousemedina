import Container from "./components/Container";

export const metadata = {
  title: "Photo Gallery | Luxury Riad in Marrakech Medina | Pure House Medina",
  description:
    "Explore the visual beauty of Pure House Marrakech. View photos of our adults-only luxury suites, serene courtyard pool, and stunning rooftop terrace in the Medina.",
  alternates: {
    canonical: "https://purehousemarrakech.com/gallery/",
    languages: {
      "en-US": "https://purehousemarrakech.com/gallery/",
      "fr-FR": "https://purehousemarrakech.com/fr/gallery/",
      "x-default": "https://purehousemarrakech.com/gallery/",
    },
  },
  openGraph: {
    title:
      "Photo Gallery | Luxury Riad in Marrakech Medina | Pure House Medina",
    description:
      "Explore the visual beauty of Pure House Marrakech. View photos of our adults-only luxury suites, serene courtyard pool, and stunning rooftop terrace in the Medina.",
    url: "https://purehousemarrakech.com/gallery/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/luxury-riad-marrakech.webp",
        width: 1200,
        height: 630,
        alt: "Photo gallery of Pure House luxury riad in Marrakech Medina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Luxury Riad in Marrakech Medina | Pure House",
    description:
      "Explore the visual beauty of Pure House Marrakech. View photos of our adults-only luxury suites, serene courtyard pool, and stunning rooftop terrace.",
    images: [
      "https://purehousemarrakech.com/images/luxury-riad-marrakech.webp",
    ],
  },
};

const page = () => {
  return <Container />;
};

export default page;
