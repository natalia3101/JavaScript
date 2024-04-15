// Задание 2

// Необходимо создать страницу, в которой будут работать
// все три кнопки. -
//     При нажатии на кнопку "Добавить элемент"
// на страницу
// добавляется новый квадратный элемент( < div > ) с размерами
// 100 x100 пикселей.Этот элемент должен иметь класс.box
// и содержать текст, указывающий порядковый номер элемента
//     (1, 2, 3 и так далее). -
//     При нажатии на кнопку "Удалить элемент"
// удаляется
// последний добавленный элемент, если таковой имеется. -
//     При нажатии на кнопку "Клонировать элемент"
// создается
// копия последнего добавленного элемента и добавляется на
// страницу.Если последнего добавленного элемента нет на
// странице, необходимо вывести сообщение в alert, с надписью
// о невозможности клонирования, так как клонировать нечего.

const wrapContainer = document.querySelector('.wrapper');
const container = wrapContainer.querySelector('#container');

wrapContainer.addEventListener('click', (event) => {
    if (event.target.closest('#addButton')) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = container.children.length + 1;
        container.append(box);
    } else if (event.target.closest('#removeButton')) {
        if (container.children.length > 0) {
            container.lastElementChild.remove();
        }
    } else if (event.target.closest('#cloneButton')) {
        if (container.children.length > 0) {
            const clone = container.lastElementChild.cloneNode(true);
            container.append(clone);
        }
    }
})