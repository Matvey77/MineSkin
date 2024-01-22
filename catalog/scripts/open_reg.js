document.addEventListener("DOMContentLoaded", function () {
  var modalReg = document.getElementById("modal__reg");
  var modalBoxReg = document.getElementById("modal__box-reg");
  var openBtnReg = document.getElementById("open-modal-reg-btn");
  var closeBtnReg = document.getElementById("close-modal-reg-btn");

  function openRegModal() {
    modalReg.classList.add("open");
  }

  function closeRegModal() {
    modalReg.classList.remove("open");
  }

  openBtnReg.addEventListener("click", openRegModal);
  closeBtnReg.addEventListener("click", closeRegModal);

  document.addEventListener("click", function (e) {
    if (!modalBoxReg.contains(e.target) && e.target !== openBtnReg) {
      closeRegModal();
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeRegModal();
    }
  });

  var openBtnAuth = document.getElementById("open-modal-auth-btn");

  if (openBtnAuth) {
    openBtnAuth.addEventListener("click", function () {
      closeRegModal();
      openAuthModal();
    });
  }

  function openAuthModal() {
    var modalAuth = document.getElementById("modal__auth");
    var modalBoxAuth = document.getElementById("modal__box-auth");
    var closeBtnAuth = document.getElementById("close-modal-auth-btn");

    modalAuth.classList.add("open");

    closeBtnAuth.addEventListener("click", function () {
      modalAuth.classList.remove("open");
    });

    document.addEventListener("click", function (e) {
      if (!modalBoxAuth.contains(e.target) && e.target !== openBtnAuth) {
        modalAuth.classList.remove("open");
      }
    });

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        modalAuth.classList.remove("open");
      }
    });
  }
});
