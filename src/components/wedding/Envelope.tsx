import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingParticles } from "./Petals";
import patternUrl from "@/assets/pattern-gold.jpg";

type Props = { onOpened: () => void };

export function EnvelopeOpening({ onOpened }: Props) {
  const [stage, setStage] = useState<"closed" | "opening" | "done">("closed");

  useEffect(() => {
    if (stage !== "opening") return;
    const t = setTimeout(() => {
      setStage("done");
      setTimeout(onOpened, 500);
    }, 2500);
    return () => clearTimeout(t);
  }, [stage, onOpened]);

  const isOpening = stage === "opening";

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpening ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: isOpening ? 2.5 : 0.8 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ backdropFilter: "blur(8px)", opacity: 1 }}
            animate={{
              backdropFilter: isOpening ? "blur(0px)" : "blur(8px)",
              opacity: isOpening ? 0 : 1
            }}
            style={{ background: "var(--gradient-romance)" }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 opacity-[0.08]"
            initial={{ opacity: 0.08 }}
            animate={{ opacity: isOpening ? 0 : 0.08 }}
            transition={{ duration: 2.5 }}
            style={{
              backgroundImage: `url(${patternUrl})`,
              backgroundSize: "320px",
            }}
          />
          {stage === "opening" && <FloatingParticles count={26} variant="petal" />}
          {stage === "opening" && <FloatingParticles count={30} variant="sparkle" />}

          <AnimatePresence>
            {stage === "closed" && (
              <motion.div
                className="absolute top-[10%] left-0 right-0 z-10 text-center px-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <p className="font-script text-3xl md:text-4xl text-gold-gradient">
                  Bismillahir Rahmanir Rahim
                </p>
                <p className="mt-2 text-sm md:text-base tracking-[0.3em] uppercase text-mocha/70">
                  You have received a wedding invitation
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="button"
            aria-label="Open the wedding invitation"
            onClick={() => stage === "closed" && setStage("opening")}
            className="relative z-20"
            initial={{ scale: 0.6, opacity: 0, y: 30 }}
            animate={{
              scale: stage === "opening" ? 1.05 : 1,
              opacity: 1,
              y: stage === "opening" ? -10 : 0,
            }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Envelope stage={stage} />
          </motion.button>

          <AnimatePresence>
            {stage === "closed" && (
              <motion.div
                className="absolute bottom-[12%] left-0 right-0 z-10 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <motion.p
                  className="font-display italic text-xl md:text-2xl text-mocha/80"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                >
                  Tap to Open
                </motion.p>
                <div className="mx-auto mt-3 h-px w-16 bg-gradient-gold" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Envelope({ stage }: { stage: "closed" | "opening" | "done" }) {
  const opening = stage === "opening";
  return (
    <div className="relative" style={{ width: "min(86vw, 420px)", aspectRatio: "1.5/1" }}>
      {/* Envelope body (royal blue) */}
      <div className="absolute inset-0 rounded-[14px] shadow-luxe overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #1e3a8a 0%, #1e40af 50%, #0f172a 100%",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-20" style={{ clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)" }} />
        <div className="absolute inset-[6px] rounded-[10px] gold-border" />
      </div>

      {/* Back flap (shadow behind) */}
      <div
        className="absolute inset-0 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #1e40af 0%, #0f172a 100%)",
          clipPath: "polygon(0 0, 100% 0, 50% 60%)",
          zIndex: 2,
        }}
      />

      {/* Top flap (animates open with white inner lining visible) */}
      <motion.div
        className="absolute inset-0 origin-top rounded-[14px]"
        initial={false}
        animate={{ rotateX: opening ? -175 : 0 }}
        transition={{ duration: 1.8, ease: [0.5, 0, 0.2, 1] }}
        style={{
          background: "linear-gradient(180deg, #1e3a8a 0%, #1e40af 100%)",
          clipPath: "polygon(0 0, 100% 0, 50% 60%)",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          zIndex: 3,
        }}
      >
        <div className="absolute inset-0"
          style={{
            background: "white",
            clipPath: "polygon(2px 2px, calc(100% - 2px) 2px, 50% calc(60% - 4px)",
          }}
        />
        <div className="absolute inset-[4px] gold-border" style={{ clipPath: "polygon(0 0, 100% 0, 50% 56%)" }} />
      </motion.div>

      {/* Wax seal */}
      <motion.div
        className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-[4]"
        animate={opening ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className="h-14 w-14 rounded-full flex items-center justify-center text-ivory font-display text-xl shadow-luxe"
          style={{ background: "var(--gradient-gold)" }}
        >
          S&H
        </div>
      </motion.div>

      {/* Bottom envelope front (royal blue) */}
      <div
        className="absolute inset-0 rounded-[14px] overflow-hidden"
        style={{
          background: "linear-gradient(0deg, #1e3a8a 0%, #0f172a 100%)",
          clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)",
          zIndex: 5,
        }}
      >
        <div className="absolute inset-[6px] gold-border rounded-md" />
      </div>
    </div>
  );
}
