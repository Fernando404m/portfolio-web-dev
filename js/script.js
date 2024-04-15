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
        top: ponto.offsetTop - 50,
        behavior: "smooth"
    })
}


// animação do sobre mim
var div_mov = document.querySelector("#mov_about_me").style
window.addEventListener("scroll",function() {
    var limite = this.document.getElementById("about_me").getBoundingClientRect().top

    // quando chegar ate o "limite" começar a se mover
    if (window.innerWidth <= 720) {
        if (window.scrollY >= limite && window.scrollY < (window.scrollY + limite) - 144) {
            div_mov.top = "111px"
            div_mov.position = "fixed"
            div_mov.display = "block"
            div_mov.right = (window.scrollY - limite) * (window.innerWidth/310) -  (window.innerWidth/100*80) + "px"
        }else if (window.scrollY >= (window.scrollY + limite) - 144 && window.scrollY < (window.scrollY + limite) + 306) {
            div_mov.top = "111px"
            div_mov.position = "fixed"
            div_mov.display = "block"
            div_mov.right = "8%"
        }else if (window.scrollY >= (window.scrollY + limite) + 306) {
            div_mov.top = 412 + "px"
            div_mov.position = "absolute"
            div_mov.display = "block"
            div_mov.right = "8%"
        } else {
            div_mov.display = "none"
        }
    }else {
        if (window.scrollY >= limite && window.scrollY < (window.scrollY + limite) - 144) {
            div_mov.top = "111px"
            div_mov.position = "fixed"
            div_mov.display = "block"
            div_mov.right = (window.scrollY - (window.scrollY + limite) + window.innerWidth/100*15) * 2 + "px"
        }else if (window.scrollY >= (window.scrollY + limite) - 144 && window.scrollY < (window.scrollY + limite) + 306) {
            div_mov.top = "111px"
            div_mov.position = "fixed"
            div_mov.display = "block"
            div_mov.right = "8%"
        }else if (window.scrollY >= (window.scrollY + limite) + 305) {
            div_mov.top = 412 + "px"
            div_mov.position = "absolute"
            div_mov.display = "block"
            div_mov.right = "8%"
        } else {
            div_mov.display = "none"
        }
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
                    document.getElementById("selecione_hab").style.right = posicao + window.innerWidth/100*108 + "px"
                }
                document.getElementById(hab_ant[0] + "_on").style.right = posicao + window.innerWidth/100*108 + "px"
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
    var concha = document.getElementById("concha")
    concha.style.position = "fixed"
    concha.classList.add("rodar")
    aumento = 2
    window.scrollBy({
        top: -5000, behavior: "smooth"
    })
    function move() {
        aumento += 22
        if (window.scrollY > 10) {
            concha.style.bottom = aumento + "%"
            setTimeout(function() {move()}, 150)
        }else {
            concha.style.position = "absolute"
            concha.style.bottom = "50px"
            concha.classList.remove("rodar")
        }
    }
    move()
}


// para desktop


// mudar entre com ou sem menu dependendo da largura
window.addEventListener("resize", function() {
    var menu = document.getElementById("dentro_menu")
    if (window.innerWidth <= 720) {
        menu.style.display = "none"
    }else {
        menu.style.display = "flex"
    }
})


// animação do perfil
var perfil_html = document.getElementById("perfil_html")
var perfil_css = document.getElementById("perfil_css")
var perfil_js = document.getElementById("perfil_js")
var barra_divisao = document.getElementById("divisoria_perfil")
var posi_animaçao = 50
var ativado = false

function animação_perfil() {
    if (window.innerWidth >= 1260) {
        ativado = true
        if (posi_animaçao <= 300) {
            if (posi_animaçao >= 0 && posi_animaçao <= 100) {
                perfil_html.style.top = posi_animaçao + "px"
                perfil_css.style.top = 100 + posi_animaçao + "px"
                perfil_js.style.top = 200 + posi_animaçao +"px"
                perfil_js.style.zIndex = 1
                perfil_css.style.zIndex = 2
                perfil_html.style.zIndex = 0
            }else if (posi_animaçao > 100 && posi_animaçao <= 200) {
                perfil_html.style.top = posi_animaçao + "px"
                perfil_css.style.top = 100 + posi_animaçao + "px"
                perfil_js.style.top = -100 + posi_animaçao +"px"
                perfil_js.style.zIndex = 0
                perfil_css.style.zIndex = 1
                perfil_html.style.zIndex = 2
            }else if (posi_animaçao > 200) {
                perfil_html.style.top = posi_animaçao + "px"
                perfil_css.style.top = posi_animaçao - 200 + "px"
                perfil_js.style.top = posi_animaçao - 100 +"px"
                perfil_js.style.zIndex = 2
                perfil_css.style.zIndex = 0
                perfil_html.style.zIndex = 1
            }

            if (posi_animaçao > 90 && posi_animaçao < 210) {
                perfil_js.style.opacity = 0
                perfil_css.style.opacity = 0
                perfil_html.style.opacity = 1
                barra_divisao.style.backgroundImage = "linear-gradient(90deg, rgba(34, 34, 34, 0.575), rgba(85, 44, 44, 0.356))"
            }else if (posi_animaçao > 190 || posi_animaçao < 10) {
                perfil_js.style.opacity = 1
                perfil_css.style.opacity = 0
                perfil_html.style.opacity = 0
                barra_divisao.style.backgroundImage = "linear-gradient(90deg, rgba(34, 34, 34, 0.575), rgba(85, 82, 44, 0.356))"
            }else if (posi_animaçao > 290 || posi_animaçao < 110){
                perfil_js.style.opacity = 0
                perfil_css.style.opacity = 1
                perfil_html.style.opacity = 0
                barra_divisao.style.backgroundImage = "linear-gradient(90deg, rgba(34, 34, 34, 0.575), rgba(44, 66, 85, 0.356))"
            }
            posi_animaçao += 5
            setTimeout(function() {animação_perfil()}, 150)
        }else {
            posi_animaçao = 0
            setTimeout(function() {animação_perfil()}, 150)
        }
    }else {
        ativado = false
    }
}


// animaçao das estrelas do background do about me
var posi_bg = 0
var bgs = document.querySelectorAll(".estrela")
var ativado2 = false
function estrelas() {
    if (window.innerWidth >= 1260) {
        ativado2 = true
        if (window.scrollY > 50 && window.scrollY < 1800) {
            if (posi_bg < 1000) {
            bgs.forEach(function(bg) {bg.style.backgroundPosition = `${posi_bg}px ${posi_bg}px`})
            posi_bg += 1
            setTimeout(function() {estrelas()}, 200)
            }else {
            posi_bg = 0
            setTimeout(function() {estrelas()}, 200)
            }
        }else {
            setTimeout(function() {estrelas()}, 200)
        }
    }else {
        ativado2 = false
    }
}

// executar
if (window.innerWidth >= 1260) {
    animação_perfil()
    estrelas()
}
window.addEventListener("resize",function() {
    if (ativado == false) {animação_perfil()}
    if (ativado2 == false) {estrelas()}
})
