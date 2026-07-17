import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="page-shell pb-8 pt-20 sm:pt-28">
      <div className="grid gap-8 border-t border-[var(--line)] py-7 text-xs text-[var(--muted)] sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="display-serif text-2xl font-semibold tracking-[-0.035em] text-[var(--foreground)]">Keep in touch.</p>
          <p className="mt-2 max-w-sm leading-5">A small digital garden, tended between lab experiments and product ideas in Zurich.</p>
        </div>
        <div className="flex gap-5 sm:justify-end">
          <Link href="mailto:hello@mingyiliu.com" className="soft-link">Email</Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
