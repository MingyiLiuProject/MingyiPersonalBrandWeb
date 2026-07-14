import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[var(--deep)] text-white">
        <div className="page-shell flex min-h-[calc(100vh-72px)] flex-col justify-between gap-16 py-12 sm:py-16">
          <div className="flex items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
            <span>Zurich / Switzerland</span>
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[var(--accent)]" /> Open to conversations</span>
          </div>

          <div>
            <p className="eyebrow text-[var(--accent)]">Get in touch</p>
            <h1 className="text-balance mt-7 max-w-6xl text-[clamp(3.6rem,9vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.08em]">
              Let&apos;s make the complex feel <span className="display-serif text-[var(--accent)]">clear.</span>
            </h1>
          </div>

          <div className="grid gap-8 border-t border-white/20 pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="max-w-xl text-base leading-7 text-white/60">
                For product collaborations, research conversations, thoughtful experiments, or simply a good question.
              </p>
              <Link
                href="mailto:hello@mingyiliu.com"
                className="mt-7 inline-block border-b border-[var(--accent)] pb-1 text-xl font-medium text-[var(--accent)] transition hover:text-white sm:text-2xl"
              >
                hello@mingyiliu.com ↗
              </Link>
            </div>
            <Link href="/work" className="w-fit rounded-full border border-white/25 px-5 py-3 text-sm font-medium transition hover:bg-white hover:text-[var(--deep)]">Browse work first</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
