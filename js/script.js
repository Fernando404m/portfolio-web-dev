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

    // quando chegar ate o "limite" começar a se mover
    if (window.scrollY >= limite && window.scrollY < limite + 275) {
        div_mov.top = "30%"
        div_mov.position = "fixed"
        div_mov.display = "block"
        div_mov.right = (window.scrollY - limite) * (window.innerWidth/310) -  (window.innerWidth/100*80) + "px"
    }else if (window.scrollY >= limite + 275 && window.scrollY < limite + 1140) {
        div_mov.top = "30%"
        div_mov.position = "fixed"
        div_mov.display = "block"
        div_mov.right = "8%"
    }else if (window.scrollY >= limite + 1140) {
        var acrescimo = window.innerHeight - 568
        div_mov.top = 451 + acrescimo/3 + "px"
        div_mov.position = "absolute"
        div_mov.display = "block"
        div_mov.right = "8%"
    } else {
        div_mov.display = "none"
    }
})


// mostrar habilidades
var hab_ant = []
function mostra(hab) {
    if (hab_ant.length < 2) {
    hab_ant.push(hab)
    }else {
        hab_ant.shift()
        hab_ant.push(hab)
    }
    if (hab_ant[0] != hab_ant[1] || hab_ant.length == 0) {
        var hab_mov = document.getElementById(hab + "_on")
        hab_mov.style.display = "block"
        
        // animação da habilidade
        var posicao = -(window.innerWidth)
        function move() {
            if (posicao < window.innerWidth/100*8) {
                posicao += 2
                document.getElementById(hab_ant[0] + "_on").style.right = posicao + window.innerWidth + "px"
                hab_mov.style.right = posicao + "px"
                // trava
                document.getElementById("html").disabled = true
                document.getElementById("css").disabled = true
                document.getElementById("javascript").disabled = true
                document.getElementById("ingles").disabled = true
                setTimeout(function() {move()}, 1)
            }else {
                if (hab_ant.length > 1) {
                    document.getElementById(hab_ant[0] + "_on").style.display = "none"
                    
                }
                // destrava
                document.getElementById("html").disabled = false
                document.getElementById("css").disabled = false
                document.getElementById("javascript").disabled = false
                document.getElementById("ingles").disabled = false
            }
        }
        move()
    }
}
