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
        <div className="garden-card bg-[var(--peach)] p-7 sm:p-12">
          <p className="micro-label text-black/40">Based in Zurich · Open to conversations</p>
          <h1 className="display-serif mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">Have a question worth exploring?</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">I&apos;m always happy to talk about biomedical optics, product design, research tools, or interesting problems at the intersection.</p>
          <Link href="mailto:hello@mingyiliu.com" className="soft-link mt-10 inline-block text-xl font-medium">hello@mingyiliu.com ↗</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
