import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="page-shell pb-10 pt-20">
      <div className="flex flex-col justify-between gap-5 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center">
        <p>Grown with curiosity in Zurich 🌱</p>
        <div className="flex gap-5">
          <Link href="mailto:hello@mingyiliu.com" className="soft-link">Email</Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
