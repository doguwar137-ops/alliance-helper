import React, { useState, useEffect } from "react";
import {
  Zap,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  Calendar,
  Layers,
  Award,
  BellRing,
} from "lucide-react";

interface SurvivalRound {
  number: number;
  timeRange: string;
  startHour: number; // MSK hour (0-23)
  endHour: number; // MSK hour (0-23)
  description: string;
}

const SURVIVAL_ROUNDS: SurvivalRound[] = [
  { number: 1, timeRange: "05:00 — 09:00 МСК", startHour: 5, endHour: 9, description: "Старт нового игрового дня сразу после ресета сервера" },
  { number: 2, timeRange: "09:00 — 13:00 МСК", startHour: 9, endHour: 13, description: "Утренний раунд: сверяйте тему с Дуэлью Альянсов" },
  { number: 3, timeRange: "13:00 — 17:00 МСК", startHour: 13, endHour: 17, description: "Дневной раунд: идеален для активного слива ресурсов" },
  { number: 4, timeRange: "17:00 — 21:00 МСК", startHour: 17, endHour: 21, description: "Вечерний прайм-тайм: максимальный онлайн альянса" },
  { number: 5, timeRange: "21:00 — 01:00 МСК", startHour: 21, endHour: 25, description: "Поздний вечер: закрытие суточных планов" },
  { number: 6, timeRange: "01:00 — 05:00 МСК", startHour: 1, endHour: 5, description: "Ночной раунд перед утренним сбросом сервера" },
];

