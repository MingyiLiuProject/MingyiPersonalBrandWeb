"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(244,243,238,0.88)] backdrop-blur-xl">
      <nav className="page-shell flex h-[72px] items-center justify-between gap-5">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Mingyi Liu, home">
          <span className="grid size-9 place-items-center rounded-full bg-[var(--deep)] font-mono text-[10px] font-bold tracking-[-0.06em] text-[var(--accent)] transition-transform group-hover:rotate-6">
            ML
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] sm:block">Mingyi Liu</span>
        </Link>

        <div className="flex min-w-0 items-center gap-1 overflow-x-auto rounded-full border border-[var(--line)] bg-white/45 p-1">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 ${
                  active
                    ? "bg-[var(--deep)] text-white"
                    : "text-[var(--muted)] hover:bg-white hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden shrink-0 items-center gap-2 text-xs font-semibold lg:flex"
        >
          <span className="size-2 rounded-full bg-[var(--accent-dark)] shadow-[0_0_0_4px_rgba(124,167,42,0.12)]" />
          Available to connect
        </Link>
      </nav>
    </header>
  );
}
