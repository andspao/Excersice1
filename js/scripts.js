let menu = document.querySelector('#menu');
let menubar = document.querySelector('#menubar');

menubar.addEventListener('click', () => {
    menu.classList.toggle('menu-toggle');
});