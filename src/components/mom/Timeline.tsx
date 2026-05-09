const ITEMS = [
  { year: "तब", title: "पहली धड़कन", text: "तूने मुझे पहली बार गोद में लिया और तय कर लिया कि मैं तेरी हमेशा हूँ।" },
  { year: "नन्ही उम्र", title: "लोरियाँ", text: "तेरी आवाज़ पहला गीत थी जिस पर मैं सोई।" },
  { year: "स्कूल के दिन", title: "टिफ़िन में प्यार", text: "कटे हुए फल, छुपे हुए नोट्स, 'ज़रूरत पड़े तो' एक्स्ट्रा पराठा।" },
  { year: "तीख़ी उम्र", title: "लड़ाइयाँ, फिर झप्पी", text: "लड़े। रोए। चाय पर मान गए। हमेशा चाय पर।" },
  { year: "अब", title: "बेस्ट फ़्रेंड्स", text: "मैं तुझे सब बताती हूँ। लगभग सब। ठीक है — ज़्यादातर। 😅" },
  { year: "हमेशा", title: "हमेशा तेरी", text: "मैं चाहे जितनी बड़ी हो जाऊँ, हमेशा तेरी छोटी सी बेटी रहूँगी।" },
];

export function Timeline() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">अब तक की हमारी कहानी</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">हमारी यादों का</span>{" "}
            <span className="font-script">सफ़र</span>
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2" />
          <ol className="space-y-10">
            {ITEMS.map((it, i) => (
              <li
                key={i}
                className={`reveal relative flex flex-col md:items-center md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-rose rounded-2xl p-5 shadow-soft">
                    <p className="font-script text-xl text-primary">{it.year}</p>
                    <h3 className="mt-1 text-xl font-display">{it.title}</h3>
                    <p className="mt-2 text-foreground/80">{it.text}</p>
                  </div>
                </div>
                <span className="absolute left-4 top-3 grid size-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-rose shadow-glow md:left-1/2" />
                <div className="hidden md:block md:w-1/2" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
