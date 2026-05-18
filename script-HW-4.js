//Задание 1
let i = 1;
while (i <= 2) {
    console.log ('Привет');
    i++;
}

//Задание 2
let a = 1;
while (a <= 5) {
    console.log (a);
    a++;
}

//Задание 3
let b = 7;
while (b <= 22) {
    console.log (b);
    b++;
}

//Задание 4
const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
  }
}

//Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log("Конечное число:", n); 
console.log("Количество итераций:", num);

//Задание 6
const firstFriday = 3;

const daysInMonth = 31;

let currentFriday = firstFriday;

while (currentFriday <= daysInMonth) {
  console.log(`Сегодня пятница, ${currentFriday}-е число. Необходимо подготовить отчет.`);
  currentFriday += 7;
}