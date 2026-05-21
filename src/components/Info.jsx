import Image from "next/image";

const Info = () => {
  return (
    <section className="w-full h-full px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Left big image */}
        <div className="w-full h-full space-y-4">
          <h2 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
            A Quiet Sanctuary Steps from Jemaa el-Fna
          </h2>
          <p className="text-riad_primary text-[14px] leading-[21px] font-light">
            Ideally situated just <strong>near Jemaa el-Fna</strong>,{" "}
            <strong>Pure House Marrakech</strong> offers the rare luxury of
            immediate access to the vibrant Medina while remaining a peaceful,{" "}
            <strong>adults-only haven</strong>.
            <br />
            <br />
            After exploring the nearby <strong>Koutoubia Mosque</strong> or{" "}
            <strong>Bahia Palace</strong>, retreat to the serenity of our patio.
            Cool off in the pool, relax on the terrace with a drink from the
            bar, or unwind in your <strong>air-conditioned suite</strong>{" "}
            featuring traditional tadelakt bathrooms and premium amenities.
            <br />
            <br />
            Start your day with a fresh,{" "}
            <strong>vegetarian continental breakfast</strong>, served at your
            rhythm. More than just a stay, it is a curated experience of privacy
            and Moroccan elegance.
          </p>
        </div>

        {/* Right column */}

        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
          <Image
            src="/images/luxury-riad-marrakech.webp"
            alt="Friendly concierge service at Pure House Marrakech"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
