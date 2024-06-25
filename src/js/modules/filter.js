const filter = () => {
  
  const menu = document.querySelector('.portfolio-menu'),
  items = menu.querySelectorAll('li'),
  btnAll = menu.querySelector('.all'),
  btnLovers = menu.querySelector('.lovers'),
  btnChef = menu.querySelector('.chef'),
  btnGirl = menu.querySelector('.girl'),
  btnGuy = menu.querySelector('.guy'),
  btnGrandmother = menu.querySelector('.grandmother'),
  btnGranddad = menu.querySelector('.granddad'),
  wrapper = document.querySelector('.portfolio-wrapper'),
  markAll = wrapper.querySelectorAll('.all'),
  markGirl = wrapper.querySelectorAll('.girl'),
  markLovers = wrapper.querySelectorAll('.lovers'),
  markChef = wrapper.querySelectorAll('.chef'),
  markGuy = wrapper.querySelectorAll('.guy'),
  no = document.querySelector('.portfolio-no');

  const typeFilter = (markType) =>  {//фунцкия скрывает ненужные фото и показывает те что выбраны за счет нажатия на кнопки 
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });

    no.style.display = "none";
    no.classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach(mark =>  {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = "block";
      no.classList.add('animated', 'fadeIn');
    }
  };

  btnAll.addEventListener('click', ()  =>  {
    typeFilter(markAll);
  });
 
  btnLovers.addEventListener('click', ()  =>  {
    typeFilter(markLovers);
  });

  btnGirl.addEventListener('click', ()  =>  {
    typeFilter(markGirl);
  });
  btnChef.addEventListener('click', ()  =>  {
    typeFilter(markChef);
  });
  btnGuy.addEventListener('click', ()  =>  {
    typeFilter(markGuy);
  });
  btnGrandmother.addEventListener('click', ()  =>  {
    typeFilter();
  });
  btnGranddad.addEventListener('click', ()  =>  {
    typeFilter();
  });


  menu.addEventListener('click',  (e) =>{ // ДЕЛЕГИРОВАНИЕ СОБЫТИЙ для кнопок с выбором категорий фото
    let target = e.target;

    if (target && target.tagName === 'LI')  {
      items.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
    }
  })

};

export default filter;