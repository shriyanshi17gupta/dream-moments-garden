import { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

type Q = { q: string; options: string[]; answer: number; tag: string };

const QUESTIONS: Q[] = [
  { tag: "माँ मुझे कितना जानती है?", q: "खुशी का फेवरेट खाना क्या है?", options: ["पानी पुरी 🥟", "मैगी 🍜", "मम्मी के हाथ का पिज़्ज़ा 🍕", "मम्मी के हाथ की भिंडी की सब्ज़ी 💚"], answer: 3 },
  { tag: "प्यार का नाम", q: "खुशी को मम्मी प्यार से क्या बोलती है?", options: ["परी 🧚‍♀️", "खुशी 🌸", "शोट्टू 🐣", "रानी 👑"], answer: 2 },
  { tag: "दिल की बात", q: "खुशी को सबसे ज़्यादा क्या पसंद है?", options: ["डांस 💃", "कपड़े 👗", "खाना 🍱", "मम्मी ❤️"], answer: 3 },
  { tag: "खास दिन", q: "खुशी का बर्थडे कब आता है?", options: ["12 जनवरी 2004 🎂", "17 अगस्त 2006 🎉", "2 सितंबर 2001 🎈", "19 अक्टूबर 2003 🎁"], answer: 1 },
  { tag: "मम्मी का अंदाज़ 😜", q: "आप खुशी को किससे मारते हो?", options: ["डंडे से 🥢", "इंची-टेप से 📏", "बेलन से 🥖", "जो हाथ में मिल जाए 🤣"], answer: 3 },
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
          <p className="font-script text-2xl text-primary">हम दोनों के लिए एक छोटा सा खेल</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">हम एक-दूजे को</span>{" "}
            <span className="font-script">कितना जानते हैं?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            आठ छोटे सवाल, बेहिसाब प्यार। और हाँ — कन्फेटी फ्री में! 🎀
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
                  {i + 1} / {QUESTIONS.length} · स्कोर {score}
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
                {score >= QUESTIONS.length - 1 ? "हम एक-दूजे को दिल से जानते हैं 💗" : "कुछ जवाब गिने नहीं जाते — बस महसूस होते हैं 💖"}
              </h3>
              <p className="mt-4 font-script text-2xl text-primary">
                {QUESTIONS.length} में से {score} सही, पर माँ — तूने तो मेरा हर पल जिया है।
              </p>
              <p className="mx-auto mt-4 max-w-xl text-foreground/75">
                सही हो या ग़लत, फ़र्क नहीं पड़ता। तू मेरा घर है, मेरी पनाह है, मेरा हमेशा है।
                शुक्रिया, माँ — हर चीज़ के लिए।
              </p>
              <button onClick={reset} className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-rose px-6 py-3 text-primary-foreground shadow-dreamy transition hover:scale-105">
                फिर से खेलें 💕
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
