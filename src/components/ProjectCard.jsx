import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubMark } from "./BrandIcon";

const accentMap = {
  minion: {
    ring: "border-minion/25 hover:border-minion/60",
    glow: "hover:shadow-glow",
    chip: "border-minion/30 text-minion",
    dot: "bg-minion",
  },
  denim: {
    ring: "border-denim-soft/30 hover:border-denim-soft/70",
    glow: "hover:shadow-denimglow",
    chip: "border-denim-soft/40 text-denim-soft",
    dot: "bg-denim-soft",
  },
};

// A "#" placeholder is a dead link: it scrolls to the top and is useless to
// crawlers and screen readers, so only render links that point somewhere.
const isLink = (url) => Boolean(url) && url !== "#";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const accent = accentMap[project.accent] ?? accentMap.minion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: (index % 2) * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`group relative flex h-full flex-col rounded-2xl border bg-ink/60 p-6 transition-shadow duration-300 ${accent.ring} ${accent.glow}`}
      >
        {/* mock editor chrome */}
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className={`h-2.5 w-2.5 rounded-full ${accent.dot}`} />
          <span className="ml-2 font-mono text-[11px] text-mist">{project.id}.tsx</span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-semibold text-cream">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-mist">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-goggle/90">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border px-2.5 py-1 font-mono text-[11px] ${accent.chip}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {(isLink(project.liveUrl) || isLink(project.codeUrl)) && (
          <div className="mt-6 flex items-center gap-5 border-t border-white/5 pt-4">
            {isLink(project.liveUrl) && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title}: live demo`}
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cream transition-colors hover:text-minion"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
            {isLink(project.codeUrl) && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title}: source code`}
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-mist transition-colors hover:text-minion"
              >
                <GithubMark size={15} /> Code
              </a>
            )}
          </div>
        )}
      </motion.article>
    </motion.div>
  );
}
