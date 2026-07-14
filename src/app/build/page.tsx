import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildItems } from "@/data/site";

export const metadata: Metadata = { title: "Build Lab" };

export default function BuildPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[var(--accent)]">
        <div className="page-shell page-intro grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Build lab / Experiments in progress</p>
            <h1 className="text-balance mt-7 max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Ideas become useful by being <span className="display-serif">used.</span>
            </h1>
          </div>
          <p className="max-w-md text-base leading-7 text-[var(--deep)]/65 lg:justify-self-end">
            A working shelf for prototypes, focused utilities, and product bets — shared before they feel entirely finished.
          </p>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-28">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
          {buildItems.map((item, index) => (
            <article key={item.title} className="group relative min-h-[400px] bg-[var(--background)] p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-full bg-[var(--deep)] font-mono text-xs text-[var(--accent)]">{item.index}</span>
                <span className="rounded-full border border-[var(--line)] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em]">{item.status}</span>
              </div>
              <div className="mt-20">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">Experiment 0{index + 1}</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em]">{item.title}</h2>
                <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--signal)] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
