let windowWidth = document.documentElement.clientWidth;
let mainHeader = document.querySelector(".main-header");
let menuButton = document.querySelector(".burger-button");
let nav = document.querySelector(".main-header__menu");

let subMenuButton = document.querySelector(".submenu-link");
let subMenu = document.querySelector(".site-nav__submenu");


menuButton.onclick = function () {
  menuButton.classList.toggle("burger-button--down");
  nav.classList.toggle("main-header__menu--opened");
};





function checkScreen() {
  if (windowWidth < 992) {
    mainHeader.classList.add('main-header--mobile');
  } else {
    mainHeader.classList.add('main-header--desktop');
    mainHeader.classList.add('main-header--static');
    mainHeader.classList.remove('main-header--mobile');
  }
};

checkScreen();



