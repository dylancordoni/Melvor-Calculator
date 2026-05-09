export function getUnlockedActionsForLevel(
  woodcuttingLevel,
  trees
) {

  return trees.filter(
    tree => woodcuttingLevel >= tree.levelRequired
  ).length;

}