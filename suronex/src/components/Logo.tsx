export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden>
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2f7bff" />
            <stop offset="1" stopColor="#00c8ff" />
          </linearGradient>
        </defs>
        <path d="M16 2 28 8v8c0 7-5 12-12 14C9 28 4 23 4 16V8z" fill="url(#logo-g)" />
        <path d="M11 16.5 14.5 20 21 12.5" fill="none" stroke="#05070d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-white">Suronex</span>
    </span>
  );
}
