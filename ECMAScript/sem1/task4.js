// Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"
function createGreeting(usersName) {
    return function() {
        console.log(`Hello ${usersName}`);
    }
}
const greeting = createGreeting('Natalia');
greeting();