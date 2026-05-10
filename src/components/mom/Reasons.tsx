const REASONS = [
  "You loved me even before you met me.",
  "When the world got loud, you quietly gave me strength.",
  "One hug from you fixes my entire day.",
  "You believe in me more than I believe in myself.",
  "No matter where I go, the aroma of your kitchen will always mean 'home.'",
  "You laugh wholeheartedly even at my terrible jokes.",
  "You forgive me even before I say sorry.",
  "You turn ordinary days into celebrations.",
  "I sleep, while your prayers stay awake for me.",
  "You are my first friend, and my last too. 💗"
];

export function Reasons() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">INFINITE REASONS FOR LOVING YOU</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">I LOVE YOU!!</span>{" "}
            <span className="font-script">UNCONDITIONALLY!!</span>
          </h2>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {REASONS.map((r, i) => (
            <li
              key={i}
              className="glass rounded-2xl p-5 reveal flex items-start gap-4 transition hover:-translate-y-1 hover:shadow-dreamy"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-rose font-display text-primary-foreground shadow-glow">
                {i + 1}
              </span>
              <p className="text-lg text-foreground/85">{r}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
