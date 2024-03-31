// barra de nav
var dentro_menu = document.getElementById("dentro_menu")
function menu() {
    if (dentro_menu.style.display == "block") {
        dentro_menu.style.display = "none"
    } else {
        dentro_menu.style.display = "block"
    }
}
// animação do sobre mim
var div_mov = document.querySelector("#mov_about_me").style
window.addEventListener("scroll",function() {
    var limite = this.document.getElementById("about_me").getBoundingClientRect().top
    if (window.scrollY >= limite && window.scrollY < limite + 275) {
        div_mov.top = "30%"
        div_mov.position = "fixed"
        div_mov.display = "block"
        div_mov.right = window.scrollY - limite - 250 + "px"
    }else if (window.scrollY >= limite + 275 && window.scrollY < limite + 600) {
        div_mov.top = "30%"
        div_mov.position = "fixed"
        div_mov.display = "block"
        div_mov.right = "23px"
    }else if (window.scrollY >= limite + 600) {
        div_mov.top = 649 + "px"
        div_mov.position = "absolute"
        div_mov.display = "block"
        div_mov.right = "23px"
    } else {
        div_mov.display = "none"
    }
})