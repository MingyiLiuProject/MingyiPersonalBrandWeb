import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="page-shell grid gap-8 py-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" className="text-xl font-semibold tracking-[-0.04em]">
            Mingyi Liu<span className="text-[var(--signal)]">.</span>
          </Link>
          <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
            Product thinking, scientific depth, and useful things built at the intersection.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
          <span>Zurich, CH</span>
          <span>© {new Date().getFullYear()}</span>
          <Link href="mailto:hello@mingyiliu.com" className="transition hover:text-[var(--foreground)]">
            Email ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
