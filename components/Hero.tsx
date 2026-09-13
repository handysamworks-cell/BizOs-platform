import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-steel-900 bg-ink text-paper">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-content gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-copper">
            Ruiru, Kenya — serving healthcare facilities regionally
          </p>
          <h1 className="mt-5 max-w-xl font-head text-4xl font-bold leading-[1.1] sm:text-5xl">
            Healthcare infrastructure, engineered to spec.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-steel-300">
            HandySam Engineering fabricates and installs hospital doors, medical gas pipeline
            systems, nurse call networks, radiation shielding and stainless steel equipment —
            built to HTM 02-01 and BS standards, and backed by our own biomedical engineering
            team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-signal px-6 py-3 font-body text-sm font-semibold text-paper transition-colors hover:bg-copper"
            >
              Request a quote
            </Link>
            <Link
              href="/products"
              className="border border-steel-700 px-6 py-3 font-body text-sm font-semibold text-paper transition-colors hover:border-paper"
            >
              View capabilities
            </Link>
          </div>
        </div>

        <svg
          viewBox="0 0 420 320"
          className="draw-in mx-auto w-full max-w-sm text-copper"
          style={{ "--draw-length": 1400 } as React.CSSProperties}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          {/* Schematic: manifold header with gauges and branch lines, echoing the MGPS catalog imagery */}
          <line x1="40" y1="60" x2="380" y2="60" />
          <line x1="90" y1="60" x2="90" y2="260" />
          <line x1="180" y1="60" x2="180" y2="220" />
          <line x1="270" y1="60" x2="270" y2="260" />
          <line x1="330" y1="60" x2="330" y2="200" />
          <circle cx="90" cy="100" r="26" />
          <circle cx="270" cy="100" r="26" />
          <line x1="70" y1="100" x2="110" y2="100" strokeOpacity="0.5" />
          <line x1="90" y1="80" x2="90" y2="120" strokeOpacity="0.5" />
          <line x1="250" y1="100" x2="290" y2="100" strokeOpacity="0.5" />
          <line x1="270" y1="80" x2="270" y2="120" strokeOpacity="0.5" />
          <rect x="150" y="150" width="60" height="40" rx="2" />
          <rect x="300" y="170" width="50" height="30" rx="2" />
          <line x1="90" y1="260" x2="130" y2="260" />
          <line x1="270" y1="260" x2="230" y2="260" />
          <circle cx="330" cy="200" r="6" className="text-signal" fill="currentColor" stroke="none" />
          <circle cx="90" cy="260" r="6" className="text-signal" fill="currentColor" stroke="none" />
          <circle cx="270" cy="260" r="6" className="text-signal" fill="currentColor" stroke="none" />
        </svg>
      </div>
    </section>
  );
}
