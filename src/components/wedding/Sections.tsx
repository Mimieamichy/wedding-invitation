import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  Copy,
  Facebook,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FloralDivider } from "./Divider";
import { FloatingParticles } from "./Petals";
import { RsvpForm } from "./RsvpForm";
import coupleImg from "@/assets/couple-hero.png";
import brideImg from "@/assets/bride.png";
import patternUrl from "@/assets/pattern-gold.jpg";
import storyMeeting from "@/assets/story-meeting.jpg";
import storyFriendship from "@/assets/story-friendship.jpg";
import storyEngagement from "@/assets/story-engagement.jpg";
import storyWedding from "@/assets/story-wedding.jpg";

const WEDDING_DATE = new Date("2026-06-27T10:00:00+01:00");

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="text-center">
      {eyebrow && (
        <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-gold-deep">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-mocha">
        {title}
      </h2>
      <FloralDivider className="mt-5" />
    </div>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-romance">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: `url(${patternUrl})`, backgroundSize: "260px" }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-20 h-[480px] w-[480px] rounded-full blur-3xl"
        style={{ background: "oklch(0.88 0.05 260 / 0.6)" }}
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-20 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "oklch(0.82 0.08 260 / 0.55)" }}
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <FloatingParticles count={20} variant="sparkle" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-12 sm:pt-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs sm:text-sm tracking-[0.5em] uppercase text-gold-deep"
        >
          The Wedding of
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-4 font-script text-6xl sm:text-8xl md:text-[10rem] leading-[0.95] text-gold-gradient"
        >
          Sobirat <span className="text-blush">&</span> Habibulah
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6"
        >
          <FloralDivider />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 font-display italic text-lg sm:text-xl text-mocha/80 max-w-xl mx-auto"
        >
          Together with our families, we invite you to celebrate our Nikkah Ceremony
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-mocha"
        >
          <span className="inline-flex items-center gap-2 text-sm tracking-[0.25em] uppercase">
            <Calendar className="h-4 w-4 text-gold-deep" /> 27 June 2026
          </span>
          <span className="hidden sm:inline text-gold-deep">•</span>
          <span className="inline-flex items-center gap-2 text-sm tracking-[0.25em] uppercase">
            <MapPin className="h-4 w-4 text-gold-deep" /> Lafia, Nassarawa State
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="relative mx-auto mt-10 w-full max-w-md sm:max-w-lg"
        >
          <motion.img
            src={coupleImg}
            alt="Cartoon illustration of the bride and groom"
            width={1024}
            height={1024}
            className="relative z-10 mx-auto w-full drop-shadow-[0_30px_50px_rgba(25,45,95,0.25)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute -inset-10 -z-0 rounded-full blur-3xl opacity-50 bg-gradient-gold" />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- COUPLE INTRO ---------------- */
