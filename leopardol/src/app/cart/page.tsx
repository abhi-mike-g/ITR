import type { Metadata } from "next";
import CartView from "@/components/CartView";

export const metadata: Metadata = { title: "Your Bag" };

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold uppercase tracking-wider">Your bag</h1>
      <CartView />
    </div>
  );
}
