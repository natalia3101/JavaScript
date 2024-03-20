// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор 
// элемента и время задержки (в миллисекундах) в качестве аргументов.
//  Функция должна изменить стиль элемента через указанное время.

function changeStyleDelayed(elementId, delay) {
    setTimeout(function() {
        const element = document.getElementById(elementId);
        if (element) {
            // Изменяем стиль элемента
            element.style.backgroundColor = 'red';
            element.style.color = 'white';
            // Можно добавить другие стили по вашему усмотрению
        } else {
            console.error('Элемент с идентификатором', elementId, 'не найден');
        }
    }, delay);
}

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"