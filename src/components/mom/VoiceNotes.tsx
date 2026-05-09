import { Mic, Play } from "lucide-react";

const NOTES = [
  { from: "मैं", time: "0:14", text: "माँ... बस इतना कहना था — हर चीज़ के लिए शुक्रिया।" },
  { from: "मैं", time: "0:08", text: "हाय! तेरी झप्पी की याद आ गई। आज रात एक मिल जाएगी?" },
  { from: "मैं", time: "0:22", text: "वो गाना याद है जो तू गुनगुनाती थी? आज दिन भर वही चल रहा है।" },
  { from: "मैं", time: "0:19", text: "मैं ठीक हूँ, माँ। चिंता मत कर। समय पर खाना खा लेना। आय लव यू।" },
];

export function VoiceNotes() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">कुछ धीमी सी बातें</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">तेरे लिए</span>{" "}
            <span className="font-script">वॉइस नोट्स</span>
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {NOTES.map((n, i) => (
            <div key={i} className="reveal glass-rose flex items-center gap-4 rounded-2xl p-4 shadow-soft">
              <button className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-rose text-primary-foreground shadow-glow transition hover:scale-105">
                <Play className="size-5 translate-x-0.5" />
              </button>
              <div className="flex-1">
                <div className="flex items-center justify-between text-xs text-foreground/60">
                  <span className="flex items-center gap-1 font-script text-base text-primary">
                    <Mic className="size-3.5" /> {n.from}
                  </span>
                  <span>{n.time}</span>
                </div>
                <div className="mt-2 flex items-end gap-0.5">
                  {Array.from({ length: 38 }).map((_, b) => (
                    <span
                      key={b}
                      className="w-1 rounded-full bg-primary/60"
                      style={{ height: 4 + Math.abs(Math.sin(i + b * 0.5)) * 22 }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm italic text-foreground/75">"{n.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
