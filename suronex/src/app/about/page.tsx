import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { CallToAction } from "@/components/home/Sections";

export const metadata: Metadata = { title: "About" };

const values = [
  { title: "Security first", body: "Every product decision starts with the question: does this make customers safer?" },
  { title: "Radical clarity", body: "Findings should be understandable by engineers, executives and auditors alike." },
  { title: "Move with AI", body: "The threat landscape changes monthly, so we ship and learn just as fast." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            Making AI <span className="text-gradient">safe to adopt</span>
          </>
        }
        description="Placeholder company story — replace with your own copy about the team, mission and history."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-24 sm:px-8 md:grid-cols-3">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.1} className="glass rounded-3xl p-8">
            <h2 className="text-xl font-semibold text-white">{v.title}</h2>
            <p className="mt-3 text-muted">{v.body}</p>
          </Reveal>
        ))}
      </section>
      <CallToAction />
    </>
  );
}
