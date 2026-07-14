import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildItems } from "@/data/site";

export const metadata: Metadata = { title: "Build" };

export default function BuildPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell max-w-4xl pb-14 pt-12 sm:pb-20 sm:pt-16">
        <h1 className="display-serif text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">things I&apos;m building.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">Small tools growing out of recurring friction in research and knowledge work. They are intentionally unfinished.</p>
      </section>
      <section className="page-shell max-w-4xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {buildItems.map((item, index) => (
            <article key={item.title} className={`garden-card flex min-h-72 flex-col justify-between p-6 sm:p-8 ${index === 0 ? "bg-[var(--butter)]" : index === 1 ? "bg-[var(--blue)]" : "bg-[var(--sage)]"}`}>
              <div className="flex items-center justify-between"><p className="micro-label text-black/40">Experiment {item.index}</p><p className="micro-label text-black/40">{item.status}</p></div>
              <div><h2 className="display-serif text-3xl font-semibold tracking-[-0.04em]">{item.title}</h2><p className="mt-3 text-sm leading-6 text-black/55">{item.summary}</p></div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
