import Image from "next/image";

const About = () => {
  return (
    <section className="w-full h-full px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Left big image */}
        <div className="flex flex-col gap-10 lg:gap-16 order-2 lg:order-1">
          <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden">
            <Image
              src="/riad-marrakech/riad-in-marrakech.webp"
              alt="Experiencing an authentic Moroccan Riad stay in Marrakech"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="lg:text-[31px] lg:leading-[34px] text-[28px] leading-[30px] font-light text-riad_secondary text-center px-4 lg:px-36">
            Where Refined Interiors Meet Natural Harmony: A Sanctuary in the
            Medina.
          </h2>
          <div className="relative w-full h-[250px] overflow-hidden shadow-lg block lg:hidden">
            <Image
              src="/riad-marrakech/family-friendly-riad-marrakech.webp"
              alt="Resort villa"
              fill
              className="object-cover object-bottom"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="w-full h-full flex flex-col justify-between gap-16 order-1 lg:order-2">
          {/* Text content */}
          <div className="space-y-4">
            <h1 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
              Adults-Only Luxury Riad in the Heart of Marrakech Medina.
            </h1>
            <p className="text-riad_primary text-[14px] leading-[21px] font-light">
              <strong>Pure House Marrakech</strong> is a refined{" "}
              <strong>adults-only boutique riad</strong>
              located just <strong>steps away from Jemaa el-Fna</strong>.
              Designed for discerning travelers seeking calm, privacy and
              elegance, our <strong>riad</strong> offers an
              <strong>intimate luxury experience</strong> with personalized
              service and an English-speaking team. A peaceful{" "}
              <strong>retreat in the Medina</strong>, ideal for couples and
              sophisticated guests.
            </p>
          </div>

          {/* Small image */}
          <div className="relative w-full h-full overflow-hidden shadow-lg hidden lg:block">
            <Image
              src="/riad-marrakech/private-riad-marrakech-with-pool.webp"
              alt="View of the courtyard pool from the balcony of a Marrakech hotel"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
