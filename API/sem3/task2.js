// Бесконечная лента фотографий
// Для создания бесконечной ленты с фотографиями с использованием 
// Unsplash API, выполните следующие шаги:
// 1. Зарегистрируйтесь на Unsplash:
// ○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// ○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
// ○ Войдите в свой аккаунт Unsplash.

// 2. Создайте приложение:
// ○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash
// (https://unsplash.com/developers).
// ○ Нажмите на кнопку "Your apps".
// ○ Нажмите "New Application" (Новое приложение).
// ○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете
// использовать http://localhost для тестового сайта).
// ○ После заполнения информации, нажмите "Create Application" (Создать приложение).

// 3. Получите API-ключ:
// ○ После создания приложения, вы получите API-ключ. Этот ключ будет
// отображаться в вашей панели управления приложением.
// ○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY.
// Скопируйте его.
// 4. Измените код HTML и JavaScript:
// ○ Откройте вашу HTML-страницу в текстовом редакторе или
// интегрированной среде разработки.
// ○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный
// API-ключ.

// 5. Реализуйте загрузку фотографий при открытии страницы.

// 6. Реализуйте бесконечную подгрузку фотографий при прокручивании страницы.


const accessKey = 'my_access_key';
let isFetching = false;

const fetchPhotos = async(page) => {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/?page=${page}&client_id=${accessKey}`
        );
        if (!response.ok) {
            throw new Error('Error!');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        throw error
    } finally {
        isFetching = false;
    }

};

let currentPage = 1;
async function run() {
    try {
        const data = await fetchPhotos(currentPage);
        addPhotosInHtml(data);
    } catch (error) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = error.message;
        document.querySelector('#photo-container').append(errorMessage);
    }

}
run();
const photoContainer = document.querySelector('#photo-container');

function addPhotosInHtml(data) {
    for (const obj of data) {
        photoContainer.insertAdjacentHTML('beforeend',
            `<div class="photo">
        <img src="${obj.urls.full}" alt="${obj.alt_description}" />
    </div>`);
    }
}

window.addEventListener('scroll', async() => {
    const percentPage = (window.scrollY / (document.body.clientHeight -
        window.innerHeight)) * 100;
    if (percentPage >= 90 && !isFetching) {
        isFetching = true;
        currentPage++;
        try {
            const data = await fetchPhotos(currentPage);
            addPhotosInHtml(data);
        } catch (error) {
            alert(error.message);
        }

    }

})