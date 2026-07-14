export function OpticField() {
  return (
    <div
      className="hairline-grid relative min-h-[440px] overflow-hidden rounded-[1.75rem] bg-[var(--deep)] text-white shadow-[0_28px_80px_rgba(16,35,29,0.18)] sm:min-h-[520px]"
      role="img"
      aria-label="Abstract optical experiment with a laser beam, lens, and moving signals"
    >
      <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
        <span className="size-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
        Live optical field
      </div>

      <div className="absolute right-6 top-6 font-mono text-[10px] text-white/35">λ / 532 NM</div>

      <div className="absolute left-[-8%] top-[41%] h-px w-[70%] rotate-[8deg] bg-[var(--accent)] optic-beam" />
      <div className="absolute left-[50%] top-[48%] h-px w-[62%] -rotate-[13deg] bg-[var(--accent)] optic-beam" />

      <div className="optic-float absolute left-[45%] top-[25%] h-[48%] w-11 rounded-[50%] border border-[var(--accent)] bg-[var(--accent)]/10 shadow-[0_0_45px_rgba(200,241,105,0.2)]">
        <div className="absolute inset-y-4 left-1/2 w-px bg-[var(--accent)]/45" />
      </div>

      <div className="optic-orbit absolute -right-20 top-[21%] size-64 rounded-full border border-white/15 sm:-right-12 sm:size-80">
        <span className="absolute left-1/2 top-[-4px] size-2 rounded-full bg-[var(--blue)] shadow-[0_0_16px_var(--blue)]" />
        <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />
      </div>

      <div className="absolute bottom-28 left-7 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/60 sm:left-9">
        Input: complex systems
      </div>
      <div className="absolute bottom-28 right-7 rounded-full bg-[var(--accent)] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--deep)] sm:right-9">
        Output: clarity
      </div>

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-white/10 bg-black/10">
        {[
          ["01", "Observe"],
          ["02", "Frame"],
          ["03", "Build"],
        ].map(([index, label]) => (
          <div key={index} className="border-r border-white/10 p-4 last:border-0 sm:p-5">
            <p className="font-mono text-[9px] text-[var(--accent)]">{index}</p>
            <p className="mt-1 text-xs font-medium text-white/80 sm:text-sm">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
