import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)]">
      <div className="page-shell grid gap-8 py-9 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Link href="/" className="font-serif text-xl italic">Mingyi Liu</Link>
          <p className="mt-2 max-w-md text-xs leading-5 text-[var(--muted)]">Biomedical optics researcher. Former product manager and product designer.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>Zurich, Switzerland</span>
          <span>© {new Date().getFullYear()}</span>
          <Link href="mailto:hello@mingyiliu.com" className="text-[var(--foreground)]">Email ↗</Link>
        </div>
      </div>
    </footer>
  );
}
