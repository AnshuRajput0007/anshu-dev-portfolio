import { useEffect, useRef, useState } from "react";

/**
 * Replaces the system cursor with a goggle-lens ring on fine pointers.
 * The ring eases toward the pointer; an inner dot tracks it exactly.
 * Hovering anything with [data-cursor="hover"] enlarges + glows the ring,
 * echoing the "lens focusing on something interesting" idea.
 */
export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(isFinePointer && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let scale = 1;
    let targetScale = 1;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target;
      targetScale = target?.closest?.('[data-cursor="hover"]') ? 1.8 : 1;
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      scale += (targetScale - scale) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-8 w-8 rounded-full border-2 border-minion/80 transition-colors duration-200"
        style={{ boxShadow: "0 0 14px rgba(255,210,63,0.35)" }}
      />
      <div ref={dotRef} className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-minion" />
    </div>
  );
}
