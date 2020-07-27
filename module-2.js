// //Массивы
// const arr = ["1", "2", "3"];
// console.log(arr);
// console.log("Элемент в индексе 0 - ", arr[0]);
// console.log("Элемент в индексе 1 - ", arr[1]);
// console.log("Элемент в индексе 2 - ", arr[2]);
// console.log("Элемент в индексе 3 - ", arr[3]);

// arr[0] = "js";
// console.log(arr);
// const arrayLength = arr.length;
// console.log(arrayLength);

// //Итерация по массиву
// const numbersArray = [13, 10, 121, 157, 23, 9, 3, 144, 25, 100];
// for (let i = 0; i < numbersArray.length; i++) {
//   console.log(`Элемент в индексе ${i} -`, numbersArray[i]);
// }

// for (let i = 0; i < 4; i += 1) {
//   numbersArray.push("js");
//   console.log(`Элемент в индексе ${i} -`, numbersArray[i]);
// }

// for (let elem of numbersArray) {
//   console.log(elem);
// }
// console.log(numbersArray);

// // Присвоение значений
// // значения примитивов копируются в значение переменной
// let a = 5;
// let b = a;
// console.log("a:", a, "b:", b);
// a = 10;
// console.log("a:", a, "b:", b);

// //Значение объектов, массивов и функций копируется по ссылке
// const array1 = [1, 2, 3, 4, 5];
// const array2 = array1;
// console.log(array1 === array2);

// const array3 = array1.slice();
// console.log(array1 === array3);
// console.log(array1, array3);

// array2.push("js");
// console.log(array1, array2, array3);

// array2.push("html");
// console.log(array1, array2, array3);

// array3.pop();
// array3.shift();
// console.log(array1, array2, array3);

// //Методы split и join
// const str1 = "Яблоки, апельсины, сливы";
// // const arr1 = str1.split(" ");
// // console.log(arr1);
// const arr1 = str1.split(",");
// console.log(arr1);

// const newStr = arr1.join("_");
// console.log(newStr);

// //indexOf
// console.log(array1.indexOf("js"));
// console.log(array1.indexOf("css"));
// console.log(array1.indexOf(3));

// //includes
// console.log(array1.includes("js"));
// console.log(array1.includes("css"));
// console.log(array1.includes(3));

// //splice

// let allArrays = array1.concat(array2).concat(array3);

// // let allArrays = array1.concat(array2, array3);
// console.log(allArrays);

//Функции
//Function expression-нельзя вызывать до объявления!
const func = function (a, b) {
  return a + b;
};
console.log(func(2, 3)); //2+3=5

//arrow function
const func1 = (a, b) => a - b;
console.log(func1(9, 8)); //9-8=1

const func2 = (c) => console.log(c);
func2("Hallo world!");

//fuction declarationcom-можно вызвать перед объявлением
function decl(par1, par2) {
  return console.log(par1 * par2);
}
decl(3, 4); //3*4

//Параметры по умолчанию
const toBuyProducts = function (product = "milk", count = 1) {
  return console.log(`I bought ${count} of ${product}`);
};
toBuyProducts(8, "bread");
toBuyProducts("bread", 8);
toBuyProducts(8); //count undefined
toBuyProducts("apple");
toBuyProducts();

//псевдомасcив arguments
const total = function () {
  let sum = 0;
  for (const argument of arguments) {
    sum += argument;
  }
  return sum;
};
console.log(total(2, 6));
console.log(total(7, 89, 8, 5));

const total1 = (...args) => {
  console.log(args);
  let total = 0;
  for (const arg of args) {
    total = +arg;
  }
  console.log(total);
};
total1(1, 2, 3);

//
const func3 = function () {
  const array = [1, 2, 3];
  console.log("Обычный массив", array);
  console.log("Псевдомассив", arguments);
  const newarr = Array.from(arguments);
  console.log("Преобразованный маасив", newarray);
};
func(1, 2, 3);

//Guard close
const addNewUser = function (age) {
  if (age < 16 || age > 21) {
    console.log("Мы не можем вас добавить.");
  } else if (age >= 16 && age <= 21) {
    console.log("Вы студент!");
  } else {
    console.log("Вы ввели неправилные данные.");
  }
};
addNewUser(15);
addNewUser(32);
addNewUser(18);

const addNewUser2 = function (age) {
  if (age < 16 || age > 21) {
    return "Мы не можем вас добавить.";
  }
  if (age >= 16 && age <= 21) {
    return "Вы студент!";
  }
  console.log("Вы ввели неправилные данные.");
};
addNewUser2(15);
addNewUser2(32);
addNewUser2(18);

const firstfunction = function () {
  console.log("Начала выполнение функция 1");
  console.log("Закончила выполнение функция 1");
};
const secondfunction = function () {
  console.log("Начала выполнение функция 2");
  firstfunction();
  console.log("Закончила выполнение функция 2");
};
const thirdfunction = function () {
  console.log("Начала выполнение функция 3");
  secondfunction();
  console.log("Закончила выполнение функция 3");
};
const fourthfunction = function () {
  console.log("Начала выполнение функция 4");
  thirdfunction();
  console.log("Закончила выполнение функция 4");
};

const mainfunc = function (a, b, c) {
  console.log(a());
  console.log(b());
  console.log(c());
};
const ToGo = function () {
  console.log("I am going");
};
const Torun = function () {
  console.log("I am ");
};
const ToJump = function () {
  console.log("I am jumping");
};
mainfunc(ToGo, Torun, ToJump);
