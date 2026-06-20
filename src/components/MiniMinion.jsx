import { motion } from "framer-motion";

/**
 * A tiny version of the mascot meant to perch directly on top of big
 * headline text — sitting on a corner, climbing up a letter, running
 * across the baseline, hanging off the top edge, or peeking up from
 * behind. Pure decoration (aria-hidden), so it never competes with
 * the actual heading for screen readers.
 */
const poseMotion = {
  sit: {
    animate: { rotate: [-5, 5, -5] },
    transition: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
    origin: "50% 0%",
  },
  climb: {
    animate: { y: [0, -8, 0] },
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
    origin: "50% 100%",
  },
  run: {
    animate: { x: [0, 18, 0], y: [0, -4, 0, -4, 0] },
    transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" },
    origin: "50% 100%",
  },
  hang: {
    animate: { rotate: [-12, 12, -12] },
    transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
    origin: "50% 0%",
  },
  peek: {
    animate: { y: [12, 0, 0, 12] },
    transition: { duration: 3.8, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.7, 1] },
    origin: "50% 100%",
  },
};

function Body() {
  return (
    <>
      <rect x="16" y="24" width="32" height="36" rx="16" fill="#FFD23F" />
      <rect x="20" y="26" width="24" height="5" rx="2.5" fill="#1B2A4D" />
      <circle cx="32" cy="33" r="10" fill="#1B2A4D" />
      <circle cx="32" cy="33" r="7.6" fill="#EAF2FF" />
      <circle cx="32" cy="33" r="3.2" fill="#14171F" />
      <circle cx="34" cy="31" r="1" fill="#FFFFFF" />
    </>
  );
}

export default function MiniMinion({ pose = "sit", className = "", flip = false }) {
  const preset = poseMotion[pose] ?? poseMotion.sit;

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{ transformOrigin: preset.origin, scaleX: flip ? -1 : 1 }}
      animate={preset.animate}
      transition={preset.transition}
    >
      <svg viewBox="0 0 64 84" className="h-full w-full" focusable="false">
        {pose === "peek" ? (
          <>
            <rect x="16" y="42" width="32" height="42" rx="16" fill="#FFD23F" />
            <rect x="20" y="32" width="24" height="5" rx="2.5" fill="#1B2A4D" />
            <circle cx="32" cy="39" r="10" fill="#1B2A4D" />
            <circle cx="32" cy="39" r="7.6" fill="#EAF2FF" />
            <circle cx="32" cy="39" r="3.2" fill="#14171F" />
            <circle cx="34" cy="37" r="1" fill="#FFFFFF" />
          </>
        ) : (
          <>
            {pose === "hang" && (
              <>
                <rect x="21" y="56" width="8" height="20" rx="4" fill="#1B2A4D" />
                <rect x="35" y="56" width="8" height="20" rx="4" fill="#1B2A4D" />
                <rect x="22" y="4" width="8" height="20" rx="4" fill="#E6B400" transform="rotate(-14 26 14)" />
                <rect x="34" y="4" width="8" height="20" rx="4" fill="#E6B400" transform="rotate(14 38 14)" />
              </>
            )}
            {pose === "climb" && (
              <>
                <rect x="13" y="50" width="8" height="15" rx="4" fill="#1B2A4D" transform="rotate(20 17 57)" />
                <rect x="41" y="54" width="8" height="17" rx="4" fill="#1B2A4D" />
                <rect x="4" y="12" width="8" height="20" rx="4" fill="#E6B400" transform="rotate(-32 8 22)" />
                <rect x="46" y="16" width="8" height="20" rx="4" fill="#E6B400" transform="rotate(24 50 26)" />
              </>
            )}
            {pose === "run" && (
              <>
                <rect x="15" y="56" width="9" height="18" rx="4.5" fill="#1B2A4D" transform="rotate(-24 19 60)" />
                <rect x="38" y="56" width="9" height="18" rx="4.5" fill="#1B2A4D" transform="rotate(30 42 60)" />
                <rect x="2" y="33" width="8" height="18" rx="4" fill="#E6B400" transform="rotate(30 6 37)" />
                <rect x="51" y="29" width="8" height="18" rx="4" fill="#E6B400" transform="rotate(-32 55 33)" />
              </>
            )}
            {pose === "sit" && (
              <>
                <rect x="21" y="58" width="8" height="18" rx="4" fill="#1B2A4D" />
                <rect x="35" y="58" width="8" height="18" rx="4" fill="#1B2A4D" />
              </>
            )}

            <Body />

            {pose === "sit" && (
              <>
                <rect x="6" y="34" width="8" height="16" rx="4" fill="#E6B400" />
                <rect x="50" y="34" width="8" height="16" rx="4" fill="#E6B400" />
              </>
            )}
          </>
        )}
      </svg>
    </motion.div>
  );
}
