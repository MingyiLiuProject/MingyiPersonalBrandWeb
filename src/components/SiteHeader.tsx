"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/15 bg-[rgba(241,238,230,0.93)] backdrop-blur-xl">
      <nav className="page-shell flex h-[70px] items-center justify-between gap-5">
        <Link href="/" className="flex shrink-0 items-baseline gap-3" aria-label="Mingyi Liu, home">
          <span className="text-lg font-semibold tracking-[-0.05em]">ML</span>
          <span className="micro-label hidden text-[var(--muted)] sm:block">Research / Product / Design</span>
        </Link>

        <div className="flex min-w-0 items-center gap-5 overflow-x-auto sm:gap-8">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`rule-link whitespace-nowrap text-[11px] font-medium ${active ? "text-[var(--accent)]" : "text-[var(--foreground)]"}`}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link href="/contact" className="hidden shrink-0 bg-[var(--foreground)] px-4 py-2.5 text-[10px] font-semibold text-white transition hover:bg-[var(--accent)] md:block">
          Let&apos;s talk ↗
        </Link>
      </nav>
    </header>
  );
}
