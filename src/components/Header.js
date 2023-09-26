export default class header {
  constructor(elemHeader, { selectorListButton, selectorNav, classListOpen, classNavOpen, classNavClose }) {
    this.elemListButton = elemHeader.querySelector(selectorListButton);
    this.elemNav = elemHeader.querySelector(selectorNav);

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
