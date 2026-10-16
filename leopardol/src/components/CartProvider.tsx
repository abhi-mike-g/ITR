"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getProduct } from "@/lib/products";

export type CartItem = { slug: string; size: string; color: string; qty: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (item: Omit<CartItem, "qty">) => void;
  setQty: (index: number, qty: number) => void;
  remove: (index: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "leopardol-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from storage after mount to avoid SSR mismatch
      if (saved) setItems(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, loaded]);

  const add: CartContextValue["add"] = (item) =>
    setItems((prev) => {
      const i = prev.findIndex((p) => p.slug === item.slug && p.size === item.size && p.color === item.color);
      if (i === -1) return [...prev, { ...item, qty: 1 }];
      return prev.map((p, idx) => (idx === i ? { ...p, qty: p.qty + 1 } : p));
    });

  const setQty: CartContextValue["setQty"] = (index, qty) =>
    setItems((prev) => (qty < 1 ? prev.filter((_, i) => i !== index) : prev.map((p, i) => (i === index ? { ...p, qty } : p))));

  const remove: CartContextValue["remove"] = (index) => setItems((prev) => prev.filter((_, i) => i !== index));

  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + (getProduct(i.slug)?.price ?? 0) * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, count, subtotal, add, setQty, remove, clear: () => setItems([]) }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
