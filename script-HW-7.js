//Задание 1

console.log('js'.toUpperCase());

//Задание 2

function filterByPrefix(stringsArray, prefix) {
    return stringsArray.filter(str =>
        str.toLowerCase().startsWith(prefix.toLowerCase())
    );
}

const words = ['Apple', 'application', 'Banana', 'appetite', 'Cherry'];
const result1 = filterByPrefix(words, 'app');
console.log(result1);

//Задание 3

const number = 32.58884;

const floorResult = Math.floor(number);  // До меньшего целого
const ceilResult = Math.ceil(number);   // До большего целого
const roundResult = Math.round(number); // До ближайшего целого

console.log("Исходное число:", number);
console.log("До меньшего целого (Math.floor):", floorResult);
console.log("До большего целого (Math.ceil):", ceilResult);
console.log("До ближайшего целого (Math.round):", roundResult);

//Задание 4

const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log("Минимальное значение:", min);
console.log("Максимальное значение:", max);

//Задание 5

function printRandomNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
}

// Вызов функции
printRandomNumber();

//Задание 6

function generateRandomArray(num) {
    // Проверяем, что входное число — целое и положительное
    if (!Number.isInteger(num) || num <= 0) {
        throw new Error('Аргумент должен быть положительным целым числом');
    }

    // Вычисляем длину массива: половина от переданного числа (округлённая вниз)
    const arrayLength = Math.floor(num / 2);

    // Создаём массив и заполняем его случайными числами от 0 до num (включительно)
    const randomArray = [];
    
    for (let i = 0; i < arrayLength; i++) {
        // Math.random() даёт число от 0 (включительно) до 1 (не включая)
        // Умножаем на (num + 1), чтобы охватить диапазон [0, num]
        // Math.floor() округляет вниз до целого числа
        const randomNum = Math.floor(Math.random() * (num + 1));
        randomArray.push(randomNum);
    }

    return randomArray;
}

console.log(generateRandomArray(8));
console.log(generateRandomArray(5));
console.log(generateRandomArray(2));

//Задание 7

function getRandomInRange(min, max) {
    // Проверяем, что оба аргумента — целые числа
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error('Оба аргумента должны быть целыми числами');
    }

    // Гарантируем, что min <= max (при необходимости меняем местами)
    const actualMin = Math.min(min, max);
    const actualMax = Math.max(min, max);

    // Генерируем случайное число в диапазоне [actualMin, actualMax]
    const randomNum = Math.floor(Math.random() * (actualMax - actualMin + 1)) + actualMin;

    return randomNum;
}

console.log(getRandomInRange(1, 10));
console.log(getRandomInRange(5, 5));
console.log(getRandomInRange(-3, 3));
console.log(getRandomInRange(10, 5));

//Задание 8

const todayDate = new Date();
console.log(todayDate);

//Задание 9

const currentDate = new Date(); // Создаём переменную currentDate, хранящую текущую дату

const futureDate = new Date(currentDate); // Создаём копию текущей даты, чтобы не изменять исходный объект

const currentDay = currentDate.getDate(); // Получаем текущий день месяца

futureDate.setDate(currentDay + 73);// Устанавливаем дату на 73 дня вперёд с помощью метода setDate()

console.log('Текущая дата:', currentDate.toLocaleDateString());
console.log('Дата через 73 дня:', futureDate.toLocaleDateString()); // Выводим текущую дату и дату через 73 дня

//Задание 10

function formatDateToRussian(date) {
    // Проверяем, что передан корректный объект Date
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error('Аргумент должен быть корректным объектом Date');
    }

    const daysOfWeek = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];

    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
}
console.log(formatDateToRussian(new Date()));

const specificDate = new Date(2023, 11, 25, 8, 15, 30);
console.log(formatDateToRussian(specificDate)); // Конкретная дата