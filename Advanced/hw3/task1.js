// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. 
// Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку 
// "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

// Функция добавления отзыва
function addReview() {
    let productName = document.getElementById("product-name").value;
    let reviewText = document.getElementById("review-text").value;

    if (productName && reviewText) {
        let reviews = JSON.parse(localStorage.getItem("reviews")) || {};
        if (!reviews[productName]) {
            reviews[productName] = [];
        }
        reviews[productName].push(reviewText);
        localStorage.setItem("reviews", JSON.stringify(reviews));
        alert("Отзыв добавлен!");
        console.log("Отзывы после добавления:", reviews); // Отладочное сообщение для проверки сохраненных данных
        document.getElementById("product-name").value = "";
        document.getElementById("review-text").value = "";
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
}

// Функция отображения страницы просмотра отзывов
function showReviewsPage() {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || {}; // Получаем сохраненные отзывы из localStorage или создаем пустой объект, если отзывов еще нет
    console.log("Отзывы из localStorage:", reviews); // Отладочное сообщение для проверки данных из localStorage
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";
    Object.keys(reviews).forEach(function(productName) {
        let li = document.createElement("li");
        li.textContent = productName;
        li.setAttribute("data-productname", productName); // Добавляем атрибут с названием продукта
        li.onclick = function() {
            showReviews(this.getAttribute("data-productname")); // Получаем название продукта из атрибута и вызываем функцию showReviews() с этим именем
        };
        productList.appendChild(li);
    });
    document.getElementById("add-review-page").style.display = "none";
    document.getElementById("view-reviews-page").style.display = "block";
}

// Функция удаления отзыва
function deleteReview(productName, review) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || {};
    let index = reviews[productName].indexOf(review);
    if (index !== -1) {
        reviews[productName].splice(index, 1);
        localStorage.setItem("reviews", JSON.stringify(reviews));
        showReviews(productName); // Обновляем список отзывов после удаления
    }
}

// Функция отображения отзывов для выбранного продукта
function showReviews(productName) {
    console.log("Просматриваем отзывы для продукта:", productName); // Отладочное сообщение для проверки переданного имени продукта
    let reviews = JSON.parse(localStorage.getItem("reviews")) || {}; // Получаем сохраненные отзывы из localStorage или создаем пустой объект, если отзывов еще нет
    let reviewList = document.getElementById("review-list"); // Получаем элемент списка отзывов
    reviewList.innerHTML = ""; // Очищаем содержимое списка отзывов перед добавлением новых отзывов
    if (reviews[productName]) {
        reviews[productName].forEach(function(review) {
            console.log("Добавляем отзыв:", review); // Отладочное сообщение для проверки каждого добавляемого отзыва
            let li = document.createElement("li");
            li.textContent = review;
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Удалить";
            deleteButton.onclick = function() {
                deleteReview(productName, review);
            };
            li.appendChild(deleteButton);
            reviewList.appendChild(li); // Добавляем элемент li с отзывом в reviewList
        });
    } else {
        let li = document.createElement("li");
        li.textContent = "Отзывов пока нет";
        reviewList.appendChild(li); // Если отзывов нет, добавляем сообщение об этом в reviewList
    }
}