import React, { useState, useEffect } from "react";
import {
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Filter,
} from "lucide-react";

type GearType = "sword" | "boots" | "gloves" | "armor" | "all";

interface GearStep {
  num: number;
  column: 1 | 2 | 3;
  gearType: GearType;
  heroes: string;
  target: string;
  subnote?: string;
  hasStar?: boolean;
  isSpecial?: boolean;
}

const GEAR_ROADMAP_STEPS: GearStep[] = [
  // Column 1 (1 - 9)
  { num: 1, column: 1, gearType: "sword", heroes: "Марлена / Зоя", target: "меч до 40" },
  { num: 2, column: 1, gearType: "boots", heroes: "Даскал / Артур", target: "ботинки до 40" },
  { num: 3, column: 1, gearType: "gloves", heroes: "Марлена / Зоя", target: "перчатки до 40" },
  { num: 4, column: 1, gearType: "armor", heroes: "Даскал / Артур", target: "броня до 20" },
  { num: 5, column: 1, gearType: "sword", heroes: "Марлена / Зоя", target: "меч до 1★", hasStar: true },
  { num: 6, column: 1, gearType: "sword", heroes: "Харпер / Зоя", target: "меч до 20" },
  { num: 7, column: 1, gearType: "gloves", heroes: "Марлена / Зоя", target: "перчатки до 1★", hasStar: true },
  { num: 8, column: 1, gearType: "gloves", heroes: "Харпер", target: "перчатки до 20" },
  { num: 9, column: 1, gearType: "boots", heroes: "Марлена / Зоя / Харпер", target: "ботинки до 20" },

  // Column 2 (10 - 18)
  { num: 10, column: 2, gearType: "armor", heroes: "Даскал / Артур", target: "броня до 40" },
  { num: 11, column: 2, gearType: "sword", heroes: "Марлена / Зоя", target: "меч до 4★", hasStar: true },
  { num: 12, column: 2, gearType: "boots", heroes: "Марлена / Зоя / Харпер", target: "ботинки до 40" },
  { num: 13, column: 2, gearType: "armor", heroes: "Марлена / Зоя / Харпер", target: "броня до 40" },
  { num: 14, column: 2, gearType: "boots", heroes: "Даскал / Артур", target: "ботинки до 5★", hasStar: true },
  { num: 15, column: 2, gearType: "gloves", heroes: "Марлена / Зоя", target: "перчатки до 4★", hasStar: true },
  { num: 16, column: 2, gearType: "gloves", heroes: "Даскал / Артур", target: "про 40", subnote: "(вероятно, оружие/меч или перчатки)" },
  { num: 17, column: 2, gearType: "sword", heroes: "Даскал / Артур", target: "меч до 40" },
  { num: 18, column: 2, gearType: "all", heroes: "ВСЁ СНАРЯЖЕНИЕ", target: "до 1★", hasStar: true, isSpecial: true },

  // Column 3 (20 - 28)
  { num: 20, column: 3, gearType: "boots", heroes: "Марлена / Зоя / Харпер", target: "ботинки до 4★", hasStar: true },
  { num: 21, column: 3, gearType: "armor", heroes: "Даскал / Артур", target: "броня до 5★", hasStar: true },
  { num: 22, column: 3, gearType: "armor", heroes: "Марлена / Зоя / Харпер", target: "броня до 4★", hasStar: true },
  { num: 23, column: 3, gearType: "boots", heroes: "Марлена / Зоя / Харпер", target: "ботинки до 5★", hasStar: true },
  { num: 24, column: 3, gearType: "gloves", heroes: "Даскал / Артур", target: "перчатки до 5★", hasStar: true },
  { num: 25, column: 3, gearType: "gloves", heroes: "Марлена / Зоя / Харпер", target: "перчатки до 5★", hasStar: true },
  { num: 26, column: 3, gearType: "armor", heroes: "Марлена / Зоя / Харпер", target: "броня до 5★", hasStar: true },
  { num: 27, column: 3, gearType: "sword", heroes: "Марлена / Зоя / Харпер", target: "меч до 5★", hasStar: true },
  { num: 28, column: 3, gearType: "sword", heroes: "Даскал / Артур", target: "меч до 5★", hasStar: true },
];

