// Função que classifica o número como par ou como impar
function verificarParOuImpar(numero) {
    if (numero % 2) return "ímpar";
    return "par";
}

const NUMEROS = [10, 20, 30, 40, 50];

let soma = 0;
for (let i = 0; i < NUMEROS.length; i++) soma += NUMEROS[i];

console.log("Soma dos números:", soma);
console.log("Média dos números:", (soma / NUMEROS.length).toFixed(2));
console.log("Classificação dos números:");
for (let i = 0; i < NUMEROS.length; i++)
    console.log(`${NUMEROS[i]} é ${verificarParOuImpar(NUMEROS[i])}`);