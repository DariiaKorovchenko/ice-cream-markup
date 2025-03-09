(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-ingredients-open]"),
    closeModalBtn: document.querySelector("[data-modal-ingredients-close]"),
    modal: document.querySelector("[data-modal-ingredients]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-ingredients-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buynow-open]"),
    closeModalBtn: document.querySelector("[data-modal-buynow-close]"),
    modal: document.querySelector("[data-modal-buynow]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-buynow-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
