// Задание 2
// Вы разрабатываете систему отзывов для вашего веб - сайта.
// Пользователи могут оставлять отзывы, но чтобы исключить слишком 
// короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML - структуру с текстовым полем для ввода отзыва, 
// кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.
// Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [{
        product: "Apple iPhone 13",
        reviews: [{
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [{
            id: "3",
            text: "Интересный дизайн, но дорогой.",
        }, ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [{
            id: "4",
            text: "Люблю играть на PS5, графика на высоте.",
        }, ],
    },
];

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.


const reviewInput = document.getElementById("reviewInput");
const submitButton = document.getElementById("submitButton");
const reviewsContainer = document.getElementById("reviewsContainer");

// Загрузка начальных отзывов при запуске
initialData.forEach(item => {
    const productDiv = document.createElement("div");
    productDiv.textContent = item.product;
    reviewsContainer.appendChild(productDiv);

    item.reviews.forEach(review => {
        const reviewElement = document.createElement("div");
        reviewElement.textContent = review.text;
        reviewsContainer.appendChild(reviewElement);
    });
});


submitButton.addEventListener("click", function() {
    try {
        const reviewText = reviewInput.value.trim();
        if (reviewText.length < 50 || reviewText.length > 500) {
            throw new Error("Review must be between 50 and 500 characters long.");
        }

        const reviewElement = document.createElement("div");
        reviewElement.textContent = reviewText;
        reviewsContainer.appendChild(reviewElement);

        // Очищаем поле ввода после добавления отзыва
        reviewInput.value = "";
    } catch (error) {
        alert(error.message);
    }
});