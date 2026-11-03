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

2. ОСТАНОВКА (ПРОВЕРКА ЛИЧНЫХ НАГРАД):
Как только забрали максимальные личные награды (значок подарка в интерфейсе события), СРАЗУ прекращайте участие. Не тратьте войска и энергию впустую.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(guideChatText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="cheese-trap-guide-container" className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-amber-600" />
              <span>СОБЫТИЕ «СЫРНАЯ ЛОВУШКА» • РЕГЛАМЕНТ ШТУРМОВ</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Гайд: Стратегия «Сырной Ловушки» (Крыса)
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Событие «Сырная ловушка» может проходить в любой день недели независимо от фаз Дуэли. 
              Соблюдайте правила участия для получения максимальных наград альянса, быстрого уничтожения босса и экономии войск.
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="flex-shrink-0 px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-2 border border-amber-600 cursor-pointer"
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
      <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-5 sm:p-6 shadow-2xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-rose-100 text-rose-700 border border-rose-200">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-white text-rose-800 border border-rose-200">
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
        <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs text-slate-800 space-y-1.5">
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

      {/* Stop After Personal Rewards Cap Card */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3 shadow-2xs">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-xl bg-blue-50 text-blue-800 font-mono font-black text-sm flex items-center justify-center border border-blue-200">
              01
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Остановка: Проверка личных наград
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Как только вы забрали максимальные личные награды (проверяется через <strong>значок подарка</strong> в интерфейсе события), <strong className="text-rose-700">СРАЗУ прекращайте участие</strong>.
          </p>
        </div>
        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <span className="leading-relaxed font-medium">
            Не тратьте войска и энергию впустую после получения всех личных наград. Уступайте места соклановцам!
          </span>
        </div>
      </div>

      {/* Summary Quick Checklist */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3 shadow-2xs">
        <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
          <Info className="w-4 h-4 text-amber-600" />
          <span>КРАТКАЯ ПАМЯТКА ДЛЯ ИГРОКА ПЕРЕД СТАРТОМ</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-amber-700 font-mono font-bold block">ШАГ 1</span>
            <span className="text-slate-900 font-bold block">Разведка на «бомжа»</span>
            <p className="text-slate-600 text-[11px]">Включает бонус Боевого безумия на 15 мин перед штурмами.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-amber-700 font-mono font-bold block">ШАГ 2</span>
            <span className="text-slate-900 font-bold block">Остановка после подарков</span>
            <p className="text-slate-600 text-[11px]">Забрали личные сундуки — сразу прекращаем участие.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
