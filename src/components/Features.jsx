import React from "react";
import Image from "next/image";

const categories = [
  {
    title: "Private Spa & Traditional Hammam in Marrakech",
    subtitle:
      "Step into our authentic Moroccan hammam, a serene sanctuary where centuries-old wellness rituals come to life. Let the soothing steam melt away the vibrant energy of the Medina while our expert therapists pamper you. Experience a deep, purifying cleanse with traditional black soap exfoliation, followed by bespoke treatments using pure argan oil. An intimate retreat designed to revitalize your body and calm your mind.",
    subtitle_2: "",
    image: "/images/marrakech-riad-with-hammam-and-spa.webp", // replace with your image path
    alt: "Lifestyle photography of a luxury stay in Marrakech",
    class: "object-center",
  },
  {
    title: "Culinary Excellence: Moroccan & Mediterranean Dining",
    subtitle:
      "Savor the authentic taste of Morocco fused with refined Mediterranean influences. At Pure House Marrakech, every dish is a curated culinary experience crafted from the freshest local market ingredients.",
    subtitle_2:
      "Enjoy a lingering, peaceful breakfast in our lush courtyard, or share a romantic, candlelit dinner on the rooftop terrace. Thoughtfully prepared and impeccably served, our dining experience offers a true, private taste of Marrakech’s charm.",
    image: "/images/luxury-stay-in-marrakech-medina.webp",
    alt: "Luxury Riad located walking distance from Jemaa El-Fna square",
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
                alt={category.alt}
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
                <br />
                {category.subtitle_2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
