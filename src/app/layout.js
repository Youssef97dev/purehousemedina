import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: {
    default: "Pure House Riad Marrakech | Luxury Boutique Riad in the Medina",
    template: "%s | Pure House Riad Marrakech",
  },
  description:
    "Discover Pure House Marrakech, an authentic luxury Riad in the heart of the Medina. Enjoy our boutique suites, courtyard swimming pool, and rooftop terrace. Book your peaceful oasis in Marrakesh today.",
  keywords: [
    "Riad Marrakech",
    "Luxury Riad Marrakech",
    "Boutique Hotel Marrakech Medina",
    "Pure House Marrakech",
    "Riad with swimming pool Marrakech",
    "Private Riad rental Morocco",
    "Best Riad in Marrakech Medina",
    "Marrakech Guest House luxury",
    "Authentic Moroccan Riad stay",
    "Exclusive use Riad Marrakech",
    "Slow living Riad",
  ],
  openGraph: {
    title: "Pure House Riad Marrakech | Luxury Boutique Riad in the Medina",
    description:
      "Escape to Pure House Marrakech. Experience authentic Moroccan luxury with our boutique suites and serene courtyard pool in the heart of the historic Medina.",
    url: "https://purehousemarrakech.com/",
    siteName: "Pure House Riad Medina",
    images: [
      {
        url: "https://purehousemarrakech.com/riad-marrakech/riad-slow-living.webp",
        width: 1200,
        height: 630,
        alt: "Pure House Marrakech - Luxury Courtyard and Pool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://purehousemarrakech.com/",
    languages: {
      "en-US": "/",
      "fr-FR": "/fr",
    },
  },
  metadataBase: new URL("https://purehousemarrakech.com/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "@id": "https://purehousemarrakech.com/#hotel",
              name: "Pure House Riad Marrakech",
              image:
                "https://purehousemarrakech.com/riad-marrakech/riad-slow-living.webp",
              description:
                "A luxury boutique Riad in the heart of the Marrakech Medina featuring a courtyard pool and rooftop terrace.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jamaa El Fna",
                addressLocality: "Marrakech",
                postalCode: "40000",
                addressRegion: "Marrakech-Safi",
                addressCountry: "MA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 31.625688803918774,
                longitude: -7.986056778459857,
              },
              starRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
              url: "https://purehousemarrakech.com/",
              touristType: [
                "Luxury travelers",
                "Couples",
                "Wedding travelers",
                "Adventure travelers",
                "International tourists",
              ],
              availableLanguage: ["English", "French", "Spanish"],
              telephone: "+212682225235",
              isAccessibleForFree: false,
              sameAs: ["https://www.instagram.com/pure_house_marrakech"],
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Swimming Pool",
                  value: "Yes",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Free WiFi",
                  value: "Yes",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Rooftop Terrace",
                  value: "Yes",
                },
              ],
              nearbyAttraction: [
                {
                  "@type": "TouristAttraction",
                  name: "Agafay Desert",
                },
                {
                  "@type": "TouristAttraction",
                  name: "Lake Takerkoust",
                },
                {
                  "@type": "TouristAttraction",
                  name: "Marrakech",
                },
              ],
              acceptsReservations: true,
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              hasMap: "https://maps.app.goo.gl/8tuwf921xh2fhjGe8",
            }),
          }}
        />
      </Head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-THT4VYHKCK" />
    </html>
  );
}
