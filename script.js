const hamburger = document.querySelector('.header--hamburger');
const closehamburger = document.querySelector('.header--close');
const header = document.querySelector('.header');
const navbar = document.querySelector('.nav');
const navbarli = document.querySelector('.header__navbar__item')
const headerButton = document.querySelector('.header__button');

hamburger.addEventListener('click', () => {
    console.log("I am a fine boy");
    closehamburger.style.display = "inline-block";
    hamburger.style.display = "none";
    header.style.cssText = "min-height: 360px;"
    navbar.classList.replace('header__navbar', 'navbar');
})

closehamburger.addEventListener('click', () => {
    console.log("I am a fine girl");
    hamburger.style.display = "inline-block";
    closehamburger.style.display = "none";
    navbar.classList.replace('navbar', 'header__navbar');
    header.style.cssText = "min-height: 0px;"
})