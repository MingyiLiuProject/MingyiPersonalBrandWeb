/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";

type PetType = "cat" | "dog" | "horse";
type AppTab = "explore" | "favorites" | "safety";

type PlantImageData = {
  thumbnailURL: string;
  pageURL: string;
  author: string;
  license: string;
  licenseURL: string;
  needsReview: boolean;
};

type Plant = {
  id: string;
  chineseName: string;
  chineseAliases: string[];
  englishName: string;
  scientificName: string;
  acceptedScientificName: string;
  family: string;
  aliases: string[];
  pinyin: string[];
  nameNeedsReview: boolean;
  toxicTo: PetType[];
  nonToxicTo: PetType[];
  toxicPrinciples: string;
  clinicalSigns: string;
  sourceURL: string;
  image?: PlantImageData;
};

const PETS: Array<{ id: PetType; title: string; emoji: string }> = [
  { id: "cat", title: "猫", emoji: "🐱" },
  { id: "dog", title: "狗", emoji: "🐶" },
  { id: "horse", title: "马", emoji: "🐴" },
];

const REVIEWED: Record<string, Partial<Plant>> = {
  lily: { chineseName: "百合", englishName: "Lily", scientificName: "Lilium species", family: "Liliaceae", aliases: ["真百合", "亚洲百合", "Asiatic Lily"], toxicPrinciples: "ASPCA 将毒性成分列为未知。", clinicalSigns: "猫可能出现呕吐、食欲下降、嗜睡和肾衰竭。花、叶、花粉以及花瓶水都应视为潜在暴露来源。" },
  "sago-palm": { chineseName: "苏铁", englishName: "Sago Palm", scientificName: "Cycas revoluta", family: "Cycadaceae", aliases: ["铁树", "凤尾蕉", "Japanese Sago Palm"], toxicPrinciples: "苏铁苷（Cycasin）。整株有毒，种子中的毒素浓度尤其高。", clinicalSigns: "可能出现呕吐、血便、黄疸、凝血异常、肝损伤、肝衰竭，严重时可致死。" },
  aloe: { chineseName: "芦荟", englishName: "Aloe", scientificName: "Aloe vera", family: "Liliaceae", aliases: ["Aloe Vera", "真芦荟"], toxicPrinciples: "皂苷、蒽醌类；透明凝胶与外层乳汁的风险不同。", clinicalSigns: "可能出现呕吐（马除外）、嗜睡和腹泻。" },
  azalea: { chineseName: "杜鹃花", englishName: "Azalea", scientificName: "Rhododendron species", family: "Ericaceae", aliases: ["映山红", "Rhododendron"], toxicPrinciples: "灰安毒素（Grayanotoxins）。", clinicalSigns: "常见为流涎、呕吐或腹泻、虚弱；摄入量较大时可能出现心律异常、低血压、震颤或癫痫。" },
  tulip: { chineseName: "郁金香", englishName: "Tulip", scientificName: "Tulipa species", family: "Liliaceae", aliases: ["Tulipa"], toxicPrinciples: "郁金香苷 A、B；球茎中的浓度最高。", clinicalSigns: "可能出现流涎、呕吐、腹泻和口腔刺激；吞下较大球茎还可能造成消化道梗阻。" },
  pothos: { chineseName: "绿萝", englishName: "Pothos", scientificName: "Epipremnum aureum", family: "Araceae", aliases: ["黄金葛", "Devil's Ivy", "Golden Pothos"], toxicPrinciples: "不溶性草酸钙晶体。", clinicalSigns: "咀嚼后可能引起口腔疼痛和刺激、流涎、干呕、呕吐或吞咽困难。" },
  "peace-lily": { chineseName: "白鹤芋", englishName: "Peace Lily", scientificName: "Spathiphyllum species", family: "Araceae", aliases: ["和平百合", "白掌", "Spathiphyllum"], toxicPrinciples: "不溶性草酸钙晶体。它不属于会导致猫急性肾损伤的真百合属。", clinicalSigns: "可能出现口腔刺激、流涎、口腔疼痛、呕吐和胃肠不适。" },
  monstera: { chineseName: "龟背竹", englishName: "Monstera", scientificName: "Monstera deliciosa", family: "Araceae", aliases: ["Swiss Cheese Plant", "蓬莱蕉"], toxicPrinciples: "不溶性草酸钙晶体。", clinicalSigns: "可能出现口腔刺激、舌唇灼痛、流涎、呕吐或吞咽困难。" },
  "snake-plant": { chineseName: "虎尾兰", englishName: "Snake Plant", scientificName: "Dracaena trifasciata", family: "Asparagaceae", aliases: ["虎皮兰", "Mother-in-Law's Tongue", "Sansevieria trifasciata"], toxicPrinciples: "皂苷。", clinicalSigns: "猫或狗摄入后可能出现呕吐、腹泻、流涎和嗜睡。" },
  oleander: { chineseName: "夹竹桃", englishName: "Oleander", scientificName: "Nerium oleander", family: "Apocynaceae", aliases: ["Nerium"], toxicPrinciples: "强心苷。", clinicalSigns: "可能出现流涎、腹痛、腹泻、抑郁及心律异常，严重时可能致死。" },
  hydrangea: { chineseName: "绣球花", englishName: "Hydrangea", scientificName: "Hydrangea arborescens", family: "Hydrangeaceae", aliases: ["八仙花", "Hydrangea"], toxicPrinciples: "氰苷。", clinicalSigns: "猫狗摄入后更常见的是呕吐、腹泻等胃肠道症状；仍应联系兽医评估。" },
  "jade-plant": { chineseName: "玉树", englishName: "Jade Plant", scientificName: "Crassula ovata", family: "Crassulaceae", aliases: ["燕子掌", "Money Plant", "Lucky Plant"], toxicPrinciples: "ASPCA 将毒性成分列为未知。", clinicalSigns: "可能出现呕吐、腹泻、嗜睡、步态不稳或肌肉震颤。" },
};

