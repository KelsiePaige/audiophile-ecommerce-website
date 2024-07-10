const cartButton = document.querySelector('.cart');
const modal = document.querySelector('.modal-cart');

// Hides cart modal
modal.classList.add('hide');

// Toggles cart modal
const cartModal = function () {
    cartButton.addEventListener("click", () => {
        modal.classList.toggle('hide');
    });
};
cartModal();

/*
    Fix overlay to display behind cart modal not just beneath it
*/