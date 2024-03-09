"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const num1 = Number(prompt('Enter the first number'));
const num2 = Number(prompt('Enter the second number'));
const num3 = Number(prompt('Enter the third number'));

function findMaxNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return `Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num1}.`;
    } else if (num2 > num1 && num2 >= num3) {
        return `Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num2}.`;
    } else {
        return `Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num3}.`;
    }
}
console.log(findMaxNumber(num1, num2, num3));