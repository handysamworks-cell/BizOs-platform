import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { catalog, services } from "@/lib/catalog";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-5 py-10 text-center sm:grid-cols-4">
          {[
            ["7", "capability areas"],
            ["HTM 02-01", "compliant MGPS"],
            ["304/316", "grade stainless"],
            ["In-house", "biomedical engineers"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="font-head text-2xl font-bold text-ink sm:text-3xl">{stat}</p>
              <p className="mt-1 text-xs text-steel-700 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capability grid */}
      <section className="mx-auto max-w-content px-5 py-16 sm:py-20">
        <SectionHeading
          title="What we build and supply"
          intro="Six product categories and a biomedical engineering service line, drawn from our full capabilities catalog."
        />

        <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((section) => (
            <Link
              key={section.slug}
              href={`/products#${section.slug}`}
              className="group bg-white p-6 transition-colors hover:bg-steel-100"
            >
              <span className="font-mono text-xs text-copper">{section.number}</span>
              <h3 className="mt-2 font-head text-lg font-bold text-ink">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-700">{section.intro}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-signal group-hover:underline">
                View products
              </span>
            </Link>
          ))}
          <Link
            href="/services"
            className="group bg-ink p-6 text-paper transition-colors hover:bg-steel-900"
          >
            <span className="font-mono text-xs text-copper">{services.number}</span>
            <h3 className="mt-2 font-head text-lg font-bold">{services.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-300">{services.intro}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-signal group-hover:underline">
              View services
            </span>
          </Link>
        </div>
      </section>

      {/* CTA + lead form */}
      <section id="quote" className="border-t border-line bg-steel-100">
        <div className="mx-auto grid max-w-content gap-10 px-5 py-16 sm:py-20 md:grid-cols-2">
          <div>
            <SectionHeading
              title="Tell us what your facility needs"
              intro="Share your requirement and we'll come back with the right products, lead times and a site visit if one is needed. For anything urgent, call or WhatsApp us directly."
            />
            <div className="mt-6 space-y-1 font-mono text-sm text-steel-700">
              <p>Charleston House, Ruiru, Eastern Bypass</p>
              <p>info@handysamworks.co.ke</p>
              <p>+254 787 315 910</p>
            </div>
          </div>
          <div className="bg-white p-6 sm:p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
