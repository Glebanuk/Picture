const modals = () => {

  let btnPressed = false; //контролируем были ли нажаты кнопки на странице

  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false)  { //destroy для удаления элемента с страницы при нажатии на тригер (удаление подарка на странице)
    const trigger = document.querySelectorAll(triggerSelector), // можно повесить на несколько селекторов одни и те же функции 
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'), // получаем все модальные окна чтоб они не наслаивались друг на друга как в modal_calc
          scroll = calcScroll(); // чтоб страница не дургалась при исчезновении скрола
        
    trigger.forEach(item => {
      item.addEventListener('click', (e) =>  {
        if (e.target) {
            e.preventDefault();
        }

        btnPressed = true;

        if  (destroy) {
          item.remove();
        }

        windows.forEach(item  =>  { // этот код закрывает все ненужные открытые окна
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });

        modal.style.display = 'block';
        document.body.style.overflow  = 'hidden';
        document.body.style.marginRight = `${scroll}px`;//// чтоб страница не дургалась при исчезновении скрола

        // document.body.classList.add('modal-open');

      });
    });

    close.addEventListener('click', ()  =>  {
      modal.style.display = 'none';
      document.body.style.overflow  = '';
      document.body.style.marginRight = `0px`;
      
    });


    modal.addEventListener('click', (e)  =>  {
      if (e.target === modal)  {

        windows.forEach(item  =>  {
          item.style.display = 'none';
        });

        modal.style.display = 'none';
        document.body.style.overflow  = '';
        document.body.style.marginRight = `0px`;

        
      }
    })
  }

  function  showModalByTime(selector, time) { // если еще ни одно мод окно не открыто то показываем мод окно через какое-то время
    setTimeout(() => {
      let display;

      document.querySelectorAll('[data-modal]').forEach(item =>  {
        if  (getComputedStyle(item).display !== 'none') {
          display = 'block'; 
        }
      });

      if  (!display)  {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow  = 'hidden';
        scroll = calcScroll(); // сюда помещаем этот код из-за замыкания. 
        document.body.style.marginRight = `${scroll}px`;
      }


    }, time);
  }

  function calcScroll() { 
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  function openByScroll(selector) {
    window.addEventListener('scroll', ()  =>  {
      if  (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight))  { // это условие проверяет полный прокрут страницы 
        document.querySelector(selector).click(); // .click() это выполняется метод клика програмно
      }
    });
  }

 
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close'); // вместо переменных передаем сразу селекторы. И функция становится универсальной для открытия окон при клике на другие тригеры.
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close'); 
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true); 
  openByScroll('.fixed-gift');
  // showModalByTime('.popup-consultation', 6000);

};

export default modals;