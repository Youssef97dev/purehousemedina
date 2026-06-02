const fs = require("fs");
const path = require("path");

// Add this helper function
function escapeXML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const DOMAIN = "https://purehousemarrakech.com";

// Group your images by the page they actually appear on
const sitePages = [
  // --- ENGLISH PAGES ---
  {
    pageUrl: "/gallery/",
    lastmod: "2026-06-02",
    priority: "1.0",
    images: [
      {
        image: "/images/romantic-dining-pure-house-riad-marrakech.webp",
        alt: "Romantic dining table setup offering authentic Moroccan cuisine at Pure House, a luxury adults-only riad in the Marrakech Medina",
        title: "Authentic Moroccan Dining at Pure House Marrakech",
      },
      {
        image: "/images/luxury-adults-only-suite-marrakech-riad.webp",
        alt: "Elegant luxury suite with traditional Moroccan decor and premium bedding at Pure House, the premier adults-only boutique hotel in Marrakech",
        title: "Luxury Adults-Only Suite in Marrakech Medina",
      },
      {
        image: "/images/rooftop-terrace-lounge-riad-marrakech.webp",
        alt: "Peaceful rooftop terrace lounge with comfortable seating at Pure House, offering a quiet, sun-drenched escape in the heart of Marrakech",
        title: "Relaxing Rooftop Terrace at Pure House Marrakech",
      },
      {
        image: "/images/courtyard-plunge-pool-pure-house-marrakech.webp",
        alt: "Guest relaxing by the tranquil courtyard plunge pool at Pure House, an exclusive adults-only luxury riad offering a peaceful oasis in Morocco",
        title: "Tranquil Courtyard Pool Oasis in Marrakech",
      },
      {
        image: "/images/moroccan-interior-design-boutique-hotel-marrakech.webp",
        alt: "Beautifully decorated seating area highlighting traditional Moroccan craftsmanship, wabi-sabi design, and luxury comfort in a Marrakech riad",
        title: "Traditional Moroccan Interior Design at Pure House",
      },
      {
        image: "/images/peaceful-lounge-adults-only-riad-marrakech.webp",
        alt: "Cozy and peaceful lounge chair surrounded by authentic Moroccan decor, perfect for quiet relaxation in our child-free boutique hotel",
        title: "Peaceful Lounge Area in Marrakech Boutique Hotel",
      },
      {
        image:
          "/images/traditional-carved-doors-riad-marrakech-pure-house.webp",
        alt: "Intricately carved traditional Moroccan wooden doors leading to a private luxury guest suite at Pure House Marrakech",
        title: "Traditional Carved Wooden Doors in Marrakech Riad",
      },
      {
        image: "/images/aerial-view-luxury-riad-marrakech-medina.webp",
        alt: "Aerial view of Pure House Marrakech, showcasing the stunning traditional architecture and hidden courtyard of our luxury adults-only riad",
        title: "Aerial View of Pure House Riad in Marrakech",
      },
      {
        image: "/images/tadelakt-bathroom-luxury-riad-marrakech.webp",
        alt: "Minimalist tadelakt bathroom with a copper soaking tub inside a luxury riad suite in Marrakech",
        title: "Traditional Tadelakt Bathroom in Luxury Marrakech Riad",
      },
      {
        image:
          "/images/traditional-moroccan-breakfast-luxury-riad-poolside.webp",
        alt: "A lavish traditional Moroccan breakfast spread with fresh pastries, mint tea, and fruit served poolside at Pure House Marrakech",
        title: "Moroccan Breakfast by the Pool at Pure House Riad",
      },
      {
        image: "/images/traditional-moroccan-riad-carved-door-entrance.webp",
        alt: "Massive, intricately carved traditional wooden door serving as the grand entrance to a luxury riad in the Marrakech Medina",
        title: "Traditional Carved Door Entrance to Marrakech Riad",
      },
      {
        image: "/images/wabi-sabi-interior-riad-marrakech-pure-house.webp",
        alt: "Minimalist wabi sabi interior design with organic textures and traditional Moroccan pottery inside Pure House riad",
        title: "Wabi Sabi Interior Riad in Marrakech",
      },
      {
        image: "/images/pure-house-luxury-riad-marrakech-courtyard-pool.webp",
        alt: "Lush green courtyard featuring a private pool at Pure House Marrakech, a luxury riad in the heart of the Medina",
        title: "Luxury Riad Marrakech with Private Pool - Pure House Medina",
      },
      {
        image: "/images/quiet-oasis-marrakech-center-reading-nook.webp",
        alt: "A comfortable reading nook with plush cushions and Moroccan textiles tucked away in a quiet corner of a boutique riad",
        title: "Peaceful Reading Corner in Boutique Hotel Marrakech",
      },
      {
        image: "/images/luxury-zellige-tilework-moroccan-riad-pure-house.webp",
        alt: "Close up of intricate and colorful traditional luxury zellige tilework adorning the walls of Pure House boutique hotel in Morocco",
        title: "Luxury Zellige Tilework in Moroccan Boutique Hotel",
      },
      {
        image: "/images/moroccan-luxury-experience-mint-tea-pouring.webp",
        alt: "A staff member pouring traditional Moroccan mint tea from a silver teapot at the luxury Pure House riad",
        title: "Traditional Mint Tea Service in Marrakech Riad",
      },
      {
        image: "/images/private-plunge-pool-medina-luxury-suite.webp",
        alt: "A luxury riad suite offering direct access to a private plunge pool on a private terrace in the Marrakech Medina",
        title: "Luxury Suite with Private Plunge Pool in Marrakech",
      },
      {
        image: "/images/luxury-private-riad-medina-exclusive-hire.webp",
        alt: "Spacious, elegantly furnished living room in a luxury private riad available for exclusive hire in the Marrakech Medina",
        title: "Exclusive Hire Luxury Private Riad in Medina",
      },
      {
        image: "/images/luxury-hammam-spa-riad-marrakech-morocco.webp",
        alt: "Private luxury hammam spa with dim lighting and traditional black soap treatments at a boutique hotel in Marrakech",
        title: "Luxury Hammam Spa in Marrakech Riad",
      },
      {
        image: "/images/luxury-accommodation-morocco-pure-house-details.webp",
        alt: "High-end finishing touches including brass fixtures, premium linens, and fresh roses in a luxury hotel suite in Morocco",
        title: "Premium Amenities at Luxury Accommodation in Morocco",
      },
      {
        image: "/images/adults-only-boutique-hotel-marrakech-lounge.webp",
        alt: "Elegant and peaceful lounge area with a cozy fireplace at Pure House, an adults only boutique hotel in Marrakech",
        title: "Peaceful Lounge at Adults Only Marrakech Hotel",
      },
      {
        image: "/images/biophilic-design-hotel-morocco-green-riad.webp",
        alt: "Lush tropical plants and banana trees filling the sunlit courtyard of Pure House, showcasing biophilic design in a Moroccan hotel",
        title: "Biophilic Design Riad in Morocco",
      },
      {
        image: "/images/rooftop-riad-marrakech-atlas-mountain-views.webp",
        alt: "Sunny rooftop terrace at Pure House riad in Marrakech offering panoramic views of the Medina and Atlas Mountains",
        title: "Rooftop Riad Marrakech with Medina Views",
      },
      {
        image: "/images/pure-house-marrakech-terrace-sunset.webp",
        alt: "Interior patio and plunge pool at Pure House Marrakech, a luxury adults-only riad offering a romantic sanctuary in the Medina",
        title: "Luxury Adults-Only Riad Patio - Pure House Marrakech",
      },
      {
        image: "/images/pure-house-marrakech-candlelight-dinner.webp",
        alt: "Sophisticated guest suite with warm lighting and elegant seating, perfect for a romantic adults-only escape in Marrakech",
        title: "Romantic Suite for Couples in Marrakech Boutique Hotel",
      },
      {
        image: "/images/wellness-products-pure-house-bathroom.webp",
        alt: "Clean, modern ensuite bathroom with traditional Moroccan tadelakt finishes and luxury wellness products in a boutique riad",
        title: "Luxury Tadelakt Bathroom in Moroccan Boutique Riad",
      },
      {
        image: "/images/pure-house-rooftop-dining-area.webp",
        alt: "Serene rooftop dining area at Pure House Marrakech where guests enjoy quiet mornings and the charm of the historic Medina",
        title: "Rooftop Dining Area at Luxury Riad Marrakech",
      },
      {
        image: "/images/luxury-travel-marrakech-morocco.webp",
        alt: "Luxury boutique hotel room featuring a plush bed and sitting area, designed for discerning travelers seeking a peaceful stay in Morocco",
        title: "Peaceful Luxury Hotel Room in Marrakech Medina",
      },
      {
        image: "/images/aerial-view-pure-house-marrakech-medina.webp",
        alt: "Aerial view of Pure House Marrakech, showcasing the traditional architecture of an exclusive adults-only riad hidden within the Medina",
        title: "Aerial View of Pure House Luxury Riad in Marrakech Medina",
      },
      {
        image: "/images/riad-room-terrace-view-marrakech.webp",
        alt: "Romantic bedroom view overlooking the riad courtyard at night, featuring warm ambient lighting for an intimate honeymoon stay",
        title: "Romantic Night View from Riad Suite in Marrakech",
      },
      {
        image: "/images/spacious-family-suite-pure-house-marrakech.webp",
        alt: "Close-up of a luxurious grand bed with warm lighting, highlighting the romantic and peaceful atmosphere of this adults-only riad",
        title: "Luxurious Bed in Adults Only Marrakech Riad",
      },
      {
        image: "/images/pure-house-marrakech-staircase-design.webp",
        alt: "Refined lounge area and stunning staircase design at Pure House, offering a quiet space for relaxation and authentic Moroccan hospitality",
        title: "Elegant Lounge and Staircase in Moroccan Boutique Hotel",
      },
      {
        image: "/images/luxury-suite-bedroom-pure-house-marrakech.webp",
        alt: "Soft mood lighting in a luxury suite bedroom, creating a sophisticated and romantic haven for adults visiting Marrakech",
        title: "Romantic Luxury Suite Bedroom in Marrakech",
      },
      {
        image: "/images/artistic-details-pure-house-riad-marrakech.webp",
        alt: "Elegant seating corner adorned with artistic Moroccan details, ideal for quiet reading or intimate conversation in a peaceful riad",
        title: "Quiet Reading Corner with Authentic Moroccan Decor",
      },
      {
        image: "/images/yoga-spot-pure-house-marrakech-terrace.webp",
        alt: "Intricate architectural details and traditional Moroccan zellige decoration at the entrance of the exclusive Pure House boutique riad terrace.",
        title: "Traditional Moroccan Architecture at Pure House Riad",
      },
      {
        image: "/images/pure-house-marrakech-room-amenities.webp",
        alt: "Warmly lit boutique hotel room at Pure House Marrakech, focusing on premium room amenities, ultimate comfort, and romantic aesthetics",
        title: "Premium Room Amenities in Marrakech Luxury Riad",
      },
      {
        image: "/images/cozy-reading-corner-pure-house-marrakech.webp",
        alt: "Premium linens and comfortable bedding in a cozy, quiet adults-only suite located in the heart of the Marrakech Medina",
        title: "Cozy Suite with Premium Bedding in Medina Riad",
      },
      {
        image: "/images/chic-moroccan-lounge-pure-house-marrakech.webp",
        alt: "Spacious chic Moroccan lounge in a luxury suite at Pure House, combining traditional craftsmanship with modern romantic comfort",
        title: "Chic Moroccan Lounge in Luxury Marrakech Suite",
      },
      {
        image: "/images/relaxing-pool-area-pure-house-riad.webp",
        alt: "Refreshing courtyard plunge pool surrounded by lush plants, serving as a quiet oasis for adults to relax away from the bustling city",
        title: "Relaxing Courtyard Pool Oasis in Marrakech Riad",
      },
      {
        image: "/images/riad-marrakech-with-swimming-pool.webp",
        alt: "Tranquil courtyard swimming pool reflecting traditional Moroccan architecture, offering an exclusive child-free riad experience in Marrakech",
        title: "Luxury Riad with Swimming Pool in Marrakech Medina",
      },
      {
        image: "/images/pure-house-marrakech-bathroom-design.webp",
        alt: "Luxury walk-in shower featuring high-end wellness amenities, minimalist design, and traditional Moroccan tadelakt walls",
        title: "Luxury Moroccan Bathroom Design with Tadelakt",
      },
      {
        image: "/images/romantic-suite-decor-pure-house-riad.webp",
        alt: "Stylish romantic guest room featuring a comfortable king bed and a bespoke work desk for the modern discerning digital nomad or luxury traveler",
        title: "Romantic Suite Decor in Luxury Boutique Hotel",
      },
      {
        image: "/images/pure-house-marrakech-night-ambiance.webp",
        alt: "Romantic dining area illuminated by warm lantern lighting, perfect for intimate candlelit dinners in a luxury Marrakech riad",
        title: "Romantic Night Ambiance and Dining at Pure House",
      },
      {
        image: "/images/riad-in-marrakech.webp",
        alt: "Sun-drenched rooftop terrace at a luxury riad offering total privacy, comfortable loungers, and panoramic views of the historic Medina",
        title: "Sun-Drenched Rooftop Terrace at Marrakech Riad",
      },
      {
        image: "/images/pure-house-marrakech-yoga-pool-space.webp",
        alt: "Peaceful rooftop pool and yoga space illuminated at night, creating the ultimate romantic and serene spot in the Marrakech Medina",
        title: "Rooftop Pool and Serene Yoga Space at Night",
      },
      {
        image: "/images/best-places-to-stay-in-marrakech.webp",
        alt: "High-end bedroom decor in a quiet luxury riad suite, ensuring a restful, deeply romantic, and peaceful night for traveling couples",
        title: "Restful Luxury Bedroom in the Best Marrakech Riad",
      },
      {
        image: "/images/boutique-marrakech.webp",
        alt: "Beautifully designed wabi-sabi interior of a Pure House Marrakech luxury room, highlighting peace, minimalism, and exclusivity",
        title: "Minimalist Boutique Hotel Room Interior in Marrakech",
      },
      {
        image: "/images/boutique-hotel-marrakech.webp",
        alt: "Serene courtyard swimming pool area surrounded by traditional arches at Pure House, a sophisticated haven for adults only",
        title: "Serene Courtyard Pool at Adults Only Boutique Hotel",
      },
      {
        image: "/images/pure-house-marrakech-hospitality-service.webp",
        alt: "Elegant dining setting at Pure House Marrakech, offering authentic Moroccan cuisine, mint tea, and premium hospitality in a quiet atmosphere",
        title: "Authentic Moroccan Hospitality and Dining Service",
      },
      {
        image: "/images/marrakech-riad-with-rooftop-terrace.webp",
        alt: "Top-down architectural view of the riad structure, showcasing the hidden luxury and stunning rooftop terrace of Pure House in the Medina",
        title: "Top-Down View of Marrakech Riad with Rooftop Terrace",
      },
      {
        image: "/images/family-friendly-riad-marrakech.webp",
        alt: "Beautiful open sky view above the Pure House Marrakech terrace, symbolizing the total freedom, quiet, and peace of your luxury stay",
        title: "Peaceful Open Sky View from Luxury Riad Terrace",
      },
    ],
  },
  {
    pageUrl: "/shooting/",
    lastmod: "2026-06-02",
    priority: "0.9",
    images: [
      {
        image: "/images/pure-house-marrakech-luxury-boutique-hotel.webp",
        alt: "Beautiful interior spaces of Pure House Marrakech luxury boutique hotel in the Medina",
        title: "Pure House Marrakech Luxury Boutique Hotel",
      },
      {
        image: "/images/pure-house-riad-patio-swimming-pool.webp",
        alt: "Serene patio and refreshing swimming pool at Pure House Marrakech adults-only riad",
        title: "Relaxing Riad Patio and Swimming Pool",
      },
      {
        image: "/images/best-riad-design-pure-house-marrakech.webp",
        alt: "Elegant Moroccan interior design and authentic decor at Pure House Marrakech",
        title: "Beautiful Riad Design at Pure House",
      },
      {
        image: "/images/pure-house-marrakech-architecture-interior.webp",
        alt: "Stunning traditional Moroccan architecture and intricate interior details at Pure House Riad",
        title: "Authentic Moroccan Architecture and Interiors",
      },
      {
        image: "/images/pure-house-marrakech-entrance-door.webp",
        alt: "Traditional carved wooden entrance door welcoming guests to Pure House Marrakech",
        title: "Welcoming Entrance Door of Pure House Marrakech",
      },
    ],
  },
  {
    pageUrl: "/",
    lastmod: "2026-06-02",
    priority: "0.9",
    images: [
      {
        image: "/images/riad-marrakech-with-private-chef.webp",
        alt: "Exclusive culinary experience with a private chef at Pure House Marrakech, a luxury adults-only riad in the Medina.",
        title: "Luxury Riad in Marrakech with Private Chef - Pure House",
      },
      {
        image: "/images/riad-near-koutoubia-mosque.webp",
        alt: "Peaceful and romantic luxury riad ideally located near the iconic Koutoubia Mosque in the heart of Marrakech.",
        title: "Adults-Only Riad Near Koutoubia Mosque Marrakech",
      },
      {
        image: "/images/riad-marrakech-medina.webp",
        alt: "A hidden oasis of luxury and tranquility inside Pure House, a top-rated traditional riad located in the Marrakech Medina.",
        title: "Peaceful Luxury Riad in the Marrakech Medina",
      },
      {
        image: "/images/hotels-in-marrakech.webp",
        alt: "Experience the finest boutique hotel in Marrakech, featuring serene courtyards and exclusive luxury accommodation designed specifically for couples.",
        title: "Top Luxury Boutique Hotel for Couples in Marrakech",
      },
      {
        image: "/images/top-riad-marrakech.webp",
        alt: "Ranked as a top riad in Marrakech, Pure House provides a hidden, child-free oasis perfect for an unforgettable romantic honeymoon getaway.",
        title: "Top Rated Romantic Honeymoon Riad in Marrakech",
      },
      {
        image: "/images/traditional-moroccan-riad-experience.webp",
        alt: "Immerse yourself in an authentic traditional Moroccan riad experience, blending historic Medina architecture with modern luxury and quiet comfort.",
        title: "Traditional Moroccan Riad Experience in Luxury",
      },
      {
        image: "/images/riad-near-jemaa-el-fna.webp",
        alt: "Stay at a peaceful luxury riad perfectly located near Jemaa el-Fna square, offering a quiet oasis in the bustling Marrakech Medina.",
        title: "Peaceful Luxury Riad Near Jemaa el-Fna",
      },
      {
        image: "/images/romantic-riad-for-couples-marrakech.webp",
        alt: "The perfect romantic riad for couples in Marrakech, designed specifically for unforgettable honeymoons and luxury adults-only escapes.",
        title: "Romantic Riad for Couples in Marrakech",
      },
      {
        image: "/images/pure-house-marrakech-riad-medina.webp",
        alt: "Pure House Marrakech, a beautifully restored luxury riad in the Medina featuring stunning architecture and premium Moroccan hospitality.",
        title: "Pure House Luxury Riad in Marrakech Medina",
      },
      {
        image: "/images/exclusive-use-riad-marrakech.webp",
        alt: "Rent our luxury boutique hotel for exclusive use in Marrakech, the ideal private villa experience for luxury retreats in Morocco.",
        title: "Exclusive Use Luxury Riad in Marrakech",
      },
    ],
  },
];

