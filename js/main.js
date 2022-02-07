window.addEventListener('scroll', function(){
    const logoImage = document.querySelector('.icon-navbar');
    const iconAgostiniano = document.querySelector('.icon-agostiniano');
    const logoNav = document.querySelector('.logo-nav')
    const mainNav = document.getElementById ('mainNav');

        if(window.pageYOffset > 0){
            logoImage.style.padding = "0.75rem 0";
            logoImage.style.width = "4rem";
            logoNav.style.width = "min(8rem, 80%)";
            iconAgostiniano.style.padding = "0.75rem 0";
            iconAgostiniano.style.width = "4rem";
            mainNav.style.padding = "0 3rem"
            mainNav.style.minHeight = "10vh"
            mainNav.classList.add('bg-transition');
        }else{
            logoImage.style.padding = "0";
            logoImage.style.width = "6rem";         
            logoNav.style.width = "min(12rem, 80%)";         
            iconAgostiniano.style.padding = "0";
            iconAgostiniano.style.width = "6rem";
            mainNav.style.padding = "0 3rem"
            mainNav.style.minHeight = "15vh"
            mainNav.classList.remove('bg-transition')
        } 
})