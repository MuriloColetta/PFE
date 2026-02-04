//Exercício 1
function verImportancia() {
    let horario = Number(document.getElementById('horario').value)
    let prioridade = Number(document.getElementById('prioridade').value)
    let periodo = ''

    if (horario >= 0 && horario <= 11) {
        periodo = 'manha'
    } else if (horario >= 12 && horario <= 17) {
        periodo = 'tarde'
    } else if (horario >= 18 && horario <= 23) {
        periodo = 'noite'
    } else {
        alert('Horário inválido')
        return
    }

    if (prioridade < 1 || prioridade > 11) {
        alert('Nível de prioridade inválido')
        return
    }

    if ((periodo === 'manha' || periodo === 'tarde') && prioridade > 8) {
        alert('TAREFA CRÍTICA/URGENTE')
    } else if ((periodo === 'manha' || periodo === 'tarde') && prioridade >= 7 && prioridade <= 8) {
        alert('TAREFA IMPORTANTE')
    } else {
        alert('TAREFA NÃO IMPORTANTE')
    }
}

// Exercício 2
function calcularSaldo() {
    let salario = parseFloat(document.getElementById('salario').value)
    let aluguel = parseFloat(document.getElementById('aluguel').value)
    let alimentacao = parseFloat(document.getElementById('alimentacao').value)
    let lazer = parseFloat(document.getElementById('lazer').value)
    let saldo = salario - aluguel - alimentacao - lazer
    let despesa = aluguel + alimentacao + lazer

    if (saldo > 0) {
        alert(`Salario: R$${salario} Despesas: R$${despesa}`)
        alert(`Saldo Positivo: R$${saldo}`)
    } else if (saldo == 0) {
        alert(`Salario: R$${salario} Despesas: R$${despesa}`)
        alert(`No Limite: R$${saldo}`)
    } else {
        alert(`Salario: R$${salario} Despesas: R$${despesa}`)
        alert(`Saldo Negativo: R$${saldo}`)
    }
}

// Exercício 3
function limparNomeContato() {
    let nome = document.getElementById('nome').value
    let resultado = nome.trim().toUpperCase()
    let quantidade = resultado.split(' ').length

    alert(`String formada: ${resultado}`)
    alert(`Quantidade de palavras: ${quantidade}`)
}

// Exercício 4
function calcularTempo() {
    const dataHoje = new Date ()
    const dataEvento = new Date (2026, 2, 25)

    const ms = dataEvento - dataHoje
    const dias = ms / 86400000
    const diasArredondado = Math.ceil(dias)

    let tempo = document.getElementById('tempo')
    tempo.innerHTML = `Faltam ${diasArredondado} dias para o seu compromisso!`
}

// Exercício 5
function filtrarAgenda() {
    let agendaHorarios = [8, 12, 25, 15, -2, 20]
    let mensagem = document.getElementById('mensagem')
    let contagemValidos = 0

    for (h of agendaHorarios)  {
        if (h < 0 || h > 23) {
            mensagem.innerHTML += `Atenção: O horário ${h}h é inválido! <br>`
        } else {
            mensagem.innerHTML += `Compromisso agendado para as ${h}h <br>`
            contagemValidos++;
       }
    }
    mensagem.innerHTML = `Numero de horários validos: ${contagemValidos}`
}