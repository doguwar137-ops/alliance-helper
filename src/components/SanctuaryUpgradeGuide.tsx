import React, { useState, useMemo } from "react";
import {
  Castle,
  Calculator,
  Search,
  Check,
  Copy,
  Info,
  Shield,
  Zap,
  TrendingUp,
  AlertCircle,
  Building2,
  Sparkles,
  ChevronRight,
  Filter,
} from "lucide-react";
import {
  SANCTUARY_LEVELS,
  SANCTUARY_TOTALS,
  formatCompactNumber,
  formatExactNumber,
  SanctuaryLevelRequirement,
} from "../data/sanctuaryData";

export const SanctuaryUpgradeGuide: React.FC = () => {
  // Calculator state
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [targetLevel, setTargetLevel] = useState<number>(10);

  // Filter / Search state
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [tierFilter, setTierFilter] = useState<"all" | "early" | "mid" | "late">("all");
  const [exactNumbers, setExactNumbers] = useState<boolean>(false);

  // Copy feedback
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Shield milestone levels
  const shieldLevels = [7, 9, 11, 12, 13, 15, 17];

  // Calculate range costs
  const rangeCalculation = useMemo(() => {
    if (targetLevel <= currentLevel) {
      return {
        grain: 0,
        wood: 0,
        herb: 0,
        starsMin: 0,
        starsMax: 0,
        levels: [] as SanctuaryLevelRequirement[],
      };
    }

    const levelsInRange = SANCTUARY_LEVELS.filter(
      (item) => item.level > currentLevel && item.level <= targetLevel
    );

    const grain = levelsInRange.reduce((acc, curr) => acc + curr.grain, 0);
    const wood = levelsInRange.reduce((acc, curr) => acc + curr.wood, 0);
    const herb = levelsInRange.reduce((acc, curr) => acc + curr.herb, 0);
    const targetItem = SANCTUARY_LEVELS.find((l) => l.level === targetLevel);

    return {
      grain,
      wood,
      herb,
      targetStars: targetItem?.stars || 0,
      levels: levelsInRange,
    };
  }, [currentLevel, targetLevel]);

  // Filtered rows for the table
  const filteredLevels = useMemo(() => {
    return SANCTUARY_LEVELS.filter((item) => {
      // Tier filter
      if (tierFilter === "early" && (item.level < 1 || item.level > 10)) return false;
      if (tierFilter === "mid" && (item.level < 11 || item.level > 20)) return false;
      if (tierFilter === "late" && (item.level < 21 || item.level > 30)) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesLevel = String(item.level) === query;
        const matchesBuildings = item.rawBuildings.toLowerCase().includes(query);
        return matchesLevel || matchesBuildings;
      }

      return true;
    });
  }, [tierFilter, searchQuery]);

  const handleCopyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const copyRangeSummary = () => {
    const text = `ПРОКАЧКА СВЯТИЛИЩА (${currentLevel} ➔ ${targetLevel} УРОВЕНЬ):
Зерно: ${formatCompactNumber(rangeCalculation.grain)} (${formatExactNumber(rangeCalculation.grain)})
Дерево: ${formatCompactNumber(rangeCalculation.wood)} (${formatExactNumber(rangeCalculation.wood)})
Трава: ${formatCompactNumber(rangeCalculation.herb)} (${formatExactNumber(rangeCalculation.herb)})
Требуемые звезды на ${targetLevel} ур: ${rangeCalculation.targetStars || "—"}

Обязательные постройки на целевом ${targetLevel} ур:
${SANCTUARY_LEVELS.find((l) => l.level === targetLevel)?.rawBuildings || "нет"}

Совет: качайте ТОЛЬКО здания из списка, не распыляя ресурсы на лишнее!`;
    handleCopyText(text, "range-calc");
  };

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 shadow-2xs relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Castle className="w-3.5 h-3.5 text-amber-600" />
              <span>СТРАТЕГИЯ РАЗВИТИЯ БАЗЫ • 1–30 УРОВНИ</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Прокачка Святилища: Карта Экономного Строительства
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Главное правило опытных игроков: <strong className="text-slate-900">строить только то, что строго требуется для следующего уровня Святилища!</strong> Не тратьте миллионы ресурсов и строительные ускорения на случайные второстепенные здания раньше времени.
            </p>
          </div>

          {/* Quick Total Badges */}
          <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 sm:p-3.5 rounded-2xl border border-slate-200">
            <div className="text-center p-2 sm:p-2.5 rounded-xl bg-amber-50 border border-amber-200">
              <span className="block text-[10px] font-mono text-amber-800 font-bold uppercase">Зерно</span>
              <span className="text-xs sm:text-base font-extrabold text-amber-900">4.77 млрд</span>
            </div>
            <div className="text-center p-2 sm:p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="block text-[10px] font-mono text-emerald-800 font-bold uppercase">Дерево</span>
              <span className="text-xs sm:text-base font-extrabold text-emerald-900">4.77 млрд</span>
            </div>
            <div className="text-center p-2 sm:p-2.5 rounded-xl bg-teal-50 border border-teal-200">
              <span className="block text-[10px] font-mono text-teal-800 font-bold uppercase">Трава</span>
              <span className="text-xs sm:text-base font-extrabold text-teal-900">1.51 млрд</span>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Insights Cards for Beginners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Insight 1: 1st Laboratory */}
        <div className="rounded-2xl bg-white border border-indigo-200 p-4 shadow-2xs space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.2 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                ГЛАВНОЕ ЗДАНИЕ
              </span>
              <h4 className="text-sm font-bold text-slate-900">1-я Лаборатория</h4>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Начиная с <strong>11 по 30 уровень</strong> Святилища, для КАЖДОГО апа обязательна <strong>1-я Лаборатория</strong> (ее уровень отстает ровно на 1 от Святилища). Держите её в постоянном улучшении!
          </p>
        </div>

        {/* Insight 2: Free Shields & Frenzy */}
        <div className="rounded-2xl bg-white border border-purple-200 p-4 shadow-2xs space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.2 rounded bg-purple-50 text-purple-700 border border-purple-200">
                ВЕХИ СВЯТИЛИЩА
              </span>
              <h4 className="text-sm font-bold text-slate-900">Щиты и Боевое безумие</h4>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Святилище дарит <strong>7 щитов по 8 часов</strong> на уровнях <strong>7, 9, 11, 12, 13, 15, 17</strong>! А с <strong>9 уровня</strong> бафф Безумия начинает давать <strong>+5% к Атаке войска</strong>.
          </p>
        </div>

        {/* Insight 3: Tuesday Duel Synergy */}
        <div className="rounded-2xl bg-white border border-amber-200 p-4 shadow-2xs space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.2 rounded bg-amber-50 text-amber-700 border border-amber-200">
                СИНХРОНИЗАЦИЯ
              </span>
              <h4 className="text-sm font-bold text-slate-900">Вторник — День Стройки</h4>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Завершайте долгие стройки Святилища и лаборатории во <strong>ВТОРНИК</strong> строго после старта фазы Дуэли — это приносит огромное количество очков в зачет альянса!
          </p>
        </div>
      </div>

      {/* Interactive Calculator: From Level X to Level Y */}
      <div className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-700">
              <Calculator className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-200">
                  КАЛЬКУЛЯТОР ЦЕЛИ
                </span>
                <span className="text-xs text-slate-500 font-medium">Расчет затрат от текущего до желаемого уровня</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                Сколько ресурсов нужно для вашей следующей цели?
              </h3>
            </div>
          </div>

          {targetLevel > currentLevel && (
            <button
              onClick={copyRangeSummary}
              className="w-full sm:w-auto justify-center px-3.5 py-2.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              {copiedKey === "range-calc" ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Скопировано!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-600" />
                  <span>Скопировать расчет в чат игры</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Level Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase font-mono">
              Текущий уровень: <strong className="text-amber-700 text-sm">{currentLevel}</strong>
            </label>
            <select
              value={currentLevel}
              onChange={(e) => {
                const val = Number(e.target.value);
                setCurrentLevel(val);
                if (targetLevel <= val) setTargetLevel(Math.min(30, val + 1));
              }}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {Array.from({ length: 29 }, (_, i) => i + 1).map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl} уровень
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase font-mono">
              Целевой уровень: <strong className="text-amber-700 text-sm">{targetLevel}</strong>
            </label>
            <select
              value={targetLevel}
              onChange={(e) => setTargetLevel(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {Array.from({ length: 30 - currentLevel }, (_, i) => currentLevel + 1 + i).map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl} уровень
                </option>
              ))}
            </select>
          </div>

          {/* Quick preset buttons */}
          <div className="sm:col-span-2">
            <span className="block text-xs font-bold text-slate-700 mb-1.5 uppercase font-mono">Быстрые цели:</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { label: "+1 ур", target: Math.min(30, currentLevel + 1) },
                { label: "10 ур (Лазарет)", target: 10 },
                { label: "15 ур (Т7)", target: 15 },
                { label: "17 ур (Щиты)", target: 17 },
                { label: "20 ур (Т8)", target: 20 },
                { label: "25 ур (Т9)", target: 25 },
                { label: "30 ур (Топ)", target: 30 },
              ]
                .filter((p) => p.target > currentLevel)
                .slice(0, 5)
                .map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setTargetLevel(preset.target)}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-amber-100 hover:text-amber-900 text-slate-700 border border-slate-200 transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* Calculation Result Cards */}
        {targetLevel > currentLevel ? (
          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[11px] font-mono font-bold text-amber-800 uppercase block">🌾 Зерно</span>
                <div className="text-lg font-black text-amber-950 mt-0.5">
                  {formatCompactNumber(rangeCalculation.grain)}
                </div>
                <div className="text-[11px] text-amber-700 font-mono">
                  {formatExactNumber(rangeCalculation.grain)}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase block">🪵 Дерево</span>
                <div className="text-lg font-black text-emerald-950 mt-0.5">
                  {formatCompactNumber(rangeCalculation.wood)}
                </div>
                <div className="text-[11px] text-emerald-700 font-mono">
                  {formatExactNumber(rangeCalculation.wood)}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200">
                <span className="text-[11px] font-mono font-bold text-teal-800 uppercase block">🌿 Трава</span>
                <div className="text-lg font-black text-teal-950 mt-0.5">
                  {formatCompactNumber(rangeCalculation.herb)}
                </div>
                <div className="text-[11px] text-teal-700 font-mono">
                  {formatExactNumber(rangeCalculation.herb)}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200">
                <span className="text-[11px] font-mono font-bold text-indigo-800 uppercase block">⭐ Звезды на {targetLevel} ур.</span>
                <div className="text-lg font-black text-indigo-950 mt-0.5">
                  {rangeCalculation.targetStars || "—"}
                </div>
                <div className="text-[11px] text-indigo-700">
                  {targetLevel >= 9 ? "Требуются для улучшения" : "Не требуются"}
                </div>
              </div>
            </div>

            {/* Target Level Requirements Highlight */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                    ОБЯЗАТЕЛЬНЫЕ ПОСТРОЙКИ ДЛЯ {targetLevel} УРОВНЯ
                  </span>
                  <span className="text-xs text-slate-600 font-medium">Что обязательно построить заранее:</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap pt-1">
                {SANCTUARY_LEVELS.find((l) => l.level === targetLevel)?.buildings.length ? (
                  SANCTUARY_LEVELS.find((l) => l.level === targetLevel)?.buildings.map((b, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-slate-900 border border-amber-300 text-xs font-bold shadow-2xs"
                    >
                      <Building2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>{b}</span>
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-500 italic">Специальных построек не требуется</span>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-amber-50 text-amber-800 text-xs font-semibold">
            Выберите целевой уровень выше текущего для расчета.
          </div>
        )}
      </div>

      {/* Main Table Card with Search & Filters */}
      <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        {/* Controls Bar */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50/70 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <span>Полная таблица требований (1–30 Уровень)</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                  {filteredLevels.length} строк
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Точные значения из игровой базы данных для каждого уровня
              </p>
            </div>

            {/* Exact vs Compact numbers toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600">Формат чисел:</span>
              <button
                onClick={() => setExactNumbers(!exactNumbers)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  exactNumbers
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                }`}
              >
                {exactNumbers ? "Точные (1 300 000 000)" : "Компактные (1.3 млрд)"}
              </button>
            </div>
          </div>

          {/* Search & Tier Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Поиск по постройке (напр. Лаборатория, Стены, Лазарет)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Tier Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
              {[
                { id: "all", label: "Все (1–30)" },
                { id: "early", label: "1–10 (Старт)" },
                { id: "mid", label: "11–20 (Развитие)" },
                { id: "late", label: "21–30 (Элита)" },
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setTierFilter(tier.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    tierFilter === tier.id
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Cards View (< md) */}
        <div className="md:hidden divide-y divide-slate-200">
          {filteredLevels.map((row) => {
            const isShieldMilestone = shieldLevels.includes(row.level);
            const isFrenzyMilestone = row.level === 9;
            const rowKey = `row-mob-${row.level}`;

            const copyRowText = `Святилище ${row.level} ур:
Зерно: ${formatExactNumber(row.grain)}
Дерево: ${formatExactNumber(row.wood)}
Трава: ${formatExactNumber(row.herb)}
Звезды: ${row.stars || "—"}
Постройки: ${row.rawBuildings}`;

            return (
              <div key={row.level} className="p-3.5 space-y-2.5 bg-white">
                {/* Top Row: Level + Milestones + Stars + Copy */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs shadow-2xs">
                      Уровень {row.level}
                    </span>
                    {isShieldMilestone && (
                      <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-200 text-[10px] font-bold">
                        🛡️ Щит 8ч
                      </span>
                    )}
                    {isFrenzyMilestone && (
                      <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 border border-rose-200 text-[10px] font-bold">
                        ⚔️ Безумие +5%
                      </span>
                    )}
                    {row.stars > 0 && (
                      <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200 text-[10px] font-mono font-bold">
                        ⭐ {row.stars}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleCopyText(copyRowText, rowKey)}
                    className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex items-center gap-1 text-[11px] font-bold"
                  >
                    {copiedKey === rowKey ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Ок</span>
                      </>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Resources 3-Column Strip */}
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div className="p-1.5 rounded-lg bg-amber-50/70 border border-amber-200/80">
                    <span className="block text-[9px] font-mono text-amber-800 uppercase font-bold">
                      🌾 Зерно
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900">
                      {exactNumbers ? formatExactNumber(row.grain) : formatCompactNumber(row.grain)}
                    </span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80">
                    <span className="block text-[9px] font-mono text-emerald-800 uppercase font-bold">
                      🪵 Дерево
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900">
                      {exactNumbers ? formatExactNumber(row.wood) : formatCompactNumber(row.wood)}
                    </span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-teal-50/70 border border-teal-200/80">
                    <span className="block text-[9px] font-mono text-teal-800 uppercase font-bold">
                      🌿 Трава
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900">
                      {row.herb > 0
                        ? exactNumbers
                          ? formatExactNumber(row.herb)
                          : formatCompactNumber(row.herb)
                        : "—"}
                    </span>
                  </div>
                </div>

                {/* Required Buildings */}
                {row.buildings.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase mr-0.5">
                      Постройки:
                    </span>
                    {row.buildings.map((b, i) => {
                      const isLab = b.includes("Лаборатория");
                      const isWall = b.includes("Стены");
                      const isCamp = b.includes("Тренировочные");
                      const isAlliance = b.includes("Зал альянса");

                      let badgeColor = "bg-slate-100 text-slate-800 border-slate-200";
                      if (isLab) badgeColor = "bg-indigo-50 text-indigo-900 border-indigo-200 font-bold";
                      if (isWall) badgeColor = "bg-stone-100 text-stone-800 border-stone-300";
                      if (isCamp) badgeColor = "bg-amber-50 text-amber-900 border-amber-200 font-semibold";
                      if (isAlliance) badgeColor = "bg-purple-50 text-purple-900 border-purple-200 font-semibold";

                      return (
                        <span
                          key={i}
                          className={`inline-block px-2 py-0.5 rounded-lg border text-[11px] ${badgeColor}`}
                        >
                          {b}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Table Content (md+) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 font-mono font-bold uppercase text-[11px] border-b border-slate-200">
                <th className="py-3 px-3 sm:px-4 text-center w-16">Ур.</th>
                <th className="py-3 px-3 sm:px-4 text-amber-800">🌾 Зерно</th>
                <th className="py-3 px-3 sm:px-4 text-emerald-800">🪵 Дерево</th>
                <th className="py-3 px-3 sm:px-4 text-teal-800">🌿 Трава</th>
                <th className="py-3 px-3 sm:px-4 text-indigo-800 text-center w-20">⭐ Звезды</th>
                <th className="py-3 px-3 sm:px-4 text-slate-800 min-w-[260px]">Обязательные постройки</th>
                <th className="py-3 px-3 sm:px-4 text-center w-14"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLevels.map((row) => {
                const isShieldMilestone = shieldLevels.includes(row.level);
                const isFrenzyMilestone = row.level === 9;
                const rowKey = `row-${row.level}`;

                const copyRowText = `Святилище ${row.level} ур:
Зерно: ${formatExactNumber(row.grain)}
Дерево: ${formatExactNumber(row.wood)}
Трава: ${formatExactNumber(row.herb)}
Звезды: ${row.stars || "—"}
Постройки: ${row.rawBuildings}`;

                return (
                  <tr
                    key={row.level}
                    className={`hover:bg-amber-50/50 transition-colors ${
                      row.level % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                    }`}
                  >
                    {/* Level */}
                    <td className="py-3 px-3 sm:px-4 text-center">
                      <div className="inline-flex flex-col items-center">
                        <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shadow-2xs">
                          {row.level}
                        </span>
                        {isShieldMilestone && (
                          <span className="text-[9px] font-bold text-purple-700 mt-0.5" title="Награда: щит 8ч">
                            🛡️ Щит
                          </span>
                        )}
                        {isFrenzyMilestone && (
                          <span className="text-[9px] font-bold text-rose-700 mt-0.5" title="Бонус: Безумие +5% атаки">
                            ⚔️ +5%
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Grain */}
                    <td className="py-3 px-3 sm:px-4 font-mono font-semibold text-slate-800">
                      {exactNumbers ? formatExactNumber(row.grain) : formatCompactNumber(row.grain)}
                    </td>

                    {/* Wood */}
                    <td className="py-3 px-3 sm:px-4 font-mono font-semibold text-slate-800">
                      {exactNumbers ? formatExactNumber(row.wood) : formatCompactNumber(row.wood)}
                    </td>

                    {/* Herb */}
                    <td className="py-3 px-3 sm:px-4 font-mono font-semibold text-slate-800">
                      {row.herb > 0 ? (
                        exactNumbers ? formatExactNumber(row.herb) : formatCompactNumber(row.herb)
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>

                    {/* Stars */}
                    <td className="py-3 px-3 sm:px-4 text-center font-mono font-bold text-indigo-700">
                      {row.stars > 0 ? row.stars : <span className="text-slate-300 font-normal">—</span>}
                    </td>

                    {/* Buildings */}
                    <td className="py-3 px-3 sm:px-4">
                      {row.buildings.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {row.buildings.map((b, i) => {
                            const isLab = b.includes("Лаборатория");
                            const isWall = b.includes("Стены");
                            const isCamp = b.includes("Тренировочные");
                            const isAlliance = b.includes("Зал альянса");

                            let badgeColor = "bg-slate-100 text-slate-800 border-slate-200";
                            if (isLab) badgeColor = "bg-indigo-50 text-indigo-900 border-indigo-200 font-bold";
                            if (isWall) badgeColor = "bg-stone-100 text-stone-800 border-stone-300";
                            if (isCamp) badgeColor = "bg-amber-50 text-amber-900 border-amber-200 font-semibold";
                            if (isAlliance) badgeColor = "bg-purple-50 text-purple-900 border-purple-200 font-semibold";

                            return (
                              <span
                                key={i}
                                className={`inline-block px-2 py-0.5 rounded-lg border text-[11px] ${badgeColor}`}
                              >
                                {b}
                              </span>
                            );
                          })}
                        </div>
                      ) : (
                        <span className="text-slate-400 italic text-[11px]">—</span>
                      )}
                    </td>

                    {/* Copy action */}
                    <td className="py-3 px-3 sm:px-4 text-center">
                      <button
                        onClick={() => handleCopyText(copyRowText, rowKey)}
                        title="Скопировать требования уровня"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        {copiedKey === rowKey ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {/* Total Footer */}
            <tfoot>
              <tr className="bg-slate-100 text-slate-900 font-mono font-bold text-xs border-t-2 border-slate-200">
                <td className="py-3.5 px-3 sm:px-4 text-center">ИТОГО</td>
                <td className="py-3.5 px-3 sm:px-4 text-amber-800">
                  {exactNumbers
                    ? formatExactNumber(SANCTUARY_TOTALS.grain)
                    : `${formatCompactNumber(SANCTUARY_TOTALS.grain)} (4.77 млрд)`}
                </td>
                <td className="py-3.5 px-3 sm:px-4 text-emerald-800">
                  {exactNumbers
                    ? formatExactNumber(SANCTUARY_TOTALS.wood)
                    : `${formatCompactNumber(SANCTUARY_TOTALS.wood)} (4.77 млрд)`}
                </td>
                <td className="py-3.5 px-3 sm:px-4 text-teal-800">
                  {exactNumbers
                    ? formatExactNumber(SANCTUARY_TOTALS.herb)
                    : `${formatCompactNumber(SANCTUARY_TOTALS.herb)} (1.51 млрд)`}
                </td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-slate-400">—</td>
                <td className="py-3.5 px-3 sm:px-4 text-slate-600 font-sans font-medium text-[11px]" colSpan={2}>
                  Суммарные ресурсы с 1 по 30 уровень. Стройте строго обязательные здания по списку!
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
