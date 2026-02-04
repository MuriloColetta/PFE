// Exercício 1
function transformar() {
    let c = document.getElementById('temperatura').value
    let f = c * 1.8 + 32
    let temperaturaF = document.getElementById('temperaturaF')

    temperaturaF.innerHTML = `${f}°F`

    if (f > 80) {
        document.getElementById('temperaturaFundo').style.backgroundColor = 'orange';
    } else {
        document.getElementById('temperaturaFundo').style.backgroundColor = 'lightskyblue'
    }
}

// Exercício 2
let nome = document.getElementById('nome').value
let nomeCartao = document.getElementById('nomeCartao')
let cargo = document.getElementById('cargo').value
let cargoCartao = document.getElementById('cargoCartao')
let cor = document.getElementById('cor').value

nomeCartao.innerHTML = nome
cargoCartao.innerHTML = cargo
document.getElementById('cartaoFundo').style.backgroundColor = cor