export interface SanctuaryLevelRequirement {
  level: number;
  grain: number;
  wood: number;
  herb: number;
  stars: number;
  buildings: string[];
  rawBuildings: string;
}

export const SANCTUARY_LEVELS: SanctuaryLevelRequirement[] = [
  {
    level: 1,
    grain: 0,
    wood: 0,
    herb: 0,
    stars: 0,
    buildings: [],
    rawBuildings: "—",
  },
  {
    level: 2,
    grain: 32,
    wood: 32,
    herb: 0,
    stars: 0,
    buildings: [],
    rawBuildings: "—",
  },
  {
    level: 3,
    grain: 983,
    wood: 983,
    herb: 0,
    stars: 17,
    buildings: [],
    rawBuildings: "—",
  },
  {
    level: 4,
    grain: 2598,
    wood: 2598,
    herb: 0,
    stars: 19,
    buildings: ["Древесный склад ур.1", "Зерновой склад ур.1", "Травяной склад ур.1"],
    rawBuildings: "Древесный склад ур.1, Зерновой склад ур. 1, Травяной склад ур.1",
  },
  {
    level: 5,
    grain: 19700,
    wood: 19700,
    herb: 0,
    stars: 28,
    buildings: ["Стены ур.3"],
    rawBuildings: "Стены ур.3",
  },
  {
    level: 6,
    grain: 92700,
    wood: 92700,
    herb: 0,
    stars: 47,
    buildings: ["Стены ур.5"],
    rawBuildings: "Стены ур.5",
  },
  {
    level: 7,
    grain: 236000,
    wood: 236000,
    herb: 0,
    stars: 61,
    buildings: ["Тренировочные площадки ур.4", "Зал альянса ур.3"],
    rawBuildings: "Тренировочные площадки ур.4, Зал альянса ур.3",
  },
  {
    level: 8,
    grain: 396000,
    wood: 396000,
    herb: 0,
    stars: 80,
    buildings: ["Тренировочные площадки ур.6", "Зал альянса ур.5"],
    rawBuildings: "Тренировочные площадки ур.6, Зал альянса ур.5",
  },
  {
    level: 9,
    grain: 606000,
    wood: 606000,
    herb: 209000,
    stars: 96,
    buildings: ["Стены ур.8", "Зал альянса ур.7"],
    rawBuildings: "Стены ур.8, Зал альянса ур.7",
  },
  {
    level: 10,
    grain: 749000,
    wood: 749000,
    herb: 233000,
    stars: 112,
    buildings: ["Стены ур.9", "Лазарет ур.7"],
    rawBuildings: "Стены ур.9, Лазарет ур.7",
  },
  {
    level: 11,
    grain: 1900000,
    wood: 1900000,
    herb: 602000,
    stars: 142,
    buildings: ["Тренировочные площадки ур.10", "1-я Лаборатория ур.7"],
    rawBuildings: "Тренировочные площадки ур.10, 1-я Лаборатория ур.7",
  },
  {
    level: 12,
    grain: 3100000,
    wood: 3100000,
    herb: 959000,
    stars: 155,
    buildings: ["1-я Лаборатория ур.11", "Стены ур.10", "Мастерская антитоксинов ур.7"],
    rawBuildings: "1-я Лаборатория ур.11, Стены ур.10, Мастерская антитоксинов ур.7",
  },
  {
    level: 13,
    grain: 3500000,
    wood: 3500000,
    herb: 1100000,
    stars: 173,
    buildings: ["1-я Лаборатория ур.12", "Зал альянса ур.11", "Ферма ур.7"],
    rawBuildings: "1-я Лаборатория ур.12, Зал альянса ур.11, Ферма ур.7",
  },
  {
    level: 14,
    grain: 4900000,
    wood: 4900000,
    herb: 1600000,
    stars: 193,
    buildings: ["1-я Лаборатория ур.13", "Статуя воина ур.12", "Лесопилка ур.7"],
    rawBuildings: "1-я Лаборатория ур.13, Статуя воина ур.12, Лесопилка ур.7",
  },
  {
    level: 15,
    grain: 6400000,
    wood: 6400000,
    herb: 2300000,
    stars: 201,
    buildings: ["1-я Лаборатория ур.14", "Тренировочные площадки ур.14", "Сад трав ур.7"],
    rawBuildings: "1-я Лаборатория ур.14, Тренировочные площадки ур.14, Сад трав ур.7",
  },
  {
    level: 16,
    grain: 11900000,
    wood: 11900000,
    herb: 4000000,
    stars: 215,
    buildings: ["Статуя воина ур.14", "1-я Лаборатория ур.15", "Амбар ур.7"],
    rawBuildings: "Статуя воина ур.14, 1-я Лаборатория ур.15, Амбар ур.7",
  },
  {
    level: 17,
    grain: 16300000,
    wood: 16300000,
    herb: 5000000,
    stars: 225,
    buildings: ["1-я Лаборатория ур.16", "Казармы ур.15", "Склад древесины ур.7"],
    rawBuildings: "1-я Лаборатория ур.16, Казармы ур.15, Склад древесины ур.7",
  },
  {
    level: 18,
    grain: 27100000,
    wood: 27100000,
    herb: 9000000,
    stars: 231,
    buildings: ["1-я Лаборатория ур.17", "Тренировочные площадки ур.17", "Хранилище трав ур.7"],
    rawBuildings: "1-я Лаборатория ур.17, Тренировочные площадки ур.17, Хранилище трав ур.7",
  },
  {
    level: 19,
    grain: 31100000,
    wood: 31100000,
    herb: 10800000,
    stars: 237,
    buildings: ["1-я Лаборатория ур.18", "Статуя воина ур.17", "Мастерская антитоксинов ур.10"],
    rawBuildings: "1-я Лаборатория ур.18, Статуя воина ур.17, Мастерская антитоксинов ур.10",
  },
  {
    level: 20,
    grain: 57000000,
    wood: 57000000,
    herb: 17500000,
    stars: 247,
    buildings: ["1-я Лаборатория ур.19", "Зал альянса ур.18", "Ферма ур.10"],
    rawBuildings: "1-я Лаборатория ур.19, Зал альянса ур.18, Ферма ур.10",
  },
  {
    level: 21,
    grain: 81200000,
    wood: 81200000,
    herb: 26300000,
    stars: 254,
    buildings: ["1-я Лаборатория ур.20", "Тренировочные площадки ур.20", "Лесопилка ур.10"],
    rawBuildings: "1-я Лаборатория ур.20, Тренировочные площадки ур.20, Лесопилка ур.10",
  },
  {
    level: 22,
    grain: 106000000,
    wood: 106000000,
    herb: 34800000,
    stars: 260,
    buildings: ["1-я Лаборатория ур.21", "Статуя воина ур.21", "Сад трав ур.10"],
    rawBuildings: "1-я Лаборатория ур.21, Статуя воина ур.21, Сад трав ур.10",
  },
  {
    level: 23,
    grain: 137000000,
    wood: 137000000,
    herb: 40400000,
    stars: 270,
    buildings: ["1-я Лаборатория ур.22", "Лазарет ур.22", "Амбар ур.10"],
    rawBuildings: "1-я Лаборатория ур.22, Лазарет ур.22, Амбар ур.10",
  },
  {
    level: 24,
    grain: 168000000,
    wood: 168000000,
    herb: 55100000,
    stars: 282,
    buildings: ["1-я Лаборатория ур.23", "Стены ур.23", "Склад древесины ур.10"],
    rawBuildings: "1-я Лаборатория ур.23, Стены ур.23, Склад древесины ур.10",
  },
  {
    level: 25,
    grain: 260000000,
    wood: 260000000,
    herb: 91200000,
    stars: 292,
    buildings: ["1-я Лаборатория ур.24", "Тренировочные площадки ур.24", "Хранилище трав ур.10"],
    rawBuildings: "1-я Лаборатория ур.24, Тренировочные площадки ур.24, Хранилище трав ур.10",
  },
  {
    level: 26,
    grain: 362000000,
    wood: 362000000,
    herb: 115000000,
    stars: 304,
    buildings: ["1-я Лаборатория ур.25", "Статуя воина ур.25", "Мастерская антитоксинов ур.13"],
    rawBuildings: "1-я Лаборатория ур.25, Статуя воина ур.25, Мастерская антитоксинов ур.13",
  },
  {
    level: 27,
    grain: 512000000,
    wood: 512000000,
    herb: 158000000,
    stars: 314,
    buildings: ["1-я Лаборатория ур.26", "Тренировочные площадки ур.26", "Ферма ур.13"],
    rawBuildings: "1-я Лаборатория ур.26, Тренировочные площадки ур.26, Ферма ур.13",
  },
  {
    level: 28,
    grain: 684000000,
    wood: 684000000,
    herb: 221000000,
    stars: 326,
    buildings: ["1-я Лаборатория ур.27", "Казармы ур.27", "Лесопилка ур.13"],
    rawBuildings: "1-я Лаборатория ур.27, Казармы ур.27, Лесопилка ур.13",
  },
  {
    level: 29,
    grain: 995000000,
    wood: 995000000,
    herb: 301000000,
    stars: 326,
    buildings: ["1-я Лаборатория ур.28", "Зал альянса ур.28", "Сад трав ур.13"],
    rawBuildings: "1-я Лаборатория ур.28, Зал альянса ур.28, Сад трав ур.13",
  },
  {
    level: 30,
    grain: 1300000000,
    wood: 1300000000,
    herb: 415000000,
    stars: 326,
    buildings: ["1-я Лаборатория ур.29", "Тренировочные площадки ур.29", "Мастерская антитоксинов ур.15"],
    rawBuildings: "1-я Лаборатория ур.29, Тренировочные площадки ур.29, Мастерская антитоксинов ур.15",
  },
];

export const SANCTUARY_TOTALS = {
  grain: 4770503013,
  wood: 4770503013,
  herb: 1511103000,
};

// Format large numbers in compact readable Russian format or with space separators
export function formatCompactNumber(num: number): string {
  if (num === 0) return "—";
  if (num >= 1000000000) {
    const b = num / 1000000000;
    return `${b % 1 === 0 ? b.toFixed(0) : b.toFixed(2).replace(/\.?0+$/, "")} млрд`;
  }
  if (num >= 1000000) {
    const m = num / 1000000;
    return `${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1).replace(/\.?0+$/, "")} млн`;
  }
  if (num >= 1000) {
    const k = num / 1000;
    return `${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1).replace(/\.?0+$/, "")} тыс.`;
  }
  return num.toLocaleString("ru-RU");
}

export function formatExactNumber(num: number): string {
  if (num === 0) return "—";
  return num.toLocaleString("ru-RU");
}
