"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type RiskLevel = "low" | "medium" | "high";

type RiskResult = {
  id: string;
  name: string;
  category: string;
  level: RiskLevel;
  score: number;
  verdict: string;
  summary: string;
  context: string;
  why: string[];
  actions: string[];
  avoid: string[];
  keywords: string[];
};

const RESULTS: RiskResult[] = [
  {
    id: "pp",
    name: "聚丙烯（PP）",
    category: "塑料 · 食品接触",
    level: "low",
    score: 14,
    verdict: "正常使用下，风险较低",
    summary: "PP 是常见的食品级塑料。是否能加热，仍应以容器上的耐温标识和微波炉标识为准。",
    context: "完整、合规的 PP 容器，用于盛放常温或热食",
    why: ["材料本身化学稳定性较好", "许多食品容器会使用 PP", "实际风险更取决于温度、老化与产品质量"],
    actions: ["认准 PP / 5 号标识", "加热前确认微波炉适用标识", "出现变形、裂纹或异味时更换"],
    avoid: ["不要把一次性容器反复高温使用", "不要用来源不明的塑料盛装热油"],
    keywords: ["pp", "聚丙烯", "5号塑料", "塑料饭盒"],
  },
  {
    id: "bpa",
    name: "双酚 A（BPA）",
    category: "化学成分 · 塑料",
    level: "medium",
    score: 58,
    verdict: "值得留意，但不必恐慌",
    summary: "BPA 的暴露风险与剂量、接触方式和使用温度有关。婴幼儿用品与高温食品接触场景更值得谨慎。",
    context: "日常塑料制品或罐头内涂层中的潜在接触",
    why: ["可能从部分材料迁移到食品中", "高温、磨损会改变迁移水平", "不同地区对食品接触材料有具体限量"],
    actions: ["优先选择明确标注 BPA-free 的婴幼儿用品", "减少破损塑料与高温食品的长时间接触", "按产品标识使用"],
    avoid: ["不要仅凭“无 BPA”判断整个产品绝对安全", "不要把风险等同于一次接触就会中毒"],
    keywords: ["bpa", "双酚a", "双酚 a", "双酚"],
  },
  {
    id: "bleach",
    name: "84 消毒液",
    category: "清洁剂 · 含氯消毒",
    level: "medium",
    score: 64,
    verdict: "正确使用有效，误用会有危险",
    summary: "按标签稀释和通风使用通常可控。主要风险来自误食、刺激，以及与其他清洁剂混用。",
    context: "家庭环境中的表面消毒",
    why: ["有效成分具有刺激性", "浓度和接触时间影响风险", "与酸性产品混合可能释放危险气体"],
    actions: ["开窗通风并按说明稀释", "佩戴手套，使用后清水冲洗接触面", "放在儿童接触不到的位置"],
    avoid: ["绝不与洁厕灵、醋或其他酸性清洁剂混用", "不要用于人体或食物消毒"],
    keywords: ["84", "84消毒液", "消毒液", "次氯酸钠", "漂白水"],
  },
  {
    id: "alcohol",
    name: "医用酒精",
    category: "消毒剂 · 易燃液体",
    level: "medium",
    score: 42,
    verdict: "毒性不高，火灾风险更需注意",
    summary: "用于小范围皮肤或物体表面消毒时风险通常可控，但大量喷洒会增加吸入和燃烧风险。",
    context: "家庭使用 75% 左右酒精进行局部消毒",
    why: ["酒精挥发快且高度易燃", "密闭空间大量使用会增加蒸气浓度", "误食对儿童尤其危险"],
    actions: ["少量擦拭，保持通风", "远离明火、电火花和高温表面", "密闭保存并标注清楚"],
    avoid: ["不要对空气或全身大量喷洒", "未完全挥发前不要靠近火源"],
    keywords: ["酒精", "乙醇", "75%", "75度酒精", "医用酒精"],
  },
  {
    id: "formaldehyde",
    name: "甲醛",
    category: "挥发物 · 室内空气",
    level: "high",
    score: 86,
    verdict: "明确有害，需要控制暴露",
    summary: "甲醛会刺激眼睛和呼吸道。新装修环境中的实际风险，应通过可靠检测与持续通风来判断。",
    context: "室内装修、板材或家具释放",
    why: ["吸入是室内环境中的主要暴露途径", "浓度和暴露时长共同决定风险", "气味不能可靠判断是否达标"],
    actions: ["持续源头控制与有效通风", "需要检测时选择规范方法和机构", "出现明显不适时离开环境并就医"],
    avoid: ["不要依靠绿植或香味掩盖问题", "不要用网红试纸替代规范评估"],
    keywords: ["甲醛", "新房", "装修味", "板材"],
  },
  {
    id: "stainless",
    name: "304 不锈钢",
    category: "金属 · 食品接触",
    level: "low",
    score: 10,
    verdict: "合规产品正常使用，风险较低",
    summary: "304 不锈钢广泛用于食品接触。购买渠道、表面状态与具体使用方式，比“听起来含有金属”更重要。",
    context: "餐具、水杯与厨具的日常使用",
    why: ["耐腐蚀性通常较好", "合规食品接触产品有相应迁移要求", "长期接触强酸强碱会增加腐蚀可能"],
    actions: ["选择正规渠道和明确用途的产品", "清洗后保持干燥", "严重锈蚀或表面破损时更换"],
    avoid: ["不要长期存放强酸或强碱液体", "不要仅凭磁铁吸不吸判断真假"],
    keywords: ["304", "不锈钢", "保温杯", "不锈钢锅"],
  },
];

