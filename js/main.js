const btnMenu = document.querySelector('.btn')
const navMenu = document.querySelector('.menu__display')

/* Menu Navbar */
btnMenu.addEventListener('click', function () {
  navMenu.classList.toggle('.menu__visible')
})


