import { loadMasteryModal }
  from "./mastery-modal.js";

await loadMasteryModal();

const modal =
  document.getElementById("masteryModal");

const closeModal =
  document.getElementById("closeModal");

/* OPEN MODAL */
document.querySelectorAll(".tree-card").forEach(card => {

  card.addEventListener("click", () => {

    const treeName =
      card.querySelector("span").textContent;

    document.getElementById("modalTitle")
      .textContent = `${treeName} Mastery Calculator`;

    modal.classList.add("active");

  });

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