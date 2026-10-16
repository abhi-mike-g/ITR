"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, User, X } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import Logo from "@/components/Logo";

const nav = [
  { href: "/collections/women", label: "Women" },
  { href: "/collections/men", label: "Men" },
  { href: "/collections/accessories", label: "Accessories" },
];

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black text-white">
      <div className="bg-gold py-1.5 text-center text-xs font-medium tracking-wide text-black">
        Free shipping on orders above ₹1,499
      </div>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-5">
          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
          <Link href="/" aria-label="Leopardol home" className="mr-7">
            <Logo />
          </Link>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-gold">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/orders" aria-label="My orders" className="transition hover:text-gold">
            <User className="size-5" />
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative transition hover:text-gold">
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-gold text-[10px] font-bold text-black">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
      {open && (
        <nav className="border-t border-gray-800 md:hidden">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-4 py-3 uppercase tracking-wider">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
