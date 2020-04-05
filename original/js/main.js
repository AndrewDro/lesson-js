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

    function start() {
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt("Введите дату в формате YYYY-MM-DD", 'YYYY-MM-DD');
    
        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", '');
        }
    }
    start();
    
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function () {
            for (let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt("Во сколько обойдется?", "");
    
                if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
                    a != '' && b != '' && a.length < 50) {
                    console.log("Все верно");
                    appData.expenses[a] = b;
                } else {
                    console.log("Ещё разок");
                    i--;
                }
            }
        },
        chooseOptExpenses: function () {
            for (let i = 1; i <= 3; i++) {
                let questionOptExpenses = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = questionOptExpenses;
            }
        },
        detectDayBudget: function () {
            appData.moneyPerDay = (appData.budget / 30).toFixed(2);
            alert("Ваш бюджет на 1 день = " + appData.moneyPerDay + " грн.");
        },
        detectLevel: function () {
            if (appData.moneyPerDay < 100) {
                console.log("Минимальный уровень достатка");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Средний уровень достатка");
            } else if (appData.moneyPerDay > 2000) {
                console.log("Высокий уровень достатка");
            } else {
                console.log("Ошибка нах!");
            }
        },
        checkSavings: function () {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма Ваших накоплений?"),
                    percent = +prompt("Под какой процент %?");
    
                appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
                alert("Доход в месяц с Вашего депозита: " + appData.monthIncome + " грн.");
            }
        },
        chooseIncome: function () {
            let items = prompt('Что принесёт дополнительный доход Вам? (Перечислите через запятую)', '');
    
            if (typeof (items) != "string" || items == "" || typeof (items) == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
            } else {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            }
            appData.income.forEach(function (item, i) {
                alert('Способы доп.заработка: ' + (i + 1) + ' - ' + item);
            });
        }
    };
    
    // for (let key in appData) {
    //     console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    // }
    
    // appData.detectDayBudget();
    // appData.chooseExpenses();
    // appData.chooseIncome();

