// ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    constructor(title, author, pages) {
        this.title = title,
            this.author = author,
            this.pages = pages;
    }
    displayInfo() {
        console.log(`${this.title} by ${this.author}, the number op pages - ${this.pages}`);
    }
}

const book1 = new Book('Harry Potter and the Goblet of Fire', 'J.K. Rowling', 650);
book1.displayInfo();