export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-5 sm:px-8 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-mist">
          © {new Date().getFullYear()} Anshu Rajput — built with React, Tailwind & a little goggle magic.
        </p>
        <a
          href="#top"
          data-cursor="hover"
          className="font-mono text-xs uppercase tracking-wider text-goggle transition-colors hover:text-minion"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
