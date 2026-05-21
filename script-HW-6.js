//Задание 1

const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === 10) {
        break;
    }
}

//Задание 2

const array2 = [1, 5, 4, 10, 0, 3];
let index = -1;

for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 4) {
        index = i;
        break;
    }
}

console.log(index);

//Задание 3

const array3 = [1, 3, 5, 10, 20];
const result = array3.join(' ');
console.log(result);

//Задание 4

const rows = 3;
const cols = 3;
const matrix = [];

for (let i = 0; i < rows; i++) {
    const innerArray4 = [];

    for (let j = 0; j < cols; j++) {
        innerArray4.push(1);
    }

    matrix.push(innerArray4);
}

console.log(matrix);

//Задание 5

const array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log(array5);

//Задание 6

const array6 = [9, 8, 7, 'a', 6, 5];

array6.sort();

const filteredArray6 = array6.filter(element => element !== 'a');

console.log(filteredArray6);

//Задание 7

const array7 = [9, 8, 7, 6, 5];

const userInput = prompt('Угадайте число! Введите число от 1 до 10:');

const guessedNumber = Number(userInput);

if (array7.includes(guessedNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//Задание 8

const array8 = 'abcdef';
console.log('abcdef'.split('').reverse().join(''));

//Задание 9

const array9 = [[1, 2, 3], [4, 5, 6]];
const flattenedArray9 = [...array9[0], ...array9[1]];
console.log(flattenedArray9);

//Задание 10

const numbers = [3, 7, 2, 9, 5, 1, 8];

for (let i = 0; i < numbers.length - 1; i++) {
    const currentElement = numbers[i];
    const nextElement = numbers[i + 1];
    const sum = currentElement + nextElement;

    console.log(`Сумма ${currentElement} и ${nextElement} = ${sum}`);
}

//Задание 11

function getSquares(numbers11) {
    return numbers11.map(num => num ** 2);
}

const inputArray11 = [1, 2, 3, 4, 5];
const resultArray11 = getSquares(inputArray11);
console.log(resultArray11);

//Задание 12

function getWordLengths(strings) {
    return strings.map(str => str.length);
}

const words = ['яблоко', 'банан', 'вишня', 'черника'];
const lengths = getWordLengths(words);
console.log(lengths);

//Задание 13

function getNegativeNumbers(numbers13) {
    return numbers13.filter(num => num < 0);
}

const inputArray13 = [5, -3, 8, -1, 0, -7, 10, -2];
const negativeArray13 = getNegativeNumbers(inputArray13);
console.log(negativeArray13);

//Задание 14

const originalArray14 = [];

for (let i = 0; i < 10; i++) {
    const randomNumber14 = Math.floor(Math.random() * 11);
    originalArray14.push(randomNumber14);
}

const evenNumbers14 = originalArray14.filter(num => num % 2 === 0);

console.log('Исходный массив:', originalArray14);
console.log('Массив с чётными значениями:', evenNumbers14);

//Задание 15

const numbers15 = [];

for (let i = 0; i < 6; i++) {
    const randomNumber15 = Math.floor(Math.random() * 10) + 1;
    numbers15.push(randomNumber15);
}

const sum = numbers15.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const average15 = sum / numbers15.length;

console.log('Массив случайных чисел:', numbers15);
console.log('Сумма элементов:', sum);
console.log('Среднее арифметическое:', average15);