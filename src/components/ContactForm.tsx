"use client";

import { useId, useState } from "react";
import { clsx } from "clsx";
import type { Locale } from "@/lib/i18n";

const inputBase =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2";

const copy = {
  en: {
    formLabel: "Contact form",
    name: "Name",
    email: "Email",
    message: "Message",
    namePh: "Your name",
    emailPh: "you@company.no",
    messagePh: "A short description of what you’d like help with…",
    submit: "Let’s talk",
    sending: "Sending...",
    received: "Message received",
    failed: "Could not send message",
    thanks: "Thanks — we’ll get back to you soon.",
    retry: "Please try again in a moment or email us directly.",
    responseTime: "We typically respond within 1-2 business days."
  },
  no: {
    formLabel: "Kontaktskjema",
    name: "Navn",
    email: "E-post",
    message: "Melding",
    namePh: "Navnet ditt",
    emailPh: "deg@firma.no",
    messagePh: "Kort beskrivelse av hva dere ønsker hjelp med…",
    submit: "La oss ta en prat",
    sending: "Sender...",
    received: "Melding mottatt",
    failed: "Kunne ikke sende melding",
    thanks: "Takk — vi tar kontakt snart.",
    retry: "Prøv igjen om litt, eller send e-post direkte.",
    responseTime: "Vi svarer vanligvis innen 1-2 virkedager."
  }
} as const;

export function ContactForm({ locale = "no" }: { locale?: Locale }) {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const c = copy[locale];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Failed to submit contact form");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" aria-label={c.formLabel}>
      <div className="grid gap-2">
        <label htmlFor={nameId} className="text-sm font-medium text-slate-900">
          {c.name}
        </label>
        <input
          id={nameId}
          name="name"
          autoComplete="name"
          required
          className={inputBase}
          placeholder={c.namePh}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor={emailId} className="text-sm font-medium text-slate-900">
          {c.email}
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputBase}
          placeholder={c.emailPh}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor={messageId} className="text-sm font-medium text-slate-900">
          {c.message}
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={5}
          className={clsx(inputBase, "resize-y")}
          placeholder={c.messagePh}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-[15px] font-semibold tracking-tight text-white shadow-md ring-1 ring-blue-700/20 transition duration-200 hover:-translate-y-px hover:bg-blue-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px sm:w-auto"
      >
        {status === "sending"
          ? c.sending
          : status === "sent"
            ? c.received
            : status === "error"
              ? c.failed
              : c.submit}
      </button>

      <p className="text-xs text-slate-600">
        {status === "sent"
          ? c.thanks
          : status === "error"
            ? c.retry
            : c.responseTime}
      </p>
    </form>
  );
}

