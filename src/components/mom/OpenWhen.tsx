import { useState } from "react";

const LETTERS = [
  {
    when: "When you miss me...",
    note:
      "Close your eyes, Maa. Feel the warmth of my hand. I’m only a thought away. Distance exists only in kilometers — never in love."
  },

  {
    when: "When you feel tired...",
    note:
      "Sit down. Make yourself a cup of tea. Let the world take care of me for a few hours. You’ve carried both of us long enough."
  },

  {
    when: "When you feel proud of me...",
    note:
      "Everything I am is because of you. Every achievement of mine carries your fingerprints. This trophy belongs to you too, Mumma."
  },

  {
    when: "When you want to smile...",
    note:
      "Remember the day we burnt the dosa and laughed so hard the neighbors knocked on the door? Just remember that. Always that. 💗"
  },

  {
    when: "When you doubt yourself...",
    note:
      "You raised an entire human with love, patience, and grace. There is nothing — and no one — you cannot handle."
  },

  {
    when: "When you just need a hug...",
    note:
      "Hold yourself tightly. Consider that hug from me — wrapped with endless love too."
  }
];
export function OpenWhen() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">LETTERS</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">PLAY</span>{" "}
            <span className="font-script">…</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
           TAP AND READ
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LETTERS.map((l, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group relative h-64 perspective-1000 reveal text-left"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700"
                  style={{ transformStyle: "preserve-3d", transform: isOpen ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.93_0.06_10)] to-[oklch(0.88_0.08_320)] p-6 shadow-dreamy flex flex-col justify-between"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="text-5xl">💌</div>
                    <div>
                      <p className="font-script text-2xl text-primary">{l.when}</p>
                      <p className="mt-2 text-sm text-foreground/60 italic">TAP TO PLAY</p>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl glass-rose p-6 overflow-auto"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <p className="font-script text-xl text-primary mb-2">MY FAV PERSON,</p>
                    <p className="text-foreground/85 leading-relaxed">{l.note}</p>
                    <p className="mt-3 text-right font-script text-lg text-primary">— AAPKI SHOTTU💗</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
