import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: {
    default: "Pure House Riad Medina",
    template: "%s | Pure House Riad Medina",
  },
  description:
    "Experience the best of Marrakesh with luxury stays at top Riads and hotels like Mamounia, Mandarin Oriental, Fairmont, Savoy Le Grand Hotel Marrakech, Hivernage Hotel & Spa",
  keywords: [
    "Pure House Marrakech",
    "Riad Guest House",
    "Riad",
    "Guest House",
    "Ryad",
    "Hotel",
    "Luxury Riad",
    "Moroccan Hospitality",
    "Accommodation",
    "Marrakech",
    "Atlas Mountains",
    "Morocco",
    "Exquisite Cuisine",
    "activities in marrakech",
    "best time to visit marrakech",
    "weather marrakech morocco",
    "flights to marrakech",
    "marrakech hotel booking",
    "marrakech hotel palmeraie",
  ],
  openGraph: {
    title: "Pure House Riad Medina",
    description:
      "Experience the best of Marrakesh with luxury stays at top Riads and hotels like Mamounia, Mandarin Oriental, Fairmont, Savoy Le Grand Hotel Marrakech, Hivernage Hotel & Spa",
    url: "https://purehousemarrakech.com/",
    siteName: "Pure House Riad Medina",
    images: [
      {
        url: "https://purehousemarrakech.com/riad/riad-slow-living.jpg",
        width: 1200,
        height: 630,
        alt: "Pure House Riad Medina - Slow living Riad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://purehousemarrakech.com/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-THT4VYHKCK" />
    </html>
  );
}
