"use client";

import { useState, FormEvent } from "react";
import { usePathname } from "next/navigation";

type Status = "idle" | "sending" | "sent" | "error";

export default function FeedbackForm() {
  const pathname = usePathname();
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (rating === 0) {
      setErrorMsg("Please choose a rating from 1 to 5.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
      rating,
      page: pathname,
      website: String(data.get("website") || ""),
    };

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong.");
        return;
      }
      setStatus("sent");
      form.reset();
      setRating(0);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-sm text-steel-700">
        Thanks for the feedback — it goes straight to the team that maintains this site.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <p className="text-sm font-medium text-ink">How was your experience on this site?</p>
        <div className="mt-2 flex gap-2" role="radiogroup" aria-label="Rating from 1 to 5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              onClick={() => setRating(n)}
              className={`h-10 w-10 border text-sm font-mono transition-colors ${
                rating >= n
                  ? "border-signal bg-signal text-paper"
                  : "border-steel-300 bg-white text-steel-700 hover:border-signal"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="feedback-message" className="block text-sm font-medium text-ink">
          What worked, or what should we fix?
        </label>
        <textarea
          id="feedback-message"
          name="message"
          required
          rows={3}
          className="mt-1.5 w-full border border-steel-300 bg-white px-3 py-2.5 text-sm text-ink focus:border-signal"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="feedback-name" className="block text-sm font-medium text-ink">
            Name (optional)
          </label>
          <input
            id="feedback-name"
            name="name"
            className="mt-1.5 w-full border border-steel-300 bg-white px-3 py-2.5 text-sm text-ink focus:border-signal"
          />
        </div>
        <div>
          <label htmlFor="feedback-email" className="block text-sm font-medium text-ink">
            Email (optional)
          </label>
          <input
            id="feedback-email"
            name="email"
            type="email"
            className="mt-1.5 w-full border border-steel-300 bg-white px-3 py-2.5 text-sm text-ink focus:border-signal"
          />
        </div>
      </div>

      {errorMsg && (
        <p role="alert" className="text-sm text-signal">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-ink px-5 py-3 font-body text-sm font-semibold text-paper transition-colors hover:bg-steel-900 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit feedback"}
      </button>
    </form>
  );
}
