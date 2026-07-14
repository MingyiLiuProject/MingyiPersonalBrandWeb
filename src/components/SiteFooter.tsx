import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--deep)] text-white">
      <div className="page-shell grid gap-10 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Link href="/" className="text-xl font-semibold tracking-[-0.05em]">Mingyi Liu</Link>
          <p className="mt-2 text-xs text-white/45">Biomedical optics researcher · Product manager · Designer</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 micro-label text-white/45">
          <span>© {new Date().getFullYear()}</span>
          <Link href="mailto:hello@mingyiliu.com" className="text-white">Email ↗</Link>
        </div>
      </div>
    </footer>
  );
}
