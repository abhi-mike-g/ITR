import Link from "next/link";
import { RotateCcw, ShieldCheck, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { collections, products, type Collection } from "@/lib/products";

const perks = [
  { icon: Truck, title: "Free shipping", body: "On all orders above ₹1,499" },
  { icon: RotateCcw, title: "Easy returns", body: "7-day hassle-free returns" },
  { icon: ShieldCheck, title: "Secure checkout", body: "UPI, cards and COD" },
];

export default function Home() {
  const featured = products.filter((p) => p.badge === "New" || p.badge === "Bestseller");

  return (
    <>
      <section className="spots relative overflow-hidden bg-[#1a1410] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="container relative mx-auto flex min-h-[78vh] flex-col justify-center px-4 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-gold">New season drop</p>
          <h1 className="mt-5 max-w-2xl font-display text-5xl font-bold uppercase leading-tight md:text-7xl">
            Unleash your <span className="text-gold">wild</span> side
          </h1>
          <p className="mt-6 max-w-md text-gray-300">Statement prints, bold cuts and everyday essentials — made to be noticed.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/collections/women" className="bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white">
              Shop women
            </Link>
            <Link href="/collections/men" className="border border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider transition hover:bg-white hover:text-black">
              Shop men
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="container mx-auto grid gap-6 px-4 py-8 sm:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="flex items-center gap-4">
              <p.icon className="size-8 text-gold" />
              <div>
                <p className="font-semibold">{p.title}</p>
                <p className="text-sm text-gray-500">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider">Shop by category</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {(Object.keys(collections) as Collection[]).map((key, i) => (
            <Link
              key={key}
              href={`/collections/${key}`}
              className="spots group relative flex aspect-[4/5] items-end overflow-hidden p-8 text-white"
              style={{ backgroundColor: ["#7b2d26", "#2b2b2b", "#c8a165"][i] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition group-hover:from-black/60" />
              <div className="relative">
                <h3 className="font-display text-3xl font-bold uppercase">{collections[key].title}</h3>
                <p className="mt-2 text-sm text-gray-200">{collections[key].blurb}</p>
                <span className="mt-4 inline-block border-b border-gold pb-1 text-sm uppercase tracking-wider text-gold">Shop now</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider">Trending now</h2>
            <Link href="/collections/women" className="text-sm underline underline-offset-4">
              View all
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {featured.slice(0, 8).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-center text-white">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wider">Join the pack</h2>
        <p className="mt-3 text-gray-400">Get 10% off your first order and early access to drops.</p>
        <form className="mx-auto mt-8 flex max-w-md">
          <input type="email" required placeholder="Your email" className="flex-1 bg-white px-4 py-3 text-black outline-none" />
          <button className="bg-gold px-6 font-semibold uppercase tracking-wider text-black">Subscribe</button>
        </form>
      </section>
    </>
  );
}
