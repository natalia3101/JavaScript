//  1. С помощью цикла
//  for выведите в консоль числа от 11 до 33.
// for (let index = 11; index < 33; index++) {
//     console.log(index);
// }

//  2. С помощью цикла
//  for выведите в консоль нечетные числа в промежутке от 1
//  до 100 включительно.
for (let index = 1; index < 101; index++) {
    if (index % 2 !== 0) {
        console.log(index);
    }
}

for (let index = 1; index < 101; index = index + 2) {
    console.log(index);
}

//  3. С помощью цикла
//  for выведите в консоль числа от 100 до 0.
for (let index = 100; index > 0; index--) {
    console.log(index);
}

//  4. Создать переменную с заданным числом.Умножайте число на 3 столько раз,
//      пока результат умножения не станет больше 1000. Какое число получится ?
//      Посчитайте количество итераций, необходимых для этого.
const number = 2;
let count = 0;
for (let index = number; index <= 1000; index = index * 3) {
    console.log(index);
    count++;
}
console.log(count);