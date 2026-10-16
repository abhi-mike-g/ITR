import type { Metadata } from "next";
import { Package } from "lucide-react";

export const metadata: Metadata = { title: "My Orders" };

export default function OrdersPage() {
  return (
    <div className="container mx-auto max-w-xl px-4 py-20 text-center">
      <Package className="mx-auto size-12 text-gold" />
      <h1 className="mt-6 font-display text-3xl font-bold uppercase tracking-wider">Track your order</h1>
      <p className="mt-3 text-gray-500">Enter your order ID and phone number to see its status.</p>
      <form className="mt-10 space-y-4 text-left">
        <input required placeholder="Order ID (e.g. LP10234)" className="w-full border px-4 py-3 outline-none focus:border-black" />
        <input required type="tel" placeholder="Phone number" className="w-full border px-4 py-3 outline-none focus:border-black" />
        <button className="w-full bg-black py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-gold hover:text-black">
          Track order
        </button>
      </form>
    </div>
  );
}
