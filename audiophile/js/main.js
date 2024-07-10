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
