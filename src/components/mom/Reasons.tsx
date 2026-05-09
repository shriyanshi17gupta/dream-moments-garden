const REASONS = [
  "You loved me before you met me.",
  "You taught me how to be brave when the world felt loud.",
  "Your hugs reset my whole day.",
  "You believe in me more than I believe in myself.",
  "Your kitchen smells like home no matter where I am.",
  "You laugh at my silly jokes — every. single. time.",
  "You forgive me before I even apologize.",
  "You make ordinary days feel like festivals.",
  "Your prayers protect me when I sleep.",
  "Tu meri pehli dost hai, meri aakhri bhi. 💗",
];

export function Reasons() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">an endless list</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">Reasons Why</span>{" "}
            <span className="font-script">I Love You</span>
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
