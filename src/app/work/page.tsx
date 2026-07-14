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
      <section className="page-shell grid gap-12 py-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:py-24">
        <div>
          <p className="micro-label text-[var(--accent)]">Selected archive / 2018—Now</p>
          <h1 className="text-balance mt-7 text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.085em]">Work across <span className="display-serif text-[var(--blue)]">systems.</span></h1>
        </div>
        <p className="max-w-sm border-t border-[var(--foreground)] pt-5 text-sm leading-7 text-[var(--muted)] lg:justify-self-end">From laser systems to product systems — selected research and industry work, presented with temporary concept imagery.</p>
      </section>

      <section className="page-shell pb-28">
        <div className="space-y-20">
          {featuredWork.map((item) => (
            <article key={item.title}>
              <div className="image-grain relative aspect-[16/8] overflow-hidden bg-black">
                <Image src={item.image} alt={`Concept placeholder for ${item.title}`} fill sizes="100vw" className="object-cover transition duration-700 hover:scale-[1.02]" style={{ objectPosition: item.imagePosition }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="micro-label absolute left-5 top-5 border border-white/30 bg-black/20 px-3 py-2 text-white/65 backdrop-blur-sm">Concept placeholder</p>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 text-white sm:p-9">
                  <div><p className="micro-label text-white/55">{item.index} / {item.type}</p><h2 className="mt-3 text-4xl font-medium tracking-[-0.06em] sm:text-7xl">{item.title}</h2></div>
                  <p className="micro-label hidden text-right text-white/60 sm:block">{item.year}<br />{item.signal}</p>
                </div>
              </div>
              <div className="grid gap-5 border-b border-[var(--foreground)] py-6 md:grid-cols-[0.65fr_1.35fr]">
                <p className="micro-label text-[var(--muted)]">Context / Contribution</p>
                <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
