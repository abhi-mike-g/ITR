import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import { collections, products, type Collection } from "@/lib/products";

export function generateStaticParams() {
  return Object.keys(collections).map((slug) => ({ slug }));
}

function isCollection(slug: string): slug is Collection {
  return slug in collections;
}

export async function generateMetadata({ params }: PageProps<"/collections/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: isCollection(slug) ? collections[slug].title : "Collection" };
}

export default async function CollectionPage({ params }: PageProps<"/collections/[slug]">) {
  const { slug } = await params;
  if (!isCollection(slug)) notFound();

  const { title, blurb } = collections[slug];

  return (
    <>
      <section className="spots bg-black py-16 text-center text-white">
        <h1 className="font-display text-4xl font-bold uppercase tracking-widest md:text-5xl">{title}</h1>
        <p className="mt-3 text-gray-400">{blurb}</p>
      </section>
      <div className="container mx-auto px-4 py-12">
        <ProductGrid products={products.filter((p) => p.collection === slug)} />
      </div>
    </>
  );
}
