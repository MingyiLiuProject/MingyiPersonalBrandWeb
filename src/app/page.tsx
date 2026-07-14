import Image from "next/image";
import Link from "next/link";
import { OpticField } from "@/components/OpticField";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildItems, featuredWork, method } from "@/data/site";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="relative bg-black text-white">
        <OpticField />
        <div className="page-shell absolute inset-x-0 bottom-0 z-10 pb-8 sm:pb-12 lg:pb-16">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="micro-label flex items-center gap-3 text-white/65"><span className="pulse-dot size-2 rounded-full bg-[var(--accent)]" /> Mingyi Liu / Zurich</p>
              <h1 className="text-balance mt-6 max-w-5xl text-[clamp(3.5rem,7.6vw,7.8rem)] font-medium leading-[0.86] tracking-[-0.078em]">
                Researching the invisible.<br /><span className="display-serif text-[#ff755b]">Designing what matters.</span>
              </h1>
            </div>
            <div className="max-w-sm border-t border-white/35 pt-5 lg:justify-self-end">
              <p className="text-sm leading-6 text-white/72">PhD researcher in biomedical optics. Previously product manager and product designer at ByteDance and Inceptio.</p>
              <Link href="/work" className="mt-6 inline-flex items-center gap-3 text-xs font-semibold">View selected work <span className="text-[var(--accent)]">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper)]">
        <div className="page-shell grid gap-10 py-24 lg:grid-cols-[0.28fr_1.72fr] lg:py-36">
          <div>
            <p className="micro-label text-[var(--accent)]">01 / Position</p>
            <p className="mt-5 font-serif text-xl italic text-[var(--muted)]">One practice,<br />two disciplines.</p>
          </div>
          <div>
            <p className="text-balance max-w-6xl text-[clamp(2.5rem,5.2vw,5.6rem)] font-medium leading-[1.01] tracking-[-0.065em]">
              Science taught me to test what is <span className="display-serif text-[var(--accent)]">true.</span> Product taught me to ask what is <span className="display-serif text-[var(--blue)]">useful.</span>
            </p>
            <p className="mt-10 max-w-xl text-base leading-7 text-[var(--muted)]">I work where both questions are necessary — turning complex technologies, systems, and evidence into experiences people can understand and use.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--deep)] text-white">
        <div className="page-shell py-20 lg:py-28">
          <div className="flex items-center justify-between border-b border-white/25 pb-5">
            <p className="micro-label text-white/55">Trajectory</p>
            <p className="micro-label text-[#ff755b]">Present ← Past</p>
          </div>
          <div className="grid md:grid-cols-2">
            <article className="border-b border-white/20 py-10 md:border-b-0 md:border-r md:pr-12 lg:py-16">
              <p className="micro-label text-[#ff755b]">Now / Research</p>
              <h2 className="mt-7 text-4xl font-medium tracking-[-0.055em] sm:text-5xl">Biomedical optics PhD</h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/55">Investigating biomedical laser technologies through optical engineering, experimental design, and clinically meaningful questions.</p>
            </article>
            <article className="py-10 md:pl-12 lg:py-16">
              <p className="micro-label text-[#88a0ff]">Before / Industry</p>
              <h2 className="mt-7 text-4xl font-medium tracking-[-0.055em] sm:text-5xl">Product manager &amp; designer</h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/55">Building 0-to-1 consumer products and intelligent mobility experiences at ByteDance and Inceptio.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-shell py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-8 border-b border-[var(--foreground)] pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="micro-label text-[var(--accent)]">02 / Selected work</p>
            <h2 className="mt-5 text-5xl font-medium tracking-[-0.065em] sm:text-7xl">Lab &amp; launch.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">Temporary concept imagery is used to establish art direction. The stories are real.</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {featuredWork.map((item, index) => (
            <article key={item.title} className={`group ${index === 0 ? "lg:col-span-2" : ""}`}>
              <div className={`image-grain relative overflow-hidden bg-black ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                <Image src={item.image} alt={`Concept placeholder for ${item.title}`} fill sizes={index === 0 ? "100vw" : "50vw"} className="object-cover transition duration-700 group-hover:scale-[1.025]" style={{ objectPosition: item.imagePosition }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 border border-white/30 bg-black/20 px-3 py-2 text-white/70 backdrop-blur-sm"><p className="micro-label">Concept placeholder</p></div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 text-white sm:p-8">
                  <div>
                    <p className="micro-label text-white/60">{item.index} / {item.type}</p>
                    <h3 className="mt-3 text-3xl font-medium tracking-[-0.05em] sm:text-5xl">{item.title}</h3>
                  </div>
                  <p className="micro-label hidden text-right text-white/65 sm:block">{item.year}<br />{item.signal}</p>
                </div>
              </div>
              <div className="grid gap-4 border-b border-[var(--line)] py-5 sm:grid-cols-[1fr_auto]">
                <p className="max-w-2xl text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
                <span className="text-sm transition-transform group-hover:translate-x-1">Explore case ↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--blue)] text-white">
        <div className="page-shell py-20 lg:py-24">
          <p className="micro-label text-white/55">03 / How I work</p>
          <div className="mt-12 grid grid-cols-2 border-l border-t border-white/30 lg:grid-cols-4">
            {method.map((item, index) => (
              <div key={item} className="min-h-48 border-b border-r border-white/30 p-5 sm:p-7">
                <p className="micro-label text-white/50">0{index + 1}</p>
                <p className="mt-24 text-lg font-medium tracking-[-0.03em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <p className="micro-label text-[var(--accent)]">04 / Build log</p>
            <h2 className="mt-6 text-5xl font-medium tracking-[-0.065em]">What I&apos;m making <span className="display-serif text-[var(--accent)]">next.</span></h2>
          </div>
          <div className="border-t border-[var(--foreground)]">
            {buildItems.map((item) => (
              <article key={item.title} className="group grid gap-4 border-b border-[var(--line)] py-7 sm:grid-cols-[2rem_1fr_auto] sm:items-start">
                <p className="micro-label text-[var(--accent)]">{item.index}</p>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
                </div>
                <p className="micro-label text-[var(--muted)]">{item.status}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--accent)] text-white">
        <div className="page-shell flex min-h-[56svh] flex-col justify-between py-12 lg:py-16">
          <div className="flex items-center justify-between"><p className="micro-label">05 / Contact</p><p className="micro-label">Zurich, Switzerland</p></div>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <h2 className="text-balance max-w-5xl text-[clamp(3.5rem,7.5vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.075em]">Let&apos;s work on something difficult <span className="display-serif text-black">and useful.</span></h2>
            <Link href="/contact" className="grid size-28 shrink-0 place-items-center rounded-full bg-black text-2xl transition hover:scale-105">↗</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
