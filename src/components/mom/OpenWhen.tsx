import { useState } from "react";

const LETTERS = [
  { when: "जब तू मुझे याद करे...", note: "आँखें बंद कर, माँ। मेरे हाथ की गरमाहट महसूस कर। मैं बस एक ख्याल की दूरी पर हूँ। दूरी सिर्फ़ किलोमीटरों में होती है — प्यार में नहीं।" },
  { when: "जब तू थक जाए...", note: "बैठ जा। एक कप चाय बना। कुछ घंटे दुनिया मुझे सँभालने दे। तूने अब तक हम दोनों के लिए इसे काफ़ी सँभाला है।" },
  { when: "जब तुझे मुझ पर गर्व हो...", note: "मैं जो भी हूँ, तुझसे हूँ। मेरी हर जीत पर तेरी उँगलियों के निशान हैं। ये ट्रॉफी तेरी भी है, मम्मा।" },
  { when: "जब तुझे मुस्कुराना हो...", note: "याद है वो दिन जब हमने डोसा जला दिया था और इतना हँसे कि पड़ोसियों ने दरवाज़ा खटखटा दिया? बस वही याद। हमेशा वही। 💗" },
  { when: "जब तुझे ख़ुद पर शक हो...", note: "तूने प्यार, सब्र और शान से एक पूरा इंसान बड़ा किया है। ऐसी कोई चीज़ नहीं — कोई नहीं — जो तू न कर सके।" },
  { when: "जब तुझे बस एक झप्पी चाहिए...", note: "ख़ुद को कस के गले लगा। वो झप्पी मेरी तरफ़ से है। और साथ में ढेर सारा प्यार भी।" },
];

export function OpenWhen() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">नन्हें प्रेम पत्र</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">खोलना जब</span>{" "}
            <span className="font-script">…</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            किसी भी लिफ़ाफ़े पर टैप कर। जब दिल को ज़रूरत हो, तब पढ़ लेना।
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
                      <p className="mt-2 text-sm text-foreground/60 italic">खोलने के लिए टैप करें</p>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl glass-rose p-6 overflow-auto"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <p className="font-script text-xl text-primary mb-2">प्यारी माँ,</p>
                    <p className="text-foreground/85 leading-relaxed">{l.note}</p>
                    <p className="mt-3 text-right font-script text-lg text-primary">— तेरी बेटी 💗</p>
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
