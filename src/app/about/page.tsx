import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "About" };

const chapters = [
  ["Now", "Biomedical optics", "I am pursuing a PhD focused on biomedical laser technologies — learning to ask precise questions, design experiments, and stay honest about evidence."],
  ["ByteDance", "Product management", "I led a 0-to-1 in-car short-video product, working across consumer experience, platform constraints, and automotive partners."],
  ["Inceptio", "Product design", "I designed intelligent truck cockpit experiences for autonomous workflows, drivers, and fleet operations."],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell max-w-4xl pb-14 pt-12 sm:pb-20 sm:pt-16">
        <h1 className="display-serif text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">a little about me.</h1>
        <div className="mt-10 space-y-6 text-xl leading-8 tracking-[-0.025em] text-[var(--muted)] sm:text-2xl sm:leading-9">
          <p>I&apos;m Mingyi — a PhD researcher in biomedical optics, and previously a product manager and product designer.</p>
          <p>I moved from software and mobility into laser research, but the work still feels connected. I like understanding complicated systems, finding the important question, and making an answer concrete enough to test.</p>
        </div>
      </section>

      <section className="page-shell max-w-4xl">
        <div className="space-y-4">
          {chapters.map(([period, title, copy], index) => (
            <article key={period} className={`garden-card p-6 sm:p-8 ${index === 0 ? "bg-[var(--sage)]" : index === 1 ? "bg-[var(--peach)]" : "bg-[var(--blue)]"}`}>
              <div className="grid gap-5 sm:grid-cols-[0.35fr_0.65fr]">
                <div><p className="micro-label text-black/40">{period}</p><h2 className="display-serif mt-2 text-3xl font-semibold">{title}</h2></div>
                <p className="text-sm leading-7 text-black/55">{copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-lg leading-8 text-[var(--muted)]">
          <p>Outside work, I&apos;m usually reading, trying a small tool idea, or learning something I&apos;ll probably turn into a note later.</p>
          <Link href="/contact" className="soft-link mt-6 inline-block font-medium text-[var(--foreground)]">Let&apos;s talk ↗</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
