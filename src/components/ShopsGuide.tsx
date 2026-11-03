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
    <div id="shops-guide-container" className="rounded-3xl bg-[#080e1a] text-slate-100 p-4 sm:p-7 border border-[#1e2c44] shadow-2xl space-y-6">
      {/* Poster Main Header - Exactly as Screenshot */}
      <div className="text-center space-y-1.5 pt-2 pb-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-wider text-slate-100 uppercase font-sans">
          LAST ASYLUM: ГАЙД ПО ПРИОРИТЕТАМ МАГАЗИНОВ
        </h1>
        <p className="text-amber-400 font-bold text-sm sm:text-base tracking-wide uppercase">
          ЧТО ПОКУПАТЬ В ПЕРВУЮ ОЧЕРЕДЬ В КАЖДОМ МАГАЗИНЕ
        </p>
      </div>

      {/* 3-Column Layout Matching the Poster */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {/* LEFT COLUMN: VIP-МАГАЗИН & МАГАЗИН ЧЕСТИ */}
        <div className="space-y-5">
          {/* VIP-МАГАЗИН */}
          <div className="rounded-2xl bg-[#0c1527] border border-[#1d3153] p-4 sm:p-5 shadow-md flex flex-col justify-between">
            <div>
              <div className="text-center pb-3 border-b border-[#1b2b45] mb-3">
                <div className="flex items-center justify-center gap-2">
                  <Crown className="w-5 h-5 text-sky-400" />
                  <h2 className="text-lg font-black tracking-wide text-white uppercase">
                    VIP-МАГАЗИН
                  </h2>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Лучшая ценность для ежедневного прогресса
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">1.</span>
                  <span className="w-6 h-6 rounded bg-emerald-950/80 border border-emerald-600/50 flex items-center justify-center text-[11px]">🧪</span>
                  <span className="text-slate-200">10 Выносливости</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-amber-400 font-extrabold uppercase text-[11px] tracking-wide">ОБЯЗАТЕЛЬНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">2.</span>
                  <span className="w-6 h-6 rounded bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-[11px]">🧩</span>
                  <span className="text-slate-200">Осколок героя UR</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-amber-300 font-bold uppercase text-[11px] tracking-wide">ВЫСОКИЙ ПРИОРИТЕТ</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">3.</span>
                  <span className="w-6 h-6 rounded bg-sky-950/80 border border-sky-600/50 flex items-center justify-center text-[11px]">⏩</span>
                  <span className="text-slate-200">Ускорение 60 мин.</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-sky-300 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">4.</span>
                  <span className="w-6 h-6 rounded bg-sky-950/80 border border-sky-600/50 flex items-center justify-center text-[11px]">⏩</span>
                  <span className="text-slate-200">Ускорение 3 ч.</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-sky-300 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">5.</span>
                  <span className="w-6 h-6 rounded bg-sky-950/80 border border-sky-600/50 flex items-center justify-center text-[11px]">⏩</span>
                  <span className="text-slate-200">Ускорение 8 ч.</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-amber-200 font-semibold uppercase text-[11px] tracking-wide">ПОСЛЕ ПРОГРЕССА UR</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">6.</span>
                  <span className="w-6 h-6 rounded bg-emerald-950/80 border border-emerald-600/50 flex items-center justify-center text-[11px]">⏩</span>
                  <span className="text-slate-200">Ускорение 5 мин.</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-slate-400 font-medium uppercase text-[11px] tracking-wide">ПОЗЖЕ</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right pt-0.5">7.</span>
                  <span className="w-6 h-6 rounded bg-purple-950/80 border border-purple-600/50 flex items-center justify-center text-[11px] flex-shrink-0 mt-0.5">🔮</span>
                  <div className="leading-snug">
                    <span className="text-slate-200">Осколок героя SSR</span>
                    <span className="text-slate-400"> – </span>
                    <span className="text-purple-300 font-medium uppercase text-[11px]">ПОКУПАТЬ, ЕСЛИ ТЕКУЩАЯ ВАЛЮТА ИЗБЫТОЧНА</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1b2b45] text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Примечание:</strong> Сначала покупайте выносливость, затем фокусируйтесь на прогрессе UR, потом на ускорениях, и только потом на осколках SSR.
            </div>
          </div>

          {/* МАГАЗИН ЧЕСТИ */}
          <div className="rounded-2xl bg-[#0c1527] border border-[#1d3153] p-4 sm:p-5 shadow-md">
            <div className="text-center pb-3 border-b border-[#1b2b45] mb-3">
              <div className="flex items-center justify-center gap-2">
                <Award className="w-5 h-5 text-rose-400" />
                <h2 className="text-lg font-black tracking-wide text-white uppercase">
                  МАГАЗИН ЧЕСТИ
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Не тратьте очки впустую
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-[13px]">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-4 text-right">1.</span>
                <span className="w-6 h-6 rounded bg-blue-950/80 border border-blue-600/50 flex items-center justify-center text-[11px]">📜</span>
                <span className="text-slate-200">Чертёж снаряжения (UR)</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-400 font-black uppercase text-[11px] tracking-wide">ТОЛЬКО ЭТО!</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1b2b45] text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Примечание:</strong> ПОКУПАЙТЕ ТОЛЬКО ЭТО. Не тратьте очки на другие предметы.
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: МАГАЗИН АЛЬЯНСА (FULL HEIGHT) */}
        <div className="rounded-2xl bg-[#0c1527] border border-[#1d3153] p-4 sm:p-5 shadow-md flex flex-col justify-between">
          <div>
            <div className="text-center pb-3 border-b border-[#1b2b45] mb-3">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-sky-400" />
                <h2 className="text-lg font-black tracking-wide text-white uppercase">
                  МАГАЗИН АЛЬЯНСА
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Долгосрочная польза и стабильный прогресс
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-[13px]">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">1.</span>
                <span className="w-6 h-6 rounded bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-[11px]">🧩</span>
                <span className="text-slate-200">Осколок героя UR (Омни)</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-400 font-black uppercase text-[11px] tracking-wide">ОБЯЗАТЕЛЬНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">2.</span>
                <span className="w-6 h-6 rounded bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-[11px]">🧪</span>
                <span className="text-slate-200">Эссенция Ворона</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-300 font-bold uppercase text-[11px] tracking-wide">ВЫСОКИЙ ПРИОРИТЕТ</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">3.</span>
                <span className="w-6 h-6 rounded bg-purple-950/80 border border-purple-600/50 flex items-center justify-center text-[11px]">📦</span>
                <span className="text-slate-200">Сундучок снаряжения Ворона I ур.</span>
                <span className="text-slate-400">–</span>
                <span className="text-sky-300 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">4.</span>
                <span className="w-6 h-6 rounded bg-emerald-950/80 border border-emerald-600/50 flex items-center justify-center text-[11px]">🌿</span>
                <span className="text-slate-200">Прямой перенос</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-300 font-bold uppercase text-[11px] tracking-wide">ВЫСОКИЙ ПРИОРИТЕТ</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">5.</span>
                <span className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[11px]">🔨</span>
                <span className="text-slate-200">Ускорение строительства 60 мин.</span>
                <span className="text-slate-400">–</span>
                <span className="text-sky-300 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">6.</span>
                <span className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[11px]">🔨</span>
                <span className="text-slate-200">Ускорение строительства 8 ч.</span>
                <span className="text-slate-400">–</span>
                <span className="text-sky-300 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">7.</span>
                <span className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[11px]">🔬</span>
                <span className="text-slate-200">Ускорение исследований 60 мин.</span>
                <span className="text-slate-400">–</span>
                <span className="text-sky-300 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">8.</span>
                <span className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[11px]">🔬</span>
                <span className="text-slate-200">Ускорение исследований 8 ч.</span>
                <span className="text-slate-400">–</span>
                <span className="text-sky-300 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">9.</span>
                <span className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[11px]">🩹</span>
                <span className="text-slate-200">Ускорение лечения 60 мин.</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-400 font-medium uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">10.</span>
                <span className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[11px]">🩹</span>
                <span className="text-slate-200">Ускорение лечения 8 ч.</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-400 font-medium uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">11.</span>
                <span className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[11px]">⚔️</span>
                <span className="text-slate-200">Ускорение тренировки 60 мин.</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-400 font-medium uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">12.</span>
                <span className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[11px]">⚔️</span>
                <span className="text-slate-200">Ускорение тренировки 8 ч.</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-400 font-medium uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-5 text-right">13.</span>
                <span className="w-6 h-6 rounded bg-purple-950/80 border border-purple-600/50 flex items-center justify-center text-[11px]">🛡️</span>
                <span className="text-slate-200">Щит (24 ч.)</span>
                <span className="text-slate-400">–</span>
                <span className="text-purple-300 font-bold uppercase text-[11px] tracking-wide">1 РАЗ В НЕДЕЛЮ</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#1b2b45] text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Примечание:</strong> Один из лучших магазинов в игре. Не пропускайте осколки UR и предметы Ворона.
          </div>
        </div>

        {/* RIGHT COLUMN: ЭКСПЕДИЦИОННЫЙ МАГАЗИН & МАГАЗИН СВЯТИЛИЩА */}
        <div className="space-y-5">
          {/* ЭКСПЕДИЦИОННЫЙ МАГАЗИН */}
          <div className="rounded-2xl bg-[#0c1527] border border-[#1d3153] p-4 sm:p-5 shadow-md flex flex-col justify-between">
            <div>
              <div className="text-center pb-3 border-b border-[#1b2b45] mb-3">
                <div className="flex items-center justify-center gap-2">
                  <Compass className="w-5 h-5 text-amber-400" />
                  <h2 className="text-lg font-black tracking-wide text-white uppercase">
                    ЭКСПЕДИЦИОННЫЙ МАГАЗИН
                  </h2>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Магазин с высоким приоритетом
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">1.</span>
                  <span className="w-6 h-6 rounded bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-[11px]">🎁</span>
                  <span className="text-slate-200">Экспедиционный сундук (UR)</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-amber-400 font-black uppercase text-[11px] tracking-wide">ВЫСШИЙ ПРИОРИТЕТ</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">2.</span>
                  <span className="w-6 h-6 rounded bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-[11px]">🧩</span>
                  <span className="text-slate-200">Осколок героя UR (Омни)</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-amber-300 font-bold uppercase text-[11px] tracking-wide">ВЫСОКИЙ ПРИОРИТЕТ</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">3.</span>
                  <span className="w-6 h-6 rounded bg-purple-950/80 border border-purple-600/50 flex items-center justify-center text-[11px]">📦</span>
                  <span className="text-slate-200">Сундучок снаряжения Ворона III ур.</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-sky-300 font-bold uppercase text-[11px] tracking-wide">ВАЖНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">4.</span>
                  <span className="w-6 h-6 rounded bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-[11px]">🧪</span>
                  <span className="text-slate-200">Эссенция Ворона</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-emerald-400 font-medium uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">5.</span>
                  <span className="w-6 h-6 rounded bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-[11px]">🏆</span>
                  <span className="text-slate-200">Универсальный осколок реликвии</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-emerald-400 font-medium uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 w-4 text-right">6.</span>
                  <span className="w-6 h-6 rounded bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-[11px]">🎫</span>
                  <span className="text-slate-200">Билет на вербовку</span>
                  <span className="text-slate-400">–</span>
                  <span className="text-slate-400 font-medium uppercase text-[11px] tracking-wide">ПОЗЖЕ</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1b2b45] text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Примечание:</strong> Сначала покупайте редкие предметы для прогресса, затем тратьте на остальное.
            </div>
          </div>

          {/* МАГАЗИН СВЯТИЛИЩА */}
          <div className="rounded-2xl bg-[#0c1527] border border-[#1d3153] p-4 sm:p-5 shadow-md">
            <div className="text-center pb-3 border-b border-[#1b2b45] mb-3">
              <div className="flex items-center justify-center gap-2">
                <Landmark className="w-5 h-5 text-sky-400" />
                <h2 className="text-lg font-black tracking-wide text-white uppercase">
                  МАГАЗИН СВЯТИЛИЩА
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Простой, но эффективный
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-[13px]">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-4 text-right">1.</span>
                <span className="w-6 h-6 rounded bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-[11px]">🧩</span>
                <span className="text-slate-200">Осколок героя UR (Омни)</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-400 font-black uppercase text-[11px] tracking-wide">ОБЯЗАТЕЛЬНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-4 text-right">2.</span>
                <span className="w-6 h-6 rounded bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-[11px]">🧪</span>
                <span className="text-slate-200">Эссенция Ворона</span>
                <span className="text-slate-400">–</span>
                <span className="text-amber-300 font-bold uppercase text-[11px] tracking-wide">ВЫСОКИЙ ПРИОРИТЕТ</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-4 text-right">3.</span>
                <span className="w-6 h-6 rounded bg-purple-950/80 border border-purple-600/50 flex items-center justify-center text-[11px]">🔮</span>
                <span className="text-slate-200">Осколок героя SSR</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-400 font-medium uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400 w-4 text-right">4.</span>
                <span className="w-6 h-6 rounded bg-blue-950/80 border border-blue-600/50 flex items-center justify-center text-[11px]">💎</span>
                <span className="text-slate-200">Камень снаряжения</span>
                <span className="text-slate-400">–</span>
                <span className="text-emerald-400 font-medium uppercase text-[11px] tracking-wide">ПОЛЕЗНО</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1b2b45] text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Примечание:</strong> Сначала прокачивайте UR, затем ценность Ворона, потом второстепенных героев.
            </div>
          </div>
        </div>
      </div>

      {/* Footer 3 Pillars - Exactly Matching Screenshot */}
      <div className="rounded-2xl bg-[#0c1527] border border-[#1d3153] p-4 sm:p-5 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
              <Coins className="w-6 h-6" />
            </div>
            <span className="text-sm font-semibold text-slate-200">
              Экономьте ресурсы и время.
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex-shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-sm font-semibold text-slate-200">
              Становитесь сильнее каждый день.
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-sm font-semibold text-slate-200">
              Доминируйте на поле боя вместе с альянсом!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
