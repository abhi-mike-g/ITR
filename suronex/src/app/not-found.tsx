import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-5 text-center">
      <div>
        <p className="text-gradient text-7xl font-semibold">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-white">Page not found</h1>
        <Link href="/" className="mt-8 inline-block rounded-full bg-accent px-6 py-3 font-medium text-white">
          Back home
        </Link>
      </div>
    </section>
  );
}
