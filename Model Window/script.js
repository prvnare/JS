'use strict';

const btnOpenModel = document.querySelectorAll('.show-modal');
const overLay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const closeModel = () => {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
}
const openModal = () => {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
}

for (let i = 0; i < btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModel);
overLay.addEventListener('click', closeModel);
document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        console.log(event.key);
        closeModel();
    }
});
