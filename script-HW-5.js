//Задание 1
function getMin(a, b) {
    return a <= b ? a : b;
}

console.log(getMin(8, 4));
console.log(getMin(6, 6));

//Задание 2
function checkEvenOdd(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        return 'Ошибка: аргумент должен быть числом';
    }
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(0));
console.log(checkEvenOdd(-3));
console.log(checkEvenOdd(-2));

//Задание 3
function printSquare(num) {
    console.log(num * num);
}

printSquare(5);
printSquare(3);
printSquare(-4);
printSquare(0);

//Задание 4
function checkAge() {

    const userInput = prompt('Сколько вам лет?');

    const age = Number(userInput);

    if (isNaN(age)) {
        console.log('Вы ввели неправильное значение');
        return;
    }

    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}

console.log(checkAge());

//Задание 5
function multiplyNumbers(a, b) {

    const num1 = Number(a);
    const num2 = Number(b);

    if (isNaN(num1) || isNaN(num2) || !Number.isFinite(num1) || !Number.isFinite(num2)) {
        return 'Одно или оба значения не являются числом';
    }

    return num1 * num2;
}

console.log(multiplyNumbers(5, 3));
console.log(multiplyNumbers(2.5, 4));
console.log(multiplyNumbers('6', '7'));
console.log(multiplyNumbers(-3, 4));
console.log(multiplyNumbers(0, 100));

console.log(multiplyNumbers('abc', 5));
console.log(multiplyNumbers(10, null));
console.log(multiplyNumbers(undefined, 3));
console.log(multiplyNumbers('', 5));
console.log(multiplyNumbers(Infinity, 2));

//Задание 6
function cubeNumber() {
    const userInput = prompt('Введите число:');

    if (userInput === null || userInput.trim() === '') {
        return 'Переданный параметр не является числом';
    }

    const number = Number(userInput);

    if (isNaN(number) || !Number.isFinite(number)) {
        return 'Переданный параметр не является числом';
    }

    const cube = number ** 3;

    return `${number} в кубе равняется ${cube}`;
}

console.log(cubeNumber());

//Задание 7
const circle1 = {
    radius: 5,

    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,

    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log('Circle 1:');
console.log(`Радиус: ${circle1.radius}`);
console.log(`Площадь: ${circle1.getArea().toFixed(2)}`);
console.log(`Периметр: ${circle1.getPerimeter().toFixed(2)}`);

console.log('\nCircle 2:');
console.log(`Радиус: ${circle2.radius}`);
console.log(`Площадь: ${circle2.getArea().toFixed(2)}`);
console.log(`Периметр: ${circle2.getPerimeter().toFixed(2)}`);