export function CoupleIntro() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-soft blur-2xl opacity-70" />
            <img
              src={brideImg}
              alt="Illustrated bride"
              loading="lazy"
              className="relative w-full max-w-sm mx-auto drop-shadow-2xl"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-xs tracking-[0.4em] uppercase text-gold-deep">The Couple</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-mocha">
            Two souls, one beautiful journey
          </h2>
          <FloralDivider className="mt-5 justify-start" />
          <p className="mt-6 text-mocha/80 leading-relaxed">
            By the grace of Allah, our paths crossed and our hearts found their
            quiet home in one another. We invite you to share in this sacred
            chapter, beginning with our Nikkah and continuing for a lifetime of
            faith, laughter, and love.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="rounded-2xl glass p-5 shadow-soft">
              <p className="font-script text-3xl text-gold-deep">Sobirat Olanike</p>
              <p className="mt-1 text-sm text-mocha/70">Daughter of Alhaji Abdulsalam Abdulwahab Olaniyi Balogun</p>
            </div>
            <div className="rounded-2xl glass p-5 shadow-soft">
              <p className="font-script text-3xl text-gold-deep">Habibulah Oyewale</p>
              <p className="mt-1 text-sm text-mocha/70">Son of Alhaji Kazeem Adesiyan (Eni Ayeri L'Ayemo)</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- STORY ---------------- */
const STORY = [
  { title: "First Meeting", date: "Spring 2022", body: "A quiet moment in a garden — a glance, a smile, and a question only Allah could answer.", img: storyMeeting },
  { title: "Friendship", date: "Summer 2023", body: "Long walks under blossoms turned into the kind of friendship that feels like home.", img: storyFriendship },
  { title: "Engagement", date: "Ramadan 2025", body: "By candlelight, a promise was made and sealed with a golden ring.", img: storyEngagement },
  { title: "Wedding Journey", date: "December 2026", body: "Under a floral arch, two families become one — by His grace.", img: storyWedding },
];

export function Story() {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Our Journey" title="Our Love Story" />
        <div className="relative mt-16">
          <div className="space-y-16 sm:space-y-24">
            {STORY.map((s, i) => (
              <Reveal key={s.title} delay={0.05 * i}>
                <div className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <div className="md:[direction:ltr]">
                    <div className="relative rounded-3xl overflow-hidden shadow-luxe gold-border">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-72 sm:h-80 object-cover"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-[oklch(0.5_0.18_260_/_40%)] rounded-3xl" />
                    </div>
                  </div>
                  <div className="md:[direction:ltr]">
                    <p className="text-xs tracking-[0.4em] uppercase text-gold-deep">{s.date}</p>
                    <h3 className="mt-2 font-display text-3xl sm:text-4xl text-mocha">{s.title}</h3>
                    <FloralDivider className="mt-3 justify-start" />
                    <p className="mt-4 text-mocha/80 leading-relaxed max-w-md">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COUNTDOWN ---------------- */
function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

export function Countdown() {
  const { d, h, m, s } = useCountdown(WEDDING_DATE);
  const units = [
    { label: "Days", value: d },
    { label: "Hours", value: h },
    { label: "Minutes", value: m },
    { label: "Seconds", value: s },
  ];
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <FloatingParticles count={14} variant="sparkle" />
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Counting the Days" title="Until We Say I Do" />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {units.map((u) => (
            <motion.div
              key={u.label}
              whileHover={{ y: -4 }}
              className="rounded-3xl glass gold-border shadow-luxe p-6 sm:p-8 text-center"
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={u.value}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="font-display text-5xl sm:text-7xl text-gold-gradient tabular-nums"
                >
                  {String(u.value).padStart(2, "0")}
                </motion.div>
              </AnimatePresence>
              <p className="mt-2 text-xs sm:text-sm tracking-[0.3em] uppercase text-mocha/70">
                {u.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EVENTS ---------------- */
const EVENTS = [
  {
    title: "Nikkah Ceremony",
    date: "Saturday, 27 June 2026",
    time: "10:00 AM",
    venue: "Savannah Guest House, Jos Road, Lafia, Nassarawa State",
    map: "https://maps.google.com/?q=Savannah+Guest+House+Jos+Road+Lafia+Nassarawa+State",
  },
  {
    title: "Reception",
    date: "Saturday, 27 June 2026",
    time: "Immediately after Nikkah",
    venue: "Savannah Guest House, Jos Road, Lafia, Nassarawa State",
    map: "https://maps.google.com/?q=Savannah+Guest+House+Jos+Road+Lafia+Nassarawa+State",
  },
];

export function Events() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Save the Date" title="Wedding Events" />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative rounded-3xl glass gold-border shadow-luxe p-8 overflow-hidden"
              >
                <div
                  className="absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-40 blur-2xl"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <p className="text-xs tracking-[0.4em] uppercase text-gold-deep">Event {i + 1}</p>
                <h3 className="mt-3 font-display text-3xl text-mocha">{e.title}</h3>
                <FloralDivider className="mt-3 justify-start" />
                <div className="mt-5 space-y-2 text-mocha/80">
                  <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-gold-deep" />{e.date}</p>
                  <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold-deep" />{e.time}</p>
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold-deep" />{e.venue}</p>
                </div>
               
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAMILY ---------------- */
export function Family() {
  const families = [
    {
      title: "Bride's Family",
      lines: ["Alhaji Abdulsalam Abdulwahab Olaniyi Balogun", "Beloved family of Sobirat Olanike"],
    },
    {
      title: "Groom's Family",
      lines: ["Alhaji Kazeem Adesiyan (Eni Ayeri L'Ayemo)", "Beloved family of Habibulah Oyewale"],
    },
  ];
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="With Honour" title="Our Beloved Families" />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {families.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="rounded-3xl glass gold-border shadow-luxe p-8 text-center">
                <h3 className="font-display text-2xl text-mocha">{f.title}</h3>
                <FloralDivider className="mt-3" />
                <div className="mt-5 space-y-2 text-mocha/80">
                  {f.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BRIDAL PARTY ---------------- */
const PARTY = {
  bridesmaids: ["Aisha", "Zainab", "Mariam", "Hauwa"],
  groomsmen: ["Yusuf", "Hassan", "Bilal", "Ismail"],
};
function Avatar({ name, accent }: { name: string; accent: "blush" | "gold" }) {
  const initials = name.slice(0, 1);
  return (
    <motion.div whileHover={{ y: -4 }} className="text-center">
      <div
        className="mx-auto h-24 w-24 sm:h-28 sm:w-28 rounded-full flex items-center justify-center font-script text-4xl shadow-luxe gold-border"
        style={{
          background:
            accent === "blush"
              ? "linear-gradient(135deg, oklch(0.88 0.05 260), oklch(0.75 0.08 260))"
              : "var(--gradient-gold)",
          color: "var(--ivory)",
        }}
      >
        {initials}
      </div>
      <p className="mt-3 font-display text-lg text-mocha">{name}</p>
    </motion.div>
  );
}
export function BridalParty() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="The Crew" title="Bridal Party" />
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <Reveal>
            <h3 className="text-center font-display text-2xl text-gold-deep">Bridesmaids</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {PARTY.bridesmaids.map((n) => <Avatar key={n} name={n} accent="blush" />)}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-center font-display text-2xl text-gold-deep">Groomsmen</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {PARTY.groomsmen.map((n) => <Avatar key={n} name={n} accent="gold" />)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- RSVP ---------------- */
export function Rsvp() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-2xl px-6">
        <SectionTitle eyebrow="Kindly Reply" title="RSVP" />
        <p className="mt-4 text-center text-mocha/80">
          Your presence is our greatest gift. Please respond by <span className="text-gold-deep font-bold">June 15th, 2026</span>.
        </p>
        <div className="mt-10">
          <RsvpForm />
        </div>
      </div>
    </section>
  );
}

/* ---------------- GIFTS ---------------- */
export function Gifts() {
  const acct = { bank: "Guaranty Trust Bank", number: "0123456789", name: "Fatimah Adeyemi" };
  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied!`);
  };
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="With Love" title="Support Our New Journey" />
        <Reveal>
          <div className="mt-10 rounded-3xl glass gold-border shadow-luxe p-8 space-y-5">
            {[
              { label: "Bank Name", value: acct.bank },
              { label: "Account Number", value: acct.number },
              { label: "Account Name", value: acct.name },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 border-b border-[oklch(0.5_0.18_260_/_25%)] pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-gold-deep">{row.label}</p>
                  <p className="mt-1 font-display text-xl text-mocha">{row.value}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copy(row.value, row.label)}
                  className="gold-border text-gold-deep"
                >
                  <Copy className="h-4 w-4 mr-2" /> Copy
                </Button>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- LIVE LOCATION ---------------- */
export function LiveLocation() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Find Us" title="Live Location" />
        <Reveal>
          <div className="mt-10 rounded-3xl overflow-hidden gold-border shadow-luxe glass p-2">
            <iframe
              title="Wedding location"
              src="https://www.google.com/maps?q=Savannah+Guest+House+Jos+Road+Lafia+Nassarawa+State&output=embed"
              className="w-full h-[420px] rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://maps.google.com/?q=Savannah+Guest+House+Jos+Road+Lafia+Nassarawa+State"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-ivory px-6 py-3 text-sm tracking-[0.2em] uppercase shadow-luxe"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PROGRAMME ---------------- */
const PROGRAMME = [
  { t: "10:00 AM", e: "Guest Arrival" },
  { t: "10:00 AM Prompt", e: "Nikkah Ceremony" },
  { t: "After Nikkah", e: "Reception" },
];
export function Programme() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="Order of the Day" title="Wedding Programme" />
        <div className="relative mt-12 pl-6">
          <motion.div
            className="absolute left-2 top-0 w-px bg-gradient-to-b from-[oklch(0.5_0.18_260)] to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
            style={{ height: "100%" }}
          />
          <ul className="space-y-8">
            {PROGRAMME.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <li className="relative">
                  <span className="absolute -left-[19px] top-2 h-3 w-3 rounded-full bg-gradient-gold shadow-luxe" />
                  <p className="text-xs tracking-[0.3em] uppercase text-gold-deep">{p.t}</p>
                  <p className="mt-1 font-display text-2xl text-mocha">{p.e}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GUEST WISHES ---------------- */
const WISHES = [
  { name: "Khadijah", text: "May Allah bless your union with mercy, love, and tranquility." },
  { name: "Ibrahim", text: "Barakallahu lakuma — wishing you a lifetime of joy." },
  { name: "Aisha", text: "Two beautiful souls becoming one. Congratulations!" },
  { name: "Yusuf", text: "May your home be filled with laughter and light. Mabrook!" },
];
export function Wishes() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % WISHES.length), 5000);
    return () => clearInterval(t);
  }, []);
  const w = WISHES[i];
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="From Loved Ones" title="Guest Wishes" />
        <div className="mt-12 relative h-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 rounded-3xl glass gold-border shadow-luxe p-10 text-center flex flex-col justify-center"
            >
              <p className="font-display italic text-xl sm:text-2xl text-mocha leading-relaxed">
                "{w.text}"
              </p>
              <p className="mt-5 font-script text-3xl text-gold-gradient">— {w.name}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {WISHES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-gradient-gold" : "w-2 bg-mocha/20"
              }`}
              aria-label={`Wish ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="relative overflow-hidden py-28 sm:py-36 text-center bg-gradient-romance">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: `url(${patternUrl})`, backgroundSize: "220px" }}
      />
      <FloatingParticles count={16} variant="petal" />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <p className="font-script text-5xl sm:text-7xl text-gold-gradient">Shukran</p>
        <p className="mt-4 font-display italic text-xl sm:text-2xl text-mocha/85">
          We look forward to celebrating with you.
        </p>
        <FloralDivider className="mt-6" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl glass gold-border p-6">
            <p className="font-script text-3xl text-gold-gradient mb-2">Sobirat Olanike</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+2348000000000" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-mocha hover:text-gold-deep transition shadow-soft border border-gold-deep/30">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-mocha hover:text-gold-deep transition shadow-soft border border-gold-deep/30">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-2xl glass gold-border p-6">
            <p className="font-script text-3xl text-gold-gradient mb-2">Habibulah Oyewale</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+2348000000001" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-mocha hover:text-gold-deep transition shadow-soft border border-gold-deep/30">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href="https://wa.me/2348000000001" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-mocha hover:text-gold-deep transition shadow-soft border border-gold-deep/30">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <p className="mt-12 font-script text-3xl text-gold-gradient">Sobirat & Habibulah</p>
        <p className="mt-1 text-xs tracking-[0.3em] uppercase text-mocha/60">
          27 · 06 · 2026 — Lafia
        </p>
      </div>
    </footer>
  );
}