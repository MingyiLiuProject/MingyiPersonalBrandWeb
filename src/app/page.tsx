import Link from "next/link";
import { OpticField } from "@/components/OpticField";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildItems, featuredWork, principles } from "@/data/site";

const Arrow = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4" fill="none">
    <path d="M3 13 13 3M6 3h7v7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />

      <section className="page-shell grid gap-12 pb-16 pt-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:pb-24 lg:pt-16">
        <div>
          <p className="eyebrow text-[var(--accent-dark)]">Product / Research / Build</p>
          <h1 className="text-balance mt-8 max-w-4xl text-[clamp(3.65rem,7.5vw,7.4rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
            Building clarity at the edge of <span className="display-serif text-[var(--blue)]">product</span> &amp; science.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            I&apos;m Mingyi — a product leader and biomedical optics researcher turning complex systems into useful, human tools.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--deep)] px-5 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--blue)]"
            >
              Explore selected work
              <span className="transition-transform group-hover:rotate-45"><Arrow /></span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-[var(--line)] bg-white/35 px-5 py-3.5 text-sm font-medium transition hover:border-[var(--foreground)] hover:bg-white"
            >
              More about me
            </Link>
          </div>
        </div>
        <OpticField />
      </section>

      <section className="border-y border-[var(--line)] bg-white/25">
        <div className="page-shell grid md:grid-cols-3">
          {principles.map((item, index) => (
            <div
              key={item.label}
              className="grid grid-cols-[auto_1fr] gap-4 border-b border-[var(--line)] py-6 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="font-mono text-[10px] text-[var(--signal)]">0{index + 1}</span>
              <div>
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell py-20 lg:py-28">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <div>
            <p className="eyebrow text-[var(--signal)]">Selected work</p>
            <h2 className="text-balance mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
              Built in the <span className="display-serif">real world.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-[var(--muted)] md:justify-self-end md:text-right">
            Products and research shaped by actual launch constraints, complex stakeholders, and questions worth staying with.
          </p>
        </div>

        <div className="mt-12 border-t border-[var(--foreground)]">
          {featuredWork.map((item) => (
            <article
              key={item.title}
              className="group grid gap-6 border-b border-[var(--line)] py-7 transition-colors hover:border-[var(--foreground)] md:grid-cols-[0.14fr_0.66fr_0.85fr_0.28fr] md:items-center md:py-9"
            >
              <p className="font-mono text-[11px] text-[var(--muted)]">{item.index}</p>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  {item.type} · {item.year}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] transition-transform group-hover:translate-x-1 sm:text-3xl">
                  {item.title}
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
              <div className="flex items-center justify-between gap-4 md:justify-end">
                <span
                  className="rounded-full px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ backgroundColor: item.accent }}
                >
                  {item.glyph}
                </span>
                <span className="grid size-9 place-items-center rounded-full border border-[var(--line)] transition group-hover:rotate-45 group-hover:border-[var(--foreground)] group-hover:bg-[var(--foreground)] group-hover:text-white">
                  <Arrow />
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 flex justify-end">
          <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-semibold">
            View all work <span className="transition-transform group-hover:rotate-45"><Arrow /></span>
          </Link>
        </div>
      </section>

      <section className="bg-[var(--accent)] text-[var(--deep)]">
        <div className="page-shell py-20 lg:py-24">
          <div className="grid gap-9 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="eyebrow">Build lab</p>
              <h2 className="text-balance mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                Small bets.<br /><span className="display-serif">Useful outcomes.</span>
              </h2>
              <Link href="/build" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                Enter the lab <Arrow />
              </Link>
            </div>
            <div className="border-t border-[var(--deep)]">
              {buildItems.map((item) => (
                <article key={item.title} className="grid gap-4 border-b border-[var(--deep)]/30 py-6 sm:grid-cols-[2rem_1fr_auto] sm:items-start">
                  <p className="font-mono text-[10px]">{item.index}</p>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--deep)]/65">{item.summary}</p>
                  </div>
                  <p className="w-fit rounded-full border border-[var(--deep)]/35 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.15em]">
                    {item.status}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--deep)] text-white">
        <div className="page-shell flex flex-col items-start justify-between gap-10 py-20 md:flex-row md:items-end lg:py-28">
          <div>
            <p className="eyebrow text-[var(--accent)]">Start a conversation</p>
            <h2 className="text-balance mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-7xl">
              Have a complex problem worth <span className="display-serif text-[var(--accent)]">untangling?</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="group grid size-28 shrink-0 place-items-center rounded-full bg-[var(--signal)] text-[var(--deep)] transition hover:scale-105 sm:size-36"
            aria-label="Contact Mingyi"
          >
            <span className="transition-transform group-hover:rotate-45"><Arrow /></span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
