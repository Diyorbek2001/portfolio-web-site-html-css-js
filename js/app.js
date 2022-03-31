let navBar = document.querySelector('.navbar');
let up = document.querySelector('.scroll-up-btn');
var q = document.getElementsByTagName('html');
window.addEventListener('scroll' , () => {
    navBar.classList.toggle('sticky' , window.scrollY > 20);
    up.classList.toggle('show' , window.scrollY > 500);
});
var bos = document.querySelector('.menu-btn');
var eski = document.querySelector('.navbar .menu');
bos.addEventListener('click' , () => {
    eski.classList.toggle('active');
});
up.addEventListener('click' , function() {
    window.scrollTo(0 , 0);
})
