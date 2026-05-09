import { useState } from "react";
import { Gift, Heart } from "lucide-react";

export function HiddenSurprise() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl text-center reveal">
        <p className="font-script text-2xl text-primary">psst...</p>
        <h2 className="mt-2 text-4xl md:text-6xl">
          <span className="text-gradient-rose">A little secret</span>{" "}
          <span className="font-script">just for you</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          There's a button below. It hides the most important words on this page.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="group relative mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-rose px-8 py-5 text-lg text-primary-foreground shadow-dreamy transition hover:scale-105"
        >
          <Gift className="size-6 transition group-hover:rotate-12" />
          <span>Open my surprise</span>
          <span className="absolute -inset-2 -z-10 rounded-full bg-gradient-rose opacity-40 blur-2xl animate-shimmer" />
        </button>

        {open && (
          <div className="fixed inset-0 z-[60] grid place-items-center bg-black/40 backdrop-blur-sm p-4 animate-fade-up" onClick={() => setOpen(false)}>
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl glass-rose p-8 text-center shadow-dreamy animate-pop"
            >
              <Heart className="mx-auto size-12 fill-rose-400 text-rose-400 animate-pulse-soft" />
              <h3 className="mt-4 text-3xl md:text-4xl text-gradient-rose">I love you, Maa.</h3>
              <p className="mt-4 font-display text-lg italic text-foreground/85 leading-relaxed">
                Not because today is a special day — but because every day with you in it
                already is. Thank you for being my first home, my softest place,
                my loudest cheerleader, my forever.
              </p>
              <p className="mt-4 font-script text-2xl text-primary">Tu meri duniya hai. 💗</p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full glass px-5 py-2 text-primary transition hover:scale-105"
              >
                close gently
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
