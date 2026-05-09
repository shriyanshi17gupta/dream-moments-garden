import { useState } from "react";
import { Gift, Heart } from "lucide-react";

export function HiddenSurprise() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl text-center reveal">
        <p className="font-script text-2xl text-primary">सुन ना...</p>
        <h2 className="mt-2 text-4xl md:text-6xl">
          <span className="text-gradient-rose">एक छोटा सा राज़</span>{" "}
          <span className="font-script">सिर्फ़ तेरे लिए</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          नीचे एक बटन है। उसमें इस पूरे पन्ने के सबसे ज़रूरी शब्द छुपे हैं।
        </p>

        <button
          onClick={() => setOpen(true)}
          className="group relative mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-rose px-8 py-5 text-lg text-primary-foreground shadow-dreamy transition hover:scale-105"
        >
          <Gift className="size-6 transition group-hover:rotate-12" />
          <span>मेरा सरप्राइज़ खोल</span>
          <span className="absolute -inset-2 -z-10 rounded-full bg-gradient-rose opacity-40 blur-2xl animate-shimmer" />
        </button>

        {open && (
          <div className="fixed inset-0 z-[60] grid place-items-center bg-black/40 backdrop-blur-sm p-4 animate-fade-up" onClick={() => setOpen(false)}>
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl glass-rose p-8 text-center shadow-dreamy animate-pop"
            >
              <Heart className="mx-auto size-12 fill-rose-400 text-rose-400 animate-pulse-soft" />
              <h3 className="mt-4 text-3xl md:text-4xl text-gradient-rose">आय लव यू, माँ।</h3>
              <p className="mt-4 font-display text-lg italic text-foreground/85 leading-relaxed">
                इसलिए नहीं कि आज ख़ास दिन है — बल्कि इसलिए कि तू जिस दिन में हो,
                वो दिन ख़ुद ब ख़ुद ख़ास हो जाता है। तू मेरा पहला घर है, सबसे नरम पनाह है,
                सबसे ज़ोरदार चीयरलीडर है, मेरा हमेशा है।
              </p>
              <p className="mt-4 font-script text-2xl text-primary">तू मेरी दुनिया है। 💗</p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full glass px-5 py-2 text-primary transition hover:scale-105"
              >
                प्यार से बंद करें
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
