import { useEffect, useState } from "react";

/**
 * A handful of soft yellow motes drifting upward — a nod to Minion "goo"
 * without literal cartoon eyeballs. Pure CSS animation (GPU transform only)
 * so it stays cheap, and respects prefers-reduced-motion via global CSS.
 */
export default function FloatingParticles({ count = 22 }) {
  const [particles, setParticles] = useState([]);

  // Randomness is generated post-mount (not during render) so this
  // component stays a pure function of its props/state, per React's
  // rules on idempotent rendering.
  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 5,
        duration: 14 + Math.random() * 16,
        delay: Math.random() * -20,
        opacity: 0.25 + Math.random() * 0.5,
      }))
    );
  }, [count]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-minion animate-drift"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: "0 0 6px rgba(255,210,63,0.8)",
          }}
        />
      ))}
    </div>
  );
}
