import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base text-muted sm:text-lg">{description}</p>}
    </Reveal>
  );
}
