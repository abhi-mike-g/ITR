"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import ProductImage from "@/components/ProductImage";
import type { Product } from "@/lib/products";

export default function AddToCart({ product, children }: { product: Product; children: ReactNode }) {
  const { add } = useCart();
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState<string | null>(product.sizes.length === 1 ? product.sizes[0] : null);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    if (!size) return;
    add({ slug: product.slug, size, color });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <>
      <ProductImage color={color} label={product.name} />
      <div>
        {children}

        <div className="mt-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider">Colour</p>
          <div className="flex gap-3">
            {product.colors.map((c) => (
              <button
                key={c}
                aria-label={`Colour ${c}`}
                onClick={() => setColor(c)}
                className={`size-9 rounded-full border-2 ${color === c ? "border-black" : "border-gray-200"}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`min-w-12 border px-3 py-2 text-sm transition ${
                  size === s ? "border-black bg-black text-white" : "border-gray-300 hover:border-black"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAdd}
          disabled={!size}
          className="mt-10 flex w-full items-center justify-center gap-2 bg-black py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-gold hover:text-black disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
        >
          {added ? (
            <>
              <Check className="size-5" /> Added to bag
            </>
          ) : size ? (
            "Add to bag"
          ) : (
            "Select a size"
          )}
        </button>
        {added && (
          <Link href="/cart" className="mt-3 block text-center text-sm underline underline-offset-4">
            View bag
          </Link>
        )}
      </div>
    </>
  );
}
