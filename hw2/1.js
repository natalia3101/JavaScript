"use strict";

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/
const positiveNumber = Number.parseInt(prompt('enter a positive number'));
const negativeNumber = Number.parseInt(prompt('enter a negative number'));
if (positiveNumber > 0 && negativeNumber < 0) {
    alert(`The numbers are correct`);
} else {
    alert(`One or more numbers are incorrect`);
}