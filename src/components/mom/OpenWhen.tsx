import { useState } from "react";

const LETTERS = [
  { when: "Open when... you miss me", note: "Close your eyes, Maa. Feel the warmth of my hand in yours. I am only ever a thought away. The distance is just kilometres — never love." },
  { when: "Open when... you feel tired", note: "Sit down. Make yourself chai. Let me carry the world for a few hours. You've held it up long enough for both of us." },
  { when: "Open when... you're proud of me", note: "Whatever I am, I am because of you. Every win has your fingerprints on it. This is your trophy too, Mumma." },
  { when: "Open when... you need to smile", note: "Remember the day we burnt the dosas and laughed till the neighbours knocked? That. Always that. 💗" },
  { when: "Open when... you doubt yourself", note: "You raised a whole human with love, patience, and grace. There is nothing — nothing — you can't do." },
  { when: "Open when... you just want a hug", note: "Hug yourself tight. That hug is from me. And it's coming with extra pyaar." },
];

export function OpenWhen() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">tiny love letters</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">Open When</span>{" "}
            <span className="font-script">…</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Tap any envelope. Read it whenever your heart needs it.
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
                  {/* Front - Envelope */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.93_0.06_10)] to-[oklch(0.88_0.08_320)] p-6 shadow-dreamy flex flex-col justify-between"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="text-5xl">💌</div>
                    <div>
                      <p className="font-script text-2xl text-primary">{l.when}</p>
                      <p className="mt-2 text-sm text-foreground/60 italic">tap to open</p>
                    </div>
                  </div>
                  {/* Back - Letter */}
                  <div
                    className="absolute inset-0 rounded-2xl glass-rose p-6 overflow-auto"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <p className="font-script text-xl text-primary mb-2">Dear Maa,</p>
                    <p className="text-foreground/85 leading-relaxed">{l.note}</p>
                    <p className="mt-3 text-right font-script text-lg text-primary">— me 💗</p>
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
