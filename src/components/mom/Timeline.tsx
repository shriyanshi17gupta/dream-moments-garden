const ITEMS = [
  { year: "Then", title: "First Heartbeat", text: "You held me for the first time and decided I was your forever." },
  { year: "Tiny", title: "Lullabies & Lori", text: "Your voice was the first song I ever fell asleep to." },
  { year: "School Days", title: "Tiffin Box of Love", text: "Cut fruits, hidden notes, extra paratha 'just in case'." },
  { year: "Teen Era", title: "The Fights, The Hugs", text: "We fought. We cried. We made up over chai. Always chai." },
  { year: "Now", title: "Best Friends", text: "I tell you everything. Almost. Okay — most things. 😅" },
  { year: "Forever", title: "Always Yours", text: "No matter how old I grow, I'll always be your little girl." },
];

export function Timeline() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">our story so far</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">A Little Timeline</span>{" "}
            <span className="font-script">of us</span>
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2" />
          <ol className="space-y-10">
            {ITEMS.map((it, i) => (
              <li
                key={i}
                className={`reveal relative flex flex-col md:items-center md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-rose rounded-2xl p-5 shadow-soft">
                    <p className="font-script text-xl text-primary">{it.year}</p>
                    <h3 className="mt-1 text-xl font-display">{it.title}</h3>
                    <p className="mt-2 text-foreground/80">{it.text}</p>
                  </div>
                </div>
                <span className="absolute left-4 top-3 grid size-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-rose shadow-glow md:left-1/2" />
                <div className="hidden md:block md:w-1/2" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