const TABS: Array<{ id: AppTab; label: string; icon: string }> = [
  { id: "explore", label: "查询", icon: "⌕" },
  { id: "favorites", label: "收藏", icon: "♡" },
  { id: "safety", label: "应急", icon: "+" },
];

function mergeReviewed(plant: Plant): Plant {
  const reviewed = REVIEWED[plant.id];
  if (!reviewed) return plant;
  return {
    ...plant,
    ...reviewed,
    acceptedScientificName: plant.acceptedScientificName,
    chineseAliases: plant.chineseAliases,
    aliases: Array.from(new Set([...plant.aliases, ...(reviewed.aliases ?? [])])),
    pinyin: plant.pinyin,
    toxicTo: plant.toxicTo,
    nonToxicTo: plant.nonToxicTo,
    sourceURL: plant.sourceURL,
    image: plant.image,
    nameNeedsReview: false,
  };
}

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ü/g, "v")
    .replace(/[^a-z0-9\u3400-\u9fff]/g, "");
}

function levenshtein(a: string, b: string) {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let left = 0; left < a.length; left += 1) {
    const current = [left + 1];
    for (let right = 0; right < b.length; right += 1) {
      current.push(Math.min(current[right] + 1, previous[right + 1] + 1, previous[right] + (a[left] === b[right] ? 0 : 1)));
    }
    previous.splice(0, previous.length, ...current);
  }
  return previous[b.length];
}

function scorePlant(query: string, terms: string[]) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return 0;
  let best = -1;
  for (const term of terms) {
    if (term === normalizedQuery) best = Math.max(best, 1000);
    else if (term.startsWith(normalizedQuery)) best = Math.max(best, 900);
    else if (term.includes(normalizedQuery)) best = Math.max(best, 750);
    else if (normalizedQuery.length >= 4 && Math.abs(term.length - normalizedQuery.length) <= 2) {
      const distance = levenshtein(normalizedQuery, term);
      if (distance <= 2) best = Math.max(best, 600 - distance * 60);
    }
  }
  return best;
}

function plantTerms(plant: Plant) {
  return Array.from(new Set([
    plant.chineseName,
    plant.englishName,
    plant.scientificName,
    plant.acceptedScientificName,
    plant.family,
    ...plant.chineseAliases,
    ...plant.aliases,
    ...plant.pinyin,
  ].map(normalize).filter(Boolean)));
}

