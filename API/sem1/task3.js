// Задание 3.
// Необходимо создать страницу со списком статей.
// Каждая статья состоит из id, заголовка, текста статьи.
// id - будем брать из unix timestamp.
// Необходимо подготовить список статей в JSON - формате,
//     которые будут выводиться на странице при первом ее
// открытии.
// Необходимо реализовать возможность удаления статьи.
// Необходимо реализовать возможность добавления статьи.
// Необходимо реализовать возможность изменения статьи,
// ввод данных можно реализовать через prompt.
// Статьи должны сохраняться в локальное хранилище
// браузера, и должны быть доступны после перезагрузки
// страницы.

// const initialJSON = JSON.stringify([
//     { id: Date.now(), title: 'heading1', text: 'lalalla' },
//     { id: Date.now(), title: 'heading2', text: 'lalalla' },
//     { id: Date.now(), title: 'heading3', text: 'lalalla' }
// ])
// console.log(initialJSON);

const initialJSON = '[{ "id": 1712234611275, "title": "heading1", "text": "lalalla" }, { "id": 1712234611272, "title": "heading2", "text": "lalalla" }, { "id": 1712234611279, "title": "heading3", "text": "lalalla" }]';
const localStorageKey = 'articles';
if (!localStorage.getItem(localStorageKey)) {
    localStorage.setItem(localStorageKey, initialJSON);
}

const articlesData = JSON.parse(localStorage.getItem(localStorageKey));
console.log(articlesData);

const ulList = document.querySelector('.news');
ulList.innerHTML = articlesData.map(createArticleHTML).join('');


function createArticleHTML(article) {
    return ` 
    <li id="${article.id}">
    <h2>${article.title}</h2>
    <p>${article.text}</p >
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>

    </li>`;
}
const deleteBtn = document.querySelector('.delete-btn');
ulList.addEventListener('click', ({ target }) => {
    const liItem = target.closest('li');
    if (target.closest('.delete-btn')) {
        liItem.remove();
        const articleIndex = articlesData.findIndex(article => article.id === +liItem.getAttribute('.id'));
        articlesData.splice(articleIndex, 1)
        localStorage.setItem(localStorageKey, JSON.stringify(articlesData));
    } else if (target.closest('.edit-btn')) {
        const title = prompt('Enter the title of the article');
        const text = prompt('Enter the text of the article');

        if (!text || !title) {
            alert('wrong data')
            return;
        }
        const article = articlesData.find(article => article.id === +liItem.getAttribute('.id'))
        article.title = title;
        article.text = text;
        localStorage.setItem(localStorageKey, JSON.stringify(articlesData));
        liItem.querySelector('.h2').textContent = title;
        liItem.querySelector('.p').textContent = text;

    }
})

const addArtBtn = document.querySelector('.add-btn');

addArtBtn.addEventListener('click', () => {
    const title = prompt('Enter the title of the article');
    const text = prompt('Enter the text of the article');

    if (text && title) {
        const newArticle = {
            id: Date.now(),
            title,
            text,
        };
        articlesData.push(newArticle);
        localStorage.setItem(localStorageKey, JSON.stringify(articlesData));
        ulList.insertAdjacentHTML("beforeend", createArticleHTML(newArticle));
    } else {
        alert('wrong data');
    }

})

// updating