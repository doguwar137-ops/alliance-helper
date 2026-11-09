import React, { useState } from "react";
import {
  ShieldAlert,
  FlaskConical,
  Flame,
  Ban,
  Copy,
  Check,
  ThumbsUp,
  AlertTriangle,
  Target,
  Sparkles,
  Shield,
  Eye,
  Award,
  Compass,
  ShieldCheck,
  CheckSquare,
  Square,
  HeartPulse,
  Clock,
  Timer,
} from "lucide-react";

export const AllianceRules: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [copiedMemo, setCopiedMemo] = useState(false);
  const [copiedRuleId, setCopiedRuleId] = useState<string | null>(null);

  const [showMemoPreview, setShowMemoPreview] = useState(false);

  const memoText = `ПАМЯТКА ИГРОКА АЛЬЯНСА:
1. ВЗНОСЫ В НАУКУ: каждый день! Меню Альянс -> Исследование альянса -> Вносить СТРОГО туда, где значок 👍 (палец вверх).
2. ДУЭЛЬ АЛЬЯНСОВ: обязательное участие каждого игрока! Закрывайте ежедневные этапы по графику.
3. СОКОЛИНАЯ БАШНЯ: ОБЯЗАТЕЛЬНО отправляйте отряды на задания каждый день до появления КРАСНОГО КРУЖКА 🔴 (красный кружок означает, что задание выполнено). Заранее награды НЕ забираем — копим готовые задания до ПЯТНИЦЫ. В пятницу нажимаем «Забрать все», а если в течение всей пятницы появляются еще задания — обязательно их тоже выполняем и сразу забираем весь день ради очков Дуэли Альянсов!
4. КАРАВАНЫ И СЕКРЕТКИ: грабим ТОЛЬКО чужие серверы! Обязательно галочка «Запретить караваны на этом сервере».
5. МИР НА СЕРВЕРЕ: сжигать соседей нашего сервера КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО, даже если они вас ограбили!
6. ЩИТЫ МИРА И БОЕВОЕ БЕЗУМИЕ: всю неделю (с вс по пт) щиты НЕ тратим — копим на войну! В субботу (с 05:00 сб до 05:00 вс МСК) рейд врагов: щит ОБЯЗАТЕЛЕН на 24ч! Ставьте щит ЗАРАНЕЕ, так как любое военное действие (даже разведка) включает Боевое безумие и запрещает ставить щит 15 минут! Если щита нет — снимайте войска со стен!
7. ОБОРОНА ГОРОДА И «ОСАДА НЕЖИТИ»: Перед стартом события ОБЯЗАТЕЛЬНО верните ВСЕ отряды домой (со сбора ресурсов и со штурмов)! В момент начала все войска должны быть на базе. В меню База -> «Подкрепление» -> «Гарнизон» -> «Настроить оборону города» СТАВИМ галочки ✅ «Присоединиться к обороне», чтобы защищать базу и отбивать волны монстров. Если крепите союзников — обязательно обновляйте раненые войска (домой на лечение -> обратно в креп)! В обычное время и перед субботней войной галочки ⬜ ОБЯЗАТЕЛЬНО СНИМАЕМ, чтобы враги не перебили всю армию!
8. ГОНКА ЗА ЭЛИКСИРОМ (КАЖДУЮ ПЯТНИЦУ): Регистрация открыта с понедельника по среду (в четверг — подбор соперника, в пятницу — битва). Обязательно зарегистрируйтесь в удобное время: Команда А (14:00 по МСК) или Команда Б (23:00 по МСК), длительность матча 30 минут. Если вы сами не можете зарегистрироваться — напишите игроку R4, он вам подскажет как это сделать.`;

  const handleCopyNewbieMemo = () => {
    navigator.clipboard.writeText(memoText);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2500);
  };

  const handleCopyRule = (title: string, text: string, id: string) => {
    navigator.clipboard.writeText(`${title}\n${text}`);
    setCopiedRuleId(id);
    setTimeout(() => setCopiedRuleId(null), 2500);
  };

  return (
    <div id="alliance-rules-container" className="space-y-6">
      {/* Alliance Hero Banner & Official Leadership */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs relative overflow-hidden space-y-5">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-600" />
                Официальные Правила Альянса
              </span>
              <span className="px-2.5 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold flex items-center gap-1">
                <ThumbsUp className="w-3 h-3 text-sky-600" /> Взносы по рекомендации 👍
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Правила Альянса и Инструкция для Новичков
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed">
              Все основные правила, дисциплина, порядок взносов в исследования, правила грабежей и обороны базы. 
              Соблюдение этих правил помогает быстро развивать аккаунт, усиливать альянс и защищать вашу базу.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5 w-full lg:w-auto flex-shrink-0">
            <button
              onClick={handleCopyNewbieMemo}
              className="px-3.5 py-2.5 sm:py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer border border-amber-600 w-full sm:w-auto"
            >
              {copiedMemo ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Памятка новичка скопирована!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-white" />
                  <span>Скопировать памятку для чата</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setShowMemoPreview((prev) => !prev)}
              className="px-3.5 py-2.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs w-full sm:w-auto"
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              <span>{showMemoPreview ? "Скрыть текст памятки" : "Посмотреть текст памятки"}</span>
            </button>
          </div>
        </div>

        {/* Memo Full Preview Card */}
        {showMemoPreview && (
          <div className="relative z-10 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-100 text-amber-800 font-bold text-sm">📋</span>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm tracking-wide">
                    Официальный текст памятки игрока альянса
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Готовый понятный текст для копирования в игровой чат или личные сообщения
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyNewbieMemo}
                className="px-3.5 py-2 sm:py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs transition-all w-full sm:w-auto"
              >
                {copiedMemo ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedMemo ? "Скопировано!" : "Скопировать"}</span>
              </button>
            </div>
            <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 select-all">
              {memoText}
            </pre>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {[
          { id: "all", label: "Все Правила" },
          { id: "elixir", label: "🧪 Гонка за Эликсиром", badge: "ПТ 14:00 / 23:00" },
          { id: "garrison", label: "🛡️ Оборона и Галочки", badge: "ВАЖНО" },
          { id: "falcon", label: "🦅 Соколиная Башня (🔴 Кружок)", badge: "ВАЖНО" },
          { id: "donations", label: "🧪 Взносы в науку (👍)", badge: "ОБЯЗАТЕЛЬНО" },
          { id: "duel", label: "⚔️ Дуэль Альянсов", badge: "ОБЯЗАТЕЛЬНО" },
          { id: "caravans", label: "🚫 Грабежи и Сервер", badge: "МИР" },
          { id: "shields", label: "🛡️ Щиты & Рейд СБ", badge: "05:00 МСК" },
          { id: "cheese", label: "🧀 Сырная Ловушка" },
        ].map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`whitespace-nowrap shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-2xs"
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && !isActive && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-amber-100 text-amber-800 font-mono">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* SECTION 1: Mandatory Daily Tech Donations (Взносы в исследования альянса) */}
      {(activeFilter === "all" || activeFilter === "donations") && (
        <div id="rule-donations" className="rounded-3xl bg-white border-2 border-sky-400 p-6 sm:p-7 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-sky-100 text-sky-700">
                <FlaskConical className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 border border-sky-200">
                    ПРАВИЛО №1 • СТРОГИЙ ПРИОРИТЕТ
                  </span>
                  <span className="text-xs text-rose-600 font-bold flex items-center gap-1">
                    <ThumbsUp className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> ВНОСИТЬ ТОЛЬКО ПО 👍
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  Ежедневные Обязательные Взносы в Исследования Альянса
                </h2>
              </div>
            </div>

            <button
              onClick={() =>
                handleCopyRule(
                  "ПРАВИЛО АЛЬЯНСА: ВЗНОСЫ В ИССЛЕДОВАНИЯ",
                  "Меню Альянс -> Исследование альянса -> Вносить СТРОГО туда, где стоит значок «Палец вверх» 👍! Сливайте все доступные попытки каждый день!",
                  "tech_copy"
                )
              }
              className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedRuleId === "tech_copy" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>Скопировать правило</span>
            </button>
          </div>

          {/* Text Step-by-Step Instructions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">ШАГ 1</span>
                <span className="text-[10px] text-slate-400 font-mono">Меню Альянса</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Кнопка «Исследование альянса»</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Нажмите на кнопку с синей колбой <strong className="text-slate-800">«Исследование альянса»</strong> в главном меню альянса (рядом с магазином и помощью).
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">ШАГ 2</span>
                <span className="text-[10px] text-rose-600 font-bold">ОБЯЗАТЕЛЬНО</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Ищем значок «Палец вверх» 👍</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                В окне <strong className="text-slate-800">«Технологии альянса»</strong> найдите исследование, отмеченное значком <strong className="text-amber-700">«Палец вверх» 👍</strong>.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">ШАГ 3</span>
                <span className="text-[10px] text-emerald-700 font-mono">Ежедневно</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Вносить все попытки</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Вносите <strong className="text-slate-800">СТРОГО в эту технологию</strong> все доступные попытки каждый день!
              </p>
            </div>
          </div>

          {/* Explanation: Why is this so vital? */}
          <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 sm:p-5 space-y-3">
            <h4 className="text-sm font-extrabold text-sky-950 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600" />
              Почему категорически нельзя вносить в случайные ветки наугад?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="p-3 rounded-xl bg-white border border-sky-100 space-y-1">
                <strong className="text-rose-700 block">❌ Если каждый вносит куда попало:</strong>
                <p>
                  В альянсе 100 участников. Если все 100 человек хаотично раскидывают взносы по 20 разным технологиям, прогресс распыляется, и ни одна технология не завершится месяцами.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-sky-100 space-y-1">
                <strong className="text-emerald-700 block">✅ Когда все 100 бьют в цель по значку 👍:</strong>
                <p>
                  Руководство альянса выставляет значок 👍 на самую нужную сейчас технологию (скорость стройки, науки, защита складов). Весь клан закрывает её за пару дней, получая колоссальный бафф!
                </p>
              </div>
            </div>
            <div className="text-xs text-sky-900 font-medium bg-sky-100/70 p-2.5 rounded-xl">
              💡 <strong>Совет для новичка:</strong> Попытки взносов восстанавливаются непрерывно. Заходите в раздел технологий в течение дня и прожимайте все доступные взносы!
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: Mandatory Alliance Duel */}
      {(activeFilter === "all" || activeFilter === "duel") && (
        <div id="rule-duel" className="rounded-3xl bg-white border-2 border-amber-400 p-6 sm:p-7 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-100 text-amber-700">
                <Target className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-200">
                    ПРАВИЛО №2 • ДУЭЛЬ АЛЬЯНСОВ
                  </span>
                  <span className="text-xs text-rose-600 font-bold">КИК ЗА ИГНОРИРОВАНИЕ</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  Обязательное Участие в Дуэли Альянсов по Дням Недели
                </h2>
              </div>
            </div>

            <button
              onClick={() =>
                handleCopyRule(
                  "ПРАВИЛО АЛЬЯНСА: ДУЭЛЬ АЛЬЯНСОВ",
                  "Обязательное участие в Дуэли Альянсов от каждого игрока! Соблюдайте недельный график сброса ресурсов. Игнорирование дуэли = исключение из Альянса.",
                  "duel_copy"
                )
              }
              className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedRuleId === "duel_copy" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>Скопировать правило</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Дуэль Альянсов — это основа жизни клана. За победу в суточных фазах и недельной дуэли 
                каждый игрок получает <strong className="text-slate-900">сундуки 9-го уровня</strong> с миллионами ресурсов, осколками героев, 
                алмазами и ценнейшими предметами развития.
              </p>
              
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
                <div className="font-extrabold text-amber-950 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  Как легко набирать максимум очков без доната?
                </div>
                <p className="leading-relaxed">
                  Главный секрет — <strong className="text-amber-950">РЕЖИМ КОПИЛКИ</strong>. Не сливайте ускорители и сундуки когда вздумается! 
                  Тратьте ресурсы строго в их профильные дни:
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[11px] pt-1">
                  <li className="bg-white/80 p-2 rounded-lg border border-amber-200"><strong>ПН:</strong> Задания Сокола + эссенции</li>
                  <li className="bg-white/80 p-2 rounded-lg border border-amber-200"><strong>ВТ:</strong> Стройка (клик по молотку)</li>
                  <li className="bg-white/80 p-2 rounded-lg border border-amber-200"><strong>СР:</strong> Наука + сундуки Ворона</li>
                  <li className="bg-white/80 p-2 rounded-lg border border-amber-200"><strong>ЧТ:</strong> Прокачка героев + звезды</li>
                  <li className="bg-white/80 p-2 rounded-lg border border-amber-200"><strong>ПТ:</strong> Тренировка войск + Сокол</li>
                  <li className="bg-white/80 p-2 rounded-lg border border-amber-200"><strong>СБ:</strong> Рейд серверов</li>
                </ul>
              </div>
            </div>

            {/* Participation Card */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white p-5 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-200">Главное требование</span>
                <div className="text-xl sm:text-2xl font-black tracking-tight mt-1">Ежедневное участие</div>
                <div className="text-xs text-amber-100 font-medium mt-1">закрытие суточных этапов от каждого игрока</div>
              </div>
              <div className="border-t border-amber-400/40 pt-3 mt-4 text-[11px] text-amber-100/90 leading-relaxed">
                ⚠️ Игроки, которые не проявляют активности или системно игнорируют суточные фазы дуэли, подлежат исключению (кику) из альянса.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: Caravan Plunder and Server Peace Policy (Грабежи караванов и секреток) */}
      {(activeFilter === "all" || activeFilter === "caravans") && (
        <div id="rule-caravans" className="rounded-3xl bg-white border-2 border-rose-400 p-6 sm:p-7 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-rose-100 text-rose-700">
                <Ban className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 border border-rose-200">
                    ПРАВИЛО №3 • ПОЛИТИКА СЕРВЕРА
                  </span>
                  <span className="text-xs text-rose-600 font-bold">СТРОГИЙ ЗАПРЕТ АТАКИ СОСЕДЕЙ</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  Правила Грабежа Караванов и Секреток: Мир на Своем Сервере
                </h2>
              </div>
            </div>

            <button
              onClick={() =>
                handleCopyRule(
                  "ПРАВИЛО АЛЬЯНСА: ГРАБЕЖ КАРАВАНОВ И МИР НА СЕРВЕРЕ",
                  "1. СТРОЖАЙШИЙ ЗАПРЕТ трогать караваны/секретки нашего сервера — грабим ТОЛЬКО чужие серверы! 2. На карте жмем иконку каравана (второй значок сверху) -> ОБЯЗАТЕЛЬНО ставим галочку «Запретить караваны на этом сервере». 3. КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО сжигать соседей нашего сервера, даже если они вас ограбили!",
                  "caravan_copy"
                )
              }
              className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedRuleId === "caravan_copy" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>Скопировать правило</span>
            </button>
          </div>

          {/* Text-Only Rules List */}
          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">1. Грабим ТОЛЬКО чужие серверы</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Караваны и секретные операции разрешено грабить <strong>исключительно на чужих серверах</strong>. Нападать на караваны игроков нашего сервера строго запрещено!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">2. Обязательная галочка «Запретить караваны на этом сервере»</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Выйдите на карту мира. В левой части экрана найдите вертикальный столбец круглых иконок: нажмите на <strong>иконку каравана (второй значок сверху)</strong>, чтобы открыть окно «Караванная торговля».
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                В открывшемся окне обязательно включите пункт <strong>«Запретить караваны на этом сервере»</strong> (активная зеленая галочка). Без этой галочки в списке случайно окажется соседский караван с нашего сервера. Нападение на соседа вызовет ответный гнев чужого клана и ненужную междоусобицу на сервере. С галочкой вы физически бьете только чужой сервер!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">3. Категорически запрещено сжигать соседей в ответ</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Если сосед с нашего сервера ограбил ваш караван или атаковал — <strong>не нападайте и не сжигайте его базу в ответ!</strong> Междоусобные войны ослабляют весь сервер.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">4. Используйте все 4 попытки грабежа ежедневно</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Каждый день доступно 4 бесплатные попытки грабежа. Обязательно используйте их все — это бесплатные миллионы ресурсов (железо, древесина, золото) и очки в Дуэль Альянсов.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: Shield Strategy and Saturday Raid (Режим щитов) */}
      {(activeFilter === "all" || activeFilter === "shields") && (
        <div id="rule-shields" className="rounded-3xl bg-white border-2 border-purple-400 p-6 sm:p-7 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-100 text-purple-700">
                <ShieldAlert className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-200">
                    ПРАВИЛО №4 • БЕЗОПАСНОСТЬ БАЗЫ
                  </span>
                  <span className="text-xs text-purple-700 font-bold">СУББОТА 05:00 - ВОСКРЕСЕНЬЕ 05:00 МСК</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  Режим Щитов и Защита Войск в Рейде
                </h2>
              </div>
            </div>

            <button
              onClick={() =>
                handleCopyRule(
                  "ПРАВИЛО АЛЬЯНСА: РЕЖИМ ЩИТОВ И БОЕВОЕ БЕЗУМИЕ",
                  "1. ЩИТЫ В БУДНИ: С воскресенья по пятницу щиты НЕ тратим — экономим и копим! Святилище дает 7 щитов по 8ч (ур. 7, 9, 11, 12, 13, 15, 17) + заряжаемый щит на 5 зарядов по 8ч в неделю. В Магазине альянса за монеты альянса всегда можно докупить щиты на 8ч, 12ч и 24ч!\n2. СУББОТА (05:00 - 05:00 ВС МСК): 24-часовой рейд врагов. Ставьте щит ЗАРАНЕЕ! Если щита нет — СНЯТЬ войска со стен (убрать галочки обороны).\n3. ЛОВУШКА БОЕВОГО БЕЗУМИЯ (15 МИН): Любое военное действие (разведка, атака, штурм святилищ/замков, креп, сбор ресурсов) включает Боевое безумие на 15 минут, и щит поставить НЕЛЬЗЯ! Не разведывайте соседей перед включением щита!",
                  "shield_copy"
                )
              }
              className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedRuleId === "shield_copy" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>Скопировать правило</span>
            </button>
          </div>

          {/* Core Saturday vs Weekday Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">Воскресенье — Пятница</span>
              <h4 className="text-sm font-extrabold text-slate-900">ЩИТЫ НЕ СТАВИТЬ! КОПИМ!</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                В будние дни нападения на базу минимальны. Тратить дефицитные щиты мира впустую строго запрещено — они понадобятся на 24-часовой ад субботней войны.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 space-y-2">
              <span className="text-xs font-mono font-bold text-rose-700 uppercase">Суббота 05:00 — Воскресенье 05:00 МСК</span>
              <h4 className="text-sm font-extrabold text-rose-950">ЩИТ ОБЯЗАТЕЛЕН НА 24 ЧАСА!</h4>
              <p className="text-xs text-rose-900 leading-relaxed">
                Во время КвК вашу крепость может атаковать не только дуэльный соперник, но и любые другие игроки вражеского королевства. Защитный щит желательно активировать ещё в пятницу вечером!
                <strong> Если щита нет:</strong> <span className="underline font-bold">НЕМЕДЛЕННО СНЯТЬ ВОЙСКА СО СТЕН</span> (убрать гарнизон: снять все галочки «Присоединиться к обороне»), чтобы враги не перебили ваших солдат!
              </p>
            </div>
          </div>

          {/* CRITICAL TRAP: Battle Frenzy (Боевое безумие) */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 border-2 border-rose-400 text-slate-900 space-y-3 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-rose-600 text-white shadow-xs">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-300">
                  КРИТИЧЕСКАЯ ЛОВУШКА ВЫЖИВАНИЯ
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                  Боевое безумие: главная ловушка (15 минут без щита)
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              <strong>Любое военное действие мгновенно включает статус «Боевое безумие», и следующие 15 минут игра СТРОГО ЗАПРЕЩАЕТ ставить защитный щит!</strong>
            </p>

            <div className="p-3.5 rounded-xl bg-white/95 border border-rose-200 text-xs text-slate-800 space-y-2">
              <div className="font-bold text-rose-950 flex items-center gap-1.5">
                <span>⚠️ Что игра считает военным действием:</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-medium">
                Военным действием считаются: <strong>разведка, подкрепление, размещение, атака и штурм</strong> (обратите внимание: штурм не на монстров, а на другие святилища и города игроков) — причём на территориях альянса, в лагерях, на точках сбора ресурсов и по городам абсолютно одинаково!
              </p>
              <div className="p-2 rounded-lg bg-rose-100/70 border border-rose-300 font-semibold text-rose-950">
                🚨 <strong>Одна разведка соседа просто из любопытства оставляет ваш город открытым для сожжения на 15 минут!</strong> Ставьте щит всегда <u>заранее</u> до любых военных действий!
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-100/60 border border-amber-300 text-xs text-amber-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>Механика игры: реальный таймер и бонус к урону</span>
              </div>
              <p className="leading-relaxed">
                В описании игры написано, что длительность Безумия якобы растёт с уровнем Святилища, однако <strong>на всех уровнях с 1 по 30 она одна и та же и строго равна 15 минутам</strong>.
                Взамен Боевое безумие даёт бафф <strong>«Атака войска +5%»</strong>, начиная с 9 уровня Святилища.
              </p>
            </div>
          </div>

          {/* SOURCES OF FREE SHIELDS & ALLIANCE SHOP */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-slate-50 border-2 border-purple-300 text-slate-900 space-y-3.5 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-600 text-white shadow-xs">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-800 border border-purple-300">
                  ЭКОНОМИКА ЩИТОВ И МАГАЗИН АЛЬЯНСА
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                  Как работает щит мира, бесплатные щиты и Магазин альянса
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Щит закрывает город от любого нападения, пока действует его таймер.</strong> Ставить щит нужно обязательно <strong>заранее</strong>, потому что после любого военного действия игра блокирует установку щита на 15 минут.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-white rounded-xl border border-purple-200 space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-purple-950 flex items-center gap-1.5">
                    🏛️ 7 щитов по 8 часов от Святилища
                  </span>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-purple-100 text-purple-800">
                    Уровни здания
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Святилище бесплатно выдаёт <strong>7 щитов по 8 часов</strong> при достижении уровней: <strong>7, 9, 11, 12, 13, 15 и 17</strong> (список обязательных построек для каждого апа смотрите во вкладке <strong>«Прокачка Святилища»</strong>).
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-purple-200 space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-purple-950 flex items-center gap-1.5">
                    ⚡ 5 бесплатных щитов в неделю
                  </span>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800">
                    Заряжаемый щит
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Отдельно работает <strong>заряжаемый щит на 5 зарядов по 8 часов</strong> с полной перезарядкой в <strong>7 суток</strong> (игроки называют его «5 бесплатных щитов в неделю»).
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1.5">
              <div className="font-bold flex items-center gap-2 text-emerald-950 text-sm">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Магазин альянса: щиты на 8ч, 12ч и 24ч за монеты альянса</span>
              </div>
              <p className="text-emerald-900 leading-relaxed text-xs">
                Пока действуют бесплатные щиты Святилища, тратить лишние ресурсы незачем. Но если щиты закончились или вам нужен щит на более долгий срок — <strong>в Магазине альянса за заработанные монеты альянса</strong> можно в любой момент купить щиты на <strong>8 часов, 12 часов и 24 часа</strong>!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION: Defense Squads & Garrison Checkmarks (Защита святилища, Осада нежити vs Война) */}
      {(activeFilter === "all" || activeFilter === "garrison") && (
        <div id="rule-garrison" className="rounded-3xl bg-white border-2 border-indigo-500 p-6 sm:p-7 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-100 text-indigo-700">
                <ShieldCheck className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-300">
                    РЕГЛАМЕНТ • ОБОРОНА ГОРОДА И СВЯТИЛИЩА
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white font-mono flex items-center gap-1 shadow-2xs">
                    ✅ ОСАДА НЕЖИТИ: ГАЛОЧКИ СТАВИМ
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-500 text-white font-mono flex items-center gap-1 shadow-2xs">
                    ⬜ СУББОТА / МИР: ГАЛОЧКИ СНИМАЕМ
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  Защита Святилища и Гарнизон: Настройка Обороны Города (Галочки)
                </h2>
              </div>
            </div>

            <button
              onClick={() =>
                handleCopyRule(
                  "ПРАВИЛО АЛЬЯНСА: ОБОРОНА ГОРОДА И ГАЛОЧКИ",
                  "1. ВЕРНУТЬ ВСЕ ОТРЯДЫ ДОМОЙ: до старта «Осады нежити» обязательно отзовите все войска со сбора ресурсов и из штурмов! Все отряды должны быть на базе!\n2. СТАВИМ ГАЛОЧКИ ✅ «Присоединиться к обороне»: Во время события «Осада нежити»! Наши отряды защищают базу и отбивают волны монстров.\n3. ОБНОВЛЕНИЕ КРЕПА (ПОДКРЕПЛЕНИЙ): если крепите соклановцев, обязательно обновляйте войско! Отряд принимает удары и ранится: отзовите его домой, вылечите и пошлите снова (либо сразу отправьте второй свежий отряд)!\n4. СНИМАЕМ ГАЛОЧКИ ⬜ (пустые квадратики): Во все обычные дни и ОБЯЗАТЕЛЬНО перед субботней войной! Это спасает войска от гибели: если на вас нападет враг, отряды не выйдут на убой на стены, ресурсы в сумке останутся нетронутыми, а все солдаты — живыми!",
                  "garrison_copy"
                )
              }
              className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedRuleId === "garrison_copy" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>Скопировать правило</span>
            </button>
          </div>

          {/* CRITICAL CALLOUT: Squads must be recalled to base before event starts */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border-2 border-amber-400 text-amber-950 space-y-2.5 shadow-2xs">
            <div className="flex items-center gap-2 font-black text-sm text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>ГЛАВНОЕ ТРЕБОВАНИЕ: Включить галочки и вернуть все отряды на базу ДО начала «Осады нежити»!</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              Перед стартом события <strong>поставьте все галочки [✅] «Присоединиться к обороне»</strong> (их можно выставить заранее в любой момент) и <strong>ОБЯЗАТЕЛЬНО отзовите все свои отряды со сбора ресурсов на карте и из всех штурмов</strong>. 
              Когда начинается Осада нежити, <strong>все отряды должны находиться дома на базе</strong>! 
              Если ваш отряд в этот момент собирает ресурсы или находится в походе, он физически не сможет оборонять город.
            </p>
            <div className="p-2.5 rounded-xl bg-white/90 border border-amber-300 text-xs font-semibold text-slate-900 flex items-center gap-2">
              <span className="text-rose-600 font-extrabold text-sm flex-shrink-0">⚠️ АЛГОРИТМ:</span>
              <span>1. Ставим галочки [✅] во всех отрядах (можно заранее) ➔ 2. Возвращаем все отряды домой на базу ➔ 3. Защищаем замок ➔ 4. После окончания события снимаем все галочки [⬜]!</span>
            </div>
          </div>

          {/* REINFORCEMENT & HEALING PRO-TACTIC (КРЕП СОКЛАНОВЦЕВ) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 border-2 border-indigo-300 text-slate-900 space-y-3 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-xs">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 border border-indigo-200">
                  ТАКТИКА ПОДКРЕПЛЕНИЙ (КРЕПА) В ОСАДЕ НЕЖИТИ
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                  Обязательное обновление и лечение войск в подкреплении!
                </h4>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Если вы <strong>крепите (отправляете подкрепление) кого-то из игроков</strong>, <strong>крайне важно постоянно обновлять войско</strong>.
              Отряд в чужом замке принимает на себя удары волн монстров, несёт постоянные потери и постепенно тает.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-white rounded-xl border border-indigo-100 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-900">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[11px]">1</span>
                  <span>Вариант А: Отозвать, вылечить и вернуть</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Следите за полоской здоровья отряда. Когда войско ранено — <strong>отзовите отряд домой на базу, вылечите солдат в госпитале/больнице</strong> и отправьте полностью боеспособный отряд обратно в креп.
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-indigo-100 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-900">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[11px]">2</span>
                  <span>Вариант Б: Отправить второй свежий отряд</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Чтобы замок союзника ни на секунду не остался без защиты — <strong>сначала отправьте соклановцу второй свежий (полный) отряд</strong>, и только после этого отзовите раненый отряд домой на лечение.
                </p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2 font-medium">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Если не обновлять войско в подкреплении, разбитый полупустой отряд не удержит следующие сильные волны, и замок соклановца будет пробит!</span>
            </div>
          </div>

          {/* Core Contrast: When ON vs When OFF */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-50/80 border-2 border-emerald-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-md bg-emerald-600 text-white flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5" /> ГАЛОЧКИ СТАВИМ [✅]
                </span>
                <span className="text-xs font-bold text-emerald-800">СОБЫТИЕ «ОСАДА НЕЖИТИ»</span>
              </div>
              <h4 className="text-sm font-bold text-emerald-950">Защищаем и отбиваем святилище</h4>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Перед событием <strong>«Осада нежити»</strong> мы <strong>ОБЯЗАТЕЛЬНО ставим все 4 галочки</strong> напротив каждого отряда (галочки можно выставить в любой момент заранее) и возвращаем все войска домой на базу! 
                Наши солдаты выходят на защиту, отбивают атаки нежити, спасают святилище и забирают топовые сундуки наград.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/80 border-2 border-rose-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-md bg-rose-600 text-white flex items-center gap-1.5">
                  <Square className="w-3.5 h-3.5" /> ГАЛОЧКИ СНИМАЕМ [⬜]
                </span>
                <span className="text-xs font-bold text-rose-800">ВОЙНА В СУББОТУ И МИРНЫЕ ДНИ</span>
              </div>
              <h4 className="text-sm font-bold text-rose-950">Спасаем армию от уничтожения</h4>
              <p className="text-xs text-rose-900 leading-relaxed">
                <strong>СНИМАЕМ галочки во всё обычное время и СТРОГО перед Субботой (Войной серверов)!</strong> 
                Если на базу без щита нападет сильный игрок, отряды на стенах будут намертво перебиты, а армия уничтожена. 
                Со <strong>снятыми галочками</strong> отряды не вступают в бой на стенах: враг заберет ресурсы с базы, но то, что лежит в сумке, останется нетронутым, а главное — <strong>все ваши солдаты останутся живыми</strong>!
              </p>
            </div>
          </div>

          {/* 4 Step Visual Guide */}
          <div>
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-slate-500 mb-3">
              Пошаговая инструкция настройки в игре:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">ШАГ 1</span>
                <h5 className="text-sm font-bold text-slate-900">Возврат войск и клик по базе</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Обязательно верните все отряды домой (со сбора ресурсов и из штурмов)! Затем нажмите на свой замок на карте мира.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">ШАГ 2</span>
                <h5 className="text-sm font-bold text-slate-900">Кнопка «Подкрепление»</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  В появившемся круговом меню действий нажмите круглую кнопку <strong>«Подкрепление»</strong> (человечек со щитом).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">ШАГ 3</span>
                <h5 className="text-sm font-bold text-slate-900">Синяя кнопка «Гарнизон»</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  В открывшемся окне гарнизона нажмите большую синюю кнопку <strong>«Гарнизон»</strong> в самом низу окна.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">ШАГ 4</span>
                <h5 className="text-sm font-bold text-slate-900">Управление галочками</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  В меню <strong>«Настроить оборону города»</strong> напротив каждого отряда переключайте <strong>«Присоединиться к обороне»</strong>: галочка [✅] для Осады нежити, пусто [⬜] перед субботой!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: Cheese Trap & Squad Rules */}
      {(activeFilter === "all" || activeFilter === "cheese") && (
        <div id="rule-cheese" className="rounded-3xl bg-white border-2 border-emerald-400 p-6 sm:p-7 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700">
                <Flame className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                    ПРАВИЛО №5 • РЕГЛАМЕНТ ШТУРМОВ
                  </span>
                  <span className="text-xs text-emerald-700 font-bold">СОХРАНЕНИЕ ВОЙСК</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  Стратегия «Сырной Ловушки» и Правила Штурмов
                </h2>
              </div>
            </div>

            <button
              onClick={() =>
                handleCopyRule(
                  "ПРАВИЛО АЛЬЯНСА: СЫРНАЯ ЛОВУШКА",
                  "1. БОЕВОЕ БЕЗУМИЕ (на 15 мин): перед началом события отправьте разведку на игрока без альянса («бомжа») для бонуса к урону во всех штурмах!\n2. ОСТАНОВКА: как только забрали максимальные личные награды (значок подарка) — СРАЗУ прекращайте участие, чтобы не тратить войска зря.",
                  "cheese_copy"
                )
              }
              className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedRuleId === "cheese_copy" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>Скопировать правило</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-rose-50/80 border border-rose-200 p-4 space-y-1.5">
              <span className="text-xs font-mono font-bold text-rose-800">1. Боевое безумие (+5% к атаке)</span>
              <h4 className="text-sm font-bold text-slate-900">Разведка на «бомжа» (15 мин)</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Перед началом события отправьте разведку на игрока без альянса («бомжа»), чтобы включить Боевое безумие на 15 минут и усилить урон во всех штурмах.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50/80 border border-blue-200 p-4 space-y-1.5">
              <span className="text-xs font-mono font-bold text-blue-700">2. Остановка: Лимит наград</span>
              <h4 className="text-sm font-bold text-slate-900">Остановка после подарков</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Как только значок подарка показывает, что личные награды забраны — <strong className="text-rose-700">СРАЗУ прекращайте участие</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6: Falcon Tower & Red Circle Mechanics (Соколиная башня и Красный кружок) */}
      {(activeFilter === "all" || activeFilter === "falcon") && (
        <div id="rule-falcon" className="rounded-3xl bg-white border-2 border-emerald-500 p-6 sm:p-7 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800">
                <Compass className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">
                    ПРАВИЛО №6 • СОКОЛИНАЯ БАШНЯ
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-500 text-white font-mono flex items-center gap-1 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    🔴 КРАСНЫЙ КРУЖОК = ВЫПОЛНЕНО
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  Правила Соколиной Башни: Механика Красного Кружка 🔴 и График Сдачи
                </h2>
              </div>
            </div>

            <button
              onClick={() =>
                handleCopyRule(
                  "ПРАВИЛО АЛЬЯНСА: СОКОЛИНАЯ БАШНЯ И КРАСНЫЙ КРУЖОК",
                  "1. ВЫПОЛНЯТЬ ОБЯЗАТЕЛЬНО КАЖДЫЙ ДЕНЬ: отправляем отряды на все задания в башне, не даем компасам сгорать!\n2. КРАСНЫЙ КРУЖОК 🔴 = ГОТОВО: когда задание выполнено, появляется красный кружок. Задание НЕ пропадет и НЕ сгорит со сбросом дня!\n3. В ДНИ НАКОПЛЕНИЯ (Четверг, Вторник): кнопку «Забрать» НЕ трогаем! Держим готовые с красным кружком.\n4. В ДНИ СДАЧИ (Пятница, Среда, Понедельник): заходим в башню и жмем «Забрать все» по всем красным кружкам ради взрыва очков в Дуэли!",
                  "falcon_copy"
                )
              }
              className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedRuleId === "falcon_copy" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>Скопировать правило</span>
            </button>
          </div>

          {/* Core Confusion Alert */}
          <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-black text-sm text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>Главная ошибка новичков: в чем разница между «Выполнить» и «Забрать»?</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              Многие соклановцы рассуждают так: <em>«Раз сегодня четверг и очки за Сокола не идут, значит Соколиную башню вообще не трогаем»</em>. 
              <strong> Это грубейшая ошибка!</strong> Если вы не запускаете задания, компасы (энергия) переполняются и пропадают даром, новые задания не появляются, а к пятнице у вас будет пустая башня и 0 очков!
            </p>
            <div className="p-2.5 rounded-xl bg-white/80 border border-amber-300 text-xs font-semibold text-slate-900 flex items-center gap-2">
              <span className="text-rose-600 font-extrabold text-sm">💡 ЗОЛОТОЕ ПРАВИЛО:</span>
              <span>Задания выполняем <strong>КАЖДЫЙ ДЕНЬ</strong> до красного кружка 🔴, а нажимаем «Забрать» — <strong>ТОЛЬКО В ДЕНЬ СДАЧИ (Пятница, Среда, Понедельник)</strong>!</span>
            </div>
          </div>

          {/* 4 Detail Walkthrough Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="text-xs font-mono font-bold text-sky-700 flex items-center gap-1">
                <span>1. ОБЯЗАТЕЛЬНО ВЫПОЛНЯТЬ</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Тратьте компасы каждый день</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Отправляйте отряды на задания всегда, когда есть компасы. Если не выполнять задания, новые не появятся, а энергия сгорит впустую.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-rose-200 space-y-1.5">
              <div className="text-xs font-mono font-bold text-rose-700 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-600 inline-block" />
                <span>2. КРАСНЫЙ КРУЖОК 🔴</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Знак успешного финиша</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Красный кружок означает, что отряд закончил миссию. Задание выполнено и безопасно сохранено на карте. <strong>Оно НЕ пропадет со временем!</strong>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-amber-200 space-y-1.5">
              <div className="text-xs font-mono font-bold text-amber-700 flex items-center gap-1">
                <span>3. В ЧЕТВЕРГ НЕ ЗАБИРАЕМ</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Бережем для Дуэли</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                В четверг идет день Героев. За Сокола очков не дают. Если забрать награду в четверг — вы потеряете сотни тысяч очков дуэли клана.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-emerald-200 space-y-1.5">
              <div className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1">
                <span>4. В ПЯТНИЦУ СДАЕМ И КРУТИМ ВЕСЬ ДЕНЬ!</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Забираем всё и продолжаем весь день</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                В пятницу (фаза войск) открываем башню и жмем «Забрать все» (лавина очков дуэли!). <strong>Важно: если после этого в течение всей пятницы появляются новые задания — отправляем отряды, выполняем и сразу забираем награды весь день!</strong> Все очки пойдут в зачет Дуэли.
              </p>
            </div>
          </div>

          {/* Weekly Falcon Cycle Schedule */}
          <div className="rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200 p-4 space-y-2">
            <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider text-emerald-950 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-600" />
              Расписание работы с Соколиной Башней по дням недели:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 font-mono text-[11px] pt-1">
              <div className="p-2 rounded-xl bg-white border border-emerald-300 text-emerald-900 shadow-2xs">
                <div className="font-extrabold text-emerald-700">ПН (День 1)</div>
                <div className="text-[10px] mt-0.5 text-slate-600">Сдача Сокола (Забрать все) 🟢</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-rose-300 text-rose-900 shadow-2xs">
                <div className="font-extrabold text-rose-700">ВТ (День 2)</div>
                <div className="text-[10px] mt-0.5 text-slate-600">Выполняем до 🔴, НЕ забираем 🔒</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-emerald-300 text-emerald-900 shadow-2xs">
                <div className="font-extrabold text-emerald-700">СР (День 3)</div>
                <div className="text-[10px] mt-0.5 text-slate-600">Сдача Сокола (Забрать все) 🟢</div>
              </div>
              <div className="p-2 rounded-xl bg-white border-2 border-rose-500 text-rose-950 shadow-2xs bg-rose-50/50">
                <div className="font-extrabold text-rose-700 flex items-center gap-1">
                  <span>ЧТ (День 4)</span>
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                </div>
                <div className="text-[10px] mt-0.5 text-rose-900 font-bold">Выполняем ВСЕ до 🔴, НЕ забираем! Копим на ПТ! 🔒</div>
              </div>
              <div className="p-2 rounded-xl bg-white border-2 border-emerald-500 text-emerald-950 shadow-2xs bg-emerald-50/50">
                <div className="font-extrabold text-emerald-700 flex items-center gap-1">
                  <span>ПТ (День 5)</span>
                  <span className="text-xs">🎉</span>
                </div>
                <div className="text-[10px] mt-0.5 text-emerald-900 font-bold">ФИНАЛЬНЫЙ СБОР! Забираем всё + новые задания крутим и сдаем весь день! 🟢</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-300 text-slate-800 shadow-2xs">
                <div className="font-extrabold text-slate-700">СБ (День 6)</div>
                <div className="text-[10px] mt-0.5 text-slate-600">Рейд / Выполняем до 🔴</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-amber-300 text-amber-900 shadow-2xs">
                <div className="font-extrabold text-amber-700">ВС (День 7)</div>
                <div className="text-[10px] mt-0.5 text-slate-600">Выполняем до 🔴, копим на ПН 🔒</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 7: Elixir Race (Гонка за эликсиром) */}
      {(activeFilter === "all" || activeFilter === "elixir") && (
        <div id="rule-elixir" className="rounded-3xl bg-white border-2 border-purple-400 p-6 sm:p-7 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-100 text-purple-700">
                <Timer className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-300">
                    ПРАВИЛО №7 • ГОНКА ЗА ЭЛИКСИРОМ
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-500 text-white font-mono">
                    ОБЯЗАТЕЛЬНАЯ РЕГИСТРАЦИЯ (ПН — СР)
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  Гонка за Эликсиром: Расписание, Регистрация и Время Битвы
                </h2>
              </div>
            </div>

            <button
              onClick={() =>
                handleCopyRule(
                  "ПРАВИЛО АЛЬЯНСА: ГОНКА ЗА ЭЛИКСИРОМ",
                  "• Регистрация открыта с понедельника по среду (в четверг — подбор соперника, в пятницу — битва). Обязательно зарегистрируйтесь в удобное время в Команду А (14:00 МСК) или Команду Б (23:00 МСК). Если вы сами не можете зарегистрироваться — напишите игроку R4, он вам подскажет как это сделать.\n• Подбор соперника: в четверг.\n• Битва: по пятницам — Команда А в 14:00 по МСК, Команда Б в 23:00 по МСК. Длительность матча составляет 30 минут!",
                  "elixir_copy"
                )
              }
              className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedRuleId === "elixir_copy" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>Скопировать правило</span>
            </button>
          </div>

          {/* 3 Stages of the Event */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-purple-800 bg-purple-200/80 px-2 py-0.5 rounded">
                  ЭТАП 1 • ПН — СР
                </span>
                <span className="text-[11px] font-bold text-rose-600">ОБЯЗАТЕЛЬНО</span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">
                Регистрация (Понедельник — Среда)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                С понедельника по среду каждый игрок должен зарегистрироваться на гонку в удобное для себя время — в <strong>Команду А</strong> или <strong>Команду Б</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-indigo-800 bg-indigo-200/80 px-2 py-0.5 rounded">
                  ЭТАП 2 • ЧЕТВЕРГ
                </span>
                <span className="text-[11px] font-bold text-indigo-700">ПОДГОТОВКА</span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">
                Подбор соперника (Четверг)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                В четверг регистрация закрыта — система проводит подбор соперника для обеих команд на пятничный матч.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-rose-800 bg-rose-200/80 px-2 py-0.5 rounded">
                  ЭТАП 3 • ПЯТНИЦА
                </span>
                <span className="text-[11px] font-bold text-rose-700">30 МИНУТ</span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">
                Битва (Пятница: 14:00 и 23:00 МСК)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                По пятницам проходит сама битва: <strong>Команда А в 14:00 по МСК</strong>, <strong>Команда Б в 23:00 по МСК</strong>. Длительность матча — <strong>30 минут</strong>.
              </p>
            </div>
          </div>

          {/* Teams A and B Schedule Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
              <div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900">
                  ⚔️ Команда А (Дневная группа)
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  Пятница • Длительность матча составляет 30 минут
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-purple-100 border border-purple-300 text-purple-900 font-mono font-extrabold text-xs sm:text-sm whitespace-nowrap">
                14:00 по МСК
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
              <div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900">
                  ⚔️ Команда Б (Вечерняя группа)
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  Пятница • Длительность матча составляет 30 минут
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-purple-100 border border-purple-300 text-purple-900 font-mono font-extrabold text-xs sm:text-sm whitespace-nowrap">
                23:00 по МСК
              </span>
            </div>
          </div>

          {/* Help from R4 Callout */}
          <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="text-amber-950 block mb-0.5">
                Что делать, если не получается зарегистрироваться самостоятельно?
              </strong>
              Регистрация открыта <strong>с понедельника по среду</strong> (в четверг — подбор соперника, в пятницу — битва).{" "}
              <strong>Если вы сами не можете зарегистрироваться — напишите игроку R4, он вам подскажет как это сделать.</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
