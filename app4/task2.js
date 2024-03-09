// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте 
// каждый элемент массива на единицу.
const array = [1, 2, 3];
array[0]++;
array[1]++;
array[2]++;
console.log(array);


// 2. Узнайте длину следующего массива и объясните почему такое значение:

const arr = [];
arr[3] = 'a';
arr[8] = 'b';
console.log(arr);


// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

const array2 = [1, 2, 3];
array2.push(4, 5);
console.log(array2);


// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента. 
// Проверьте, какое станет значение свойства length после этого.

const array3 = [];
for (let i = 0; i < 5; i++) {
    array3.push(Math.floor(Math.random() * 100))
}
console.log(array3);
array3.pop();
console.log(array3);
console.log(array3.length);