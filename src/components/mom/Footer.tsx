export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-4 pb-16 pt-10 text-center">
      <div className="mx-auto max-w-3xl reveal">
        <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <p className="mt-8 font-script text-3xl md:text-4xl text-gradient-rose">
          “मैं चाहे जितनी बड़ी हो जाऊँ, हमेशा तेरी छोटी सी बेटी रहूँगी ❤️”
        </p>
        <p className="mt-6 text-foreground/70">
          पूरे दिल से बनाया — उस औरत के लिए जिसने मेरा दिल बनाया।
        </p>
        <p className="mt-2 font-script text-xl text-primary">
          — तेरी बेटी · मातृ दिवस {year}
        </p>
        <div className="mt-6 text-2xl">🌸 💗 🌷 ✨ 🦋</div>
      </div>
    </footer>
  );
}
