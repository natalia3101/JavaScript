// Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.

const Animal = {
    name: '',
    eat() {
        console.log(`${this.name} is eating.`);
    }
}
const Dog = {
    name: '',
    bark() {
        console.log(`${this.name} is barking.`);
    }
}


// Одалживание метода eat() из объекта Animal к объекту Dog
Dog.name = 'Rex';
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating.