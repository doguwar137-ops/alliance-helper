import React, { useState } from "react";
import {
  Sparkles,
  Swords,
  Shield,
  Heart,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  Flame,
  Crosshair,
  Wand2,
  ArrowRight,
  Info,
  Layers,
  Award,
} from "lucide-react";

type FactionFilter = "all" | "warriors" | "rangers" | "warlocks";

interface HeroSkillBuild {
  id: string;
  name: string;
  faction: "warriors" | "rangers" | "warlocks";
  factionLabel: string;
  role: "ДД" | "Танк" | "Саппорт" | "Дебаффер / Танк";
  subtitle: string;
  baseLevel: string;
  priorityBadge?: string;
  steps: {
    order: string;
    skill: string;
    target: string;
    highlight?: boolean;
    note?: string;
  }[];
  summaryFormula: string;
  explanation: string[];
  synergy?: string;
}

const HERO_BUILDS: HeroSkillBuild[] = [
  // ВОИНЫ
  {
    id: "marlena",
    name: "Марлена",
    faction: "warriors",
    factionLabel: "Воины",
    role: "ДД",
    subtitle: "Главный ДД — сначала взрывной урон",
    baseLevel: "Все навыки → 15",
    priorityBadge: "ПРИОРИТЕТ №1 У ВОИНОВ",
    steps: [
      {
        order: "1",
        skill: "Высший навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Основной источник мощного моментального взрывного урона.",
      },
      {
        order: "2",
        skill: "Второй активный навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Срабатывает каждые ~4,5 сек. и наносит большой энергетический урон по области.",
      },
      {
        order: "3",
        skill: "Пассивный навык",
        target: "→ 30 ур.",
        note: "Увеличивает весь наносимый Марленой энергетический урон (усиливает сразу оба активных навыка).",
      },
      {
        order: "4",
        skill: "Автоатака",
        target: "→ последней",
        note: "Бьёт одну цель перед собой (обычно танка первой линии), поэтому спокойно откладываем.",
      },
    ],
    summaryFormula: "Всё до 15 → Высший 30 → Активный 30 → Пассивка 30 → Автоатака",
    explanation: [
      "Хорошо развитая Марлена способна развалить оставшуюся часть команды соперника одним удачным применением высшего навыка.",
      "Если ресурсов хватает только на одного ДД, сначала полностью собирайте Марлену и ключевые навыки Харпера, а уже затем догоняйте Зою.",
    ],
    synergy: "Связка с Зоей: вихрь Зои увеличивает получаемый врагами энергетический урон на 20%, под который Марлена вливает ульту.",
  },
  {
    id: "zoya",
    name: "Зоя",
    faction: "warriors",
    factionLabel: "Воины",
    role: "ДД",
    subtitle: "Второй ДД — два важных навыка можно развивать вместе",
    baseLevel: "Все навыки → 15",
    steps: [
      {
        order: "1–2",
        skill: "Высший навык + Второй основной навык (Вихрь)",
        target: "→ 30 ур. (или параллельно 20/20 → 25/25 → 30/30)",
        highlight: true,
        note: "Вихрь даёт +20% к получаемому врагами энергетическому урону (сам бонус 20% не растёт от уровня, но растёт урон вихря).",
      },
      {
        order: "3",
        skill: "Автоатака",
        target: "→ раньше пассивки",
        note: "У Зои автоатаку можно поднять раньше пассивки.",
      },
      {
        order: "4",
        skill: "Пассивный навык (крит)",
        target: "→ последней",
        note: "Добавляет шанс крита, но прирост за каждый новый уровень небольшой.",
      },
    ],
    summaryFormula: "Всё до 15 → Два основных навыка (20/20 → 25/25 → 30/30) → Автоатака → Пассивка",
    explanation: [
      "Вариант 1: Сначала высший навык → 30, потом второй основной навык → 30.",
      "Вариант 2 (лучше для роли второго ДД): Развивать оба постепенно — 20/20 → 25/25 → 30/30.",
    ],
    synergy: "Зоя накладывает вихрь (+20% энерго-урона) → Марлена бьёт туда своими активными навыками.",
  },
  {
    id: "arthur",
    name: "Артур",
    faction: "warriors",
    factionLabel: "Воины",
    role: "Танк",
    subtitle: "Личный танк — урон от него вообще не нужен",
    baseLevel: "Все навыки → 10",
    steps: [
      {
        order: "1",
        skill: "Навык со щитом (второй активный)",
        target: "→ 30 ур.",
        highlight: true,
        note: "Накладывает на Артура щит от его максимального здоровья и помогает дольше держать линию.",
      },
      {
        order: "2",
        skill: "Защитный командный навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Снижает получаемый урон союзников рядом.",
      },
      {
        order: "3",
        skill: "Пассивный навык",
        target: "→ 30 ур.",
        note: "Дополнительное укрепление живучести.",
      },
      {
        order: "4",
        skill: "Автоатака",
        target: "→ в самом конце (оставить на ~10)",
        note: "Пусть Артур лучше проживёт лишние секунды, чем нанесёт ещё один тычок.",
      },
    ],
    summaryFormula: "Всё до 10 → Навык со щитом 30 → Защитный командный 30 → Пассивка → Автоатака (оставить на 10)",
    explanation: [
      "Его единственная задача — максимально долго стоять на первой линии.",
      "Автоатаку можно очень долго оставить примерно на 10-м уровне.",
    ],
  },
  {
    id: "daskal",
    name: "Даскал",
    faction: "warriors",
    factionLabel: "Воины",
    role: "Танк",
    subtitle: "Командный танк — щит для всей пачки важнее личного урона",
    baseLevel: "Все навыки → 10",
    steps: [
      {
        order: "1",
        skill: "Высший навык (Массовый щит)",
        target: "→ 30 ур.",
        highlight: true,
        note: "Накладывает щит на всех союзников, поглощая часть входящего урона при обмене ультами.",
      },
      {
        order: "2",
        skill: "Пассивный навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Помогает союзникам и может спасти просевшего по здоровью ДД от добивания.",
      },
      {
        order: "3",
        skill: "Навык собственной выживаемости",
        target: "→ 30 ур.",
        note: "Личная живучесть танка.",
      },
      {
        order: "4",
        skill: "Автоатака",
        target: "→ последней",
      },
    ],
    summaryFormula: "Всё до 10 → Высший 30 → Пассивка 30 → Личная выживаемость → Автоатака",
    explanation: [
      "В отличие от Артура (который держит удар сам), Даскал защищает всю команду.",
      "Когда по вашему ДД прилетела ульта и осталось мало HP, щит Даскала даёт те самые 2 секунды, чтобы ДД пережил удар и нажал свой главный навык.",
    ],
  },
  {
    id: "harper",
    name: "Харпер",
    faction: "warriors",
    factionLabel: "Воины",
    role: "Саппорт",
    subtitle: "Сначала разгоняем атаку всей команды",
    baseLevel: "Все навыки → 10",
    priorityBadge: "УНИВЕРСАЛЬНЫЙ САППОРТ",
    steps: [
      {
        order: "1",
        skill: "Звук боевой флейты",
        target: "→ 30 ур.",
        highlight: true,
        note: "Увеличивает атаку союзных героев (отлично работает в любых составах, PvE и на боссах).",
      },
      {
        order: "2",
        skill: "Пассивка на атаку воинов",
        target: "→ 30 ур.",
        highlight: true,
        note: "Усиливает конкретно фракцию воинов.",
      },
      {
        order: "3",
        skill: "Защитный активный навык",
        target: "→ 30 ур.",
      },
      {
        order: "4",
        skill: "Автоатака",
        target: "→ последней",
      },
    ],
    summaryFormula: "Всё до 10 → Боевая флейта 30 → Пассивка воинов 30 → Защитный навык 30 → Автоатака",
    explanation: [
      "Для Харпера особенно важно добраться до этапа развития, при котором его пассивная механика синхронизируется с главными навыками ДД.",
      "В пачке воинов сначала заканчиваем Марлену и ключевые навыки Харпера.",
    ],
  },

  // РЕЙНДЖЕРЫ
  {
    id: "red-lady",
    name: "Красная Леди",
    faction: "rangers",
    factionLabel: "Рейнджеры",
    role: "ДД",
    subtitle: "Главный ДД ранней/средней игры — взрывной урон + оглушение",
    baseLevel: "Все навыки → 15",
    priorityBadge: "ТОП PVP БУРСТ",
    steps: [
      {
        order: "1",
        skill: "Высший навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Огромный моментальный урон по сильным героям противника + оглушение (великолепно для PvP).",
      },
      {
        order: "2",
        skill: "Активный навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Высокий урон + цель после попадания начинает получать больше урона от союзников.",
      },
      {
        order: "3",
        skill: "Пассивка на атаку",
        target: "→ 30 ур.",
      },
      {
        order: "4",
        skill: "Автоатака",
        target: "→ последней",
      },
    ],
    summaryFormula: "Всё до 15 → Высший 30 → Активный 30 → Пассивка 30 → Автоатака",
    explanation: [
      "На раннем и среднем этапе Красная Леди — главный ДД рейнджеров за счёт огромного разового урона и контроля по важным целям.",
      "Второй активный навык не только больно бьёт, но и подготавливает цель под фокус остальных союзников.",
    ],
  },
  {
    id: "cynthia",
    name: "Синтия",
    faction: "rangers",
    factionLabel: "Рейнджеры",
    role: "ДД",
    subtitle: "Мощный AoE-крит ДД — раскрывается в поздней игре с пробуждением",
    baseLevel: "Все навыки → 15",
    steps: [
      {
        order: "1",
        skill: "Высший навык (AoE с критом)",
        target: "→ 30 ур.",
        highlight: true,
        note: "Бьёт по большой области и имеет шанс критического удара.",
      },
      {
        order: "2",
        skill: "Второй активный навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Регулярно атакует сразу несколько целей.",
      },
      {
        order: "3",
        skill: "Пассивка (критическая механика)",
        target: "→ 30 ур.",
        note: "Усиливает шанс и эффективность критов.",
      },
      {
        order: "4",
        skill: "Автоатака",
        target: "→ последней",
      },
    ],
    summaryFormula: "Всё до 15 → Высший 30 → Активный 30 → Пассивка 30 → Автоатака",
    explanation: [
      "В поздней игре при развитом пробуждении начинает серьёзно конкурировать с Красной Леди за роль главного ДД.",
      "Когда проходит крит по сильному AoE-навыку, вражеский отряд теряет огромную часть здоровья.",
    ],
  },
  {
    id: "louis",
    name: "Луи",
    faction: "rangers",
    factionLabel: "Рейнджеры",
    role: "Танк",
    subtitle: "Главный талант — категорически отказываться умирать",
    baseLevel: "Все навыки → 10",
    steps: [
      {
        order: "1",
        skill: "Высший навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Восстанавливает здоровье Луи и снижает получаемый им урон.",
      },
      {
        order: "2",
        skill: "Пассивный навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Повышает выживаемость и позволяет после смертельного урона некоторое время продолжать сражаться.",
      },
      {
        order: "3",
        skill: "Активный защитный навык",
        target: "→ 30 ур.",
      },
      {
        order: "4",
        skill: "Автоатака",
        target: "→ остаётся на ~10 ур.",
      },
    ],
    summaryFormula: "Всё до 10 → Высший 30 → Пассивка 30 → Активный защитный 30 → Автоатака на 10",
    explanation: [
      "Пытаться делать из Луи героя урона не нужно — вся его прокачка строится вокруг удержания передней линии и бессмертия после летального удара.",
    ],
  },
  {
    id: "shadow",
    name: "Шэдоу",
    faction: "rangers",
    factionLabel: "Рейнджеры",
    role: "Дебаффер / Танк",
    subtitle: "Особая ступенчатая схема: снижение защиты ~30% + выживаемость",
    baseLevel: "Все навыки → 10",
    priorityBadge: "СТУПЕНЧАТАЯ ПРОКАЧКА 20 → 30",
    steps: [
      {
        order: "1",
        skill: "Навык снижения защиты",
        target: "→ 20 ур.",
        highlight: true,
        note: "Режет защиту противника напротив (~30%), вскрывая вражеского танка.",
      },
      {
        order: "2",
        skill: "Высший навык + Пассивка",
        target: "→ 20 ур. (оба)",
        highlight: true,
        note: "Даём Шэдоу выживаемость, чтобы он не умирал рано и успевал дать дебафф несколько раз.",
      },
      {
        order: "3",
        skill: "Навык снижения защиты",
        target: "→ 30 ур.",
        highlight: true,
        note: "Доводим главный дебафф до максимума.",
      },
      {
        order: "4",
        skill: "Высший навык → 30, затем Пассивка → 30",
        target: "→ 30 ур.",
        note: "Автоатака остаётся на 10.",
      },
    ],
    summaryFormula: "Всё до 10 → Дебафф 20 → Высший 20 → Пассивка 20 → Дебафф 30 → Высший 30 → Пассивка 30 → Авто на 10",
    explanation: [
      "Шэдоу не такой живучий, как Луи. Если сразу загнать дебафф на 30, оставив остальное на 10, он погибнет слишком быстро.",
      "Сначала выводим три навыка на 20-й уровень, чтобы он стабильно жил до повторного каста, и только потом закрываем до 30.",
    ],
    synergy: "Шэдоу режет защиту танку на ~30% → через пару секунд туда прилетает ульта Красной Леди или Синтии.",
  },
  {
    id: "bell",
    name: "Белл",
    faction: "rangers",
    factionLabel: "Рейнджеры",
    role: "Саппорт",
    subtitle: "Усиливаем двух главных ДД, а уже потом лечим",
    baseLevel: "Все навыки → 10",
    priorityBadge: "УНИВЕРСАЛЬНЫЙ БАФФЕР",
    steps: [
      {
        order: "1",
        skill: "Высший навык (Бафф атаки)",
        target: "→ 30 ур.",
        highlight: true,
        note: "Даёт огромный процент атаки двум союзникам с самой высокой атакой (работает в любой фракции!).",
      },
      {
        order: "2",
        skill: "Пассивный навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Особенно важна при игре через состав рейнджеров.",
      },
      {
        order: "3",
        skill: "Навык лечения",
        target: "→ 30 ур.",
        note: "Лечение зависит от атаки самой Белл. Пока лучший меч отдан главным ДД, лечение качаем третьим.",
      },
      {
        order: "4",
        skill: "Автоатака",
        target: "→ последней",
      },
    ],
    summaryFormula: "Всё до 10 → Высший 30 → Пассивка 30 → Лечение 30 → Автоатака",
    explanation: [
      "Один из лучших универсальных саппортов игры: баффает двух сильнейших ДД вне зависимости от их фракции.",
      "Когда дадите Белл хороший меч и поднимете её собственную атаку, навык лечения раскроется в полную силу.",
    ],
  },

  // КОЛДУНЫ
  {
    id: "ulfrid",
    name: "Ульфрид",
    faction: "warlocks",
    factionLabel: "Колдуны",
    role: "Танк",
    subtitle: "Качаем ПЕРВЫМ у колдунов! Отражение входящего урона физикой",
    baseLevel: "Все навыки → 10",
    priorityBadge: "КАЧАТЬ ПЕРВЫМ У КОЛДУНОВ",
    steps: [
      {
        order: "1",
        skill: "Навык отражения урона",
        target: "→ 30 ур.",
        highlight: true,
        note: "Возвращает часть входящего урона обратно врагу физическим уроном (кошмар для Марлены и других ДД).",
      },
      {
        order: "2",
        skill: "Пассивка на снижение входящего урона",
        target: "→ 30 ур.",
        highlight: true,
        note: "Чем дольше живёт Ульфрид — тем больше урона возвращается врагам.",
      },
      {
        order: "3",
        skill: "Высший командный защитный навык",
        target: "→ 30 ур.",
      },
      {
        order: "4",
        skill: "Автоатака",
        target: "→ потом",
      },
    ],
    summaryFormula: "Всё до 10 → Отражение 30 → Пассивка снижения урона 30 → Высший защитный 30 → Автоатака",
    explanation: [
      "У колдунов прокачку отряда начинаем не с ДД, а с танка Ульфрида!",
      "Большинство команд защищаются от энергетического урона, а Ульфрид возвращает ответный урон физикой. Обязательно надевайте на него лучшую броню, ботинки и перчатки со снижением урона.",
    ],
    synergy: "Ульфрид + Николь: танк стоит под постоянным хилом Николь и бесконечно возвращает физический урон вражеским ДД.",
  },
  {
    id: "billy",
    name: "Билли",
    faction: "warlocks",
    factionLabel: "Колдуны",
    role: "Танк",
    subtitle: "Командная защита от энерго-урона и анти-оглушение",
    baseLevel: "Все навыки → 10",
    steps: [
      {
        order: "1",
        skill: "Активный защитный навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Снижает энергетический урон, получаемый союзниками.",
      },
      {
        order: "2",
        skill: "Пассивный навык",
        target: "→ 30 ур.",
        highlight: true,
      },
      {
        order: "3",
        skill: "Высший навык",
        target: "→ 30 ур. (после защиты)",
        note: "Ценность анти-стана связана с общим развитием героя, поэтому сначала закрываем постоянную защиту пачки.",
      },
      {
        order: "4",
        skill: "Автоатака",
        target: "→ последней",
      },
    ],
    summaryFormula: "Всё до 10 → Активный защитный 30 → Пассивка 30 → Высший 30 → Автоатака",
    explanation: [
      "Особенно хорош против рейнджеров и Красной Леди за счёт механики против оглушения и снижения энергетического урона по команде.",
    ],
  },
  {
    id: "joker",
    name: "Джокер",
    faction: "warlocks",
    factionLabel: "Колдуны",
    role: "ДД",
    subtitle: "Исключение из правил: физический урон + рабочая автоатака!",
    baseLevel: "Все навыки → 15",
    priorityBadge: "АВТОАТАКА ВАЖНА!",
    steps: [
      {
        order: "1",
        skill: "Высший навык (Добивание)",
        target: "→ 30 ур.",
        highlight: true,
        note: "Идеально добивает вражеских ДД, просевших от отражения Ульфрида и горения Анни.",
      },
      {
        order: "2",
        skill: "Активный навык + Автоатака (параллельно)",
        target: "→ 20/20 → 25/25 → 30/30",
        highlight: true,
        note: "Бьёт физическим уроном, а Николь разгоняет скорость атаки колдунов — автоатака наносит огромный постоянный урон!",
      },
      {
        order: "3",
        skill: "Пассивный навык (шанс крита)",
        target: "→ последним",
        note: "Прирост шанса крита за уровень сравнительно маленький.",
      },
    ],
    summaryFormula: "Всё до 15 → Высший 30 → Активный + Автоатака (20/20 → 25/25 → 30/30) → Пассивка (крит)",
    explanation: [
      "Главное исключение гайда: Джокер бьёт физикой в мету, где все защищаются от энергии, поэтому его автоатаку качаем наравне со вторым активным навыком.",
    ],
    synergy: "Николь + Джокер: ускорение скорости атаки от Николь превращает физические автоатаки Джокера в пулемёт.",
  },
  {
    id: "annie",
    name: "Анни",
    faction: "warlocks",
    factionLabel: "Колдуны",
    role: "ДД",
    subtitle: "Растянутый AoE-урон через горение и раскрытие на пробуждении",
    baseLevel: "Все навыки → 15",
    steps: [
      {
        order: "1",
        skill: "Два основных атакующих навыка (параллельно)",
        target: "→ до 30 ур.",
        highlight: true,
        note: "Оба навыка наносят начальный энерго-урон и накладывают горение. Качаем равномерно до порогов.",
      },
      {
        order: "2",
        skill: "Пассивный навык",
        target: "→ 30 ур.",
        highlight: true,
        note: "Усиливает весь наносимый Анни урон.",
      },
      {
        order: "3",
        skill: "Автоатака",
        target: "→ последней",
      },
    ],
    summaryFormula: "Всё до 15 → Два основных атакующих навыка до 30 → Пассивка 30 → Автоатака",
    explanation: [
      "При повышении уровня навыков растёт первоначальный удар, а базовый доп. урон горения (100% атаки) сам по себе от уровня навыка не меняется. Полностью раскрывается с пробуждением в затяжных боях.",
    ],
  },
  {
    id: "nicole",
    name: "Николь",
    faction: "warlocks",
    factionLabel: "Колдуны",
    role: "Саппорт",
    subtitle: "Видим огромный урон на ульте, но СНАЧАЛА качаем лечение!",
    baseLevel: "Все навыки → 15",
    priorityBadge: "СЕРДЦЕ ПАЧКИ КОЛДУНОВ",
    steps: [
      {
        order: "1",
        skill: "Навык лечения",
        target: "→ 30 ур.",
        highlight: true,
        note: "Лечит 2 союзников с самым низким HP — не даёт Ульфриду и пачке развалиться в длинном бою.",
      },
      {
        order: "2",
        skill: "Пассивный навык (промежуточный порог)",
        target: "→ примерно до 20 ур.",
        highlight: true,
        note: "Разгоняет атакующие механики колдунов и скорость атаки для Джокера.",
      },
      {
        order: "3",
        skill: "Высший навык (физический урон)",
        target: "→ 30 ур.",
        highlight: true,
        note: "Огромный физ. урон (особенно по целям под горением Анни).",
      },
      {
        order: "4",
        skill: "Добиваем Пассивку → 30, затем Автоатака",
        target: "→ 30 ур. / последней",
      },
    ],
    summaryFormula: "Всё до 15 → Лечение 30 → Пассивка до ~20 → Высший 30 → Пассивка до 30 → Автоатака",
    explanation: [
      "Главный пример правила: самая большая цифра урона в описании не означает, что навык нужно качать первым!",
      "Команда колдунов живёт от длинного боя: если сначала вкачать ульту Николь вместо лечения, Ульфрид упадёт раньше времени и вся конструкция рассыпется.",
    ],
    synergy: "Держит жизнь Ульфриду + разгоняет скорость атаки Джокеру + бьёт ультой по горению Анни.",
  },
];

