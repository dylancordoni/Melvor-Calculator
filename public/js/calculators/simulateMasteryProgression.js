import { xpForLevel } from "./experience.js";

export function simulateMasteryProgression({
  startLevel,
  startXP,
  targetLevel,
  actionTime,
  bonus,
  unlockedActions,
  playerTotalMastery,
  totalMastery,
  totalItems
}) {

  let level = startLevel;
  let xp = startXP;

  let totalSeconds = 0;

  while (level < targetLevel) {

    // MXP/action at CURRENT level
    const mxpPerAction =
      (
        unlockedActions *
        (playerTotalMastery / totalMastery)
      ) +
      (
        level * (totalItems / 10)
      );

    const masteryXP =
      mxpPerAction * actionTime * 0.5 * (1 + bonus);

    xp += masteryXP;

    totalSeconds += actionTime;

    // level up check
    while (xp >= xpForLevel(level + 1)) {
      level++;
    }
  }

  return {
    level,
    xp,
    totalSeconds
  };
}