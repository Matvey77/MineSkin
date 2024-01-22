document.addEventListener("DOMContentLoaded", function () {
  var modalFAQ = document.getElementById("modal-faq");
  var modalBoxFAQ = document.getElementById("modal-faq__box");
  var openBtnFAQ = document.getElementById("open-modal-faq-btn");
  var closeBtnFAQ = document.getElementById("close-modal-faq-btn");

  function openFAQModal() {
    modalFAQ.classList.add("open");
  }

  function closeFAQModal() {
    modalFAQ.classList.remove("open");
  }

  openBtnFAQ.addEventListener("click", openFAQModal);
  closeBtnFAQ.addEventListener("click", closeFAQModal);

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeFAQModal();
    }
  });

  document.addEventListener("click", function (e) {
    if (!modalBoxFAQ.contains(e.target) && e.target !== openBtnFAQ) {
      closeFAQModal();
    }
  });
});
