//Задание 1
let password = 'условие';
let passwordUser = prompt ('Введите пароль');
if (password === passwordUser) {console.log ("Пароль введен верно");
    
} else {console.log ("Пароль введен неправильно");
    
}

//Задание 2
let c = prompt('Введите любое число');
c = Number(c);
if (c > 0 && c < 10) {console.log ("Верно");
    
} else {console.log ("Неверно");
    
}

//Задание 3
let d = prompt('Введите первое любое число');
let e = prompt('Введите второе любое число');
d = Number(d);
e = Number(e);
if (d > 100 || e > 100) {console.log ("Верно");
    
} else {console.log ("Неверно");
    
}

//Задание 4
let a = '2';
let b = '3';
console.log (Number(a) + Number(b));

//Задание 5
let monthNumber = prompt('Введите номер месяца');
monthNumber = Number(monthNumber);

if (monthNumber > 13) {
    console.log('Номер месяца не может быть больше 13.');
} else {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
        default:
            console.log('Неверный номер месяца.');
    }
}