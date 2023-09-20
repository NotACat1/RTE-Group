export class Slider {
    constructor(element) {
      this.element = element
      this.defaults = {
        transitionDuration: 100,
        containerSelector: '.slider__container',
        itemSelector: '.slider__item-el',
        slidesAmountVar: '--slides',
        currentSlideVar: '--current',
      }
    }
    getSlides() {
      return parseInt(this.element.style.getPropertyValue(this.defaults.slidesAmountVar))
    }
    getCurrentRoot() {
      return parseInt(this.element.style.getPropertyValue(this.defaults.currentSlideVar))
    }
    setCurrent(value) {
      this.container = this.element.querySelector(this.defaults.containerSelector)
      this.container.style.setProperty(this.defaults.slidesAmountVar, this.getSlides())
      this.container.style.setProperty(this.defaults.currentSlideVar, value)
    }
    reset() {
      this.timeOut = setTimeout(() => {
        this.element.style.setProperty(this.defaults.currentSlideVar, 1)
      }, 300)
    }
    timer() {
      this.timeInterval = setInterval(() => {
        let value = this.getCurrentRoot()
        if (value < 8) {
          this.element.style.setProperty(this.defaults.currentSlideVar, value + 1)
        } else {
          this.reset(value)
        }
        this.setCurrent(value);
      }, 30000)
    }
  }
  