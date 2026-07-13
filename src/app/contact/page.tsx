import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-[var(--signal)]">
          Contact
        </p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight">
          For collaborations, product ideas, research conversations, or useful
          experiments.
        </h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="mailto:hello@mingyiliu.com"
            className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:bg-[var(--accent)]"
          >
            Email Mingyi
          </Link>
          <Link
            href="/build"
            className="rounded-full border border-[var(--foreground)] px-5 py-3 text-sm font-medium"
          >
            Explore build lab
          </Link>
        </div>
      </section>
    </main>
  );
}
