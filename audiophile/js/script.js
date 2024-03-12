const menuButton = document.querySelector('.icon-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenu.classList.add('hide');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide');
});

