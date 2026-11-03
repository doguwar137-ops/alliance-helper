import React, { useState, useEffect } from "react";
import { Shield, Clock, LayoutGrid } from "lucide-react";
import { DUEL_DAYS } from "../data/allianceData";

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  selectedDayIndex: number;
  setSelectedDayIndex: (idx: number) => void;
  onOpenMobileMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  setCurrentTab,
  setSelectedDayIndex,
  onOpenMobileMenu,
}) => {
  const [mskTime, setMskTime] = useState("");
  const [currentDayNumber, setCurrentDayNumber] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Moscow is UTC+3
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const msk = new Date(utc + 3600000 * 3);

      const hours = String(msk.getHours()).padStart(2, "0");
      const minutes = String(msk.getMinutes()).padStart(2, "0");
      const seconds = String(msk.getSeconds()).padStart(2, "0");
      setMskTime(`${hours}:${minutes}:${seconds} МСК`);

      // JS getDay(): 0 = Sun, 1 = Mon, ..., 6 = Sat
      // Our array: 0 = Mon, ..., 5 = Sat, 6 = Sun
      const day = msk.getDay();
      const mappedIndex = day === 0 ? 6 : day - 1;
      setCurrentDayNumber(mappedIndex);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeDay = DUEL_DAYS[currentDayNumber] || DUEL_DAYS[0];

  return (
    <header
      id="alliance-header"
      className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-2xs"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3">
        {/* Top Row on Mobile / Left Branding on Desktop */}
        <div className="flex items-center justify-between gap-2 w-full md:w-auto">
          <div
            onClick={() => {
              setSelectedDayIndex(currentDayNumber);
              setCurrentTab("today");
            }}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 p-0.5 shadow-xs flex items-center justify-center flex-shrink-0">
              <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-xl tracking-wide text-amber-950 block leading-tight">
                Дуэль Альянсов
              </span>
              <span className="text-[10px] text-slate-500 font-medium block sm:hidden">
                Помощник игрока • Last Asylum
              </span>
            </div>
          </div>

          <div className="flex md:hidden items-center gap-1.5">
            {/* Mobile Clock */}
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700">
              <Clock className="w-3 h-3 text-amber-600 flex-shrink-0" />
              <span>{mskTime || "12:00:00 МСК"}</span>
            </div>

            {/* Mobile All Sections Menu Trigger */}
            {onOpenMobileMenu && (
              <button
                type="button"
                onClick={onOpenMobileMenu}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-600 text-white text-xs font-bold shadow-2xs active:scale-95 transition-transform cursor-pointer"
                aria-label="Открыть меню всех разделов"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Разделы</span>
              </button>
            )}
          </div>
        </div>

        {/* Live Battle Phase Widget */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <div
            id="current-phase-pill"
            onClick={() => {
              setSelectedDayIndex(currentDayNumber);
              setCurrentTab("today");
            }}
            className="cursor-pointer group flex items-center justify-between md:justify-start gap-2.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all shadow-2xs w-full md:w-auto"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <div className="text-left min-w-0">
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider truncate">
                  СЕГОДНЯ: {activeDay.name}
                </div>
                <div className="text-xs font-bold text-amber-800 group-hover:text-amber-900 truncate">
                  {activeDay.badge}
                </div>
              </div>
            </div>
            <span className="md:hidden text-[10px] font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md flex-shrink-0">
              Открыть →
            </span>
          </div>

          {/* Desktop Clock */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>{mskTime || "12:00:00 МСК"}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
