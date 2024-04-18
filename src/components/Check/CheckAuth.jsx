async function isAuth() {
  return new Promise((resolve, reject) => {
    const cookies = document.cookie.split(';');
    const cookiesObj = {};
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      cookiesObj[name] = value;
    }

    // Для асинхронной проверки, например, отправим запрос на сервер для проверки валидности токена
    // В этом примере просто используем проверку на наличие токена в куки
    if (cookiesObj.jwt !== undefined) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
}

export default isAuth;