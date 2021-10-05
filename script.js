'use strict';

// const modal = document.querySelector('.modal');

// const overlay = document.querySelector('.overlay');

// const btnCloseModal = document.querySelector('.close-modal');

// const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// modal.addEventListener('click', closeModal);

// overlay.addEventListener('click', closeModal);

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const closeModal = document.querySelector('.close-modal');

const showModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', openModal);

const closingModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', closingModal);

overlay.addEventListener('click', closingModal);

// document.addEventListener('keydown', function (e) {
//   //   console.log('hello');
//   //   console.log(e.key);

//   if (e.key === 'Escape') {
//     if (!modal.classList.contains('hidden')) {
//       closingModal();
//     }
//   }
// });

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    {
      closingModal();
    }
  }
});
