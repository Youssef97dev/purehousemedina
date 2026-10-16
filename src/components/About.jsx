import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full h-full px-6 py-12" aria-labelledby="about-main-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Right column in DOM / Left column on desktop / Top on mobile */}
        <div className="w-full h-full flex flex-col justify-between gap-16 order-1 lg:order-2">
          {/* Primary Text Content with single H1 */}
          <div className="space-y-4">
            <h1
              id="about-main-heading"
              className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6"
            >
              Adults-Only Luxury Riad in the Heart of Marrakech Medina.
            </h1>
            <div className="text-riad_primary text-[14px] leading-[21px] font-light space-y-3">
              <p>
                <strong>Pure House Marrakech</strong> is a refined{" "}
                <strong>adults-only boutique riad</strong> located just{" "}
                <strong>steps away from Jemaa el-Fna</strong> in the historic Medina.
                Designed for discerning travelers seeking calm, privacy and
                elegance, our <strong>riad</strong> offers an{" "}
                <strong>intimate luxury experience</strong> with personalized
                service and an English-speaking team.
              </p>
              <p>
                A peaceful <strong>retreat in the Medina</strong>, ideal for
                couples and sophisticated guests. Explore our handcrafted{" "}
                <Link
                  href="/standard"
                  className="underline hover:text-riad_secondary transition-colors"
                >
                  Standard Rooms
                </Link>
                , serene{" "}
                <Link
                  href="/deluxe"
                  className="underline hover:text-riad_secondary transition-colors"
                >
                  Deluxe Rooms
                </Link>
                , and romantic{" "}
                <Link
                  href="/suites"
                  className="underline hover:text-riad_secondary transition-colors"
                >
                  Suites
                </Link>
                .{" "}
                <Link
                  href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
                  target="_blank"
                  rel="noopener"
                  className="underline font-normal hover:text-riad_secondary transition-colors"
                >
                  Book your stay directly
                </Link>{" "}
                for the best guaranteed rate.
              </p>
            </div>
          </div>

          {/* Small image */}
          <div className="relative w-full h-full overflow-hidden shadow-lg hidden lg:block min-h-[300px]">
            <Image
              src="/images/private-riad-marrakech-with-pool.webp"
              alt="Balcony perspective overlooking the emerald swimming pool and courtyard greenery at Pure House Marrakech"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Left column in DOM / Left on desktop / Second on mobile */}
        <div className="flex flex-col gap-10 lg:gap-16 order-2 lg:order-1">
          <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden">
            <Image
              src="/images/riad-in-marrakech.webp"
              alt="Sunlit central courtyard and tranquil plunge pool at Pure House Marrakech"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <h2 className="lg:text-[31px] lg:leading-[34px] text-[28px] leading-[30px] font-light text-riad_secondary text-center px-4 lg:px-36">
            Where Refined Interiors Meet Natural Harmony: A Sanctuary in the
            Medina.
          </h2>
          <div className="relative w-full h-[250px] overflow-hidden shadow-lg block lg:hidden">
            <Image
              src="/images/family-friendly-riad-marrakech.webp"
              alt="Serene lounge area with traditional Moroccan craft and architectural details"
              fill
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
