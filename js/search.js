let search = document.querySelector('.header__search-adapt');
let searchIcon = document.querySelector('.nav__searching');

search.addEventListener('click', function() {
    searchIcon.classList.toggle('show');
})

const burgerMenu = document.querySelector('.header__burger');
const burgerItems = document.querySelector('.header__burger-items');
const body = document.querySelector('body');

burgerMenu.addEventListener('click', () => {
burgerMenu.classList.toggle('active');
burgerItems.classList.toggle('active');
body.classList.toggle('lock')
});
