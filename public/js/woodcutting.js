import { loadMasteryModal }
  from "./mastery-modal.js";

import {
  calculateMasteryXP,
  simulateTimeToTargetMastery,
  formatTime
} from "./calculators/masteryCalculator.js";

import {
  woodcuttingData
} from "./data/woodcuttingData.js";

import {
  getUnlockedActionsForLevel
} from "./calculators/woodcuttingHelpers.js";

await loadMasteryModal();

const woodcuttingLevel =
  Number(document.getElementById("skillLevel").value);

const unlockedActions =
  getUnlockedActionsForLevel(
    woodcuttingLevel,
    woodcuttingData.trees
  );



const modal =
  document.getElementById("masteryModal");

const closeModal =
  document.getElementById("closeModal");

let selectedTree = null;

document.addEventListener("click", (event) => {
  const card = event.target.closest(".tree-card");
  if (!card) return;

  selectedTree = woodcuttingData.trees.find(
    tree => tree.id === card.dataset.tree
  );

  document.getElementById("modalTitle").textContent =
    `${selectedTree.name} Mastery Calculator`;

  modal.classList.add("active");
});



/* CLOSE BUTTON */
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

/* CLICK OUTSIDE */
modal.addEventListener("click", (event) => {

  if (event.target === modal) {
    modal.classList.remove("active");
  }

});

const calculateBtn =
  document.getElementById("calculateBtn");


calculateBtn.addEventListener("click", () => {

  const currentLevel =
    Number(
      document.getElementById("currentLevel").value
    );

  const bonus =
    Number(
      document.getElementById("bonus").value
    ) / 100;

  /* TEST VALUES */
  const masteryXP =
    calculateMasteryXP({

      unlockedActions,

      playerTotalMastery: 9,

      totalMastery: woodcuttingData.totalMastery,

      itemMasteryLevel: currentLevel,

      totalItems: woodcuttingData.totalItems,

      actionTime: selectedTree.baseInterval,

      bonus
    });

  document.getElementById("mxpPerAction")
    .textContent =
    masteryXP.toFixed(2);

  const targetLevel =
    Number(document.getElementById("targetLevel").value);

  const totalSeconds =
    simulateTimeToTargetMastery({
      currentLevel,
      targetLevel,
      actionTime: selectedTree.baseInterval,
      bonus,
      unlockedActions,
      playerTotalMastery: 9,
      totalMastery: woodcuttingData.totalMastery,
      totalItems: woodcuttingData.totalItems
    });

  document.getElementById("timeToTarget").textContent =
    formatTime(totalSeconds);

});