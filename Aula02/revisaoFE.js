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
const inputNome = document.getElementById('nome');
const inputCargo = document.getElementById('cargo');
const inputCor = document.getElementById('cor');

const nomeCartao = document.getElementById('nomeCartao');
const cargoCartao = document.getElementById('cargoCartao');
const cor = document.getElementById('cartaoFundo');

inputNome.addEventListener('input', () => {
    nomeCartao.innerText = inputNome.value;
});

inputCargo.addEventListener('input', () => {
    cargoCartao.innerText = inputCargo.value;
});

inputCor.addEventListener('input', () => {
    cor.style.backgroundColor = inputCor.value;
});