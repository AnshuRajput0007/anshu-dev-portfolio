/**
 * lucide-react dropped third-party brand glyphs, and we'd rather draw
 * two original, on-brand monogram badges than chase a logo library.
 * These read clearly as "GitHub" / "LinkedIn" links without tracing
 * either company's actual logo.
 */
export function GithubMark({ size = 18, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-current font-mono ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.42, lineHeight: 1 }}
      aria-hidden="true"
    >
      gh
    </span>
  );
}

export function LinkedinMark({ size = 18, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-current font-mono ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.42, lineHeight: 1 }}
      aria-hidden="true"
    >
      in
    </span>
  );
}
