import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredWork } from "@/data/site";

export const metadata: Metadata = { title: "Research & Work" };

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell grid gap-12 pb-20 pt-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:pb-28 lg:pt-24">
        <div>
          <p className="section-label text-[var(--accent)]">Research &amp; work / Selected archive</p>
          <h1 className="text-balance mt-8 max-w-5xl text-[clamp(3.7rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.075em]">From product systems to <span className="display-serif text-[var(--accent)]">optical systems.</span></h1>
        </div>
        <div className="border-l border-[var(--line)] pl-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--muted)]">Practice / 2018—Now</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">A body of work spanning biomedical laser research, consumer products, intelligent vehicles, and the systems connecting them.</p>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        {featuredWork.map((item) => (
          <article key={item.title} className="border-b border-[var(--line)]">
            <div className="page-shell grid gap-8 py-12 lg:grid-cols-[0.12fr_0.55fr_0.72fr_0.4fr] lg:py-16">
              <p className="font-mono text-[9px] text-[var(--muted)]">{item.index}</p>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--accent)]">{item.type}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{item.title}</h2>
                <p className="mt-2 font-serif text-lg italic text-[var(--muted)]">{item.year}</p>
              </div>
              <div>
                <p className="text-base leading-7 text-[var(--muted)]">{item.summary}</p>
                <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--signal)]">Focus / {item.signal}</p>
              </div>
              <div className="fine-grid relative min-h-48 overflow-hidden border border-[var(--line)] bg-[var(--paper)]">
                <div className={`absolute left-6 top-6 size-3 rounded-full ${item.tone === "research" ? "bg-[var(--accent)]" : "bg-[var(--signal)]"}`} />
                <div className="absolute left-0 top-1/2 h-px w-full bg-[var(--foreground)]/20" />
                <div className={`absolute left-0 top-[calc(50%_-_1px)] h-[2px] w-2/3 ${item.tone === "research" ? "bg-[var(--accent)]" : "bg-[var(--signal)]"}`} />
                <p className="absolute bottom-5 right-5 font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--muted)]">Case / {item.index}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
