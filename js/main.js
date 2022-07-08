const btnMenu = document.querySelector('.check__btn')
const Menu = document.querySelector(".nav__menu");

/* Menu Navbar */
btnMenu.addEventListener("click" , () => {
  Menu.classList.toggle("nav__menu_visible")
});


