"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { modules, navLinks } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto flex h-18 w-full max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 md:px-12 lg:px-16">
        <Link href="/" aria-label="Suronex home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-muted lg:flex">
          {navLinks.map((link) =>
            link.label === "Platform" ? (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setPlatformOpen(true)}
                onMouseLeave={() => setPlatformOpen(false)}
              >
                <Link href={link.href} className="flex items-center gap-1 transition-colors hover:text-white">
                  {link.label}
                  <ChevronDown className={`size-4 transition-transform ${platformOpen ? "rotate-180" : ""}`} />
                </Link>
                <AnimatePresence>
                  {platformOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4"
                    >
                      <div className="glass grid grid-cols-2 gap-1 rounded-2xl bg-panel/95 p-3">
                        {modules.map((m) => (
                          <Link
                            key={m.slug}
                            href={`/platform/${m.slug}`}
                            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                          >
                            <m.icon className="mt-0.5 size-5 shrink-0 text-cyan" />
                            <span>
                              <span className="block font-medium text-white">{m.name}</span>
                              <span className="block text-xs text-muted">{m.tagline}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="text-sm text-muted transition-colors hover:text-white">
            Contact
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_24px_-6px_var(--color-accent)] transition hover:brightness-110"
          >
            Book a demo
          </Link>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-5 sm:px-8 lg:hidden"
          >
            {[...navLinks, { href: "/contact", label: "Contact" }].map((link) => (
              <li key={link.label} className="border-t border-line">
                <Link href={link.href} onClick={() => setOpen(false)} className="block py-4 text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