const GearSvgIcon: React.FC<{ type: GearType }> = ({ type }) => {
  switch (type) {
    case "sword":
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6">
          <defs>
            <linearGradient id="goldSword" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          <path
            d="M28 5L31 8L15 24L11 25L12 21L28 5Z"
            fill="url(#goldSword)"
            stroke="#fef3c7"
            strokeWidth="1.2"
          />
          <path
            d="M9 19L17 27"
            stroke="#fbbf24"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M7 29L11 25"
            stroke="#d97706"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="6" cy="30" r="2" fill="#fde68a" />
        </svg>
      );
    case "boots":
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6">
          <defs>
            <linearGradient id="goldBoots" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fcd34d" />
              <stop offset="60%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
          </defs>
          {/* Back boot */}
          <path
            d="M9 8H16V20L21 23V27H8V21L9 8Z"
            fill="url(#goldBoots)"
            stroke="#fde68a"
            strokeWidth="1.1"
            opacity="0.85"
          />
          {/* Front boot */}
          <path
            d="M16 10H23V22L29 25V29H15V23L16 10Z"
            fill="url(#goldBoots)"
            stroke="#fef3c7"
            strokeWidth="1.2"
          />
        </svg>
      );
    case "gloves":
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6">
          <defs>
            <linearGradient id="goldGloves" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="60%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
          </defs>
          <path
            d="M14 9L24 14L27 22L20 28L10 22L9 14L14 9Z"
            fill="url(#goldGloves)"
            stroke="#fef3c7"
            strokeWidth="1.2"
          />
          <path
            d="M12 19L21 25M15 15L24 21"
            stroke="#78350f"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "armor":
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6">
          <defs>
            <linearGradient id="goldArmor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>
          <path
            d="M11 7L18 10L25 7L30 12L27 17L25 16V28H11V16L9 17L6 12L11 7Z"
            fill="url(#goldArmor)"
            stroke="#fef3c7"
            strokeWidth="1.2"
          />
          <path
            d="M18 10V28M13 16H23"
            stroke="#78350f"
            strokeWidth="1.4"
          />
        </svg>
      );
    case "all":
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6">
          <circle
            cx="18"
            cy="18"
            r="12"
            fill="#1e3a8a"
            stroke="#60a5fa"
            strokeWidth="1.5"
          />
          <path
            d="M12 24L24 12M12 12L24 24"
            stroke="#fbbf24"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="18" cy="18" r="4" fill="#fbbf24" stroke="#fef3c7" strokeWidth="1" />
        </svg>
      );
  }
};

