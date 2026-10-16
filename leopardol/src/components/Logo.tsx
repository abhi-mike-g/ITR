export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-xl font-bold tracking-[0.25em] ${className}`}>
      LEOPARD<span className="text-gold">OL</span>
    </span>
  );
}
