console.log("Интерпретатор");
console.log("Переводит наш код");
console.log("в язык понятный машине");
console.log("строчка за строчкой");
let sum;
console.log(sum);
sum = 2 + 3;
console.log(sum);
console.log(typeof sum); //number
sum = "2" + 3;
console.log(sum);
sum - "2" + "3";
console.log(sum);

//взаимодействие с пользователем
const greet= alert("Hi");
console.log(greet);

const ask= confirm("Do u like coffe?");
console.log(ask);//true or false;

const enter = prompt("enter da neme)");
console.log;
//логические операторы
console.log(3 > 5);
if (3 > 5) {
  console.log("Код выполниться");
}
console.log("Код не выполниться");

console.log(5 > 3);
if (5 > 3) {
  console.log("Код выполниться");
} else if (4 > 2) {
  console.log("Код тоже выполняеться");
} else {
  console.log("Код не выполниться");
}

if (5 > 3 && 2 > 4) {
  console.log("Код выполняеться");
} else {
  console.log("Код не выполняеться");
}

if (5 > 3 || 2 > 4) {
  console.log("Код выполняеться");
} else {
  console.log("Код не выполняеться");
}

let a = true;
let b = false;

if (b) {
  console.log("выражение правдиво");
} else if (!b) {
  console.log("Выражеие ложно");
}

if(a) {
    console.log("выражение правдиво");
} else if(!a){
    console.log("Выражеие ложно");
}else {
    console.log("Выполнилось только else");
}

let age= +prompt("Введите ваш возраст");
if(age>10 && age<16) {
    console.log("Это подросток");
} else if (age>=16 && age<=21){
    console.log("Молодёжь");
}else{
    console.log("Другая возростная категория")
}
let hairColor= prompt("Ведите ваш цвет волос").toLowerCase();

switch(hairColor) {
    case "Блонд":
        console.log("Вам нужно увлажнять волосы!");
        break;
    case "Шатен":
        console.log("Вам нужно питать ваши волосы!");
        break;
    default:
        console.log("Я не знаю какие у вас волосы!");
        break;
}
let hairColor= prompt("Ведите ваш цвет волос").toLocaleLowerCase();

switch(hairColor) {
    case "БЛОНД":
        console.log("Вам нужно увлажнять волосы!");
        break;
    case "ШАТЕН":
        console.log("Вам нужно питать ваши волосы!");
        break;
    default:
        console.log("Я не знаю какие у вас волосы!");
        break;
}

// while and do
let A = 26;
let maxCount = 50;
while (A < maxCount) {
  A = A + 1;
  console.log(A);
}

do {
  A = A + 100;
  console.log(A);
} while (A < maxCount);

let message = "I love JavaScript";
for (let i = 0; i <= message.length; i++) {
  console.log(i);
}
//i++ || i=i+1 || i+=1

for (let i = 0; i <= message.length; i += 2) {
  console.log(i);
}

// break and continue
for (let i = 1; i < 15;i += 3){
    if (i%2===0) {
    continue;
     }
     if (i === 13) {
         continue;
     }
    console.log(i);
 }
for (let i = 1; i < 15; i += 3) {
  if (i % 2 === 0 || i === 13) {
    continue;
  }
  console.log(i);
}
