"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl">
      <nav className="page-shell flex min-h-[72px] items-center justify-between gap-4 py-3">
        <Link href="/" className="group flex shrink-0 items-center gap-2" aria-label="Mingyi Liu, home">
          <span className="display-serif text-xl font-semibold tracking-[-0.035em]">
            Mingyi<span className="text-[var(--accent)]">.</span>
          </span>
          <span className="status-dot hidden size-1.5 rounded-full bg-[var(--accent)] sm:block" aria-hidden="true" />
        </Link>
        <div className="hide-scrollbar flex min-w-0 items-center gap-1 overflow-x-auto text-xs">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="nav-link whitespace-nowrap"
              data-active={pathname === item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className="nav-link whitespace-nowrap"
            data-active={pathname === "/contact"}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
