import './scss/index.scss'
import { Slider } from './components/Slider.js'
import Header from './components/Header.js';
import { headerSelectors } from './utils/constants.js'
import { FormValidator } from '../src/components/FormValidator.js'

[...document.querySelectorAll('.header')].forEach(() => {
	const header = new Header(headerSelectors);
	header.eventListener();
});

const listItems = document.querySelectorAll('.list-drop-down__item')
const slider = document.querySelector('.slider')

const selectors = {
  dropDownButton: '.list-drop-down__btn',
  dropDownButtonState: 'list-drop-down__btn_clicked',
  listItemState: 'list-drop-down__item-clicked',
  answerItem: '.list-drop-down__answer',
}

const answers = [
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

const formSelectors = {
  formSelector: '.form',
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

const orderForm = document.querySelector('.form')
const submitButton = document.querySelector('.form__button')
const popupRequestConfirmed = document.querySelector('.popup')
const closeButton = document.querySelector('.popup__close')
const checkBox = document.querySelector('.form__checkbox-control')
const inputList = Array.from(document.querySelectorAll('.input__field'))
export const summaryInput = document.querySelector('#summary')

listItems.forEach((item) => {
  const answer = new DropDown({
    data: answers,
    obj: selectors,
    selector: item,
  })
  answer.setEventListeners()
})

const sliderItem = new Slider(slider)
sliderItem.timer()

const orderFormValidation = new FormValidator(formSelectors, orderForm)

orderFormValidation.enableValidation()

function openPopup(popupSelector) {
  popupSelector.classList.add('popup_opened')
}

function closePopup(popupSelector) {
  popupSelector.classList.remove('popup_opened')
}

function resetForm() {
  inputList.forEach((inputElement) => {
    inputElement.value = ''
    checkBox.checked = false
  })
}

if (!submitButton.classList.contains('button_type_disabled')) {
  orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    openPopup(popupRequestConfirmed)
    resetForm()
  })
}

closeButton.addEventListener('click', () => {
  closePopup(popupRequestConfirmed)
})
