export default function WhyBookDirect({ title, subtitle, text, benefits }) {
  return (
    <section className="bg-[#f7f5f0] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-light tracking-wide text-neutral-900 md:text-4xl">
            {subtitle}
          </h2>

          <p className="mt-4 text-sm leading-7 text-neutral-600">{text}</p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 gap-px bg-neutral-200 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#f7f5f0] p-7 md:p-8">
              <div className="flex gap-4">
                <span className="mt-1 text-sm text-neutral-500">✓</span>

                <div>
                  <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-neutral-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
