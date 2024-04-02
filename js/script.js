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

    //quando chegar ate o "limite" começar a se mover
    
    if (window.scrollY >= limite && window.scrollY < limite + 275) {
        div_mov.top = "30%"
        div_mov.position = "fixed"
        div_mov.display = "block"
        div_mov.right = (window.scrollY - limite) * (window.innerWidth/310) -  (window.innerWidth/100*80) + "px"
    }else if (window.scrollY >= limite + 275 && window.scrollY < limite + 1000) {
        div_mov.top = "30%"
        div_mov.position = "fixed"
        div_mov.display = "block"
        div_mov.right = "8%"
    }else if (window.scrollY >= limite + 1000) {
        var acrescimo = window.innerHeight - 568
        div_mov.top = 471 + acrescimo/3 + "px"
        div_mov.position = "absolute"
        div_mov.display = "block"
        div_mov.right = "8%"
    } else {
        div_mov.display = "none"
    }
})