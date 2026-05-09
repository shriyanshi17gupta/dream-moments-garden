import m1 from "@/assets/mom/m1.jpg";
import m2 from "@/assets/mom/m2.jpg";
import m3 from "@/assets/mom/m3.jpg";
import m4 from "@/assets/mom/m4.jpg";
import m5 from "@/assets/mom/m5.jpg";
import m6 from "@/assets/mom/m6.jpg";

const PHOTOS = [
  { src: m1, caption: "Walking through wildflowers, hand in hand 🌷" },
  { src: m2, caption: "Sundays smell like cookies and you 🍪" },
  { src: m3, caption: "You braided love into every strand of my hair" },
  { src: m4, caption: "Your laugh is my favorite song 🦋" },
  { src: m5, caption: "Peonies — because pink looks pretty on you" },
  { src: m6, caption: "Our living room dance floor 💃" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="font-script text-2xl text-primary">our scrapbook</p>
          <h2 className="mt-2 text-4xl md:text-6xl">
            <span className="text-gradient-rose">Our Beautiful Moments</span>{" "}
            <span className="font-script">Together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            A few polaroids from the album of us — every corner taped with love.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {PHOTOS.map((p, i) => (
            <figure
              key={i}
              className="polaroid mb-6 inline-block w-full break-inside-avoid reveal"
              style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3))}deg)` }}
            >
              <img src={p.src} alt={p.caption} loading="lazy" className="block aspect-[4/5] w-full rounded-sm object-cover" />
              <figcaption className="mt-3 px-1 text-center font-script text-xl text-foreground/80">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
