// Задание 2: 
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в 
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу 
// данной функции.

/*const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);
const num3 = Math.floor(Math.random() * 100);
console.log(num1, num2, num3);

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(sum(num1, num2, num3));*/

// 3. Дан код:

// ```
// func(2);
// func(3);
// func();

// function func(num = 5) {
//     console.log(num * num);
// }
// ```

// Расскажите, каким будет результат каждого из вызовов функции.

// Задание 3: 

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень 
// переданного числа. 
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную 
// сумму в консоль. 

function squareRoot(num) {
    return Math.sqrt(num);
}
console.log(squareRoot(3) + squareRoot(4));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных 
// аргументов функции и вернет найденное значение.
function findMin(number1, number2) {
    if (number1 < number2) {
        return number1
    } else {
        return number2
    }
}
console.log(findMin(4, 8));