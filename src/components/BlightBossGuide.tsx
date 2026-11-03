import React, { useState } from "react";
import {
  Skull,
  Flame,
  Sparkles,
  ScrollText,
  Swords,
  Wand2,
  Crosshair,
  ShieldPlus,
  HandMetal,
  Shuffle,
  Copy,
  Check,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Trophy,
  Info,
} from "lucide-react";

const FULL_BLIGHT_BOSS_MAIL = `👾 БОСС СКВЕРНЫ: КАК НАБИТЬ МАКСИМАЛЬНЫЙ УРОН (ПАМЯТКА АЛЬЯНСА)

🔥 1. ОСНОВНЫЕ ЭТАПЫ ПОДГОТОВКИ ПЕРЕД БОЕМ:
• Боевое безумие: Перед началом боя ОБЯЗАТЕЛЬНО активируйте статус «Боевое безумие». Если на сервере мир — пошлите разведку на любого игрока (без щита) и сразу верните её!
• Усиления и Облики: Активируйте специальные декоративные предметы (украшения, облики, например, облик «Ворон»), которые дают бонус к урону по монстрам.
• Эпиграфы: Обязательно установите эпиграфы, строго соответствующие типу войск, которыми вы атакуете босса.

⚔️ 2. СОСТАВ ОТРЯДОВ («СТАБИЛЬНЫЕ ПАЧКИ»):
Используем «стабильные пачки» с обязательным включением фиолетовых героев поддержки:
• Для Воинов: Основной упор на Клэр (навык «Зов храбрых»).
• Для Колдунов: Важна Стелла с навыком «Метеоритный дождь».
• Для Рейнджеров: Ключевой герой — Эш.
• Герои поддержки (Универсальные бафферы): Белл (+40% к атаке) и Харпер — универсальны и обязательны для разгона урона!

🧤 3. СЕКРЕТЫ СНАРЯЖЕНИЯ И РАССТАНОВКИ (КЛЮЧ К РЕКОРДУ):
• Фиолетовая перчатка 30-го уровня: Самый важный элемент снаряжения для босса! Надевайте фиолетовые перчатки 30-го уровня НЕ на главного ДД, а НА ГЕРОЕВ ПОДДЕРЖКИ, чтобы усилить их эффективность и выживаемость.
• Эксперименты с расстановкой (Ловля крита): Меняйте порядок героев в отряде — например, поставьте Харпера или Марлену в ПЕРВЫЙ РЯД. Это поможет «поймать» мощный крит и побить личный рекорд урона!`;

const SHORT_BLIGHT_BOSS_CHAT = `👾 БОСС СКВЕРНЫ (МАКС УРОН): 1) Включаем Боевое безумие (разведка на игрока и сразу назад) + облик Ворон + Эпиграфы по типу войск. 2) Пачки: Воины — Клэр (Зов храбрых), Колдуны — Стелла (Метеоритный дождь), Рейнджеры — Эш + обязательно саппорты Белл (+40% атаки) и Харпер. 3) ГЛАВНЫЙ СЕКРЕТ: Фиолетовые перчатки 30 ур. надеваем НЕ на главного ДД, а на ГЕРОЕВ ПОДДЕРЖКИ! Экспериментируйте с расстановкой (Харпер или Марлена в 1-й ряд), чтобы поймать крит и побить рекорд!`;

interface ChecklistItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tip: string;
}

const PREP_CHECKLIST: ChecklistItem[] = [
  {
    id: "frenzy",
    title: "1. Боевое безумие (Обязательно перед боем)",
    subtitle: "+Атака отрядов на 15 минут",
    description:
      "Перед началом боя обязательно активируйте статус «Боевое безумие». Если на сервере мир, просто пошлите разведку на любого игрока без щита и сразу же верните её обратно.",
    tip: "Лайфхак: даже 1 секунда отправленной и отозванной разведки мгновенно включает бафф Боевого безумия без потери войск!",
  },
  {
    id: "buffs",
    title: "2. Усиления, украшения и Облики («Ворон»)",
    subtitle: "Бонус к урону по монстрам",
    description:
      "Используйте специальные декоративные предметы, украшения и боевые облики (как, например, облик «Ворон»), которые дают прямой бонус к урону по монстрам.",
    tip: "Проверьте активные облики и декорации перед серией ударов — бонус по монстрам перемножается с баффами отряда.",
  },
  {
    id: "epigraphs",
    title: "3. Профильные Эпиграфы по типу войск",
    subtitle: "Точное соответствие ударной пачке",
    description:
      "Обязательно установите эпиграфы, строго соответствующие тому типу войск (Воины, Колдуны или Рейнджеры), которыми вы атакуете босса.",
    tip: "Перед боем убедитесь, что вы не оставили эпиграфы от другого типа войск после арены или прошлых событий.",
  },
];

