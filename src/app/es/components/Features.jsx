import React from "react";
import Image from "next/image";

const categories = [
  {
    title: "Spa & Bienestar",
    subtitle:
      "Entra en nuestro hammam marroquí, un ancestral baño de vapor que forma parte de la cultura del país desde hace siglos. Deja que el calor relajante del vapor te envuelva, purifique tu cuerpo y revitalice tus sentidos. Nuestros terapeutas experimentados te ofrecerán una suave exfoliación con el tradicional jabón negro marroquí, seguida de un refrescante enjuague con agua pura.",
    image: "/images/marrakech-riad-with-hammam-and-spa.webp",
    alt: "Experiencia de bienestar y relajación en un riad de lujo en Marrakech",
  },
  {
    title: "Gastronomía",
    subtitle:
      "En Pure House Marrakech, los huéspedes pueden disfrutar de deliciosos platos marroquíes y mediterráneos preparados con ingredientes frescos. Disfruta de un desayuno tranquilo en el jardín o de una cena relajante en la terraza, donde cada comida está cuidadosamente concebida para despertar tus sentidos, crear momentos memorables y ofrecerte una auténtica muestra del encanto culinario de Marrakech.",
    image: "/images/luxury-stay-in-marrakech-medina.webp",
    alt: "Riad de lujo cerca de la plaza Jemaa el-Fna en Marrakech",
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
                className="object-cover"
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
