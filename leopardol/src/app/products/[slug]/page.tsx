import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import { collections, formatPrice, getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.name ?? "Product", description: product?.description };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.collection === product.collection && p.slug !== product.slug).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-10">
      <nav className="mb-8 text-xs uppercase tracking-wider text-gray-500">
        <Link href="/" className="hover:text-black">Home</Link> /{" "}
        <Link href={`/collections/${product.collection}`} className="hover:text-black">
          {collections[product.collection].title}
        </Link>{" "}
        / <span className="text-black">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <AddToCart product={product}>
          <h1 className="font-display text-3xl font-bold uppercase">{product.name}</h1>
          <p className="mt-3 text-xl">
            <span className="font-semibold">{formatPrice(product.price)}</span>
            {product.compareAt && <span className="ml-3 text-gray-400 line-through">{formatPrice(product.compareAt)}</span>}
          </p>
          <p className="mt-1 text-xs text-gray-500">Inclusive of all taxes</p>
          <p className="mt-6 text-gray-700">{product.description}</p>
        </AddToCart>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
