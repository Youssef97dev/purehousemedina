import React from "react";
import Image from "next/image";

const categories = [
  {
    title: "Spa y Hammam Tradicional",
    subtitle:
      "Entra en nuestro hammam marroquí privado, un baño de vapor ancestral que forma parte esencial de la cultura local. Deja que el calor reconfortante purifique tu cuerpo y revitalice tus sentidos tras recorrer la animada Medina. Nuestras terapeutas te brindarán una suave exfoliación con jabón negro tradicional seguida de masajes con aceite de argán puro.",
    image: "/images/marrakech-riad-with-hammam-and-spa.webp",
    alt: "Hammam tradicional marroquí privado de mármol y zona de relajación en Pure House Marrakech",
  },
  {
    title: "Gastronomía Marroquí y Mediterránea",
    subtitle:
      "En Pure House Marrakech, cada plato es una cuidada experiencia culinaria elaborada con ingredientes frescos de mercado. Disfruta de un relajante desayuno servido en el patio o de una cena romántica a la luz de las velas en la terraza, disfrutando de los sabores más auténticos de Marrakech.",
    image: "/images/luxury-stay-in-marrakech-medina.webp",
    alt: "Desayuno marroquí y mediterráneo servido en el patio tradicional de Pure House Marrakech",
  },
];

const Features = () => {
  return (
    <section className="px-6 py-12" aria-labelledby="wellness-dining-es-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="wellness-dining-es-heading" className="sr-only">
          Bienestar y Gastronomía en Pure House Marrakech
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <div className="relative w-full h-72 md:h-96">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-4 text-left">
                <h3 className="text-[22px] leading-[30.1px] text-riad_primary font-light">
                  {category.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[21px] text-riad_primary md:pr-12 pr-0 text-justify font-light">
                  {category.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
