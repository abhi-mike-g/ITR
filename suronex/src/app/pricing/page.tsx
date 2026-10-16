import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { plans } from "@/lib/content";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple plans that scale with your AI"
        description="Placeholder pricing for demonstration — replace with real figures."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-28 sm:px-8 md:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <div
              className={`relative flex h-full flex-col rounded-3xl p-8 ${
                p.highlighted
                  ? "border border-accent bg-gradient-to-b from-accent/20 to-panel shadow-[0_0_60px_-20px_var(--color-accent)]"
                  : "glass"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h2 className="text-lg font-semibold text-white">{p.name}</h2>
              <p className="mt-2 text-sm text-muted">{p.description}</p>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-white">{p.price}</span>
                <span className="text-sm text-muted">{p.period}</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white">
                    <Check className="mt-0.5 size-4 shrink-0 text-cyan" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-10 rounded-full py-3 text-center font-medium transition ${
                  p.highlighted ? "bg-accent text-white hover:brightness-110" : "border border-line text-white hover:bg-white/5"
                }`}
              >
                {p.price === "Custom" ? "Talk to sales" : "Get started"}
              </Link>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
