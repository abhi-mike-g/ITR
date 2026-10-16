import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { differentiators, frameworks, industries, integrations, modules, stats, steps } from "@/lib/content";

const container = "mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-16";

export function Problem() {
  return (
    <section className="py-24">
      <div className={container}>
        <SectionHeading
          eyebrow="The problem"
          title={
            <>
              AI is moving faster than <span className="text-gradient">security can keep up</span>
            </>
          }
          description="Teams adopt new models and agents every week. Traditional tools were never designed to see them, let alone protect them."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.1} className="glass rounded-3xl p-8">
              <div className="text-gradient text-5xl font-semibold">{s.value}</div>
              <p className="mt-4 text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlatformGrid() {
  return (
    <section className="py-24">
      <div className={container}>
        <SectionHeading
          eyebrow="Platform"
          title={
            <>
              One platform. Complete security for the <span className="text-gradient">AI lifecycle</span>
            </>
          }
          description="Ten purpose-built modules that share one data model, from discovery to runtime protection to audit evidence."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {modules.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 5) * 0.06}>
              <Link
                href={`/platform/${m.slug}`}
                className="group glass flex h-full flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-accent/60"
              >
                <m.icon className="size-7 text-cyan" />
                <h3 className="mt-5 font-semibold text-white">{m.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{m.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-accent opacity-0 transition group-hover:opacity-100">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Differentiators() {
  return (
    <section className="py-24">
      <div className={`${container} grid gap-16 lg:grid-cols-2`}>
        <SectionHeading
          align="left"
          eyebrow="Why Suronex"
          title="Built different. On purpose."
          description="We started from the threats unique to AI rather than adapting a cloud scanner. That choice shows up everywhere."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08} className="glass rounded-2xl p-6">
              <span className="text-sm text-cyan">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{d.title}</h3>
              <p className="mt-2 text-sm text-muted">{d.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 py-24">
      <div className={container}>
        <SectionHeading
          eyebrow="Use cases"
          title="Security built for every industry"
          description="One platform, tuned to the regulatory and operational realities of your sector."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.name} className="bg-ink p-8 transition-colors hover:bg-panel">
              <h3 className="text-lg font-semibold text-white">{ind.name}</h3>
              <p className="mt-2 text-sm text-muted">{ind.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className={container}>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From connection to confidence in <span className="text-gradient">four steps</span>
            </>
          }
        />
        <ol className="relative mt-16 grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-accent to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <li className="relative">
                <span className="relative z-10 grid size-12 place-items-center rounded-full border border-accent bg-ink font-semibold text-cyan">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Integrations() {
  const row = [...integrations, ...integrations];
  return (
    <section id="integrations" className="scroll-mt-24 py-24">
      <div className={container}>
        <SectionHeading
          eyebrow="Integrations"
          title="Secure everything, from cloud to code"
          description="Connect the clouds, model providers, frameworks and SIEMs you already use."
        />
      </div>
      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-4">
          {row.map((name, i) => (
            <span key={i} className="glass whitespace-nowrap rounded-full px-6 py-3 text-sm text-white">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Compliance() {
  return (
    <section className="py-24">
      <div className={`${container} grid items-center gap-16 lg:grid-cols-2`}>
        <SectionHeading
          align="left"
          eyebrow="Compliance"
          title="Audit-ready against the frameworks that matter"
          description="Findings are mapped to controls automatically, so evidence is always current."
        />
        <ul className="space-y-3">
          {frameworks.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.06}>
              <li className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="grid size-9 place-items-center rounded-full bg-accent/15 text-cyan">
                  <Check className="size-4" />
                </span>
                <span>
                  <span className="block font-medium text-white">{f.name}</span>
                  <span className="block text-sm text-muted">{f.detail}</span>
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="py-24">
      <div className={container}>
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-accent/30 via-panel to-ink p-10 text-center md:p-20">
          <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-cyan/20 blur-3xl" />
          <h2 className="relative text-3xl font-semibold text-white md:text-5xl">Secure your entire AI ecosystem</h2>
          <p className="relative mx-auto mt-5 max-w-xl text-muted">
            See how quickly you can go from zero visibility to a protected, compliant AI estate.
          </p>
          <Link
            href="/contact"
            className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-medium text-ink transition hover:bg-white/90"
          >
            Book a demo <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
