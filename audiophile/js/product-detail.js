const subButton = document.querySelector('.minus');
const addButton = document.querySelector('.plus');
const displayNum = document.querySelector('.num');
let count = 1;

// Item counter event for shopping cart

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
