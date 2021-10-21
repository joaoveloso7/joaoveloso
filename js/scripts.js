
/*Screen Loading*/
const screenLoading = document.querySelector('.screen-loading');
setTimeout(() => {
    screenLoading.style.display = 'none';
}, 3500);


/*Screen Loading*/
const menuLines = document.querySelector('.menu-lines');
const menuLine1 = document.querySelector('.menu-lines');
const menuOpen = document.querySelector('.menu-open');

const navItems = document.querySelectorAll('#menu-nav-item');


menuLines.addEventListener('click', () => {
    menuOpen.classList.toggle('active');
    menuLine1.classList.toggle('active-menu');
});


navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        //  e.preventDefault();
        menuOpen.classList.toggle('active');
        menuLine1.classList.toggle('active-menu');
    })
})
