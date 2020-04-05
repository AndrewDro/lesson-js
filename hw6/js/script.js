'use strict';

let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),    
    title = document.getElementById('title'),    
    adv = document.querySelector('.adv'),
    question = prompt('Как Вы относитесь к технике APPLE?'),
    answerUser = document.getElementById('prompt'),
    menuItemFive = document.createElement('li'); // создаем элемент пятой кнопки

menu.insertBefore(menuItem[2], menuItem[1]);
menuItemFive.classList.add('menu-item'); // Добавляем новый li для пятой кнопки
menuItemFive.innerHTML = 'Пятый пункт'; // Добавляем текст на кнопку
menu.appendChild(menuItemFive); // ставим пятую кнопку на место
document.body.style.background = "url(../hw6/img/apple_true.jpg) center no-repeat"; // меняем фон
title.innerHTML = 'Мы продаем только <b>подлинную</b> технику Apple';
adv.remove(); // убираем блок с рекламой
answerUser.textContent = question; // записываем ответ

