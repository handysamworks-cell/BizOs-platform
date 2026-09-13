"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/products", label: "Capabilities" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-steel-900 bg-ink text-paper">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={`${site.name} logo`}
            width={40}
            height={30}
            className="h-8 w-auto"
            priority
          />
          <span className="font-head text-base font-bold tracking-tight sm:text-lg">
            HandySam <span className="font-normal text-steel-300">Engineering</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-steel-300 transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="font-mono text-sm text-steel-300 hover:text-paper"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-signal px-4 py-2 font-body text-sm font-semibold text-paper transition-colors hover:bg-copper"
          >
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-steel-900 px-5 pb-5 md:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-2 py-3 font-body text-sm text-steel-300 hover:bg-steel-900 hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-signal px-4 py-3 text-center font-body text-sm font-semibold text-paper"
              >
                Request a quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
