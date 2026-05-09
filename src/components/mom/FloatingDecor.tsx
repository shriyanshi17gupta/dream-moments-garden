import { useEffect, useRef } from "react";

const EMOJIS = ["🌸", "💗", "✨", "🦋", "🌷", "💖", "🌺"];

export function FloatingDecor() {
  const items = Array.from({ length: 28 }, (_, i) => ({
    emoji: EMOJIS[i % EMOJIS.length],
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 14 + Math.random() * 16,
    size: 14 + Math.random() * 22,
    drift: Math.random() > 0.5 ? "animate-petal-fall" : "animate-float-up",
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((it, i) => (
        <span
          key={i}
          className={it.drift}
          style={{
            position: "absolute",
            left: `${it.left}%`,
            fontSize: it.size,
            animationDelay: `${it.delay}s`,
            animationDuration: `${it.duration}s`,
            filter: "drop-shadow(0 4px 8px rgba(255,180,200,0.4))",
          }}
        >
          {it.emoji}
        </span>
      ))}
    </div>
  );
}

export function CursorSparkles() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const s = document.createElement("span");
      s.textContent = ["✨", "💗", "🌸"][Math.floor(Math.random() * 3)];
      s.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;pointer-events:none;font-size:${10 + Math.random() * 14}px;z-index:9999;transform:translate(-50%,-50%);`;
      s.className = "animate-sparkle";
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1400);
    };
    let last = 0;
    const throttled = (e: MouseEvent) => {
      const now = Date.now();
      if (now - last > 80) {
        last = now;
        onMove(e);
      }
    };
    window.addEventListener("mousemove", throttled);
    return () => window.removeEventListener("mousemove", throttled);
  }, []);
  return <div ref={ref} />;
}
