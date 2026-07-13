export function OpticField() {
  return (
    <div className="relative min-h-[360px] overflow-hidden border-y border-[var(--foreground)] bg-[var(--deep)] text-white">
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute left-[-12%] top-1/2 h-2 w-[128%] -translate-y-1/2 rotate-[-12deg] bg-[#f7d354] shadow-[0_0_40px_rgba(247,211,84,0.72)]" />
      <div className="absolute right-[16%] top-[16%] h-[70%] w-10 rounded-[50%] border border-[#7ed7c1] bg-[#7ed7c1]/20 shadow-[0_0_36px_rgba(126,215,193,0.38)]" />
      <div className="absolute bottom-[12%] left-[9%] h-24 w-24 border border-[#e44d26] bg-[#e44d26]/15" />
      <div className="absolute right-[8%] top-[54%] h-32 w-32 border border-white/60" />
      <div className="relative z-10 flex min-h-[360px] items-end justify-between gap-8 p-6 sm:p-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7ed7c1]">
            Product / Research / Build
          </p>
          <p className="mt-4 max-w-sm text-3xl font-semibold leading-tight">
            A practical system for serious work and strange ideas.
          </p>
        </div>
        <div className="hidden max-w-[210px] border border-white/40 p-4 font-mono text-xs leading-6 text-white/75 md:block">
          SIGNAL: useful tools
          <br />
          MEDIUM: web, optics, AI
          <br />
          MODE: build in public
        </div>
      </div>
    </div>
  );
}
