import { SiteHeader } from "@/components/SiteHeader";
import { featuredWork } from "@/data/site";

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
          Work
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight">
          Product and research stories, written as case studies.
        </h1>
        <div className="mt-10 grid gap-5">
          {featuredWork.map((item) => (
            <article key={item.title} className="border border-[var(--line)] bg-[var(--panel)] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {item.type} / {item.year}
              </p>
              <h2 className="mt-4 text-3xl font-semibold">{item.title}</h2>
              <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
