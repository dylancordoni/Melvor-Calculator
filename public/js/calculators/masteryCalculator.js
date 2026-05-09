export function calculateMasteryXP({
  unlockedActions,
  playerTotalMastery,
  totalMastery,
  itemMasteryLevel,
  totalItems,
  actionTime,
  bonus
}) {

  const base =
    (
      unlockedActions *
      (playerTotalMastery / totalMastery)
    ) +
    (
      itemMasteryLevel *
      (totalItems / 10)
    );

  return (
    base *
    actionTime *
    0.5 *
    (1 + bonus)
  );
}

export function simulateTimeToTargetMastery({
  currentLevel,
  targetLevel,
  actionTime,
  bonus,
  unlockedActions,
  playerTotalMastery,
  totalMastery,
  totalItems
}) {
  let level = currentLevel;
  let totalSeconds = 0;

  while (level < targetLevel) {
    const currentLevelXP =
      xpForLevel(level);

    const nextLevelXP =
      xpForLevel(level + 1);

    const xpNeeded =
      nextLevelXP - currentLevelXP;

    const mxpPerAction =
      calculateMasteryXP({
        unlockedActions,
        playerTotalMastery,
        totalMastery,
        itemMasteryLevel: level,
        totalItems,
        actionTime,
        bonus
      });

    const actionsNeeded =
      Math.ceil(xpNeeded / mxpPerAction);

    totalSeconds += actionsNeeded * actionTime;

    level++;
    playerTotalMastery++;
  }

  return totalSeconds;
}
export function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return `${hours}h ${minutes}m ${secs}s`;
}

export function xpForLevel(level) {
  let points = 0;

  for (let i = 1; i < level; i++) {
    points += Math.floor(i + 300 * Math.pow(2, i / 7));
  }

  return Math.floor(points / 4);
}