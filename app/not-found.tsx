import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-start px-5 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-copper">404</p>
      <h1 className="mt-4 font-head text-3xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-steel-700">
        The page you're looking for doesn't exist or has moved. Try our capabilities page, or
        get in touch directly.
      </p>
      <div className="mt-6 flex gap-4">
        <Link href="/products" className="bg-signal px-5 py-2.5 text-sm font-semibold text-paper hover:bg-copper">
          View capabilities
        </Link>
        <Link href="/contact" className="border border-steel-300 px-5 py-2.5 text-sm font-semibold text-ink hover:border-signal">
          Contact us
        </Link>
      </div>
    </section>
  );
}
