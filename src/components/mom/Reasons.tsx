const REASONS = [
  "तूने मुझसे मिलने से पहले ही मुझसे प्यार किया।",
  "जब दुनिया शोर करती है, तूने मुझे चुपके से हिम्मत दी।",
  "तेरी एक झप्पी से मेरा पूरा दिन ठीक हो जाता है।",
  "तू मुझ पर मुझसे ज़्यादा यकीन करती है।",
  "मैं कहीं भी रहूँ, तेरी रसोई की महक 'घर' कहलाती है।",
  "मेरे बेकार जोक्स पर भी तू दिल से हँसती है।",
  "मेरे माफ़ी माँगने से पहले ही तू माफ़ कर देती है।",
  "तू आम दिनों को भी त्यौहार बना देती है।",
  "मैं सोती हूँ, और तेरी दुआएँ जागती हैं।",
  "तू मेरी पहली दोस्त है, और आख़िरी भी। 💗",
];

export function Reasons() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">एक अनगिनत सूची</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">मैं तुझसे प्यार</span>{" "}
            <span className="font-script">क्यों करती हूँ</span>
          </h2>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {REASONS.map((r, i) => (
            <li
              key={i}
              className="glass rounded-2xl p-5 reveal flex items-start gap-4 transition hover:-translate-y-1 hover:shadow-dreamy"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-rose font-display text-primary-foreground shadow-glow">
                {i + 1}
              </span>
              <p className="text-lg text-foreground/85">{r}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
