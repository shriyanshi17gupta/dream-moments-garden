import { createFileRoute } from "@tanstack/react-router";
import { FloatingDecor, CursorSparkles } from "@/components/mom/FloatingDecor";
import { MusicPlayer } from "@/components/mom/MusicPlayer";
import { Hero } from "@/components/mom/Hero";
import { Gallery } from "@/components/mom/Gallery";
import { Quiz } from "@/components/mom/Quiz";
import { Reasons } from "@/components/mom/Reasons";
import { OpenWhen } from "@/components/mom/OpenWhen";
import { ThingsTaught } from "@/components/mom/ThingsTaught";
import { Footer } from "@/components/mom/Footer";
import { useReveal } from "@/components/mom/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="relative">
      <FloatingDecor />
      <CursorSparkles />
      <MusicPlayer />

      <Hero />
      <Gallery />
      <Quiz />
      <Reasons />
      <OpenWhen />
      <ThingsTaught />
      <Footer />
    </main>
  );
}
