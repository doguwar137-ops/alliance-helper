import React, { useState } from "react";
import {
  Globe,
  Lock,
  Copy,
  Check,
  Sparkles,
  Info,
  AlertTriangle,
  Compass,
  MapPin,
  ExternalLink,
  Crown,
  ShieldCheck,
  Send,
  Zap,
} from "lucide-react";

export const ServerJumpGuide: React.FC = () => {
  const [serverNumber, setServerNumber] = useState<string>("387");
  const [coordX, setCoordX] = useState<string>("500");
  const [coordY, setCoordY] = useState<string>("500");
  const [linkText, setLinkText] = useState<string>("🌍 НАЖМИ ДЛЯ ПЕРЕХОДА НА СЕРВЕР 387 >");
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedFullMemo, setCopiedFullMemo] = useState(false);

  const cleanServer = serverNumber.trim() || "387";
  const cleanX = coordX.trim() || "500";
  const cleanY = coordY.trim() || "500";
  const cleanText = linkText.trim() || `S${cleanServer}`;

  const generatedTag = `<link=${cleanX}&${cleanY}&${cleanServer}>${cleanText}</link>`;

  const handleCopyTag = () => {
    navigator.clipboard.writeText(generatedTag);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleServerChange = (newVal: string) => {
    const oldClean = serverNumber.trim() || "387";
    const newClean = newVal.trim() || "387";
    setServerNumber(newVal);

    setLinkText((prev) => {
      if (prev.includes(`СЕРВЕР ${oldClean}`)) {
        return prev.replace(`СЕРВЕР ${oldClean}`, `СЕРВЕР ${newClean}`);
      }
      if (prev.includes(`СЕРВЕРА ${oldClean}`)) {
        return prev.replace(`СЕРВЕРА ${oldClean}`, `СЕРВЕРА ${newClean}`);
      }
      if (prev === `S${oldClean}`) {
        return `S${newClean}`;
      }
      return `🌍 НАЖМИ ДЛЯ ПЕРЕХОДА НА СЕРВЕР ${newClean} >`;
    });
  };

  const handlePresetCastle = () => {
    setCoordX("500");
    setCoordY("500");
    setLinkText(`🌍 НАЖМИ ДЛЯ ПЕРЕХОДА НА СЕРВЕР ${cleanServer} >`);
  };

  const handlePresetShort = () => {
    setCoordX("500");
    setCoordY("500");
    setLinkText(`S${cleanServer}`);
  };

  const handlePresetRecon = () => {
    setCoordX("500");
    setCoordY("500");
    setLinkText(`🎯 РАЗВЕДКА СЕРВЕРА ${cleanServer} (${cleanX}:${cleanY}) >`);
  };

  const fullOfficerMemo = `🌍 КАК ПЕРЕЙТИ НА ЛЮБОЙ СЕРВЕР | СКРЫТАЯ МЕХАНИКА (ТОЛЬКО R4/R5)

🔗 ШАБЛОН ДЛЯ УВЕДОМЛЕНИЯ АЛЬЯНСА:
${generatedTag}

⚙️ КАК ЭТО РАБОТАЕТ:
1. Конструкция link=X&Y&Server:
   • ${cleanX} — координата X
   • ${cleanY} — координата Y
   • ${cleanServer} — номер сервера
   (Координаты 500:500 — Королевский замок, центр карты).

2. Текст ссылки:
   «${cleanText}» — текст, на который нажимают игроки.

3. Где публиковать:
   СТРОГО в меню «Альянс» -> «Уведомление альянса»! 
   Публиковать могут только R4 и R5. В обычном чате ссылка НЕ кликается.`;

  const handleCopyMemo = () => {
    navigator.clipboard.writeText(fullOfficerMemo);
    setCopiedFullMemo(true);
    setTimeout(() => setCopiedFullMemo(false), 2500);
  };

  return (
    <div id="server-jump-guide-container" className="space-y-6">
      {/* Officer Hero Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-amber-950 text-white p-6 sm:p-8 border border-amber-500/40 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/25 border border-amber-400/50 text-amber-300 text-xs font-mono font-extrabold uppercase tracking-wider">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                ТОЛЬКО ДЛЯ РУКОВОДСТВА (R4 / R5)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-mono font-bold">
                <Send className="w-3 h-3 text-indigo-300" />
                УВЕДОМЛЕНИЯ АЛЬЯНСА
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white flex items-center gap-2.5 flex-wrap">
              <span>🌍 Как перейти на любой сервер</span>
              <span className="text-amber-400 font-mono text-xl sm:text-2xl font-bold bg-amber-950/60 px-2.5 py-0.5 rounded-lg border border-amber-500/30">
                Скрытая механика
              </span>
            </h1>

            <p className="text-sm text-slate-300 leading-relaxed">
              Секретная конструкция ссылок для офицеров R4 и лидера R5. Позволяет создавать интерактивные кликабельные кнопки прямо в <strong>Уведомлении Альянса</strong>, чтобы участники клана могли в один клик перенести карту на любой выбранный сервер и заданные координаты.
            </p>
          </div>

          <button
            onClick={handleCopyMemo}
            className="flex-shrink-0 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white text-xs font-extrabold transition-all shadow-lg flex items-center justify-center gap-2.5 border border-amber-300/40 cursor-pointer hover:scale-[1.02]"
          >
            {copiedFullMemo ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Инструкция скопирована!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-white" />
                <span>Скопировать инструкцию для R4 / R5</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* R4 / R5 Access Constraint Warning */}
      <div className="rounded-2xl bg-amber-50 border-2 border-amber-400/80 p-4 sm:p-5 shadow-2xs space-y-2">
        <div className="flex items-center gap-2.5 text-amber-950 font-extrabold text-sm sm:text-base">
          <Lock className="w-5 h-5 text-amber-700 flex-shrink-0" />
          <span>Критическое ограничение: Доступно ТОЛЬКО офицерам R4 и лидеру R5</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          Тег <code className="font-mono bg-white px-2 py-0.5 rounded border border-amber-300 text-amber-950 font-bold">&lt;link=X&amp;Y&amp;Server&gt;Текст&lt;/link&gt;</code> обрабатывается игрой <strong>ИСКЛЮЧИТЕЛЬНО в поле «Уведомление альянса»</strong>. В обычном глобальном чате или чате альянса ссылка блокируется и отображается как простой некликабельный текст. Поскольку публиковать уведомления альянса могут только R4/R5, этот инструмент является секретным офицерским навигатором.
        </p>
      </div>

      {/* Interactive Link Generator for Officers */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-100 text-indigo-700">
              <Compass className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-200">
                  ИНСТРУМЕНТ ОФИЦЕРА
                </span>
                <span className="text-xs text-indigo-700 font-bold">ГЕНЕРАТОР ТЕГА</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                Генератор кликабельной ссылки на сервер
              </h2>
            </div>
          </div>

          {/* Quick presets */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-slate-500 font-medium mr-1">Шаблоны:</span>
            <button
              onClick={handlePresetCastle}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition-all"
            >
              🏰 Королевский замок
            </button>
            <button
              onClick={handlePresetRecon}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition-all"
            >
              🎯 Разведка
            </button>
            <button
              onClick={handlePresetShort}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition-all"
            >
              ⚡ Краткий S{cleanServer}
            </button>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Номер сервера (Server)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={serverNumber}
                  onChange={(e) => handleServerChange(e.target.value)}
                  placeholder="387"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none font-mono text-sm font-bold text-slate-900"
                />
                <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-mono">№</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">Например: 387, 345, 412</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Координата X
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={coordX}
                  onChange={(e) => setCoordX(e.target.value)}
                  placeholder="500"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none font-mono text-sm font-bold text-slate-900"
                />
                <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-mono">X</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">500 — центр карты</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Координата Y
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={coordY}
                  onChange={(e) => setCoordY(e.target.value)}
                  placeholder="500"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none font-mono text-sm font-bold text-slate-900"
                />
                <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-mono">Y</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">500 — Королевский замок</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Текст кнопки в игре (обновляется автоматически при смене сервера)
            </label>
            <input
              type="text"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              placeholder={`🌍 НАЖМИ ДЛЯ ПЕРЕХОДА НА СЕРВЕР ${cleanServer} >`}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm font-semibold text-slate-900"
            />
            <span className="text-[11px] text-slate-500 mt-1 block">Кликабельный текст ссылки, который увидят игроки в уведомлении альянса</span>
          </div>
        </div>

        {/* Live Generated Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 text-white space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                ГОТОВАЯ СТРОКА ДЛЯ ВСТАВКИ В УВЕДОМЛЕНИЕ АЛЬЯНСА
              </span>
            </div>
            <button
              onClick={handleCopyTag}
              className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? "Скопировано!" : "Скопировать тег"}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 font-mono text-sm sm:text-base text-amber-300 break-all select-all">
            {generatedTag}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
            <Info className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>В игре в поле уведомления будет виден только текст: <strong className="text-white">«{cleanText}»</strong>, при нажатии на который откроется сервер <strong>{cleanServer}</strong> на координатах <strong>{cleanX}:{cleanY}</strong>.</span>
          </div>
        </div>
      </div>

      {/* 3 Step-by-Step Execution Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Step 1 */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3 shadow-2xs hover:border-amber-300 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-xl bg-amber-100 text-amber-900 font-mono font-black text-sm flex items-center justify-center border border-amber-200">
                ①
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Выбираем сервер и координаты
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              В конструкции <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-amber-900 font-bold">500&amp;500&amp;387</code>:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pl-2 border-l-2 border-amber-300">
              <li>• Первое <strong>500</strong> — координата <strong>X</strong>.</li>
              <li>• Второе <strong>500</strong> — координата <strong>Y</strong>.</li>
              <li>• <strong>387</strong> — номер целевого сервера.</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
            🏰 <strong>500:500 — Королевский замок</strong> в центре карты. Это идеальная стартовая точка для осмотра любого сервера!
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3 shadow-2xs hover:border-emerald-300 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-xl bg-emerald-100 text-emerald-900 font-mono font-black text-sm flex items-center justify-center border border-emerald-200">
                ②
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Меняем отображаемый текст
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              В базовом шаблоне <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-800">&lt;link=...&gt;S387&lt;/link&gt;</code> текст <strong>S387</strong> — это надпись кнопки.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Обязательно замените его на понятный призыв к действию с эмодзи:
              <br />
              <strong className="text-slate-900">«🌍 НАЖМИ ДЛЯ ПЕРЕХОДА НА СЕРВЕР 387 &gt;»</strong>
            </p>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
            💡 В уведомлении ссылка выглядит как обычный текст. Яркая надпись гарантирует, что игроки поймут, куда кликать!
          </div>
        </div>

        {/* Step 3 */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3 shadow-2xs hover:border-indigo-300 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-xl bg-indigo-100 text-indigo-900 font-mono font-black text-sm flex items-center justify-center border border-indigo-200">
                ③
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Публикуем в Уведомлении
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Офицер R4 или лидер R5 открывает:
              <br />
              <strong>Меню «Альянс»</strong> ➔ <strong>«Уведомление альянса»</strong>.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Вставляет сформированную строку и нажимает «Опубликовать». Все участники альянса мгновенно получают кликабельную ссылку.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 font-medium">
            🛡️ Участникам достаточно нажать пальцем на текст в уведомлении, чтобы игра перенесла камеру на чужой сервер!
          </div>
        </div>
      </div>

      {/* Strategic Benefits & Rules Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Why is this needed */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3 shadow-2xs">
          <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-base">
            <Zap className="w-5 h-5 text-amber-600" />
            <span>Зачем это нужно альянсу?</span>
          </div>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <div className="h-5 w-5 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                1
              </div>
              <div>
                <strong className="text-slate-900">Разведка перед субботней войной:</strong>
                <p className="text-slate-600 text-xs mt-0.5">
                  Быстрый переход на сервер оппонента по Дуэли для изучения расположения вражеских баз, ульев и цитаделей.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="h-5 w-5 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                2
              </div>
              <div>
                <strong className="text-slate-900">Координация участников без путаницы:</strong>
                <p className="text-slate-600 text-xs mt-0.5">
                  Не нужно объяснять новичкам в чате «как переключить карту на сервер 387». Одна кнопка переносит весь клан.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="h-5 w-5 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                3
              </div>
              <div>
                <strong className="text-slate-900">Мониторинг соседей:</strong>
                <p className="text-slate-600 text-xs mt-0.5">
                  Быстрый переход для анализа караванов и активности других серверов.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Critical reminders */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3 shadow-2xs">
          <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-base">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <span>Сводка главных правил и нюансов</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">•</span>
              <span><strong>Работает только в Уведомлении:</strong> в обычном чате альянса код не сработает.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">•</span>
              <span><strong>Доступ R4 / R5:</strong> создавать и редактировать уведомления могут только офицеры и лидер.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">•</span>
              <span><strong>Гибкие координаты:</strong> можно указывать не только замок (500:500), но и любую точную цель на карте.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">•</span>
              <span><strong>Замена текста обязательна:</strong> без понятного текста игроки не поймут, что по сообщению можно кликнуть.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
