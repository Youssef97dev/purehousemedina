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
    pageUrl: "/gallery",
    images: [
      {
        image: "/riad-marrakech/tadelakt-bathroom-luxury-riad-marrakech.webp",
        alt: "Minimalist tadelakt bathroom with a copper soaking tub inside a luxury riad suite in Marrakech",
        title: "Traditional Tadelakt Bathroom in Luxury Marrakech Riad",
      },
      {
        image:
          "/riad-marrakech/traditional-moroccan-breakfast-luxury-riad-poolside.webp",
        alt: "A lavish traditional Moroccan breakfast spread with fresh pastries, mint tea, and fruit served poolside at Pure House Marrakech",
        title: "Moroccan Breakfast by the Pool at Pure House Riad",
      },
      {
        image:
          "/riad-marrakech/traditional-moroccan-riad-carved-door-entrance.webp",
        alt: "Massive, intricately carved traditional wooden door serving as the grand entrance to a luxury riad in the Marrakech Medina",
        title: "Traditional Carved Door Entrance to Marrakech Riad",
      },
      {
        image:
          "/riad-marrakech/wabi-sabi-interior-riad-marrakech-pure-house.webp",
        alt: "Minimalist wabi sabi interior design with organic textures and traditional Moroccan pottery inside Pure House riad",
        title: "Wabi Sabi Interior Riad in Marrakech",
      },
      {
        image:
          "/riad-marrakech/pure-house-luxury-riad-marrakech-courtyard-pool.webp",
        alt: "Lush green courtyard featuring a private pool at Pure House Marrakech, a luxury riad in the heart of the Medina",
        title: "Luxury Riad Marrakech with Private Pool - Pure House Medina",
      },
      {
        image:
          "/riad-marrakech/marrakech-riad-with-rooftop-pool-pure-house.webp",
        alt: "Sun-drenched rooftop plunge pool with sun loungers overlooking the historic Marrakech Medina at Pure House hotel",
        title: "Luxury Riad with Rooftop Pool in Marrakech",
      },
      {
        image: "/riad-marrakech/quiet-oasis-marrakech-center-reading-nook.webp",
        alt: "A comfortable reading nook with plush cushions and Moroccan textiles tucked away in a quiet corner of a boutique riad",
        title: "Peaceful Reading Corner in Boutique Hotel Marrakech",
      },
      {
        image:
          "/riad-marrakech/romantic-honeymoon-suite-boutique-hotel-marrakech.webp",
        alt: "Romantic luxury suite with traditional Moroccan decor and canopy bed at Pure House boutique hotel in Marrakech",
        title: "Romantic Honeymoon Suite in Marrakech Boutique Hotel",
      },
      {
        image:
          "/riad-marrakech/luxury-zellige-tilework-moroccan-riad-pure-house.webp",
        alt: "Close up of intricate and colorful traditional luxury zellige tilework adorning the walls of Pure House boutique hotel in Morocco",
        title: "Luxury Zellige Tilework in Moroccan Boutique Hotel",
      },
      {
        image:
          "/riad-marrakech/moroccan-luxury-experience-mint-tea-pouring.webp",
        alt: "A staff member pouring traditional Moroccan mint tea from a silver teapot at the luxury Pure House riad",
        title: "Traditional Mint Tea Service in Marrakech Riad",
      },
      {
        image: "/riad-marrakech/private-plunge-pool-medina-luxury-suite.webp",
        alt: "A luxury riad suite offering direct access to a private plunge pool on a private terrace in the Marrakech Medina",
        title: "Luxury Suite with Private Plunge Pool in Marrakech",
      },
      {
        image: "/riad-marrakech/luxury-private-riad-medina-exclusive-hire.webp",
        alt: "Spacious, elegantly furnished living room in a luxury private riad available for exclusive hire in the Marrakech Medina",
        title: "Exclusive Hire Luxury Private Riad in Medina",
      },
      {
        image: "/riad-marrakech/luxury-hammam-spa-riad-marrakech-morocco.webp",
        alt: "Private luxury hammam spa with dim lighting and traditional black soap treatments at a boutique hotel in Marrakech",
        title: "Luxury Hammam Spa in Marrakech Riad",
      },
      {
        image:
          "/riad-marrakech/luxury-accommodation-morocco-pure-house-details.webp",
        alt: "High-end finishing touches including brass fixtures, premium linens, and fresh roses in a luxury hotel suite in Morocco",
        title: "Premium Amenities at Luxury Accommodation in Morocco",
      },
      {
        image:
          "/riad-marrakech/adults-only-boutique-hotel-marrakech-lounge.webp",
        alt: "Elegant and peaceful lounge area with a cozy fireplace at Pure House, an adults only boutique hotel in Marrakech",
        title: "Peaceful Lounge at Adults Only Marrakech Hotel",
      },
      {
        image: "/riad-marrakech/biophilic-design-hotel-morocco-green-riad.webp",
        alt: "Lush tropical plants and banana trees filling the sunlit courtyard of Pure House, showcasing biophilic design in a Moroccan hotel",
        title: "Biophilic Design Riad in Morocco",
      },
      {
        image:
          "/riad-marrakech/rooftop-riad-marrakech-atlas-mountain-views.webp",
        alt: "Sunny rooftop terrace at Pure House riad in Marrakech offering panoramic views of the Medina and Atlas Mountains",
        title: "Rooftop Riad Marrakech with Medina Views",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-terrace-sunset.webp",
        alt: "Interior patio and plunge pool at Pure House Marrakech, a luxury adults-only riad offering a romantic sanctuary in the Medina",
        title: "Luxury Adults-Only Riad Patio - Pure House Marrakech",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-candlelight-dinner.webp",
        alt: "Sophisticated guest suite with warm lighting and elegant seating, perfect for a romantic adults-only escape in Marrakech",
        title: "Romantic Suite for Couples in Marrakech Boutique Hotel",
      },
      {
        image: "/riad-marrakech/wellness-products-pure-house-bathroom.webp",
        alt: "Clean, modern ensuite bathroom with traditional Moroccan tadelakt finishes and luxury wellness products in a boutique riad",
        title: "Luxury Tadelakt Bathroom in Moroccan Boutique Riad",
      },
      {
        image: "/riad-marrakech/pure-house-rooftop-dining-area.webp",
        alt: "Serene rooftop dining area at Pure House Marrakech where guests enjoy quiet mornings and the charm of the historic Medina",
        title: "Rooftop Dining Area at Luxury Riad Marrakech",
      },
      {
        image: "/riad-marrakech/luxury-travel-marrakech-morocco.webp",
        alt: "Luxury boutique hotel room featuring a plush bed and sitting area, designed for discerning travelers seeking a peaceful stay in Morocco",
        title: "Peaceful Luxury Hotel Room in Marrakech Medina",
      },
      {
        image: "/riad-marrakech/aerial-view-pure-house-marrakech-medina.webp",
        alt: "Aerial view of Pure House Marrakech, showcasing the traditional architecture of an exclusive adults-only riad hidden within the Medina",
        title: "Aerial View of Pure House Luxury Riad in Marrakech Medina",
      },
      {
        image: "/riad-marrakech/riad-room-terrace-view-marrakech.webp",
        alt: "Romantic bedroom view overlooking the riad courtyard at night, featuring warm ambient lighting for an intimate honeymoon stay",
        title: "Romantic Night View from Riad Suite in Marrakech",
      },
      {
        image:
          "/riad-marrakech/spacious-family-suite-pure-house-marrakech.webp",
        alt: "Close-up of a luxurious grand bed with warm lighting, highlighting the romantic and peaceful atmosphere of this adults-only riad",
        title: "Luxurious Bed in Adults Only Marrakech Riad",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-staircase-design.webp",
        alt: "Refined lounge area and stunning staircase design at Pure House, offering a quiet space for relaxation and authentic Moroccan hospitality",
        title: "Elegant Lounge and Staircase in Moroccan Boutique Hotel",
      },
      {
        image: "/riad-marrakech/luxury-suite-bedroom-pure-house-marrakech.webp",
        alt: "Soft mood lighting in a luxury suite bedroom, creating a sophisticated and romantic haven for adults visiting Marrakech",
        title: "Romantic Luxury Suite Bedroom in Marrakech",
      },
      {
        image:
          "/riad-marrakech/artistic-details-pure-house-riad-marrakech.webp",
        alt: "Elegant seating corner adorned with artistic Moroccan details, ideal for quiet reading or intimate conversation in a peaceful riad",
        title: "Quiet Reading Corner with Authentic Moroccan Decor",
      },
      {
        image: "/riad-marrakech/yoga-spot-pure-house-marrakech-terrace.webp",
        alt: "Intricate architectural details and traditional Moroccan zellige decoration at the entrance of the exclusive Pure House boutique riad terrace.",
        title: "Traditional Moroccan Architecture at Pure House Riad",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-room-amenities.webp",
        alt: "Warmly lit boutique hotel room at Pure House Marrakech, focusing on premium room amenities, ultimate comfort, and romantic aesthetics",
        title: "Premium Room Amenities in Marrakech Luxury Riad",
      },
      {
        image: "/riad-marrakech/cozy-reading-corner-pure-house-marrakech.webp",
        alt: "Premium linens and comfortable bedding in a cozy, quiet adults-only suite located in the heart of the Marrakech Medina",
        title: "Cozy Suite with Premium Bedding in Medina Riad",
      },
      {
        image: "/riad-marrakech/chic-moroccan-lounge-pure-house-marrakech.webp",
        alt: "Spacious chic Moroccan lounge in a luxury suite at Pure House, combining traditional craftsmanship with modern romantic comfort",
        title: "Chic Moroccan Lounge in Luxury Marrakech Suite",
      },
      {
        image: "/riad-marrakech/relaxing-pool-area-pure-house-riad.webp",
        alt: "Refreshing courtyard plunge pool surrounded by lush plants, serving as a quiet oasis for adults to relax away from the bustling city",
        title: "Relaxing Courtyard Pool Oasis in Marrakech Riad",
      },
      {
        image: "/riad-marrakech/riad-marrakech-with-swimming-pool.webp",
        alt: "Tranquil courtyard swimming pool reflecting traditional Moroccan architecture, offering an exclusive child-free riad experience in Marrakech",
        title: "Luxury Riad with Swimming Pool in Marrakech Medina",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-bathroom-design.webp",
        alt: "Luxury walk-in shower featuring high-end wellness amenities, minimalist design, and traditional Moroccan tadelakt walls",
        title: "Luxury Moroccan Bathroom Design with Tadelakt",
      },
      {
        image: "/riad-marrakech/romantic-suite-decor-pure-house-riad.webp",
        alt: "Stylish romantic guest room featuring a comfortable king bed and a bespoke work desk for the modern discerning digital nomad or luxury traveler",
        title: "Romantic Suite Decor in Luxury Boutique Hotel",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-night-ambiance.webp",
        alt: "Romantic dining area illuminated by warm lantern lighting, perfect for intimate candlelit dinners in a luxury Marrakech riad",
        title: "Romantic Night Ambiance and Dining at Pure House",
      },
      {
        image: "/riad-marrakech/riad-in-marrakech.webp",
        alt: "Sun-drenched rooftop terrace at a luxury riad offering total privacy, comfortable loungers, and panoramic views of the historic Medina",
        title: "Sun-Drenched Rooftop Terrace at Marrakech Riad",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-yoga-pool-space.webp",
        alt: "Peaceful rooftop pool and yoga space illuminated at night, creating the ultimate romantic and serene spot in the Marrakech Medina",
        title: "Rooftop Pool and Serene Yoga Space at Night",
      },
      {
        image: "/riad-marrakech/best-places-to-stay-in-marrakech.webp",
        alt: "High-end bedroom decor in a quiet luxury riad suite, ensuring a restful, deeply romantic, and peaceful night for traveling couples",
        title: "Restful Luxury Bedroom in the Best Marrakech Riad",
      },
      {
        image: "/riad-marrakech/boutique-marrakech.webp",
        alt: "Beautifully designed wabi-sabi interior of a Pure House Marrakech luxury room, highlighting peace, minimalism, and exclusivity",
        title: "Minimalist Boutique Hotel Room Interior in Marrakech",
      },
      {
        image: "/riad-marrakech/boutique-hotel-marrakech.webp",
        alt: "Serene courtyard swimming pool area surrounded by traditional arches at Pure House, a sophisticated haven for adults only",
        title: "Serene Courtyard Pool at Adults Only Boutique Hotel",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-hospitality-service.webp",
        alt: "Elegant dining setting at Pure House Marrakech, offering authentic Moroccan cuisine, mint tea, and premium hospitality in a quiet atmosphere",
        title: "Authentic Moroccan Hospitality and Dining Service",
      },
      {
        image: "/riad-marrakech/marrakech-riad-with-rooftop-terrace.webp",
        alt: "Top-down architectural view of the riad structure, showcasing the hidden luxury and stunning rooftop terrace of Pure House in the Medina",
        title: "Top-Down View of Marrakech Riad with Rooftop Terrace",
      },
      {
        image: "/riad-marrakech/family-friendly-riad-marrakech.webp",
        alt: "Beautiful open sky view above the Pure House Marrakech terrace, symbolizing the total freedom, quiet, and peace of your luxury stay",
        title: "Peaceful Open Sky View from Luxury Riad Terrace",
      },
    ],
  },
  {
    pageUrl: "/",
    images: [
      {
        image: "/riad-marrakech/riad-marrakech-with-private-chef.webp",
        alt: "Exclusive culinary experience with a private chef at Pure House Marrakech, a luxury adults-only riad in the Medina.",
        title: "Luxury Riad in Marrakech with Private Chef - Pure House",
      },
      {
        image: "/riad-marrakech/riad-near-koutoubia-mosque.webp",
        alt: "Peaceful and romantic luxury riad ideally located near the iconic Koutoubia Mosque in the heart of Marrakech.",
        title: "Adults-Only Riad Near Koutoubia Mosque Marrakech",
      },
      {
        image: "/riad-marrakech/accommodation-near-majorelle-garden.webp",
        alt: "Elegant boutique hotel accommodation offering a serene adults-only getaway near the beautiful Majorelle Garden in Marrakech.",
        title: "Luxury Accommodation Near Majorelle Garden Marrakech",
      },
      {
        image: "/riad-marrakech/boutique-hotel-marrakech.webp",
        alt: "Stunning architecture and relaxing atmosphere at Pure House, a premier luxury boutique hotel for couples in Marrakech.",
        title: "Luxury Boutique Hotel in Marrakech - Pure House",
      },
      {
        image: "/riad-marrakech/riad-marrakech-medina.webp",
        alt: "A hidden oasis of luxury and tranquility inside Pure House, a top-rated traditional riad located in the Marrakech Medina.",
        title: "Peaceful Luxury Riad in the Marrakech Medina",
      },
      {
        image: "/riad-marrakech/luxury-riad-marrakech.webp",
        alt: "Discover unparalleled elegance at Pure House, a luxury adults-only riad offering a romantic and peaceful sanctuary in the heart of Marrakech.",
        title: "Luxury Adults-Only Riad in Marrakech - Pure House",
      },
      {
        image: "/riad-marrakech/hotels-in-marrakech.webp",
        alt: "Experience the finest boutique hotel in Marrakech, featuring serene courtyards and exclusive luxury accommodation designed specifically for couples.",
        title: "Top Luxury Boutique Hotel for Couples in Marrakech",
      },
      {
        image: "/riad-marrakech/top-riad-marrakech.webp",
        alt: "Ranked as a top riad in Marrakech, Pure House provides a hidden, child-free oasis perfect for an unforgettable romantic honeymoon getaway.",
        title: "Top Rated Romantic Honeymoon Riad in Marrakech",
      },
      {
        image: "/riad-marrakech/traditional-moroccan-riad-experience.webp",
        alt: "Immerse yourself in an authentic traditional Moroccan riad experience, blending historic Medina architecture with modern luxury and quiet comfort.",
        title: "Traditional Moroccan Riad Experience in Luxury",
      },
    ],
  },

  // --- FRENCH PAGES ---
  {
    pageUrl: "/fr/gallery",
    images: [
      {
        image: "/riad-marrakech/tadelakt-bathroom-luxury-riad-marrakech.webp",
        alt: "Salle de bain minimaliste en tadelakt avec baignoire en cuivre dans une suite de riad de luxe à Marrakech",
        title:
          "Salle de Bain Traditionnelle en Tadelakt dans un Riad de Luxe à Marrakech",
      },
      {
        image:
          "/riad-marrakech/traditional-moroccan-breakfast-luxury-riad-poolside.webp",
        alt: "Un copieux petit-déjeuner marocain traditionnel avec des pâtisseries fraîches, du thé à la menthe et des fruits servi au bord de la piscine au Pure House Marrakech",
        title:
          "Petit-déjeuner Marocain au bord de la Piscine au Riad Pure House",
      },
      {
        image:
          "/riad-marrakech/traditional-moroccan-riad-carved-door-entrance.webp",
        alt: "Porte en bois traditionnelle massive et finement sculptée servant d'entrée grandiose à un riad de luxe dans la médina de Marrakech",
        title:
          "Entrée avec Porte Sculptée Traditionnelle d'un Riad à Marrakech",
      },
      {
        image:
          "/riad-marrakech/wabi-sabi-interior-riad-marrakech-pure-house.webp",
        alt: "Design d'intérieur wabi-sabi minimaliste avec des textures organiques et des poteries marocaines traditionnelles au riad Pure House",
        title: "Riad à l'Intérieur Wabi Sabi à Marrakech",
      },
      {
        image:
          "/riad-marrakech/pure-house-luxury-riad-marrakech-courtyard-pool.webp",
        alt: "Cour verdoyante avec piscine privée au Pure House Marrakech, un riad de luxe au cœur de la Médina",
        title: "Riad de Luxe Marrakech avec Piscine Privée - Pure House Medina",
      },
      {
        image:
          "/riad-marrakech/marrakech-riad-with-rooftop-pool-pure-house.webp",
        alt: "Petit bassin baigné de soleil sur le toit avec des chaises longues surplombant la médina historique de Marrakech à l'hôtel Pure House",
        title: "Riad de Luxe avec Piscine sur le Toit à Marrakech",
      },
      {
        image: "/riad-marrakech/quiet-oasis-marrakech-center-reading-nook.webp",
        alt: "Un coin lecture confortable avec des coussins moelleux et des textiles marocains niché dans un coin tranquille d'un riad boutique",
        title: "Coin Lecture Paisible dans un Boutique-Hôtel à Marrakech",
      },
      {
        image:
          "/riad-marrakech/romantic-honeymoon-suite-boutique-hotel-marrakech.webp",
        alt: "Suite de luxe romantique avec décoration marocaine traditionnelle et lit à baldaquin au boutique-hôtel Pure House à Marrakech",
        title:
          "Suite Romantique pour Lune de Miel dans un Boutique-Hôtel à Marrakech",
      },
      {
        image:
          "/riad-marrakech/luxury-zellige-tilework-moroccan-riad-pure-house.webp",
        alt: "Gros plan sur les motifs complexes et colorés des luxueux carreaux de zellige traditionnels ornant les murs du boutique-hôtel Pure House au Maroc",
        title: "Carrelage Zellige de Luxe dans un Boutique-Hôtel Marocain",
      },
      {
        image:
          "/riad-marrakech/moroccan-luxury-experience-mint-tea-pouring.webp",
        alt: "Un membre du personnel versant du thé à la menthe marocain traditionnel avec une théière en argent au luxueux riad Pure House",
        title:
          "Service Traditionnel de Thé à la Menthe dans un Riad à Marrakech",
      },
      {
        image: "/riad-marrakech/private-plunge-pool-medina-luxury-suite.webp",
        alt: "Une suite de riad de luxe offrant un accès direct à un petit bassin sur une terrasse privée dans la médina de Marrakech",
        title: "Suite de Luxe avec Bassin Privé à Marrakech",
      },
      {
        image: "/riad-marrakech/luxury-private-riad-medina-exclusive-hire.webp",
        alt: "Salon spacieux et élégamment meublé dans un riad privé de luxe disponible en location exclusive dans la médina de Marrakech",
        title: "Location Exclusive d'un Riad Privé de Luxe dans la Médina",
      },
      {
        image: "/riad-marrakech/luxury-hammam-spa-riad-marrakech-morocco.webp",
        alt: "Spa hammam de luxe privé avec éclairage tamisé et soins traditionnels au savon noir dans un boutique-hôtel à Marrakech",
        title: "Spa Hammam de Luxe dans un Riad à Marrakech",
      },
      {
        image:
          "/riad-marrakech/luxury-accommodation-morocco-pure-house-details.webp",
        alt: "Finitions haut de gamme comprenant des accessoires en laiton, du linge de maison de qualité supérieure et des roses fraîches dans une suite d'hôtel de luxe au Maroc",
        title: "Équipements Haut de Gamme dans un Hébergement de Luxe au Maroc",
      },
      {
        image:
          "/riad-marrakech/adults-only-boutique-hotel-marrakech-lounge.webp",
        alt: "Salon élégant et paisible avec une cheminée confortable au Pure House, un boutique-hôtel réservé aux adultes à Marrakech",
        title: "Salon Paisible dans un Hôtel Réservé aux Adultes à Marrakech",
      },
      {
        image: "/riad-marrakech/biophilic-design-hotel-morocco-green-riad.webp",
        alt: "Plantes tropicales luxuriantes et bananiers remplissant la cour ensoleillée du Pure House, illustrant le design biophilique dans un hôtel marocain",
        title: "Riad au Design Biophilique au Maroc",
      },
      {
        image:
          "/riad-marrakech/rooftop-riad-marrakech-atlas-mountain-views.webp",
        alt: "Terrasse ensoleillée sur le toit du riad Pure House à Marrakech offrant des vues panoramiques sur la Médina et les montagnes de l'Atlas",
        title: "Riad avec Rooftop à Marrakech et Vues sur la Médina",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-terrace-sunset.webp",
        alt: "Patio intérieur et petit bassin au Pure House Marrakech, un riad de luxe réservé aux adultes offrant un sanctuaire romantique dans la Médina",
        title: "Patio de Riad de Luxe pour Adultes - Pure House Marrakech",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-candlelight-dinner.webp",
        alt: "Suite d'invités sophistiquée avec un éclairage chaleureux et des sièges élégants, parfaite pour une escapade romantique entre adultes à Marrakech",
        title:
          "Suite Romantique pour Couples dans un Boutique-Hôtel à Marrakech",
      },
      {
        image: "/riad-marrakech/wellness-products-pure-house-bathroom.webp",
        alt: "Salle de bain attenante moderne et épurée avec finitions traditionnelles en tadelakt marocain et produits de bien-être de luxe",
        title:
          "Salle de Bain de Luxe en Tadelakt dans un Riad Boutique Marocain",
      },
      {
        image: "/riad-marrakech/pure-house-rooftop-dining-area.webp",
        alt: "Espace repas serein sur le toit du Pure House Marrakech où les clients profitent de matinées tranquilles et du charme de la Médina",
        title: "Espace Repas sur le Toit au Riad de Luxe à Marrakech",
      },
      {
        image: "/riad-marrakech/luxury-travel-marrakech-morocco.webp",
        alt: "Chambre de boutique-hôtel de luxe avec lit moelleux et coin salon, conçue pour les voyageurs exigeants en quête d'un séjour paisible au Maroc",
        title: "Chambre d'Hôtel de Luxe Paisible dans la Médina de Marrakech",
      },
      {
        image: "/riad-marrakech/aerial-view-pure-house-marrakech-medina.webp",
        alt: "Vue aérienne du Pure House Marrakech, mettant en valeur l'architecture traditionnelle d'un riad exclusif pour adultes caché dans la Médina",
        title:
          "Vue Aérienne du Riad de Luxe Pure House dans la Médina de Marrakech",
      },
      {
        image: "/riad-marrakech/riad-room-terrace-view-marrakech.webp",
        alt: "Vue romantique de la chambre donnant sur la cour du riad la nuit, avec un éclairage d'ambiance chaleureux pour un séjour de lune de miel",
        title: "Vue Nocturne Romantique depuis une Suite de Riad à Marrakech",
      },
      {
        image:
          "/riad-marrakech/spacious-family-suite-pure-house-marrakech.webp",
        alt: "Gros plan sur un grand lit luxueux avec un éclairage chaleureux, soulignant l'atmosphère romantique et paisible de ce riad pour adultes",
        title: "Lit Luxueux dans un Riad pour Adultes à Marrakech",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-staircase-design.webp",
        alt: "Espace salon raffiné et superbe design d'escalier au Pure House, offrant un espace calme pour la détente et l'hospitalité marocaine",
        title: "Salon Élégant et Escalier dans un Boutique-Hôtel Marocain",
      },
      {
        image: "/riad-marrakech/luxury-suite-bedroom-pure-house-marrakech.webp",
        alt: "Éclairage d'ambiance doux dans une chambre de suite de luxe, créant un havre sophistiqué et romantique pour les adultes visitant Marrakech",
        title: "Chambre de Suite de Luxe Romantique à Marrakech",
      },
      {
        image:
          "/riad-marrakech/artistic-details-pure-house-riad-marrakech.webp",
        alt: "Coin salon élégant orné de détails artistiques marocains, idéal pour une lecture tranquille ou une conversation intime dans un riad paisible",
        title: "Coin Lecture Tranquille avec Décoration Marocaine Authentique",
      },
      {
        image: "/riad-marrakech/yoga-spot-pure-house-marrakech-terrace.webp",
        alt: "Détails architecturaux complexes et décoration traditionnelle en zellige marocain à l'entrée de la terrasse du riad boutique exclusif Pure House",
        title: "Architecture Marocaine Traditionnelle au Riad Pure House",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-room-amenities.webp",
        alt: "Chambre de boutique-hôtel chaleureusement éclairée au Pure House Marrakech, mettant l'accent sur les équipements haut de gamme et le confort",
        title:
          "Équipements de Chambre Haut de Gamme dans un Riad de Luxe à Marrakech",
      },
      {
        image: "/riad-marrakech/cozy-reading-corner-pure-house-marrakech.webp",
        alt: "Draps de qualité supérieure et literie confortable dans une suite douillette et calme réservée aux adultes, au cœur de la médina de Marrakech",
        title:
          "Suite Douillette avec Literie Haut de Gamme dans un Riad de la Médina",
      },
      {
        image: "/riad-marrakech/chic-moroccan-lounge-pure-house-marrakech.webp",
        alt: "Salon marocain chic et spacieux dans une suite de luxe au Pure House, alliant artisanat traditionnel et confort romantique moderne",
        title: "Salon Marocain Chic dans une Suite de Luxe à Marrakech",
      },
      {
        image: "/riad-marrakech/relaxing-pool-area-pure-house-riad.webp",
        alt: "Petit bassin rafraîchissant dans la cour entouré de plantes luxuriantes, servant d'oasis tranquille pour se détendre loin de la ville animée",
        title:
          "Oasis de Détente avec Piscine dans la Cour d'un Riad à Marrakech",
      },
      {
        image: "/riad-marrakech/riad-marrakech-with-swimming-pool.webp",
        alt: "Piscine tranquille dans la cour reflétant l'architecture marocaine traditionnelle, offrant une expérience exclusive sans enfants à Marrakech",
        title: "Riad de Luxe avec Piscine dans la Médina de Marrakech",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-bathroom-design.webp",
        alt: "Douche à l'italienne de luxe avec équipements de bien-être haut de gamme, design minimaliste et murs traditionnels en tadelakt marocain",
        title: "Design de Salle de Bain Marocaine de Luxe avec Tadelakt",
      },
      {
        image: "/riad-marrakech/romantic-suite-decor-pure-house-riad.webp",
        alt: "Chambre d'amis romantique et élégante avec un lit king confortable et un bureau sur mesure pour le voyageur de luxe moderne",
        title: "Décoration de Suite Romantique dans un Boutique-Hôtel de Luxe",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-night-ambiance.webp",
        alt: "Espace repas romantique illuminé par la lumière chaude des lanternes, parfait pour des dîners intimes aux chandelles dans un riad de luxe",
        title: "Ambiance Nocturne Romantique et Dîner au Pure House",
      },
      {
        image: "/riad-marrakech/riad-in-marrakech.webp",
        alt: "Terrasse ensoleillée sur le toit d'un riad de luxe offrant une intimité totale, des chaises longues confortables et des vues panoramiques",
        title: "Terrasse Ensoleillée sur le Toit d'un Riad à Marrakech",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-yoga-pool-space.webp",
        alt: "Piscine paisible sur le toit et espace de yoga illuminés la nuit, créant le lieu romantique et serein ultime dans la médina de Marrakech",
        title: "Piscine sur le Toit et Espace de Yoga Serein la Nuit",
      },
      {
        image: "/riad-marrakech/best-places-to-stay-in-marrakech.webp",
        alt: "Décoration de chambre haut de gamme dans une suite de riad de luxe calme, assurant une nuit reposante, romantique et paisible",
        title: "Chambre de Luxe Reposante dans le Meilleur Riad de Marrakech",
      },
      {
        image: "/riad-marrakech/boutique-marrakech.webp",
        alt: "Intérieur wabi-sabi magnifiquement conçu d'une chambre de luxe au Pure House Marrakech, mettant en valeur la paix et l'exclusivité",
        title: "Intérieur de Chambre de Boutique-Hôtel Minimaliste à Marrakech",
      },
      {
        image: "/riad-marrakech/boutique-hotel-marrakech.webp",
        alt: "Piscine sereine dans la cour entourée d'arches traditionnelles au Pure House, un havre sophistiqué réservé uniquement aux adultes",
        title: "Piscine Sereine dans la Cour d'un Boutique-Hôtel pour Adultes",
      },
      {
        image: "/riad-marrakech/pure-house-marrakech-hospitality-service.webp",
        alt: "Cadre de restauration élégant au Pure House Marrakech, offrant une cuisine marocaine authentique et une hospitalité de qualité",
        title: "Hospitalité Marocaine Authentique et Service de Restauration",
      },
      {
        image: "/riad-marrakech/marrakech-riad-with-rooftop-terrace.webp",
        alt: "Vue architecturale plongeante de la structure du riad, mettant en valeur le luxe caché et la superbe terrasse sur le toit du Pure House",
        title: "Vue Plongeante d'un Riad à Marrakech avec Terrasse sur le Toit",
      },
      {
        image: "/riad-marrakech/family-friendly-riad-marrakech.webp",
        alt: "Magnifique vue à ciel ouvert au-dessus de la terrasse du Pure House Marrakech, symbolisant la liberté totale et la paix de votre séjour",
        title: "Vue Paisible à Ciel Ouvert depuis la Terrasse du Riad de Luxe",
      },
    ],
  },
  {
    pageUrl: "/fr",
    images: [
      {
        image: "/riad-marrakech/riad-marrakech-with-private-chef.webp",
        alt: "Expérience culinaire exclusive avec un chef privé au Pure House Marrakech, un riad de luxe réservé aux adultes dans la Médina.",
        title: "Riad de Luxe à Marrakech avec Chef Privé - Pure House",
      },
      {
        image: "/riad-marrakech/riad-near-koutoubia-mosque.webp",
        alt: "Riad de luxe paisible et romantique idéalement situé près de l'emblématique mosquée Koutoubia au cœur de Marrakech.",
        title: "Riad pour Adultes Près de la Mosquée Koutoubia à Marrakech",
      },
      {
        image: "/riad-marrakech/accommodation-near-majorelle-garden.webp",
        alt: "Hébergement de charme élégant offrant une escapade sereine réservée aux adultes près du magnifique Jardin Majorelle à Marrakech.",
        title: "Hébergement de Luxe Près du Jardin Majorelle à Marrakech",
      },
      {
        image: "/riad-marrakech/boutique-hotel-marrakech.webp",
        alt: "Architecture époustouflante et atmosphère relaxante au Pure House, un boutique-hôtel de luxe de premier plan pour les couples à Marrakech.",
        title: "Boutique-Hôtel de Luxe à Marrakech - Pure House",
      },
      {
        image: "/riad-marrakech/riad-marrakech-medina.webp",
        alt: "Une oasis cachée de luxe et de tranquillité à l'intérieur du Pure House, un riad traditionnel très bien noté situé dans la médina de Marrakech.",
        title: "Riad de Luxe Paisible dans la Médina de Marrakech",
      },
      {
        image: "/riad-marrakech/luxury-riad-marrakech.webp",
        alt: "Découvrez une élégance inégalée au Pure House, un riad de luxe réservé aux adultes offrant un sanctuaire romantique et paisible au cœur de Marrakech.",
        title: "Riad de Luxe pour Adultes à Marrakech - Pure House",
      },
      {
        image: "/riad-marrakech/hotels-in-marrakech.webp",
        alt: "Découvrez le meilleur boutique-hôtel de Marrakech, avec ses cours sereines et ses hébergements de luxe exclusifs conçus spécifiquement pour les couples.",
        title: "Meilleur Boutique-Hôtel de Luxe pour Couples à Marrakech",
      },
      {
        image: "/riad-marrakech/top-riad-marrakech.webp",
        alt: "Classé parmi les meilleurs riads de Marrakech, Pure House offre une oasis cachée et sans enfants, parfaite pour une lune de miel romantique inoubliable.",
        title: "Riad Romantique pour Lune de Miel le Mieux Noté à Marrakech",
      },
      {
        image: "/riad-marrakech/traditional-moroccan-riad-experience.webp",
        alt: "Plongez dans une expérience de riad marocain traditionnel authentique, mêlant l'architecture historique de la Médina au luxe moderne et au confort tranquille.",
        title: "Expérience Traditionnelle de Riad Marocain de Luxe",
      },
    ],
  },
];

// Build the XML structure
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

// Loop through each page
sitePages.forEach((page) => {
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}${page.pageUrl}</loc>\n`; // The specific page (e.g., /fr/galerie)

  // Loop through the images on that specific page
  page.images.forEach((item) => {
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${DOMAIN}${item.image}</image:loc>\n`;

    // Safely escape the alt text
    const safeAlt = escapeXML(item.alt);
    xml += `      <image:caption>${safeAlt}</image:caption>\n`;

    // Safely escape the title (or fallback to alt)
    const rawTitle = item.title ? item.title : item.alt;
    const safeTitle = escapeXML(rawTitle);
    xml += `      <image:title>${safeTitle}</image:title>\n`;

    xml += `    </image:image>\n`;
  });

  xml += `  </url>\n`;
});

xml += `</urlset>`;

// Save it
fs.writeFileSync(path.join(__dirname, "public", "image-sitemap.xml"), xml);
console.log("✅ Multi-page Image Sitemap generated successfully!");
