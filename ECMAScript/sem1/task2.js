// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

function getEvenNumbers(array) {
    return array.filter(item => item % 2 === 0)
}
console.log(getEvenNumbers([6, 3, 8, 2, 9, 5, 2, 4, 6, 8]));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
function calculateAverage(arr) {
    let sum = 0;
    // const sum = arr.reduce((acc, item) => acc + item, 0)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5]));


// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.
function capitalizeFirstLetter(string) {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalizeFirstLetter('hello world'));