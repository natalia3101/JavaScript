// Задание 4

// Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям
// отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность
// для этого опросника, используя HTML, CSS и JavaScript.
// 1. Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен
// иметь несколько вариантов ответов.
// 2. Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
// 3. Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
// 4. При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все
// вопросы, и отобразить выбранные им варианты ответов.
// 5. Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить
// на все вопросы перед завершением опроса.
// 6. По желанию можно добавить стилизацию опросника с использованием CSS для лучшего
// пользовательского опыта.

const questionEl = document.querySelectorAll('.question');
const submitBnt = document.getElementById('submit');
const resultEl = document.querySelector('.result');
const answerEl = document.querySelector('.answers');

submitBnt.addEventListener('click', () => {
    const resultsHtml = [];
    questionEl.forEach((question, index) => {
        const checkedInput = question.querySelector('input:checked')
        question.classList.toggle('notChecked', !checkedInput);
        if (checkedInput) {
            resultsHtml.push(`<p data-number="${index + 1}">Вопрос ${index + 1}: <span>${checkedInput.value}</span></p>`)
        }
    });
    if (resultsHtml.length === questionEl.length) {
        answerEl.innerHTML = resultsHtml.join('');
        // убираем инлайновый стиль display
        resultEl.style.removeProperty('display'); // у меня не работает эта строка
        submitBnt.disabled = true;
    }

})