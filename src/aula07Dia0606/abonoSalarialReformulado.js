const readline = require('readline-sync');

valido = (caso, valor) => {
    return new Promise((resolve, reject) => {
        if (caso == 1) {
            if (valor === '' || isNaN(valor) || valor <= 0) {
                reject(new Error('Salario inválido'));
            }
        } else {
            if (valor === '' || isNaN(valor) || valor < 0 || valor > 105) {
                reject(new Error('Tempo de serviço inválido'));
            }
        }
        resolve(null);
    });
}

bonusSalarial = (salario, tempoDeServico) => {
    let bonusSalarial = 0;
    if (tempoDeServico >= 5) bonusSalarial = 0.1 * salario;
    else if (tempoDeServico >= 1) bonusSalarial = 0.05 * salario;
    return bonusSalarial.toFixed(2);
}

let salario = readline.question('Digite o salário mensal do funcionário: ');
valido(1, salario)
    .then(() => {
        let tempoDeServico = readline.question('Digite o tempo de serviço do funcionário em anos: ');
        valido(2, tempoDeServico)
            .then(() => console.log(`O bônus salarial do funcionário é de ${bonusSalarial(salario, tempoDeServico)} reais.`))
            .catch(e => console.error(e.message))
    })
    .catch(e => console.error(e.message))