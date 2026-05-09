const QUOTES = [
  { q: "माँ, तुझे सलाम।", from: "हर बच्चा, हमेशा" },
  { q: "मेरे पास माँ है।", from: "दीवार — और मैं, हमेशा" },
  { q: "It's all about loving your parents.", from: "K3G" },
  { q: "एक माँ ही होती है जो बिना कुछ कहे सब समझ लेती है।", from: "जो फ़िल्म नहीं बनी, पर हमारे घर में हर रोज़ चलती है" },
];

export function Quotes() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">फ़िल्मी जज़्बात</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">डायलॉग्स</span>{" "}
            <span className="font-script">जिनमें माँ का स्वाद है</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {QUOTES.map((q, i) => (
            <blockquote
              key={i}
              className="reveal glass rounded-3xl p-8 shadow-soft transition hover:-translate-y-1"
            >
              <p className="font-display text-2xl italic text-foreground/90 leading-snug">
                <span className="text-gradient-rose font-script text-4xl mr-1">“</span>
                {q.q}
                <span className="text-gradient-rose font-script text-4xl ml-1">”</span>
              </p>
              <footer className="mt-4 font-script text-lg text-primary">— {q.from}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
