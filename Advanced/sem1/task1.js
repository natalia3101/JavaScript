// Создать механизм для безопасного добавления метаданных к
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы,
// рейтинг, теги.
const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagSymbol = Symbol('tags');

// 2. Реализовать функции addMetadata (добавление метаданных)
// и getMetadata (получение метаданных).

function addMetadata(book, metadataType, data) {
    if (book[metadataType]) {
        book[metadataType].push(data);
    } else {
        book[metadataType] = [data];
    }
}

function getMetadata(book, metadataType) {
    return book[metadataType];
}

// 3. Создать объект книги, добавить метаданные и вывести их на
// консоль.
const book1 = {
    title: 'Ulysses',
    author: 'Joyce'
}

addMetadata(book1, reviewSymbol, 'amazing book');
addMetadata(book1, ratingSymbol, 4);
addMetadata(book1, tagSymbol, 'joyce');

console.log(getMetadata(book1, reviewSymbol));
console.log(getMetadata(book1, ratingSymbol));
console.log(getMetadata(book1, tagSymbol));