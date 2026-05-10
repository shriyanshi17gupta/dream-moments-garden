const THINGS = [
  {
    i: "🌱",
    t: "Being kind",
    d: "Even when the world isn’t."
  },
  {
    i: "💪",
    t: "Being strong",
    d: "Quietly, gracefully, with all your heart."
  },
  {
    i: "🍳",
    t: "Making tea",
    d: "With three spoons of love. Always."
  },
  {
    i: "📿",
    t: "Praying",
    d: "And listening for the answers too."
  },
  {
    i: "💖",
    t: "Forgiving", 
    d: "First yourself. Everything else can follow."
  },
  {
    i: "✨",
    t: "Dreaming",
    d: "Big, fearless, and full of light."
  }
];

export function ThingsTaught() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">TERI DI HUI SEEKH</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">JO AAPNE MUJHE </span>{" "}
            <span className="font-script">SIKHAYI</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THINGS.map((item, i) => (
            <div
              key={i}
              className="reveal glass-rose rounded-3xl p-6 text-center shadow-soft transition hover:-translate-y-2 hover:shadow-dreamy"
            >
              <div className="text-5xl animate-pulse-soft">{item.i}</div>
              <h3 className="mt-3 font-display text-2xl">{item.t}</h3>
              <p className="mt-2 text-foreground/75">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
