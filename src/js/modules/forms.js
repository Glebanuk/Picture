// import checkNumInputs from "./checkNumInputs";

const forms = ()  =>  {
  const form = document.querySelectorAll('form'),
       inputs = document.querySelectorAll('input');
      //  phoneInputs = document.querySelectorAll('input[name="user_phone"]');// эта переменная для функционала в котором полтзователь может вводитТОЛЬКО цифры

      //  checkNumInputs(phoneInputs);

       const message  = {
        loading:  'Загрузка...',
        success: 'Спасибо с вами свяжутся!',
        failure: 'Что-то пошло не так...',
        spinner:'assets/img/spinner.gif',
        ok:'assets/img/ok.png',
        fail:'assets/img/fail.png'
       };

       const path = { // создаем два сервера для отправки разных данных
        designer: 'assets/server.php',
        question: 'assets/question.php'
       }

       const postData = async (url, data) =>  { // async/await добавляются чтоб JS подождал ответ от сервера , т.к. fetch является ассинхронной операцией. Иначе переменная result будет undefind

          let result = await fetch(url, {
            method:'POST',
            body: data 
          });

          return await result.text(); // эта строка тоже выполняется асинхронно пожтому нужен await
        }

        const clearInputs = ()  =>  {
          inputs.forEach(item =>  {
            item.value = '';
          });
        };

       form.forEach(item  =>  {
          item.addEventListener('submit', (e) => { //событие submit есть только если в разметке используется тэг form
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status'); // добавляем класс который создан в css
            item.parentNode.appendChild(statusMessage); //используем родительский блок для помещения в него изображения(о статусе отправки) вместо формы 

            item.classList.add('animated', 'fadeOutUp'); // этот код скрывает форму (но она останется на странице просто юудет прозрачной) 
            
            setTimeout(() => {// этот код удаляет форму чтоб не занимала место и не мешала блоку с картинкой вместо нее
              item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');// добавление и отображене спинера при отправке формы
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated','fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');//добавляем текст к спинеру
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData  = new FormData(item); // этот объект найдет все данные полей ввода и соборет их в специальную структуру (объект)

            let api;//нужна для формирования динамического пути куда будут отправляться данные
            item.closest('.popup-design') ? api = path.designer : api = path.question; // если мод окно содержит картинку то отправляем на один сервер если нет то на другой. 
            console.log(api);

            postData(api, formData)
              .then(res =>  {//если отправка успешна то выпонится then, если нет то catch
                console.log(res);
                statusImg.setAttribute('src', message.ok);
                textMessage.textContent = message.success;
              })
              .catch(() => {
                statusImg.setAttribute('src', message.fail);
                textMessage.textContent = message.failure;
              })
                .finally(() =>  {
                  clearInputs();
                  setTimeout(() =>  {
                    statusMessage.remove();
                  }, 7000);
                })


          });
       });
};

export default forms;