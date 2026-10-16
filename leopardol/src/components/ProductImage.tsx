export default function ProductImage({ color, label, className = "" }: { color: string; label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`spots relative grid aspect-[3/4] place-items-center overflow-hidden ${className}`}
      style={{ backgroundColor: color }}
    >
      <span className="rounded bg-white/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-black">
        Image placeholder
      </span>
    </div>
  );
}
