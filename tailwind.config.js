/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0B0C10",     // primary background
        ink: "#14171F",      // card / panel background
        ink2: "#1B1F2A",     // raised panel background
        minion: {
          DEFAULT: "#FFD23F", // signature yellow
          soft: "#FFE17A",
          deep: "#E6B400",
        },
        denim: {
          DEFAULT: "#2E4374", // overalls blue / glow
          soft: "#4C68A8",
          deep: "#1B2A4D",
        },
        goggle: "#C9CFD8",   // lens silver
        cream: "#FFF4D6",    // rare light accent
        mist: "#8B93A7",     // muted body text
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 210, 63, 0.35)",
        "glow-sm": "0 0 16px rgba(255, 210, 63, 0.3)",
        denimglow: "0 0 60px rgba(76, 104, 168, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 90%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(0.1)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 0.9, transform: "scale(1.06)" },
        },
        drift: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: 0 },
          "10%": { opacity: 0.8 },
          "90%": { opacity: 0.5 },
          "100%": { transform: "translateY(-120vh) translateX(20px)", opacity: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 8s ease-in-out infinite",
        blink: "blink 4.5s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
        drift: "drift linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
