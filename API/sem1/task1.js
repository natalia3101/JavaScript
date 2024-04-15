// Задание 1.
// 1. Необходимо выводить на страницу текущую ширину 
// и высоту окна браузера, при изменении значений, вывод
// также должен меняться.


const container = document.querySelector('.container');
const heightWindow = document.querySelector('.height>span');
const widthWindow = document.querySelector('.width>span');

window.addEventListener('resize', () => {
    heightWindow.textContent = window.innerHeight;
    widthWindow.textContent = window.innerWidth;
})

// 2. При закрытии страницы (вкладки), необходимо выводить 
// всплывающее окно или диалоговое окно браузера и 
// спросить, уверен ли пользователь, что хочет покинуть 
// страницу?
window.addEventListener('beforeunload', (event) => {
        event.preventDefault();
        alert('dont go away!');
    }) //сейчас это не работает, разработчики браузеров сделали так, чтобы эти м не пользовались


// 3. Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.

const backButton = document.querySelector('.back');
const forwardButton = document.querySelector('.forward');
backButton.addEventListener('click', () => {
    window.history.back();
})
forwardButton.addEventListener('click', () => {
    window.history.forward();
})