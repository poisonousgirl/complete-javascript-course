'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < buttonsOpenModal.length; i++)
  buttonsOpenModal[i].addEventListener('click', openModal);

buttonCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', evt => {
  if (
    evt.key === 'Escape' ||
    (evt.key === 'Esc' && !modal.classList.contains('hidden'))
  ) {
    closeModal();
  }
});
