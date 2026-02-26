import React from "react";

const Experience = () => {
  return (
    <section className="py-12 bg-[#F9F8F6] px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[31px] leading-[34px] mb-16 text-riad_primary">
          Une Expérience Sur Mesure pour les Couples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {/* Pillar 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center mb-6">
              <span className="text-stone-500 text-xl">🌿</span>
            </div>
            <h3 className="text-xl font-serif mb-4 text-riad_primary">
              Patio Paisible et Piscine
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Savourez un après-midi de quiétude au bord de {"l'eau"}. Pas
              {"d'éclaboussures,"} pas de bruit — juste {"l'atmosphère"} idéale
              pour lire, se détendre ou {"s'adonner"} à une conversation
              feutrée.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center mb-6">
              <span className="text-stone-500 text-xl">✨</span>
            </div>
            <h3 className="text-xl font-serif mb-4 text-riad_primary">
              Atmosphère Romantique
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Des matinées paisibles avec un petit-déjeuner servi à votre
              rythme, {"jusqu’aux dîners"} romantiques aux chandelles sur le
              toit-terrasse, chaque instant est pensé pour {"l'intimité"}.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center mb-6">
              <span className="text-stone-500 text-xl">🗝️</span>
            </div>
            <h3 className="text-xl font-serif mb-4 text-riad_primary">
              Un Cadre Élégant et Mature
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Partagez nos espaces avec des hôtes partageant les mêmes
              aspirations, qui privilégient le calme, {"l'intimité"} et le
              raffinement de {"l'hospitalité"} marocaine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
