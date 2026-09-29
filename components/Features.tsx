const features = [
  {
    title: "RAG-Powered",
    description: "Contextual answers from your project documentation.",
  },
  {
    title: "Multi-format",
    description: "PDF, DOCX, XLSX and other project documents.",
  },
  {
    title: "Enterprise Ready",
    description: "Secure and robust architecture for technical teams.",
  },
  {
    title: "AI Insights",
    description: "Predictive risk scoring powered by AI.",
  },
];

export default function Features() {
  return (
    <section className="bg-black px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Innovation
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Intelligent Risk Assessment
          </h2>

          <p className="mt-5 text-gray-400">
            Transform software quality and release decisions
            with intelligent AI-powered insights.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >

              <div className="mb-6 h-12 w-12 rounded-xl bg-cyan-400/10" />

              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}