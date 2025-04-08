let menu = document.querySelector('header .menu')
let menu_img = document.querySelector('header .menu img')
let nav = document.querySelector('header ul')
menu.addEventListener('click', () => {
    nav.classList.toggle('active')
    menu_img.classList.toggle('toogle')
    if (menu_img.classList.contains('toogle')) {
        menu_img.src = "images/xmark-solid.svg"
    } else {
        menu_img.src = "images/bars-solid.svg"
    }
})