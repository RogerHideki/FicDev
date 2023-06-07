function contarPalavras(frase) {
    let palavras = new Object();
    let chave = '', valor = 0;
    for (let i = 0; i <= frase.length; i++) {
        if (i != frase.length && frase[i] != ' ') {
            chave += frase[i];
            valor++;
        } else if (valor != 0) {
            palavras[chave] = valor;
            chave = '';
            valor = 0;
        }
    }
    return palavras;
}

const frase = 'Eu gosto de batata frita';

let palavras = contarPalavras(frase);

for (let chave in palavras) {
    console.log(`${chave}: ${palavras[chave]} letras`);
}