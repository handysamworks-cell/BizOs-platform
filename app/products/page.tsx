import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { catalog } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Hospital Doors, MGPS, Nurse Call & More",
  description:
    "Browse HandySam Engineering's full catalog: hygienic hospital doors, medical gas pipeline systems (MGPS), nurse call systems, X-ray radiation shielding, stainless steel ware and MGPS plant spares.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-steel-900 bg-ink text-paper">
        <div className="mx-auto max-w-content px-5 py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-copper">
            Capabilities & products
          </p>
          <h1 className="mt-4 max-w-2xl font-head text-3xl font-bold sm:text-4xl">
            Everything we fabricate, supply and install
          </h1>
          <p className="mt-4 max-w-xl text-steel-300">
            Every product below can be specified to your facility's layout, gas requirements
            and finish. Request a quote for pricing and lead times.
          </p>
        </div>
      </section>

      {/* Sub-nav */}
      <nav className="sticky top-[65px] z-30 overflow-x-auto border-b border-line bg-white">
        <ul className="mx-auto flex max-w-content gap-6 px-5 py-3 text-sm">
          {catalog.map((section) => (
            <li key={section.slug} className="whitespace-nowrap">
              <a href={`#${section.slug}`} className="text-steel-700 hover:text-signal">
                {section.number} {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {catalog.map((section, i) => (
        <section
          key={section.slug}
          id={section.slug}
          className={`scroll-mt-32 border-b border-line px-5 py-16 sm:py-20 ${
            i % 2 === 1 ? "bg-steel-100" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-content">
            <SectionHeading number={section.number} title={section.title} intro={section.intro} />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.products.map((product) => (
                <article key={product.slug} className="flex flex-col border border-line bg-white p-6">
                  <h3 className="font-head text-base font-bold text-ink">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-700">{product.blurb}</p>

                  {product.features.length > 0 && (
                    <ul className="mt-4 space-y-1.5 text-sm text-steel-700">
                      {product.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 bg-signal" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  {product.specs.length > 0 && (
                    <ul className="mt-4 space-y-1 border-t border-line pt-4 font-mono text-xs text-steel-700">
                      {product.specs.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={`/contact?interest=${encodeURIComponent(section.title)}`}
                    className="mt-5 text-sm font-semibold text-signal hover:underline"
                  >
                    Request a quote
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