export const GearRoadmapGuide: React.FC = () => {
  const [copiedFull, setCopiedFull] = useState(false);
  const [copiedChat, setCopiedChat] = useState(false);
  const [heroFilter, setHeroFilter] = useState<string>("all");
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("last_asylum_gear_roadmap_done");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "last_asylum_gear_roadmap_done",
        JSON.stringify(completedSteps)
      );
    } catch {
      // ignore storage errors
    }
  }, [completedSteps]);

  const toggleStep = (num: number) => {
    setCompletedSteps((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  const resetProgress = () => {
    setCompletedSteps([]);
  };

  const fullTextForCopy = `Как правильно прокачивать снаряжение героям в Last Asylum: Plague
ДОРОЖНАЯ КАРТА УЛУЧШЕНИЯ СНАРЯЖЕНИЯ (Оптимальный порядок улучшений для ключевых героев):

Этап 1 (Шаги 1–9):
🏆1. Марлена / Зоя — меч до 40
🏆2. Даскал / Артур — ботинки до 40
🏆3. Марлена / Зоя — перчатки до 40
🏆4. Даскал / Артур — броня до 20
🏆5. Марлена / Зоя — меч до 1★
🏆6. Харпер / Зоя — меч до 20
🏆7. Марлена / Зоя — перчатки до 1★
🏆8. Харпер — перчатки до 20
🏆9. Марлена / Зоя / Харпер — ботинки до 20

Этап 2 (Шаги 10–18):
🏆10. Даскал / Артур — броня до 40
🏆11. Марлена / Зоя — меч до 4★
🏆12. Марлена / Зоя / Харпер — ботинки до 40
🏆13. Марлена / Зоя / Харпер — броня до 40
🏆14. Даскал / Артур — ботинки до 5★
🏆15. Марлена / Зоя — перчатки до 4★
🏆16. Даскал / Артур — про 40 (вероятно, оружие/меч)
🏆17. Даскал / Артур — меч до 40
🏆18. ВСЁ СНАРЯЖЕНИЕ — до 1★

Этап 3 (Шаги 20–28):
🏆20. Марлена / Зоя / Харпер — ботинки до 4★
🏆21. Даскал / Артур — броня до 5★
🏆22. Марлена / Зоя / Харпер — броня до 4★
🏆23. Марлена / Зоя / Харпер — ботинки до 5★
🏆24. Даскал / Артур — перчатки до 5★
🏆25. Марлена / Зоя / Харпер — перчатки до 5★
🏆26. Марлена / Зоя / Харпер — броня до 5★
🏆27. Марлена / Зоя / Харпер — меч до 5★
🏆28. Даскал / Артур — меч до 5★

★ УЛУЧШАЙТЕ СНАРЯЖЕНИЕ ПО ПОРЯДКУ — РАСКРОЙТЕ МАКСИМАЛЬНУЮ СИЛУ СВОИХ ГЕРОЕВ!`;

  const shortChatText = `СНАРЯЖЕНИЕ ГЕРОЕВ (Приоритет): 1) Марлена/Зоя меч 40 -> 2) Даскал/Артур ботинки 40 -> 3) Марлена/Зоя перчатки 40 -> 4) Даскал/Артур броня 20 -> 5) Марлена/Зоя меч 1★ -> 6) Харпер/Зоя меч 20 -> 7) Марлена/Зоя перчатки 1★! Полная карта из 28 шагов на сайте альянса!`;

  const handleCopyFull = () => {
    navigator.clipboard.writeText(fullTextForCopy);
    setCopiedFull(true);
    setTimeout(() => setCopiedFull(false), 2500);
  };

  const handleCopyChat = () => {
    navigator.clipboard.writeText(shortChatText);
    setCopiedChat(true);
    setTimeout(() => setCopiedChat(false), 2500);
  };

  const matchesFilter = (step: GearStep) => {
    if (heroFilter === "all") return true;
    if (heroFilter === "marlena") return step.heroes.includes("Марлена") || step.isSpecial;
    if (heroFilter === "daskal") return step.heroes.includes("Даскал") || step.isSpecial;
    if (heroFilter === "harper") return step.heroes.includes("Харпер") || step.isSpecial;
    return true;
  };

  const renderStepRow = (step: GearStep) => {
    const isDone = completedSteps.includes(step.num);
    const isDimmed = !matchesFilter(step);

    const renderTargetText = (target: string) => {
      if (!target.includes("★")) {
        // Highlight numbers like 40, 20
        const parts = target.split(/(40|20)/g);
        return (
          <span className="text-slate-600 font-bold text-xs sm:text-sm whitespace-nowrap">
            {parts.map((part, i) =>
              part === "40" || part === "20" ? (
                <span key={i} className="text-amber-700 font-extrabold text-sm sm:text-base ml-0.5">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </span>
        );
      }

      // Has star ★
      const beforeStar = target.replace("★", "");
      const parts = beforeStar.split(/(\d+)/g);
      return (
        <span className="inline-flex items-center gap-0.5 text-slate-600 font-bold text-xs sm:text-sm whitespace-nowrap">
          {parts.map((part, i) =>
            /^\d+$/.test(part) ? (
              <span key={i} className="text-slate-900 font-extrabold text-sm sm:text-base ml-0.5">
                {part}
              </span>
            ) : (
              part
            )
          )}
          <span className="text-amber-500 text-sm sm:text-base">
            ★
          </span>
        </span>
      );
    };

    return (
      <div
        key={step.num}
        onClick={() => toggleStep(step.num)}
        title="Нажмите, чтобы отметить выполненным"
        className={`group relative flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer select-none ${
          isDimmed ? "opacity-25 scale-[0.98]" : "opacity-100 hover:scale-[1.01]"
        }`}
      >
        {/* Left Number Badge */}
        <div
          className={`w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center font-extrabold text-sm sm:text-base rounded-xl border transition-colors shadow-2xs ${
            isDone
              ? "bg-emerald-100 border-emerald-400 text-emerald-800"
              : step.isSpecial
                ? "bg-sky-600 border-sky-700 text-white"
                : "bg-amber-50 border-amber-300 text-amber-900 group-hover:border-amber-500"
          }`}
        >
          {isDone ? <Check className="w-5 h-5 text-emerald-700" /> : step.num}
        </div>

        {/* Main Step Pill */}
        <div
          className={`flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border transition-all min-h-[46px] shadow-2xs ${
            isDone
              ? "bg-emerald-50/70 border-emerald-300 text-emerald-800/80 line-through"
              : step.isSpecial
                ? "bg-sky-50 border-sky-300"
                : "bg-white border-slate-200 group-hover:border-amber-400"
          }`}
        >
          {/* Left: Gear Icon + Hero Names */}
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 border ${
                step.isSpecial
                  ? "bg-sky-900 border-sky-600"
                  : "bg-slate-900 border-amber-500/80"
              }`}
            >
              <GearSvgIcon type={step.gearType} />
            </div>

            <div className="min-w-0 flex-1">
              <div
                className={`font-bold text-[11px] sm:text-sm leading-snug break-words ${
                  step.isSpecial
                    ? "text-sky-950 tracking-wide uppercase font-extrabold"
                    : "text-slate-900"
                }`}
              >
                {step.heroes}
              </div>
              {step.subnote && (
                <div className="text-[10px] text-amber-700 font-medium leading-tight mt-0.5">
                  {step.subnote}
                </div>
              )}
            </div>
          </div>

          {/* Right: Target Level / Star */}
          <div className="flex-shrink-0 text-left sm:text-right pl-10 sm:pl-1">
            {renderTargetText(step.target)}
          </div>
        </div>
      </div>
    );
  };

  const col1 = GEAR_ROADMAP_STEPS.filter((s) => s.column === 1);
  const col2 = GEAR_ROADMAP_STEPS.filter((s) => s.column === 2);
  const col3 = GEAR_ROADMAP_STEPS.filter((s) => s.column === 3);

  return (
    <div className="space-y-6">
      {/* Top Action & Filter Bar */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-2xs">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Дорожная карта снаряжения</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Как правильно прокачивать снаряжение героям
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Нажимайте на шаги в таблице ниже, чтобы отмечать свой личный прогресс прокачки снаряжения (сохраняется автоматически).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5 w-full lg:w-auto">
          {completedSteps.length > 0 && (
            <button
              onClick={resetProgress}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition-all cursor-pointer w-full sm:w-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Сбросить ({completedSteps.length}/27)</span>
            </button>
          )}

          <button
            onClick={handleCopyFull}
            className={`flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border shadow-2xs w-full sm:w-auto ${
              copiedFull
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-amber-600 hover:bg-amber-700 text-white border-amber-600"
            }`}
          >
            {copiedFull ? (
              <>
                <Check className="w-4 h-4" />
                <span>Скопировано!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Скопировать весь список (🏆)</span>
              </>
            )}
          </button>

          <button
            onClick={handleCopyChat}
            className={`flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border shadow-2xs w-full sm:w-auto ${
              copiedChat
                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300"
            }`}
          >
            {copiedChat ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Скопировано для чата!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500" />
                <span>Кратко в чат альянса</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-slate-200 rounded-2xl px-3.5 sm:px-4 py-3 sm:py-3.5 shadow-2xs">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-0.5 sm:pb-0">
          <span className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-500 mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Фильтр по героям:
          </span>
          {[
            { id: "all", label: "Все шаги (1–28)" },
            { id: "marlena", label: "Марлена / Зоя" },
            { id: "daskal", label: "Даскал / Артур" },
            { id: "harper", label: "Харпер" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setHeroFilter(f.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                heroFilter === f.id
                  ? "bg-amber-600 text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl shrink-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Выполнено: {completedSteps.length} из 27</span>
        </div>
      </div>

      {/* Main Board in Unified Light Card Style */}
      <div className="rounded-2xl bg-white border border-slate-200 p-3 sm:p-6 shadow-2xs relative overflow-hidden">
        {/* Header Title */}
        <div className="text-center mb-5 pb-3 sm:mb-6 sm:pb-4 border-b border-slate-200">
          <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight uppercase text-slate-900">
            ДОРОЖНАЯ КАРТА УЛУЧШЕНИЯ СНАРЯЖЕНИЯ
          </h2>
          <p className="text-xs sm:text-sm font-bold text-amber-700 mt-1">
            Оптимальный порядок улучшений для ключевых героев
          </p>
        </div>

        {/* 3 Columns Grid: Steps 1-9, 10-18, 20-28 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Column 1: 1-9 */}
          <div className="space-y-2 bg-slate-50 border border-slate-200 rounded-2xl p-2.5 sm:p-4">
            <div className="flex items-center justify-between px-1 pb-2 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-amber-800">
              <span>Этап I • Базовый старт</span>
              <span>Шаги 1 – 9</span>
            </div>
            {col1.map(renderStepRow)}
          </div>

          {/* Column 2: 10-18 */}
          <div className="space-y-2 bg-slate-50 border border-slate-200 rounded-2xl p-2.5 sm:p-4">
            <div className="flex items-center justify-between px-1 pb-2 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-sky-800">
              <span>Этап II • Средний рубеж и 1★</span>
              <span>Шаги 10 – 18</span>
            </div>
            {col2.map(renderStepRow)}
          </div>

          {/* Column 3: 20-28 */}
          <div className="space-y-2 bg-slate-50 border border-slate-200 rounded-2xl p-2.5 sm:p-4">
            <div className="flex items-center justify-between px-1 pb-2 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
              <span>Этап III • Выход на 4★ и 5★</span>
              <span>Шаги 20 – 28</span>
            </div>
            {col3.map(renderStepRow)}
          </div>
        </div>

        {/* Bottom Motivation Banner */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-center gap-2.5 text-center">
          <div className="w-7 h-7 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0">
            <span className="text-amber-600 text-sm">★</span>
          </div>
          <p className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-slate-800">
            УЛУЧШАЙТЕ СНАРЯЖЕНИЕ ПО ПОРЯДКУ — РАСКРОЙТЕ МАКСИМАЛЬНУЮ СИЛУ СВОИХ ГЕРОЕВ!
          </p>
        </div>
      </div>

      {/* Text Version Card for Quick Reading & Copying */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-200">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Текстовая памятка для игроков альянса
            </h3>
            <p className="text-xs text-slate-500">
              Готовый список по этапам для быстрой сверки или отправки в чат/дискорд/телеграм
            </p>
          </div>
          <button
            onClick={handleCopyFull}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 transition-colors cursor-pointer self-start sm:self-auto"
          >
            {copiedFull ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-amber-700" />}
            <span>{copiedFull ? "Скопировано!" : "Копировать текст"}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-800">
          <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="font-extrabold text-amber-800 uppercase text-xs mb-2 pb-1.5 border-b border-slate-200">
              Блок 1 (Шаги 1 – 9)
            </div>
            <p>🏆 Марлена / Зоя — <strong>меч до 40</strong></p>
            <p>🏆 Даскал / Артур — <strong>ботинки до 40</strong></p>
            <p>🏆 Марлена / Зоя — <strong>перчатки до 40</strong></p>
            <p>🏆 Даскал / Артур — <strong>броня до 20</strong></p>
            <p>🏆 Марлена / Зоя — <strong>меч до 1★</strong></p>
            <p>🏆 Харпер / Зоя — <strong>меч до 20</strong></p>
            <p>🏆 Марлена / Зоя — <strong>перчатки до 1★</strong></p>
            <p>🏆 Харпер — <strong>перчатки до 20</strong></p>
            <p>🏆 Марлена / Зоя / Харпер — <strong>ботинки до 20</strong></p>
          </div>

          <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="font-extrabold text-sky-800 uppercase text-xs mb-2 pb-1.5 border-b border-slate-200">
              Блок 2 (Шаги 10 – 18)
            </div>
            <p>🏆 Даскал / Артур — <strong>броня до 40</strong></p>
            <p>🏆 Марлена / Зоя — <strong>меч до 4★</strong></p>
            <p>🏆 Марлена / Зоя / Харпер — <strong>ботинки до 40</strong></p>
            <p>🏆 Марлена / Зоя / Харпер — <strong>броня до 40</strong></p>
            <p>🏆 Даскал / Артур — <strong>ботинки до 5★</strong></p>
            <p>🏆 Марлена / Зоя — <strong>перчатки до 4★</strong></p>
            <p>🏆 Даскал / Артур — <strong>про 40 (вероятно, оружие/меч)</strong></p>
            <p>🏆 Даскал / Артур — <strong>меч до 40</strong></p>
            <p>🏆 <strong>ВСЁ СНАРЯЖЕНИЕ — до 1★</strong></p>
          </div>

          <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="font-extrabold text-purple-800 uppercase text-xs mb-2 pb-1.5 border-b border-slate-200">
              Блок 3 (Шаги 20 – 28)
            </div>
            <p>🏆 Марлена / Зоя / Харпер — <strong>ботинки до 4★</strong></p>
            <p>🏆 Даскал / Артур — <strong>броня до 5★</strong></p>
            <p>🏆 Марлена / Зоя / Харпер — <strong>броня до 4★</strong></p>
            <p>🏆 Марлена / Зоя / Харпер — <strong>ботинки до 5★</strong></p>
            <p>🏆 Даскал / Артур — <strong>перчатки до 5★</strong></p>
            <p>🏆 Марлена / Зоя / Харпер — <strong>перчатки до 5★</strong></p>
            <p>🏆 Марлена / Зоя / Харпер — <strong>броня до 5★</strong></p>
            <p>🏆 Марлена / Зоя / Харпер — <strong>меч до 5★</strong></p>
            <p>🏆 Даскал / Артур — <strong>меч до 5★</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};
