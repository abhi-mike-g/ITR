import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { policies } from "@/lib/products";

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/policies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: policies[slug]?.title ?? "Policy" };
}

export default async function PolicyPage({ params }: PageProps<"/policies/[slug]">) {
  const { slug } = await params;
  const policy = policies[slug];
  if (!policy) notFound();

  return (
    <article className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold uppercase tracking-wider">{policy.title}</h1>
      <p className="mt-2 text-sm text-gray-500">Placeholder policy text — replace with the store&apos;s real policy.</p>
      {policy.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="text-lg font-semibold">{s.heading}</h2>
          <p className="mt-3 leading-relaxed text-gray-700">{s.body}</p>
        </section>
      ))}
    </article>
  );
}
