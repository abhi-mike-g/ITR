import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(47_123_255/0.22),transparent_65%)]" />
      <Reveal className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 md:py-32">
        <span className="text-xs uppercase tracking-[0.2em] text-cyan">{eyebrow}</span>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">{title}</h1>
        {description && <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{description}</p>}
        {children}
      </Reveal>
    </section>
  );
}
