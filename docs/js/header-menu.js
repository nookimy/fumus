/* Ширина вьюпорта */
let windowWidth = document.documentElement.clientWidth;

/*Мобильное меню*/
let mainHeader = document.querySelector(".main-header");
let burgerButton = document.querySelector(".burger-button");
let siteNav = document.querySelector(".main-header__menu");
burgerButton.onclick = function () {
    burgerButton.classList.toggle("burger-button--down");
    siteNav.classList.toggle("main-header__menu--opened");
    search.classList.remove("main-header__search--opened");
};

/*Открытие поиска в мобильном меню*/
let searchOpenButton = document.querySelector(".main-nav__search-btn");
let search = document.querySelector(".main-header__search");
searchOpenButton.onclick = function () {
    burgerButton.classList.remove("burger-button--down");
    siteNav.classList.remove("main-header__menu--opened");
    search.classList.toggle("main-header__search--opened");
};

/* Открытие подменю в мобильной версии на JS */
function openSubmenu() {
    if (windowWidth < 1024) {
        let els = document.querySelectorAll('.open-submenu');
        [].forEach.call(els, function(el, i, els) {
            el.addEventListener('click', function() {
                [].forEach.call(els, function(el) {
                    if(el !== this) {
                        el.classList.remove("open-submenu--in");
                    } else {
                        el.classList.toggle("open-submenu--in");
                    }
                }, this);
            });
        });
    }
}




openSubmenu();


let mainHeaderFixed = document.querySelector(".main-header--desktop-sticky");

function menuPosition() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        siteNav.classList.remove("main-header__menu--opened");
    } else {
        mainHeaderFixed.style.transform = "translateY(-100%)";
        siteNav.classList.remove("main-header__menu--opened");
    }
    prevScrollpos = currentScrollPos;
}

window.onscroll = menuPosition;

/* Динамическое отслеживание ширины экрана */
window.addEventListener('resize',function(){
    windowWidth = document.documentElement.clientWidth;
    openSubmenu();
});

/*function checkScreen() {
    let windowWidth = document.documentElement.clientWidth; // ширина окна за вычетом полосы прокрутки

    if (windowWidth < 992) {
        mainHeader.classList.remove('main-header--desktop');
        mainHeader.classList.add('main-header--fixed');
    } else {
        mainHeader.classList.remove('main-header--fixed');
        mainHeader.classList.add('main-header--desktop');
    }
};

checkScreen();
/!* Когда пользователь прокручивает вниз, скрыть навигационную панель. Когда пользователь прокручивает вверх, показать навигационную панель*!/

function menuPosition() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        siteNav.classList.remove("main-header__menu--opened");
    } else {
        mainHeaderFixed.style.transform = "translateY(-100%)";
        siteNav.classList.remove("main-header__menu--opened");
    }
    prevScrollpos = currentScrollPos;
}

window.onscroll = menuPosition;

;*/
