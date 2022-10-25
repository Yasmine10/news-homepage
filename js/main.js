console.log('testing');
let navToggle = document.getElementById('nav-toggle');
let header = document.querySelector('.header-primary');
let navList = document.getElementById('nav-list');
let body = document.getElementsByTagName('BODY')[0];;

navToggle.addEventListener('click', () => {

    if(navList.classList.contains('show')) {
        body.classList.remove('no-scroll');
        navList.classList.remove('show');
        header.classList.remove('show');
    } else {
        body.classList.add('no-scroll');
        navList.classList.add('show');
        header.classList.add('show');
    }
});