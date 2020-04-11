window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {                        // скрываем все блоки с контентом через css 
        for (let i=a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1); // при старте скрываем все блоки начиная со второго

    function showTabContent (b) {   // добавляем класс что-бы показывался определённый блок с контентом
        if (tabContent[b].classList.contains('hide'))  {  // проверка скрыт ли элемент
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        } 
    }

    info.addEventListener('click', function(event) {   // действия при клике на табы
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {  // проверяем был ли клик именно на табе
            for (let i = 0; i < tab.length; i++) {                     //перебираем все блоки
                if (target == tab[i]) {     // если номер таба куда был клик совпадает с номером блока контента
                    hideTabContent(0);      // скрываем все блоки с контентом
                    showTabContent(i);      // показываем блок по номеру таба на который был клик
                    break;
                }
            }
        }
    });
});