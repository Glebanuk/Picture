import { getResourse } from "../services/request";

const showMoreStylesjs = (triger, wrapper) =>  {
  const btn = document.querySelector(triger);

    // cards.forEach(cards =>  { 
    //   cards.classList.add('animated', 'fadeInUP');// добавляем анимацию для карточек 
    // });

    // btn.addEventListener('click', ()  =>  {

    //   cards.forEach(card => {
    //     card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //     card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

    //   });

    //   btn.style.display = 'none';
    // });

    btn.addEventListener('click', function()  {
      getResourse('http://localhost:3000/styles') //отправляем запрос на сервер и он возвращает промис который нужно обработать
        .then(res => createCards(res)) // промис возвращает массив который передается в функцию написанную ниже
        .catch(error => console.log(error));// елси что-то пошло не так то выводим в консоль сообщение об ошибке
      
        this.remove();// удаляем кнопку после нажатия. ВАЖНО!!! использывать обычную функцию а не стрелочную так как у последней нет своего контекста и this не сработает 
      });

    function createCards(response)  {
      response.forEach(({src, title, link}) =>  { // foreach используем потому что ответ (карточки) приходит в виде массива
        let card =document.createElement('div');

        card.classList.add('animated', 'fadeInUP', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

        card.innerHTML  = `
        <div class="styles-block">
           <img src=${src} alt = "style">
           <h4>${title}</h4>
           <a href=${link}}>Подробнее</a>
        </div>
        `;


        document.querySelector(wrapper).appendChild(card);
      });
    };





    // <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
    // <div class=styles-block>
    //   <img src=assets/img/styles-5.jpg alt>
    //   <h4>Пастелью</h4>
    //   <a href="#">Подробнее</a>
    // </div>
  };
export default showMoreStylesjs;