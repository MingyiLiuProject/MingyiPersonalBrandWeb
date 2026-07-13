import { SiteHeader } from "@/components/SiteHeader";
import { buildItems } from "@/data/site";

export default function BuildPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-[var(--signal)]">
          Build
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight">
          Future products and practical tools will live here.
        </h1>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {buildItems.map((item) => (
            <article key={item.title} className="border border-[var(--line)] bg-[var(--panel)] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                {item.status}
              </p>
              <h2 className="mt-5 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
