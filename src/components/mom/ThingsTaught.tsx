const THINGS = [
  { i: "🌱", t: "How to be kind", d: "Even when the world isn't." },
  { i: "💪", t: "How to be strong", d: "Quietly, gracefully, fiercely." },
  { i: "🍳", t: "How to make chai", d: "Three teaspoons of love. Always." },
  { i: "📿", t: "How to pray", d: "And how to listen for the answer." },
  { i: "💖", t: "How to forgive", d: "Yourself first. The rest will follow." },
  { i: "✨", t: "How to dream", d: "Bigger, louder, brighter." },
];

export function ThingsTaught() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">your gifts to me</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">Things You</span>{" "}
            <span className="font-script">Taught Me</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THINGS.map((t, i) => (
            <div
              key={i}
              className="reveal glass-rose rounded-3xl p-6 text-center shadow-soft transition hover:-translate-y-2 hover:shadow-dreamy"
            >
              <div className="text-5xl animate-pulse-soft">{t.i}</div>
              <h3 className="mt-3 font-display text-2xl">{t.t}</h3>
              <p className="mt-2 text-foreground/75">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
