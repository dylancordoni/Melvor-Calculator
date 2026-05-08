export function masteryLevelToXP(level) {
  return Math.floor(level ** 3 + 50);
}

export function masteryXPPerHour(mxpPerAction, actionTime) {
  return mxpPerAction * (3600 / actionTime);
}