import './scss/index.scss'
import { Slider } from '../src/components/Slider.js'
import Header from './components/Header.js'
import {
  headerSelectors,
  listItems,
  slider,
  dropDownSelectors,
  dropDownAnswers,
  formSelectors,
  orderForm,
  submitButton,
  popupRequestConfirmed,
  closeButton,
  checkBox,
  inputList,
} from './utils/constants.js'
import { FormValidator } from '../src/components/FormValidator.js'
import { DropDown } from '../src/components/DropDown.js'
import { Popup } from '../src/components/Popup.js'

;[...document.querySelectorAll('.header')].forEach((item) => {
  const header = new Header(item, headerSelectors)
  header.eventListener()
})

function getFormValues() {
  inputList.forEach((inputElement) => {
    console.log(inputElement.value)
  })
}

function resetForm() {
  inputList.forEach((inputElement) => {
    inputElement.value = ''
    checkBox.checked = false
  })
}

const sliderItem = new Slider(slider)
sliderItem.timer()

listItems.forEach((item) => {
  const answer = new DropDown({
    data: dropDownAnswers,
    obj: dropDownSelectors,
    selector: item,
  })
  answer.setEventListeners()
})

const orderFormValidation = new FormValidator({
  obj: formSelectors,
  formElement: orderForm,
})

orderFormValidation.enableValidation()

const popupOrderSubmitted = new Popup(popupRequestConfirmed)

if (!submitButton.classList.contains('button_type_disabled')) {
  orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    getFormValues()
    popupOrderSubmitted.openPopup()
    resetForm()
  })
}

closeButton.addEventListener('click', () => {
  popupOrderSubmitted.closePopup()
})

popupOrderSubmitted.setEventListeners()
