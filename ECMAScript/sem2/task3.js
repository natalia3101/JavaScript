// Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return Math.abs(a - b);
    },
    multiply(a, b) {
        return a * b;
    }
}
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
console.log(calculator.multiply.apply(null, [5, 3])); //15