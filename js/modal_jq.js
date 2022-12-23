$(document).ready(function () {
  let modalButton = $('[data-toggle="modal"]');
  const modalClose = $(".modal__close");
  const modal = document.querySelector(".modal");
  const modalOv = $(".modal__overlay");
  const modalOverlay = $(".modal__overlay");
  const modalDialog = $(".modal__dialog");

  modalButton.on("click", openModal);
  modalClose.on("click", closeModal);
  modalOv.on("click", closeModal);
  function openModal() {
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");

    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    event.preventDefault();

    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");

    document.body.style.overflow = "";
    clearInterval(modalTimer);
  }

  function keyClose(e) {
    if (e.code === "Escape") {
      closeModal();
    }
  }

  document.addEventListener("keydown", keyClose);

  // Timer
  const modalTimer = setTimeout(openModal, 5000);

  // open popup to scrollEnd

  function showModalByScrollEnd() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScrollEnd);
    }
  }

  window.addEventListener("scroll", showModalByScrollEnd);
});