export const HeroSkillsGuide: React.FC = () => {
  const [selectedFaction, setSelectedFaction] = useState<FactionFilter>("all");
  const [copiedSummary, setCopiedSummary] = useState(false);

  const filteredHeroes =
    selectedFaction === "all"
      ? HERO_BUILDS
      : HERO_BUILDS.filter((h) => h.faction === selectedFaction);

  const handleCopySummary = () => {
    const text = `⚡ ГАЙД ПО ПРОКАЧКЕ НАВЫКОВ ГЕРОЕВ (LAST ASYLUM: PLAGUE)

📌 БАЗОВОЕ ПРАВИЛО:
• Основные ДД: сначала все навыки → 15 ур., затем точечно в 30 + быстро открыть «Стойкость» (+20% статов, +10% перезарядки).
• Танки и Саппорты: сначала все навыки → 10 ур., затем ключевые защитные/командные умения в 30.
• Автоатака: почти всем качаем ПОСЛЕДНЕЙ (исключение — Джокер и отчасти Зоя).

⚔️ ВОИНЫ:
• Марлена (ДД): Всё 15 → Высший 30 → Активный 30 → Пассивка 30 → Авто
• Зоя (ДД): Всё 15 → 2 основных навыка (20/20 → 25/25 → 30/30) → Авто → Пассивка
• Артур (Танк): Всё 10 → Щит 30 → Командная защита 30 → Пассивка → Авто (на 10)
• Даскал (Танк): Всё 10 → Высший (общий щит) 30 → Пассивка 30 → Выживаемость → Авто
• Харпер (Саппорт): Всё 10 → Боевая флейта 30 → Пассивка воинов 30 → Защита 30 → Авто

🏹 РЕЙНДЖЕРЫ:
• Красная Леди (ДД): Всё 15 → Высший 30 → Активный 30 → Пассивка 30 → Авто
• Синтия (ДД): Всё 15 → Высший 30 → Активный 30 → Пассивка 30 → Авто
• Луи (Танк): Всё 10 → Высший 30 → Пассивка (бессмертие) 30 → Защитный 30 → Авто (на 10)
• Шэдоу (Дебафф): Всё 10 → Снижение защиты 20 → Высший 20 → Пассивка 20 → Снижение защиты 30 → Высший 30 → Пассивка 30
• Белл (Саппорт): Всё 10 → Высший (бафф 2 ДД) 30 → Пассивка 30 → Лечение 30 → Авто

🔮 КОЛДУНЫ (начинаем с Ульфрида!):
• Ульфрид (Танк №1): Всё 10 → Отражение 30 → Пассивка снижения урона 30 → Высший 30 → Авто
• Билли (Танк): Всё 10 → Активный защитный 30 → Пассивка 30 → Высший 30 → Авто
• Джокер (Физ. ДД): Всё 15 → Высший 30 → Активный + Автоатака (20/20 → 25/25 → 30/30) → Крит последним
• Анни (DoT ДД): Всё 15 → 2 основных навыка до 30 → Пассивка 30 → Авто
• Николь (Хилер): Всё 15 → Лечение 30 → Пассивка до 20 → Высший 30 → Пассивка 30 → Авто`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const getRoleBadgeStyle = (role: HeroSkillBuild["role"]) => {
    switch (role) {
      case "ДД":
        return "bg-rose-50 text-rose-800 border-rose-200";
      case "Танк":
        return "bg-sky-50 text-sky-800 border-sky-200";
      case "Саппорт":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Дебаффер / Танк":
        return "bg-purple-50 text-purple-800 border-purple-200";
    }
  };

  const getFactionHeaderStyle = (faction: HeroSkillBuild["faction"]) => {
    switch (faction) {
      case "warriors":
        return {
          border: "border-rose-200",
          bg: "bg-rose-50/60",
          iconBg: "bg-rose-100 text-rose-700 border-rose-200",
          badge: "bg-rose-100 text-rose-800 border-rose-200",
        };
      case "rangers":
        return {
          border: "border-emerald-200",
          bg: "bg-emerald-50/60",
          iconBg: "bg-emerald-100 text-emerald-700 border-emerald-200",
          badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
        };
      case "warlocks":
        return {
          border: "border-purple-200",
          bg: "bg-purple-50/60",
          iconBg: "bg-purple-100 text-purple-700 border-purple-200",
          badge: "bg-purple-100 text-purple-800 border-purple-200",
        };
    }
  };

  return (
    <div id="hero-skills-guide-container" className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Приоритеты прокачки • Схемы 10 / 15 → 30</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Гайд по навыкам героев (Воины, Рейнджеры, Колдуны)
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              В каком порядке качать способности каждого героя, почему нельзя качать всё равномерно и у кого автоатака действительно работает.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopySummary}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold transition-colors shadow-xs cursor-pointer shrink-0"
          >
            {copiedSummary ? (
              <>
                <Check className="w-4 h-4" />
                <span>Шпаргалка скопирована!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Скопировать шпаргалку в чат</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Golden Rules: 4 Foundational Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-white border border-rose-200 p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-700">
                <Swords className="w-4 h-4" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
                1. Основные ДД
              </span>
            </div>
            <p className="text-sm font-extrabold text-slate-900 mb-1">
              Сначала все навыки → 15 ур.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Не качайте один навык на 30, пока остальные на 1 ур. Доведите базу до 15-го уровня, а затем точечно закрывайте главные ударные способности до 30.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-sky-200 p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-sky-50 border border-sky-200 text-sky-700">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
                2. Танки и Саппорты
              </span>
            </div>
            <p className="text-sm font-extrabold text-slate-900 mb-1">
              Сначала база → 10 ур.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              После 10-го уровня качаем строго профильные навыки: у танков — <strong>щиты, снижение урона, самоисцеление</strong>; у саппортов — <strong>баффы атаки ДД и лечение</strong>.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-amber-200 p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-700">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                3. «Стойкость» для ДД
              </span>
            </div>
            <p className="text-sm font-extrabold text-slate-900 mb-1">
              +20% статов и +10% перезарядки
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Главных дамагеров нужно как можно быстрее вывести на этап развития со «Стойкостью»: больше атаки, здоровья, защиты и более частый каст основных умений.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-purple-200 p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-purple-50 border border-purple-200 text-purple-700">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple-800">
                4. Правило Автоатаки
              </span>
            </div>
            <p className="text-sm font-extrabold text-slate-900 mb-1">
              Почти всегда — последней!
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Обычная атака бьёт только танка первой линии. У танков её можно оставить на 10 ур. Главное исключение — <strong>Джокер</strong> (бьёт физикой под ускорением Николь).
            </p>
          </div>
        </div>
      </div>

      {/* Faction Filter Tabs */}
      <div className="rounded-2xl bg-white border border-slate-200 p-3 sm:p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setSelectedFaction("all")}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedFaction === "all"
                ? "bg-slate-900 text-white shadow-2xs"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Все герои (15)</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedFaction("warriors")}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedFaction === "warriors"
                ? "bg-rose-600 text-white shadow-2xs"
                : "bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200"
            }`}
          >
            <Swords className="w-4 h-4" />
            <span>Воины (5)</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedFaction("rangers")}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedFaction === "rangers"
                ? "bg-emerald-600 text-white shadow-2xs"
                : "bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200"
            }`}
          >
            <Crosshair className="w-4 h-4" />
            <span>Рейнджеры (5)</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedFaction("warlocks")}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedFaction === "warlocks"
                ? "bg-purple-600 text-white shadow-2xs"
                : "bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200"
            }`}
          >
            <Wand2 className="w-4 h-4" />
            <span>Колдуны (5)</span>
          </button>
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Совет: качайте навыки в <strong>Четверг (Развитие Героев)</strong> для максимальных очков Дуэли!
        </div>
      </div>

      {/* Faction Specific Context Banners */}
      {(selectedFaction === "all" || selectedFaction === "warriors") && (
        <div className="rounded-xl bg-rose-50/70 border border-rose-200 p-4 text-xs sm:text-sm text-rose-950 flex items-start gap-3">
          <Swords className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-extrabold uppercase tracking-wide">Стратегия фракции Воинов: </span>
            Сначала полностью заканчиваем <strong>Марлену</strong> и ключевые навыки <strong>Харпера</strong> («Звук боевой флейты» + пассивку воинов), и только потом распределяем ресурсы на <strong>Зою</strong> и танков (Артура / Даскала).
          </div>
        </div>
      )}

      {(selectedFaction === "all" || selectedFaction === "rangers") && (
        <div className="rounded-xl bg-emerald-50/70 border border-emerald-200 p-4 text-xs sm:text-sm text-emerald-950 flex items-start gap-3">
          <Crosshair className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-extrabold uppercase tracking-wide">Красная Леди или Синтия — кто главный ДД? </span>
            На раннем и среднем этапе игры ставьте выше <strong>Красную Леди</strong> (мощный PvP-бурст и оглушение). В поздней игре при развитом пробуждении <strong>Синтия</strong> серьёзно конкурирует за роль главного ДД за счёт AoE-критов.
          </div>
        </div>
      )}

      {(selectedFaction === "all" || selectedFaction === "warlocks") && (
        <div className="rounded-xl bg-purple-50/70 border border-purple-200 p-4 text-xs sm:text-sm text-purple-950 flex items-start gap-3">
          <Wand2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-extrabold uppercase tracking-wide">Особенность Колдунов — начинаем с Танка, а не с ДД! </span>
            Прокачку пачки колдунов начинаем с <strong>Ульфрида</strong> (отражение урона физикой), подкрепляем лечением <strong>Николь</strong> и физическим уроном <strong>Джокера</strong> (у которого обязательно качается автоатака!).
          </div>
        </div>
      )}

      {/* Hero Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredHeroes.map((hero) => {
          const factionTheme = getFactionHeaderStyle(hero.faction);
          return (
            <div
              key={hero.id}
              className="rounded-2xl bg-white border border-slate-200 shadow-2xs overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Card Top Header */}
                <div className={`p-4 sm:p-5 border-b ${factionTheme.border} ${factionTheme.bg}`}>
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span
                          className={`text-[11px] font-extrabold uppercase px-2 py-0.5 rounded border ${factionTheme.badge}`}
                        >
                          {hero.factionLabel}
                        </span>
                        <span
                          className={`text-[11px] font-bold uppercase px-2 py-0.5 rounded border ${getRoleBadgeStyle(
                            hero.role
                          )}`}
                        >
                          Роль: {hero.role}
                        </span>
                        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                          Старт: {hero.baseLevel}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        {hero.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                        {hero.subtitle}
                      </p>
                    </div>

                    {hero.priorityBadge && (
                      <span className="px-2.5 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-extrabold uppercase tracking-wide">
                        {hero.priorityBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Step-by-Step Priority List */}
                <div className="p-4 sm:p-5 space-y-2.5">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1">
                    Порядок прокачки после базового уровня:
                  </div>

                  {hero.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border transition-colors ${
                        step.highlight
                          ? "bg-amber-50/60 border-amber-200"
                          : "bg-slate-50 border-slate-200/80"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-6 h-6 rounded-lg font-mono text-xs font-extrabold flex items-center justify-center shrink-0 ${
                              step.highlight
                                ? "bg-amber-600 text-white"
                                : "bg-slate-200 text-slate-700"
                            }`}
                          >
                            {step.order}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900">
                            {step.skill}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded ${
                            step.highlight
                              ? "bg-amber-100 text-amber-900 border border-amber-300"
                              : "bg-slate-200/70 text-slate-700"
                          }`}
                        >
                          {step.target}
                        </span>
                      </div>
                      {step.note && (
                        <p className="text-xs text-slate-600 mt-1.5 pl-8 leading-relaxed">
                          {step.note}
                        </p>
                      )}
                    </div>
                  ))}

                  {/* Explanations */}
                  <div className="pt-2 space-y-1.5">
                    {hero.explanation.map((line, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Bottom Formula & Synergy */}
              <div className="px-4 sm:px-5 py-3.5 bg-slate-50 border-t border-slate-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 flex-wrap">
                  <span className="text-amber-700 uppercase">Итог:</span>
                  <span>{hero.summaryFormula}</span>
                </div>
                {hero.synergy && (
                  <div className="text-xs text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-lg px-2.5 py-1.5 leading-relaxed">
                    <strong>Синергия:</strong> {hero.synergy}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Cheat Sheet Table */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-700">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Полная шпаргалка по навыкам всех героев
            </h2>
            <p className="text-xs text-slate-500">
              Быстрая сводная таблица приоритетов для сохранения и проверки перед прокачкой
            </p>
          </div>
        </div>

        <div className="overflow-x-auto -mx-5 sm:mx-0">
          <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-bold uppercase text-[11px] tracking-wider">
                <th className="py-3 px-4">Герой</th>
                <th className="py-3 px-3">Фракция</th>
                <th className="py-3 px-3">Роль</th>
                <th className="py-3 px-3">База</th>
                <th className="py-3 px-4">Точный порядок прокачки до 30 ур.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {HERO_BUILDS.map((h) => (
                <tr key={h.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-extrabold text-slate-900 whitespace-nowrap">
                    {h.name}
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                        getFactionHeaderStyle(h.faction).badge
                      }`}
                    >
                      {h.factionLabel}
                    </span>
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded border ${getRoleBadgeStyle(
                        h.role
                      )}`}
                    >
                      {h.role}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-mono font-bold text-slate-700 whitespace-nowrap">
                    {h.baseLevel.replace("Все навыки → ", "Всё → ")}
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-800">
                    {h.summaryFormula}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5 Main Mistakes & Key Synergies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* 5 Mistakes */}
        <div className="rounded-2xl bg-white border border-rose-200 p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-rose-100">
            <div className="p-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-700">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 uppercase">
                5 ошибок, которые портят прокачку
              </h2>
              <p className="text-xs text-slate-500">
                Чего категорически нельзя делать со значками навыков
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-200/70">
              <div className="font-extrabold text-slate-900">
                1. Качать всех героев одновременно
              </div>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                15 слегка прокачанных героев всегда проиграют одной собранной пятёрке. Сначала полностью завершите основной отряд.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-200/70">
              <div className="font-extrabold text-slate-900">
                2. Качать все 4 навыка равномерно после 10/15 ур.
              </div>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                30-й уровень ключевого высшего навыка Марлены даст несоизмеримо больше, чем равномерное повышение всех 4 умений ради красивых цифр.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-200/70">
              <div className="font-extrabold text-slate-900">
                3. Смотреть только на процент урона
              </div>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                Даскал ценен общим щитом, Шэдоу — срезом защиты на 30%, Ульфрид — отражением, Луи — бессмертием, а Николь — лечением, несмотря на огромные цифры урона ульты.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-200/70">
              <div className="font-extrabold text-slate-900">
                4. Всегда бездумно оставлять автоатаку последней
              </div>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                Для 90% героев это верно, но у <strong>Джокера</strong> физическая автоатака под ускорением Николь — один из главных источников постоянного урона.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-200/70">
              <div className="font-extrabold text-slate-900">
                5. Оценивать навыки в отрыве от связок
              </div>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                Навыки работают в команде: тайминг флейты Харпера под ульту Марлены или лечение Николь под отражение Ульфрида решают исход боя.
              </p>
            </div>
          </div>
        </div>

        {/* Key Synergies & Final Checklist */}
        <div className="rounded-2xl bg-white border border-emerald-200 p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-emerald-100">
              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 uppercase">
                  Главные боевые связки и итог
                </h2>
                <p className="text-xs text-slate-500">
                  Как навыки усиливают друг друга внутри отряда
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                <div className="font-extrabold text-emerald-950 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-rose-600" />
                  <span>Зоя + Марлена (Воины)</span>
                </div>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  Вихрь Зои увеличивает получаемый врагами энергетический урон на 20% → Марлена разряжает в эту зону высший и второй активный навыки.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                <div className="font-extrabold text-emerald-950 flex items-center gap-1.5">
                  <Crosshair className="w-4 h-4 text-emerald-600" />
                  <span>Шэдоу + Красная Леди / Синтия (Рейнджеры)</span>
                </div>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  Шэдоу режет защиту танку напротив на ~30% → следом прилетает взрывной урон Красной Леди или AoE-крит Синтии, снося переднюю линию.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                <div className="font-extrabold text-emerald-950 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span>Ульфрид + Николь (Колдуны)</span>
                </div>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  Ульфрид впитывает урон и возвращает его физикой вражеским ДД, а прокачанное лечение Николь удерживает его в живых весь бой.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                <div className="font-extrabold text-emerald-950 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-purple-600" />
                  <span>Николь + Джокер (Колдуны)</span>
                </div>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  Николь увеличивает скорость атаки колдунов, разгоняя физические автоатаки Джокера, а его ульта добивает раненые цели.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
            <strong>Краткая формула успеха:</strong> Марлене — взрывную атаку, Даскалу — общий щит, Шэдоу — срез защиты (ступенями по 20 → 30), Ульфриду — отражение, Джокеру — ульту + автоатаку, Николь — сначала лечение!
          </div>
        </div>
      </div>
    </div>
  );
};
