//Массивы
const arr = ["1", "2", "3"];
console.log(arr);
console.log("Элемент в индексе 0 - ", arr[0]);
console.log("Элемент в индексе 1 - ", arr[1]);
console.log("Элемент в индексе 2 - ", arr[2]);
console.log("Элемент в индексе 3 - ", arr[3]);

arr[0] = "js";
console.log(arr);
const arrayLength = arr.length;
console.log(arrayLength);

//Итерация по массиву
const numbersArray = [13, 10, 121, 157, 23, 9, 3, 144, 25, 100];
for (let i = 0; i < numbersArray.length; i++) {
  console.log(`Элемент в индексе ${i} -`, numbersArray[i]);
}

for (let i = 0; i < 4; i += 1) {
  numbersArray.push("js");
  console.log(`Элемент в индексе ${i} -`, numbersArray[i]);
}

for (let elem of numbersArray) {
  console.log(elem);
}
console.log(numbersArray);

// Присвоение значений
// значения примитивов копируются в значение переменной
let a = 5;
let b = a;
console.log("a:", a, "b:", b);
a = 10;
console.log("a:", a, "b:", b);

//Значение объектов, массивов и функций копируется по ссылке
const array1 = [1, 2, 3, 4, 5];
const array2 = array1;
console.log(array1 === array2);

const array3 = array1.slice();
console.log(array1 === array3);
console.log(array1, array3);

array2.push("js");
console.log(array1, array2, array3);

array2.push("html");
console.log(array1, array2, array3);

array3.pop();
array3.shift();
console.log(array1, array2, array3);

//Методы split и join
const str1 = "Яблоки, апельсины, сливы";
// const arr1 = str1.split(" ");
// console.log(arr1);
const arr1 = str1.split(",");
console.log(arr1);

const newStr = arr1.join("_");
console.log(newStr);

//indexOf
console.log(array1.indexOf("js"));
console.log(array1.indexOf("css"));
console.log(array1.indexOf(3));

//includes
console.log(array1.includes("js"));
console.log(array1.includes("css"));
console.log(array1.includes(3));

//splice

let allArrays = array1.concat(array2).concat(array3);

// let allArrays = array1.concat(array2, array3);
console.log(allArrays);