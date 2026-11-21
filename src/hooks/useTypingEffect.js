import { useEffect, useState } from "react";

/**
 * Cycles through an array of strings with a classic typewriter effect.
 * Pauses on reduced-motion preference by just showing the first phrase.
 */
export function useTypingEffect(
  phrases,
  { typingSpeed = 55, deletingSpeed = 30, pauseTime = 1800 } = {}
) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [text, setText] = useState(() => (prefersReducedMotion ? phrases[0] ?? "" : ""));
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const current = phrases[phraseIndex % phrases.length];
    let timeout;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, prefersReducedMotion, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
