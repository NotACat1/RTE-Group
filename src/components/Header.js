//export function header() {
//  const listButton = document.querySelector('.header__list-btn');
//  const headerPopup = document.querySelector('.header__nav');

//  console.log(listButton);

//  listButton.addEventListener('click', () => {
//    listButton.classList.toggle('header__list-btn_open');
//    listButton.classList.toggle('header__list-btn_close');

//    headerPopup.classList.toggle('header__nav_open');
//    headerPopup.classList.toggle('header__nav_close');
//  });
//}

export default class header {
  constructor({ selectorListButton, selectorNav, classListOpen, classNavOpen, classNavClose }) {
    this.elemListButton = document.querySelector(selectorListButton);
    this.elemNav = document.querySelector(selectorNav);

    this.classListOpen = classListOpen;
    this.classNavOpen = classNavOpen;
    this.classNavClose = classNavClose;

    this.flgOpen = false;
  }

  _open() {
    this.elemListButton.classList.add(this.classListOpen);		
    this.elemNav.classList.add(this.classNavOpen);
    this.elemNav.classList.remove(this.classNavClose);
  }

  _close() {
    this.elemListButton.classList.remove(this.classListOpen);		
    this.elemNav.classList.remove(this.classNavOpen);
    this.elemNav.classList.add(this.classNavClose);
  }

  eventListener() {
    this.elemListButton.addEventListener('click', () => {
      if (this.flgOpen) {
        this._close();
      } else {
        this._open();
      }
      this.flgOpen = !this.flgOpen;
    });
  }
}
