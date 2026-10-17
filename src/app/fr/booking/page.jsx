import Image from "next/image";
import { Marcellus, Jost } from "next/font/google";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";
import Map from "../components/Map";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Riad Boutique Réservé aux Adultes dans la Médina",

  description:
    "Un riad boutique réservé aux adultes à quelques pas de Jemaa el-Fna. Bassin dans la cour, terrasse sur le toit et hammam privé.",

  // Page de campagne : exclure des résultats de recherche pour éviter le contenu dupliqué.
  robots: { index: false, follow: true },
};

/* ---- Edit content here ---- */
const BOOKING_URL = "https://pure-house-marrakech.hotelrunner.com/bv3/search";

const MAPS_EMBED =
  "https://www.google.com/maps?q=Pure+House+Marrakech,+16+Derb+Abou+El+Fdail,+Marrakech+40000&output=embed";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Pure+House+Marrakech+16+Derb+Abou+El+Fdail+Marrakech";

const HERO = {
  src: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
  alt: "Expérience authentique dans un riad marocain traditionnel à Marrakech",
};

const GALLERY = [
  {
    src: "https://purehousemarrakech.com/images/aerial-view-luxury-riad-marrakech-medina.webp",
    alt: "Vue aérienne d'un riad de luxe dans la médina de Marrakech",
  },
  {
    src: "https://purehousemarrakech.com/images/pure-house-marrakech-luxury-riad-courtyard.webp",
    alt: "Cour intérieure du riad de luxe Pure House Marrakech",
  },
  {
    src: "https://purehousemarrakech.com/images/biophilic-design-hotel-morocco-green-riad.webp",
    alt: "Architecture biophilique et végétation dans un riad marocain à Marrakech",
  },
  {
    src: "https://purehousemarrakech.com/images/courtyard-plunge-pool-pure-house-marrakech.webp",
    alt: "Bassin privé dans la cour intérieure de Pure House Marrakech",
  },
  {
    src: "https://purehousemarrakech.com/images/luxury-stay-in-marrakech-medina.webp",
    alt: "Séjour de luxe dans un riad au cœur de la médina de Marrakech",
  },
];
/* --------------------------- */

export default function StoryPage() {
  return (
    <>
      <Navbar path="/booking" second_path={"/es/booking"} />
      <main
        className={`${marcellus.variable} ${jost.variable} bg-riad_background pb-32 font-[family-name:var(--font-body)] text-[#EFE7D6]`}
      >
        {/* Hero */}
        <section className="relative h-[100svh] min-h-[560px] w-full">
          <Image
            src={HERO.src}
            alt={HERO.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10">
            <p className="mb-3 text-sm tracking-wide text-[#D8B980]">
              Riad réservé aux adultes au cœur de la médina de Marrakech
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[1.05] sm:text-6xl">
              Pure House Marrakech
            </h1>
          </div>
        </section>

        {/* Paragraph */}
        <section className="mx-auto max-w-md px-6 pt-10">
          <h2 className="font-[family-name:var(--font-display)] text-2xl leading-snug text-riad_primary">
            Un havre de paix à quelques pas de Jemaa el-Fna
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-riad_primary">
            Pure House est un riad intimiste pensé pour les couples et les
            voyageurs en quête de calme, {"d’intimité"} et {"d’intérieurs"}{" "}
            raffinés. Rafraîchissez-vous dans le bassin de la cour intérieure,
            savourez un dîner sur la terrasse panoramique, puis détendez-vous
            dans un hammam privé. La médina se trouve juste à votre porte, mais
            une fois à l’intérieur, elle semble loin.
          </p>
        </section>

        {/* Gallery: swipeable, story-friendly */}
        <section aria-label="Photos" className="mt-10">
          <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {GALLERY.map((img) => (
              <li
                key={img.src}
                className="relative aspect-[4/5] w-[78vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 78vw, 340px"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Map */}
        <section className="mx-auto mt-12 max-w-md px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">
            Retrouvez-nous au cœur de la Médina
          </h2>
          <p className="mt-2 text-[#EFE7D6]/75">
            16 Derb Abou El Fdail, Marrakech 40000
          </p>
          <Map />
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[#D8B980] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8B980]"
          >
            Ouvrir dans Google Maps
          </a>
        </section>

        <Footer
          en_path={"/booking"}
          path={"/fr/booking"}
          second_path={"/es/booking"}
        />

        {/* Sticky booking button */}
        <aside
          aria-label="Mobile quick booking"
          className="fixed bottom-0 inset-x-0 z-40 bg-riad_background/95 backdrop-blur-md border-t border-riad_secondary/30 p-3 shadow-lg lg:hidden"
        >
          <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
            <Link
              href={"https://pure-house-marrakech.hotelrunner.com/bv3/search"}
              target="_blank"
              rel="noopener"
              className="flex-1 bg-riad_primary text-white text-center py-2.5 px-4 text-xs uppercase tracking-[0.15em] font-medium rounded shadow hover:bg-riad_secondary transition-colors"
            >
              {"Réserver maintenant"}
            </Link>
            <Link
              href={"https://wa.me/212682225235"}
              target="_blank"
              rel="noopener"
              aria-label="Contact Pure House Marrakech on WhatsApp"
              className="bg-riad_primary hover:bg-riad_secondary text-white p-[9px] rounded shadow flex items-center justify-center shrink-0"
            >
              <FaWhatsapp size={18} />
            </Link>
          </div>
        </aside>
      </main>
    </>
  );
}
