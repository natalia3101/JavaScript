// Задание 1:

//     1. Написать функцию, которая принимает, имя, фамилия и возраст.Функция должна
// вывести в консоль строку:
//     "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

/*let firstName = prompt('What is your name?');
let lastName = prompt('What is your last name?');
let userAge = Number(prompt('What is your age?'));

function greatings(firstName, lastName, userAge) {
    console.log(`Привет, ${firstName} ${lastName}. Вы уже большой, вам ${userAge}.`);
}
greatings(firstName, lastName, userAge);*/

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

/*const number = Number(prompt('enter a number'));

function square(number) {
    return number ** 2
}
console.log(square(number));*/

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
//     если число было отрицательное.В случае, если было передано не число, либо ноль,
//     функция ничего не должна выводить.

const num = Number(prompt('enter a number'));

function isPositive(num) {
    if (num > 0) {
        return '+++'
    } else if (num < 0) {
        return '---'
    }
}
console.log(isPositive(num));