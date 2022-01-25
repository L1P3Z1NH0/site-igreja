window.addEventListener('scroll', function(){
    const logoImage = document.querySelector('.icon-navbar');
    const iconAgostiniano = document.querySelector('.icon-agostiniano');
    const logoNav = document.querySelector('.logo-nav')
    const mainNav = document.getElementById ('mainNav');

    if(window.pageYOffset > 0){
        logoImage.style.height = "6vh";
        logoImage.style.width = "4vw";
        logoNav.style.height = "10vh";
        logoNav.style.width = "6vw";
        iconAgostiniano.style.height = "7vh";
        iconAgostiniano.style.width = "4vw";
        mainNav.style.padding = "0 5%"
        mainNav.style.height = "10vh"
        mainNav.classList.add('bg-transition');
    }else{
        logoImage.style.height = "8vh";
        logoImage.style.width = "5vw";
        logoNav.style.height = "15vh";
        logoNav.style.width = "10vw";
        iconAgostiniano.style.height = "8vh";
        iconAgostiniano.style.width = "5vw";
        mainNav.style.padding = "5%"
        mainNav.style.height = "15vh"
        mainNav.classList.remove('bg-transition')
    }
})