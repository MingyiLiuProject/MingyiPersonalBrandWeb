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
        <h1 className="display-serif text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">selected work.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">A small archive of research and product work across biomedical optics, consumer technology, and intelligent mobility.</p>
      </section>

      <section className="page-shell">
        <div className="grid gap-5 md:grid-cols-2">
          {featuredWork.map((item, index) => (
            <article key={item.title} className={`garden-card bg-[var(--paper)] ${index === 0 ? "md:col-span-2" : ""}`}>
              <div className={`image-grain relative bg-black ${index === 0 ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                <Image src={item.image} alt={`Concept placeholder for ${item.title}`} fill sizes={index === 0 ? "100vw" : "50vw"} className="object-cover transition duration-700 hover:scale-[1.025]" />
                <span className="micro-label absolute left-4 top-4 rounded-full bg-white/85 px-3 py-2 backdrop-blur">Concept image</span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3"><p className="micro-label text-[var(--accent)]">{item.type}</p><p className="text-xs text-[var(--muted)]">{item.year}</p></div>
                <h2 className="display-serif mt-4 text-4xl font-semibold tracking-[-0.045em]">{item.title}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
                <p className="mt-6 text-sm font-medium">Read case study ↗</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
