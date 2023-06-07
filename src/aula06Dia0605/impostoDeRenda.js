const readline = require('readline-sync');

function valido(valor) {
    if (valor === '' || isNaN(valor) || valor <= 0) {
        console.log('Valor inválido');
        return false;
    }
    return true;
}

function calcularIrrf(salario, inss, nDependentes) {
    let base = salario - inss - nDependentes * 189.59;
    if (base > 4664.68) return base * 0.275 - 884.96;
    if (base >= 3751.06) return base * 0.225 - 651.73;
    if (base >= 2826.66) return base * 0.15 - 370.40;
    if (base >= 2112.01) return base * 0.075 - 158.40;
    return 0;
}

let salario, nDependentes = 0, inss;
do {
    salario = readline.question('\nDigite o valor da renda mensal: ');
} while (!valido(salario));

console.log('\n[Z] <- -> [X]  SELECIONAR: [ESPAÇO]\n');
while (true) {
    console.log('\x1B[1A\x1B[2K' + 'Selecione a quantidade de dependentes: ' + nDependentes);
    tecla = readline.keyIn('', { hideEchoBack: true, mask: '', limit: 'zx ' });
    if (tecla === ' ') break;
    else if (tecla === 'z' && nDependentes > 0) nDependentes--;
    else if (tecla === 'x') nDependentes++;
}

do {
    inss = readline.question('\nDigite o valor pago a título de Previdência: ');
} while (!valido(inss));

console.log(`\nValor do Imposto de Renda: ${calcularIrrf(salario, inss, nDependentes).toFixed(2)} reais`);