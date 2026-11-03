import React, { useState } from "react";
import {
  Gift,
  Smartphone,
  Globe,
  Copy,
  Check,
  HelpCircle,
  AlertCircle,
  ExternalLink,
  Mail,
} from "lucide-react";

const OFFICIAL_PORTAL_URL =
  "https://gevents.globallap.com/gamecode/index.html?gameId=440";

export const GiftCodesGuide: React.FC = () => {
  const [copiedMemo, setCopiedMemo] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const androidSteps = [
    "Откройте Last Asylum: Plague на своем устройстве.",
    "Нажмите на значок своего профиля (аватарку) в верхнем левом углу экрана.",
    "Перейдите в меню «Настройки».",
    "Нажмите кнопку «Подарочный код».",
    "Введите или вставьте свой код в текстовое поле и нажмите «Подтвердить» / «ОК».",
    "Проверьте свой внутриигровой почтовый ящик, чтобы забрать предметы.",
  ];

  const iosPortalSteps = [
    "Посетите официальную веб-страницу активации кодов по ссылке ниже.",
    "Войдите в систему, используя учетную запись, привязанную к вашей игре (Google, Facebook или одноразовый код OTP).",
    "Выберите свой сервер и персонажа.",
    "Введите свой код, подтвердите и заберите награды из внутриигрового почтового ящика.",
  ];

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(OFFICIAL_PORTAL_URL);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const handleCopyMemo = () => {
    const text = `🎁 КАК АКТИВИРОВАТЬ ПОДАРОЧНЫЕ КОДЫ В LAST ASYLUM: PLAGUE

Процесс активации бонусов немного отличается в зависимости от того, играете ли вы на Android или iOS (Apple).

📱 СПОСОБ 1: В ИГРЕ (ДЛЯ ANDROID)
1. Откройте игру и нажмите на значок своего профиля в верхнем левом углу.
2. Перейдите в меню «Настройки» ➔ нажмите кнопку «Подарочный код».
3. Введите или вставьте код и нажмите «Подтвердить» / «ОК».
4. Заберите награды во внутриигровом почтовом ящике.

🌐 СПОСОБ 2: ОФИЦИАЛЬНЫЙ САЙТ (ДЛЯ iOS / APPLE И ВСЕХ УСТРОЙСТВ)
Пользователям Apple нужно использовать веб-портал из-за правил App Store:
1. Перейдите на страницу: ${OFFICIAL_PORTAL_URL}
2. Войдите через привязанный к игре аккаунт (Google, Facebook или OTP).
3. Выберите свой сервер и персонажа.
4. Введите код, подтвердите и заберите награды на игровой почте.

⚠️ ВАЖНО: Коды чувствительны к регистру (заглавные и строчные буквы), работают 1 раз на персонажа и имеют ограниченный срок действия!`;

    navigator.clipboard.writeText(text);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <Gift className="w-3.5 h-3.5 text-amber-600" />
              Активация подарочных кодов • Android и iOS (Apple)
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Как активировать подарочные коды в Last Asylum: Plague
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Процесс активации бонусов немного отличается в зависимости от того,
              играете ли вы на{" "}
              <strong className="text-slate-900">Android</strong> или{" "}
              <strong className="text-slate-900">iOS (Apple)</strong>. Подарочные
              коды можно активировать прямо в игре или через официальный
              веб-портал (пользователям iOS/Apple потребуется использовать
              второй способ).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
            <button
              onClick={handleCopyMemo}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
            >
              {copiedMemo ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Скопировано для чата!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Скопировать инструкцию для чата</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Important Note Banner */}
      <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs">
        <div className="p-2 rounded-xl bg-amber-100 text-amber-700 flex-shrink-0 mt-0.5">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
          <span className="font-bold text-amber-900">Обратите внимание:</span>{" "}
          подарочные коды чувствительны к регистру (важны заглавные и строчные
          буквы), используются только один раз на один аккаунт и могут быстро
          истечь. После активации награды приходят на внутриигровую почту.
        </div>
      </div>

      {/* Two Methods Grid: Android vs iOS Web Portal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Method 1: Android In-Game */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-bold">
                    Способ 1 • Прямо в игре
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    Активация в игре для Android
                  </h3>
                </div>
              </div>
            </div>

            <ol className="space-y-2.5">
              {androidSteps.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed"
                >
                  <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-2.5 text-xs text-emerald-900">
            <Mail className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span>
              Письмо с подарком приходит на почту в игре сразу после подтверждения кода.
            </span>
          </div>
        </div>

        {/* Method 2: Official Web Portal for iOS / Apple */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 font-bold">
                    Способ 2 • Обязательно для iPhone / iPad
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    Официальный веб-портал для iOS / Apple
                  </h3>
                </div>
              </div>
            </div>

            <ol className="space-y-2.5">
              {iosPortalSteps.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed"
                >
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Portal Link Box */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-3">
            <div className="text-xs font-bold text-blue-950 uppercase tracking-wider font-mono">
              Официальная страница активации:
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-blue-200 font-mono text-xs text-slate-700 break-all select-all">
              {OFFICIAL_PORTAL_URL}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={OFFICIAL_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-2xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Открыть сайт активации</span>
              </a>
              <button
                onClick={handleCopyUrl}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold text-xs transition-all cursor-pointer"
              >
                {copiedUrl ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Ссылка скопирована!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Скопировать ссылку</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 flex-shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Часто задаваемые вопросы
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Разбор частых проблем при вводе подарочных кодов
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Question 1 */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Почему мой подарочный код не работает?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              В игре Last Asylum: Plague подарочные коды могут оказаться
              недействительными по трем основным причинам:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="p-2.5 rounded-lg bg-white border border-slate-200/80">
                <strong className="text-slate-900">1. Срок действия:</strong>{" "}
                коды имеют строгие временные ограничения, установленные
                разработчиками.
              </li>
              <li className="p-2.5 rounded-lg bg-white border border-slate-200/80">
                <strong className="text-slate-900">2. Учет регистра:</strong>{" "}
                коды должны точно соответствовать заглавным и строчным буквам.
              </li>
              <li className="p-2.5 rounded-lg bg-white border border-slate-200/80">
                <strong className="text-slate-900">
                  3. Одноразовое использование:
                </strong>{" "}
                каждый код можно активировать только один раз для каждого
                профиля персонажа.
              </li>
            </ul>
          </div>

          {/* Question 2 */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Как использовать подарочный код на iOS (Apple)?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Вероятно, вы заглянули в настройки игры и не нашли кнопки ввода
                кода. Пользователям устройств{" "}
                <strong className="text-slate-900">Apple (iPhone / iPad)</strong>{" "}
                приходится использовать официальную веб-страницу из-за правил
                магазина Apple App Store.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900">
              Используйте{" "}
              <strong className="font-bold">Способ 2 (веб-портал)</strong> выше:
              авторизуйтесь через привязанный аккаунт и выберите своего
              персонажа.
            </div>
          </div>

          {/* Question 3 */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Как часто публикуются новые коды Last Asylum?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Новые промокоды появляются во время крупных обновлений игры,
                праздничных мероприятий, в качестве наград за техническое
                обслуживание серверов и за достижения сообщества на официальных
                каналах игры в{" "}
                <strong className="text-slate-900">Facebook</strong> и{" "}
                <strong className="text-slate-900">Discord</strong>.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
              Совет: активируйте новые коды сразу после публикации, так как лимит
              времени у них ограничен.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
