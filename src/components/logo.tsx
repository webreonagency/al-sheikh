type LogoMarkProps = {
  className?: string;
  /** Colour of the seal disc. */
  disc?: string;
  ring?: string;
  diamond?: string;
};

/**
 * The Al-Sheikh seal: a barfi diamond holding a single gulab jamun round,
 * ringed like the lid of a mithai box. Original vector mark — no stock
 * bakery imagery, no chef hats.
 */
export function LogoMark({
  className,
  disc = "#791C3B",
  ring = "#F4BD36",
  diamond = "#F4BD36",
}: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Al-Sheikh Sweets seal"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill={disc} />
      <circle
        cx="32"
        cy="32"
        r="26.5"
        fill="none"
        stroke={ring}
        strokeWidth="1.6"
        strokeDasharray="2.5 3.4"
        opacity="0.9"
      />
      <circle cx="32" cy="10.8" r="1.7" fill={ring} />
      <circle cx="32" cy="53.2" r="1.7" fill={ring} />
      <circle cx="10.8" cy="32" r="1.7" fill={ring} />
      <circle cx="53.2" cy="32" r="1.7" fill={ring} />
      <rect
        x="19.5"
        y="19.5"
        width="25"
        height="25"
        rx="2"
        transform="rotate(45 32 32)"
        fill={diamond}
      />
      <circle cx="32" cy="32" r="6.4" fill={disc} />
      <circle cx="32" cy="32" r="6.4" fill="none" stroke={ring} strokeWidth="1" opacity="0.55" />
      <circle cx="29.9" cy="29.9" r="1.8" fill="#FFF1D9" opacity="0.85" />
    </svg>
  );
}

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/** Primary horizontal lockup: seal + wordmark. */
export function Logo({ variant = "dark", className }: LogoProps) {
  const onDark = variant === "light";
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" />
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.35rem] font-semibold tracking-[0.01em] sm:text-2xl"
          style={{ color: onDark ? "#FFF1D9" : "#791C3B" }}
        >
          Al-Sheikh
        </span>
        <span
          className="mt-1 text-[0.68rem] font-bold tracking-[0.42em]"
          style={{ color: onDark ? "#F4BD36" : "#791C3B" }}
        >
          SWEETS
        </span>
      </span>
    </span>
  );
}
