// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", 
// который можно итерировать. Каждая итерация должна возвращать 
// следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив 
// альбомов и имеет свойство-символ Symbol.iterator. 
// Каждый альбом имеет следующую структуру:


// • Реализуйте кастомный итератор для объекта musicCollection. 
// Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной 
// коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)


const musicCollection = {
    albums: [
        { title: "1989", artist: "taylor swift", year: 2014 },
        { title: "lover", artist: "taylor swift", year: 2019 },
        { title: "reputation", artist: "taylor swift", year: 2017 },

    ],
    [Symbol.iterator]: function() {
        let i = 0;
        return {
            next: () => {
                if (i < this.albums.length) {
                    const album = this.albums[i++];
                    return { value: `${album.title} - ${album.artist} (${album.year})`, done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }
}
for (const album of musicCollection) {
    console.log(album);
}