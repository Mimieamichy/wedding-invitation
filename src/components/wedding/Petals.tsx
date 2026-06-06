import { motion } from "framer-motion";
import { useMemo } from "react";

type Props = { count?: number; variant?: "petal" | "sparkle" };

export function FloatingParticles({ count = 18, variant = "sparkle" }: Props) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 10 + Math.random() * 10,
        size: variant === "petal" ? 14 + Math.random() * 18 : 4 + Math.random() * 6,
        drift: (Math.random() - 0.5) * 120,
        rotate: Math.random() * 360,
      })),
    [count, variant],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "-10%", x: 0, opacity: 0, rotate: p.rotate }}
          animate={{
            y: "110%",
            x: p.drift,
            opacity: [0, 1, 1, 0],
            rotate: p.rotate + 240,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
          }}
        >
          {variant === "petal" ? <Petal /> : <Sparkle />}
        </motion.div>
      ))}
    </div>
  );
}

function Petal() {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full drop-shadow-sm">
      <defs>
        <radialGradient id="pg" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="oklch(0.97 0.02 260)" />
          <stop offset="60%" stopColor="oklch(0.9 0.04 260)" />
          <stop offset="100%" stopColor="oklch(0.82 0.06 260)" />
        </radialGradient>
      </defs>
      <path
        d="M16 2 C24 8 28 18 16 30 C4 18 8 8 16 2 Z"
        fill="url(#pg)"
        opacity="0.92"
      />
    </svg>
  );
}

function Sparkle() {
  return (
    <div
      className="h-full w-full rounded-full"
      style={{
        background:
          "radial-gradient(circle, oklch(0.95 0.08 260) 0%, oklch(0.5 0.18 260 / 0) 70%)",
        boxShadow: "0 0 8px oklch(0.65 0.12 260 / 0.8)",
      }}
    />
  );
}