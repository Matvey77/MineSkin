document
  .getElementById("open-modal-reg-btn")
  .addEventListener("click", function () {
    document.getElementById("modal-reg").classList.add("open");
  });

document
  .getElementById("close-modal-reg-btn")
  .addEventListener("click", function () {
    document.getElementById("modal-reg").classList.remove("open");
  });

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-reg").classList.remove("open");
  }
});

document
  .querySelector("#modal-reg .modal__box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.getElementById("modal-reg").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
