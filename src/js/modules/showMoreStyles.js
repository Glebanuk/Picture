const showMoreStylesjs = (triger, styles) =>  {
  const cards = document.querySelectorAll(styles),
        btn = document.querySelector(triger);

    cards.forEach(cards =>  {
      cards.classList.add('animated', 'fadeInUP');// добавляем анимацию для карточек 
    });

    btn.addEventListener('click', ()  =>  {

      cards.forEach(card => {
        card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
        card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

      });

      btn.style.display = 'none';
    });

  };
export default showMoreStylesjs;