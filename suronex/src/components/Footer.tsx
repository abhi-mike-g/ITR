import Link from "next/link";
import Logo from "@/components/Logo";
import { modules } from "@/lib/content";

const columns = [
  {
    title: "Platform",
    links: modules.slice(0, 5).map((m) => ({ href: `/platform/${m.slug}`, label: m.name })),
  },
  {
    title: "More modules",
    links: modules.slice(5).map((m) => ({ href: `/platform/${m.slug}`, label: m.name })),
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel/40">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_repeat(3,1fr)] md:px-12 lg:px-16">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted">
            Security and compliance for every model, agent and AI service your organisation runs.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-sm font-semibold text-white">{col.title}</h3>
            <ul className="space-y-2.5 text-sm text-muted">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-muted">
        © Suronex. Rebuilt for academic demonstration.
      </div>
    </footer>
  );
}
