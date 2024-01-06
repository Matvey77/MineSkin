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

  function toggleAnswer(faqItem) {
    faqItem.classList.toggle("active");
  }

  openBtnFAQ.addEventListener("click", openFAQModal);
  closeBtnFAQ.addEventListener("click", closeFAQModal);
});
