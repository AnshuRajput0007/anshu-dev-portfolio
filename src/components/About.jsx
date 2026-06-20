import { motion } from "framer-motion";
import { Code2, Palette, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import StatCounter from "./StatCounter";

export default function About() {
  return (
    <section id="about" className="relative px-5 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Code by day. Ship by night."
          subtitle="A quick rundown of who I am and how I work."
          mascotPose="sit"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg leading-relaxed text-goggle">
              I'm a frontend-focused B.Tech CSE student at Raj Kumar
              Goel Institute of Technology (RKGIT), graduating in
              2027. I care about building responsive, user-friendly
              web apps with a sharp UI/UX instinct — blending visual
              polish with clean, scalable code.
            </p>
            <p className="leading-relaxed text-mist">
              Alongside the technical side, I bring real leadership
              experience: I lead the technical wing of my college's
              architecture & design society, and ran the promotional
              strategy for a major college fest. Both taught me a lot
              about shipping under a real deadline with a real team.
            </p>
            <p className="leading-relaxed text-mist">
              Right now I'm deepening my React.js and frontend
              optimization skills, and actively looking for a frontend
              web development internship where I can learn from an
              experienced team and ship things real users touch.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
              <StatCounter value={3} suffix="+" label="Projects Built" />
              <StatCounter value={2} label="Leadership Roles" />
              <StatCounter value={8} suffix="+" label="Tech Stack" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="goggle-frame glass-panel relative flex flex-col gap-5 rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-mist">
                status.json
              </span>
              <span className="flex h-2.5 w-2.5 rounded-full bg-minion shadow-glow-sm" />
            </div>

            <pre className="overflow-x-auto rounded-xl bg-black/30 p-4 font-mono text-xs sm:text-sm leading-relaxed text-goggle">
{`{
  "name": "Anshu Rajput",
  "role": "Frontend Developer",
  "degree": "B.Tech CSE — RKGIT, 2027",
  "location": "Delhi, India",
  "stack": ["React.js", "JavaScript", "Tailwind CSS"],
  "status": "open_to_internships"
}`}
            </pre>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <Fact icon={Code2} label="Clean code" />
              <Fact icon={Palette} label="UI/UX focus" />
              <Fact icon={Users} label="Team leader" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Fact({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-2 py-4 text-center">
      <Icon size={18} className="text-minion" />
      <span className="font-mono text-[10px] uppercase tracking-wide text-mist">{label}</span>
    </div>
  );
}
