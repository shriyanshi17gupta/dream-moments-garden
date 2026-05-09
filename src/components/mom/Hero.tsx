import { useEffect, useState } from "react";
import hero from "@/assets/mom/hero.jpg";

const QUOTES = [
  "Maa... woh ek lafz jisme saari duniya basti hai 💗",
  "A mother's love is the heartbeat of home.",
  "Tu hai toh main hoon — meri pyaari Maa.",
  "She is sunshine wrapped in a saree. ✨",
];

export function Hero() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = QUOTES[i];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text.length < full.length) {
      t = setTimeout(() => setText(full.slice(0, text.length + 1)), 55);
    } else if (!del && text.length === full.length) {
      t = setTimeout(() => setDel(true), 2400);
    } else if (del && text.length > 0) {
      t = setTimeout(() => setText(full.slice(0, text.length - 1)), 25);
    } else {
      t = setTimeout(() => { setDel(false); setI((i + 1) % QUOTES.length); }, 400);
    }
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, oklch(0.95 0.08 340 / 0.7), transparent 55%), radial-gradient(ellipse at 80% 70%, oklch(0.9 0.08 50 / 0.6), transparent 60%), radial-gradient(ellipse at 50% 100%, oklch(0.9 0.08 320 / 0.5), transparent 65%)",
        }}
      />

      <div className="relative grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="font-script text-3xl text-primary animate-fade-up">Happy Mother's Day</p>
          <h1 className="mt-3 text-5xl leading-tight md:text-7xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <span className="text-gradient-rose">To The Best Mom</span>
            <br />
            <span className="font-script text-foreground/80">in the world</span>{" "}
            <span className="inline-block animate-pulse-soft">❤️</span>
          </h1>

          <div className="mt-8 min-h-[3.5rem] glass-rose mx-auto md:mx-0 inline-block rounded-2xl px-5 py-3 max-w-xl">
            <p className="font-display text-lg italic text-foreground/85 md:text-xl">
              {text}
              <span className="ml-0.5 inline-block w-0.5 bg-primary align-middle" style={{ height: "1.1em", animation: "type-cursor 1s steps(1) infinite" }} />
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#gallery" className="group inline-flex items-center gap-2 rounded-full bg-gradient-rose px-6 py-3 text-primary-foreground shadow-dreamy transition hover:scale-105">
              <span>Open the scrapbook</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#game" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-primary transition hover:scale-105">
              Play our game 🎀
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-rose opacity-30 blur-2xl animate-shimmer" />
          <div className="relative overflow-hidden rounded-[2rem] glass shadow-dreamy">
            <img src={hero} alt="A mother and daughter sharing a tender embrace among blooming roses" width={1536} height={1024} className="aspect-[4/3] w-full object-cover" />
            <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, oklch(0.95 0.06 340 / 0.5))" }} />
          </div>
          <div className="absolute -bottom-4 -right-4 rotate-6 rounded-2xl glass-rose px-4 py-2 font-script text-xl text-primary shadow-soft">
            forever yours, beta 💌
          </div>
        </div>
      </div>
    </section>
  );
}
