'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

// console.log(money);

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let expens = prompt("Введите обязательную статью расходов в этом месяце", "");
let expensSumm = prompt("Во сколько обойдется?", "");

appData.expenses[expens] = expensSumm;

console.log(appData.expenses);

alert("Ваш бюджет на 1 день =" +money/30);


