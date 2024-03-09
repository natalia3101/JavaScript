// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3 - х, но меньше 10.
const array1 = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 3 && array1[i] < 10) {
        console.log(array1[i]);
    }

}

// 2. Найдите сумму четных чисел от 2 до 100.
let sum = 0;

for (let i = 2; i <= 100; i += 2) {
    sum = sum + i;
}
console.log(sum);

// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.
const array2 = [2, 5, 9, 3, 1, 4];
let res = 0;
// array2.forEach(element => {
//     res = res + element;
// });


// for (const element of array2) {
//     res = res + element;
// }

for (const i in array2) {
    res = res + array2[i];
}
console.log(res);


// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let line = '-';
for (let i = 1; i < 10; i++) {
    line = line + i + '-';
}
console.log(line);

// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0. После этого
// цикл должен завершить свою работу.
const array3 = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < array3.length; i++) {
    if (array3[i] === 0) {
        break;
    }
    console.log(array3[i]);
}