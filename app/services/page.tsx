import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Biomedical Engineering Services",
  description:
    "Hospital design consultancy, medical equipment maintenance, calibration, and installation, training and commissioning services from HandySam Engineering.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-steel-900 bg-ink text-paper">
        <div className="mx-auto max-w-content px-5 py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-copper">
            {services.number} — Services
          </p>
          <h1 className="mt-4 max-w-2xl font-head text-3xl font-bold sm:text-4xl">
            {services.title}
          </h1>
          <p className="mt-4 max-w-xl text-steel-300">{services.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.items.map((item, i) => (
            <article key={item.name} className="border border-line bg-white p-6">
              <span className="font-mono text-xs text-copper">0{i + 1}</span>
              <h2 className="mt-2 font-head text-lg font-bold text-ink">{item.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-700">{item.blurb}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 border border-line bg-steel-100 p-8 text-center sm:p-10">
          <h2 className="font-head text-xl font-bold text-ink">
            Planning a new ward, theatre or plant room?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-steel-700">
            Our design consultancy works alongside your architect or contractor from concept
            through commissioning.
          </p>
          <Link
            href="/contact?interest=Biomedical%20engineering%20services"
            className="mt-6 inline-block bg-signal px-6 py-3 text-sm font-semibold text-paper hover:bg-copper"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </>
  );
}
