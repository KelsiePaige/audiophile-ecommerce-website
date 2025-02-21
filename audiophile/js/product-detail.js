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

/* 

TODO: 
- Add updated count to cart when 'ADD TO CART' button is clicked
- Display count on shopping cart icon
- Add functionality to 'Go Back' button; must go back to user's previous page

*/

backButton.addEventListener("click", () => {
    history.back();
});