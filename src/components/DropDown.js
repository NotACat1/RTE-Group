const answerTemplate = document.querySelector(
  '#list-drop-down__answer'
).content

export class DropDown {
  constructor({ data, obj, selector }) {
    this._data = data
    this._obj = obj
    this._selector = selector
  }
  _getAnswer() {
    const answerItem = answerTemplate
      .querySelector(this._obj.answerItem)
      .cloneNode(true)
    return answerItem
  }
  _createAnswer() {
    this._element = this._getAnswer()
    this._checkQuestionId();
    this._data.forEach((item) => {
      ///чтобы ответ соответствовал вопросу
      if (item.id === this._checkQuestionId()) {
      const answerText = item.answer
      this._element.textContent = answerText}
    })
    return this._element
  }
  _addRemoveItem() {
    if (this._selector.classList.contains(this._obj.listItemState)) {
      this._selector
        .querySelector(this._obj.dropDownButton)
        .classList.add(this._obj.dropDownButtonState)
      this._item = this._createAnswer()
      this._selector.append(this._item)
    } else {
      this._item.remove()
      this._selector
        .querySelector(this._obj.dropDownButton)
        .classList.remove(this._obj.dropDownButtonState)
    }
  }
  _addRemoveSelector() {
    this._selector.classList.toggle(this._obj.listItemState)
  }
  _checkQuestionId() {
    return this._selector.id
  }
  setEventListeners() {
    this._selector.addEventListener('click', () => {
      this._addRemoveSelector()
      this._addRemoveItem()
    })
  }
}

