// Вы создаете интерфейс, где пользователь вводит число.
// Ваша задача— проверить, является ли введенное значение числом или нет, и дать
// соответствующий ответ.
// 1. Создайте HTML - структуру: текстовое поле для ввода числа и кнопку "Проверить".
// 2. Добавьте место(например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку.Эта функция
// должна использовать
// try и
// catch для проверки вводимого значения
const numberInput = document.getElementById("numberInput");
const checkButton = document.getElementById("checkButton");
const messageDiv = document.getElementById("message");

checkButton.addEventListener("click", function() {
    const inputValue = numberInput.value.trim();

    try {
        const number = parseFloat(inputValue);

        if (isNaN(number)) {
            throw new Error("Input is not a valid number.");
        }

        messageDiv.textContent = `${number} is a valid number.`;
    } catch (error) {
        messageDiv.textContent = error.message;
    }
});