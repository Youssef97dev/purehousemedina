import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Spa & Wellness",
    subtitle:
      "Step into our Moroccan hammam, a time-honored Moroccan steam bath that has been an integral part of the country's culture for centuries. Let the warm, soothing steam envelop you, as it cleanses your body and revitalizes your senses. Our skilled therapists will pamper you with a gentle exfoliation using traditional black soap, followed by a refreshing rinse with pure water.",
    image: "/riad/spa-and-wellness.jpg", // replace with your image path
    class: "object-center",
  },
  {
    title: "Dining",
    subtitle:
      "At Pure House Marrakech, guests can savor delicious Moroccan and Mediterranean dishes made with the freshest ingredients, enjoying a leisurely breakfast in the garden or a relaxing dinner on the terrace, where every meal is thoughtfully prepared to delight the senses, create memorable moments, and offer a true taste of Marrakech’s culinary charm.",
    image: "/riad/riad-hero-4.jpg",
    class: "object-center",
  },
];

const Features = () => {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-72 md:h-96">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className={`object-cover ${category.class}`}
              />
            </div>

            {/* Text */}
            <div className="mt-4 text-left">
              <h3 className="text-[22px] leading-[30.1px] text-riad_primary">
                {category.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[21px] text-riad_primary md:pr-32 pr-0 text-justify font-light">
                {category.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
