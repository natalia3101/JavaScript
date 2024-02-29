// Задание 5: 
// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный 
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.
const number1 = +prompt('enter a number');
if (Number.isNaN(number1)) {
    console.log('it is not a number')
} else if (number1 > 5) {
    console.log('Число больше 5')
} else if (number1 < 5) {
    console.log('Число меньше 5')
} else {
    console.log('Число равно 5')
}
// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и 
// выведите соответствующее сообщение.
const test1 = +prompt('enter a number');
const test2 = +prompt('enter a number');
if (test1 === test2) {
    console.log('numbers are equal')
} else {
    console.log('numbers are not equal')
}
// через тернарный оператор
console.log(test1 === test2 ? "Переменные равны" : "Переменные не равны");
// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.
const num1 = +prompt('enter a number');
const num2 = +prompt('enter a number');
if (num1 > num2) {
    console.log(`min number ${num2}`)
} else {
    console.log(`min number ${num1}`)
}
// console.log(Math.min(test1, test2));

// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести 
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”
const newNumber = +prompt('enter a number');
if (newNumber > 0 && newNumber < 15) {
    console.log(`thanks for number ${newNumber}`)
} else {
    console.log(`${newNumber} is a wrong number`)
}