import { useEffect, useRef } from "react";

export default function StatCounter({ value, suffix = "", label }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    let tweenRef;
    let triggerRef;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const obj = { val: 0 };
        tweenRef = gsap.to(obj, {
          val: value,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
        triggerRef = tweenRef.scrollTrigger;
      }
    );

    return () => {
      cancelled = true;
      triggerRef?.kill();
      tweenRef?.kill();
    };
  }, [value]);

  return (
    <div className="flex flex-col">
      <span className="font-display text-3xl sm:text-4xl font-bold text-minion">
        <span ref={numRef}>0</span>
        {suffix}
      </span>
      <span className="mt-1 font-mono text-xs uppercase tracking-wider text-mist">{label}</span>
    </div>
  );
}
