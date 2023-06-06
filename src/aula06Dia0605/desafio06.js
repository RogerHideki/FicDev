const readline = require('readline-sync');

function calcularAreaRetangalo(base, altura) {
    return base * altura;
}

function valido(valor) {
    if (valor === '' || isNaN(valor) || valor <= 0) {
        console.log('Valor inválido');
        return false;
    }
    return true;
}

let base, altura;
do {
    base = readline.question('Digite o valor da base do retângulo: ');
} while (!valido(base));
do {
    altura = readline.question('Digite o valor da altura do retângulo: ');
} while (!valido(altura));

console.log (`Área do retângulo: ${calcularAreaRetangalo(base, altura)}`);