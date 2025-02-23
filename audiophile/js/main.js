const products = async function () {
    const requestURL = '../data.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const productText = await response.text();

    const product = JSON.parse(productText);
}
products();

/***** Menu Button *****/

const menuButton = document.querySelector('.icon-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

// Hides mobile menu
mobileMenu.classList.add('hide');

// Toggles mobile menu
const navMenu = function () {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hide');
    });
};
navMenu();

/***** Cart Modal *****/

const cartButton = document.querySelector('.cart');
const cartModal = document.querySelector('.modal-cart');

cartModal.classList.add('hide');

function openModal() {
    cartButton.addEventListener('click', () => {
        cartModal.classList.toggle('hide');
    });
};
openModal();

/***** Product details js page *****/

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

backButton.addEventListener('click', () => {
    history.back();
});