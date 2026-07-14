import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "About" };

const chapters = [
  ["Now", "Biomedical optics", "PhD research into laser technologies where optical engineering, experimental evidence, and clinical relevance meet."],
  ["Before", "Product management", "0-to-1 consumer product work at ByteDance across vehicle partners and embedded entertainment contexts."],
  ["Before", "Product design", "Intelligent mobility experiences at Inceptio for autonomous driving workflows, smart cockpits, and fleet operations."],
  ["Throughout", "Making complexity usable", "A consistent practice of observing systems closely, framing the real problem, and building a concrete response."],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell pb-20 pt-16 lg:pb-28 lg:pt-24">
        <p className="section-label text-[var(--accent)]">About / A path with a through line</p>
        <h1 className="text-balance mt-8 max-w-6xl text-[clamp(3.7rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.075em]">I changed disciplines, not the way I <span className="display-serif text-[var(--accent)]">think.</span></h1>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper)]">
        <div className="page-shell grid gap-12 py-20 lg:grid-cols-[0.42fr_1.58fr] lg:py-28">
          <p className="section-label h-fit text-[var(--signal)]">The through line</p>
          <div className="max-w-4xl space-y-8 text-2xl leading-[1.35] tracking-[-0.035em] text-[var(--muted)] sm:text-3xl">
            <p className="text-[var(--foreground)]">I&apos;m Mingyi Liu, a PhD researcher in biomedical optics and a former product manager and product designer.</p>
            <p>My career has moved from consumer technology and intelligent vehicles into biomedical laser research. The medium changed. The underlying work did not: understand a complex system, find the consequential question, and make the answer useful.</p>
          </div>
        </div>
      </section>

      <section className="page-shell py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.42fr_1.58fr]">
          <div>
            <p className="section-label text-[var(--accent)]">Journey</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-[var(--muted)]">Industry gave me an instinct for constraints. Research gave me a deeper respect for evidence.</p>
          </div>
          <div className="border-t border-[var(--foreground)]">
            {chapters.map(([period, title, copy], index) => (
              <article key={title} className="grid gap-5 border-b border-[var(--line)] py-8 sm:grid-cols-[3rem_0.65fr_1.35fr] sm:items-start">
                <p className="font-mono text-[9px] text-[var(--muted)]">0{index + 1}</p>
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--accent)]">{period}</p>
                  <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em]">{title}</h2>
                </div>
                <p className="text-sm leading-6 text-[var(--muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-8 border border-[var(--line)] bg-[var(--panel)] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--signal)]">Current question</p>
            <h2 className="text-balance mt-5 max-w-4xl text-4xl font-medium tracking-[-0.055em] sm:text-5xl">How can rigorous science become more legible, usable, and consequential?</h2>
          </div>
          <Link href="/contact" className="w-fit bg-[var(--foreground)] px-5 py-3.5 text-xs font-semibold text-[var(--paper)]">Continue the conversation ↗</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