export const SurvivalBattleGuide: React.FC = () => {
  const [copiedText, setCopiedText] = useState(false);
  const [currentMskHour, setCurrentMskHour] = useState<number>(0);
  const [currentMskTime, setCurrentMskTime] = useState<string>("");

  useEffect(() => {
    const updateMskTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const msk = new Date(utc + 3600000 * 3);
      setCurrentMskHour(msk.getHours());
      const hours = String(msk.getHours()).padStart(2, "0");
      const minutes = String(msk.getMinutes()).padStart(2, "0");
      const seconds = String(msk.getSeconds()).padStart(2, "0");
      setCurrentMskTime(`${hours}:${minutes}:${seconds} МСК`);
    };

    updateMskTime();
    const interval = setInterval(updateMskTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Determine which round is active right now (MSK)
  const activeRoundNumber = (() => {
    const h = currentMskHour;
    if (h >= 5 && h < 9) return 1;
    if (h >= 9 && h < 13) return 2;
    if (h >= 13 && h < 17) return 3;
    if (h >= 17 && h < 21) return 4;
    if (h >= 21 || h < 1) return 5;
    return 6; // 01:00 - 05:00
  })();

  const fullGuideText = `ГАЙД: СЕКРЕТ ДВОЙНЫХ НАГРАД — СИНХРОНИЗАЦИЯ ДУЭЛИ АЛЬЯНСОВ И БИТВЫ НА ВЫЖИВАНИЕ

Многие игроки совершают грубую ошибку: сливают ресурсы (ускорения, эссенции, сундуки) сразу же, как только начинается новый день Дуэли Альянсов. В итоге они забирают награды Дуэли, но полностью упускают очки в Битве на выживание (Survival Battle).
Самая эффективная стратегия в Last Asylum — совмещать эти два события. Вы совершаете всего ОДНО действие, а ценные сундуки и очки капают сразу в два зачета одновременно.

1. КАК УСТРОЕНА БИТВА НА ВЫЖИВАНИЕ:
В отличие от Дуэли Альянсов, которая длится полные сутки, Битва на выживание разбита на 6 раундов. Каждый раунд идет ровно 4 часа. Время их переключения фиксированное и привязано к обновлению сервера (00:00 UTC / 05:00 МСК):
• Раунд 1: 05:00 — 09:00 МСК
• Раунд 2: 09:00 — 13:00 МСК
• Раунд 3: 13:00 — 17:00 МСК
• Раунд 4: 17:00 — 21:00 МСК
• Раунд 5: 21:00 — 01:00 МСК
• Раунд 6: 01:00 — 05:00 МСК (следующего дня)

2. ЗОЛОТОЕ ПРАВИЛО: ЖДИТЕ НУЖНОГО 4-ЧАСОВОГО ОКНА!
Никогда не тратьте ресурсы вслепую. Сначала откройте внутриигровой календарь (Специальные события -> Битва на выживание -> Календарь) и посмотрите, какая тема активна прямо сейчас или начнется позже в течение дня.

Примеры идеальной синхронизации:
• Понедельник (День Ворона и Эпиграфов в Дуэли): Не спешите открывать сундуки эпиграфов рано утром. Дождитесь 4-часового раунда «Усиление Ворона» (Enhance Raven) в Битве на выживание. Открыв сундуки и прокачав Ворона именно в это время, вы закроете личные сундуки Битвы на выживание и принесете максимум очков в Дуэль.
• День строительства / технологий / обучения войск: Принцип тот же. Ждите раунд в Битве на выживание, который полностью совпадает с темой дня в Дуэли. Если у вас достроилось здание, а нужный раунд начнется через час — не нажимайте на галочку завершения, подождите старта раунда.

3. ПЛАН ДЕЙСТВИЙ ДЛЯ ИГРОКА (АЛГОРИТМ):
• Шаг 1. Наступил новый день Дуэли Альянсов (обновление в 05:00 МСК). Оцените тему дня (Ворон, Стройка, Наука, Войска или Герои).
• Шаг 2. Зайдите в Календарь Битвы на выживание и найдите, в какие именно 4 часа сегодня будет раунд с точно такой же темой.
• Шаг 3. Поставьте напоминание или будильник на это время.
• Шаг 4. Зайдите в игру в это временное окно и максимально слейте накопленные за неделю ресурсы.

ИТОГ: Вы тратите в два раза меньше свитков, сундуков и ускорений, но получаете в два раза больше алмазов, фрагментов героев и ресурсов для развития. Играйте умно!`;

  const handleCopyGuide = () => {
    navigator.clipboard.writeText(fullGuideText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div id="survival-battle-guide-container" className="space-y-6">
      {/* Hero Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-amber-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 border border-amber-500/30 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold">
              <Zap className="w-3.5 h-3.5" />
              <span>ТАКТИЧЕСКИЙ РЕГЛАМЕНТ • X2 НАГРАДЫ</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Секрет Двойных Наград: Синхронизация Дуэли и Битвы на выживание
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Многие игроки совершают грубую ошибку: сливают ресурсы сразу же, как только начинается новый день Дуэли Альянсов. В итоге они забирают награды Дуэли, но полностью упускают очки в <strong>Битве на выживание (Survival Battle)</strong>.
            </p>
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Самая эффективная стратегия — совершать <strong>всего ОДНО действие</strong>, а ценные сундуки и очки капают сразу в <strong>два зачета одновременно</strong>!</span>
            </div>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopyGuide}
            className="self-start md:self-center px-4 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer flex-shrink-0 border border-amber-400/40"
          >
            {copiedText ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Скопировано в буфер!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-100" />
                <span>Скопировать гайд для соклановцев</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Live 4-Hour Rounds Widget */}
      <div className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-100 text-indigo-700">
              <Clock className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-200">
                  1. КАК УСТРОЕНА БИТВА НА ВЫЖИВАНИЕ
                </span>
                <span className="text-xs text-slate-500 font-mono font-bold flex items-center gap-1">
                  ⏱️ Текущее время: <strong className="text-slate-900">{currentMskTime}</strong>
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                6 фиксированных раундов по 4 часа каждый
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>СЕЙЧАС ИДЕТ РАУНД {activeRoundNumber}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          В отличие от Дуэли Альянсов, которая длится полные сутки, Битва на выживание разбита на <strong>6 раундов по 4 часа</strong>. Время их переключения строго фиксированное и привязано к обновлению сервера (00:00 UTC / 05:00 МСК):
        </p>

        {/* 6 Rounds Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {SURVIVAL_ROUNDS.map((round) => {
            const isActive = round.number === activeRoundNumber;
            return (
              <div
                key={round.number}
                className={`p-4 rounded-2xl border transition-all ${
                  isActive
                    ? "bg-gradient-to-br from-indigo-50 to-amber-50 border-2 border-indigo-500 shadow-md scale-[1.02]"
                    : "bg-slate-50/70 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className={`text-xs font-black font-mono px-2 py-0.5 rounded-md ${
                    isActive ? "bg-indigo-600 text-white shadow-2xs" : "bg-slate-200 text-slate-700"
                  }`}>
                    РАУНД {round.number}
                  </span>
                  {isActive && (
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500 text-white flex items-center gap-1">
                      🟢 АКТИВЕН
                    </span>
                  )}
                </div>
                <div className="text-sm font-black text-slate-900 font-mono">
                  {round.timeRange}
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-snug">
                  {round.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Golden Rule: Wait for the 4-Hour Window */}
      <div className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-700">
            <Award className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-200">
              2. ЗОЛОТОЕ ПРАВИЛО
            </span>
            <h2 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
              Ждите нужного 4-часового окна!
            </h2>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950 font-medium leading-relaxed">
          🚨 <strong>Никогда не тратьте ресурсы вслепую!</strong> Сначала откройте внутриигровой календарь:
          <span className="inline-block font-mono font-bold mx-1 px-2 py-0.5 bg-white rounded border border-rose-300">
            Специальные события ➔ Битва на выживание ➔ Календарь
          </span>
          и посмотрите, какая тема активна прямо сейчас или начнется позже в течение дня.
        </div>

        {/* Examples of Ideal Sync */}
        <div className="space-y-3 pt-1">
          <h3 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
            Примеры идеальной синхронизации:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Example 1: Monday */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                  ПОНЕДЕЛЬНИК
                </span>
                <span className="text-xs font-bold text-slate-900">День Ворона и Эпиграфов</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Не спешите открывать сундуки эпиграфов рано утром. Дождитесь 4-часового раунда <strong>«Усиление Ворона» (Enhance Raven)</strong> в Битве на выживание. Открыв сундуки и прокачав Ворона именно в это время, вы закроете личные сундуки Битвы на выживание и одновременно принесете максимум очков в зачет Дуэли!
              </p>
            </div>

            {/* Example 2: Construction / Tech / Troops */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  ВТОРНИК / СРЕДА / ПЯТНИЦА
                </span>
                <span className="text-xs font-bold text-slate-900">Стройка / Наука / Обучение</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Принцип тот же! Ждите 4-часовой раунд в Битве на выживание, который <strong>полностью совпадает с темой дня в Дуэли</strong>. Если у вас достроилось здание или завершилась наука, а нужный раунд начнется через час — <strong>не нажимайте на галочку завершения</strong>, подождите старта раунда!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Step Player Algorithm */}
      <div className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
              3. ПЛАН ДЕЙСТВИЙ ДЛЯ ИГРОКА
            </span>
            <h2 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
              Пошаговый алгоритм максимальной выгоды
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
          {/* Step 1 */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
            <div>
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center mb-2 shadow-2xs">
                01
              </div>
              <h4 className="text-sm font-bold text-slate-900">Оцените тему дня</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                В 05:00 МСК наступает новый день Дуэли. Посмотрите профильную тему: Ворон, Стройка, Наука, Войска или Герои.
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-500 font-bold">05:00 МСК</span>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
            <div>
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-2 shadow-2xs">
                02
              </div>
              <h4 className="text-sm font-bold text-slate-900">Найдите 4-часовое окно</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Зайдите в Календарь Битвы на выживание и найдите, в какие именно 4 часа сегодня будет раунд с точно такой же темой.
              </p>
            </div>
            <span className="text-[11px] font-mono text-indigo-700 font-bold">Календарь события</span>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
            <div>
              <div className="w-7 h-7 rounded-lg bg-amber-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-2 shadow-2xs">
                03
              </div>
              <h4 className="text-sm font-bold text-slate-900">Поставьте напоминание</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Поставьте таймер или будильник на смартфоне на начало нужного раунда, чтобы не пропустить его в суете дня.
              </p>
            </div>
            <span className="text-[11px] font-mono text-amber-700 font-bold">Будильник / Напоминание</span>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
            <div>
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-2 shadow-2xs">
                04
              </div>
              <h4 className="text-sm font-bold text-slate-900">Слейте ресурсы в окно</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Зайдите в игру в это временное окно и максимально слейте накопленные за неделю ресурсы в два события сразу!
              </p>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-bold">x2 Награды получены!</span>
          </div>
        </div>

        {/* Bottom Conclusion Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 border-2 border-emerald-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-800">ГЛАВНЫЙ ИТОГ СТРАТЕГИИ</span>
            <h4 className="text-sm font-black text-slate-900">
              В 2 раза меньше трат — в 2 раза больше алмазов, фрагментов и ресурсов!
            </h4>
            <p className="text-xs text-slate-700">
              Вы тратите в два раза меньше свитков, сундуков и ускорений, но получаете максимальные сундуки в двух событиях одновременно. Играйте умно!
            </p>
          </div>
          <button
            onClick={handleCopyGuide}
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-xs flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
          >
            {copiedText ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copiedText ? "Скопировано!" : "Скопировать алгоритм"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
