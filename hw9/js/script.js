window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) { // скрываем все блоки с контентом через css 
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1); // при старте скрываем все блоки начиная со второго

    function showTabContent(b) { // добавляем класс что-бы показывался определённый блок с контентом
        if (tabContent[b].classList.contains('hide')) { // проверка скрыт ли элемент
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) { // действия при клике на табы
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { // проверяем был ли клик именно на табе
            for (let i = 0; i < tab.length; i++) { //перебираем все блоки
                if (target == tab[i]) { // если номер таба куда был клик совпадает с номером блока контента
                    hideTabContent(0); // скрываем все блоки с контентом
                    showTabContent(i); // показываем блок по номеру таба на который был клик
                    break;
                }
            }
        }
    });

    // пишем таймер

    let deadline = '2020-04-15';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        // hours = Math.floor((t/1000/60/60) % 24);

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);

    // модальное окно

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // кнопка "Узнать подробнее"

    let descriptionBtn = document.querySelectorAll('.description-btn'),
        infoDescription = document.querySelector('.info');   

    infoDescription.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            for (let i = 0; i < descriptionBtn.length; i++) {
                if (target == descriptionBtn[i]) {
                    overlay.style.display = 'block';
                    document.body.style.overflow = 'hidden';                    
                }                
            }
        }         
    });

});