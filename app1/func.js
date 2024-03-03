let age = Number(prompt('how old are you?'));
// стрелочная функция 
const upAge = () => {
        return age + 5;
    }
    // const upAge = () => age + 5;

console.log(`in 5 years you be ${upAge()} years old`);


function hello() {
    console.log('hello');
}
// вызов
hello();

function buy() {
    alert('msg');
    alert('dkdk');
}

function goRiddle() {
    function riddles(question, answer) {
        let userAnswer = prompt(question);
        userAnswer = userAnswer.toLocaleLowerCase();
        if (userAnswer === answer) {
            alert('Молодец, ответил верно');
        } else {
            alert('Не угадал');
        }
    }
    riddles('Не лает, не кусает, а в дом не пускает', 'замок');
    riddles('Сто одёжек и все без застежек', 'капуста');
}