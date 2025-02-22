const menuButton = document.querySelector('.icon-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

// Hides mobile menu
mobileMenu.classList.add('hide');

// Toggles mobile menu
const navMenu = function () {
    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle('hide');
    });
};
navMenu();

// Product details js page

const subButton = document.querySelector('.minus');
const addButton = document.querySelector('.plus');
const displayNum = document.querySelector('.num');
const backButton = document.querySelector('.go-back');
let count = 1;

// Item counter event for shopping cart

subButton.addEventListener('click', () => {
    if (count != 1) {
        count--;
        displayNum.innerHTML = count;
    }
});

addButton.addEventListener('click', () => {
    if (count < 1) {
        count++;
        displayNum.innerHTML = count;
    } else {
        count++;
        displayNum.innerHTML = count;
    }
});

displayNum.innerHTML = count;

backButton.addEventListener("click", () => {
    history.back();
});

// Shopping cart js page

const cartButton = document.querySelector('.cart');
const modal = document.querySelector('.modal-cart');

// Hides cart modal
// modal.classList.add('hide');

// Toggles cart modal
// const cartModal = function () {
//     cartButton.addEventListener("click", () => {
//         modal.classList.toggle('hide');
//     });
// };
// cartModal();

/*
    Fix overlay to display behind cart modal not just beneath it
*/