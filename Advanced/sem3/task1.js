// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве
// (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен
// имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
// задержки — отображать новости на странице.
// 1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// 2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать
// задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для
// добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное
// выполнение и ошибки с использованием then() и catch().
// 4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует
// её снова после завершения операции (будь то успешная загрузка или ошибка).

const newsDatabase = [
    { id: 1, title: "Новость 1", content: "Содержание новости 1" },
    { id: 2, title: "Новость 2", content: "Содержание новости 2" },
    { id: 3, title: "Новость 3", content: "Содержание новости 3" }
];

document.getElementById("load-news-btn").addEventListener("click", function() {
    const button = this;
    button.disabled = true;

    document.getElementById("error-message").style.display = "none";
    document.getElementById("news-container").innerHTML = "";

    fetchNews()
        .then(news => {
            news.forEach(article => {
                const articleElement = document.createElement("div");
                articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
                document.getElementById("news-container").appendChild(articleElement);
            });
        })
        .catch(error => {
            document.getElementById("error-message").style.display = "block";
            console.error(error);
        })
        .finally(() => {
            button.disabled = false;
        });
});




function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(new Error("Ошибка загрузки данных"));
            } else {
                resolve(newsDatabase);
            }
        }, 2000);
    });
}


// const btn = document.querySelector('.load-news-btn');
// const newContainer = document.querySelector('.news-container');

// btn.addEventListener('click', () => {
//     fetchNews()
//         .then(data => {
//             data.forEach(news => {
//                 const newsP = document.createElement('p');
//                 newsP.textContent = news.content;
//                 const newsH = document.createElement('h');
//                 newsP.textContent = news.title;
//                 newContainer.appendChild(newsH);
//                 newContainer.appendChild(newsP);
//             });
//         })
//         .catch(error => {
//             newContainer.textContent = `error`;
//         })
// })