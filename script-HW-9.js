//Задание 1

// Получаем ссылки на элементы через querySelector
const title = document.querySelector('.title');
const toggleButton = document.querySelector('.toggleButton');

// Переменная для отслеживания состояния видимости заголовка
let isVisible = true;

// Добавляем обработчик события click на кнопку
toggleButton.addEventListener('click', function() {
    if (isVisible) {
        // Скрываем заголовок
        title.style.display = 'none';
        // Меняем текст кнопки
        toggleButton.textContent = 'Показать';
        // Обновляем состояние
        isVisible = false;
    } else {
        // Показываем заголовок
        title.style.display = 'block';
        // Меняем текст кнопки
        toggleButton.textContent = 'Скрыть';
        // Обновляем состояние
        isVisible = true;
    }
});

//Задание 2

// Получаем ссылки на элементы через querySelector
    const textParagraph = document.querySelector('.textParagraph');
    const colorButton = document.querySelector('.colorButton');

    // Добавляем обработчик события click на кнопку
    colorButton.addEventListener('click', function() {
        // Изменяем цвет текста абзаца на синий
        textParagraph.style.color = 'blue';
    });

//Задание 3

// Получаем ссылки на элементы через querySelector
    const mainTitle = document.querySelector('.mainTitle');
    const changeTextButton = document.querySelector('.changeTextButton');

    // Добавляем обработчик события click на кнопку
    changeTextButton.addEventListener('click', function() {
        // Изменяем текст заголовка на «Привет, мир!»
        mainTitle.textContent = 'Привет, мир!';
    });

//Задание 4

// Получаем ссылку на кнопку через querySelector
    const changeTextBtn = document.querySelector('.changeTextBtn');

    // Добавляем обработчик события click на кнопку
    changeTextBtn.addEventListener('click', function() {
        // Находим все элементы с классом description
        const descriptionElements = document.querySelectorAll('.description');

        // Перебираем найденные элементы и изменяем их текст
        descriptionElements.forEach(function(element) {
            element.textContent = 'Измененный текст';
        });
    });
    
//Задание 5

// Получаем ссылку на кнопку через querySelector
    const updateTextButton = document.querySelector('.updateTextButton');

    // Добавляем обработчик события click на кнопку
    updateTextButton.addEventListener('click', function() {
        // Находим все абзацы с классом descript
        const descriptionParagraphs = document.querySelectorAll('p.descript');

        // Перебираем найденные элементы и изменяем их текст
        descriptionParagraphs.forEach(function(paragraph) {
            paragraph.textContent = 'Новый текст';
        });
        });

//Задание 6

// Получаем ссылку на кнопку через querySelector
    const addParagraphButton = document.querySelector('.addParagraphButton');

    // Добавляем обработчик события click на кнопку
    addParagraphButton.addEventListener('click', function() {
        // Создаём новый элемент <p>
        const newParagraph = document.createElement('p');

        // Устанавливаем текст для нового абзаца
        newParagraph.textContent = 'Новый абзац';

        // Добавляем новый элемент в конец документа (в конец <body>)
        document.body.appendChild(newParagraph);
        });

//Задание 7

// Получаем ссылку на кнопку через querySelector
    const removeButton = document.querySelector('.removeButton-7');

    // Добавляем обработчик события click на кнопку
    removeButton.addEventListener('click', function() {
        // Находим первый элемент <p> с классом description
        const firstDescriptionParagraph = document.querySelector('p.description-7');

        // Проверяем, найден ли элемент
        if (firstDescriptionParagraph) {
            // Удаляем элемент из DOM
            firstDescriptionParagraph.remove();
        } else {
            // Опционально: выводим сообщение, если элементов с классом description больше нет
            console.log('Элементов с классом description больше нет.');
        }
    });