import Link from "next/link";
import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[rgba(247,243,234,0.86)] backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--deep)]"
        >
          Mingyi Liu
        </Link>
        <div className="flex w-full items-center gap-1 overflow-x-auto rounded-full border border-[var(--line)] bg-[rgba(255,250,240,0.72)] p-1 text-sm text-[var(--muted)] sm:w-auto">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
