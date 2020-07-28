//Объявили функцию висшего порядка
const toLearnFrontEnd = function (what, how) {
  how(what);
};

const language = "javaScript";
const video = "Webinars";
//Функции колбэки
const toRead = function (variable) {
  console.log(`I learn ${variable}`);
};
const toWatch = function (variable) {
  console.log(`I watch ${variable}`);
};
//Анонимные колбэк функции
toLearnFrontEnd("html", () => {
  console.log("Анонимная колбэк функция");
});
//Вызываем функцию висшего порядка
toLearnFrontEnd(language, toRead);
toLearnFrontEnd(video, toWatch);

//Абстрагирование повторений

const repeatFunc = function (count) {
  let result;
  for (let i = 0; i <= count; i++) {
    result = i;
    console.log(result);
  }
};
repeatFunc(5);

//Фильтрация массива
const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
  { name: "oranges", quantity: 120 },
];

const filterFruits = function (array, cbFunc) {
  const filterArray = [];
  for (let element of array) {
    console.log(element);
    const ok = cbFunc(element);
    console.log(ok);
    if (ok) {
      filterArray.push(element);
    }
  }
  return console.log(filterArray);
};
filterFruits(fruits, (fresh) => fresh.isFresh);
filterFruits(fruits, (el) => el.quantity > 100);
