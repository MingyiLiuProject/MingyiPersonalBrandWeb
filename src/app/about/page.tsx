import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "About" };

const chapters = [
  ["01", "Product", "Building consumer experiences inside the constraints of platforms, partners, and launch reality."],
  ["02", "Mobility", "Designing for intelligent vehicles, logistics systems, and the people operating between them."],
  ["03", "Optics", "Researching biomedical laser technology where experimental rigor meets clinical usefulness."],
  ["04", "Next", "Combining these disciplines into focused tools, prototypes, and considered product bets."],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell page-intro">
        <p className="eyebrow text-[var(--accent-dark)]">About / A non-linear path</p>
        <h1 className="text-balance mt-7 max-w-6xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
          Curious across disciplines. Serious about <span className="display-serif text-[var(--signal)]">usefulness.</span>
        </h1>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--deep)] text-white">
        <div className="page-shell grid gap-12 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:py-24">
          <p className="eyebrow h-fit text-[var(--accent)]">The through line</p>
          <div className="space-y-7 text-xl leading-8 text-white/70 sm:text-2xl sm:leading-9">
            <p className="text-white">I&apos;m Mingyi Liu. My work moves between product management, intelligent mobility, biomedical laser research, and the tools that make complex work easier.</p>
            <p>I&apos;m interested in the moment when a complicated idea becomes clear enough to test, share, and eventually use.</p>
          </div>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.45fr_1.55fr]">
          <div>
            <p className="eyebrow text-[var(--blue)]">Four chapters</p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-[var(--muted)]">Different rooms, one consistent way of working: observe closely, frame the problem, then make something concrete.</p>
          </div>
          <div className="border-t border-[var(--foreground)]">
            {chapters.map(([index, title, copy]) => (
              <article key={index} className="grid gap-5 border-b border-[var(--line)] py-7 sm:grid-cols-[3rem_0.55fr_1fr] sm:items-start">
                <p className="font-mono text-[10px] text-[var(--signal)]">{index}</p>
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h2>
                <p className="text-sm leading-6 text-[var(--muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-20 rounded-3xl bg-[var(--accent)] p-8 sm:p-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Currently</p>
          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="text-balance max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Researching light. Building the next useful thing.</h2>
            <Link href="/contact" className="shrink-0 rounded-full bg-[var(--deep)] px-5 py-3 text-sm font-medium text-white">Let&apos;s talk ↗</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
