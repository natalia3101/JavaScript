// Вы разрабатываете веб-страницу для отображения расписания занятий 
// в спортивном клубе. Каждое занятие имеет название, время проведения, 
// максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. 
// Каждое занятие должно отображаться на странице с указанием его названия, 
// времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. 
// Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество 
// записанных участников и состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку 
// "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// const scheduleInfo = JSON.stringify([{
//         'id': 1,
//         'name': 'Salsa',
//         'time': '20:00-21:30',
//         'maxParticipants': 16,
//         'currentParticipants': 8
//     },
//     {
//         'id': 2,
//         'name': 'Box',
//         'time': '16:00-17:30',
//         'maxParticipants': 12,
//         'currentParticipants': 11
//     },
//     {
//         'id': 3,
//         'name': 'Horse riding',
//         'time': '14:30-16:00',
//         'maxParticipants': 5,
//         'currentParticipants': 5
//     },
//     {
//         'id': 4,
//         'name': 'Running',
//         'time': '10:00-11:00',
//         'maxParticipants': 10,
//         'currentParticipants': 4
//     },
//     {
//         'id': 5,
//         'name': 'Yoga',
//         'time': '15:00-16:15',
//         'maxParticipants': 11,
//         'currentParticipants': 6
//     },

// ])
// console.log(scheduleInfo);


// Извлекаем начальное расписание из строки JSON
let initialSchedule = JSON.parse('[{"id":1,"name":"Salsa","time":"20:00-21:30","maxParticipants":16,"currentParticipants":8},{"id":2,"name":"Box","time":"16:00-17:30","maxParticipants":12,"currentParticipants":11},{"id":3,"name":"Horse riding","time":"14:30-16:00","maxParticipants":5,"currentParticipants":5},{"id":4,"name":"Running","time":"10:00-11:00","maxParticipants":10,"currentParticipants":4},{"id":5,"name":"Yoga","time":"15:00-16:15","maxParticipants":11,"currentParticipants":6}]');

// Объект для отслеживания пользователей, которые уже записались на курсы
const registeredUsers = {};

// Функция для отрисовки расписания на странице
function renderSchedule(schedule) {
    const tbody = document.querySelector('.scheduleBody');
    tbody.innerHTML = '';

    schedule.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.name}</td>
            <td>${course.time}</td>
            <td>${course.maxParticipants}</td>
            <td>${course.currentParticipants}</td>
            <td>
                <button class="signup-btn" data-id="${course.id}" ${course.currentParticipants >= course.maxParticipants || registeredUsers[course.id] ? 'disabled' : ''}>Join</button>
                <button class="cancel-btn" data-id="${course.id}" ${course.currentParticipants <= 0 || !registeredUsers[course.id] ? 'disabled' : ''}>Cancel</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Функция для обновления данных о курсе (количество участников)
function updateCourse(id, action) {
    const course = initialSchedule.find(course => course.id === id);
    if (action === 'signup') {
        course.currentParticipants++;
        registeredUsers[id] = true; // Помечаем пользователя как записавшегося
    } else if (action === 'cancel') {
        course.currentParticipants--;
        delete registeredUsers[id]; // Удаляем пользователя из списка записавшихся
    }
}

// Обработчик клика по кнопкам "Записаться" и "Отменить запись"
document.addEventListener('click', event => {
    if (event.target.classList.contains('signup-btn')) {
        const courseId = parseInt(event.target.dataset.id);
        updateCourse(courseId, 'signup');
        renderSchedule(initialSchedule);
    } else if (event.target.classList.contains('cancel-btn')) {
        const courseId = parseInt(event.target.dataset.id);
        updateCourse(courseId, 'cancel');
        renderSchedule(initialSchedule);
    }
});

// Инициализация страницы
window.onload = () => {
    renderSchedule(initialSchedule);
};