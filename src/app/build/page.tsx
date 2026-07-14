import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildItems } from "@/data/site";

export const metadata: Metadata = { title: "Build" };

export default function BuildPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell grid gap-12 pb-20 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:pb-28 lg:pt-24">
        <div>
          <p className="section-label text-[var(--signal)]">Build / Working prototypes</p>
          <h1 className="text-balance mt-8 max-w-5xl text-[clamp(3.7rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.075em]">Research reveals friction. Design turns it into a <span className="display-serif text-[var(--signal)]">tool.</span></h1>
        </div>
        <p className="max-w-sm border-l border-[var(--line)] pl-6 text-sm leading-7 text-[var(--muted)] lg:justify-self-end">A working shelf of focused utilities and experiments. Built from recurring problems, not trend forecasts.</p>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--deep)] text-[var(--paper)]">
        <div className="page-shell py-20 lg:py-24">
          <div className="grid gap-px border-l border-t border-white/20 bg-white/20 lg:grid-cols-3">
            {buildItems.map((item, index) => (
              <article key={item.title} className="dark-grid relative min-h-[420px] border-b border-r border-white/20 bg-[var(--deep)] p-7 sm:p-9">
                <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.15em] text-white/45">
                  <span>Experiment / 0{index + 1}</span>
                  <span>{item.status}</span>
                </div>
                <div className="mt-24">
                  <span className="font-serif text-5xl italic text-[#c9b6aa]">{item.index}</span>
                  <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.045em]">{item.title}</h2>
                  <p className="mt-5 text-sm leading-6 text-white/55">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
