import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = { title: "Contact Us" };

const details = [
  { icon: Mail, label: "Email", value: "support@example.com" },
  { icon: Phone, label: "Phone", value: "+91 00000 00000" },
  { icon: MapPin, label: "Address", value: "Placeholder address, City, India" },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-2">
      <div>
        <h1 className="font-display text-3xl font-bold uppercase tracking-wider">Contact us</h1>
        <p className="mt-3 text-gray-500">We usually reply within 24 hours, Monday to Saturday.</p>
        <ul className="mt-10 space-y-6">
          {details.map((d) => (
            <li key={d.label} className="flex items-start gap-4">
              <d.icon className="size-6 text-gold" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider">{d.label}</p>
                <p className="text-gray-600">{d.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form className="space-y-4">
        <input required placeholder="Name" className="w-full border px-4 py-3 outline-none focus:border-black" />
        <input required type="email" placeholder="Email" className="w-full border px-4 py-3 outline-none focus:border-black" />
        <input placeholder="Order ID (optional)" className="w-full border px-4 py-3 outline-none focus:border-black" />
        <textarea required rows={5} placeholder="How can we help?" className="w-full border px-4 py-3 outline-none focus:border-black" />
        <button className="w-full bg-black py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-gold hover:text-black">
          Send message
        </button>
      </form>
    </div>
  );
}
