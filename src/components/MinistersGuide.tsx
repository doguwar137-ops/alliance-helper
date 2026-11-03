import React, { useState } from "react";
import {
  Crown,
  Clock,
  RotateCcw,
  XCircle,
  CheckCircle2,
  Hammer,
  FlaskConical,
  Copy,
  Check,
  AlertTriangle,
  Sparkles,
  UserCheck,
  Play,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export const MinistersGuide: React.FC = () => {
  const [copiedFull, setCopiedFull] = useState(false);
  const [copiedChat, setCopiedChat] = useState(false);

  const fullTextForCopy = `🏛️ ГАЙД ПО МИНИСТРАМ В LAST ASYLUM

Министры нужны для одной цели — дать мощный бафф к скорости (ускорение) перед тем, как вы запустите долгую стройку или исследование технологий.

⚙️ Как устроена механика на сервере:
• Жесткий таймер на 5 минут: Как только очередь доходит до вас, игра автоматически выдает вам должность ровно на 5 минут. За это время нужно успеть запустить процесс. По истечении 5 минут система сама снимет вас с поста.
• Кулдаун (КД) 30 минут: После того как вы побывали министром, повторно подать заявку на эту же должность можно только через 30 минут.
• Зачем нужен крестик: Если вы случайно нажали не на ту должность, передумали или поняли, что не готовы — зайдите в меню, найдите свою заявку и нажмите крестик, чтобы её отменить. Это спасет вас от случайной активации 30-минутного КД.

🏃‍♂️ Инструкция: Как правильно взять министра

Шаг 1: Полная готовность (ДО подачи заявки)
Вставать в автоматическую очередь неподготовленным нельзя — вы потратите свои 5 минут впустую и заблокируете других игроков.
1. Зайдите в замок и проверьте ресурсы. Если их мало — вскройте сундуки из рюкзака прямо сейчас.
2. Освободите строителя или Лабораторию.

Шаг 2: Вход в очередь
1. Нажмите на свою Аватарку в левом верхнем углу экрана.
2. Нажмите на плашку с номером вашего сервера (например, #304).
3. В Кабинете Министров выберите нужную иконку и нажмите «Подать заявку».

Шаг 3: Получение баффа и запуск
1. Ждите, пока система автоматически назначит вас министром.
2. Как только должность получена, у вас есть 5 минут. Мгновенно заходите в замок, открывайте объект и нажимайте кнопку «Улучшить» или «Исследовать».
3. Запущенный процесс получит мощное ускорение к базовой скорости (например, +50% для стройки или +25% для науки).

Шаг 4: Спокойная прокачка
Вам больше не нужно никуда заходить и ничего нажимать. Через 5 минут игра сама заберет у вас титул и передаст следующему игроку. Бафф уже зафиксирован за вашей постройкой. Теперь вы можете спокойно использовать личные ускорители времени из рюкзака или алмазы, чтобы завершить таймер.

📅 Памятка по дням Дуэли Альянсов (SVS):
• Вторник (День Стройки): Подаем заявки на Министра Строительства (+50% к скорости).
• Среда (День Науки): Подаем заявки на Министра Исследований (+25% к скорости) или Министра Развития.`;

  const shortChatText = `🏛️ МИНИСТРЫ: Перед запуском долгой стройки или науки берите бафф Министра (Аватарка -> #Сервер -> Кабинет Министров)! 1) ДО заявки приготовьте ресы и свободного строителя/лабу. 2) Должность дается ровно на 5 мин (КД 30 мин, отмена заявки — крестик ✕). 3) ВТ — Министр Строительства (+50%), СР — Министр Исследований (+25%)!`;

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

  return (
    <div className="space-y-6">
      {/* Top Hero Banner */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-600" />
              <span>Серверные Баффы • Кабинет Министров</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Гайд по министрам в Last Asylum
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Министры нужны для одной цели —{" "}
              <span className="text-amber-700 font-bold">
                дать мощный бафф к скорости (ускорение)
              </span>{" "}
              перед тем, как вы запустите долгую стройку или исследование технологий.
            </p>
          </div>

          {/* Copy Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
            <button
              onClick={handleCopyFull}
              className={`flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border shadow-2xs ${
                copiedFull
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-amber-600 hover:bg-amber-700 text-white border-amber-600"
              }`}
            >
              {copiedFull ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Гайд скопирован!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Скопировать весь гайд</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyChat}
              className={`flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border shadow-2xs ${
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
      </div>

      {/* Section 1: Server Mechanics */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
        <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3.5">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-700 border border-amber-200">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              ⚙️ Как устроена механика на сервере
            </h2>
            <p className="text-xs text-slate-500">
              Три главных правила работы автоматической очереди должностей
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 5 min timer */}
          <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 sm:p-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-600 text-white text-xs font-extrabold uppercase">
                  <Clock className="w-3.5 h-3.5" />5 МИНУТ
                </span>
                <span className="text-[11px] font-mono font-bold text-amber-800 uppercase">
                  Авто-снятие
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                Жесткий таймер на 5 минут
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Как только очередь доходит до вас, игра <strong>автоматически выдает вам должность ровно на 5 минут</strong>. За это время нужно успеть запустить процесс. По истечении 5 минут система сама снимет вас с поста.
              </p>
            </div>
          </div>

          {/* 30 min cooldown */}
          <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 sm:p-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-600 text-white text-xs font-extrabold uppercase">
                  <RotateCcw className="w-3.5 h-3.5" />
                  КД 30 МИНУТ
                </span>
                <span className="text-[11px] font-mono font-bold text-sky-800 uppercase">
                  Перезарядка
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                Кулдаун (КД) 30 минут
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                После того как вы побывали министром, <strong>повторно подать заявку на эту же должность можно только через 30 минут</strong>. Планируйте крупные стройки и исследования заранее!
              </p>
            </div>
          </div>

          {/* Cancel Cross */}
          <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-4 sm:p-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-600 text-white text-xs font-extrabold uppercase">
                  <XCircle className="w-3.5 h-3.5" />
                  КРЕСТИК (✕)
                </span>
                <span className="text-[11px] font-mono font-bold text-rose-800 uppercase">
                  Отмена заявки
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                Зачем нужен крестик
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Если вы случайно нажали не на ту должность, передумали или поняли, что не готовы — зайдите в меню, найдите свою заявку и <strong>нажмите крестик, чтобы её отменить</strong>. Это спасет вас от случайной активации 30-минутного КД.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: 4-Step Instruction */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
        <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3.5">
          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-200">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              🏃‍♂️ Инструкция: Как правильно взять министра
            </h2>
            <p className="text-xs text-slate-500">
              Выполняйте шаги строго по порядку, чтобы не потерять бафф и не задержать очередь сервера
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Step 1 */}
          <div className="rounded-2xl bg-slate-50 border-2 border-amber-300 p-5 space-y-3 relative">
            <div className="flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-lg bg-amber-600 text-white text-xs font-black uppercase tracking-wider">
                ШАГ 1 • ДО ПОДАЧИ ЗАЯВКИ
              </span>
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Полная готовность (ДО подачи заявки)
            </h3>
            <div className="p-3 rounded-xl bg-amber-100/70 border border-amber-300 text-xs font-bold text-amber-950">
              Вставать в автоматическую очередь неподготовленным нельзя — вы потратите свои 5 минут впустую и заблокируете других игроков.
            </div>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside font-medium">
              <li>
                Зайдите в замок и <strong>проверьте ресурсы</strong>. Если их мало — вскройте сундуки из рюкзака прямо сейчас.
              </li>
              <li>
                <strong>Освободите строителя</strong> или <strong>Лабораторию</strong>.
              </li>
            </ol>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-black uppercase tracking-wider">
                ШАГ 2 • ПОДАЧА ЗАЯВКИ
              </span>
              <Crown className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Вход в очередь
            </h3>
            <ol className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  Нажмите на свою <strong>Аватарку</strong> в левом верхнем углу экрана.
                </span>
              </li>
              <li className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  Нажмите на плашку с <strong>номером вашего сервера</strong> (например, <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono font-bold text-indigo-700">#304</code>).
                </span>
              </li>
              <li className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  В <strong>Кабинете Министров</strong> выберите нужную иконку и нажмите <strong>«Подать заявку»</strong>.
                </span>
              </li>
            </ol>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-black uppercase tracking-wider">
                ШАГ 3 • АКТИВАЦИЯ (5 МИНУТ)
              </span>
              <Play className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Получение баффа и запуск
            </h3>
            <ol className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-extrabold text-emerald-700">1.</span>
                <span>Ждите, пока система автоматически назначит вас министром.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-extrabold text-emerald-700">2.</span>
                <span>
                  Как только должность получена, у вас есть <strong>5 минут</strong>. Мгновенно заходите в замок, открывайте объект и нажимайте кнопку <strong>«Улучшить»</strong> или <strong>«Исследовать»</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-extrabold text-emerald-700">3.</span>
                <span>
                  Запущенный процесс получит мощное ускорение к базовой скорости (например, <strong className="text-amber-700">+50% для стройки</strong> или <strong className="text-sky-700">+25% для науки</strong>).
                </span>
              </li>
            </ol>
          </div>

          {/* Step 4 */}
          <div className="rounded-2xl bg-emerald-50/60 border border-emerald-200 p-5 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-lg bg-teal-700 text-white text-xs font-black uppercase tracking-wider">
                ШАГ 4 • ФИКСАЦИЯ БАФФА
              </span>
              <ShieldCheck className="w-5 h-5 text-teal-700 flex-shrink-0" />
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Спокойная прокачка
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Вам больше не нужно никуда заходить и ничего нажимать. Через 5 минут игра сама заберет у вас титул и передаст следующему игроку.
            </p>
            <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-medium flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Бафф уже зафиксирован за вашей постройкой!</strong> Теперь вы можете спокойно использовать личные ускорители времени из рюкзака или алмазы, чтобы завершить таймер.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: SVS / Alliance Duel Days Reminder */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-50 via-white to-sky-50 border-2 border-amber-300 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-600 text-white">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              📅 Памятка по дням Дуэли Альянсов (SVS)
            </h2>
            <p className="text-xs text-slate-600">
              В какие дни недели какую должность брать для максимума очков и экономии ускорений
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tuesday */}
          <div className="rounded-2xl bg-white border-2 border-amber-300 p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs">
            <div className="p-3 rounded-2xl bg-amber-100 text-amber-700 border border-amber-200 flex-shrink-0">
              <Hammer className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-md bg-amber-600 text-white">
                  Вторник • День Стройки
                </span>
                <span className="text-xs font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-200">
                  +50% к скорости
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 pt-1">
                Министр Строительства
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Подаем заявки на <strong>Министра Строительства (+50% к скорости)</strong> перед запуском новых тяжелых уровней Святилища, Стены, Казарм и других зданий.
              </p>
            </div>
          </div>

          {/* Wednesday */}
          <div className="rounded-2xl bg-white border-2 border-sky-300 p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs">
            <div className="p-3 rounded-2xl bg-sky-100 text-sky-700 border border-sky-200 flex-shrink-0">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-md bg-sky-600 text-white">
                  Среда • День Науки
                </span>
                <span className="text-xs font-extrabold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md border border-sky-200">
                  +25% к скорости
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 pt-1">
                Министр Исследований / Министр Развития
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Подаем заявки на <strong>Министра Исследований (+25% к скорости)</strong> или <strong>Министра Развития</strong> перед стартом долгих технологий в Лаборатории.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
