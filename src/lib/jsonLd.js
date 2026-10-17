/**
 * JSON-LD Structured Data Generator for Pure House Marrakech
 * Creates a single unified @graph containing Organization, WebSite, Hotel, BreadcrumbList, and FAQPage.
 * Validated against Schema.org and Google Rich Results guidelines.
 */

import { homeContent } from "@/data/homeContent";
import { newYearBlogData } from "@/data/newYearBlogData";

export function safeJsonLdReplacer(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function getHomeJsonLd(locale = "en") {
  const content = homeContent[locale] || homeContent.en;
  const baseUrl = "https://purehousemarrakech.com";
  const localizedUrl =
    locale === "en" ? `${baseUrl}/` : `${baseUrl}/${locale}/`;

  // FAQPage mainEntity derived directly from visible FAQ items
  const faqEntities = content.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  const graph = [
    // 1. Organization
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Pure House Marrakech",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        "@id": `${baseUrl}/#logo`,
        url: `${baseUrl}/riad/riad-logo-gray.png`,
        caption: "Pure House Marrakech",
      },
      sameAs: [
        "https://www.instagram.com/pure_house_marrakech",
        // TODO: Supply verified Google Business / Google Maps profile URL when confirmed:
        "https://maps.app.goo.gl/KKjtKS4jqiuKYuzm9",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+212682225235",
          contactType: "reservations",
          availableLanguage: ["en", "fr", "es"],
        },
      ],
    },

    // 2. WebSite
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Pure House Marrakech",
      inLanguage: locale,
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
    },

    // 3. Hotel (with additionalType LodgingBusiness)
    {
      "@type": "Hotel",
      additionalType: "https://schema.org/LodgingBusiness",
      "@id": `${baseUrl}/#hotel`,
      name: "Pure House Marrakech",
      description: content.hotelDescription,
      url: localizedUrl,
      image: [
        `${baseUrl}/images/luxury-riad-marrakech.webp`,
        `${baseUrl}/images/traditional-moroccan-riad-experience.webp`,
        `${baseUrl}/images/top-riad-marrakech.webp`,
        `${baseUrl}/images/riad-marrakech-medina.webp`,
        `${baseUrl}/images/marrakech-riad-with-hammam-and-spa.webp`,
      ],
      telephone: "+212682225235",
      email: "reservations@purehousemarrakech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "16 Derb Abou El Fdail",
        addressLocality: "Marrakech",
        postalCode: "40000",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.625729913736237,
        longitude: -7.986598584656735,
      },
      hasMap: "https://maps.app.goo.gl/KKjtKS4jqiuKYuzm9",
      availableLanguage: ["English", "French", "Spanish"],
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Adults only",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Swimming pool",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Rooftop terrace",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Air conditioning",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Hammam and spa",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Free Wi-Fi",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Bar",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Vegetarian breakfast",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Multilingual staff",
          value: true,
        },
      ],
      priceRange: "From €230 per night",
      checkinTime: "15:00",
      checkoutTime: "12:00",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "173",
      },
      parentOrganization: {
        "@id": `${baseUrl}/#organization`,
      },
    },

    // 4. BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": `${localizedUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: content.breadcrumbHome,
          item: localizedUrl,
        },
      ],
    },

    // 5. FAQPage
    {
      "@type": "FAQPage",
      "@id": `${localizedUrl}#faq`,
      mainEntity: faqEntities,
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function getNewYearBlogJsonLd(locale = "en") {
  const data = newYearBlogData[locale] || newYearBlogData.en;
  const baseUrl = "https://purehousemarrakech.com";
  const postUrl = data.canonicalUrl;

  const faqEntities = data.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  const graph = [
    // 1. Organization
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Pure House Marrakech",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        "@id": `${baseUrl}/#logo`,
        url: `${baseUrl}/riad/riad-logo-gray.png`,
        caption: "Pure House Marrakech",
      },
      sameAs: [
        "https://www.instagram.com/pure_house_marrakech",
        "https://maps.app.goo.gl/KKjtKS4jqiuKYuzm9",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+212682225235",
          contactType: "reservations",
          availableLanguage: ["en", "fr", "es"],
        },
      ],
    },

    // 2. WebSite
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Pure House Marrakech",
      inLanguage: locale,
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
    },

    // 3. Hotel (reused stable entity)
    {
      "@type": "Hotel",
      additionalType: "https://schema.org/LodgingBusiness",
      "@id": `${baseUrl}/#hotel`,
      name: "Pure House Marrakech",
      description:
        "Pure House Marrakech is an adults-only luxury boutique riad nestled in the Marrakech Medina near Jemaa el-Fna, featuring an intimate courtyard pool, traditional hammam, and rooftop terrace.",
      url: baseUrl,
      image: [
        `${baseUrl}/images/riad-pure-house-marrakech-deluxe-room.webp`,
        `${baseUrl}/images/riad-pure-house-marrakech-retreat-corridor-pool.webp`,
        `${baseUrl}/images/riad-pure-house-marrakech-retreat-room.webp`,
        `${baseUrl}/images/riad-pure-house-marrakech-suite-room.webp`,
        `${baseUrl}/images/riad-pure-house-marrakech-terrace-pool-view.webp`,
      ],
      telephone: "+212682225235",
      email: "reservations@purehousemarrakech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "16 Derb Abou El Fdail",
        addressLocality: "Marrakech",
        postalCode: "40000",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.625729913736237,
        longitude: -7.986598584656735,
      },
      hasMap: "https://maps.app.goo.gl/KKjtKS4jqiuKYuzm9",
      availableLanguage: ["English", "French", "Spanish"],
      priceRange: "From €230 per night",
      checkinTime: "15:00",
      checkoutTime: "12:00",
      parentOrganization: {
        "@id": `${baseUrl}/#organization`,
      },
    },

    // 4. BlogPosting
    {
      "@type": "BlogPosting",
      "@id": `${postUrl}#article`,
      isPartOf: {
        "@type": "WebPage",
        "@id": postUrl,
      },
      headline: data.h1,
      description: data.metaDescription,
      image: `${baseUrl}${data.heroImage}`,
      inLanguage: locale,
      mainEntityOfPage: postUrl,
      datePublished: data.publishDate,
      dateModified: data.modifiedDate,
      author: {
        "@id": `${baseUrl}/#organization`,
      },
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
    },

    // 5. BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": `${postUrl}#breadcrumb`,
      itemListElement: data.breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    },

    // 6. FAQPage matching visible FAQ exactly
    {
      "@type": "FAQPage",
      "@id": `${postUrl}#faq`,
      mainEntity: faqEntities,
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
