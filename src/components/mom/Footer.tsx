export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-4 pb-16 pt-10 text-center">
      <div className="mx-auto max-w-3xl reveal">
        <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <p className="mt-8 font-script text-3xl md:text-4xl text-gradient-rose">
          “No matter how old I grow, I'll always be your little girl ❤️”
        </p>
        <p className="mt-6 text-foreground/70">
          Made with all my heart — for the woman who made mine.
        </p>
        <p className="mt-2 font-script text-xl text-primary">
          — Your daughter · Mother's Day {year}
        </p>
        <div className="mt-6 text-2xl">🌸 💗 🌷 ✨ 🦋</div>
      </div>
    </footer>
  );
}
