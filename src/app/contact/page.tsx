import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[var(--accent)] text-white">
        <div className="page-shell flex min-h-[calc(100svh_-_70px)] flex-col justify-between gap-20 py-10 lg:py-14">
          <div className="flex items-center justify-between"><p className="micro-label">Contact / Zurich</p><p className="micro-label flex items-center gap-2"><span className="size-1.5 rounded-full bg-white" /> Open to conversations</p></div>
          <h1 className="text-balance max-w-7xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.085em]">Bring a question worth <span className="display-serif text-black">staying with.</span></h1>
          <div className="grid gap-10 border-t border-white/45 pt-7 md:grid-cols-[1fr_auto] md:items-end">
            <div><p className="max-w-xl text-sm leading-7 text-white/75">Biomedical optics, product strategy, design, or useful experiments at the intersection.</p><Link href="mailto:hello@mingyiliu.com" className="mt-7 inline-block border-b border-white pb-1 text-xl font-medium sm:text-2xl">hello@mingyiliu.com ↗</Link></div>
            <Link href="/work" className="w-fit bg-black px-5 py-3 text-xs font-semibold">See the work first</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
