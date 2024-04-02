// Создать интерактивную веб - страницу, где пользователи могут 
// вводить текст, сохранять его в localStorage,
//     а затем загружать или удалять сохраненные данные.
// Разработка Интерфейса:
//     Создать HTML - страницу с: 
// ●Одним текстовым полем для ввода данных пользователем.
// ●Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// ●Местом для отображения сохраненного текста.
// Программирование Логики на JavaScript:
//     1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
// 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
// 3. При нажатии на "Очистить", сохраненный текст должен 
// быть удален из localStorage, и соответствующее
// сообщение отображается на странице.

function saveText() {
    let text = document.getElementById("textInput").value;
    localStorage.setItem("savedText", text);
    document.getElementById("output").innerHTML = "Текст сохранен в localStorage.";
}

function loadText() {
    let savedText = localStorage.getItem("savedText");
    if (savedText) {
        document.getElementById("output").innerHTML = savedText;
    } else {
        document.getElementById("output").innerHTML = "Нет сохраненного текста.";
    }
}

function clearText() {
    localStorage.removeItem("savedText");
    document.getElementById("output").innerHTML = "Сохраненный текст удален из localStorage.";
}