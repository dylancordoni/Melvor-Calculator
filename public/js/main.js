const content = document.getElementById("content");

document.querySelectorAll(".skill-buttons button").forEach(button => {
  button.addEventListener("click", async () => {
    const skill = button.dataset.skill;
    const response = await fetch(`skills/${skill}.html`);
    const html = await response.text();

    content.innerHTML = html;
  });
});