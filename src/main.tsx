import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/sonner";
import { EnvelopeOpening } from "@/components/wedding/Envelope";
import { MusicPlayer } from "@/components/wedding/MusicPlayer";
import {
  BridalParty,
  CoupleIntro,
  Countdown,
  Events,
  Family,
  Footer,
  Gifts,
  Hero,
  LiveLocation,
  Programme,
  Rsvp,
  Story,
  Wishes,
} from "@/components/wedding/Sections";
import "@/styles.css";

function App() {
  const [opened, setOpened] = useState(false);
  return (
    <main className="relative bg-background text-foreground">
      {!opened && <EnvelopeOpening onOpened={() => setOpened(true)} />}
      {opened && <MusicPlayer />}
      <Hero />
      <CoupleIntro />
      <Story />
      <Countdown />
      <Events />
      <Family />
      <BridalParty />
      <Rsvp />
      <Gifts />
      <LiveLocation />
      <Programme />
      <Wishes />
      <Footer />
      <Toaster position="top-center" richColors />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
