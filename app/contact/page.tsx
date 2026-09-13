import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import FeedbackForm from "@/components/FeedbackForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Get a Quote",
  description:
    "Request a quote from HandySam Engineering for hospital doors, MGPS, nurse call systems, radiation shielding or stainless steel equipment.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { interest?: string };
}) {
  return (
    <>
      <section className="border-b border-steel-900 bg-ink text-paper">
        <div className="mx-auto max-w-content px-5 py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-copper">Contact</p>
          <h1 className="mt-4 max-w-2xl font-head text-3xl font-bold sm:text-4xl">
            Request a quote
          </h1>
          <p className="mt-4 max-w-xl text-steel-300">
            Tell us about your facility and requirement. For urgent enquiries, call or WhatsApp
            us directly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content grid gap-10 px-5 py-16 sm:py-20 md:grid-cols-[0.8fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <p className="font-head text-sm font-bold text-ink">Call or WhatsApp</p>
            <a href={site.phoneHref} className="mt-1 block font-mono text-lg text-signal">
              {site.phone}
            </a>
          </div>
          <div>
            <p className="font-head text-sm font-bold text-ink">Email</p>
            <a href={`mailto:${site.email}`} className="mt-1 block font-mono text-sm text-steel-700">
              {site.email}
            </a>
            <a href={`mailto:${site.emailAlt}`} className="block font-mono text-sm text-steel-700">
              {site.emailAlt}
            </a>
          </div>
          <div>
            <p className="font-head text-sm font-bold text-ink">Workshop & offices</p>
            <p className="mt-1 text-sm text-steel-700">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
          </div>
        </div>

        <div className="border border-line bg-white p-6 sm:p-8">
          <LeadForm defaultInterest={searchParams.interest} />
        </div>
      </section>

      <section id="feedback" className="scroll-mt-24 border-t border-line bg-steel-100">
        <div className="mx-auto max-w-content px-5 py-16 sm:py-20">
          <SectionHeading
            title="Give feedback on this site"
            intro="Spot something confusing, broken, or missing? A quick rating and note helps us improve this site."
          />
          <div className="mt-8 max-w-lg border border-line bg-white p-6 sm:p-8">
            <FeedbackForm />
          </div>
        </div>
      </section>
    </>
  );
}
