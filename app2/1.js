"use strict";
// Задание 1:
//     1. Создать две переменные и спросить у пользователя значения для данных
// переменных.Одна переменная будет хранить имя пользователя, другая его возраст.
// 2. Вывести на экран текст: “Добро пожаловать, `имя`.Ваше количество оборотов вокруг солнца - `возраст`.”

const userName = prompt("What is your name?");
// плюс превратит строку в число 
const userAge = +prompt('What is your age?');
// const userAge = Number(prompt('What is your age?')); - второй вариант переделать в число
// const userAge = Number.parseInt(prompt('What is your age?'));
// для проверки на nan можно использовать функцию Number.isNan()
alert(`Welcome ${userName}. Your number of solar circles is ${userAge}`);