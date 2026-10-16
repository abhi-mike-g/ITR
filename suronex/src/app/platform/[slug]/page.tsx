import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { CallToAction } from "@/components/home/Sections";
import { modules } from "@/lib/content";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/platform/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);
  return { title: mod?.name ?? "Platform", description: mod?.description };
}

export default async function ModulePage({ params }: PageProps<"/platform/[slug]">) {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);
  if (!mod) notFound();

  const others = modules.filter((m) => m.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={mod.name} title={mod.tagline} description={mod.description}>
        <div className="mx-auto mt-10 grid size-20 place-items-center rounded-3xl bg-accent/15">
          <mod.icon className="size-10 text-cyan" />
        </div>
      </PageHeader>

      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <h2 className="mb-8 text-2xl font-semibold text-white">Key capabilities</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {mod.features.map((f, i) => (
            <Reveal key={f} delay={i * 0.06}>
              <li className="glass flex items-start gap-4 rounded-2xl p-6">
                <Check className="mt-0.5 size-5 shrink-0 text-cyan" />
                <span className="text-white">{f}</span>
              </li>
            </Reveal>
          ))}
        </ul>

        <h2 className="mb-6 mt-20 text-2xl font-semibold text-white">Explore other modules</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((m) => (
            <Link key={m.slug} href={`/platform/${m.slug}`} className="glass rounded-2xl p-6 transition hover:border-accent/60">
              <m.icon className="size-6 text-cyan" />
              <span className="mt-4 block font-semibold text-white">{m.name}</span>
              <span className="mt-1 block text-sm text-muted">{m.tagline}</span>
            </Link>
          ))}
        </div>
      </section>
      <CallToAction />
    </>
  );
}
