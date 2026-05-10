import m1 from "@/assets/mom/m1.jpg";
import m2 from "@/assets/mom/m2.jpeg";
import m3 from "@/assets/mom/m3.jpeg";
import m4 from "@/assets/mom/m4.jpeg";
import m5 from "@/assets/mom/m5.jpg";
import m6 from "@/assets/mom/m6.jpeg";

const PHOTOS = [
  { src: m1, caption: "जंगली फूलों के बीच, हाथों में हाथ डाले 🌷" },
  { src: m2, caption: "इतवार की महक — कुकीज़ और तू 🍪" },
  { src: m3, caption: "मेरी हर लट में तूने प्यार गूँथा है" },
  { src: m4, caption: "तेरी हँसी मेरा सबसे प्यारा गाना है 🦋" },
  { src: m5, caption: "गुलाब — क्योंकि गुलाबी रंग तुझ पर खूब फबता है" },
  { src: m6, caption: "हमारा अपना डांस फ्लोर 💃" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">हमारी यादों का एल्बम</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">हमारे ख़ूबसूरत पल</span>{" "}
            <span className="font-script">साथ-साथ</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            हमारी कहानी के कुछ पन्ने — हर कोना प्यार से चिपका हुआ।
          </p>
        </div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {PHOTOS.map((p, i) => {
            const tapes = [
              "linear-gradient(135deg, oklch(0.92 0.06 340 / 0.85), oklch(0.88 0.08 320 / 0.85))",
              "linear-gradient(135deg, oklch(0.92 0.08 50 / 0.85), oklch(0.9 0.06 30 / 0.85))",
              "repeating-linear-gradient(45deg, oklch(0.95 0.05 340 / 0.85) 0 6px, oklch(0.88 0.07 5 / 0.85) 6px 12px)",
            ];
            return (
              <figure
                key={i}
                className="polaroid relative mb-6 inline-block w-full break-inside-avoid reveal"
                style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3))}deg)` }}
              >
                <span
                  aria-hidden
                  className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-[-4deg] rounded-[2px] shadow-soft"
                  style={{ background: tapes[i % tapes.length], opacity: 0.9 }}
                />
                <img src={p.src} alt={p.caption} loading="lazy" className="block aspect-[4/5] w-full rounded-sm object-cover" />
                <figcaption className="mt-3 px-1 text-center font-script text-xl text-foreground/80">
                  {p.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
