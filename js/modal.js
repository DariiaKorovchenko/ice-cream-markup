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

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-readmore-open]"),
    closeModalBtn: document.querySelector("[data-modal-readmore-close]"),
    modal: document.querySelector("[data-modal-readmore]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-readmore-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-location-open]"),
    closeModalBtn: document.querySelector("[data-modal-location-close]"),
    modal: document.querySelector("[data-modal-location]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-location-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-franchise-open]"),
    closeModalBtn: document.querySelector("[data-modal-franchise-close]"),
    modal: document.querySelector("[data-modal-franchise]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-franchise-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
