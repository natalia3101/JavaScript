// Получение данных о пользователе

// Реализуйте функцию getUserData, которая принимает идентификатор
// пользователя(ID) в качестве аргумента и использует fetch для
// получения данных о пользователе с заданным ID с удаленного сервера.
// Функция должна возвращать промис, который разрешается с данными о 
// пользователе в виде объекта.Если пользователь с указанным ID не найден, 
// промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
//     getUserData использует fetch для получения данных о пользователе 
//     с удаленного сервера.Если запрос успешен(с кодом 200), функция 
//     извлекает данные из ответа с помощью response.json() и возвращает 
//     объект с данными о пользователе.Если запрос неуспешен, функция 
//     отклоняет промис с сообщением об ошибке.

function getUserData(userID) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    reject(new Error(`Пользователь с идентификатором ${userID} не найден`));
                }
            })
            .then(userData => {
                resolve(userData);
            })
            .catch(error => {
                reject(error);
            });
    });
}

const userID = 1;
getUserData(userID)
    .then(userData => {
        console.log(userData);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error.message);
    });