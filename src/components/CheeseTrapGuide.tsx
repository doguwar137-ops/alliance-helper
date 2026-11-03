import React, { useState } from "react";
import {
  Flame,
  Target,
  AlertTriangle,
  Gift,
  Users,
  Shield,
  Copy,
  Check,
  Zap,
  Info,
  ShieldAlert,
} from "lucide-react";

export const CheeseTrapGuide: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const guideChatText = `🧀 ГАЙД: СТРАТЕГИЯ «СЫРНОЙ ЛОВУШКИ» (КРЫСА)
1. БОЕВОЕ БЕЗУМИЕ (+5% к атаке на 15 мин):
Перед стартом события найдите на карте игрока без альянса («бомжа»), нажмите на его замок и выберите «Разведчик». Статус включится на 15 минут и усилит все отряды!

2. ЗАПУСК ШТУРМА (ТОЛЬКО СЛАБЫЙ ГЕРОЙ):
При запуске штурма отправляйте ТОЛЬКО 1 слабого героя (синий/фиолетовый 1 ур.) и пару солдат Т1/Т2. 
Категорически запрещено запускать штурм основным ударным составом — вы забьете лимит вместимости для соклановцев!

3. УЧАСТИЕ В ШТУРМАХ (ТОЛЬКО ОСНОВНОЙ СОСТАВ):
Присоединяйтесь к штурмам соклановцев ТОЛЬКО своим главным 1-м ударным отрядом с максимальным уроном. Это максимизирует общий урон альянса.

4. ОСТАНОВКА (ПРОВЕРКА ЛИЧНЫХ НАГРАД):
Как только забрали максимальные личные награды (значок подарка в интерфейсе события), СРАЗУ прекращайте участие. Не тратьте войска и выносливость впустую.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(guideChatText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="cheese-trap-guide-container" className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-amber-950 via-slate-900 to-slate-900 text-white p-6 sm:p-8 border border-amber-500/30 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-amber-400" />
              <span>СОБЫТИЕ «СЫРНАЯ ЛОВУШКА» • РЕГЛАМЕНТ ШТУРМОВ</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Гайд: Стратегия «Сырной Ловушки» (Крыса)
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Событие «Сырная ловушка» может проходить в любой день недели независимо от фаз Дуэли. 
              Соблюдайте четкие правила формирования штурмов для максимизации наград альянса, быстрого уничтожения босса и экономии войск.
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="flex-shrink-0 px-4 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 border border-amber-400/40 cursor-pointer hover:scale-[1.02]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Гайд скопирован!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-white" />
                <span>Скопировать памятку для чата</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Battle Frenzy Pro-Secret Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-rose-50 via-orange-50 to-amber-50 border-2 border-rose-300 p-5 sm:p-6 shadow-2xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-rose-600 text-white shadow-xs">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-200">
              СЕКРЕТ МАКСИМАЛЬНЫХ ОЧКОВ • ДЕЙСТВУЕТ 15 МИНУТ
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
              Активация «Боевого безумия» перед началом Сырной ловушки
            </h3>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
          Чтобы набрать значительно больше очков и нанести максимальный урон по боссу, <strong>перед началом события обязательно запустите статус «Боевое безумие» (он активируется ровно на 15 минут)</strong>! Оно дает мощный бонус к атаке ваших отрядов во всех штурмах.
        </p>
        <div className="p-3.5 rounded-xl bg-white/90 border border-rose-200 text-xs text-slate-800 space-y-1.5">
          <div className="font-bold text-rose-900 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-rose-600" />
            <span>Как активировать Боевое безумие за 5 секунд:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-slate-700 pl-1 font-medium">
            <li>Найдите на карте любого игрока без альянса («бомжа»).</li>
            <li>Нажмите на его замок (домик).</li>
            <li>В появившемся меню нажмите кнопку <strong>«Разведчик»</strong>.</li>
          </ol>
          <div className="text-[11px] text-emerald-800 font-bold bg-emerald-50 px-2 py-1 rounded border border-emerald-200 mt-1 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Разведка отправлена — статус Боевого безумия активирован на 15 минут, урон ваших отрядов увеличен!</span>
          </div>
        </div>
      </div>

      {/* 3 Core Strategy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 01: Launch Rally with Weak Hero */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3 shadow-2xs hover:border-amber-300 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-xl bg-amber-100 text-amber-900 font-mono font-black text-sm flex items-center justify-center border border-amber-200">
                01
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Запуск штурма: Только слабый герой
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              При запуске штурма на Сырную ловушку отправляйте <strong>ТОЛЬКО ОДНОГО слабого героя</strong> (синего или фиолетового качества, 1 уровня) с парой солдат (Т1 или Т2).
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <span className="leading-relaxed font-medium">
              <strong>Категорически запрещено</strong> запускать штурм основным ударным составом! Вы забьете лимит вместимости штурма для соклановцев.
            </span>
          </div>
        </div>

        {/* Card 02: Join Rallies with Main Squad */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3 shadow-2xs hover:border-emerald-300 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-xl bg-emerald-100 text-emerald-900 font-mono font-black text-sm flex items-center justify-center border border-emerald-200">
                02
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Участие в штурмах: Только основной состав
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Присоединяйтесь к штурмам соклановцев <strong>ТОЛЬКО своим основным составом</strong> (1-м ударным отрядом) с максимальным уроном.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span className="leading-relaxed font-medium">
              Это позволяет нанести <strong>максимальный общий урон</strong> ловушке и забрать высшие командные ранги.
            </span>
          </div>
        </div>

        {/* Card 03: Stop After Personal Rewards Cap */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3 shadow-2xs hover:border-blue-300 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-xl bg-blue-100 text-blue-900 font-mono font-black text-sm flex items-center justify-center border border-blue-200">
                03
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Остановка: Проверка личных наград
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Как только вы забрали максимальные личные награды (проверяется через <strong>значок подарка</strong> в интерфейсе события), <strong className="text-rose-700">СРАЗУ прекращайте участие</strong>.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <span className="leading-relaxed font-medium">
              Не тратьте войска и выносливость впустую после достижения индивидуального капа наград. Уступайте места соклановцам!
            </span>
          </div>
        </div>
      </div>

      {/* Summary Quick Checklist */}
      <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 space-y-3 shadow-md">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <Info className="w-4 h-4" />
          <span>КРАТКАЯ ПАМЯТКА ДЛЯ ИГРОКА ПЕРЕД СТАРТОМ</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
            <span className="text-amber-400 font-mono font-bold block">ШАГ 1</span>
            <span className="text-slate-200 font-semibold block">Разведка на «бомжа»</span>
            <p className="text-slate-400 text-[11px]">Включает бафф Боевого безумия на 15 мин перед штурмами.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
            <span className="text-amber-400 font-mono font-bold block">ШАГ 2</span>
            <span className="text-slate-200 font-semibold block">Запуск: 1 слабый герой</span>
            <p className="text-slate-400 text-[11px]">1 герой 1 ур. + 1 солдат Т1. Никаких полных отрядов!</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
            <span className="text-amber-400 font-mono font-bold block">ШАГ 3</span>
            <span className="text-slate-200 font-semibold block">Вход: 1-й ударный отряд</span>
            <p className="text-slate-400 text-[11px]">Входим в штурмы соклановцев своим сильнейшим отрядом.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
            <span className="text-amber-400 font-mono font-bold block">ШАГ 4</span>
            <span className="text-slate-200 font-semibold block">Стоп при капе подарка</span>
            <p className="text-slate-400 text-[11px]">Собрали личные сундуки — сразу прекращаем траты сил.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
