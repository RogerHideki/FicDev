const readline = require('readline-sync');

function ler(mensagem) {
    return readline.question(mensagem);
}

function valido(caso, valor) {
    if (caso == 1) {
        if (valor === '' || isNaN(valor) || valor <= 0) {
            console.log('Salario inválido');
            return false;
        }
    } else {
        if (valor === '' || isNaN(valor) || valor < 0 || valor > 105) {
            console.log('Tempo de serviço inválido');
            return false;
        }
    }
    return true;
}

function calcularBonusSalarial(salario, tempoDeServico) {
    let bonusSalarial = 0;
    if (tempoDeServico >= 5) bonusSalarial = 0.1 * salario;
    else if (tempoDeServico >= 1) bonusSalarial = 0.05 * salario;
    return bonusSalarial.toFixed(2);
}

let salario, tempoDeServico;
do {
    salario = ler('Digite o salário mensal do funcionário: ');
} while (!valido(1, salario));
do {
    tempoDeServico = ler('Digite o tempo de serviço do funcionário em anos: ');
} while (!valido(2, tempoDeServico));

console.log(`O bônus salarial do funcionário é de ${calcularBonusSalarial(salario, tempoDeServico)} reais.`);