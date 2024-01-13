var surname, namE, fatherName, age;
do {
    surname = prompt('Введите фамилию');
} while (!surname)
do {
    namE = prompt('Введите имя');
} while (!namE)
do {
    fatherName = prompt('Введите отчество');
} while (!fatherName)
var i = 0;
var isNum = true;
do {

    age = prompt('Введите возраст');
    ageI = parseInt(age);
} while (isNaN(ageI) || !age || isNaN(age));

let isMale = confirm('Ваш пол - мужской?');
let gender, pension;
if (isMale) {
    gender = 'мужской';
    age >= 58 ?
        pension = 'да' :
        pension = 'нет'
} else {
    gender = 'женский';
    age >= 55 ?
        pension = 'да' :
        pension = 'нет'
};

alert(`Ваше ФИО: ${surname} ${namE} ${fatherName}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${age*365}
Через 5 лет вам будет: ${parseInt(age)+5}
Ваш пол: ${gender}
Вы на пенсии: ${pension}`);