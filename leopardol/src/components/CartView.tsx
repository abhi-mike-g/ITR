"use client";

import Link from "next/link";
import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import ProductImage from "@/components/ProductImage";
import { formatPrice, getProduct } from "@/lib/products";

const FREE_SHIPPING_THRESHOLD = 1499;
const SHIPPING_FEE = 99;

export default function CartView() {
  const { items, subtotal, setQty, remove, clear } = useCart();
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">Order placed!</h2>
        <p className="mt-2 text-gray-500">This is a demo checkout — no payment was taken.</p>
        <Link href="/" className="mt-8 inline-block bg-black px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white">
          Continue shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-500">Your bag is empty.</p>
        <Link href="/collections/women" className="mt-6 inline-block bg-black px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white">
          Start shopping
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
      <ul className="divide-y border-y">
        {items.map((item, index) => {
          const product = getProduct(item.slug);
          if (!product) return null;
          return (
            <li key={`${item.slug}-${item.size}-${item.color}`} className="flex gap-5 py-6">
              <Link href={`/products/${product.slug}`} className="w-24 shrink-0">
                <ProductImage color={item.color} label={product.name} />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-4">
                  <Link href={`/products/${product.slug}`} className="font-medium hover:underline">
                    {product.name}
                  </Link>
                  <span className="font-semibold">{formatPrice(product.price * item.qty)}</span>
                </div>
                <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  Size {item.size} ·
                  <span className="inline-block size-3 rounded-full border" style={{ backgroundColor: item.color }} />
                </p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center border">
                    <button aria-label="Decrease" className="p-2" onClick={() => setQty(index, item.qty - 1)}>
                      <Minus className="size-4" />
                    </button>
                    <span className="w-8 text-center text-sm">{item.qty}</span>
                    <button aria-label="Increase" className="p-2" onClick={() => setQty(index, item.qty + 1)}>
                      <Plus className="size-4" />
                    </button>
                  </div>
                  <button aria-label="Remove" onClick={() => remove(index)} className="text-gray-400 hover:text-red-600">
                    <Trash2 className="size-5" />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <aside className="h-fit bg-gray-50 p-6">
        <h2 className="font-semibold uppercase tracking-wider">Order summary</h2>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd>{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Shipping</dt>
            <dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
          </div>
          <div className="flex justify-between border-t pt-3 text-base font-semibold">
            <dt>Total</dt>
            <dd>{formatPrice(subtotal + shipping)}</dd>
          </div>
        </dl>
        {shipping > 0 && (
          <p className="mt-4 text-xs text-gray-500">
            Add {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping.
          </p>
        )}
        <button
          onClick={() => {
            clear();
            setPlaced(true);
          }}
          className="mt-6 w-full bg-black py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-gold hover:text-black"
        >
          Checkout
        </button>
      </aside>
    </div>
  );
}
