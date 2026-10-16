import Image from "next/image";

const Info = () => {
  return (
    <section className="w-full h-full px-6 py-12" aria-labelledby="sanctuary-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Left column */}
        <div className="w-full h-full space-y-4">
          <h2
            id="sanctuary-heading"
            className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6"
          >
            A Quiet Sanctuary Steps from Jemaa el-Fna
          </h2>
          <div className="text-riad_primary text-[14px] leading-[21px] font-light space-y-3">
            <p>
              Ideally situated just <strong>near Jemaa el-Fna</strong> (500 meters),{" "}
              <strong>Pure House Marrakech</strong> offers the rare luxury of
              immediate access to the vibrant Medina while remaining a peaceful,{" "}
              <strong>adults-only haven</strong>.
            </p>
            <p>
              After exploring the nearby <strong>Koutoubia Mosque</strong> or{" "}
              <strong>Bahia Palace</strong> (both less than 1 km away), retreat to
              the serenity of our patio. Cool off in the pool, relax on the terrace
              with a drink from the bar, or unwind in your{" "}
              <strong>air-conditioned suite</strong> featuring traditional tadelakt
              bathrooms and premium amenities.
            </p>
            <p>
              Start your day with a fresh,{" "}
              <strong>vegetarian continental breakfast</strong>, served at your
              rhythm. More than just a stay, it is a curated experience of privacy
              and Moroccan elegance.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
          <Image
            src="/images/luxury-riad-marrakech.webp"
            alt="Warm and personalized guest reception at Pure House Marrakech boutique riad"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
