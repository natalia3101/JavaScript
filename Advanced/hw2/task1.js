// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. 
// В этом классе будет приватное свойство для хранения списка книг, 
// а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется 
// пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
// Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. 
// Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке 
// и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. 
// Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
class Library {
    _books = [];
    get allBooks() {
        return this._books;
    }

    addBook(title) {
        if (this._books.includes(title)) {
            throw new Error(`Book ${title} already exists in the library`);
        }
        this._books.push(title);
    }
    removeBook(title) {
        const i = this._books.indexOf(title);
        if (i === -1) {
            throw new Error(`Book ${title} not found in the library`);
        }
        this._books.splice(i, 1);
    }
    hasBook(title) {
        return this._books.includes(title);
    }
    constructor(initialBooks = []) {
        if (new Set(initialBooks).size !== initialBooks.length) {
            throw new Error('Initial book list contains duplicates');
        }
        this._books = [...initialBooks];
    }
}

let library = new Library();

library.addBook('1984');
library.addBook('Dune');
library.addBook('Ulysses');
console.log(library.allBooks);
// library.addBook('Ulysses');
library.removeBook('Dune');
console.log(library.allBooks);
library.hasBook('1984')