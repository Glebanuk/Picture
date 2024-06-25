const pictureSize = (imgSelector)  =>  {
  const blocks = document.querySelectorAll(imgSelector);

  function showImg (block)  {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png'; // редактирует путь к изображению ( нужыне изображения названы с префиксом -1 в папке проекта)
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p =>  { // убирает элементы внутри блока чтоб вместо них вставить картинку
      p.style.display = 'none';
    })
  }
  function hideImg (block)  {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png'; // редактирует путь к изображению ( нужыне изображения названы с префиксом -1 в папке проекта)
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p =>  { // убирает элементы внутри блока чтоб вместо них вставить картинку
      p.style.display = 'block';
    })
  }

  blocks.forEach(block  =>  {
    block.addEventListener('mouseover', ()  =>  {
      showImg(block);
    });
    block.addEventListener('mouseout', ()  =>  {
      hideImg(block);
    });
  })



};

export default pictureSize;