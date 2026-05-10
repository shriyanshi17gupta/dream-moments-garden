import { useEffect, useRef, useState } from "react";
import { Play, Pause, Music2 } from "lucide-react";

// Soft instrumental loop (replace with your favorite Bollywood song URL)
const SONG_URL =
  "https://www.image2url.com/r2/default/audio/1778422754869-2e717b6f-dcce-4854-b212-6c5bcf1469bd.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.45;
    const tryAuto = () => {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    tryAuto();
    const once = () => {
      if (!playing) a.play().then(() => setPlaying(true)).catch(() => { });
      window.removeEventListener("click", once);
    };
    window.addEventListener("click", once);
    return () => window.removeEventListener("click", once);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else a.play().then(() => setPlaying(true)).catch(() => { });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} src={SONG_URL} loop preload="auto" />
      <div className="glass-rose flex items-center gap-3 rounded-full px-3 py-2 pr-5 shadow-dreamy">
        <button
          onClick={toggle}
          className="grid size-12 place-items-center rounded-full bg-gradient-rose text-primary-foreground shadow-glow transition hover:scale-105"
          aria-label={playing ? "Pause music" : "Play music"}
        >
          <div className={playing ? "animate-spin-slow" : ""}>
            {playing ? <Pause className="size-5" /> : <Play className="size-5 translate-x-0.5" />}
          </div>
        </button>
        <div className="flex flex-col">
          <span className="font-script text-base leading-none text-primary">माँ के लिए</span>
          <div className="mt-1 flex items-end gap-0.5">
            {[3, 6, 4, 8, 5, 7, 4].map((h, i) => (
              <span
                key={i}
                className="w-0.5 rounded-full bg-primary/70"
                style={{
                  height: h + "px",
                  animation: playing ? `pulse-soft ${0.6 + i * 0.1}s ease-in-out ${i * 0.05}s infinite` : "none",
                  opacity: playing ? 1 : 0.4,
                }}
              />
            ))}
          </div>
        </div>
        <Music2 className="size-4 text-primary/70" />
      </div>
    </div>
  );
}
