import './scss/index.scss'
import { Slider } from './components/Slider.js'
import { DropDown } from './components/DropDown.js'

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
  }
]

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
