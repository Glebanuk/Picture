const sliders = (slides, direction, prev, next) => {
  let slideIndex  = 1; //отображение позици слайда по умолчанию
  let paused = false;// переменная для отключения автоматического перелистования слайдов в горизонтальном слайдере 
  const items = document.querySelectorAll(slides);
        

  function  showSlides(n) { // отвечает за перемещение слайд индекса
    if  (n > items.length)  { // если индекс больше чем кол-во слайдов то перемещаемся в первую позицию
      slideIndex = 1;
    }

    if (n < 1)  {  // перемещаемся на последний слайдер так как нет отрицательных значений слайдов
      slideIndex = items.length;
    }

    items.forEach(item  =>  { // скрытие всех слайдов чтоб отобразить тот который нужен в данный момент
      item.classList.add('animated');
      item.style.display  = 'none';
    });

    items[slideIndex - 1].style.display = 'block'; // отображаем нужный слайд
  }


 showSlides(slideIndex); 

  function changeSlides(n) { //функционал слайдера, в которую передаем или 1 или -1
    showSlides(slideIndex += n);
  }

  try { // если селекторы кнопок не были переданы то ошибка не сломает другой код
   const prevBtn = document.querySelector(prev),
        nextBtn = document.querySelector(next);

        // но если кнопки есть то (см. ниже)

        prevBtn.addEventListener('click', ()  =>  {
          changeSlides(-1);

          items[slideIndex  - 1].classList.remove('slideInLeft');// анимирование слайдов
          items[slideIndex  - 1].classList.add('slideInRight');
        });
        nextBtn.addEventListener('click', ()  =>  {
          changeSlides(1);

          items[slideIndex  - 1].classList.remove('slideInRight');
          items[slideIndex  - 1].classList.add('slideInLeft');
        });
  } catch (e) {
    
  }

  function activateAnimation()  { // функция для остановки перелистывания слайдера при наведении курсора
    if (direction === 'vertical') { // работа над вертикальным слайдером
       paused = setInterval(function() {
        changeSlides(1);
        items[slideIndex  - 1].classList.add('slideInDown');
      }, 3000);
    } else {
       paused = setInterval(function() {
        changeSlides(1);
        items[slideIndex  - 1].classList.remove('slideInRight');
        items[slideIndex  - 1].classList.add('slideInLeft');
      }, 3000);
    }
  };
  activateAnimation();

  items[0].parentNode.addEventListener('mouseenter', () =>  { 
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () =>  {
    activateAnimation();
  });
};

export default sliders;