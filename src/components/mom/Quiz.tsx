import { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

type Q = { q: string; options: string[]; answer: number; tag: string };

const QUESTIONS: Q[] = [
  { tag: "How Well Does Mom Know Me?", q: "What is my favorite food?", options: ["Maggi at midnight 🍜", "Mom's rajma chawal 🍛", "Pani puri 🥟", "Pasta 🍝"], answer: 1 },
  { tag: "Mother–Daughter Rapid Fire", q: "Who says sorry first after fights?", options: ["You always do, Mom 🥺", "Me, secretly", "Neither — we just hug", "Dad mediates 😅"], answer: 2 },
  { tag: "Guess The Memory", q: "What was our funniest memory?", options: ["Burning the dosa together", "Dancing in the rain", "Getting lost in the mall", "All of them, Maa 💕"], answer: 3 },
  { tag: "Who Said This?", q: "Who is more emotional?", options: ["You 💧", "Me 💧💧", "Tie — we cry at ads", "Definitely Dad"], answer: 2 },
  { tag: "Finish The Sentence", q: "Favorite movie we watched together?", options: ["Kuch Kuch Hota Hai", "K3G", "DDLJ", "All of them on loop ❤️"], answer: 3 },
  { tag: "Our Favorite Things", q: "My childhood nickname?", options: ["Munni", "Gudiya", "Pari", "Only you remember 💗"], answer: 3 },
  { tag: "This or That", q: "One thing we both always do together?", options: ["Sip chai at sunset ☕", "Gossip about everyone", "Cry during sad songs", "All of the above 💖"], answer: 3 },
  { tag: "Memory Timeline Challenge", q: "When did you first call me your best friend?", options: ["The day I was born", "When I turned 10", "Every single day", "Always, just unsaid"], answer: 2 },
];

function Confetti({ show }: { show: boolean }) {
  if (!show) return null;
  const pieces = Array.from({ length: 60 });
  const emojis = ["💗", "✨", "🌸", "🎀", "💖"];
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {pieces.map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: Math.random() * 100 + "%",
            top: "-5vh",
            fontSize: 14 + Math.random() * 18,
            animation: `confetti-fall ${2 + Math.random() * 2}s ease-in ${Math.random() * 0.5}s forwards`,
          }}
        >
          {emojis[i % emojis.length]}
        </span>
      ))}
    </div>
  );
}

export function Quiz() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [confetti, setConfetti] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (confetti) {
      const t = setTimeout(() => setConfetti(false), 2200);
      return () => clearTimeout(t);
    }
  }, [confetti]);

  const choose = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === QUESTIONS[i].answer) {
      setScore((s) => s + 1);
      setConfetti(true);
    }
    setTimeout(() => {
      setPicked(null);
      if (i + 1 >= QUESTIONS.length) setDone(true);
      else setI(i + 1);
    }, 1400);
  };

  const reset = () => { setI(0); setScore(0); setDone(false); setPicked(null); };

  return (
    <section id="game" className="relative px-4 py-24">
      <Confetti show={confetti} />
      <div className="mx-auto max-w-3xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">a little game for us</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">How well do we</span>{" "}
            <span className="font-script">know each other?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Eight tiny questions, infinite love. Confetti included. 🎀
          </p>
        </div>

        <div className="mt-12 reveal">
          {!done ? (
            <div key={i} className="glass-rose rounded-3xl p-7 md:p-10 animate-pop">
              <div className="flex items-center justify-between text-sm">
                <span className="rounded-full bg-primary/15 px-3 py-1 font-script text-base text-primary">
                  {QUESTIONS[i].tag}
                </span>
                <span className="font-display tracking-wider text-foreground/60">
                  {i + 1} / {QUESTIONS.length} · score {score}
                </span>
              </div>

              <h3 className="mt-5 text-2xl md:text-3xl">{QUESTIONS[i].q}</h3>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {QUESTIONS[i].options.map((opt, idx) => {
                  const isAns = idx === QUESTIONS[i].answer;
                  const isPicked = picked === idx;
                  const state =
                    picked === null
                      ? "border-primary/20 bg-white/60 hover:bg-white hover:scale-[1.02]"
                      : isAns
                        ? "border-emerald-300 bg-emerald-50"
                        : isPicked
                          ? "border-rose-300 bg-rose-50"
                          : "border-primary/10 bg-white/40 opacity-60";
                  return (
                    <button
                      key={idx}
                      onClick={() => choose(idx)}
                      className={`relative rounded-2xl border-2 p-4 text-left transition shadow-soft ${state}`}
                    >
                      <span className="text-base">{opt}</span>
                      {picked !== null && isAns && (
                        <Heart className="absolute -right-2 -top-2 size-7 fill-rose-400 text-rose-400 animate-pop" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="glass-rose rounded-3xl p-10 text-center animate-pop">
              <Sparkles className="mx-auto size-10 text-primary" />
              <h3 className="mt-3 text-3xl md:text-4xl text-gradient-rose">
                {score >= QUESTIONS.length - 1 ? "We know each other by heart 💗" : "Some answers can't be scored — only felt 💖"}
              </h3>
              <p className="mt-4 font-script text-2xl text-primary">
                You got {score} of {QUESTIONS.length}, but Maa — you got all of me, always.
              </p>
              <p className="mx-auto mt-4 max-w-xl text-foreground/75">
                Whether you answered them right or not, you've already lived every moment with me.
                Thank you for being my home, my safe place, my forever.
              </p>
              <button onClick={reset} className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-rose px-6 py-3 text-primary-foreground shadow-dreamy transition hover:scale-105">
                Play again 💕
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
