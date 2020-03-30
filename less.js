//'use strict';

// var leftBorderWidth = 1;

// {
//     let second = 2;
// }

// const pi = 3.14;

// console.log(pi);

//alert("Hello and!");

// let answer = confirm("Ты здесь дядя?");

// console.log(answer);

// let answer = prompt("Тебе есть 18 лет?", "Канешна");

// console.log(answer);

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr++);
// console.log(decr--);

// let num = 50;

// switch (num) {
//     case num < 49:
//         console.log("Неверно!");
//         break;
//     case num > 100:
//         console.log("Много!");
//         break;
//     case 50:
//         console.log("Ура! Верняк!");
//         break;
//     default:
//         console.log("Что-то не так пошло!");
//         break;
// }

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 56);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }

// let i = 1;

// while (i < 8) {
//     console.log(i);
//     i++;
// }

// let i = 1;

// do {   
//     console.log(i);
//     i++;
// }
// while (i < 8);

// let num = 20;

// function showFirstMessage (text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello Word!");
// console.log(num);

// let calc = function(a,b) {
//     return (a+b);
// }

// let calc = (a,b) => a+b;

// console.log(calc(3,4));

// console.log(calc(8,4));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));


// function first() {
//     // Что-то делаем
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function done () {
//     console.log("Я прошёл 3й урок!");
// }

// learnJS("JavaScript", done);

// function learnJS(lang, callback) {
//     console.log("Я учу " + lang);
//     callback();
// }


// let obj = new Object();

// let options = {
//     widht: 1024,
//     height: 1024,
//     name: "Vasja"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log("Свойство " + key + " имеет значение " + options[key]);
// }
// console.log(Object.keys(options).length);


// let arr = ['first', 2, 3, 'four', 5];

// arr[99] = 99;
// console.log(arr.length);

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': '+ item + ' (массив: '+ mass + ')');
// }); 

// console.log(arr);

// let mass = [1,3,4,6,7];
// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt('', ''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['ajk', "jfh", 'lassk','00'];
//     i = arr.join(', ');

// console.log(i);

// let arr = [1,15,4];
//     i = arr.sort(compareNum);

// function compareNum (a,b) {
//     return a-b;
// }
// console.log(arr);


let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);