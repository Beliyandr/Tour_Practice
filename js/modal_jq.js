$(document).ready(function () {
  let modalButton = $('[data-toggle="modal"]');
  const modalClose = $(".modal__close");

  modalButton.on("click", openModal);
  modalClose.on("click", closeModal);
  function openModal() {
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");

    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(e) {
    e.preventDefault();
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");

    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});
