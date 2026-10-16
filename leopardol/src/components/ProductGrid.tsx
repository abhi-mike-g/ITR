"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

const sorters = {
  featured: () => 0,
  "price-asc": (a: Product, b: Product) => a.price - b.price,
  "price-desc": (a: Product, b: Product) => b.price - a.price,
};

export default function ProductGrid({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<keyof typeof sorters>("featured");
  const sorted = [...products].sort(sorters[sort]);

  return (
    <>
      <div className="mb-8 flex items-center justify-between border-b pb-4 text-sm">
        <span className="text-gray-500">{products.length} products</span>
        <label className="flex items-center gap-2">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as keyof typeof sorters)}
            className="border px-2 py-1 outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {sorted.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