const MIXED_BLEACH: RiskResult = {
  id: "bleach-mix",
  name: "84 消毒液 + 酸性清洁剂",
  category: "危险混用 · 立即停止",
  level: "high",
  score: 96,
  verdict: "有危险：可能释放有毒气体",
  summary: "不要把含氯消毒液与洁厕灵、醋等酸性产品混合。如果已经混用，应立即离开并加强通风，避免继续吸入。",
  context: "含氯消毒液与酸性清洁剂混合",
  why: ["混合后可能释放氯气", "在浴室等小空间中更容易快速累积", "可造成眼睛、呼吸道和肺部损伤"],
  actions: ["立即离开现场，到空气新鲜处", "在确保自身安全的前提下远距离通风", "若咳嗽、胸闷或呼吸困难，立即联系急救/毒物咨询"],
  avoid: ["不要返回现场继续清洁", "不要加入其他化学品试图中和"],
  keywords: [],
};

const LEVEL_META = {
  low: { label: "低风险", dot: "bg-[#65a663]", tint: "bg-[#eef8e9]", text: "text-[#2e6b36]", bar: "bg-[#65a663]" },
  medium: { label: "需留意", dot: "bg-[#f3a72f]", tint: "bg-[#fff5df]", text: "text-[#9a5a00]", bar: "bg-[#f3a72f]" },
  high: { label: "高风险", dot: "bg-[#ee5a4f]", tint: "bg-[#fff0ed]", text: "text-[#a72f29]", bar: "bg-[#ee5a4f]" },
};

const QUICK_QUERIES = ["84消毒液和洁厕灵混用", "塑料饭盒 PP", "双酚A", "医用酒精", "甲醛", "304不锈钢"];

function findResult(input: string) {
  const normalized = input.toLowerCase().replace(/\s+/g, "");
  const hasBleach = /84|次氯酸钠|漂白水|含氯/.test(normalized);
  const hasAcid = /洁厕|醋|酸性|盐酸/.test(normalized);

  if (hasBleach && hasAcid) return MIXED_BLEACH;
  return RESULTS.find((item) => item.keywords.some((keyword) => normalized.includes(keyword.toLowerCase().replace(/\s+/g, "")))) ?? null;
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h13M13 7l5 5-5 5" />
    </svg>
  );
}

