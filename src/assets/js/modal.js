import jQuery from 'jquery';

jQuery(function () {
  const openModalBtn = document.querySelectorAll('[data-modal-open]');
  const modal = document.querySelector('[data-modal]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const body = document.querySelector('body');

  openModalBtn.forEach(function (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();

      setTimeout(() => {
        toggleModal();
      }, 500);
    });
  });

  function toggleModal() {
    modal.classList.toggle('is-hidden');
    body.classList.toggle('scroll-hidden');
  }

  function handleKey(e) {
    if (!modal.classList.contains('is-hidden')) {
      if (e.key === 'Escape') {
        toggleModal();
      }
    }
    return;
  }

  function handleClose(e) {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
    return;
  }

  document.addEventListener('keydown', handleKey);
  modal.addEventListener('mousedown', handleClose);
  closeModalBtn.addEventListener('click', toggleModal);
});
