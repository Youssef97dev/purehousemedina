import Image from "next/image";
import { Marcellus, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import Map from "@/components/Map";

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
  title: "Pure House Marrakech | Adults-only riad in the Medina",
  description:
    "An adults-only boutique riad steps from Jemaa el-Fna. Courtyard pool, rooftop terrace, private hammam.",
  // Campaign page: keep it out of search results to avoid duplicate content.
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
  alt: "Courtyard of Pure House Marrakech, an adults-only riad in the Medina",
};

const GALLERY = [
  {
    src: "https://purehousemarrakech.com/images/aerial-view-luxury-riad-marrakech-medina.webp",
    alt: "Boutique suite with Moroccan decor",
  },
  {
    src: "https://purehousemarrakech.com/images/pure-house-marrakech-luxury-riad-courtyard.webp",
    alt: "Private hammam and spa",
  },
  {
    src: "https://purehousemarrakech.com/images/biophilic-design-hotel-morocco-green-riad.webp",
    alt: "Private chef dining",
  },
  {
    src: "https://purehousemarrakech.com/images/courtyard-plunge-pool-pure-house-marrakech.webp",
    alt: "Moroccan riad courtyard",
  },
  {
    src: "https://purehousemarrakech.com/images/luxury-stay-in-marrakech-medina.webp",
    alt: "Riad terrace in the Medina",
  },
];
/* --------------------------- */

export default function StoryPage() {
  return (
    <>
      <Navbar path="/fr/booking" second_path={"/es/booking"} />
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
              Adults-only riad, Marrakech Medina
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[1.05] sm:text-6xl">
              Pure House Marrakech
            </h1>
          </div>
        </section>

        {/* Paragraph */}
        <section className="mx-auto max-w-md px-6 pt-10">
          <h2 className="font-[family-name:var(--font-display)] text-2xl leading-snug text-riad_primary">
            A quiet sanctuary steps from Jemaa el-Fna
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-riad_primary">
            Pure House is an intimate riad made for couples and travelers who
            want calm, privacy and beautiful interiors. Cool off in the
            courtyard pool, have dinner on the rooftop terrace, then unwind in a
            private hammam. The Medina is right outside your door, and once you
            step in, you would never know.
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
        <section className="mx-auto mt-12 max-w-lg px-6">
          <h2 className="text-riad_primary font-[family-name:var(--font-display)] text-2xl ">
            Find us in the Medina
          </h2>
          <p className="mt-2 text-riad_primary">
            16 Derb Abou El Fdail, Marrakech 40000
          </p>
          {/*<div className="mt-4 overflow-hidden rounded-2xl border border-[#EFE7D6]/15">
            <iframe
              title="Pure House Marrakech on Google Maps"
              src={MAPS_EMBED}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>*/}
          <Map />
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[#D8B980] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8B980]"
          >
            Open in Google Maps
          </a>
        </section>

        {/* Sticky booking button */}
        <div className="fixed inset-x-0 bottom-0 z-50 bg-gradient-to-t from-riad_background via-riad_background/95 to-transparent px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-8">
          <a
            href={BOOKING_URL}
            className="mx-auto flex h-14 max-w-md items-center justify-center rounded-full bg-riad_secondary hover:bg-riad_primary text-lg font-medium text-riad_primary hover:text-riad_background transition-colors hover:bg-[#E6CB98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EFE7D6]"
          >
            Check availability
          </a>
        </div>
      </main>
    </>
  );
}
