// barra de nav
var dentro_menu = document.getElementById("dentro_menu")
function menu() {
    if (dentro_menu.style.display == "flex") {
        dentro_menu.style.display = "none"
    } else {
        dentro_menu.style.display = "flex"
    }
}

// ir ate um ponto pelo nav
function ir_para(ponto) {
    if (ponto == "grama") {
        document.getElementById("terra").style.display = "block"
    }
    var ponto = document.getElementById(ponto)
    window.scrollTo({
        top: ponto.offsetTop,
        behavior: "smooth"
    })
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
    if (hab_ant[0] != hab_ant[1] || hab_ant.length == 1) {
        document.getElementById("html").style.padding = "3px"
        document.getElementById("css").style.padding = "3px"
        document.getElementById("javascript").style.padding = "3px"
        document.getElementById("ingles").style.padding = "3px"
        document.getElementById("html").style.backgroundColor = "rgb(196, 196, 196)"
        document.getElementById("css").style.backgroundColor = "rgb(196, 196, 196)"
        document.getElementById("javascript").style.backgroundColor = "rgb(196, 196, 196)"
        document.getElementById("ingles").style.backgroundColor = "rgb(196, 196, 196)"
        document.getElementById(hab).style.padding = "5px"
        document.getElementById(hab).style.backgroundColor = "rgb(104, 104, 104)"
        
        var hab_mov = document.getElementById(hab + "_on")
        hab_mov.style.display = "block"
        
        // animação da habilidade
        var posicao = -(window.innerWidth)
        function move() {
            if (posicao < window.innerWidth/100*8) {
                posicao += 2
                if (hab_ant.length == 1) {
                    document.getElementById("selecione_hab").style.right = posicao + window.innerWidth + "px"
                }
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


// mostrar contatos
var terra = document.getElementById("terra")
function contatos() {
    if (terra.style.display == "block") {
        terra.style.display = "none"
    }else {
        terra.style.display = "block"
        window.scrollBy({
            top: 500, behavior: "smooth"
        })
    }
}


// voltar para o inicio pela concha
function do_zero() {
    var concha = document.getElementById("concha").style
    concha.position = "fixed"
    aumento = 2
    window.scrollBy({
        top: -5000, behavior: "smooth"
    })
    function move() {
        aumento +=20
        if (window.scrollY > 10) {
            concha.bottom = aumento + "%"
            setTimeout(function() {move()}, 150)
        }else {
            concha.position = "absolute"
            concha.bottom = "50px"
        }
    }
    move()
}
