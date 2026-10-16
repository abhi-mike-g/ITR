import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { CallToAction } from "@/components/home/Sections";
import { modules } from "@/lib/content";

export const metadata: Metadata = { title: "Platform" };

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Suronex platform"
        title={
          <>
            Every layer of AI risk, <span className="text-gradient">covered</span>
          </>
        }
        description="Start with one module or run the full platform. Every module shares the same asset graph, so context follows each finding."
      />
      <section className="mx-auto grid max-w-[1400px] gap-5 px-5 pb-24 sm:px-8 md:grid-cols-2 md:px-12 lg:px-16">
        {modules.map((m, i) => (
          <Reveal key={m.slug} delay={(i % 2) * 0.08}>
            <Link
              href={`/platform/${m.slug}`}
              className="group glass flex h-full gap-6 rounded-3xl p-8 transition hover:border-accent/60"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent/15">
                <m.icon className="size-7 text-cyan" />
              </span>
              <span className="flex-1">
                <span className="block text-xl font-semibold text-white">{m.name}</span>
                <span className="mt-1 block text-sm text-cyan">{m.tagline}</span>
                <span className="mt-3 block text-sm text-muted">{m.description}</span>
              </span>
              <ArrowRight className="size-5 shrink-0 self-center text-muted transition group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </Reveal>
        ))}
      </section>
      <CallToAction />
    </>
  );
}
