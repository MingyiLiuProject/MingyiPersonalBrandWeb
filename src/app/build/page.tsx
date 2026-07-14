import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildItems } from "@/data/site";

export const metadata: Metadata = { title: "Build" };

export default function BuildPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[var(--blue)] text-white">
        <div className="page-shell flex min-h-[72svh] flex-col justify-between py-12 lg:py-16">
          <div className="flex items-center justify-between"><p className="micro-label">Build log / 2026</p><p className="micro-label text-white/55">Experiments in progress</p></div>
          <h1 className="text-balance max-w-7xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.085em]">Small tools for <span className="display-serif text-[#ffb9a9]">real friction.</span></h1>
          <p className="max-w-md text-sm leading-6 text-white/65">A working shelf of prototypes that begin with recurring problems in research and knowledge work.</p>
        </div>
      </section>

      <section className="page-shell py-24 lg:py-32">
        <div className="border-t border-[var(--foreground)]">
          {buildItems.map((item, index) => (
            <article key={item.title} className="group grid gap-6 border-b border-[var(--line)] py-10 md:grid-cols-[0.12fr_0.72fr_1.16fr] md:py-14">
              <p className="micro-label text-[var(--accent)]">{item.index}</p>
              <div><p className="micro-label text-[var(--muted)]">Experiment 0{index + 1} / {item.status}</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] sm:text-5xl">{item.title}</h2></div>
              <div className="flex flex-col justify-between gap-8"><p className="max-w-xl text-base leading-7 text-[var(--muted)]">{item.summary}</p><span className="text-sm transition-transform group-hover:translate-x-1">Open note ↗</span></div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
