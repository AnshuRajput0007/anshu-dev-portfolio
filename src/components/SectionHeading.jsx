import { motion } from "framer-motion";
import MiniMinion from "./MiniMinion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "left", mascotPose }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="relative inline-block font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-cream">
        {title}
        {mascotPose && (
          <MiniMinion
            pose={mascotPose}
            className="absolute -top-6 -right-5 h-9 w-9 sm:-top-7 sm:-right-6 sm:h-11 sm:w-11"
          />
        )}
      </h2>
      {subtitle && <p className="max-w-xl text-mist text-base sm:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
