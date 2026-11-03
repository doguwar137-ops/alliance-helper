import React, { useState } from "react";
import {
  Flame,
  Sparkles,
  Shield,
  Swords,
  Castle,
  Compass,
  ShoppingBag,
  Copy,
  Check,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Award,
  HeartPulse,
  BookOpen,
  Layers,
} from "lucide-react";

interface SpecUnlockLevel {
  level: number;
  reward: string;
  note: string;
  highlight?: boolean;
}

const SPEC_UNLOCK_LEVELS: SpecUnlockLevel[] = [
  {
    level: 10,
    reward: "1 бесплатное прямое перемещение (телепорт) в день",
    note: "Не копится на следующий день — используйте ежедневно при необходимости!",
  },
  {
    level: 15,
    reward: "Фрагменты эксклюзивного оружия в Битве за выживание",
    note: "Начиная с 8-го дня Эры в последнем сундуке за 18 очков!",
    highlight: true,
  },
  {
    level: 20,
    reward: "Фрагменты эксклюзивного оружия в Войне королевств (КВК)",
    note: "Доступны в наградах за победные серии.",
    highlight: true,
  },
  {
    level: 25,
    reward: "Доступ к фрагментам оружия через VIP-магазин",
    note: "Дополнительный регулярный источник фрагментов.",
  },
  {
    level: 35,
    reward: "Доступ к фрагментам оружия через Магазин альянса",
    note: "Покупка за валюту альянса без траты алмазов.",
    highlight: true,
  },
  {
    level: 40,
    reward: "Доступ к фрагментам оружия через Магазин святилища",
    note: "Максимальный уровень доступа к магазинам сезона.",
    highlight: true,
  },
];

