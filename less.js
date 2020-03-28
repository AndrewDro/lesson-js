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

let calc = (a,b) => a+b;

console.log(calc(3,4));

console.log(calc(8,4));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));