import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { formatPrice, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative overflow-hidden">
        <ProductImage color={product.colors[0]} label={product.name} className="transition duration-500 group-hover:scale-105" />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${
              product.badge === "Sale" ? "bg-red-600 text-white" : "bg-black text-white"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium group-hover:underline">{product.name}</h3>
        <p className="text-sm">
          <span className="font-semibold">{formatPrice(product.price)}</span>
          {product.compareAt && <span className="ml-2 text-gray-400 line-through">{formatPrice(product.compareAt)}</span>}
        </p>
        <div className="flex gap-1.5 pt-1">
          {product.colors.map((c) => (
            <span key={c} className="size-3 rounded-full border border-gray-300" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
    </Link>
  );
}
