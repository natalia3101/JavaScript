// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. 
// Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;

const imageContainer = document.querySelector('.image-container');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const dotsContainer = document.getElementById('dots-container');
const dots = document.querySelectorAll('.dot');

function showImage(index) {
    currentImageIndex = (index + images.length) % images.length;
    images.forEach((image, i) => {
        if (i === currentImageIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
    updateActiveDot(currentImageIndex);
}


function updateActiveDot(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    showImage(currentImageIndex - 1);
});

nextButton.addEventListener('click', () => {
    showImage(currentImageIndex + 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index);
    });
});

showImage(currentImageIndex);