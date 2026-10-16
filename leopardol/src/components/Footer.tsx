import Link from "next/link";
import Logo from "@/components/Logo";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/collections/women", label: "Women" },
      { href: "/collections/men", label: "Men" },
      { href: "/collections/accessories", label: "Accessories" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/support/contact", label: "Contact Us" },
      { href: "/orders", label: "My Orders" },
      { href: "/policies/return", label: "Return Policy" },
      { href: "/policies/refund", label: "Refund Policy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/policies/shipping", label: "Shipping Policy" },
      { href: "/policies/privacy", label: "Privacy Policy" },
      { href: "/policies/terms", label: "Terms & Conditions" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <Logo className="text-white" />
          <p className="mt-4 max-w-xs text-sm">Fearless fashion with a wild streak. Designed for everyday statements.</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{col.title}</h3>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 py-5 text-center text-xs">© Leopardol. Rebuilt for academic demonstration.</div>
    </footer>
  );
}
