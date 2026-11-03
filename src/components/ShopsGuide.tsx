import React from "react";
import {
  Crown,
  Shield,
  Compass,
  Award,
  Landmark,
  Coins,
  TrendingUp,
  Users,
} from "lucide-react";

export const ShopsGuide: React.FC = () => {
  return (
    <div id="shops-guide-container" className="space-y-6">
      {/* Main Header Card */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
          <Coins className="w-4 h-4 text-amber-600" />
          <span>Приоритеты покупок</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Гайд по приоритетам магазинов
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Что покупать в первую очередь в каждом магазине для максимальной выгоды
        </p>
      </div>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {/* LEFT COLUMN: VIP-МАГАЗИН & МАГАЗИН ЧЕСТИ */}
        <div className="space-y-5">
          {/* VIP-МАГАЗИН */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="pb-3 border-b border-slate-200 mb-3.5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-sky-50 border border-sky-200 text-sky-700">
                    <Crown className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-extrabold tracking-wide text-slate-900 uppercase">
                      VIP-МАГАЗИН
                    </h2>
                    <p className="text-xs text-slate-500">
                      Лучшая ценность для ежедневного прогресса
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">1.</span>
                  <span className="w-6 h-6 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[11px]">🧪</span>
                  <span className="text-slate-800 font-medium">10 Энергии</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-amber-700 font-extrabold uppercase text-[11px] tracking-wide">ОБЯЗАТЕЛЬНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">2.</span>
                  <span className="w-6 h-6 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-[11px]">🧩</span>
                  <span className="text-slate-800 font-medium">Осколок героя UR</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-amber-700 font-bold uppercase text-[11px] tracking-wide">ВЫСОКИЙ ПРИОРИТЕТ</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">3.</span>
                  <span className="w-6 h-6 rounded bg-sky-50 border border-sky-200 flex items-center justify-center text-[11px]">⏩</span>
                  <span className="text-slate-800 font-medium">Ускорение 60 мин.</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-sky-700 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">4.</span>
                  <span className="w-6 h-6 rounded bg-sky-50 border border-sky-200 flex items-center justify-center text-[11px]">⏩</span>
                  <span className="text-slate-800 font-medium">Ускорение 3 ч.</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-sky-700 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">5.</span>
                  <span className="w-6 h-6 rounded bg-sky-50 border border-sky-200 flex items-center justify-center text-[11px]">⏩</span>
                  <span className="text-slate-800 font-medium">Ускорение 8 ч.</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-amber-700 font-semibold uppercase text-[11px] tracking-wide">ПОСЛЕ ПРОГРЕССА UR</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">6.</span>
                  <span className="w-6 h-6 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[11px]">⏩</span>
                  <span className="text-slate-800 font-medium">Ускорение 5 мин.</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-slate-500 font-medium uppercase text-[11px] tracking-wide">ПОЗЖЕ</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right pt-0.5">7.</span>
                  <span className="w-6 h-6 rounded bg-purple-50 border border-purple-200 flex items-center justify-center text-[11px] flex-shrink-0 mt-0.5">🔮</span>
                  <div className="leading-snug">
                    <span className="text-slate-800 font-medium">Осколок героя SSR</span>
                    <span className="text-slate-400"> – </span>
                    <span className="text-purple-700 font-semibold uppercase text-[11px]">ПОКУПАТЬ, ЕСЛИ ВАЛЮТА В ИЗБЫТКЕ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Примечание:</strong> Сначала покупайте энергию, затем фокусируйтесь на прогрессе UR, потом на ускорениях, и только потом на осколках SSR.
            </div>
          </div>

          {/* МАГАЗИН ЧЕСТИ */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs">
            <div className="pb-3 border-b border-slate-200 mb-3.5">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-700">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-extrabold tracking-wide text-slate-900 uppercase">
                    МАГАЗИН ЧЕСТИ
                  </h2>
                  <p className="text-xs text-slate-500">
                    Не тратьте очки впустую
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-[13px]">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-4 text-right">1.</span>
                <span className="w-6 h-6 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-[11px]">📜</span>
                <span className="text-slate-800 font-medium">Чертёж снаряжения (UR)</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-700 font-extrabold uppercase text-[11px] tracking-wide">ТОЛЬКО ЭТО!</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Примечание:</strong> ПОКУПАЙТЕ ТОЛЬКО ЭТО. Не тратьте очки на другие предметы.
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: МАГАЗИН АЛЬЯНСА (FULL HEIGHT) */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="pb-3 border-b border-slate-200 mb-3.5">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-sky-50 border border-sky-200 text-sky-700">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-extrabold tracking-wide text-slate-900 uppercase">
                    МАГАЗИН АЛЬЯНСА
                  </h2>
                  <p className="text-xs text-slate-500">
                    Долгосрочная польза и стабильный прогресс
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-[13px]">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">1.</span>
                <span className="w-6 h-6 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-[11px]">🧩</span>
                <span className="text-slate-800 font-medium">Осколок героя UR (Омни)</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-700 font-extrabold uppercase text-[11px] tracking-wide">ОБЯЗАТЕЛЬНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">2.</span>
                <span className="w-6 h-6 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-[11px]">🧪</span>
                <span className="text-slate-800 font-medium">Эссенция Ворона</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-700 font-bold uppercase text-[11px] tracking-wide">ВЫСОКИЙ ПРИОРИТЕТ</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">3.</span>
                <span className="w-6 h-6 rounded bg-purple-50 border border-purple-200 flex items-center justify-center text-[11px]">📦</span>
                <span className="text-slate-800 font-medium">Сундук снаряжения Ворона I ур.</span>
                <span className="text-slate-400">–</span>
                <span className="text-sky-700 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">4.</span>
                <span className="w-6 h-6 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[11px]">🌿</span>
                <span className="text-slate-800 font-medium">Прямой перенос</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-700 font-bold uppercase text-[11px] tracking-wide">ВЫСОКИЙ ПРИОРИТЕТ</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">5.</span>
                <span className="w-6 h-6 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[11px]">🔨</span>
                <span className="text-slate-800 font-medium">Ускорение строительства 60 мин.</span>
                <span className="text-slate-400">–</span>
                <span className="text-sky-700 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">6.</span>
                <span className="w-6 h-6 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[11px]">🔨</span>
                <span className="text-slate-800 font-medium">Ускорение строительства 8 ч.</span>
                <span className="text-slate-400">–</span>
                <span className="text-sky-700 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">7.</span>
                <span className="w-6 h-6 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[11px]">🔬</span>
                <span className="text-slate-800 font-medium">Ускорение исследований 60 мин.</span>
                <span className="text-slate-400">–</span>
                <span className="text-sky-700 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">8.</span>
                <span className="w-6 h-6 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[11px]">🔬</span>
                <span className="text-slate-800 font-medium">Ускорение исследований 8 ч.</span>
                <span className="text-slate-400">–</span>
                <span className="text-sky-700 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">9.</span>
                <span className="w-6 h-6 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[11px]">🩹</span>
                <span className="text-slate-800 font-medium">Ускорение лечения 60 мин.</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-700 font-semibold uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">10.</span>
                <span className="w-6 h-6 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[11px]">🩹</span>
                <span className="text-slate-800 font-medium">Ускорение лечения 8 ч.</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-700 font-semibold uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">11.</span>
                <span className="w-6 h-6 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[11px]">⚔️</span>
                <span className="text-slate-800 font-medium">Ускорение тренировки 60 мин.</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-700 font-semibold uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">12.</span>
                <span className="w-6 h-6 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[11px]">⚔️</span>
                <span className="text-slate-800 font-medium">Ускорение тренировки 8 ч.</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-700 font-semibold uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-5 text-right">13.</span>
                <span className="w-6 h-6 rounded bg-purple-50 border border-purple-200 flex items-center justify-center text-[11px]">🛡️</span>
                <span className="text-slate-800 font-medium">Щит (24 ч.)</span>
                <span className="text-slate-400">–</span>
                <span className="text-purple-700 font-bold uppercase text-[11px] tracking-wide">1 РАЗ В НЕДЕЛЮ</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-900">Примечание:</strong> Один из лучших магазинов в игре. Не пропускайте осколки UR и предметы Ворона.
          </div>
        </div>

        {/* RIGHT COLUMN: ЭКСПЕДИЦИОННЫЙ МАГАЗИН & МАГАЗИН СВЯТИЛИЩА */}
        <div className="space-y-5">
          {/* ЭКСПЕДИЦИОННЫЙ МАГАЗИН */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="pb-3 border-b border-slate-200 mb-3.5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-700">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-extrabold tracking-wide text-slate-900 uppercase">
                      ЭКСПЕДИЦИОННЫЙ МАГАЗИН
                    </h2>
                    <p className="text-xs text-slate-500">
                      Магазин с высоким приоритетом
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">1.</span>
                  <span className="w-6 h-6 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-[11px]">🎁</span>
                  <span className="text-slate-800 font-medium">Экспедиционный сундук (UR)</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-amber-700 font-extrabold uppercase text-[11px] tracking-wide">ВЫСШИЙ ПРИОРИТЕТ</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">2.</span>
                  <span className="w-6 h-6 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-[11px]">🧩</span>
                  <span className="text-slate-800 font-medium">Осколок героя UR (Омни)</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-amber-700 font-bold uppercase text-[11px] tracking-wide">ВЫСОКИЙ ПРИОРИТЕТ</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">3.</span>
                  <span className="w-6 h-6 rounded bg-purple-50 border border-purple-200 flex items-center justify-center text-[11px]">📦</span>
                  <span className="text-slate-800 font-medium">Сундук снаряжения Ворона III ур.</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-sky-700 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">4.</span>
                  <span className="w-6 h-6 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-[11px]">🧪</span>
                  <span className="text-slate-800 font-medium">Эссенция Ворона</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-emerald-700 font-semibold uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">5.</span>
                  <span className="w-6 h-6 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-[11px]">🏆</span>
                  <span className="text-slate-800 font-medium">Универсальный осколок реликвии</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-emerald-700 font-semibold uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-700 w-4 text-right">6.</span>
                  <span className="w-6 h-6 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-[11px]">🎫</span>
                  <span className="text-slate-800 font-medium">Билет призыва</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-slate-500 font-medium uppercase text-[11px] tracking-wide">ПОЗЖЕ</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Примечание:</strong> Сначала покупайте редкие предметы для прогресса, затем тратьте на остальное.
            </div>
          </div>

          {/* МАГАЗИН СВЯТИЛИЩА */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs">
            <div className="pb-3 border-b border-slate-200 mb-3.5">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-extrabold tracking-wide text-slate-900 uppercase">
                    МАГАЗИН СВЯТИЛИЩА
                  </h2>
                  <p className="text-xs text-slate-500">
                    Простой, но эффективный
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-[13px]">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-4 text-right">1.</span>
                <span className="w-6 h-6 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-[11px]">🧩</span>
                <span className="text-slate-800 font-medium">Осколок героя UR (Омни)</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-700 font-extrabold uppercase text-[11px] tracking-wide">ОБЯЗАТЕЛЬНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-4 text-right">2.</span>
                <span className="w-6 h-6 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-[11px]">🧪</span>
                <span className="text-slate-800 font-medium">Эссенция Ворона</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-700 font-bold uppercase text-[11px] tracking-wide">ВЫСОКИЙ ПРИОРИТЕТ</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-4 text-right">3.</span>
                <span className="w-6 h-6 rounded bg-purple-50 border border-purple-200 flex items-center justify-center text-[11px]">🔮</span>
                <span className="text-slate-800 font-medium">Осколок героя SSR</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-700 font-semibold uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-700 w-4 text-right">4.</span>
                <span className="w-6 h-6 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-[11px]">💎</span>
                <span className="text-slate-800 font-medium">Камень снаряжения</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-700 font-semibold uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Примечание:</strong> Сначала прокачивайте UR, затем ценность Ворона, потом второстепенных героев.
            </div>
          </div>
        </div>
      </div>

      {/* Footer 3 Pillars */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex-shrink-0">
              <Coins className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-slate-800">
              Экономьте ресурсы и время.
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-slate-800">
              Становитесь сильнее каждый день.
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-slate-800">
              Доминируйте на поле боя вместе с альянсом!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
