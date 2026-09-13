"use client";

import { useState, FormEvent } from "react";
import { catalog } from "@/lib/catalog";

type Status = "idle" | "sending" | "sent" | "error";

export default function LeadForm({ defaultInterest }: { defaultInterest?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      company: String(data.get("company") || ""),
      product_interest: String(data.get("product_interest") || ""),
      message: String(data.get("message") || ""),
      channel: "form" as const,
      website: String(data.get("website") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-steel-300 bg-white p-6">
        <p className="font-head text-lg font-bold text-ink">Enquiry received</p>
        <p className="mt-2 text-sm text-steel-700">
          Thank you — our team will get back to you within one business day. For anything
          urgent, call or WhatsApp {" "}
          <a href="tel:+254787315910" className="text-signal underline">
            +254 787 315 910
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from real visitors */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Field label="Facility / company" name="company" autoComplete="organization" />
      </div>

      <div>
        <label htmlFor="product_interest" className="block text-sm font-medium text-ink">
          What do you need?
        </label>
        <select
          id="product_interest"
          name="product_interest"
          defaultValue={defaultInterest || ""}
          className="mt-1.5 w-full border border-steel-300 bg-white px-3 py-2.5 text-sm text-ink focus:border-signal"
        >
          <option value="">Select a capability</option>
          {catalog.map((section) => (
            <option key={section.slug} value={section.title}>
              {section.title}
            </option>
          ))}
          <option value="Biomedical engineering services">Biomedical engineering services</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Tell us about your requirement
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Facility name, location, scope of work, timeline…"
          className="mt-1.5 w-full border border-steel-300 bg-white px-3 py-2.5 text-sm text-ink placeholder:text-steel-500 focus:border-signal"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-signal">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-signal px-5 py-3 font-body text-sm font-semibold text-paper transition-colors hover:bg-copper disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-signal"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full border border-steel-300 bg-white px-3 py-2.5 text-sm text-ink placeholder:text-steel-500 focus:border-signal"
      />
    </div>
  );
}
