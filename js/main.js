const burger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__desktop');
const close = document.querySelector('.header__close');

burger.addEventListener('click', () => {
    menu.classList.add('header__desktop--on');
})

close.addEventListener('click', () => {
    menu.classList.remove('header__desktop--on');
})