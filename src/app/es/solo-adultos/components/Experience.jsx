import React from "react";

const Experience = () => {
  return (
    <section className="py-12 bg-[#F9F8F6] px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[31px] leading-[34px] mb-16 text-riad_primary">
          Una Experiencia Diseñada para Parejas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {/* Pillar 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center mb-6">
              <span className="text-stone-500 text-xl">🌿</span>
            </div>
            <h3 className="text-xl font-serif mb-4 text-riad_primary">
              Patio Sereno y Piscina
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Disfruta de una tarde tranquila junto al agua. Sin chapuzones ni
              ruido, solo el ambiente perfecto para leer, relajarte o disfrutar
              de una conversación tranquila.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center mb-6">
              <span className="text-stone-500 text-xl">✨</span>
            </div>
            <h3 className="text-xl font-serif mb-4 text-riad_primary">
              Ambiente Romántico
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Desde mañanas tranquilas con el desayuno servido a tu ritmo hasta
              románticas cenas a la luz de las velas en la terraza de la azotea,
              cada momento está cuidadosamente diseñado para la intimidad.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center mb-6">
              <span className="text-stone-500 text-xl">🗝️</span>
            </div>
            <h3 className="text-xl font-serif mb-4 text-riad_primary">
              Entorno Maduro y Elegante
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Comparte nuestros espacios con huéspedes que valoran la calma, la
              privacidad y una refinada hospitalidad marroquí.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
