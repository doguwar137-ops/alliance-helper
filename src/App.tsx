/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
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
  Gift,
  LayoutGrid,
  X,
  Check,
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
import { GiftCodesGuide } from "./components/GiftCodesGuide";
import { GAME_TITLE } from "./data/allianceData";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("today");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(() => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const msk = new Date(utc + 3600000 * 3);
    const day = msk.getDay();
    return day === 0 ? 6 : day - 1;
  });

  const navTabs = [
    { id: "today", label: "Директива Дня", shortLabel: "Сегодня", icon: Shield, badge: "СЕГОДНЯ" },
    { id: "era-revival", label: "Эра Возрождения", shortLabel: "Эра", icon: Sparkles, badge: "СЕЗОН" },
    { id: "rules", label: "Правила Альянса", shortLabel: "Правила", icon: ShieldAlert, badge: "ВАЖНО" },
    { id: "ministers", label: "Гайд по Министрам", shortLabel: "Министры", icon: Crown, badge: "+50% БАФФ" },
    { id: "gear-roadmap", label: "Снаряжение Героев", shortLabel: "Снаряжение", icon: Swords, badge: "ГАЙД 1-28" },
    { id: "shops", label: "Гид по Магазинам", shortLabel: "Магазины", icon: ShoppingBag, badge: "ТОП ТРАТ" },
    { id: "gift-codes", label: "Активация подарочных кодов", shortLabel: "Промокоды", icon: Gift },
    { id: "server-jump", label: "Переход на Сервер", shortLabel: "Сервер", icon: Globe, badge: "УЧАСТНИК" },
    { id: "survival-sync", label: "Двойные Награды", shortLabel: "X2 Награды", icon: Zap, badge: "X2 ОЧКИ" },
    { id: "sanctuary", label: "Прокачка Святилища", shortLabel: "Святилище", icon: Castle, badge: "1-30 УР" },
    { id: "schedule", label: "Календарь (7 Дней)", shortLabel: "Календарь", icon: Calendar },
    { id: "cheese-trap", label: "Сырная Ловушка", shortLabel: "Крыса", icon: Flame, badge: "ГАЙД" },
    { id: "quiz", label: "Викторина", shortLabel: "Викторина", icon: BookOpen, badge: "ОТВЕТЫ" },
  ];

  const handleSelectTab = (tabId: string) => {
    setCurrentTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll active tab pill into view on mobile horizontal bar
  useEffect(() => {
    const activeBtn = document.getElementById(`nav-btn-${currentTab}`);
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentTab]);

  const mobileBottomQuickTabs = [
    { id: "today", label: "Сегодня", icon: Shield },
    { id: "schedule", label: "7 Дней", icon: Calendar },
    { id: "rules", label: "Правила", icon: ShieldAlert },
    { id: "ministers", label: "Министры", icon: Crown },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white flex flex-col antialiased pb-20 lg:pb-0">
      {/* Top App Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={handleSelectTab}
        selectedDayIndex={selectedDayIndex}
        setSelectedDayIndex={setSelectedDayIndex}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Navigation Sub-Bar: Single-line swipeable on mobile, wrapped on desktop */}
      <div className="border-b border-slate-200 bg-white/95 z-30 backdrop-blur-md shadow-2xs sticky top-[93px] md:top-[69px] lg:static">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <nav
            id="alliance-nav-tabs"
            className="flex items-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 overflow-x-auto no-scrollbar lg:flex-wrap"
          >
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`nav-btn-${tab.id}`}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 border border-slate-200/70"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 flex-shrink-0 ${
                      isActive ? "text-white" : "text-slate-500"
                    }`}
                  />
                  <span>{tab.label}</span>
                  {tab.badge && !isActive && (
                    <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-slate-200 text-slate-700 border border-slate-300">
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
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6">
        {currentTab === "today" && (
          <TodayDirective
            selectedDayIndex={selectedDayIndex}
            setSelectedDayIndex={setSelectedDayIndex}
            onOpenRules={() => handleSelectTab("rules")}
            onOpenSanctuary={() => handleSelectTab("sanctuary")}
            onOpenGearRoadmap={() => handleSelectTab("gear-roadmap")}
            onOpenMinisters={() => handleSelectTab("ministers")}
            onOpenEraRevival={() => handleSelectTab("era-revival")}
          />
        )}

        {currentTab === "era-revival" && <EraOfRevivalGuide />}

        {currentTab === "schedule" && (
          <WeeklySchedule
            onSelectDay={(idx) => {
              setSelectedDayIndex(idx);
              handleSelectTab("today");
            }}
          />
        )}

        {currentTab === "rules" && <AllianceRules />}

        {currentTab === "ministers" && <MinistersGuide />}

        {currentTab === "gear-roadmap" && <GearRoadmapGuide />}

        {currentTab === "shops" && <ShopsGuide />}

        {currentTab === "gift-codes" && <GiftCodesGuide />}

        {currentTab === "server-jump" && <ServerJumpGuide />}

        {currentTab === "survival-sync" && <SurvivalBattleGuide />}

        {currentTab === "sanctuary" && <SanctuaryUpgradeGuide />}

        {currentTab === "cheese-trap" && <CheeseTrapGuide />}

        {currentTab === "quiz" && <QuizCheatSheet />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-5 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Дуэль Альянсов • {GAME_TITLE}</span>
          <span className="text-slate-600">
            Обязательное участие в Дуэли Альянсов • Взносы в науку по значку 👍
          </span>
        </div>
      </footer>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg pb-safe">
        <div className="grid grid-cols-5 items-center h-16 px-1">
          {mobileBottomQuickTabs.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id && !isMobileMenuOpen;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectTab(item.id)}
                className={`flex flex-col items-center justify-center h-full gap-1 transition-colors cursor-pointer ${
                  isActive
                    ? "text-amber-600 font-extrabold"
                    : "text-slate-500 hover:text-slate-900 font-semibold"
                }`}
              >
                <div
                  className={`px-3 py-1 rounded-full transition-colors ${
                    isActive ? "bg-amber-100 text-amber-700" : ""
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] leading-none truncate max-w-[64px]">
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* 5th Button: Open All 13 Sections Drawer */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`flex flex-col items-center justify-center h-full gap-1 transition-colors cursor-pointer ${
              isMobileMenuOpen
                ? "text-amber-600 font-extrabold"
                : "text-slate-600 hover:text-slate-900 font-semibold"
            }`}
          >
            <div
              className={`px-3 py-1 rounded-full transition-colors ${
                isMobileMenuOpen
                  ? "bg-amber-600 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </div>
            <span className="text-[10px] leading-none">Все (13)</span>
          </button>
        </div>
      </div>

      {/* Mobile All-Sections Bottom Sheet / Drawer */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex flex-col justify-end"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-white rounded-t-3xl border-t border-slate-200 p-4 sm:p-5 max-h-[82vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag Handle & Header */}
            <div className="w-10 h-1.5 bg-slate-300 rounded-full mx-auto mb-3" />
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Все разделы и гайды альянса
                </h3>
                <p className="text-xs text-slate-500">
                  Выберите нужный раздел для быстрого перехода
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
                aria-label="Закрыть меню"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable 2-Column Grid of All 13 Tabs */}
            <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-2 pb-16">
              {navTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = currentTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleSelectTab(tab.id)}
                    className={`flex items-center justify-between gap-2.5 p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? "bg-amber-50 border-amber-400 text-amber-950 shadow-2xs"
                        : "bg-slate-50/80 hover:bg-slate-100 border-slate-200 text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`p-2.5 rounded-xl flex-shrink-0 ${
                          isActive
                            ? "bg-amber-600 text-white"
                            : "bg-white text-slate-600 border border-slate-200"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-extrabold truncate">
                          {tab.label}
                        </div>
                        {tab.badge && (
                          <span className="inline-block text-[10px] font-mono font-bold text-amber-700 mt-0.5">
                            {tab.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    {isActive && (
                      <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
