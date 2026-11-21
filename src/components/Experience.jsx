import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Leadership"
          title="Where I've led."
          subtitle="Technical work pays the bills, but leading people taught me how to actually ship things on a deadline."
        />

        <div className="relative mt-14 ml-3 sm:ml-5">
          <div
            aria-hidden="true"
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-minion/50 via-denim-soft/30 to-transparent"
          />

          <ol className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <motion.li
                key={item.role}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                className="relative pl-8 sm:pl-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full bg-minion shadow-glow-sm"
                />
                <span className="font-mono text-xs uppercase tracking-wider text-minion">
                  {item.period}
                </span>
                <h3 className="mt-1 font-display text-xl sm:text-2xl font-semibold text-cream">
                  {item.role}
                </h3>
                <p className="mt-0.5 font-mono text-sm text-mist">{item.org}</p>
                <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-goggle/90">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
