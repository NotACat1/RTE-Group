const listButton = document.querySelector(".header__list-btn");
const closeButton = document.querySelector('.header__list-close-btn');
const headerPopup = document.querySelector('.header__popup');

function handleClickOnList(selector) {
    selector.classList.add('header__popup_opened');
}

function handleClickOnClose(selector) {
    selector.classList.remove('header__popup_opened');
}

listButton.addEventListener('click', function () {
    handleClickOnList(headerPopup);
})

closeButton.addEventListener('click', function () {
    handleClickOnClose(headerPopup);
})