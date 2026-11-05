import React, { useState } from "react";
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Copy,
  Check,
  Sparkles,
  Zap,
  Lock,
  ArrowRight,
  Info,
  FlaskConical,
  Castle,
  Crown,
  Skull,
} from "lucide-react";
import { DUEL_DAYS } from "../data/allianceData";
import { DuelDay } from "../types";

interface TodayDirectiveProps {
  selectedDayIndex: number;
  setSelectedDayIndex: (idx: number) => void;
  onOpenRules?: () => void;
  onOpenSanctuary?: () => void;
  onOpenGearRoadmap?: () => void;
  onOpenMinisters?: () => void;
  onOpenEraRevival?: () => void;
  onOpenBlightBoss?: () => void;
  onOpenHeroSkills?: () => void;
}

export const TodayDirective: React.FC<TodayDirectiveProps> = ({
  selectedDayIndex,
  setSelectedDayIndex,
  onOpenRules,
  onOpenSanctuary,
  onOpenGearRoadmap,
  onOpenMinisters,
  onOpenEraRevival,
  onOpenBlightBoss,
  onOpenHeroSkills,
}) => {
  const [copiedMail, setCopiedMail] = useState(false);
  const [copiedChat, setCopiedChat] = useState(false);
  const currentDay: DuelDay = DUEL_DAYS[selectedDayIndex] || DUEL_DAYS[0];

  const handleCopyOrder = () => {
    const text =
      currentDay.exactMailTemplate ||
      `${currentDay.name.toUpperCase()}
${currentDay.phaseName}
Главные задачи: ${currentDay.allowedActions.join(", ")}
Дополнительно: ${currentDay.tips.join(", ")}`;

    navigator.clipboard.writeText(text);
    setCopiedMail(true);
    setTimeout(() => setCopiedMail(false), 2500);
  };

  const handleCopyOrderChat = () => {
    const text =
      currentDay.shortChatTemplate ||
      `${currentDay.name}: ${currentDay.focus}.`;
    navigator.clipboard.writeText(text);
    setCopiedChat(true);
    setTimeout(() => setCopiedChat(false), 2500);
  };

  const isFalconClaimDay =
    currentDay.falconRule.action === "CLAIM" ||
    currentDay.falconRule.action === "CLAIM_PREVIOUS" ||
    currentDay.falconRule.action === "CLAIM_ALL";

  const shortDayLabels = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  return (
    <div id="today-directive-container" className="space-y-4 sm:space-y-6">
      {/* Day Selector Pills: 7-column compact single row on mobile, full pills on sm+ */}
      <div className="grid grid-cols-7 gap-1 sm:flex sm:flex-wrap sm:items-center sm:gap-1.5 pb-1">
        {DUEL_DAYS.map((day, idx) => {
          const isSelected = selectedDayIndex === idx;
          const isFalconDay =
            day.id === "monday" || day.id === "wednesday" || day.id === "friday";
          return (
            <button
              key={day.id}
              id={`day-tab-${day.id}`}
              onClick={() => setSelectedDayIndex(idx)}
              className={`relative px-1.5 sm:px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 cursor-pointer ${
                isSelected
                  ? "bg-amber-600 text-white shadow-xs sm:scale-[1.01]"
                  : "bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-2xs"
              }`}
            >
              <span className="text-[10px] sm:text-xs opacity-75">Д{idx + 1}</span>
              <span className="sm:hidden text-[11px] font-extrabold leading-tight">
                {shortDayLabels[idx]}
              </span>
              <span className="hidden sm:inline">{day.name}</span>
              {isFalconDay ? (
                <>
                  <span
                    className={`sm:hidden w-1.5 h-1.5 rounded-full ${
                      isSelected ? "bg-emerald-200" : "bg-emerald-500"
                    }`}
                    title="День сдачи Сокола"
                  />
                  <span className="hidden sm:inline-block text-[10px] px-1 py-0.2 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold">
                    Сокол
                  </span>
                </>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Main Tactical Directive Card */}
      <div className="relative rounded-2xl bg-white border border-slate-200 p-3.5 sm:p-6 shadow-2xs overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-4 sm:pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold font-mono tracking-wide">
                ФАЗА {currentDay.phaseNumber} ИЗ 7
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold">
                {currentDay.badge}
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {currentDay.name}: {currentDay.phaseName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              {currentDay.focus}
            </p>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-1 sm:flex sm:items-center gap-2 sm:gap-2.5 w-full lg:w-auto">
            <button
              id="copy-order-btn"
              onClick={handleCopyOrder}
              className="flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors shadow-2xs cursor-pointer w-full sm:w-auto"
            >
              {copiedMail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Скопировано для почты!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Скопировать для почты Альянса</span>
                </>
              )}
            </button>
            <button
              id="copy-order-chat-btn"
              onClick={handleCopyOrderChat}
              className="flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-300 transition-colors shadow-2xs cursor-pointer w-full sm:w-auto"
            >
              {copiedChat ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">В чат скопировано!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Скопировать для чата</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Falcon Rules Hero Alert */}
        <div className="mt-4 sm:mt-5">
          <div
            className={`rounded-xl p-3.5 sm:p-5 border transition-all ${
              isFalconClaimDay
                ? "bg-emerald-50 border-emerald-200 text-emerald-900 shadow-2xs"
                : "bg-rose-50 border-rose-200 text-rose-900 shadow-2xs"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-3.5">
              <div
                className={`p-2 sm:p-2.5 rounded-lg flex-shrink-0 ${
                  isFalconClaimDay ? "bg-emerald-200 text-emerald-800" : "bg-rose-200 text-rose-800"
                }`}
              >
                {isFalconClaimDay ? (
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700" />
                ) : (
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-rose-700" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span
                    className={`text-[11px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wide font-mono ${
                      isFalconClaimDay
                        ? "bg-emerald-200/80 text-emerald-900 border border-emerald-300"
                        : "bg-rose-200/80 text-rose-900 border border-rose-300"
                    }`}
                  >
                    ПРАВИЛА ЗАДАНИЙ СОКОЛА
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-medium">
                    Соколиная башня
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-500 text-white font-mono flex items-center gap-1 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    🔴 Красный кружок = Выполнено
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mt-1.5 text-slate-900">
                  {currentDay.falconRule.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                  {currentDay.falconRule.description}
                </p>

                {/* Clear Explanatory Step Badge for Falcon Mission mechanics */}
                <div className={`mt-3 p-3 rounded-lg border text-xs leading-relaxed ${
                  isFalconClaimDay 
                    ? "bg-emerald-100/70 border-emerald-300 text-emerald-950" 
                    : "bg-amber-50 border-amber-300 text-amber-950"
                }`}>
                  <div className="font-extrabold flex items-center gap-1.5 mb-1.5">
                    {isFalconClaimDay ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>ИНСТРУКЦИЯ СДАЧИ: ЖМЕМ «ЗАБРАТЬ ВСЕ»</span>
                      </>
                    ) : (
                      <>
                        <span className="text-base leading-none">🔴</span>
                        <span>ПОЧЕМУ ВАЖНО ВЫПОЛНЯТЬ, НО НЕ ЗАБИРАТЬ:</span>
                      </>
                    )}
                  </div>
                  {isFalconClaimDay ? (
                    <div className="space-y-1">
                      <p>
                        Заходите в Соколиную башню и жмите кнопку <strong>«Забрать все»</strong> по всем накопленным заданиям с <strong>красными кружками 🔴</strong>! Все накопленные очки мгновенно зачтутся в суточные цели Дуэли Альянсов!
                      </p>
                      <p className="text-emerald-900 font-bold bg-emerald-100/60 p-2 rounded-lg border border-emerald-300">
                        ⚡ <strong>Важное уточнение:</strong> если после сбора в течение дня у вас появляются новые задания в башне — обязательно отправляйте отряды, выполняйте их и сразу забирайте награды весь день до конца суток!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <p>
                        <strong>1. Задания ОБЯЗАТЕЛЬНО выполнять:</strong> отправляйте отряды на все задания в башне, не давайте компасам простаивать!
                      </p>
                      <p>
                        <strong>2. Дождитесь КРАСНОГО КРУЖКА 🔴:</strong> появление красного кружка означает, что задание успешно завершено. Оно <strong>НЕ пропадет</strong> и <strong>НЕ сгорит</strong>!
                      </p>
                      <p className="text-rose-800 font-bold">
                        3. Кнопку «Забрать» НЕ трогаем! Держим все готовые миссии на карте башни до дня сдачи (например, до пятницы на фазу войск).
                      </p>
                    </div>
                  )}
                </div>

                {currentDay.falconRule.warning && (
                  <p
                    className={`text-xs font-bold mt-2.5 flex items-center gap-1.5 ${
                      isFalconClaimDay ? "text-emerald-700" : "text-rose-700"
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                    {currentDay.falconRule.warning}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Monday Special Banner: Epigraphs and Raven Upgrade System */}
        {currentDay.id === "monday" && (
          <div className="mt-4 p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-slate-900 shadow-2xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-200/80 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100 border border-amber-200 text-amber-700">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-amber-200/80 text-amber-900 border border-amber-300">
                      СИСТЕМА ЭПИГРАФОВ И ВОРОНА
                    </span>
                    <span className="text-xs font-bold text-amber-800">ГЛАВНЫЙ СЕКРЕТ ПОНЕДЕЛЬНИКА</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                    Как это работает и почему именно в понедельник:
                  </h3>
                </div>
              </div>
            </div>

            {/* 2 Core Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-white border border-amber-200/80 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs">
                  <Zap className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>1. Набор очков для Дуэли</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Понедельник стал ключевым днем, когда за прокачку системы Ворона (использование эссенций, фруктов) и за открытие сундуков с эпиграфами начисляется <strong>огромное количество очков в зачет состязания</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-amber-200/80 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>2. Двойная выгода</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Копить сундуки эпиграфов (зеленые, синие, фиолетовые, золотые) в течение недели и открывать их <strong>исключительно по понедельникам</strong> считается самой эффективной стратегией. Вы одновременно развиваете Ворона и продвигаете свой альянс к наградам этапа.
                </p>
              </div>
            </div>

            {/* Critical Rules to Remember */}
            <div className="p-4 rounded-xl bg-white border border-amber-200 space-y-2 shadow-2xs">
              <div className="text-xs font-bold text-amber-900 uppercase tracking-wide flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-600" />
                <span>Что важно помнить при работе с эпиграфами:</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    <strong>Строгая привязка к фракциям:</strong> Эпиграфы жестко привязаны к типам отрядов (<span className="font-semibold text-amber-800">Воины</span>, <span className="font-semibold text-sky-800">Стрелки/Рейнджеры</span>, <span className="font-semibold text-purple-800">Маги/Колдуны</span>). Очки в дуэли вы получите за любые действия, но для боевой мощи крафтите эпиграфы <strong>только под класс вашего основного отряда</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    <strong>Мастерская эпиграфов:</strong> Чтобы крафтить топовые оранжевые (UR) эпиграфы, ваше здание мастерской должно быть прокачано <strong>до 20-го уровня</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tuesday Special Banner: Sanctuary Upgrade Table */}
        {currentDay.id === "tuesday" && onOpenSanctuary && (
          <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 border border-amber-200 flex-shrink-0">
                <Castle className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-200/80 text-amber-900 border border-amber-300">
                    СТРОИТЕЛЬСТВО 1–30 УРОВНЯ
                  </span>
                  <span className="text-xs font-bold text-amber-900">ЭКОНОМИЯ РЕСУРСОВ</span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  Стройте только обязательные постройки для Святилища, чтобы не тратить ценные ресурсы на лишнее!
                </p>
              </div>
            </div>
            <button
              onClick={onOpenSanctuary}
              className="w-full sm:w-auto justify-center px-4 py-2.5 sm:py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
            >
              <span>Таблица прокачки</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Saturday Special Banner: Shields and Teleportation */}
        {currentDay.id === "saturday" && (
          <div className="mt-4 space-y-4">
            {/* How to Move (Free Raid Teleport) */}
            <div className="p-4 sm:p-5 rounded-xl bg-indigo-50/70 border border-indigo-200 text-slate-900 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 border-b border-indigo-200 pb-3">
                <div className="p-2.5 rounded-xl bg-indigo-100 border border-indigo-200 text-indigo-700 flex-shrink-0">
                  <Zap className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-200/80 text-indigo-900 border border-indigo-300">
                      СУББОТНИЙ РЕЙД
                    </span>
                    <span className="text-xs font-bold text-indigo-800">БЕСПЛАТНЫЙ ПЕРЕНОС</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                    Как перемещаться в субботу (через «Рейд»)
                  </h3>
                </div>
              </div>

              {/* 4 Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-white border border-indigo-200/80 shadow-2xs flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <div className="font-extrabold text-slate-900">Откройте меню дуэли</div>
                    <p className="text-slate-700 mt-0.5 leading-relaxed">
                      На главном экране игры нажмите на иконку <strong>«Дуэль»</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-indigo-200/80 shadow-2xs flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <div className="font-extrabold text-slate-900">Перейдите во вкладку «Рейд»</div>
                    <p className="text-slate-700 mt-0.5 leading-relaxed">
                      В верхней части окна выберите раздел <strong>«Рейд»</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-indigo-200/80 shadow-2xs flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <div className="font-extrabold text-slate-900">Запустите рейд</div>
                    <p className="text-slate-700 mt-0.5 leading-relaxed">
                      Нажмите кнопку <strong>«Пойти»</strong> (межсерверные рейды <strong>не расходуют</strong> ваши продвинутые телепорты).
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-indigo-200/80 shadow-2xs flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <div className="font-extrabold text-slate-900">Выберите позицию</div>
                    <p className="text-slate-700 mt-0.5 leading-relaxed">
                      После переноса на сервер противника найдите свободное место на карте и нажмите <strong>«Перенос»</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Tips */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-indigo-200/90 shadow-2xs space-y-2.5">
                <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  Важные советы по перемещению:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200">
                    <strong className="text-emerald-950">🛡️ Защита:</strong> Ваш щит остается активным на протяжении всего процесса перемещения, поэтому вы защищены от нападений.
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200">
                    <strong className="text-amber-950">⏱️ Ограничение (Кулдаун):</strong> Перезарядка функции бесплатного рейда составляет <strong>3 минуты</strong>. По истечении этого времени вы сможете снова повторить маневр.
                  </div>
                  <div className="p-2.5 rounded-lg bg-sky-50/70 border border-sky-200">
                    <strong className="text-sky-950">🏠 Возврат домой:</strong> Чтобы вернуться на свой домашний сервер, нажмите на <strong>синюю кнопку с белой стрелкой</strong> на панели таймера. После этого выберите новое бесплатное место для своего замка.
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-50/70 border border-purple-200">
                    <strong className="text-purple-950">🔄 Локальное перемещение:</strong> Схема отлично работает для бесплатного перемещения внутри домашнего сервера: прыгаете через «Рейд» на чужую карту и сразу возвращаетесь обратно, чтобы бесплатно сменить позицию у себя дома.
                  </div>
                </div>
              </div>
            </div>

            {/* Shields and Safety */}
            <div className="p-4 sm:p-5 rounded-xl bg-rose-50/70 border border-rose-200 text-slate-900 shadow-2xs space-y-3.5">
              <div className="flex items-center gap-3 border-b border-rose-200 pb-3">
                <div className="p-2.5 rounded-xl bg-rose-100 border border-rose-200 text-rose-700 flex-shrink-0">
                  <ShieldAlert className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-rose-200/80 text-rose-900 border border-rose-300">
                      ВОЙНА СЕРВЕРОВ (КВК)
                    </span>
                    <span className="text-xs font-bold text-rose-800">ПРАВИЛА БЕЗОПАСНОСТИ</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                    Щиты и боевое безумие
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                <p className="p-3 rounded-xl bg-white border border-rose-200/80 shadow-2xs">
                  Защитный щит желательно активировать ещё в пятницу вечером. Во время КвК вашу крепость может атаковать не только дуэльный соперник, но и любые другие игроки вражеского королевства.
                </p>
                <p className="p-3 rounded-xl bg-white border border-rose-200/80 shadow-2xs">
                  Помните: после вашей собственной атаки щит автоматически снимается и включается режим <strong>«боевого безумия»</strong>. Он длится <strong>15 минут</strong>. Если в течение этого времени вы не совершите новых атак, режим спадет и вы снова сможете надеть щит. В этот опасный период лучше сразу телепортироваться в безопасную точку — подальше от места сбора альянса. Возвращаться на территорию своего альянса рекомендуется только после того, как вы снова будете под защитой щита.
                </p>
                <p className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-medium shadow-2xs">
                  В сумке всегда должен быть запас из щитов и нескольких телепортов. Бесплатного 8-часового щита обычно не хватает, чтобы перекрыть весь опасный период события.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Ministers Guide Banner (Highlighted especially on Tuesday & Wednesday) */}
        {onOpenMinisters && (
          <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 border border-amber-200 flex-shrink-0">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                    ГАЙД ПО МИНИСТРАМ (5 МИНУТ НА ЗАПУСК)
                  </span>
                  {currentDay.id === "tuesday" && (
                    <span className="text-xs font-bold text-amber-800">
                      🏗️ Вторник: Министр Строительства (+50% к скорости)
                    </span>
                  )}
                  {currentDay.id === "wednesday" && (
                    <span className="text-xs font-bold text-sky-800">
                      🔬 Среда: Министр Исследований (+25% к скорости)
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  Перед запуском долгой стройки или науки обязательно возьмите должность министра! Бафф фиксируется при нажатии кнопки «Улучшить» / «Исследовать».
                </p>
              </div>
            </div>
            <button
              onClick={onOpenMinisters}
              className="w-full sm:w-auto justify-center px-4 py-2.5 sm:py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
            >
              <span>Инструкция (4 шага)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Gear Upgrade Roadmap Banner */}
        {onOpenGearRoadmap && (
          <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-100 border border-amber-200 text-amber-700 flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                    ДОРОЖНАЯ КАРТА СНАРЯЖЕНИЯ
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    Оптимальный порядок (Шаги 1–28)
                  </span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  Как правильно прокачивать снаряжение для Марлены, Зои, Даскала, Артура и Харпер до 40 ур. и 5★!
                </p>
              </div>
            </div>
            <button
              onClick={onOpenGearRoadmap}
              className="w-full sm:w-auto justify-center px-4 py-2.5 sm:py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
            >
              <span>Открыть карту снаряжения</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Hero Skills Priority Guide Banner */}
        {onOpenHeroSkills && (
          <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-100 border border-rose-200 text-rose-700 flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-900 border border-rose-200">
                    ГАЙД ПО НАВЫКАМ ГЕРОЕВ
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    Воины • Рейнджеры • Колдуны (Схемы 10/15 → 30)
                  </span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  В каком порядке качать способности Марлены, Зои, Красной Леди, Синтии, Ульфрида, Джокера, Николь и других героев без потери значков!
                </p>
              </div>
            </div>
            <button
              onClick={onOpenHeroSkills}
              className="w-full sm:w-auto justify-center px-4 py-2.5 sm:py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
            >
              <span>Гайд по навыкам</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Era of Revival Season Guide Banner */}
        {onOpenEraRevival && (
          <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-100 border border-indigo-200 text-indigo-700 flex-shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 border border-indigo-200">
                    СЕЗОН «ЭРА ВОЗРОЖДЕНИЯ»
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    Статуя Лорда • Пробуждение Марлены • UR-Клэр • Оружие Даскала
                  </span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  Полный разбор двухмесячного сезона: какую ветку специализации выбрать («Умелец» или «Командир»), как получать фрагменты эксклюзивного оружия и пробуждения!
                </p>
              </div>
            </div>
            <button
              onClick={onOpenEraRevival}
              className="w-full sm:w-auto justify-center px-4 py-2.5 sm:py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
            >
              <span>Гайд по Эре</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Allowed Actions */}
        <div className="mt-5">
          <div className="rounded-xl bg-slate-50 border border-emerald-200 p-4 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Что ДЕЛАТЬ сегодня (Тратить / Качать):
              </h4>
            </div>
            <ul className="space-y-2">
              {currentDay.allowedActions.map((action, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-slate-700 flex items-start gap-2"
                >
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accumulation Mode Block */}
        {currentDay.accumulation && currentDay.accumulation.length > 0 && (
          <div className="mt-4 p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs">
            <div className="font-bold text-amber-800 mb-2 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-amber-600" />
              <span>Накопительный режим — Что мы копим сегодня:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-1">
              {currentDay.accumulation.map((item, i) => (
                <div key={i} className="bg-white p-2.5 rounded-lg border border-amber-100 flex flex-col justify-between shadow-3xs">
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

        {/* Pro Tips / Tactical Guidance */}
        {currentDay.tips && currentDay.tips.length > 0 && (
          <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 p-4 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 mb-3">
              <Info className="w-4 h-4 text-amber-600" />
              Тактические советы на сегодня:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {currentDay.tips.map((tip, i) => (
                <li key={i} className="text-xs text-slate-700 leading-relaxed flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="text-amber-600 font-bold mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Mandatory Tech Donation & Server Policy Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-white to-amber-50 border border-sky-300 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700 border border-sky-200 mt-0.5 flex-shrink-0">
            <FlaskConical className="w-5 h-5 text-sky-600" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-extrabold text-sky-950">ОБЯЗАТЕЛЬНЫЙ РЕГЛАМЕНТ</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 border border-rose-200 flex items-center gap-1">
                👍 Взнос строго по рекомендации
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed max-w-3xl">
              Взносы в «Исследование альянса» делаем каждый день строго в технологию со значком «Палец вверх» 👍. 
              Грабим караваны только на чужих серверах с обязательной галочкой защиты! Сжигать соседей запрещено.
            </p>
          </div>
        </div>

        {onOpenRules && (
          <button
            onClick={onOpenRules}
            className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer border border-sky-700 self-stretch sm:self-auto justify-center"
          >
            <span>Правила Альянса</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Blight Boss Quick Tactical Banner */}
      {onOpenBlightBoss && (
        <div className="rounded-xl bg-gradient-to-r from-purple-50 via-white to-amber-50 border border-purple-200 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-100 border border-purple-200 text-purple-700 flex-shrink-0">
              <Skull className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-sm font-extrabold text-purple-950">
                  Босс Скверны: как набить рекорд урона
                </h4>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-200/80 text-purple-900 border border-purple-300">
                  ФИОЛЕТОВЫЕ ПЕРЧАТКИ 30 УР. НА САППОРТОВ
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Боевое безумие перед боем + облик Ворон + Эпиграфы по типу войск. Пачки: Клэр / Стелла / Эш + саппорты Белл (+40% к атаке) и Харпер с фиолетовыми перчатками 30 ур.!
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBlightBoss}
            className="w-full sm:w-auto justify-center px-4 py-2.5 sm:py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
          >
            <span>Гайд по Боссу</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Strict Cheese Trap Rules Reminder */}
      <div className="rounded-xl bg-gradient-to-r from-amber-50 via-white to-orange-50 border border-amber-200 p-4 flex items-center justify-between gap-4 flex-wrap shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-100 border border-amber-200">
            <ShieldAlert className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-950">
              Стратегия Сырной Ловушки
            </h4>
            <p className="text-xs text-slate-600">
              Перед началом события запускаем Боевое безумие на 15 мин (разведка на «бомжа»). Остановка сразу при получении всех личных наград!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