// Build the XML structure
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

// Loop through each page
sitePages.forEach((page) => {
  const lastmod = page.lastmod || new Date().toISOString().split("T")[0];
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}${page.pageUrl}</loc>\n`; // The specific page (e.g., /fr/galerie)
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;

  // Loop through the images on that specific page
  page.images.forEach((item) => {
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${DOMAIN}${item.image}</image:loc>\n`;

    // Safely escape the alt text
    const captions = ["Pure House Medina Adults Only"];
    const tags = captions.join(" | ");
    const safeCaption = escapeXML(`${item.alt} | ${tags}`);
    xml += `      <image:caption>${safeCaption}</image:caption>\n`;

    // Safely escape the title (or fallback to alt)
    const rawTitle = item.title ? item.title : item.alt;
    const safeTitle = escapeXML(rawTitle);
    xml += `      <image:title>${safeTitle}</image:title>\n`;
    xml += `      <image:geo_location>Marrakech, Morocco</image:geo_location>\n`;
    xml += `      <image:license>${DOMAIN}/license.html</image:license>\n`;
    xml += `    </image:image>\n`;
  });

  xml += `  </url>\n`;
});

xml += `</urlset>`;

// Save it
fs.writeFileSync(path.join(__dirname, "public", "image-sitemap.xml"), xml);
console.log("✅ Multi-page Image Sitemap generated successfully!");
