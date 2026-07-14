import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildItems } from "@/data/site";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="page-shell pb-16 pt-12 sm:pb-24 sm:pt-20">
        <p className="display-serif text-[clamp(3rem,6vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.06em]">
          Hey there, I&apos;m Mingyi <span aria-hidden="true">✦</span>
        </p>
        <div className="mt-8 max-w-3xl space-y-5 text-xl leading-8 tracking-[-0.025em] text-[var(--muted)] sm:text-2xl sm:leading-9">
          <p>I&apos;m a PhD researcher working with biomedical optics and laser systems.</p>
          <p>Before returning to research, I designed and built products at <span className="text-[var(--foreground)]">ByteDance</span> and <span className="text-[var(--foreground)]">Inceptio</span>. This is my little garden for work, experiments, and ideas in progress.</p>
        </div>
        <div className="mt-9 flex flex-wrap gap-5 text-sm">
          <Link href="/work" className="soft-link font-medium">Selected work</Link>
          <Link href="/about" className="soft-link font-medium">More about me</Link>
          <Link href="mailto:hello@mingyiliu.com" className="soft-link font-medium">Say hello ↗</Link>
        </div>
      </section>

      <section className="page-shell">
        <div className="mb-5 flex items-center justify-between">
          <p className="micro-label text-[var(--muted)]">Recently planted</p>
          <p className="text-xs text-[var(--muted)]">Research · Products · Experiments</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:auto-rows-[118px]">
          <Link href="/work" className="garden-card image-grain min-h-[440px] bg-black lg:col-span-7 lg:row-span-4">
            <Image src="/images/concept/optics-hero-placeholder.png" alt="Concept placeholder for Mingyi's biomedical optics research" fill priority sizes="(min-width:1024px) 58vw, 100vw" className="object-cover object-center transition duration-700 hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="micro-label text-white/55">Research · Current</p>
              <h2 className="display-serif mt-2 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">LASER-Blade</h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-white/65">Biomedical laser research between optical engineering and clinical usefulness.</p>
            </div>
            <span className="micro-label absolute left-5 top-5 rounded-full bg-white/85 px-3 py-2 text-black backdrop-blur">Concept image</span>
          </Link>

          <article className="garden-card flex min-h-56 flex-col justify-between bg-[var(--sage)] p-6 lg:col-span-5 lg:row-span-2">
            <div className="flex items-center justify-between"><p className="micro-label text-black/45">Now</p><span className="size-2 rounded-full bg-[#657c52]" /></div>
            <div>
              <p className="display-serif text-3xl font-semibold tracking-[-0.045em]">PhD researcher</p>
              <p className="mt-2 text-sm leading-6 text-black/55">Studying biomedical optics and learning to make better questions.</p>
            </div>
          </article>

          <article className="garden-card flex min-h-56 flex-col justify-between bg-[var(--paper)] p-6 lg:col-span-5 lg:row-span-2">
            <p className="micro-label text-[var(--accent)]">A note to self</p>
            <blockquote className="display-serif text-2xl leading-tight tracking-[-0.035em]">“Do not confuse a polished answer with a well-framed problem.”</blockquote>
            <p className="text-xs text-[var(--muted)]">Research notebook · 2026</p>
          </article>

          <Link href="/work" className="garden-card image-grain min-h-[360px] bg-black lg:col-span-5 lg:row-span-3">
            <Image src="/images/concept/in-car-placeholder.png" alt="Concept placeholder for the Douyin In-Car project" fill sizes="(min-width:1024px) 42vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="micro-label text-white/55">Product · ByteDance</p>
              <h2 className="display-serif mt-2 text-3xl font-semibold">Douyin In-Car</h2>
              <p className="mt-2 text-xs leading-5 text-white/65">A 0-to-1 entertainment product for the car.</p>
            </div>
          </Link>

          <article className="garden-card flex min-h-[360px] flex-col justify-between bg-[var(--peach)] p-7 sm:p-9 lg:col-span-7 lg:row-span-3">
            <div className="flex items-center justify-between"><p className="micro-label text-black/45">The through line</p><span className="display-serif text-3xl">↘</span></div>
            <p className="display-serif max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">Research asks what is true. Design asks what becomes useful.</p>
            <p className="max-w-md text-sm leading-6 text-black/55">I like working where both questions matter.</p>
          </article>

          <article className="garden-card min-h-[360px] bg-[var(--butter)] p-7 lg:col-span-5 lg:row-span-3">
            <div className="flex items-center justify-between"><p className="micro-label text-black/45">Build log</p><Link href="/build" className="text-sm">All experiments ↗</Link></div>
            <div className="mt-10 divide-y divide-black/15 border-t border-black/20">
              {buildItems.map((item) => (
                <div key={item.index} className="py-4">
                  <div className="flex items-baseline justify-between gap-4"><h3 className="font-medium tracking-[-0.02em]">{item.title}</h3><span className="micro-label text-black/40">{item.status}</span></div>
                  <p className="mt-1 text-xs leading-5 text-black/50">{item.summary}</p>
                </div>
              ))}
            </div>
          </article>

          <Link href="/work" className="garden-card image-grain min-h-[360px] bg-black lg:col-span-7 lg:row-span-3">
            <Image src="/images/concept/truck-cockpit-placeholder.png" alt="Concept placeholder for the Smart Truck Cockpit project" fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="micro-label text-white/55">Product design · Inceptio</p>
              <h2 className="display-serif mt-2 text-3xl font-semibold">Smart Truck Cockpit</h2>
              <p className="mt-2 text-xs leading-5 text-white/65">Interfaces for intelligent trucking and autonomous workflows.</p>
            </div>
          </Link>

          <article className="garden-card flex min-h-56 flex-col justify-between bg-[var(--blue)] p-6 lg:col-span-4 lg:row-span-2">
            <p className="micro-label text-black/40">Currently reading</p>
            <div><p className="display-serif text-2xl font-semibold">The Design of Everyday Things</p><p className="mt-2 text-xs text-black/50">Don Norman</p></div>
          </article>

          <article className="garden-card flex min-h-56 flex-col justify-between bg-[var(--deep)] p-6 text-white lg:col-span-4 lg:row-span-2">
            <p className="micro-label text-white/40">Based in</p>
            <div><p className="display-serif text-3xl font-semibold">Zurich, CH</p><p className="mt-2 text-xs text-white/45">Working between lab benches and browser tabs.</p></div>
          </article>

          <Link href="/contact" className="garden-card flex min-h-56 flex-col justify-between bg-[var(--paper)] p-6 lg:col-span-4 lg:row-span-2">
            <p className="micro-label text-[var(--accent)]">Say hello</p>
            <p className="display-serif text-3xl font-semibold">Have a question worth exploring? <span className="text-[var(--accent)]">↗</span></p>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
