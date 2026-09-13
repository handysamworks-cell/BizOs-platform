"use client";

import { useState, FormEvent } from "react";
import { site } from "@/lib/site";

type Message = { from: "bot" | "user"; text: string };

const INITIAL_MESSAGES: Message[] = [
  {
    from: "bot",
    text: "Hi, this is HandySam Engineering. Tell us what you're looking for — doors, MGPS, nurse call, shielding, stainless ware, or spares — and a name and phone or email, and our team will follow up.",
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const text = String(data.get("chat_message") || "").trim();
    const contact = String(data.get("chat_contact") || "").trim();
    const website = String(data.get("website") || "");

    if (website) return; // honeypot
    if (!text || !contact) return;

    setMessages((prev) => [...prev, { from: "user", text: `${text} — reach me at ${contact}` }]);
    setSending(true);
    form.reset();

    // Decide whether "contact" looks like an email; otherwise treat as phone/name context.
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Website chat visitor",
          email: looksLikeEmail ? contact : `no-email-provided+${Date.now()}@handysamworks.co.ke`,
          phone: looksLikeEmail ? "" : contact,
          message: text,
          channel: "chat",
        }),
      });
      if (res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Thanks — that's with our team now. We'll be in touch shortly. For anything urgent, call or WhatsApp us directly.",
          },
        ]);
        setDone(true);
      } else {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "That didn't go through. Please WhatsApp us instead — it's faster." },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "That didn't go through. Please WhatsApp us instead — it's faster." },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[26rem] w-80 flex-col border border-steel-300 bg-white shadow-xl sm:w-96">
          <div className="flex items-center justify-between bg-ink px-4 py-3 text-paper">
            <p className="font-head text-sm font-bold">Ask HandySam</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-steel-300 hover:text-paper"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[90%] px-3 py-2 text-sm leading-relaxed ${
                  m.from === "bot"
                    ? "bg-steel-100 text-ink"
                    : "ml-auto bg-signal text-paper"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {!done ? (
            <form onSubmit={handleSubmit} className="space-y-2 border-t border-steel-300 p-3">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <textarea
                name="chat_message"
                required
                rows={2}
                placeholder="What do you need?"
                className="w-full border border-steel-300 px-2.5 py-2 text-sm focus:border-signal"
              />
              <input
                name="chat_contact"
                required
                placeholder="Your email or phone"
                className="w-full border border-steel-300 px-2.5 py-2 text-sm focus:border-signal"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-signal py-2 text-sm font-semibold text-paper hover:bg-copper disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send"}
              </button>
            </form>
          ) : (
            <div className="border-t border-steel-300 p-3 text-center">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="block bg-ink py-2 text-sm font-semibold text-paper hover:bg-steel-900"
              >
                Continue on WhatsApp
              </a>
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close enquiry chat" : "Open enquiry chat"}
        className="ml-auto flex h-14 w-14 items-center justify-center bg-signal text-paper shadow-lg transition-transform hover:scale-105"
      >
        {open ? "✕" : "Chat"}
      </button>
    </div>
  );
}
