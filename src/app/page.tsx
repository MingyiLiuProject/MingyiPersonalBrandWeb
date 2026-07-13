import Link from "next/link";
import { OpticField } from "@/components/OpticField";
import { SiteHeader } from "@/components/SiteHeader";
import { buildItems, featuredWork, principles } from "@/data/site";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-20">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
            Product manager / researcher / builder
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-[var(--foreground)] sm:text-7xl">
            I build products, study light, and turn ideas into useful tools.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            This site is the home base for my work across consumer products,
            intelligent mobility, biomedical laser research, and the product
            experiments I am building next.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:bg-[var(--accent)]"
            >
              Explore work
            </Link>
            <Link
              href="/build"
              className="rounded-full border border-[var(--foreground)] px-5 py-3 text-sm font-medium transition hover:bg-[var(--panel)]"
            >
              See what I am building
            </Link>
          </div>
        </div>
        <OpticField />
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:grid-cols-3">
          {principles.map((item) => (
            <p key={item} className="text-sm leading-6 text-[var(--deep)]">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--signal)]">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Case studies to grow into.</h2>
          </div>
          <Link href="/work" className="hidden text-sm font-medium text-[var(--accent)] sm:block">
            View all work
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featuredWork.map((item) => (
            <article
              key={item.title}
              className="border border-[var(--line)] bg-[rgba(255,250,240,0.68)] p-5 transition hover:-translate-y-1 hover:border-[var(--foreground)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {item.type} / {item.year}
              </p>
              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 min-h-[96px] text-sm leading-6 text-[var(--muted)]">
                {item.summary}
              </p>
              <p className="mt-6 border-t border-[var(--line)] pt-4 font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                {item.signal}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--deep)] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7ed7c1]">
              Build lab
            </p>
            <h2 className="mt-3 text-3xl font-semibold">A place for tools, prototypes, and product bets.</h2>
          </div>
          <div className="grid gap-4">
            {buildItems.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 border border-white/18 bg-white/[0.04] p-5 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">{item.summary}</p>
                </div>
                <p className="h-fit border border-white/20 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-[#f7d354]">
                  {item.status}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
