import modals from "./modules/modal";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";

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
  console.log('фффффффффффф');
 
});
//ДЛЯ ЗАПУСКА JSON-SERVER НУЖНО В ТЕРМИНАЛЕ ПРОПИСАТЬ ПУТЬ К ФАЙЛУ 'json-server src/assets/db.json' ПРЕДВАРИТЕЛЬНО УСТАНОВИВ САМ СЕРВЕР