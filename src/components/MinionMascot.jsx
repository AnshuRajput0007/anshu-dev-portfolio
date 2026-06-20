import { motion } from "framer-motion";

/**
 * An original mascot: a rounded "pixel-bot" body in signature yellow,
 * one round goggle-lens eye, tiny denim-blue overalls strap, and a
 * pair of floating code brackets it juggles. Inspired by the playful,
 * goggle-wearing, yellow-creature *spirit* of Minions — drawn from
 * scratch as its own character, not a copy of any studio's design.
 */
export default function MinionMascot({ className = "" }) {
  return (
    <motion.svg
      viewBox="0 0 220 260"
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      role="img"
      aria-label="Animated mascot character waving, wearing a goggle and holding code brackets"
    >
      <motion.g
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* soft ground glow */}
        <ellipse cx="110" cy="232" rx="56" ry="10" fill="#FFD23F" opacity="0.12" />

        {/* body */}
        <rect x="46" y="58" width="128" height="156" rx="56" fill="#FFD23F" />
        <rect x="46" y="58" width="128" height="156" rx="56" fill="url(#bodyShade)" opacity="0.5" />

        {/* overalls strap (denim wink) */}
        <path d="M82 150 L82 214 Q110 224 138 214 L138 150" fill="#2E4374" opacity="0.9" />
        <circle cx="110" cy="160" r="6" fill="#FFD23F" stroke="#1B2A4D" strokeWidth="2" />

        {/* arms */}
        <motion.rect
          x="26" y="120" width="22" height="60" rx="11" fill="#E6B400"
          style={{ transformOrigin: "37px 122px" }}
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="172" y="120" width="22" height="60" rx="11" fill="#E6B400"
          style={{ transformOrigin: "183px 122px" }}
          animate={{ rotate: [0, 22, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />

        {/* floating code brackets, "juggled" */}
        <motion.text
          x="6" y="118" fontFamily="JetBrains Mono, monospace" fontSize="34" fill="#C9CFD8"
          animate={{ y: [118, 104, 118], rotate: [-8, 8, -8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {"<"}
        </motion.text>
        <motion.text
          x="186" y="118" fontFamily="JetBrains Mono, monospace" fontSize="34" fill="#C9CFD8"
          animate={{ y: [118, 132, 118], rotate: [8, -8, 8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          {"/>"}
        </motion.text>

        {/* legs */}
        <rect x="68" y="206" width="26" height="30" rx="10" fill="#1B2A4D" />
        <rect x="126" y="206" width="26" height="30" rx="10" fill="#1B2A4D" />

        {/* goggle strap */}
        <rect x="50" y="74" width="120" height="14" rx="7" fill="#1B2A4D" />

        {/* goggle (single lens, original silhouette) */}
        <circle cx="110" cy="92" r="40" fill="#1B2A4D" />
        <circle cx="110" cy="92" r="32" fill="#EAF2FF" />
        <circle cx="110" cy="92" r="32" fill="url(#lensShine)" />

        {/* eye, with blink loop */}
        <motion.circle
          cx="110" cy="92" r="13" fill="#14171F"
          style={{ transformOrigin: "110px 92px" }}
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.85, 0.9, 0.95, 1] }}
        />
        <circle cx="115" cy="87" r="3.4" fill="#FFFFFF" />

        {/* mouth, small grin */}
        <path
          d="M92 122 Q110 134 128 122"
          stroke="#1B2A4D"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </motion.g>

      <defs>
        <linearGradient id="bodyShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE17A" />
          <stop offset="100%" stopColor="#E6B400" />
        </linearGradient>
        <radialGradient id="lensShine" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#EAF2FF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
}
