// Задание 2.

// Создайте простое модальное окно, которое появляется при клике 
// на кнопку "Открыть модальное окно" и закрывается при клике на 
// кнопку "Закрыть". Модальное окно должно содержать заголовок 
// "Модальное окно" и кнопку для закрытия. Модальное окно должно 
// плавно появляться и исчезать при открытии и закрытии.

const modalEl = document.querySelector('.modal');
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');

openBtn.addEventListener('click', () => modalEl.classList.add('active'));
closeBtn.addEventListener('click', () => modalEl.classList.remove('active'));