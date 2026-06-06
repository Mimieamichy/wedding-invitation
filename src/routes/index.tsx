import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sobirat & Habibulah — Wedding Invitation" },
      { name: "description", content: "A beautiful wedding invitation. 27 June 2026, Lafia, Nassarawa State." },
      { property: "og:title", content: "Sobirat & Habibulah — Wedding Invitation" },
      { property: "og:description", content: "Open the envelope and celebrate with us." },
    ],
  }),
  component: Index,
});

function Index() {
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
