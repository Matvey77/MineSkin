document.addEventListener("DOMContentLoaded", function () {
  var modalSupport = document.getElementById("modal-support");
  var modalBoxSupport = document.getElementById("modal-support__box");
  var openBtn = document.getElementById("open-modal-support-btn");
  var closeBtnSupport = document.getElementById("close-modal-support-btn");

  function openModal() {
    modalSupport.classList.add("open");
  }
  function closeModal() {
    modalSupport.classList.remove("open");
  }

  openBtn.addEventListener("click", openModal);
  closeBtnSupport.addEventListener("click", closeModal);

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  document.addEventListener("click", function (e) {
    if (!modalBoxSupport.contains(e.target) && e.target !== openBtn) {
      closeModal();
    }
  });
});
