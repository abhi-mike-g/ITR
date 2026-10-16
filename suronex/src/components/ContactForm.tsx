"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const fields = [
  { name: "name", label: "Full name", type: "text" },
  { name: "email", label: "Work email", type: "email" },
  { name: "company", label: "Company", type: "text" },
] as const;

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend in this demo; wire this to an API route or form service to collect leads.
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass flex flex-col items-center rounded-3xl p-12 text-center"
        >
          <CheckCircle2 className="size-12 text-cyan" />
          <h2 className="mt-4 text-2xl font-semibold text-white">Thanks — we&apos;ll be in touch</h2>
          <p className="mt-2 text-muted">A specialist will reach out within one business day.</p>
        </motion.div>
      ) : (
        <motion.form key="form" exit={{ opacity: 0 }} onSubmit={onSubmit} className="glass space-y-5 rounded-3xl p-8">
          {fields.map((f) => (
            <label key={f.name} className="block">
              <span className="mb-2 block text-sm text-muted">{f.label}</span>
              <input
                required
                name={f.name}
                type={f.type}
                className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-white outline-none transition focus:border-accent"
              />
            </label>
          ))}
          <label className="block">
            <span className="mb-2 block text-sm text-muted">What would you like to secure?</span>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-white outline-none transition focus:border-accent"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-accent py-3 font-medium text-white shadow-[0_0_32px_-6px_var(--color-accent)] transition hover:brightness-110"
          >
            Request demo
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
