import { Suspense, lazy } from "react";

const QRCode = lazy(() => import("react-qr-code"));

/**
 * QR scanners need real contrast, so the code itself stays dark-on-cream
 * for reliable scanning — the "theme" lives in the frame around it
 * (yellow goggle border, glow, mono caption) rather than inside the matrix.
 */
export default function ThemedQRCode({ value, caption = "Scan to open this portfolio" }) {
  return (
    <div className="goggle-frame inline-flex flex-col items-center gap-3 rounded-2xl bg-ink/60 p-5">
      <div className="flex h-[144px] w-[144px] items-center justify-center rounded-xl bg-cream p-3">
        <Suspense fallback={<div className="h-[120px] w-[120px] animate-pulse rounded bg-ink/20" />}>
          <QRCode value={value} size={120} bgColor="#FFF4D6" fgColor="#14171F" level="M" />
        </Suspense>
      </div>
      <span className="font-mono text-[11px] uppercase tracking-wider text-mist">{caption}</span>
    </div>
  );
}
