export const headerSelectors = {
  selectorListButton: '.header__list-btn',
  selectorNav: '.header__nav',
  classListOpen: 'header__list-btn_open',
  classNavOpen: 'header__nav_open',
  classNavClose: 'header__nav_close'
};

export const listItems = document.querySelectorAll('.list-drop-down__item')
export const slider = document.querySelector('.slider')

export const dropDownSelectors = {
  dropDownButton: '.list-drop-down__btn',
  dropDownButtonState: 'list-drop-down__btn_clicked',
  listItemState: 'list-drop-down__item_clicked',
  answerItem: '.list-drop-down__answer',
}

export const dropDownAnswers = [
  {
    answer: `Время доставки вашего груза зависит от расстояния между пунктами
  отправления и назначения. Наши грузовые автомобили проезжают в
  среднем 600-800 км в сутки. Это означает, что если расстояние
  между пунктами составляет 1200 км, то доставка может занять от 1
  до 2 дней в зависимости от дорожных условий. Если же расстояние
  меньше, то доставка займет меньше времени.`,
    id: 'logistic-time',
  },
]

export const formSelectors = {
  inputSelector: '.input__field',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'button_type_inactive',
  inputErrorClass: 'input__field-error',
  inputErrorTextClass: 'input__text_type_error',
  inputErrorContainerClass: 'input__container_type_error',
  activeInputErrorClass: 'input__field-error_active',
  checkboxSelector: '.form__checkbox-control',
  checkboxErrorClass: 'form__checkbox-control_invalid',
  checkboxLabelSelector: '.form__checkbox-control-placeholder',
  checkboxContainerSelector: '.form__checkbox-control-container',
  checkboxErrorSelector: '.form__checkbox-control-error',
}

export const orderForm = document.querySelector('.form')
export const submitButton = document.querySelector('.form__button')
export const popupRequestConfirmed = document.querySelector('.popup')
export const closeButton = document.querySelector('.popup__close')
export const checkBox = document.querySelector('.form__checkbox-control')
export const inputList = Array.from(document.querySelectorAll('.input__field'))
export const summaryInput = document.querySelector('#summary')