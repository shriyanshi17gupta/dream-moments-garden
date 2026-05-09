const THINGS = [
  { i: "🌱", t: "दयालु होना", d: "जब दुनिया न हो, तब भी।" },
  { i: "💪", t: "मज़बूत होना", d: "चुपचाप, शान से, पूरी जान से।" },
  { i: "🍳", t: "चाय बनाना", d: "तीन चम्मच प्यार। हमेशा।" },
  { i: "📿", t: "दुआ करना", d: "और जवाब को सुनना भी।" },
  { i: "💖", t: "माफ़ करना", d: "पहले ख़ुद को। बाक़ी सब फिर हो जाएगा।" },
  { i: "✨", t: "सपने देखना", d: "बड़े, ऊँचे, चमकदार।" },
];

export function ThingsTaught() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">तेरी दी हुई सीखें</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">जो तूने मुझे</span>{" "}
            <span className="font-script">सिखाया</span>
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
