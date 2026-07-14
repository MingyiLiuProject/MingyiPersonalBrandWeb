import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredWork } from "@/data/site";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell page-intro grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="eyebrow text-[var(--signal)]">Selected work / 2018—Now</p>
          <h1 className="text-balance mt-7 max-w-5xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
            Products for motion. Research with <span className="display-serif text-[var(--blue)]">light.</span>
          </h1>
        </div>
        <p className="max-w-md text-base leading-7 text-[var(--muted)] lg:justify-self-end">
          A growing archive of product decisions, systems thinking, research questions, and the work required to make them real.
        </p>
      </section>

      <section className="page-shell pb-24">
        <div className="border-t border-[var(--foreground)]">
          {featuredWork.map((item) => (
            <article key={item.title} className="grid gap-8 border-b border-[var(--line)] py-10 lg:grid-cols-[0.16fr_0.72fr_0.75fr_0.37fr] lg:items-start lg:py-14">
              <p className="font-mono text-xs text-[var(--muted)]">{item.index}</p>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  {item.type}<br />{item.year}
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{item.title}</h2>
              </div>
              <div>
                <p className="text-base leading-7 text-[var(--muted)]">{item.summary}</p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-dark)]">
                  Focus / {item.signal}
                </p>
              </div>
              <div className="relative min-h-40 overflow-hidden rounded-2xl bg-[var(--deep)]">
                <div className="hairline-grid absolute inset-0" />
                <div
                  className="absolute left-[-12%] top-1/2 h-1 w-[124%] -rotate-12"
                  style={{ backgroundColor: item.accent, boxShadow: `0 0 24px ${item.accent}` }}
                />
                <span
                  className="absolute bottom-4 right-4 rounded-full px-3 py-1 font-mono text-[9px] font-bold tracking-[0.16em]"
                  style={{ backgroundColor: item.accent }}
                >
                  {item.glyph}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
