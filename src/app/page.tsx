import Link from "next/link";
import { OpticField } from "@/components/OpticField";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildItems, featuredWork, identity, method } from "@/data/site";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="page-shell grid gap-14 pb-20 pt-14 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:pb-28 lg:pt-20">
        <div>
          <p className="section-label text-[var(--accent)]">Mingyi Liu / PhD researcher &amp; product designer</p>
          <h1 className="text-balance mt-8 max-w-4xl text-[clamp(3.7rem,7.6vw,7.3rem)] font-medium leading-[0.91] tracking-[-0.075em]">
            I research <span className="display-serif text-[var(--accent)]">light.</span> I design how complexity becomes useful.
          </h1>
          <p className="mt-9 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            Today, I&apos;m a PhD researcher in biomedical optics. Before academia, I built and designed products at ByteDance and Inceptio. Both practices begin with the same act: understanding the real problem.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link href="/work" className="inline-flex items-center gap-3 bg-[var(--foreground)] px-5 py-3.5 text-xs font-semibold text-[var(--paper)] transition hover:bg-[var(--accent)]">
              Explore research &amp; work <span>↗</span>
            </Link>
            <Link href="/about" className="border-b border-[var(--foreground)] pb-1 text-xs font-semibold">Read my story</Link>
          </div>
        </div>
        <OpticField />
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper)]">
        <div className="page-shell grid md:grid-cols-3">
          {identity.map((item) => (
            <article key={item.label} className="border-b border-[var(--line)] py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--accent)]">{item.label}</p>
              <p className="mt-3 text-base font-semibold tracking-[-0.025em]">{item.value}</p>
              <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.45fr_1.55fr]">
          <p className="section-label h-fit text-[var(--signal)]">Position</p>
          <div>
            <p className="text-balance max-w-5xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Research asks whether an idea is true. Product design asks whether it is useful. <span className="display-serif text-[var(--signal)]">My work holds both questions at once.</span>
            </p>
            <div className="mt-14 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
              <article className="bg-[var(--paper)] p-7 sm:p-9">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--accent)]">01 / Research</p>
                <h2 className="mt-8 text-3xl font-medium tracking-[-0.045em]">Rigour before certainty.</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">Designing experiments, studying optical systems, and building evidence around biomedical laser technologies.</p>
              </article>
              <article className="bg-[var(--paper)] p-7 sm:p-9">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--signal)]">02 / Product</p>
                <h2 className="mt-8 text-3xl font-medium tracking-[-0.045em]">Clarity before features.</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">Framing product problems, aligning complex systems, and designing experiences that survive contact with the real world.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="page-shell py-24 lg:py-28">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="section-label text-[var(--accent)]">Selected experience</p>
              <h2 className="text-balance mt-6 text-4xl font-medium tracking-[-0.055em] sm:text-5xl">A career across <span className="display-serif">lab and launch.</span></h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[var(--muted)] md:justify-self-end">Not a change of direction, but a deepening of practice: from designing product systems to investigating the physical systems beneath them.</p>
          </div>

          <div className="mt-14 border-t border-[var(--foreground)]">
            {featuredWork.map((item) => (
              <article key={item.title} className="group grid gap-5 border-b border-[var(--line)] py-8 lg:grid-cols-[0.12fr_0.55fr_0.82fr_0.32fr] lg:items-start lg:py-10">
                <p className="font-mono text-[9px] text-[var(--muted)]">{item.index}</p>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]">{item.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{item.title}</h3>
                  <p className="mt-1 font-serif text-base italic text-[var(--accent)]">{item.year}</p>
                </div>
                <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--signal)] lg:text-right">{item.signal}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex justify-end">
            <Link href="/work" className="border-b border-[var(--foreground)] pb-1 text-xs font-semibold">View full archive ↗</Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--deep)] text-[var(--paper)]">
        <div className="page-shell grid gap-12 py-24 lg:grid-cols-[0.52fr_1.48fr] lg:py-28">
          <div>
            <p className="section-label text-[#c9b6aa]">One method</p>
            <h2 className="text-balance mt-6 text-4xl font-medium tracking-[-0.055em]">From ambiguity to <span className="display-serif text-[#c9b6aa]">evidence.</span></h2>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-white/20 md:grid-cols-4">
            {method.map((item, index) => (
              <div key={item} className="min-h-44 border-b border-r border-white/20 p-5">
                <p className="font-mono text-[9px] text-white/40">0{index + 1}</p>
                <p className="mt-20 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="section-label text-[var(--signal)]">Build notes</p>
            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em]">Tools in progress.</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--muted)]">Small products emerging from recurring research and knowledge-work problems.</p>
          </div>
          <div className="border-t border-[var(--foreground)]">
            {buildItems.map((item) => (
              <article key={item.title} className="grid gap-3 border-b border-[var(--line)] py-6 sm:grid-cols-[2rem_1fr_auto] sm:items-start">
                <p className="font-mono text-[9px] text-[var(--accent)]">{item.index}</p>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.025em]">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-xs leading-5 text-[var(--muted)]">{item.summary}</p>
                </div>
                <p className="w-fit font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--muted)]">{item.status}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--paper)]">
        <div className="page-shell flex flex-col items-start justify-between gap-10 py-20 md:flex-row md:items-end lg:py-24">
          <div>
            <p className="section-label text-[var(--accent)]">Open to thoughtful conversations</p>
            <h2 className="text-balance mt-6 max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.065em] sm:text-7xl">Research, products, or a difficult problem worth <span className="display-serif text-[var(--accent)]">understanding.</span></h2>
          </div>
          <Link href="/contact" className="shrink-0 bg-[var(--foreground)] px-6 py-4 text-xs font-semibold text-[var(--paper)]">Start a conversation ↗</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
