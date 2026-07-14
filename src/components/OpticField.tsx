export function OpticField() {
  return (
    <div
      className="fine-grid relative min-h-[470px] overflow-hidden border border-[var(--line)] bg-[var(--paper)] sm:min-h-[560px]"
      role="img"
      aria-label="A precise optical research diagram representing laser, lens, sample, and evidence"
    >
      <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--paper)]/90 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--muted)]">
        <span>Current practice / 01</span>
        <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[var(--accent)]" /> Research active</span>
      </div>

      <div className="absolute left-6 top-24 sm:left-9">
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--accent)]">Doctoral research</p>
        <p className="mt-2 max-w-[15rem] text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">Biomedical optics &amp; laser systems</p>
      </div>

      <div className="absolute inset-x-0 top-[54%] h-px bg-[var(--foreground)]/20" />
      <div className="research-beam absolute left-0 top-[calc(54%_-_1px)] h-[2px] w-[67%] bg-[var(--accent)] shadow-[0_0_9px_rgba(168,68,52,0.5)]" />

      <div className="absolute left-[44%] top-[37%] h-[34%] w-9 rounded-[50%] border border-[var(--signal)] bg-[rgba(49,93,120,0.07)]">
        <div className="absolute inset-y-3 left-1/2 w-px bg-[var(--signal)]/40" />
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--signal)]">Lens</span>
      </div>

      <div className="absolute right-[18%] top-[42%] h-28 w-6 border-x border-[var(--foreground)]/45 bg-[var(--panel)]">
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--muted)]">Sample</span>
        <div className="research-scan absolute left-1/2 top-1/2 h-14 w-px -translate-y-1/2 bg-[var(--accent)]/70" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-[var(--line)] bg-[var(--paper)]">
        {[
          ["Question", "What matters?"],
          ["Experiment", "What is true?"],
          ["Evidence", "What holds?"],
        ].map(([label, value], index) => (
          <div key={label} className="border-r border-[var(--line)] p-4 last:border-0 sm:p-5">
            <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--muted)]">0{index + 1} / {label}</p>
            <p className="mt-2 text-[11px] font-medium sm:text-xs">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
