import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { skillGroups } from "../data/skills";

const terminalLines = [
  "$ whoami → frontend developer",
  "$ status → caffeinated, shipping",
  "$ cat skills.json → see below",
];

export default function Skills() {
  const typed = useTypingEffect(terminalLines, { typingSpeed: 35, pauseTime: 1400 });

  return (
    <section id="skills" className="relative px-5 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="What I build with."
          subtitle="The stack I reach for most, grouped by what it's for."
        />

        {/* terminal flourish */}
        <div className="goggle-frame glass-panel mt-10 rounded-2xl px-5 py-4 sm:px-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-minion/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-denim-soft/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-goggle/40" />
            <span className="ml-2 font-mono text-[11px] text-mist">skills.sh</span>
          </div>
          <p className="min-h-[1.4rem] font-mono text-sm text-minion">
            {typed}
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-minion" style={{ height: "1em" }} />
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: gi * 0.08 }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-mist">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    data-cursor="hover"
                    className="rounded-full border border-minion/20 bg-minion/5 px-3 py-1.5 text-sm text-cream transition-all hover:border-minion/60 hover:bg-minion/10 hover:shadow-glow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
