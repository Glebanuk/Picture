const postData = async (url, data) =>  { // async/await добавляются чтоб JS подождал ответ от сервера , т.к. fetch является ассинхронной операцией. Иначе переменная result будет undefind

  let result = await fetch(url, {
    method:'POST',
    body: data 
  });

  return await result.text(); // эта строка тоже выполняется асинхронно пожтому нужен await
};

const getResourse = async (url) =>  { // async/await добавляются чтоб JS подождал ответ от сервера , т.к. fetch является ассинхронной операцией. Иначе переменная result будет undefind

  let result = await fetch(url);

  if (!result.ok)  {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await result.json(); // эта строка тоже выполняется асинхронно пожтому нужен await
}

export  {postData, getResourse};