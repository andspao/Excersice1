const navSlide = () => {
    let menu = document.querySelector('#menu');
    let menubar = document.querySelector('#menubar');
    let menuItems = document.querySelectorAll('.menu__item');
    
    menubar.addEventListener('click', () => {
        //Toggle Nav
        menu.classList.toggle('menu-toggle');

        //Animate Links
        menuItems.forEach((item, index) => {
            if(item.style.animation){
                item.style.animation = '';
            } else {
                item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`
            }
        });

        //Bars Animation
        menubar.classList.toggle('line-toggle');
    });

}

navSlide();