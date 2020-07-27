"use strict";

//объекты

const ok = {
  key_1: "value",
  key_2: 30,
  key_3: true,
  toshowKeys() {
    console.log(this.key_1, this.key_2, this.key_3);
  },
};
console.log(ok);
console.log(ok.key_1);
console.log(ok.key_2);
console.log(ok.key_3);
ok.toshowKeys();
ok.key_1 = "javaScript";
ok.toshowKeys();
ok.key_4 = 20;
ok.toshowKeys();
delete ok.key_4;
ok.toshowKeys();

// for in

for (let key in ok) {
  console.log("Каждое свойство свойство", key);
  console.log("Каждое значение свойства", ok[key]);
}

const allKeys = Object.keys(ok);
console.log("Преобразовать свойство в массив ключей", allKeys);

const allValues = Object.values(ok);
console.log("Преобразовать свойство в массив значений", allValues);

const allEntries = Object.entries(ok);
console.log("Преобразовать свойство в массив пар, ключ-значений", allEntries);

for (let elem of allEntries) {
  console.log(elem);
  console.log(`${elem[0]}: ${elem[1]}`);
}

//операции rest и spred

const numbers = [1, 2, 3, 4, 5];
let min = Math.min(1, 2, 3, 4, 5);
console.log(min);
min = Math.min(...numbers);
console.log(min);

const newNumbersArray = [...numbers];
console.log(newNumbersArray);
newNumbersArray.pop();
console.log(newNumbersArray);
console.log("Исходный массив", numbers);

// распыление объекта

const strawberry = {
  name: "strawberry",
};
const bananas = {
  name: "bananas",
};

const coctail = Object.assign({}, bananas, strawberry);
console.log(coctail);

const newCoctail = {
  ...strawberry,
  ...bananas,
};
console.log(newCoctail);

function toDoCoctail(...args) {
  console.log(args);
}
toDoCoctail(1, 2, 3);
toDoCoctail(1, 2, 3, 4, 5);
toDoCoctail();

function toGetData(email, ...args) {
  console.log(email);
  console.log(args);
}
toGetData("123@gmail.com", 1, 2, 3);
toGetData("123@gmail.com", 1, 2);
toGetData("123@gmail.com", 1, 2, 3, 4, 5);

// деструктуризация объекта

const user = {
  name: "Zakhar",
  age: 13,
  colorEye: "brown",
};
console.log(user);
console.log(user.name, user.age, user.colorEye);
const { name, age, colorEye, newAge = 14 } = user;
console.log(name, age, colorEye, newAge);
console.log(user);

const fruits = [
  ["banans", "oranges", "kiwi"],
  ["apples", "strawberry", "cherry"],
];
console.log(fruits[0]);
console.log(fruits[1]);
const [tropical, regional] = fruits;

console.log(tropical);
console.log(regional);
