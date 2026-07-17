import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell max-w-4xl pb-10 pt-12 sm:pt-20">
        <div className="garden-card bg-[var(--peach)] p-7 sm:p-12 lg:p-14">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="micro-label text-black/40">04 / Contact</p>
            <p className="micro-label flex items-center gap-2 text-black/40"><span className="status-dot size-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" /> Zurich · Open to conversations</p>
          </div>
          <h1 className="display-serif mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">Have a question worth exploring?</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">I&apos;m always happy to talk about biomedical optics, product design, research tools, or interesting problems at the intersection.</p>
          <div className="mt-10 border-t border-black/15 pt-6">
            <p className="micro-label text-black/35">Best way to reach me</p>
            <Link href="mailto:hello@mingyiliu.com" className="soft-link mt-3 inline-block text-xl font-medium sm:text-2xl">hello@mingyiliu.com ↗</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
