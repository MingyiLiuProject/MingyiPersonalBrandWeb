import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredWork } from "@/data/site";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell pb-14 pt-12 sm:pb-20 sm:pt-16">
        <p className="micro-label mb-6 text-[var(--accent)]">01 / Work archive</p>
        <h1 className="display-serif text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">selected work.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">A small archive of research and product work across biomedical optics, consumer technology, and intelligent mobility.</p>
      </section>

      <section className="page-shell">
        <div className="section-rule mb-5">
          <p className="micro-label text-[var(--muted)]">Research · Product · Mobility</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featuredWork.map((item, index) => (
            <article key={item.title} className={`garden-card group bg-[var(--paper)] ${index === 0 ? "md:col-span-2" : ""}`}>
              <div className={`image-grain relative bg-black ${index === 0 ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                <Image src={item.image} alt={`Concept placeholder for ${item.title}`} fill sizes={index === 0 ? "100vw" : "50vw"} className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3"><p className="micro-label text-[var(--accent)]">{item.type}</p><p className="text-xs text-[var(--muted)]">{item.year}</p></div>
                <h2 className="display-serif mt-4 text-4xl font-semibold tracking-[-0.045em]">{item.title}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
                <div className="mt-7 flex items-center justify-between border-t border-[var(--line)] pt-4">
                  <p className="micro-label text-[var(--muted)]">{item.signal}</p>
                  <p className="text-xs text-[var(--muted)]">Story in progress</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
