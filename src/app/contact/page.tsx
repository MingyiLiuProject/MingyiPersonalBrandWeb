import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell flex min-h-[calc(100vh-74px)] flex-col justify-between gap-20 pb-16 pt-14 lg:pb-20 lg:pt-20">
        <div className="flex items-center justify-between gap-6 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--muted)]">
          <span>Zurich / Switzerland</span>
          <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[var(--accent)]" /> Open to thoughtful conversations</span>
        </div>

        <div>
          <p className="section-label text-[var(--accent)]">Contact</p>
          <h1 className="text-balance mt-8 max-w-6xl text-[clamp(3.8rem,9vw,8.4rem)] font-medium leading-[0.88] tracking-[-0.08em]">A good collaboration often starts with a difficult <span className="display-serif text-[var(--accent)]">question.</span></h1>
        </div>

        <div className="grid gap-10 border-t border-[var(--foreground)] pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">For biomedical optics research, product strategy, design conversations, or useful experiments at the intersection.</p>
            <Link href="mailto:hello@mingyiliu.com" className="mt-7 inline-block border-b border-[var(--accent)] pb-1 text-xl font-medium text-[var(--accent)] sm:text-2xl">hello@mingyiliu.com ↗</Link>
          </div>
          <Link href="/work" className="w-fit border border-[var(--foreground)] px-5 py-3 text-xs font-semibold transition hover:bg-[var(--foreground)] hover:text-[var(--paper)]">View research &amp; work</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
