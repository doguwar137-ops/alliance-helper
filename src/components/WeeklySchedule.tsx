import React, { useState } from "react";
import {
  Calendar,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
  Hammer,
  FlaskConical,
  ShieldAlert,
  Swords,
  Compass,
  Copy,
  Check,
} from "lucide-react";
import { DUEL_DAYS } from "../data/allianceData";
import { DuelDay } from "../types";

interface WeeklyScheduleProps {
  onSelectDay: (idx: number) => void;
}

const getPhaseIcon = (iconName: string) => {
  switch (iconName) {
    case "Compass":
      return <Compass className="w-5 h-5 text-sky-600" />;
    case "Hammer":
      return <Hammer className="w-5 h-5 text-amber-600" />;
    case "FlaskConical":
      return <FlaskConical className="w-5 h-5 text-blue-600" />;
    case "ShieldAlert":
      return <ShieldAlert className="w-5 h-5 text-purple-600" />;
    case "Swords":
      return <Swords className="w-5 h-5 text-rose-600" />;
    case "Sparkles":
      return <Sparkles className="w-5 h-5 text-emerald-600" />;
    case "Lock":
      return <Lock className="w-5 h-5 text-slate-500" />;
    default:
      return <Zap className="w-5 h-5 text-amber-600" />;
  }
};

