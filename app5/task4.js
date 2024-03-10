// 1. Создайте объект riddle.

// 2. Добавьте свойства question со значениями(текст загадки) и 
// answer (ответ на загадку).

// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос 
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать, 
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль 
// выводится текст: “вы проиграли”.


// const riddle = {
//     question: 'Зимой и летом одним цветом',
//     answer: 'елка',
//     hints: ['green', 'christmas'],
//     askQuestion(answer) {
//         const userAnswer = prompt(`Введите ответ на загадку ${this.question}`);
//         if (userAnswer.toLowerCase() === this.answer) {
//             console.log('Правильно!');
//             return;
//         }
//         console.log('Неправильно');
//         for (let i = 0; i < this.hints.length; i++) {
//             console.log(this.hints[i]);
//             const userAnswer = prompt(`Введите ответ на загадку`);
//             if (userAnswer.toLowerCase() === this.answer) {
//                 console.log('Правильно!');
//                 return;
//             }
//         }
//         console.log('Really?');
//     }
// }
// riddle.askQuestion();

// вариант Преподавателя

const riddle = {
    question: 'Зимой и летом одним цветом',
    answer: 'елка',
    help: ['Это зеленая', 'Это колючая'],
}

riddle.askQuestion = function() {
    let userAnswer;
    let i = 0;
    do {
        userAnswer = prompt(this.question);
        if (userAnswer.toLowerCase() === this.answer) {
            console.log('Вы выиграли');
            return
        }
        if (i < this.help.length) {
            console.log(`Подумайте еще. Вот подсказка: ${this.help[i]}`);
            i++;
        } else {
            break;
        }
    } while (userAnswer.toLowerCase() !== this.answer);
    console.log('Вы самое слабое звено!');
}
riddle.askQuestion();