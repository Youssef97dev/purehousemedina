import React from "react";
import NewYearBlogPost from "@/components/blog/NewYearBlogPost";
import { newYearBlogData } from "@/data/newYearBlogData";
import { getNewYearBlogJsonLd, safeJsonLdReplacer } from "@/lib/jsonLd";

const locale = "en";
const data = newYearBlogData[locale];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: data.canonicalUrl,
    languages: data.alternateUrls,
  },
  openGraph: {
    title: `${data.h1} | Pure House Marrakech`,
    description: data.metaDescription,
    url: data.canonicalUrl,
    siteName: "Pure House Marrakech",
    locale: "en_US",
    alternateLocale: ["fr_FR", "es_ES"],
    type: "article",
    images: [
      {
        url: `https://purehousemarrakech.com${data.heroImage}`,
        width: 1200,
        height: 630,
        alt: data.heroImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${data.h1} | Pure House Marrakech`,
    description: data.metaDescription,
    images: [`https://purehousemarrakech.com${data.heroImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  const jsonLd = getNewYearBlogJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLdReplacer(jsonLd),
        }}
      />
      <NewYearBlogPost data={data} locale={locale} />
    </>
  );
}
