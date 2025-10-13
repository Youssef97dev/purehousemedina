import Image from "next/image";

const About = () => {
  return (
    <section className="w-full h-full px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Left big image */}
        <div className="flex flex-col gap-10 lg:gap-16 order-2 lg:order-1">
          <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden">
            <Image
              src="/riad/riad-1.jpg"
              alt="Luxury resort pool"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="lg:text-[31px] lg:leading-[34px] text-[28px] leading-[30px] font-light text-riad_secondary text-center px-4 lg:px-36">
            Where refined interiors meet natural harmony.
          </h2>
          <div className="relative w-full h-[250px] overflow-hidden shadow-lg block lg:hidden">
            <Image
              src="/riad/riad-14.jpg"
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
            <h2 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
              Embrace the timeless charm of Pure House Medina and let each
              moment inspire your soul.
            </h2>
            <p className="text-riad_primary text-[14px] leading-[21px] font-light">
              Immerse yourself in our philosophy of well-being, where uplifting
              atmosphere and a commitment to your health take center stage. Our
              serene and cozy atmosphere invites you to unwind and embrace
              tranquility. Adorned with captivating art, our spaces are
              thoughtfully designed to inspire and rejuvenate. Experience the
              genuine warmth of our attentive staff as they ensure you are
              looked after with the utmost care. Welcome to a haven where
              philosophy meets comfort, and every stay is a harmonious blend of
              relaxation and artistic expression.
            </p>
          </div>

          {/* Small image */}
          <div className="relative w-full h-full overflow-hidden shadow-lg hidden lg:block">
            <Image
              src="/riad/about-small.jpg"
              alt="Resort villa"
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