export const EraOfRevivalGuide: React.FC = () => {
  const [copiedMail, setCopiedMail] = useState(false);
  const [copiedChat, setCopiedChat] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("all");

  const handleCopyFullGuide = () => {
    const text = `🔥 ГАЙД ПО СЕЗОНУ «ЭРА ВОЗРОЖДЕНИЯ» (2 МЕСЯЦА) 🔥

🏛️ 1. СТАТУЯ ЛОРДА: СПЕЦИАЛИЗАЦИЯ И СОПРОТИВЛЕНИЕ
• Цепочка прогресса: Уровень Специализации ➔ больше опыта Сопротивления в час со Статуи ➔ возможность бить сезонных монстров выше уровнем ➔ лучшие награды.
• Выбор ветки (смена только через редкую Книгу сброса!):
  - 🛠️ УМЕЛЕЦ (Рекомендуется на старте и без доната): быстрый разгон специализации, максимум пользы от ежедневных заданий, выносливости и охоты на монстров.
  - ⚔️ КОМАНДИР ЛЕГИОНА: боевая ветка для сильных игроков под КВК, штурмы и битву за трон.
• Уровни Специализации (открывают фрагменты эксклюзивного оружия):
  - 10 ур.: 1 бесплатный прямой телепорт в день (не копится!)
  - 15 ур.: фрагменты оружия в Битве за выживание (с 8-го дня Эры, сундук за 18 очков)
  - 20 ур.: фрагменты оружия в победных сериях Войны королевств
  - 25 ур.: доступ в VIP-магазине
  - 35 ур.: доступ в Магазине альянса
  - 40 ур.: доступ в Магазине святилища

⚔️ 2. ПРОБУЖДЕНИЕ МАРЛЕНЫ И UR-КЛЭР
• Пробуждение Марлены: обычные фрагменты идут только на звёзды! Для старта пробуждения нужно 50 индивидуальных фрагментов пробуждения (далее — индивидуальные или универсальные из 6 и 9 сундуков Дуэли альянсов, магазина чести и экспедиции). Даёт механику «Боевая воля» (заряды от критических ударов, усиление атаки, здоровья и защиты всех воинов в отряде).
• Возвышение Клэр (SSR ➔ UR бесплатно на 2-й неделе): медаль даётся за прогресс Сопротивления. После возвышения Клэр пропадает из Зала славы (ресурсы вернутся на почту!), звёзды становятся ~6★, а навыки сбрасываются. Сначала восстановите её ключевой пассивный навык — она отличный герой поддержки против монстров для воинов и Марлены!

🛡️ 3. ЭКСКЛЮЗИВНОЕ ОРУЖИЕ ДАСКАЛА И БОНУСЫ ПРОТИВ МОНСТРОВ
• Оружие Даскала (со 2-й недели): отдельный слот экипировки (не заменяет обычный меч!). 4★ — урон 1-го навыка; 6★ — щит герою поддержки при здоровье ниже 50%; 8★ — восстановление здоровья от 2-го навыка +400%; 10★ — высший навык даёт +30% поглощающего щита.
• Бонусы Эры против монстров (соберите отдельный отряд для охоты!):
  - +5% урона по монстрам за каждого: Клэр, Марлена, Синтия, Энни.
  - -5% урона от монстров за каждого: Даскал, Луи, Ульфрид.

🛒 4. МАГАЗИН ЭРЫ, БАШНЯ 60 УР. И СОЛДАТСКИЙ ПРИЮТ
• Магазин Эры: главный приоритет — КРАСНЫЕ ЧЕРТЕЖИ (для снаряжения 5★).
• Башня экспедиции (до 60 ур.): на этажах 50+ из золотых сундуков выпадают универсальные фрагменты эксклюзивного оружия.
• Солдатский приют: часть погибших солдат попадает в приют и со временем возвращается в казармы.
• Таверна и Рулетка: Даскал и Леди добавлены в обычную таверну (крутим билеты строго по четвергам в Дуэль!). Рулетку Марлены (9000 алмазов за 10 попыток) игрокам без доната при 10★ Марлене лучше пропустить.`;

    navigator.clipboard.writeText(text);
    setCopiedMail(true);
    setTimeout(() => setCopiedMail(false), 2500);
  };

  const handleCopyShortChat = () => {
    const text = `🔥 ЭРА ВОЗРОЖДЕНИЯ (Главное): 1) Качаем Статую Лорда (ветка «Умелец» для разгона ➔ 15-40 ур. открывают фрагменты эксклюзивного оружия!). 2) Закрываем Битву за выживание (18 очков) и 6/9 сундуки Дуэли (универсальные фрагменты пробуждения). 3) На 2-й неделе бесплатно возвышаем Клэр до UR (заберите возврат ресурсов с почты и прокачайте пассивный навык!). 4) В Магазине Эры берем Красные чертежи!`;
    navigator.clipboard.writeText(text);
    setCopiedChat(true);
    setTimeout(() => setCopiedChat(false), 2500);
  };

  const filterButtons = [
    { id: "all", label: "Все разделы (Полный гайд)" },
    { id: "statue", label: "Статуя Лорда и Специализация" },
    { id: "heroes", label: "Марлена, UR-Клэр и Оружие Даскала" },
    { id: "economy", label: "Магазины, Таверна и План действий" },
  ];

  return (
    <div id="era-of-revival-guide" className="space-y-6">
      {/* Unified Light Header Banner */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                СЕЗОННОЕ ОБНОВЛЕНИЕ (2 МЕСЯЦА)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                32 СЕРВЕРА • ПРОБУЖДЕНИЕ • ЭКСКЛЮЗИВНОЕ ОРУЖИЕ
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Гайд по сезону «Эра Возрождения»
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Эра Возрождения — это двухмесячная сезонная система, где все механики связаны в одну цепочку:{" "}
              <strong className="text-slate-900">
                Специализация ускоряет Сопротивление ➔ Сопротивление открывает сезонных монстров и UR-Клэр ➔ Уровни Специализации открывают фрагменты эксклюзивного оружия
              </strong>
              . Пробуждение героев и оружие остаются у вас навсегда после окончания Эры!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-shrink-0">
            <button
              onClick={handleCopyFullGuide}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              {copiedMail ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Скопировано для Альянса!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-white" />
                  <span>Скопировать весь гайд</span>
                </>
              )}
            </button>
            <button
              onClick={handleCopyShortChat}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-bold transition-all cursor-pointer"
            >
              {copiedChat ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Скопировано для чата!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Краткая памятка в чат</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 sm:flex-wrap">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveSection(btn.id)}
              className={`whitespace-nowrap shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSection === btn.id
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: Состязание Эры, Статуя Лорда, Сопротивление и Специализация */}
      {(activeSection === "all" || activeSection === "statue") && (
        <div className="space-y-6">
          {/* Состязание Эры и Сезонные мобы */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700 border border-indigo-200">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-900">
                    32 СЕРВЕРА • 2 ГРУППЫ
                  </span>
                  <h2 className="text-lg font-extrabold text-slate-900 mt-0.5">
                    Состязание Эры и командная явка в КВК
                  </h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                32 сервера делятся на две большие группы и <strong>2 месяца</strong> соревнуются за личные, альянсовые и серверные награды. Очки альянсы получают во время <strong>битвы за трон в КВК</strong>.
              </p>
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                <div className="font-extrabold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Важное правило начисления очков:</span>
                </div>
                <p>
                  У <strong>победившей стороны</strong> за одно и то же место в рейтинге дают значительно больше очков, чем у проигравшей! Просто «постоять рядом» больше не работает — важна массовая активность всего сервера и альянса.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-200">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                    УСТРАНЕНИЕ УГРОЗ
                  </span>
                  <h2 className="text-lg font-extrabold text-slate-900 mt-0.5">
                    Сезонные мобы и Уровень Заражения
                  </h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Обычные ресурсные мобы и элитные скверны заменяются сезонными. У каждого моба есть <strong>уровень заражения</strong>, против которого требуется <strong>Сопротивление</strong>. Даже очень сильный отряд не пробьёт высокого моба, если не хватает Сопротивления!
              </p>
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                <div className="font-extrabold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Совет по экономии энергии:</span>
                </div>
                <p>
                  Рейтинг строится по принципу: <strong>выше тот, кто первым убивает мобов более высокого уровня</strong>. Не сливайте энергию на первых попавшихся мелких мобов — сначала проверьте своё Сопротивление и бейте максимальный доступный уровень!
                </p>
              </div>
            </div>
          </div>

          {/* Статуя Лорда и Выбор Специализации */}
          <div className="rounded-2xl bg-white border-2 border-amber-300 p-5 sm:p-6 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500 text-slate-950 shadow-xs">
                  <Castle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                      ГЛАВНОЕ ЗДАНИЕ СЕЗОНА
                    </span>
                    <span className="text-xs font-bold text-rose-700">
                      ⚠️ Не оставляйте постройку и сбор на потом!
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                    Статуя Лорда: Сопротивление и Специализация
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Статуя Лорда пассивно накапливает <strong>опыт Сопротивления</strong> (его нужно регулярно собирать как ресурс). Количество опыта в час напрямую зависит от вашего <strong>уровня Специализации</strong>. Книги опыта специализации добываются с мобов, контрольных точек Дуэли альянсов, недельного пропуска Эры, пропуска «Завет Эры» и войны за трон.
            </p>

            {/* 2 Ветки специализации */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-emerald-50/70 border-2 border-emerald-400 p-4 sm:p-5 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-600 text-white text-[11px] font-extrabold uppercase font-mono">
                    РЕКОМЕНДУЕТСЯ НА СТАРТЕ И БЕЗ ДОНАТА
                  </span>
                  <span className="text-xs font-bold text-emerald-800">Ветка Развития</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <span>🛠️ Специализация «Умелец»</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Лучший выбор для старта сезона и для большинства игроков. Позволяет <strong>быстрее прокачивать саму специализацию и сопротивление</strong>, получать максимум пользы от ежедневных заданий, эффективнее бить сезонных монстров и экономнее расходовать выносливость.
                </p>
              </div>

              <div className="rounded-xl bg-rose-50/60 border border-rose-300 p-4 sm:p-5 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-rose-600 text-white text-[11px] font-extrabold uppercase font-mono">
                    ДЛЯ СИЛЬНЫХ БОЙЦОВ И КВК
                  </span>
                  <span className="text-xs font-bold text-rose-800">Боевая Ветка</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <span>⚔️ Специализация «Командир легиона»</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Боевая ветка для тех, кто постоянно воюет в первых рядах альянса, водит штурмы, бьётся за трон и набирает боевой рейтинг в КВК. <strong>Внимание:</strong> смена ветки требует редкую <em>Книгу сброса</em>, поэтому в начале сезона выгоднее сначала развить аккаунт через «Умельца»!
                </p>
              </div>
            </div>

            {/* Таблица уровней специализации */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-600" />
                <span>Что открывают уровни Специализации (Источники эксклюзивного оружия):</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {SPEC_UNLOCK_LEVELS.map((item) => (
                  <div
                    key={item.level}
                    className={`p-3.5 rounded-xl border flex flex-col justify-between ${
                      item.highlight
                        ? "bg-amber-50/70 border-amber-300 shadow-2xs"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-900 text-amber-400 font-mono text-xs font-black">
                          УРОВЕНЬ {item.level}
                        </span>
                        {item.highlight && (
                          <span className="text-[10px] font-bold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded">
                            ОРУЖИЕ
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.reward}
                      </p>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-2 pt-2 border-t border-slate-200/80">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: Пробуждение Марлены, UR-Клэр, Оружие Даскала и Бонусы против мобов */}
      {(activeSection === "all" || activeSection === "heroes") && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Пробуждение Марлены */}
            <div className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-200 text-xs font-extrabold font-mono uppercase">
                  ПЕРВЫЙ ПРОБУЖДЁННЫЙ ГЕРОЙ
                </span>
                <span className="text-xs font-bold text-amber-800 font-mono">
                  Старт: 50 инд. фрагментов пробуждения
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <Flame className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <span>Пробуждение Марлены</span>
              </h2>

              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-1">
                <div className="font-extrabold text-rose-800 uppercase">
                  ⚠️ Обычные фрагменты НЕ подходят для пробуждения!
                </div>
                <p>
                  Простые фрагменты Марлены идут только на звёзды. Для старта пробуждения нужно <strong>50 индивидуальных фрагментов пробуждения Марлены</strong>, а дальше уровни прокачиваются индивидуальными или <strong>универсальными фрагментами пробуждения</strong>.
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="font-bold text-slate-900">
                  Что даёт Пробуждение и механика «Боевая воля»:
                </div>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>
                      <strong>Заряды «Боевой воли»:</strong> при критических ударах Марлена накапливает заряды усиления, повышающие её урон и живучесть. Чем больше в отряде <strong>героев-воинов</strong>, тем выше предел зарядов!
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>
                      <strong>Усиление всех Воинов:</strong> повышает Атаку, Здоровье и Защиту всех союзных воинов, ослабляет врагов, мощно начинает бой по цели с наибольшим запасом здоровья и добавляет дополнительные удары меча.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      <strong>Где брать фрагменты пробуждения:</strong> билет пропуска Эры, дневные акции (со 2-й недели), а универсальные — в <strong>6-й и 9-й контрольных точках Дуэли альянсов</strong>, магазине чести и магазине экспедиции.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Возвышение Клэр до UR */}
            <div className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-md bg-sky-100 text-sky-900 border border-sky-200 text-xs font-extrabold font-mono uppercase">
                  БЕСПЛАТНЫЙ ПЕРЕХОД SSR ➔ UR
                </span>
                <span className="text-xs font-bold text-sky-800 font-mono">
                  2-я неделя Эры • За медаль Сопротивления
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <span>Возвышение Клэр до легендарного UR</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                На второй неделе Эры старую SSR-Клэр можно <strong>бесплатно поднять до UR</strong> с помощью специальной медали, которая выдаётся за прогресс Сопротивления. Она становится важным <strong>героем поддержки против монстров для отряда Воинов и Марлены</strong> (увеличивает урон по сезонным монстрам и Королю демонов).
              </p>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1.5">
                <div className="font-extrabold text-amber-900 uppercase">
                  ⚠️ Важная особенность при улучшении до UR (Не пугайтесь!):
                </div>
                <ul className="space-y-1">
                  <li>
                    • После возвышения Клэр <strong>пропадает из Зала славы</strong>, её навыки сбрасываются, а звёзды переходят примерно на <strong>6★</strong> (дальнейшая прокачка звёзд стоит дороже примерно в 2 раза).
                  </li>
                  <li>
                    • <strong>Обязательно проверьте почту:</strong> часть ресурсов, вложенных в Зал славы, возвращается письмом!
                  </li>
                  <li>
                    • <strong>Сначала прокачайте пассивный навык:</strong> без прокачанного ключевого пассивного навыка UR-Клэр в первом бою покажется слабее старой SSR. Восстановите пассивный навык — и урон по боссам сильно вырастет!
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Эксклюзивное оружие Даскала и Бонусы Эры против монстров */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 border border-amber-200">
                  <Swords className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                    ОТДЕЛЬНЫЙ СЛОТ ЭКИПИРОВКИ (2-Я НЕДЕЛЯ)
                  </span>
                  <h2 className="text-lg font-extrabold text-slate-900 mt-0.5">
                    Эксклюзивное оружие Даскала
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Эксклюзивное оружие <strong>не заменяет обычный меч героя</strong> — это отдельная экипировка, работающая вместе с основными вещами! Открывается за индивидуальные фрагменты оружия Даскала, а дальше качается индивидуальными или универсальными фрагментами.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-black text-amber-700 block">⭐ 4 Звезды</span>
                  <span className="text-slate-700">Усиливается дополнительный урон от первого навыка Даскала.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-black text-amber-700 block">⭐ 6 Звёзд</span>
                  <span className="text-slate-700">Герой поддержки при падении HP ниже 50% получает защитный щит.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-black text-amber-700 block">⭐ 8 Звёзд</span>
                  <span className="text-slate-700">Восстановление здоровья от второго навыка увеличивается на +400%.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-black text-amber-700 block">⭐ 10 Звёзд</span>
                  <span className="text-slate-700">Высший навык получает ещё +30% поглощающего щита.</span>
                </div>
              </div>
            </div>

            {/* Бонусы Эры против монстров */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-100 text-purple-700 border border-purple-200">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-900">
                    СЕКРЕТ ПРОБИТИЯ СИЛЬНЫХ МОНСТРОВ
                  </span>
                  <h2 className="text-lg font-extrabold text-slate-900 mt-0.5">
                    Бонусы Эры: специальный отряд против монстров
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                В разделе «Бонусы Эры» конкретные герои дают прямые процентные усиления против монстров. Когда вы упираетесь в сезонного монстра высокого уровня, соберите <strong>отдельный отряд для охоты</strong> из этих героев:
              </p>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-xs font-extrabold text-emerald-900 uppercase">
                    🗡️ +5% к урону по монстрам за каждого героя в отряде:
                  </div>
                  <div className="text-sm font-black text-slate-900 mt-1">
                    Клэр • Марлена • Синтия • Энни
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200">
                  <div className="text-xs font-extrabold text-sky-900 uppercase">
                    🛡️ -5% входящего урона от монстров за каждого героя в отряде:
                  </div>
                  <div className="text-sm font-black text-slate-900 mt-1">
                    Даскал • Луи • Ульфрид
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: Магазины, Башня 60 ур., Солдатский приют, Таверна и План F2P */}
      {(activeSection === "all" || activeSection === "economy") && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Магазин Эры */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-rose-100 text-rose-700">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Магазин Эры и Образов
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Главный приоритет в Магазине Эры для всех — <strong>Красные чертежи</strong> (нужны для повышения снаряжения на 5★). Также в магазине есть реликвия «Светоч эпохи», книги смены специализации, книги сброса навыков и доп. очки навыков.
              </p>
              <p className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                В Магазине образов скин белки стоит 40 000 купонов и даёт +100 к сопротивлению на время Эры (актуально только для крупных донатеров).
              </p>
            </div>

            {/* Башня экспедиции 60 ур. и старые активности */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Башня 60 ур. и Выживание
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Башню экспедиции подняли до <strong>60 уровня</strong>: на этажах <strong>50+</strong> из золотых сундуков падают <strong>универсальные фрагменты эксклюзивного оружия</strong>!
              </p>
              <p className="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200 font-medium">
                Также добавлены новые точки урона по Королю демонов, усилены Сырные ловушки, а последний сундук (18 очков) в Битве за выживание даёт фрагменты оружия (с 15 ур. специализации).
              </p>
            </div>

            {/* Солдатский приют и Таверна */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Солдатский приют и Таверна
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Солдатский приют:</strong> новое здание, куда попадает часть безвозвратно погибших солдат — со временем они восстанавливаются и возвращаются в казармы.
              </p>
              <p className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <strong>Таверна и Рулетка:</strong> Даскал и Леди добавлены в обычную таверну (крутим билеты строго в дни ивентов!). 4-ю рулетку Марлены (9 000 алмазов за 10 круток) при 10★ Марлене лучше не трогать.
              </p>
            </div>
          </div>

          {/* Итоговый чек-лист приоритетов F2P / Low-spend */}
          <div className="rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-amber-50 border-2 border-emerald-300 p-5 sm:p-6 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-200 text-emerald-950">
                  ДОРОЖНАЯ КАРТА НА 2 МЕСЯЦА
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                  Пошаговый план действий для каждого игрока Альянса
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-emerald-200 shadow-2xs space-y-1">
                <span className="font-mono font-black text-emerald-700 uppercase">ШАГ 1 • БАЗА СЕЗОНА</span>
                <div className="font-extrabold text-slate-900 text-sm">Статуя Лорда и «Умелец»</div>
                <p className="text-slate-600 leading-relaxed">
                  Сразу строим Статую Лорда, выбираем ветку «Умелец», вовремя собираем опыт Сопротивления и гоним Специализацию до 15–40 уровней ради источников оружия.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-emerald-200 shadow-2xs space-y-1">
                <span className="font-mono font-black text-emerald-700 uppercase">ШАГ 2 • ЕЖЕДНЕВКИ</span>
                <div className="font-extrabold text-slate-900 text-sm">100% закрытие сундуков</div>
                <p className="text-slate-600 leading-relaxed">
                  Закрываем Битву за выживание (все 18 очков), Дуэль альянсов (6 и 9 точки дают фрагменты пробуждения), Башню экспедиции (50+ этажи) и сезонных мобов по макс. уровню.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-emerald-200 shadow-2xs space-y-1">
                <span className="font-mono font-black text-emerald-700 uppercase">ШАГ 3 • ГЕРОИ</span>
                <div className="font-extrabold text-slate-900 text-sm">Марлена, UR-Клэр, Даскал</div>
                <p className="text-slate-600 leading-relaxed">
                  Пробуждаем Марлену (50 инд. фрагментов), на 2-й неделе бесплатно возвышаем Клэр до UR (возвращаем ей пассивку!) и собираем эксклюзивное оружие Даскала.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-emerald-200 shadow-2xs space-y-1">
                <span className="font-mono font-black text-emerald-700 uppercase">ШАГ 4 • ЭКОНОМИЯ</span>
                <div className="font-extrabold text-slate-900 text-sm">Красные чертежи и резерв</div>
                <p className="text-slate-600 leading-relaxed">
                  В Магазине Эры не распыляем валюту — забираем в первую очередь Красные чертежи для 5★ снаряжения. Универсальные фрагменты пробуждения тратим строго по плану!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
