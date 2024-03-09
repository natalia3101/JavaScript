// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.
const arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] % 3 === 0) {
        console.log(arr[i]);
    }

}

// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество 
// цифр 3 в этом массиве.
const array = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let numberthree = 0;
array.forEach(element => {
    if (element === 3) {
        numberthree++;
    }
});
console.log(numberthree);

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
const array2 = [1, 2, 3, 4, 5];
let res = array2.splice(1, 2);
console.log(array2);
// splice первый аргумент - номер индекса, с которого мы меняем массив, второй - количество аргументов для удаления

const newarr = [2, 4, 244, 424, 434, 424, 22, 22, 34, 1, 3, 4];
const newarr2 = newarr.filter(element => {
        if (element > 25) {
            return true;
        } else return false;
    })
    // или return element > 25
console.log(newarr2);