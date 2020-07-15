//task 1
const name = "Генератор защитного поля";
console.log(name);
let price = 1000;
console.log(`Выбран "${name}", стоимость-${price}.`);
price = 1000;
console.log(`Выбран "${name}", стоимость-${price}.`);

//task 2
const total = 100;
const ordered = 50;
if (total > ordered) {
  console.log("Закааз выполнен, с вами свяжеться менеджер.");
} else {
  console.log("Не хватает товаров на складе!");
}

//task 3
const ADMIN_PASSWORD = "jqueryismyjam";
let message = +prompt("Ведите пароль.");
if ((message = ADMIN_PASSWORD)) {
  alert("Добро пожаловать!");
} else {
  alert("Неверный пароль!");
}

//task 4
let credits = 23580;
const pricePerDroid = 3000;
const numberDroids = +prompt("Сколько дроидов купить?");
if (numberDroids == 0) {
  alert("Отменено пользователем");
} else {
  let totalValue = pricePerDroid * numberDroids;
  if (totalValue > credits) {
    alert("Недостаточно денег");
  } else {
    credits = credits - totalValue;
    alert(`Вы купили ${numberDroids} дроидов, осталось ${credits} крдитов`);
  }
}
//task 5
let country = prompt("Укажите страну");
switch (country) {
  case "Китай":
    alert(`Доставка в ${country} будет стоить 100 кредитов`);
    break;

  case "Чили":
    alert(`Доставка в ${country} будет стоить 250 кредитов`);
    break;

  case "Австралия":
    alert(`Доставка в ${country} будет стоить 170 кредитов`);
    break;

  case "Индия":
    alert(`Доставка в ${country} будет стоить 80 кредитов`);
    break;

  case "Ямайка":
    alert(`Доставка в ${country} будет стоить 120 крдитов`);
    break;
  default:
    alert("В вашей стране доставка недоступна");
}
//task 6
let message = prompt("ВВедите число");
let suma = 0;

while (message) {
  message = prompt("Ведите исло");
  suma = suma + message;
  console.log(suma);
}
alert("Общая сумма чисел рфвна" + suma);
