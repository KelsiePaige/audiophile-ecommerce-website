const menuButton = document.querySelector('.icon-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const counter = document.querySelector('.btn__counter');
const subButton = document.querySelector('.minus');
const addButton = document.querySelector('.plus');
let displayNum = document.querySelector('.num');

let count = 1;

mobileMenu.classList.add('hide');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide');
});

subButton.addEventListener('click', () => {
    if (count != 1) {
        --count;
        displayNum.innerHTML = count;
    }
});

addButton.addEventListener('click', () => {
    if (count < 1) {
        ++count;
        displayNum.innerHTML = count;
    } else {
        ++count;
        displayNum.innerHTML = count;
    }
});

displayNum.innerHTML = count;

