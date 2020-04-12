let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let widht = box.clientWidth,  // ширина окна без паддингов и полосы прокрутки
    height = box.clientHeight;

// let widht = box.offsetWidth,  // ширина всего окна
//     height = box.offsetHeight;

// let widht = box.scrollWidth,  // сколько уже проскролили
//     height = box.scrollHeight;

console.log(widht);
console.log(height);
console.log(box.getBoundingClientRect().left);  // функция получает координаты элемента

console.log(document.documentElement.clientWidth); // получаем ширину окна браузера (document.documentElement)
console.log(document.documentElement.clientHeight); // получаем высоту окна браузера (document.documentElement)
console.log(document.documentElement.scrollTop);

// document.documentElement.scrollTop = 0; // команда перемещает вверх страницы в браузере!!!

// btn.addEventListener('click', function() {
//     box.style.height = box.scrollHeight + 'px';  // записываем полученую высоту скрола в высоту css
// });

btn.addEventListener('click', function() {
    box.scrollTop = 0;
});

scrollBy(0,200); // перемещение относительно текущего положения на значения указанные в 'x' и 'y'
scrollTo(0, 200); // // перемещение в координаты указанные в 'x' и 'y'