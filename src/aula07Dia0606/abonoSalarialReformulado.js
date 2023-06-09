const readline = require('readline-sync');

const valido = (caso, valor) => {
    return new Promise((resolve, reject) => {
        if (caso == 1) {
            if (valor === '' || isNaN(valor) || valor <= 0) {
                reject(new Error('Salario inválido'));
                resolve(false);
            }
        } else {
            if (valor === '' || isNaN(valor) || valor < 0 || valor > 105) {
                reject(new Error('Tempo de serviço inválido'));
                resolve(false);
            }
        }
        resolve(true);
    });
}

const bonusSalarial = (salario, tempoDeServico) => {
    let bonusSalarial = 0;
    if (tempoDeServico >= 5) bonusSalarial = 0.1 * salario;
    else if (tempoDeServico >= 1) bonusSalarial = 0.05 * salario;
    return bonusSalarial.toFixed(2);
}

let salario, tempoDeServico;

salario = readline.question('Digite o salário mensal do funcionário: ');
valido(1, salario).catch(error => {
    console.error(error.message);
})

tempoDeServico = readline.question('Digite o tempo de serviço do funcionário em anos: ');
valido(2, tempoDeServico).catch(error => {
    console.error(error.message);
})

console.log(`O bônus salarial do funcionário é de ${bonusSalarial(salario, tempoDeServico)} reais.`);