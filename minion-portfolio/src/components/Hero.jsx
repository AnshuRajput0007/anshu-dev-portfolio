import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import MinionMascot from "./MinionMascot";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { heroRoles } from "../data/skills";

const GoggleScene = lazy(() => import("./GoggleScene"));

export default function Hero() {
  const typed = useTypingEffect(heroRoles);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28"
    >
      <FloatingParticles />

      {/* ambient glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-denim/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-minion/10 blur-[100px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow mb-4 rounded-full border border-minion/30 bg-minion/5 px-4 py-1.5">
            Open to Build Crazy Web Solutions
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-cream">
            Hey, I'm <span className="text-minion">Anshu</span>.
            <br />I build pixel-perfect, fast web experiences.
          </h1>

          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-mist">
            B.Tech CSE @ RKGIT · Class of 2027 · Delhi, India
          </p>

          <p className="mt-5 h-7 font-mono text-base sm:text-lg text-goggle">
            <span aria-live="polite">{typed}</span>
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-minion" style={{ height: "1.1em" }} />
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full bg-minion px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-void shadow-glow transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full border border-goggle/30 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:border-minion hover:text-minion"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="#contact"
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-mist transition-colors hover:text-minion"
            >
              <Mail size={16} /> Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative flex h-[320px] w-[320px] flex-shrink-0 items-center justify-center sm:h-[380px] sm:w-[380px]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div className="absolute inset-0">
            <Suspense fallback={null}>
              <GoggleScene />
            </Suspense>
          </div>
          <MinionMascot className="relative z-10 h-44 w-auto drop-shadow-[0_0_30px_rgba(255,210,63,0.25)] sm:h-52" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor="hover"
        aria-label="Scroll to About section"
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-mist hover:text-minion"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