export const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({
  onSelectDay,
}) => {
  const [expandedDay, setExpandedDay] = useState<string | null>("wednesday");
  const [copiedDayMailId, setCopiedDayMailId] = useState<string | null>(null);
  const [copiedDayChatId, setCopiedDayChatId] = useState<string | null>(null);
  const [copiedPlanMail, setCopiedPlanMail] = useState<boolean>(false);
  const [copiedPlanChat, setCopiedPlanChat] = useState<boolean>(false);

  const toggleExpand = (id: string) => {
    setExpandedDay(expandedDay === id ? null : id);
  };

  const handleCopyDay = (day: DuelDay) => {
    const text =
      day.exactMailTemplate ||
      `${day.name.toUpperCase()}
${day.phaseName}

Главные задачи:
${day.allowedActions.map((a) => `- ${a}`).join("\n")}

Дополнительно:
${day.tips.map((t) => `- ${t}`).join("\n")}`;

    navigator.clipboard.writeText(text);
    setCopiedDayMailId(day.id);
    setTimeout(() => setCopiedDayMailId(null), 2500);
  };

  const handleCopyDayChat = (day: DuelDay) => {
    const text = day.shortChatTemplate || `${day.name.replace(/ \([^)]+\)/, '')}: ${day.phaseName.replace(/ \([^)]+\)/, '')}.`;
    navigator.clipboard.writeText(text);
    setCopiedDayChatId(day.id);
    setTimeout(() => setCopiedDayChatId(null), 2500);
  };

  const handleCopyWeeklyPlan = () => {
    const planText = `ПЛАН СБРОСА РЕСУРСОВ НА НЕДЕЛЬКУ (ДУЭЛЬ АЛЬЯНСА):

День 1 (Пн): Ворон и Эпиграфы — Сдача Сокола. Улучшаем Ворона эссенцией, открываем сундуки эпиграфов. Регистрация на Гонку за эликсиром (Команда А — 14:00 МСК, Команда Б — 23:00 МСК, или напишите R4). Строительные ускорения строго КОПИМ на День 2!
День 2 (Вт): Развитие Территории (Строительство) — Стройка (молоток жмем строго после старта фазы), ускоры стройки, караваны UR и тайные операции UR на чужих серверах. Регистрация на Гонку за эликсиром (А 14:00 / Б 23:00 МСК, или напишите R4).
День 3 (Ср): Технологические Исследования — Сдача Сокола. Исследования, сундуки снаряжения Ворона. ПОСЛЕДНИЙ ДЕНЬ регистрации на Гонку за эликсиром (если не можете сами — напишите R4)! Ускорители обучения КОПИМ на День 5!
День 4 (Чт): Рост Героя (Прокачка) — Прокачка UR и SSR героев основы, звезды SR, навыки, найм, антитоксин. Сокола копим! Сегодня подбор соперника на Гонку за эликсиром — завтра в пятницу битва!
День 5 (Пт): Подготовка к Войне — Финальный массовый сбор Сокола! Тренируем солдат высшего ранга. СЕГОДНЯ ГОНКА ЗА ЭЛИКСИРОМ (Команда А в 14:00 МСК, Команда Б в 23:00 МСК, длительность 30 мин)! На ночь обязательно ставим щит!
День 6 (Сб): Рейд на Врага (Война Серверов) — Рейд с СБ на ВС по МСК. Атакуем базы врагов, отправляем караваны UR и проводим тайные операции UR на чужих серверах! Щит в ночь с ПТ на СБ, нет щита — войска долой со стен!
День 7 (Вс): Режим Копилки — СТОП тратам! Полный режим сбережения ресурсов и ускорителей. Сокола не забираем. Сбор ресурсов, долгие стройки и наука на ПН.

Важное правило на всю неделю: Универсальные ускорения в ноль не сливаем — оставляем стратегический резерв на случай экстренного лечения войск и защиты базы!`;
    navigator.clipboard.writeText(planText);
    setCopiedPlanMail(true);
    setTimeout(() => setCopiedPlanMail(false), 2500);
  };

  const handleCopyWeeklyPlanChat = () => {
    const planText = `ДУЭЛЬ: ПН–СР Регистрация на Гонку за эликсиром (А 14:00 / Б 23:00 МСК, или напишите R4) | ЧТ-Герои + подбор на Гонку | ПТ-Войска/Сокол + ГОНКА ЗА ЭЛИКСИРОМ (14:00 и 23:00 МСК, 30 мин) + Щит на ночь! | СБ-Рейд | ВС-Копилка!`;
    navigator.clipboard.writeText(planText);
    setCopiedPlanChat(true);
    setTimeout(() => setCopiedPlanChat(false), 2500);
  };

  return (
    <div id="weekly-schedule-container" className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-2xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-amber-600" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Недельный Календарь Дуэли Альянсов
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Жесткое недельное расписание фаз. Сдача Заданий Сокола в профильные дни: Понедельник, Среда и Пятница. В субботу — лечение войск, засады UR, бесплатные щиты и максимальный набор очков.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-shrink-0 w-full lg:w-auto">
          <button
            onClick={handleCopyWeeklyPlan}
            className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-amber-600"
          >
            {copiedPlanMail ? (
              <>
                <Check className="w-4 h-4 text-white animate-in zoom-in-50 duration-200" />
                <span>План скопирован!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-white" />
                <span>Скопировать для почты Альянса</span>
              </>
            )}
          </button>
          <button
            onClick={handleCopyWeeklyPlanChat}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-slate-300"
          >
            {copiedPlanChat ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 animate-in zoom-in-50 duration-200" />
                <span className="text-emerald-700">Скопировано в чат!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500" />
                <span>Скопировать для чата</span>
              </>
            )}
          </button>
          <span className="text-xs font-mono px-3 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold shadow-2xs text-center">
            Обязательное участие
          </span>
        </div>
      </div>

      {/* 7 Days Grid / Accordion */}
      <div className="space-y-3">
        {DUEL_DAYS.map((day: DuelDay, idx: number) => {
          const isExpanded = expandedDay === day.id;
          const isClaimDay =
            day.falconRule.action === "CLAIM" ||
            day.falconRule.action === "CLAIM_PREVIOUS" ||
            day.falconRule.action === "CLAIM_ALL";

          return (
            <div
              key={day.id}
              id={`schedule-card-${day.id}`}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? "bg-white border-amber-400 shadow-xs"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-2xs"
              }`}
            >
              {/* Header row */}
              <div
                onClick={() => toggleExpand(day.id)}
                className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 flex-shrink-0">
                    {getPhaseIcon(day.iconName)}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono font-bold text-amber-700">
                        ДЕНЬ {idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 truncate">
                        {day.name}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                        {day.badge}
                      </span>
                      {(day.id === "monday" ||
                        day.id === "tuesday" ||
                        day.id === "wednesday") && (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200 font-bold">
                          🧪 Запись на Гонку (А 14:00 / Б 23:00)
                        </span>
                      )}
                      {day.id === "thursday" && (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200 font-bold">
                          🧪 Подбор на Гонку (Завтра бой!)
                        </span>
                      )}
                      {day.id === "friday" && (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-rose-100 text-rose-900 border border-rose-300 font-extrabold">
                          🧪 СЕГОДНЯ ГОНКА: 14:00 и 23:00 МСК (30 мин)
                        </span>
                      )}
                      <span
                        className={`sm:hidden inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded font-bold font-mono ${
                          isClaimDay
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                            : "bg-rose-50 text-rose-800 border border-rose-200"
                        }`}
                      >
                        {isClaimDay ? "🦅 СДАЧА" : "🔒 КОПИМ"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5 truncate max-w-xl">
                      {day.focus}
                    </p>
                  </div>
                </div>

                {/* Right Badges & Toggle */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  {/* Falcon status badge */}
                  <span
                    className={`hidden sm:inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg font-bold font-mono ${
                      isClaimDay
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                        : "bg-rose-50 text-rose-800 border border-rose-200"
                    }`}
                  >
                    {isClaimDay ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" /> СДАЧА СОКОЛА
                      </>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5" /> СОКОЛ В КОПИЛКЕ
                      </>
                    )}
                  </span>

                  <button
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                    aria-label="Toggle details"
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-amber-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded details */}
              {isExpanded && (
                <div className="border-t border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-4">
                  {/* Falcon rule banner */}
                  <div
                    className={`p-3.5 rounded-xl border text-xs sm:text-sm ${
                      isClaimDay
                        ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                        : "bg-rose-50 border-rose-200 text-rose-900"
                    }`}
                  >
                    <div className="font-bold flex items-center gap-2">
                      {isClaimDay ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <Lock className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      )}
                      <span>ПРАВИЛО СОКОЛА: {day.falconRule.title}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                      {day.falconRule.description}
                    </p>
                    {day.falconRule.warning && (
                      <p
                        className={`text-xs font-bold mt-2 flex items-center gap-1.5 ${
                          isClaimDay ? "text-emerald-700" : "text-rose-700"
                        }`}
                      >
                        <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                        {day.falconRule.warning}
                      </p>
                    )}
                  </div>

                  {/* Allowed actions */}
                  <div className="p-3.5 rounded-xl bg-white border border-emerald-200 shadow-2xs text-xs">
                    <div className="font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Что ДЕЛАТЬ сегодня (Тратить / Качать):
                    </div>
                    <ul className="space-y-1.5 text-slate-700">
                      {day.allowedActions.map((act, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Saturday Special Block: Shields and Teleportation */}
                  {day.id === "saturday" && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs space-y-2">
                      <div className="font-extrabold text-rose-900 flex items-center gap-1.5 text-sm">
                        <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0" />
                        <span>Щиты и телепортация</span>
                      </div>
                      <p className="text-slate-800 leading-relaxed">
                        Защитный щит желательно активировать ещё в пятницу вечером. Во время КвК вашу крепость может атаковать не только дуэльный соперник, но и любые другие игроки вражеского королевства.
                      </p>
                      <p className="text-slate-800 leading-relaxed">
                        Помните: после вашей собственной атаки щит автоматически снимается и включается режим <strong>«боевого безумия»</strong>. Он длится 15 минут. Если в течение этого времени вы не совершите новых атак, режим спадет и вы снова сможете надеть щит. В этот опасный период лучше сразу телепортироваться в безопасную точку — подальше от места сбора альянса. Возвращаться на территорию своего альянса рекомендуется только после того, как вы снова будете под защитой щита.
                      </p>
                      <p className="text-slate-800 leading-relaxed font-semibold">
                        В сумке всегда должен быть запас из щитов и нескольких телепортов. Бесплатного 8-часового щита обычно не хватает, чтобы перекрыть весь опасный период события.
                      </p>
                    </div>
                  )}

                  {/* Accumulation Mode Block */}
                  {day.accumulation && day.accumulation.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs">
                      <div className="font-bold text-amber-800 mb-2 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-amber-600" />
                        <span>Накопительный режим — Что мы копим сегодня:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        {day.accumulation.map((item, i) => (
                          <div key={i} className="bg-white/80 p-2.5 rounded-lg border border-amber-100 flex flex-col justify-between shadow-3xs">
                            <div>
                              <span className="font-semibold text-slate-800 block">{item.item}</span>
                              <span className="text-[11px] text-slate-600 mt-0.5 block">{item.description}</span>
                            </div>
                            <div className="mt-2.5 flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded-md w-fit">
                              <span className="uppercase font-mono text-[9px] text-amber-900 opacity-80">Понадобится:</span>
                              <span>{item.targetDay}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 border-t border-slate-200 gap-3">
                    <div className="text-xs text-slate-600">
                      <span className="font-semibold text-slate-800">Ускорители:</span>{" "}
                      {day.recommendedSpeedups.join(", ")}
                    </div>

                    <div className="grid grid-cols-1 sm:flex sm:items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => handleCopyDay(day)}
                        className="justify-center px-3.5 py-2 sm:py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
                      >
                        {copiedDayMailId === day.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Скопировано!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>Скопировать для почты Альянса</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handleCopyDayChat(day)}
                        className="justify-center px-3.5 py-2 sm:py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-300 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
                      >
                        {copiedDayChatId === day.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">В чат скопировано!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>Скопировать для чата</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => onSelectDay(idx)}
                        className="justify-center px-3.5 py-2 sm:py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold border border-amber-600 transition-colors shadow-2xs cursor-pointer"
                      >
                        Перейти в директиву дня
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
