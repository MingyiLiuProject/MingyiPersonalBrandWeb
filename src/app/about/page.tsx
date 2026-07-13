import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
          About
        </p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight">
          A path through product, mobility, optics, and biomedical engineering.
        </h1>
        <div className="mt-10 space-y-6 text-lg leading-8 text-[var(--muted)]">
          <p>
            I am Mingyi Liu. My work moves between product management, intelligent
            mobility, biomedical laser research, and the small tools that make
            complex work easier to do.
          </p>
          <p>
            This site is designed to grow beyond a resume: it will hold case
            studies, research notes, product prototypes, and eventually usable web
            tools.
          </p>
        </div>
      </section>
    </main>
  );
}
