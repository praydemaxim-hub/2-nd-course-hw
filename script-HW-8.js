//Задание 1

const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//Задание 2

function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(array, ruleFunction) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    if (ruleFunction(array[i])) {
      result.push(array[i]);
    }
  }
  
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

console.log(filter(peoples, isMale));

//Задание 3

// Запускаем интервал — вывод даты каждые 3 секунды
const intervalId = setInterval(() => {
  const currentDate = new Date();
  console.log(currentDate.toLocaleString());
}, 3000);

// Через 30 секунд очищаем интервал и выводим финальное сообщение
setTimeout(() => {
  clearInterval(intervalId);
  console.log('30 секунд прошло');
}, 30000);

//Задание 4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

//Задание 5

function delayForOneSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForOneSecond(function() {
    sayHi('Глеб');
});