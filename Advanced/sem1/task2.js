// Используя Symbol.iterator, создайте объект "Библиотека", который можно
// итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойство символ Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен
// перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
// консоль.


const library = {
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "Brave New World", author: "Aldous Huxley" },
        { title: 'Fahrenheit 451', author: 'Ray Bradbury' }
    ],
    [Symbol.iterator]: function() {
        let i = 0;
        return {
            next: () => {
                if (i < this.books.length) {
                    return { value: this.books[i++], done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }
}
for (const book of library) {
    console.log(book);
}