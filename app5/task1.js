// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена 
// дней недели. Выведите на экран “Вторник”.
const daysOfWeek = {
        '1': 'Monday',
        '2': 'Tuesday',
        '3': 'Wednesday',
        '4': 'Thursday',
        '5': 'Friday',
        '6': 'Saturday',
        '7': 'Sunday',
    }
    // console.log(daysOfWeek[2]);

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
const user = {
    name: 'Nata',
    patronimic: prompt('enter patronimic name:'),
    surname: 'Slepenko',
    age: 28,
}
console.log(user);

// 3. Добавьте в объект user свойство отчество, которое пользователь должен 
// ввести с клавиатуры.


// 4. Удалите свойство surname.
delete user.surname;
console.log(user);