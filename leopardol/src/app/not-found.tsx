import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <p className="font-display text-7xl font-bold text-gold">404</p>
      <h1 className="mt-4 text-2xl font-semibold">This page went wild</h1>
      <Link href="/" className="mt-8 inline-block bg-black px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white">
        Back to home
      </Link>
    </div>
  );
}
