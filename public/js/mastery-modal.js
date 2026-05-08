export async function loadMasteryModal() {

  const response =
    await fetch("../components/mastery-modal.html");

  const html =
    await response.text();

  document.body.insertAdjacentHTML(
    "beforeend",
    html
  );

}