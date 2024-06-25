import modals from "./modules/modal";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";

window.addEventListener('DOMContentLoaded', ()  =>  {
  'use strict'

  modals();
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');
  forms();
  mask('[name="phone"');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price')
  filter();
  console.log('aaaa');
});
//ДЛЯ ЗАПУСКА JSON-SERVER НУЖНО В ТЕРМИНАЛЕ ПРОПИСАТЬ ПУТЬ К ФАЙЛУ 'json-server src/assets/db.json' ПРЕДВАРИТЕЛЬНО УСТАНОВИВ САМ СЕРВЕР