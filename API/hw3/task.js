// Цель: Разработать веб-приложение, которое каждый день будет 
// отображать новое случайное изображение из коллекции Unsplash, 
// давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.


// Создание приложения:

// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения.

// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

// * Дополнительные задачи (по желанию):

// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.
const accessKey = 'my_access_key';
const fetchPhoto = async() => {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/random/?client_id=${accessKey}`
        );
        if (!response.ok) {
            throw new Error('Fetching error');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
};

const saveLikesToLocalStorage = (count) => {
    localStorage.setItem('likeCount', count);
};

const getLikesFromLocalStorage = () => {
    return parseInt(localStorage.getItem('likeCount')) || 0;
};

const saveHistoryToLocalStorage = (photoUrl) => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.unshift(photoUrl);
    localStorage.setItem('history', JSON.stringify(history));
};

const displayHistory = () => {
    const historyList = document.querySelector('.history-list');
    const history = JSON.parse(localStorage.getItem('history')) || [];
    historyList.innerHTML = '';
    history.forEach((photoUrl, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('history-item');
        const img = document.createElement('img');
        img.src = photoUrl;
        img.alt = `Image ${index + 1}`;
        img.classList.add('history-photo');
        listItem.appendChild(img);
        historyList.appendChild(listItem);
    });

};

const photoContainer = document.querySelector('.photo-container');
const photoImage = photoContainer.querySelector('.photo');
const photographerName = photoContainer.querySelector('.photographer');
const likeButton = photoContainer.querySelector('.like-button');
const likeCount = photoContainer.querySelector('.like-count');
const showHistoryButton = document.querySelector('.show-history-button');
const historyContainer = document.querySelector('.history-container');

likeButton.addEventListener('click', () => {
    // Увеличиваем счетчик лайков при нажатии на кнопку "Лайк"
    let count = parseInt(likeCount.textContent);
    count++;
    likeCount.textContent = count;
    saveLikesToLocalStorage(count);
});

showHistoryButton.addEventListener('click', () => {
    // Показываем или скрываем историю просмотров в зависимости от текущего состояния
    if (historyContainer.style.display === 'none') {
        historyContainer.style.display = 'block';
        displayHistory();
    } else {
        historyContainer.style.display = 'none';
    }
});

const displayPhotoInfo = async() => {
    const photoData = await fetchPhoto();
    // Обновляем изображение
    photoImage.src = photoData.urls.full;
    photoImage.alt = photoData.alt_description;
    // Обновляем имя фотографа
    photographerName.textContent = `Photographer: ${photoData.user.name}`;
    // Загружаем сохраненные лайки из локального хранилища
    likeCount.textContent = getLikesFromLocalStorage();
    // Сохраняем информацию о просмотре в историю
    saveHistoryToLocalStorage(photoData.urls.full);
    // Отображаем историю просмотров

};

// Загружаем случайное изображение при загрузке страницы
window.addEventListener('DOMContentLoaded', displayPhotoInfo);