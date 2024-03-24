// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
//     кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// 1. Map будет использоваться для хранения соответствия между уроком и
// преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые
// посетил каждый студент.

// 1. Map: урок => преподаватель
let lessonsAndTeachers = new Map();
// математика, Смирнова
// история, Иванов
lessonsAndTeachers.set('math', 'Smith');
lessonsAndTeachers.set('physics', 'Joyce');
lessonsAndTeachers.set('literature', 'Peterson');


// 2. Map: студент => Set уроков
const natashaLessons = new Set();
natashaLessons.add('math');
natashaLessons.add('literature');

const students = new Map();
students.set('Natasha', natashaLessons)

console.log(`Math's teacher: ${lessonsAndTeachers.get('math')}`);
console.log(`Nat's lessons are ${[...students.get('Natasha')]}`);