export function YouduApp() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [result, setResult] = useState<RiskResult | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [recent, setRecent] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const meta = useMemo(() => (result ? LEVEL_META[result.level] : null), [result]);

  function analyze(value: string) {
    const cleaned = value.trim();
    if (!cleaned) return;
    setQuery(cleaned);
    setSubmittedQuery(cleaned);
    setResult(findResult(cleaned));
    setHasSearched(true);
    setCopied(false);
    setRecent((items) => [cleaned, ...items.filter((item) => item !== cleaned)].slice(0, 4));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    analyze(query);
  }

  async function copyResult() {
    if (!result) return;
    const text = `Toxic to Furry Friends?｜${result.name}\n${result.verdict}\n${result.summary}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f8f3] text-[#181a17]">
      <header className="border-b border-black/[0.07] bg-[#f7f8f3]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 w-[min(100%-2rem,72rem)] items-center justify-between gap-4">
          <Link href="/youdu" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Toxic to Furry Friends? 首页">
            <span className="grid size-10 place-items-center rounded-[13px] bg-[#d8ff63] text-sm font-black tracking-[-0.08em] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]">毒?</span>
            <span className="max-w-36 text-sm font-bold leading-4 tracking-[-0.035em] sm:max-w-none sm:text-base">Toxic to Furry Friends?</span>
            <span className="hidden rounded-full border border-black/10 px-2 py-0.5 text-[10px] font-semibold text-black/45 lg:inline">BETA</span>
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <span className="hidden text-black/45 sm:inline">日常风险查询工具</span>
            <Link href="/" className="rounded-full border border-black/10 bg-white px-4 py-2 font-medium transition hover:border-black/20 hover:bg-[#d8ff63]">返回 Mingyi ↗</Link>
          </div>
        </div>
      </header>

      <section className="youdu-hero overflow-hidden border-b border-black/[0.07]">
        <div className="mx-auto w-[min(100%-2rem,72rem)] pb-14 pt-14 sm:pb-20 sm:pt-20">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-black/45 uppercase">
              <span className="size-2 rounded-full bg-[#89c95b] shadow-[0_0_0_5px_rgba(137,201,91,0.14)]" />
              先理解，再担心
            </p>
            <h1 className="text-balance text-[clamp(2.8rem,7vw,5.8rem)] font-black leading-[0.98] tracking-[-0.075em]">
              这个东西，<br /><span className="relative z-0 inline-block"><span className="relative z-10">有毒吗？</span><span className="absolute inset-x-[-0.08em] bottom-[0.05em] -z-10 h-[0.34em] -rotate-1 rounded-sm bg-[#d8ff63]" /></span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
              输入一种成分、材料，或直接描述使用场景。我们把复杂的风险，翻译成看得懂、能行动的答案。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-9 max-w-3xl">
            <label htmlFor="risk-search" className="sr-only">输入要查询的成分、材料或使用场景</label>
            <div className="flex items-center gap-2 rounded-[1.4rem] border border-black/15 bg-white p-2.5 shadow-[0_18px_50px_rgba(35,43,26,0.09)] focus-within:border-black/35 focus-within:ring-4 focus-within:ring-[#d8ff63]/35 sm:p-3">
              <span className="ml-2 text-black/35"><SearchIcon /></span>
              <input
                id="risk-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="例如：84 消毒液能和洁厕灵一起用吗？"
                className="min-w-0 flex-1 bg-transparent px-1 py-3 text-base tracking-[-0.02em] outline-none placeholder:text-black/30 sm:text-lg"
                autoComplete="off"
              />
              <button type="submit" className="flex h-12 shrink-0 items-center gap-2 rounded-2xl bg-[#1d211b] px-4 font-semibold text-white transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:px-6">
                <span className="hidden sm:inline">帮我看看</span><ArrowIcon />
              </button>
            </div>
          </form>

          <div className="mt-5 flex max-w-4xl flex-wrap items-center gap-2">
            <span className="mr-1 text-xs text-black/38">大家在查</span>
            {QUICK_QUERIES.slice(0, 4).map((item) => (
              <button key={item} type="button" onClick={() => analyze(item)} className="rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs text-black/60 transition hover:border-black/20 hover:bg-white hover:text-black">
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,72rem)] py-12 sm:py-16" aria-live="polite">
        {!hasSearched && (
          <div>
            <div className="flex items-end justify-between gap-4">
              <div><p className="text-xs font-semibold tracking-[0.1em] text-black/38 uppercase">Start here</p><h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">从常见问题开始</h2></div>
              <span className="hidden text-sm text-black/38 sm:block">点击即可查看示例结果</span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {QUICK_QUERIES.map((item, index) => (
                <button key={item} type="button" onClick={() => analyze(item)} className="group flex min-h-28 items-end justify-between rounded-2xl border border-black/[0.08] bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[0_12px_30px_rgba(35,43,26,0.07)]">
                  <span><span className="mb-3 block text-xs text-black/30">0{index + 1}</span><span className="font-semibold tracking-[-0.025em]">{item}</span></span>
                  <span className="grid size-8 place-items-center rounded-full bg-[#f3f4ed] transition group-hover:bg-[#d8ff63]">↗</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {hasSearched && !result && (
          <div className="rounded-[1.75rem] border border-black/[0.08] bg-white p-6 shadow-[0_16px_50px_rgba(35,43,26,0.05)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
              <div>
                <span className="inline-flex rounded-full bg-[#edf0e7] px-3 py-1.5 text-xs font-semibold text-black/55">需要更多信息</span>
                <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">“{submittedQuery}” 暂未收录</h2>
                <p className="mt-4 max-w-2xl leading-7 text-black/55">仅凭名称还无法可靠判断。产品配方、浓度、接触方式和使用时长，都会改变答案。你可以换成成分名，或把使用场景描述得更具体。</p>
              </div>
              <div className="rounded-2xl bg-[#f5f6f1] p-5 text-sm leading-6 text-black/55">
                <p className="font-semibold text-black">可以这样问</p>
                <p className="mt-2">“这个成分碰到皮肤有问题吗？”<br />“加热到 100°C 还能用吗？”</p>
              </div>
            </div>
            <button type="button" onClick={() => document.getElementById("risk-search")?.focus()} className="mt-7 rounded-xl bg-[#1d211b] px-5 py-3 text-sm font-semibold text-white">补充问题</button>
          </div>
        )}

        {result && meta && (
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
            <article className="overflow-hidden rounded-[1.75rem] border border-black/[0.08] bg-white shadow-[0_16px_50px_rgba(35,43,26,0.06)]">
              <div className="p-6 sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.11em] text-black/35 uppercase">{result.category}</p>
                    <h2 className="mt-2 text-3xl font-black tracking-[-0.055em] sm:text-5xl">{result.name}</h2>
                  </div>
                  <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold ${meta.tint} ${meta.text}`}><span className={`size-2 rounded-full ${meta.dot}`} />{meta.label}</span>
                </div>

                <div className={`mt-8 rounded-2xl p-5 sm:p-6 ${meta.tint}`}>
                  <p className={`text-sm font-bold ${meta.text}`}>一句话结论</p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] sm:text-3xl">{result.verdict}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">{result.summary}</p>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between text-xs"><span className="font-semibold text-black/45">综合风险提示</span><span className="font-bold">{result.score}<span className="font-normal text-black/35"> / 100</span></span></div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/[0.06]"><div className={`h-full rounded-full transition-[width] duration-700 ${meta.bar}`} style={{ width: `${result.score}%` }} /></div>
                  <p className="mt-2 text-xs text-black/35">当前判断场景：{result.context}</p>
                </div>

                <div className="mt-9 grid gap-8 border-t border-black/[0.08] pt-8 sm:grid-cols-2">
                  <div>
                    <h3 className="flex items-center gap-2 font-bold"><span className="grid size-6 place-items-center rounded-full bg-[#eef8e9] text-xs text-[#39733e]">✓</span>建议这样做</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-black/58">{result.actions.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#6cad64]" />{item}</li>)}</ul>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 font-bold"><span className="grid size-6 place-items-center rounded-full bg-[#fff0ed] text-xs text-[#b43a32]">!</span>不要这样做</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-black/58">{result.avoid.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#ed6c61]" />{item}</li>)}</ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.07] bg-[#fafbf7] px-6 py-4 sm:px-9">
                <p className="text-xs text-black/38">结果用于风险沟通，不替代检测、诊断或急救建议。</p>
                <button type="button" onClick={copyResult} className="rounded-full border border-black/10 bg-white px-3.5 py-2 text-xs font-semibold transition hover:border-black/25">{copied ? "已复制 ✓" : "复制结论"}</button>
              </div>
            </article>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-black/[0.08] bg-[#20231f] p-6 text-white">
                <p className="text-xs font-semibold tracking-[0.11em] text-white/35 uppercase">为什么这样判断</p>
                <ol className="mt-5 space-y-5">{result.why.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/68"><span className="font-mono text-[#d8ff63]">0{index + 1}</span>{item}</li>)}</ol>
              </div>
              {recent.length > 1 && (
                <div className="rounded-2xl border border-black/[0.08] bg-white p-5">
                  <p className="text-xs font-semibold tracking-[0.1em] text-black/35 uppercase">最近查询</p>
                  <div className="mt-3 divide-y divide-black/[0.06]">{recent.slice(1).map((item) => <button key={item} type="button" onClick={() => analyze(item)} className="flex w-full items-center justify-between py-3 text-left text-sm hover:text-[#618d27]"><span>{item}</span><span>↗</span></button>)}</div>
                </div>
              )}
            </aside>
          </div>
        )}
      </section>

      <footer className="border-t border-black/[0.07] bg-white/45">
        <div className="mx-auto flex w-[min(100%-2rem,72rem)] flex-col gap-4 py-8 text-xs text-black/38 sm:flex-row sm:items-center sm:justify-between">
          <p>Toxic to Furry Friends? · Make risk understandable.</p>
          <p>如已发生误食、吸入或明显不适，请立即联系当地急救或毒物咨询中心。</p>
        </div>
      </footer>
    </main>
  );
}
