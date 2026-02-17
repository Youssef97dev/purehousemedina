import React from "react";

const Experience = () => {
  return (
    <section className="py-12 bg-[#F9F8F6] px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[31px] leading-[34px] mb-16 text-riad_primary">
          A Tailored Experience for Couples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {/* Pillar 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center mb-6">
              <span className="text-stone-500 text-xl">🌿</span>
            </div>
            <h3 className="text-xl font-serif mb-4 text-riad_primary">
              Serene Courtyard & Pool
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Enjoy a peaceful afternoon by the water. No splashing, no
              noise—just the perfect atmosphere for reading, relaxing, or quiet
              conversation.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center mb-6">
              <span className="text-stone-500 text-xl">✨</span>
            </div>
            <h3 className="text-xl font-serif mb-4 text-riad_primary">
              Romantic Atmosphere
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              From undisturbed mornings with breakfast served at your rhythm to
              romantic candlelit dinners on the rooftop, every moment is curated
              for intimacy.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center mb-6">
              <span className="text-stone-500 text-xl">🗝️</span>
            </div>
            <h3 className="text-xl font-serif mb-4 text-riad_primary">
              Mature & Elegant Setting
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Share our spaces with like-minded guests who value calm, privacy,
              and refined Moroccan hospitality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