export const BlightBossGuide: React.FC = () => {
  const [copiedMail, setCopiedMail] = useState(false);
  const [copiedChat, setCopiedChat] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({
    frenzy: false,
    buffs: false,
    epigraphs: false,
  });

  const toggleStep = (id: string) => {
    setCheckedSteps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedSteps).filter(Boolean).length;

  const handleCopyMail = () => {
    navigator.clipboard.writeText(FULL_BLIGHT_BOSS_MAIL);
    setCopiedMail(true);
    setTimeout(() => setCopiedMail(false), 2500);
  };

  const handleCopyChat = () => {
    navigator.clipboard.writeText(SHORT_BLIGHT_BOSS_CHAT);
    setCopiedChat(true);
    setTimeout(() => setCopiedChat(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Top Hero Header */}
      <div className="rounded-2xl bg-white border border-purple-200 shadow-xs overflow-hidden">
        <div className="bg-gradient-to-r from-purple-50 via-white to-amber-50/70 border-b border-purple-200/80 p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-purple-600 text-white shadow-sm flex-shrink-0">
                <Skull className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-900 border border-purple-300">
                    ТАКТИЧЕСКИЙ ГАЙД • PVE РЕКОРД
                  </span>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                    ФИОЛЕТОВЫЕ ПЕРЧАТКИ 30 УР.
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1.5 tracking-tight">
                  Как правильно бить Босса Скверны
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                  Полное руководство по подготовке, сборке «стабильных пачек» с{" "}
                  <strong className="text-slate-900">Белл (+40% к атаке)</strong> и{" "}
                  <strong className="text-slate-900">Харпером</strong>, а также главный секрет{" "}
                  <strong className="text-purple-800">фиолетовых перчаток 30-го уровня</strong> для рекорда урона.
                </p>
              </div>
            </div>

            {/* Copy Buttons for Alliance Mail & Chat */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-2 flex-shrink-0">
              <button
                onClick={handleCopyMail}
                className="w-full sm:w-auto justify-center flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-all shadow-xs cursor-pointer"
              >
                {copiedMail ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Скопировано для почты!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Скопировать гайд (Почта)</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyChat}
                className="w-full sm:w-auto justify-center flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-semibold text-xs transition-all cursor-pointer"
              >
                {copiedChat ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Скопировано в чат!</span>
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
        </div>

        {/* Section 1: Interactive Pre-Fight Preparation Stages */}
        <div className="p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-800 border border-amber-200">
                <Flame className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  1. Основные этапы подготовки перед боем
                </h3>
                <p className="text-xs text-slate-500">
                  Отметьте все 3 пункта перед тем, как отправлять ударный марш на Босса Скверны
                </p>
              </div>
            </div>
            <span
              className={`text-xs font-mono font-bold px-3 py-1 rounded-full border self-start sm:self-auto ${
                completedCount === 3
                  ? "bg-emerald-100 text-emerald-900 border-emerald-300"
                  : "bg-slate-100 text-slate-700 border-slate-200"
              }`}
            >
              Готовность к бою: {completedCount} / 3
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {PREP_CHECKLIST.map((item, idx) => {
              const isChecked = !!checkedSteps[item.id];
              const icons = [Flame, Sparkles, ScrollText];
              const StepIcon = icons[idx] || Flame;

              return (
                <div
                  key={item.id}
                  onClick={() => toggleStep(item.id)}
                  className={`rounded-xl border p-4 transition-all cursor-pointer select-none flex flex-col justify-between ${
                    isChecked
                      ? "bg-emerald-50/70 border-emerald-300 shadow-2xs"
                      : "bg-slate-50/70 hover:bg-slate-50 border-slate-200"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2.5 mb-2.5">
                      <div
                        className={`p-2 rounded-lg border ${
                          isChecked
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white text-amber-600 border-slate-200"
                        }`}
                      >
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <button
                        type="button"
                        className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 border transition-colors ${
                          isChecked
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white text-slate-600 border-slate-300"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isChecked ? "Выполнено" : "Отметить"}</span>
                      </button>
                    </div>

                    <span className="text-[11px] font-mono font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200 inline-block mb-1.5">
                      {item.subtitle}
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-[11px] text-slate-600 flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{item.tip}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section 2: Squad Compositions ("Стабильные пачки") */}
      <div className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700 border border-indigo-200 flex-shrink-0">
              <Swords className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 border border-indigo-200">
                  РЕКОМЕНДАЦИЯ ПО ОТРЯДАМ
                </span>
                <span className="text-xs font-bold text-purple-700">
                  «Стабильные пачки» + Фиолетовые герои поддержки
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
                2. Состав отрядов по типам войск
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Рекомендуется использовать проверенные «стабильные пачки» с обязательным включением фиолетовых героев поддержки для максимального разгона урона.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Troop Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Warriors */}
          <div className="rounded-xl bg-rose-50/60 border border-rose-200 p-4 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-rose-100 text-rose-900 border border-rose-300">
                  ДЛЯ ВОИНОВ
                </span>
                <Swords className="w-5 h-5 text-rose-600" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900">
                Ключевой герой: Клэр
              </h4>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-rose-200 text-xs font-bold text-rose-900">
                <Zap className="w-3.5 h-3.5 text-rose-600" />
                <span>Навык: «Зов храбрых»</span>
              </div>
              <p className="text-xs text-slate-700 mt-2.5 leading-relaxed">
                При игре от пехоты/воинов основной упор делается на <strong>Клэр</strong> и реализацию её ключевого навыка <strong>«Зов храбрых»</strong> под баффами героев поддержки.
              </p>
            </div>
          </div>

          {/* Sorcerers / Mages */}
          <div className="rounded-xl bg-sky-50/60 border border-sky-200 p-4 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-900 border border-sky-300">
                  ДЛЯ КОЛДУНОВ
                </span>
                <Wand2 className="w-5 h-5 text-sky-600" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900">
                Ключевой герой: Стелла
              </h4>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-sky-200 text-xs font-bold text-sky-900">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Навык: «Метеоритный дождь»</span>
              </div>
              <p className="text-xs text-slate-700 mt-2.5 leading-relaxed">
                Для магических пачек (колдунов) критически важна <strong>Стелла</strong> со своим ультимативным уроном от навыка <strong>«Метеоритный дождь»</strong>.
              </p>
            </div>
          </div>

          {/* Rangers */}
          <div className="rounded-xl bg-emerald-50/60 border border-emerald-200 p-4 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300">
                  ДЛЯ РЕЙНДЖЕРОВ
                </span>
                <Crosshair className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900">
                Ключевой герой: Эш
              </h4>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-emerald-200 text-xs font-bold text-emerald-900">
                <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                <span>Главный ДД стрелков</span>
              </div>
              <p className="text-xs text-slate-700 mt-2.5 leading-relaxed">
                При атаке рейнджерами ключевым героем выступает <strong>Эш</strong> — основной источник урона по Боссу Скверны.
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Purple Support Heroes Banner: Bella & Harper */}
        <div className="rounded-xl bg-gradient-to-r from-purple-50 via-fuchsia-50/60 to-amber-50/50 border border-purple-300 p-4 sm:p-5 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-purple-600 text-white shadow-2xs flex-shrink-0">
                <ShieldPlus className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded bg-purple-200/90 text-purple-950 border border-purple-300">
                    ОБЯЗАТЕЛЬНЫЕ ГЕРОИ ПОДДЕРЖКИ
                  </span>
                  <span className="text-xs font-extrabold text-purple-900">
                    Универсальный разгон урона для любой пачки
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
                  Белл (+40% к атаке) и Харпер
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                  Такие фиолетовые персонажи поддержки, как{" "}
                  <strong className="text-purple-950 bg-purple-100 px-1.5 py-0.5 rounded border border-purple-200">
                    Белл (дает +40% к атаке)
                  </strong>{" "}
                  и{" "}
                  <strong className="text-purple-950 bg-purple-100 px-1.5 py-0.5 rounded border border-purple-200">
                    Харпер
                  </strong>
                  , абсолютно универсальны для разгона урона и обязательно включаются в «стабильные пачки» на Босса Скверны.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Gear & Formation Secrets */}
      <div className="rounded-2xl bg-white border border-amber-300 p-4 sm:p-6 shadow-xs space-y-5">
        <div className="flex items-start gap-3 border-b border-amber-200/80 pb-4">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-300 flex-shrink-0">
            <HandMetal className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-amber-200/80 text-amber-950 border border-amber-300">
                КЛЮЧЕВАЯ МЕХАНИКА
              </span>
              <span className="text-xs font-bold text-rose-700">
                Главный секрет максимизации урона
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
              3. Секреты снаряжения и расстановки героев
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Правильное перераспределение снаряжения и смена рядов позволяют кратно увеличить итоговый урон по боссу.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Secret 1: Purple Glove Lv. 30 */}
          <div className="rounded-xl bg-purple-50/70 border-2 border-purple-300 p-4 sm:p-5 space-y-3 shadow-2xs">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-xs font-mono font-extrabold uppercase px-2.5 py-1 rounded-md bg-purple-700 text-white shadow-2xs">
                🧤 ФИОЛЕТОВАЯ ПЕРЧАТКА 30-ГО УРОВНЯ
              </span>
              <span className="text-[11px] font-bold text-purple-900 bg-purple-100 px-2.5 py-0.5 rounded border border-purple-200">
                Самый важный предмет на босса
              </span>
            </div>

            <h4 className="text-base font-extrabold text-slate-900">
              Надеваем НЕ на главного ДД, а на героев поддержки!
            </h4>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Фиолетовая перчатка — это самый важный элемент снаряжения для Босса Скверны. Необходимо использовать{" "}
              <strong className="text-purple-950">фиолетовые перчатки 30-го уровня</strong>.
            </p>

            <div className="p-3 rounded-lg bg-white border border-purple-200 text-xs space-y-1.5">
              <div className="font-extrabold text-rose-700 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>ПОЧЕМУ ИМЕННО НА ПОДДЕРЖКУ (БЕЛЛ / ХАРПЕР):</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Их следует надевать <strong>не на главного ДД</strong> (Клэр / Стеллу / Эш), а{" "}
                <strong>на героев поддержки</strong>, чтобы максимально усилить их эффективность, разгон баффов и выживаемость на протяжении всего боя.
              </p>
            </div>
          </div>

          {/* Secret 2: Formation Experiments */}
          <div className="rounded-xl bg-amber-50/70 border-2 border-amber-300 p-4 sm:p-5 space-y-3 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-mono font-extrabold uppercase px-2.5 py-1 rounded-md bg-amber-600 text-white shadow-2xs flex items-center gap-1.5">
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>ЭКСПЕРИМЕНТЫ С РАССТАНОВКОЙ</span>
                </span>
                <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-200">
                  Ловля крита и новый рекорд
                </span>
              </div>

              <h4 className="text-base font-extrabold text-slate-900">
                Харпер или Марлена в первый ряд для «ловли» крита
              </h4>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Не бейте босса всегда одной и той же застывшей расстановкой! Изменение порядка героев в отряде напрямую влияет на тайминги навыков и выпадение критических ударов.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white border border-amber-200 text-xs space-y-1.5">
              <div className="font-extrabold text-amber-900 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>ПРАКТИЧЕСКИЙ ПРИЕМ ДЛЯ РЕКОРДА:</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Попробуйте переставить <strong>Харпера</strong> или <strong>Марлену в первый ряд</strong>. Такая смена позиций помогает удачно «поймать» мощный крит в окно баффов и побить свой рекорд урона!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
