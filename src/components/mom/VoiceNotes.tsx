import { Mic, Play } from "lucide-react";

const NOTES = [
  { from: "Me", time: "0:14", text: "Maa... I just wanted to say thank you. For everything." },
  { from: "Me", time: "0:08", text: "Hi! Just thought of your hugs. Can I have one tonight?" },
  { from: "Me", time: "0:22", text: "Remember that song you used to hum? It's stuck in my head today." },
  { from: "Me", time: "0:19", text: "I'm okay, Maa. Don't worry. Eat on time. I love you." },
];

export function VoiceNotes() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">whispers</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">Voice Notes</span>{" "}
            <span className="font-script">for you</span>
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
