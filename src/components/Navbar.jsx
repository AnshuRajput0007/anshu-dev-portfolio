import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-void/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 py-4">
        <a
          href="#top"
          data-cursor="hover"
          className="flex items-center gap-2 font-display text-lg font-semibold text-cream"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-minion">
            <span className="h-2.5 w-2.5 rounded-full bg-minion" />
          </span>
          AR<span className="text-minion">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-goggle">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor="hover"
                className="relative transition-colors hover:text-minion"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-cursor="hover"
          className="hidden md:inline-flex rounded-full bg-minion px-5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-void shadow-glow-sm transition-transform hover:scale-105"
        >
          Hire Me
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-cream"
          data-cursor="hover"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-void/95 border-b border-white/5"
          >
            <ul className="flex flex-col gap-1 px-5 pb-5 pt-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-body text-base text-goggle hover:text-minion"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex rounded-full bg-minion px-5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-void"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
