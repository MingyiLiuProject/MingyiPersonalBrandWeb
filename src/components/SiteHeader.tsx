"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(242,240,233,0.92)] backdrop-blur-xl">
      <nav className="page-shell flex h-[74px] items-center justify-between gap-5">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Mingyi Liu, home">
          <span className="grid size-8 place-items-center border border-[var(--foreground)] font-serif text-base italic">M</span>
          <span className="hidden sm:block">
            <strong className="block text-xs font-semibold tracking-[-0.01em]">Mingyi Liu</strong>
            <span className="mt-0.5 block font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--muted)]">Researcher &amp; designer</span>
          </span>
        </Link>

        <div className="flex min-w-0 items-center gap-5 overflow-x-auto sm:gap-8">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap py-2 text-[11px] font-medium transition after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-[var(--foreground)] after:transition-transform ${
                  active
                    ? "text-[var(--foreground)] after:scale-x-100"
                    : "text-[var(--muted)] after:scale-x-0 hover:text-[var(--foreground)] hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link href="/contact" className="group hidden shrink-0 items-center gap-2 text-[11px] font-semibold md:flex">
          Contact
          <span className="transition-transform group-hover:translate-x-1">↗</span>
        </Link>
      </nav>
    </header>
  );
}
