import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "HandySam Engineering is a Kenya-based healthcare infrastructure and specialist engineering company, based in Ruiru.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-content px-5 py-16 sm:py-20">
      <SectionHeading
        title="About HandySam Engineering"
        intro="Fabrication, installations and systems for hospitals, clinics and laboratories."
      />

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_0.8fr]">
        <div className="space-y-5 text-base leading-relaxed text-steel-700">
          <p>
            {site.name} provides reliable healthcare infrastructure, medical equipment and
            specialist engineering solutions for hospitals, clinics, laboratories and other
            healthcare facilities.
          </p>
          <p>
            Our product range covers hospital doors, medical gas pipeline systems (MGPS), nurse
            call systems, radiation shielding solutions, stainless steel hospital equipment, and
            MGPS plant components and spares.
          </p>
          <p>
            We combine quality products with practical engineering knowledge to help healthcare
            facilities build safe, functional, durable and efficient environments. From
            individual equipment and components to complete system requirements, we aim to be a
            dependable partner for healthcare projects across the region.
          </p>
        </div>

        <div className="border border-line bg-steel-100 p-6">
          <p className="font-head text-sm font-bold text-ink">Where to find us</p>
          <p className="mt-2 text-sm text-steel-700">
            {site.address.line1}
            <br />
            {site.address.line2}
          </p>
          <p className="mt-4 font-head text-sm font-bold text-ink">Get in touch</p>
          <p className="mt-2 font-mono text-sm text-steel-700">
            {site.phone}
            <br />
            {site.email}
          </p>
        </div>
      </div>
    </section>
  );
}
