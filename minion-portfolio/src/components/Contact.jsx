import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ThemedQRCode from "./ThemedQRCode";
import { LinkedinMark } from "./BrandIcon";

const SITE_URL = "https://your-portfolio-url.com";

const socials = [
  { icon: LinkedinMark, label: "LinkedIn", href: "https://www.linkedin.com/in/anshu-rajput-3b9a15375" },
  { icon: Mail, label: "Email", href: "mailto:rajputanshu0007@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+918587052286" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    // NOTE: this simulates a send so the UI works out of the box.
    // Wire this up to Formspree, EmailJS, or your own API route to
    // actually deliver messages — see README for a 2-minute setup.
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1400);
  };

  return (
    <section id="contact" className="relative px-5 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something."
          subtitle="Have an internship opening, a project, or just want to talk shop? My inbox is open."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-panel goggle-frame flex flex-col gap-5 rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-mist">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me a bit about the role or project..."
                className="glass-input rounded-xl px-4 py-3 text-sm text-cream placeholder:text-mist/60 outline-none transition-colors"
              />
            </label>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              data-cursor="hover"
              whileTap={{ scale: 0.97 }}
              className="relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-minion px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-void shadow-glow-sm transition-transform hover:scale-[1.02] disabled:opacity-80"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    <Send size={16} /> Send Message
                  </motion.span>
                )}
                {status === "loading" && (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </motion.span>
                )}
                {status === "success" && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} /> Sent! I'll reply soon.
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left"
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-lg font-semibold text-cream">Find me elsewhere</h3>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    data-cursor="hover"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-goggle/20 text-goggle transition-colors hover:border-minion hover:text-minion"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <ThemedQRCode value={SITE_URL} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder, autoComplete }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-wider text-mist">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="glass-input rounded-xl px-4 py-3 text-sm text-cream placeholder:text-mist/60 outline-none transition-colors"
      />
    </label>
  );
}
