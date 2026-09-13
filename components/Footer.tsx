import Link from "next/link";
import { site } from "@/lib/site";
import { catalog } from "@/lib/catalog";

export default function Footer() {
  return (
    <footer className="border-t border-steel-900 bg-ink text-steel-300">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-head text-lg font-bold text-paper">HandySam Engineering</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
          <div className="mt-5 flex gap-4 text-sm">
            <a href={site.social.facebook} className="hover:text-paper" aria-label="Facebook">FB</a>
            <a href={site.social.instagram} className="hover:text-paper" aria-label="Instagram">IG</a>
            <a href={site.social.twitter} className="hover:text-paper" aria-label="Twitter / X">X</a>
          </div>
        </div>

        <div>
          <p className="font-body text-sm font-semibold text-paper">Capabilities</p>
          <ul className="mt-4 space-y-2 text-sm">
            {catalog.map((section) => (
              <li key={section.slug}>
                <Link href={`/products#${section.slug}`} className="hover:text-paper">
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-sm font-semibold text-paper">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-paper">Biomedical services</Link></li>
            <li><Link href="/about" className="hover:text-paper">About us</Link></li>
            <li><Link href="/contact" className="hover:text-paper">Get a quote</Link></li>
            <li><Link href="/contact#feedback" className="hover:text-paper">Give feedback</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-body text-sm font-semibold text-paper">Get in touch</p>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            <li><a href={site.phoneHref} className="hover:text-paper">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-paper">{site.email}</a></li>
            <li className="pt-2 font-body text-steel-500">{site.address.line1}</li>
            <li className="font-body text-steel-500">{site.address.line2}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel-900 px-5 py-5 text-center text-xs text-steel-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
