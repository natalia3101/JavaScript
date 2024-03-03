// Задание 4:

//     1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.

/*const num = Number(prompt('enter number from 1 to 7'));

function getWeekDay(num) {
    switch (num) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
        default:
            return 'wrong day of the week'
    }
}
console.log(getWeekDay(num));*/

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток(утро, день, вечер, ночь), например:
//     "Добрый день, Иван."
// или "Доброй ночи, Иван.".

/**
 * for greeting a person
 * @param {name } name 
 * @returns 
 */
function greetings(name) {
    const currentTime = new Date().getHours();
    if (currentTime > 21 || currentTime < 6) {
        return `Good night, ${name}`;
    } else if (currentTime < 12) {
        return `Good morning, ${name}`;
    } else if (currentTime < 18) {
        return `Good afternoon, ${name}`;
    } else {
        return `Good evening, ${name}`;
    }
}
console.log(greetings('Natalia'));