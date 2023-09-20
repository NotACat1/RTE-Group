import './scss/index.scss';
import {Slider} from './components/Slider.js';

const slider = document.querySelector('.slider');

const sliderItem = new Slider(slider);
sliderItem.timer();

