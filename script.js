'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// This code make so you can click the modal 1 or modal 2 or modal 3

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// This code makes it so you can close the modal on X
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// KEY BOARD EVENTS this makes it so when you press a button on your keyboard the modal will close down
//the function could also be called (e) for event
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
