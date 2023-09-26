import { summaryInput } from '../index.js'

export class FormValidator {
  constructor({obj, formElement}) {
    this._obj = obj
    this._formElement = formElement

    this._submitButton = formElement.querySelector(
      this._obj.submitButtonSelector
    )
    this._inputList = Array.from(
      formElement.querySelectorAll(this._obj.inputSelector)
    )
    this._checkbox = formElement.querySelector(this._obj.checkboxSelector)
    this._checkboxLabel = formElement.querySelector(
      this._obj.checkboxLabelSelector
    )
    this._checkboxError = formElement.querySelector(
      this._obj.checkboxErrorSelector
    )
    this._checkboxContainer = formElement.querySelector(
      this._obj.checkboxContainerSelector
    )
  }
  enableValidation() {
    //для каждой формы при сабмите отменяет перезагрузку и
    //выполняет проверку на валидность
    console.log(this._submitButton)
    this._submitButton.addEventListener('click', (evt) => {
      this._handleSubmit()
    })
    this._setAfterSubmitListeners()
  }
  _setAfterSubmitListeners() {
    this._inputList.forEach((inputElement) => {
      if (inputElement !== summaryInput) {
        inputElement.addEventListener('input', () => {
          this._handleSubmit()
          this._toggleButtonState()
        })
      }
    })
  }
  _handleSubmit() {
    this._inputList.forEach((inputElement) => {
      if (inputElement !== summaryInput) {
        this._checkInputValidity(inputElement)
        this._toggleButtonState()
      }
    })
  }
  _toggleButtonState() {
    //меняет состояние кнопки, если все инпуты из hasInvalidInput валидны
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButton(this._submitButton)
    } else {
      this._enableButton(this._submitButton)
    }
  }
  _disableButton() {
    this._submitButton.setAttribute('disabled', 'disabled')
    this._submitButton.classList.add(this._obj.inactiveButtonClass)
  }
  _enableButton() {
    this._submitButton.removeAttribute('disabled')
    this._submitButton.classList.remove(this._obj.inactiveButtonClass)
  }
  _hasInvalidInput() {
    //проверка, что оба инпута валидны
    //возвращает тру, если все поля заполнены и валидны
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid && !this._checkbox.checked) {
      this._showInputError(inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(inputElement)
    }
  }
  _showInputError(inputElement, errorMessage) {
    const errorTextElement = this._formElement.querySelector(
      `.${inputElement.id}-placeholder`
    )
    const errorContainerElement = this._formElement.querySelector(
      `.${inputElement.id}-container`
    )
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    )
    if (errorTextElement !== this._checkboxLabel) {
      errorTextElement.classList.add(this._obj.inputErrorTextClass)
    }
    if (errorElement !== this._checkboxError) {
      errorElement.textContent = errorMessage
      errorElement.classList.add(this._obj.activeInputErrorClass)
    }

    if (errorContainerElement !== this._checkboxContainer) {
      errorContainerElement.classList.add(this._obj.inputErrorContainerClass)
    }
    this._checkbox.classList.add(this._obj.checkboxErrorClass)
  }
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    )
    const errorTextElement = this._formElement.querySelector(
      `.${inputElement.id}-placeholder`
    )
    const errorContainerElement = this._formElement.querySelector(
      `.${inputElement.id}-container`
    )

    if (errorTextElement !== this._checkboxLabel) {
      errorTextElement.classList.remove(this._obj.inputErrorTextClass)
    }
    if (errorElement !== this._checkboxError) {
      errorElement.textContent = ''
      errorElement.classList.remove(this._obj.activeInputErrorClass)
    }

    if (errorContainerElement !== this._checkboxContainer) {
      errorContainerElement.classList.remove(this._obj.inputErrorContainerClass)
    }
    this._checkbox.classList.remove(this._obj.checkboxErrorClass)
  }
}
