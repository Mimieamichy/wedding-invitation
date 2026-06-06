export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent via-[oklch(0.5_0.18_260)] to-transparent" />
      <svg viewBox="0 0 40 40" className="h-6 w-6 text-gold-deep">
        <g fill="currentColor">
          <circle cx="20" cy="20" r="2.5" />
          <path d="M20 6 C 22 12, 22 16, 20 18 C 18 16, 18 12, 20 6 Z" opacity="0.85" />
          <path d="M20 34 C 22 28, 22 24, 20 22 C 18 24, 18 28, 20 34 Z" opacity="0.85" />
          <path d="M6 20 C 12 18, 16 18, 18 20 C 16 22, 12 22, 6 20 Z" opacity="0.85" />
          <path d="M34 20 C 28 18, 24 18, 22 20 C 24 22, 28 22, 34 20 Z" opacity="0.85" />
        </g>
      </svg>
      <span className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent via-[oklch(0.5_0.18_260)] to-transparent" />
    </div>
  );
}