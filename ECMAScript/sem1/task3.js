// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую. 
function createCalculator(usersValue) {
    let value = usersValue;

    return {
        add: function(number) {
            value += number;
        },
        subtract: function(number) {
            value -= number;
        },
        getValue: function() {
            return value;
        }
    };
}
const calculator = createCalculator(10);
calculator.add(5);
console.log(calculator.getValue()); // Выведет: 15
calculator.subtract(3);
console.log(calculator.getValue()); // Выведет: 12