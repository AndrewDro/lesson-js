// 'use strict';
let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    money, time;


btnStart.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", 'YYYY-MM-DD');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = (money.toFixed(2) + ' грн.');
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesItemBtn.removeAttribute('disabled');
    optionalexpensesBtn.removeAttribute('disabled');
    countBudgetBtn.removeAttribute('disabled');

});

expensesItemBtn.addEventListener('click', function () {
    let sum = 0;    

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("Все верно");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("Ещё разок");
            i--;
        }
    }
    expensesValue.textContent = sum.toFixed(2) + ' грн.';
});

optionalexpensesBtn.addEventListener('click', function () {
    for (let i = 0; i <= optionalexpensesItem.length; i++) {
        let questionOptExpenses = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

countBudgetBtn.addEventListener('click', function () {
    let chooseExpensesSum = 0;   

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;           
            appData.expenses[a] = b;
            chooseExpensesSum += +b;          
    }

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget - chooseExpensesSum)/ 30;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка!";
        } else {
            levelValue.textContent = "Ошибка нах!";
        }
        daybudgetValue.textContent = appData.moneyPerDay.toFixed(2) + " грн.";
    } else {
        daybudgetValue.textContent = 'Сначала начните расчёт';
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = (sum / 100 / 12 * percent);
            appData.yearIncome = (sum / 100 * percent);

            monthsavingsValue.textContent = appData.monthIncome.toFixed(2);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = (sum / 100 / 12 * percent);
            appData.yearIncome = (sum / 100 * percent);

            monthsavingsValue.textContent = appData.monthIncome.toFixed(2);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(2);        
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

    // checkSavings: function () {
    //     if (appData.savings == true) {
    //         let save = +prompt("Какова сумма Ваших накоплений?"),
    //             percent = +prompt("Под какой процент %?");

    //         appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
    //         alert("Доход в месяц с Вашего депозита: " + appData.monthIncome + " грн.");
    //     }
    // },
    // chooseIncome: function () {
    //     let items = prompt('Что принесёт дополнительный доход Вам? (Перечислите через запятую)', '');

    //     if (typeof (items) != "string" || items == "" || typeof (items) == null) {
    //         console.log("Вы ввели некорректные данные или не ввели их вовсе");
    //     } else {
    //         appData.income = items.split(", ");
    //         appData.income.push(prompt("Может что-то еще?"));
    //         appData.income.sort();
    //     }
    //     appData.income.forEach(function (item, i) {
    //         alert('Способы доп.заработка: ' + (i + 1) + ' - ' + item);
    //     });
    // }
};

// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
// }

// appData.detectDayBudget();
// appData.chooseExpenses();
// appData.chooseIncome();