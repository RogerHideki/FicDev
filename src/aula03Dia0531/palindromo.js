const PALAVRA = 'arara';

let i;
for (i = 0; i < Math.floor(PALAVRA.length / 2); i++) {
    if (PALAVRA[i] != PALAVRA[PALAVRA.length - 1 - i]) {
        console.log('A palavra não é um palíndromo');
        break;
    }
}
if (i == Math.floor(PALAVRA.length / 2)) console.log('A palavra é um palíndromo');