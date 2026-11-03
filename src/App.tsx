/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Shield,
  Calendar,
  ShieldAlert,
  Flame,
  BookOpen,
  Castle,
  Zap,
  Globe,
  ShoppingBag,
  Swords,
  Crown,
  Sparkles,
} from "lucide-react";
import { Header } from "./components/Header";
import { TodayDirective } from "./components/TodayDirective";
import { WeeklySchedule } from "./components/WeeklySchedule";
import { AllianceRules } from "./components/AllianceRules";
import { CheeseTrapGuide } from "./components/CheeseTrapGuide";
import { QuizCheatSheet } from "./components/QuizCheatSheet";
import { SanctuaryUpgradeGuide } from "./components/SanctuaryUpgradeGuide";
import { SurvivalBattleGuide } from "./components/SurvivalBattleGuide";
import { ServerJumpGuide } from "./components/ServerJumpGuide";
import { ShopsGuide } from "./components/ShopsGuide";
import { GearRoadmapGuide } from "./components/GearRoadmapGuide";
import { MinistersGuide } from "./components/MinistersGuide";
import { EraOfRevivalGuide } from "./components/EraOfRevivalGuide";
import { GAME_TITLE } from "./data/allianceData";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("today");

  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(() => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const msk = new Date(utc + 3600000 * 3);
    const day = msk.getDay();
    return day === 0 ? 6 : day - 1;
  });

  const navTabs = [
    { id: "today", label: "Директива Дня", icon: Shield, badge: "СЕГОДНЯ" },
    { id: "era-revival", label: "Эра Возрождения", icon: Sparkles, badge: "СЕЗОН" },
    { id: "rules", label: "Правила Альянса", icon: ShieldAlert, badge: "ВАЖНО" },
    { id: "ministers", label: "Гайд по Министрам", icon: Crown, badge: "+50% БАФФ" },
    { id: "gear-roadmap", label: "Снаряжение Героев", icon: Swords, badge: "ГАЙД 1-28" },
    { id: "shops", label: "Гид по Магазинам", icon: ShoppingBag, badge: "ТОП ТРАТ" },
    { id: "server-jump", label: "Переход на Сервер", icon: Globe, badge: "R4 / R5" },
    { id: "survival-sync", label: "Двойные Награды", icon: Zap, badge: "X2 ОЧКИ" },
    { id: "sanctuary", label: "Прокачка Святилища", icon: Castle, badge: "1-30 УР" },
    { id: "schedule", label: "Календарь (7 Дней)", icon: Calendar },
    { id: "cheese-trap", label: "Сырная Ловушка", icon: Flame, badge: "ГАЙД" },
    { id: "quiz", label: "Викторина", icon: BookOpen, badge: "ОТВЕТЫ" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white flex flex-col antialiased">
      {/* Top App Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        selectedDayIndex={selectedDayIndex}
        setSelectedDayIndex={setSelectedDayIndex}
      />

      {/* Navigation Sub-Bar */}
      <div className="border-b border-slate-200 bg-white/95 z-40 backdrop-blur-md shadow-2xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <nav
            id="alliance-nav-tabs"
            className="flex flex-wrap items-center gap-1.5 sm:gap-2 py-2.5"
          >
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`nav-btn-${tab.id}`}
                  onClick={() => setCurrentTab(tab.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-amber-600 text-white shadow-xs scale-[1.01]"
                      : "bg-slate-100/70 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 border border-slate-200/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-white" : "text-slate-500"}`} />
                  <span>{tab.label}</span>
                  {tab.badge && !isActive && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-slate-200 text-slate-700 border border-slate-300">
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {currentTab === "today" && (
          <TodayDirective
            selectedDayIndex={selectedDayIndex}
            setSelectedDayIndex={setSelectedDayIndex}
            onOpenRules={() => setCurrentTab("rules")}
            onOpenSanctuary={() => setCurrentTab("sanctuary")}
            onOpenGearRoadmap={() => setCurrentTab("gear-roadmap")}
            onOpenMinisters={() => setCurrentTab("ministers")}
            onOpenEraRevival={() => setCurrentTab("era-revival")}
          />
        )}

        {currentTab === "era-revival" && (
          <EraOfRevivalGuide />
        )}

        {currentTab === "schedule" && (
          <WeeklySchedule
            onSelectDay={(idx) => {
              setSelectedDayIndex(idx);
              setCurrentTab("today");
            }}
          />
        )}

        {currentTab === "rules" && (
          <AllianceRules />
        )}

        {currentTab === "ministers" && (
          <MinistersGuide />
        )}

        {currentTab === "gear-roadmap" && (
          <GearRoadmapGuide />
        )}

        {currentTab === "shops" && (
          <ShopsGuide />
        )}

        {currentTab === "server-jump" && (
          <ServerJumpGuide />
        )}

        {currentTab === "survival-sync" && (
          <SurvivalBattleGuide />
        )}

        {currentTab === "sanctuary" && (
          <SanctuaryUpgradeGuide />
        )}

        {currentTab === "cheese-trap" && (
          <CheeseTrapGuide />
        )}
        
        {currentTab === "quiz" && <QuizCheatSheet />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-5 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Дуэль Альянсов • {GAME_TITLE}
          </span>
          <span className="text-slate-600">
            Обязательное участие в Дуэли Альянсов • Взносы в науку по значку 👍
          </span>
        </div>
      </footer>
    </div>
  );
}
