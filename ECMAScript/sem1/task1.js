// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); 

// Ожидаемый результат: [1, 2, 3, 4, 5, 6]

function mergeArrays(array1, array2) {
    const mergedArray = [...array1, ...array2];
    return mergedArray;
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5);

// Ожидаемый результат: [1, 2, 3, 4, 5]

function removeDuplicates(...args) {
    return args.filter((val, index) => args.indexOf(val) === index);
}
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));