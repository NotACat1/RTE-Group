export function header() {
  const listButton = document.querySelector('.header__list-btn');
  const headerPopup = document.querySelector('.header__nav');

  console.log(listButton);

  listButton.addEventListener('click', () => {
    listButton.classList.toggle('header__list-btn_open');
    listButton.classList.toggle('header__list-btn_close');

    headerPopup.classList.toggle('header__nav_open');
    headerPopup.classList.toggle('header__nav_close');
  });
}
