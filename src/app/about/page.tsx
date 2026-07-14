import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "About" };

const chapters = [
  ["Current", "PhD research", "Biomedical optics and laser technologies, grounded in experimental evidence and clinical relevance."],
  ["ByteDance", "Product management", "0-to-1 in-car entertainment across consumer, platform, and automotive constraints."],
  ["Inceptio", "Product design", "Intelligent truck cockpits and workflows for autonomous driving and fleet operations."],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell py-16 lg:py-24">
        <p className="micro-label text-[var(--accent)]">About / Mingyi Liu</p>
        <h1 className="text-balance mt-7 max-w-7xl text-[clamp(3.8rem,8.4vw,8.5rem)] font-medium leading-[0.87] tracking-[-0.082em]">I changed disciplines.<br /><span className="display-serif text-[var(--accent)]">The method stayed.</span></h1>
      </section>

      <section className="image-grain relative min-h-[62svh] overflow-hidden bg-black">
        <Image src="/images/concept/optics-hero-placeholder.png" alt="Concept placeholder of an optics laboratory" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
        <div className="page-shell absolute inset-x-0 bottom-0 pb-10 text-white sm:pb-16">
          <p className="micro-label text-white/55">Concept placeholder / Future lab portrait</p>
          <p className="mt-6 max-w-2xl text-2xl leading-tight tracking-[-0.04em] sm:text-4xl">A product instinct for consequences. A researcher&apos;s respect for evidence.</p>
        </div>
      </section>

      <section className="bg-[var(--paper)]">
        <div className="page-shell grid gap-12 py-24 lg:grid-cols-[0.32fr_1.68fr] lg:py-32">
          <p className="micro-label text-[var(--blue)]">The through line</p>
          <div>
            <p className="text-balance max-w-5xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl">I move between scientific questions and designed experiences, looking for the point where complexity can become <span className="display-serif text-[var(--blue)]">clear enough to use.</span></p>
            <p className="mt-10 max-w-2xl text-base leading-8 text-[var(--muted)]">My path runs from consumer technology and intelligent vehicles to biomedical laser research. What connects it is a way of working: observe the full system, frame the consequential problem, make a tangible response, then test it honestly.</p>
          </div>
        </div>
      </section>

      <section className="page-shell py-24 lg:py-28">
        <div className="border-t border-[var(--foreground)]">
          {chapters.map(([period, title, copy], index) => (
            <article key={period} className="grid gap-6 border-b border-[var(--line)] py-8 md:grid-cols-[0.12fr_0.5fr_1.38fr]">
              <p className="micro-label text-[var(--accent)]">0{index + 1}</p>
              <div><p className="micro-label text-[var(--muted)]">{period}</p><h2 className="mt-3 text-3xl font-medium tracking-[-0.05em]">{title}</h2></div>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-20 flex flex-col items-start justify-between gap-8 bg-[var(--blue)] p-7 text-white sm:p-12 md:flex-row md:items-end">
          <h2 className="text-balance max-w-4xl text-4xl font-medium tracking-[-0.055em] sm:text-6xl">The next chapter is being written in the lab.</h2>
          <Link href="/contact" className="shrink-0 border-b border-white pb-1 text-xs font-semibold">Start a conversation ↗</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
