document.addEventListener("DOMContentLoaded", function () {
  var modalSupport = document.getElementById("modal-support");
  var modalBoxSupport = document.getElementById("modal-support__box");
  var openBtn = document.getElementById("open-modal-support-btn");

  function openModal() {
    modalSupport.classList.add("open");
  }
  function closeModal() {
    modalSupport.classList.remove("open");
  }

  openBtn.addEventListener("click", openModal);

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});