function PlantPhoto({ plant, className = "" }: { plant: Plant; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (!plant.image?.thumbnailURL || failed) {
    return <div className={`grid place-items-center bg-[#dce6d2] text-3xl ${className}`} aria-label={`${plant.chineseName}图片暂不可用`}>🌿</div>;
  }
  return (
    <img
      src={plant.image.thumbnailURL}
      alt={`${plant.chineseName}植物照片`}
      className={`object-cover ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

function EmergencyCard() {
  return (
    <section className="rounded-[1.35rem] border border-[#c7382e]/20 bg-[#c7382e]/[0.08] p-5 text-[#9f2d26]">
      <h3 className="flex items-center gap-2 text-lg font-black tracking-[-0.03em]"><span className="grid size-8 place-items-center rounded-full bg-white">+</span>疑似误食？</h3>
      <p className="mt-3 text-sm leading-6">不要自行催吐。记录植物名称、摄入时间和大致数量，拍照并立即联系当地兽医。</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a href="tel:145" className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold">瑞士中毒急救 145</a>
        <a href="tel:+18884264435" className="rounded-xl border border-[#c7382e]/20 px-4 py-3 text-center text-sm font-bold">ASPCA +1 888 426 4435</a>
      </div>
      <p className="mt-3 text-[11px] leading-5 opacity-70">咨询可能收费；危急情况优先联系就近急诊兽医。</p>
    </section>
  );
}

function PlantCard({ plant, favorite, onOpen, onFavorite }: { plant: Plant; favorite: boolean; onOpen: () => void; onFavorite: () => void }) {
  return (
    <article className="group relative flex min-h-32 overflow-hidden rounded-[1.35rem] border border-[#1f4f3d]/[0.08] bg-[#fffdf5] shadow-[0_10px_30px_rgba(31,79,61,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(31,79,61,0.09)]">
      <button type="button" onClick={onOpen} className="flex min-w-0 flex-1 items-center gap-4 p-3.5 text-left sm:p-4">
        <PlantPhoto plant={plant} className="size-24 shrink-0 rounded-2xl sm:size-28" />
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-black tracking-[-0.035em] text-[#1f4f3d]">{plant.chineseName}</span>
          <span className="mt-1 block text-sm text-black/55">{plant.englishName}</span>
          <span className="mt-1 block truncate text-xs italic text-black/35">{plant.acceptedScientificName}</span>
          <span className="mt-3 inline-flex rounded-full bg-[#f0f1e7] px-2.5 py-1 text-xs font-medium text-[#1f4f3d]">
            {plant.toxicTo.length ? `有毒：${plant.toxicTo.map((pet) => PETS.find((item) => item.id === pet)?.emoji).join("")}` : "ASPCA 列为无毒"}
          </span>
        </span>
        <span className="mr-1 text-[#1f4f3d]/35 transition group-hover:translate-x-1">→</span>
      </button>
      <button type="button" onClick={onFavorite} aria-label={favorite ? `取消收藏${plant.chineseName}` : `收藏${plant.chineseName}`} className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-lg text-[#1f4f3d] shadow-sm backdrop-blur">
        {favorite ? "♥" : "♡"}
      </button>
    </article>
  );
}

function SafetyContent() {
  const sections = [
    { title: "联系前准备", items: ["宠物的种类、体重和年龄", "植物照片、名称或剩余样本", "可能摄入的部位和最大数量", "发生时间与已经出现的症状"] },
    { title: "重要提醒", items: ["不要等待症状出现后才求助", "不要自行催吐或强行喂水", "“未列为有毒”不代表适合食用", "同一个俗名可能对应不同物种，尽量核对学名"] },
  ];
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8"><p className="text-xs font-bold tracking-[0.12em] text-[#6b915c] uppercase">Safety first</p><h2 className="mt-2 text-4xl font-black tracking-[-0.055em] text-[#1f4f3d]">应急与说明</h2></div>
      <div className="space-y-4">
        <EmergencyCard />
        {sections.map((section) => (
          <section key={section.title} className="rounded-[1.35rem] border border-[#1f4f3d]/[0.08] bg-[#fffdf5] p-5 sm:p-6">
            <h3 className="font-black text-[#1f4f3d]">{section.title}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">{section.items.map((item) => <li key={item} className="flex gap-2.5 text-sm leading-6 text-black/60"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#6b915c]/15 text-[10px] font-bold text-[#1f4f3d]">✓</span>{item}</li>)}</ul>
          </section>
        ))}
        <section className="rounded-[1.35rem] border border-[#1f4f3d]/[0.08] bg-[#fffdf5] p-5 text-sm leading-6 text-black/55 sm:p-6">
          <h3 className="font-black text-[#1f4f3d]">数据说明</h3>
          <p className="mt-3">数据库 v3 收录 ASPCA 猫、狗、马列表中的植物分类与毒性状态，共 1,023 条记录。临床描述仍在分批专业审核。</p>
          <p className="mt-2 text-xs text-black/35">数据最近核对：2026-07-16</p>
        </section>
      </div>
    </div>
  );
}

function PlantDetail({ plant, favorite, onClose, onFavorite }: { plant: Plant; favorite: boolean; onClose: () => void; onFavorite: () => void }) {
  function status(pet: PetType) {
    if (plant.toxicTo.includes(pet)) return { label: "有毒", tone: "border-[#c7382e]/20 bg-[#c7382e]/[0.08] text-[#a42e27]" };
    if (plant.nonToxicTo.includes(pet)) return { label: "列为无毒", tone: "border-[#6b915c]/20 bg-[#6b915c]/[0.09] text-[#315f45]" };
    return { label: "未列出", tone: "border-black/5 bg-black/[0.04] text-black/45" };
  }
  return (
    <div className="fixed inset-0 z-[100] bg-black/35 p-0 backdrop-blur-sm sm:p-5" role="dialog" aria-modal="true" aria-label={`${plant.chineseName}详情`}>
      <button type="button" onClick={onClose} className="absolute inset-0 cursor-default" aria-label="关闭详情" />
      <article className="relative ml-auto h-full w-full max-w-2xl overflow-y-auto bg-[#f7f5e8] shadow-2xl sm:rounded-[1.75rem]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#1f4f3d]/[0.08] bg-[#f7f5e8]/90 px-4 py-3 backdrop-blur-xl sm:px-6">
          <button type="button" onClick={onClose} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1f4f3d]">← 返回</button>
          <button type="button" onClick={onFavorite} className="grid size-10 place-items-center rounded-full bg-white text-xl text-[#1f4f3d]" aria-label={favorite ? "取消收藏" : "收藏"}>{favorite ? "♥" : "♡"}</button>
        </div>
        <div className="space-y-5 p-4 pb-12 sm:p-7">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <PlantPhoto plant={plant} className="h-72 w-full sm:h-80" />
            {plant.image?.needsReview && <span className="absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1.5 text-xs font-bold text-white">图片待复核</span>}
          </div>
          <header>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-[#1f4f3d]">{plant.chineseName}</h2>
            <p className="mt-2 text-xl font-semibold text-[#6b915c]">{plant.englishName}</p>
            <p className="mt-1 text-sm italic text-black/50">{plant.acceptedScientificName}</p>
            <p className="mt-1 text-xs text-black/35">{plant.family}</p>
            {plant.nameNeedsReview && <p className="mt-3 inline-flex rounded-full bg-[#e89e2e]/10 px-3 py-1.5 text-xs font-bold text-[#a26810]">名称待专业复核</p>}
          </header>

          <section className="rounded-[1.35rem] border border-[#1f4f3d]/[0.08] bg-[#fffdf5] p-5">
            <h3 className="font-black text-[#1f4f3d]">毒性对象</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">{PETS.map((pet) => { const item = status(pet.id); return <div key={pet.id} className={`rounded-2xl border p-3 text-center ${item.tone}`}><p className="text-2xl">{pet.emoji}</p><p className="mt-1 text-xs font-bold">{pet.title}</p><p className="mt-1 text-[11px]">{item.label}</p></div>; })}</div>
            <p className="mt-4 text-xs leading-5 text-black/45">“未列出”不等于可以食用；任何植物材料都可能导致胃肠不适。</p>
          </section>

          <section className="rounded-[1.35rem] border border-[#1f4f3d]/[0.08] bg-[#fffdf5] p-5">
            <h3 className="font-black text-[#1f4f3d]">名称</h3>
            <dl className="mt-4 space-y-3 text-sm">{[
              ["中文俗名", plant.chineseName],
              ...(plant.chineseAliases.length ? [["中文别名", plant.chineseAliases.join("、")]] : []),
              ["英文俗名", plant.englishName],
              ["专业学名", plant.acceptedScientificName],
            ].map(([term, value]) => <div key={term} className="grid grid-cols-[5rem_1fr] gap-3"><dt className="text-xs font-bold text-black/35">{term}</dt><dd className="text-black/65">{value}</dd></div>)}</dl>
          </section>

          {plant.toxicPrinciples || plant.clinicalSigns ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <section className="rounded-[1.35rem] border border-[#1f4f3d]/[0.08] bg-[#fffdf5] p-5"><h3 className="font-black text-[#1f4f3d]">毒性成分</h3><p className="mt-3 text-sm leading-6 text-black/58">{plant.toxicPrinciples || "尚未完成中文专业审核。"}</p></section>
              <section className="rounded-[1.35rem] border border-[#1f4f3d]/[0.08] bg-[#fffdf5] p-5"><h3 className="font-black text-[#1f4f3d]">可能表现</h3><p className="mt-3 text-sm leading-6 text-black/58">{plant.clinicalSigns || "尚未完成中文专业审核。"}</p></section>
            </div>
          ) : <section className="rounded-[1.35rem] border border-[#1f4f3d]/[0.08] bg-[#fffdf5] p-5 text-sm leading-6 text-black/55"><h3 className="font-black text-[#1f4f3d]">详细资料</h3><p className="mt-3">毒性状态与植物分类已收录；毒性成分和临床表现尚未完成中文专业审核，请查看 ASPCA 原始资料。</p></section>}

          <EmergencyCard />

          <section className="rounded-[1.35rem] border border-[#1f4f3d]/[0.08] bg-[#fffdf5] p-5 text-xs leading-5 text-black/45">
            <h3 className="font-black text-[#1f4f3d]">资料来源</h3>
            <a href={plant.sourceURL} target="_blank" rel="noreferrer" className="mt-3 block font-bold text-[#315f45] underline underline-offset-4">查看 ASPCA 原始资料 ↗</a>
            {plant.image && <><a href={plant.image.pageURL} target="_blank" rel="noreferrer" className="mt-2 block font-bold text-[#315f45] underline underline-offset-4">查看 Wikimedia Commons 图片页面 ↗</a><p className="mt-2">图片作者：{plant.image.author} · {plant.image.license}</p></>}
            <p className="mt-4 border-t border-black/[0.07] pt-4">本工具仅供初步风险筛查，不能替代兽医诊断。资料可能不完整，请以兽医意见为准。</p>
          </section>
        </div>
      </article>
    </div>
  );
}

export function YouduApp() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [tab, setTab] = useState<AppTab>("explore");
  const [query, setQuery] = useState("");
  const [pet, setPet] = useState<PetType | null>(null);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(36);

  useEffect(() => {
    fetch("/data/aspca_plants_v1.json")
      .then((response) => { if (!response.ok) throw new Error("data"); return response.json() as Promise<Plant[]>; })
      .then((data) => setPlants(data.map(mergeReviewed)))
      .catch(() => setLoadError(true))
      .finally(() => setLoading(false));
    Promise.resolve().then(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem("favoritePlantIDs") ?? "[]") as string[];
        setFavoriteIds(new Set(saved));
      } catch { setFavoriteIds(new Set()); }
    });
  }, []);

  const indexedPlants = useMemo(() => plants.map((plant) => ({ plant, terms: plantTerms(plant) })), [plants]);
  const results = useMemo(() => {
    const source = tab === "favorites" ? indexedPlants.filter(({ plant }) => favoriteIds.has(plant.id)) : indexedPlants;
    return source
      .filter(({ plant }) => !pet || plant.toxicTo.includes(pet))
      .map(({ plant, terms }) => ({ plant, score: scorePlant(query, terms) }))
      .filter(({ score }) => score >= 0)
      .sort((a, b) => b.score - a.score || a.plant.englishName.localeCompare(b.plant.englishName))
      .map(({ plant }) => plant);
  }, [favoriteIds, indexedPlants, pet, query, tab]);

  function switchTab(nextTab: AppTab) { setTab(nextTab); setQuery(""); setPet(null); setVisibleCount(36); }
  function toggleFavorite(id: string) {
    setFavoriteIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id); else next.add(id);
      window.localStorage.setItem("favoritePlantIDs", JSON.stringify(Array.from(next)));
      return next;
    });
  }

  return (
    <main className="min-h-screen bg-[#f7f5e8] text-[#18271f]">
      <header className="sticky top-0 z-40 border-b border-[#1f4f3d]/[0.08] bg-[#f7f5e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] w-[min(100%-2rem,72rem)] items-center justify-between gap-4">
          <button type="button" onClick={() => switchTab("explore")} className="flex min-w-0 items-center gap-3 text-left">
            <span className="grid size-10 shrink-0 place-items-center rounded-[13px] bg-[#1f4f3d] text-xl">🪴</span>
            <span><span className="block text-sm font-black leading-4 tracking-[-0.03em] text-[#1f4f3d] sm:text-base">Toxic to Furry Friends?</span><span className="hidden text-[10px] text-black/35 sm:block">Pet-safe plant finder</span></span>
          </button>
          <nav className="hidden items-center gap-1 rounded-full bg-white/70 p-1 md:flex" aria-label="产品导航">{TABS.map((item) => <button key={item.id} type="button" onClick={() => switchTab(item.id)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${tab === item.id ? "bg-[#1f4f3d] text-white" : "text-[#1f4f3d]/55 hover:text-[#1f4f3d]"}`}>{item.label}</button>)}</nav>
          <a href="https://www.mingyiliu.com" className="shrink-0 rounded-full border border-[#1f4f3d]/10 bg-white/75 px-3 py-2 text-xs font-bold text-[#1f4f3d] sm:px-4 sm:text-sm">返回 Mingyi ↗</a>
        </div>
      </header>

      {tab === "safety" ? <section className="mx-auto w-[min(100%-2rem,72rem)] pb-28 pt-10 sm:pt-14"><SafetyContent /></section> : (
        <>
          <section className="plant-hero border-b border-[#1f4f3d]/[0.07]">
            <div className="mx-auto w-[min(100%-2rem,72rem)] py-12 text-center sm:py-16">
              <div className="text-5xl" aria-hidden="true">🪴</div>
              <h1 className="mt-3 text-5xl font-black tracking-[-0.07em] text-[#1f4f3d] sm:text-7xl">有毒吗？</h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-black/48 sm:text-base">快速查看常见植物对宠物的潜在风险</p>
              <div className="mx-auto mt-7 flex max-w-2xl items-center gap-3 rounded-[1.15rem] border border-[#1f4f3d]/10 bg-[#fffdf5] px-4 shadow-[0_16px_40px_rgba(31,79,61,0.09)] focus-within:border-[#1f4f3d]/30">
                <span className="text-xl text-[#6b915c]">⌕</span>
                <label htmlFor="plant-search" className="sr-only">搜索植物</label>
                <input id="plant-search" value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(36); }} placeholder="搜索中文、英文、学名或拼音" className="h-14 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-black/28 sm:text-base" autoComplete="off" />
                {query && <button type="button" onClick={() => setQuery("")} className="grid size-8 place-items-center rounded-full bg-black/[0.05] text-black/40" aria-label="清除搜索">×</button>}
              </div>
              <div className="mx-auto mt-4 flex max-w-2xl items-center gap-2 overflow-x-auto pb-1">
                <button type="button" onClick={() => { setPet(null); setVisibleCount(36); }} className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold ${pet === null ? "bg-[#1f4f3d] text-white" : "border border-[#1f4f3d]/10 bg-[#fffdf5] text-[#1f4f3d]"}`}>✨ 全部</button>
                {PETS.map((item) => <button key={item.id} type="button" onClick={() => { setPet(item.id); setVisibleCount(36); }} className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold ${pet === item.id ? "bg-[#1f4f3d] text-white" : "border border-[#1f4f3d]/10 bg-[#fffdf5] text-[#1f4f3d]"}`}>{item.emoji} {item.title}</button>)}
              </div>
            </div>
          </section>

          <section className="mx-auto w-[min(100%-2rem,72rem)] pb-28 pt-8 sm:pt-10">
            <div className="mb-5 flex items-end justify-between gap-3">
              <div><p className="text-xs font-bold tracking-[0.1em] text-[#6b915c] uppercase">{tab === "favorites" ? "My collection" : query ? "Search results" : "Plant library"}</p><h2 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#1f4f3d]">{tab === "favorites" ? "我的收藏" : pet ? `对${PETS.find((item) => item.id === pet)?.title}有毒` : query ? "搜索结果" : "常见植物"}</h2></div>
              <p className="text-xs text-black/38">{results.length.toLocaleString("zh-CN")} 种</p>
            </div>

            {loading ? <div className="grid min-h-72 place-items-center rounded-[1.5rem] bg-[#fffdf5]"><div className="text-center"><span className="text-4xl">🌱</span><p className="mt-3 text-sm text-black/40">正在载入植物数据库…</p></div></div>
              : loadError ? <div className="grid min-h-72 place-items-center rounded-[1.5rem] bg-[#fffdf5] text-center"><div><span className="text-4xl">🍂</span><p className="mt-3 font-bold text-[#1f4f3d]">数据库载入失败</p><button type="button" onClick={() => window.location.reload()} className="mt-4 rounded-full bg-[#1f4f3d] px-4 py-2 text-sm font-bold text-white">重新载入</button></div></div>
              : results.length === 0 ? <div className="grid min-h-72 place-items-center rounded-[1.5rem] bg-[#fffdf5] text-center"><div><span className="text-4xl">🌿</span><p className="mt-3 font-bold text-[#1f4f3d]">{tab === "favorites" && !query ? "还没有收藏" : "没有找到植物"}</p><p className="mt-2 text-sm text-black/40">{tab === "favorites" && !query ? "在植物详情页点击爱心，方便以后快速查看" : "可尝试中文、英文、学名、拼音或更短的关键词"}</p></div></div>
              : <><div className="grid gap-3 lg:grid-cols-2">{results.slice(0, visibleCount).map((plant) => <PlantCard key={plant.id} plant={plant} favorite={favoriteIds.has(plant.id)} onOpen={() => setSelectedPlant(plant)} onFavorite={() => toggleFavorite(plant.id)} />)}</div>{visibleCount < results.length && <div className="mt-7 text-center"><button type="button" onClick={() => setVisibleCount((count) => count + 36)} className="rounded-full border border-[#1f4f3d]/15 bg-[#fffdf5] px-6 py-3 text-sm font-bold text-[#1f4f3d]">加载更多 · 还剩 {(results.length - visibleCount).toLocaleString("zh-CN")} 种</button></div>}</>}
          </section>
        </>
      )}

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-[#1f4f3d]/10 bg-[#fffdf5]/95 px-5 pb-[max(0.7rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden" aria-label="产品导航">
        <div className="mx-auto grid max-w-sm grid-cols-3">{TABS.map((item) => <button key={item.id} type="button" onClick={() => switchTab(item.id)} className={`flex flex-col items-center gap-0.5 rounded-xl py-1 text-[11px] font-bold ${tab === item.id ? "text-[#1f4f3d]" : "text-black/35"}`}><span className={`grid size-7 place-items-center text-lg ${tab === item.id ? "rounded-full bg-[#6b915c]/15" : ""}`}>{item.icon}</span>{item.label}</button>)}</div>
      </nav>

      <footer className="hidden border-t border-[#1f4f3d]/[0.07] bg-[#fffdf5]/55 py-7 text-center text-xs leading-5 text-black/38 md:block">数据来源：ASPCA · 图片来源：Wikimedia Commons · 本工具不能替代兽医诊断</footer>

      {selectedPlant && <PlantDetail plant={selectedPlant} favorite={favoriteIds.has(selectedPlant.id)} onClose={() => setSelectedPlant(null)} onFavorite={() => toggleFavorite(selectedPlant.id)} />}
    </main>
  );
}
