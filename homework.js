// //MODULE 1

// //task 1
// const name = "Генератор защитного поля";
// let price = 1000;
// console.log(`Выбран "${name}", стоимость-${price}. Кркдитов`);
// price = 2000;
// console.log(`Выбран "${name}", стоимость-${price}. Кредитов`);

// //task 2
// const total = 100;
// let ordered = 50;
// if (total >= ordered) {
//   console.log("Заказ выполнен, с вами свяжется менеджер.");
// } else {
//   console.log("Не хватает товаров на складе!");
// }

// ordered = 130;
// if (total >= ordered) {
//   console.log("Заказ выполнен, с вами свяжется менеджер.");
// } else {
//   console.log("Не хватает товаров на складе!");
// }

// ordered = 100;
// if (total >= ordered) {
//   console.log("Заказ выполнен, с вами свяжется менеджер.");
// } else {
//   console.log("Не хватает товаров на складе!");
// }

// //task 3
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message = prompt("Ведите пароль.");

// if (message === ADMIN_PASSWORD) {
//   alert("Добро пожаловать!");
// } else {
//   alert("Неверный пароль!");
// }

// //task 4
// let credits = 23580;
// const pricePerDroid = 3000;
// const numberDroids = +prompt("Сколько дроидов купить?");
// if (numberDroids == 0) {
//   alert("Отменено пользователем");
// } else {
//   let totalValue = pricePerDroid * numberDroids;
//   if (totalValue > credits) {
//     alert("Недостаточно денег");
//   } else {
//     credits = credits - totalValue;
//     alert(`Вы купили ${numberDroids} дроидов, осталось ${credits} крдитов`);
//   }
// }
// //task 5
// let country = prompt("Укажите страну").toLowerCase();
// switch (country) {
//   case "китай":
//     alert(Доставка в ${country} будет стоить 100 кредитов);
//     break;

//   case "чили":
//     alert(Доставка в ${country} будет стоить 250 кредитов);
//     break;

//   case "австралия":
//     alert(Доставка в ${country} будет стоить 170 кредитов);
//     break;

//   case "индия":
//     alert(Доставка в ${country} будет стоить 80 кредитов);
//     break;

//   case "ямайка":
//     alert(Доставка в ${country} будет стоить 120 кредитов);
//     break;

//   default:
//     alert("В вашей стране доставка недоступна");
// }

//Task 6
// let message = confirm("Введите число");
// let suma = 0;

// while (message) {
//   message = +prompt("Ведите число");
//   suma = suma + message;
//   console.log(suma);
// }
// alert("Общая сумма чисел равна: " + suma);

//MODULE 2

//Task 1
const logItems = function (array) {
 
  for (let index = 0; index < array.length; index++) {
    console.log(`Элемент в индексе ${index + 1}  - `, array[index]);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//Task 2

const calculateEngravingPrice = function (message, pricePerWord) {
    let a = message.split(" ");
  console.log(a);
  let num = a.length;
  let total = num * pricePerWord;
  console.log(total);
  
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);

//Task 3

const findLongestWord = function(string) {
  let splitter = string.split(" ");
  console.log(splitter);
  let word;
  let length;
  for(let i = 0; i<splitter.length; i++) {
    if(length<splitter.length){
      word=splitter[i];
      length = splitter[i].length;
  }
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

//Task 4
const formatString = function (string) {
  if (string.length < 40) return string;
  return string.slice(0, 40) + "...";
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);

//Task 5
const checkForSpam = function (message) {
  message = message.toLowerCase();
  if (message.includes("spam") || message.includes("sale")) {
    return true;
  } else {
    return false;
  }
};


console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
//Task 6

let input = confirm();
const numbers = [];
let total = 0;

while (input) {
  input = prompt("ВВедите число");
  if (isNaN(input)) {
    alert("Вы не ввели число");
    continue;
  }
  if (input === null) {
    if (numbers.length > 0) {
      for (let num of numbers) {
        total += num;
      }
      console.log(`Общая сумма чисел равна ${total}`);
    } else {
      alert("Было введено не число, повторите ещё раз");
    }
  }
  numbers.push(+input);}
}
