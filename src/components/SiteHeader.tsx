"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="page-shell flex min-h-20 items-center justify-between gap-5 py-4">
        <Link href="/" className="display-serif text-xl font-semibold tracking-[-0.035em]" aria-label="Mingyi Liu, home">
          Mingyi<span className="text-[var(--accent)]">.</span>
        </Link>
        <div className="flex min-w-0 items-center gap-4 overflow-x-auto text-xs sm:gap-6">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`soft-link whitespace-nowrap ${pathname === item.href ? "font-semibold text-[var(--foreground)]" : "text-[var(--muted)]"}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="soft-link whitespace-nowrap text-[var(--muted)]">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
