import './scss/index.scss';
import { Slider } from './components/Slider.js';
import { header } from './components/script-header.js';
header();


const slider = document.querySelector('.slider');

const sliderItem = new Slider(slider);
sliderItem.timer();

