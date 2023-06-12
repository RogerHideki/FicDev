const readline = require('readline-sync');

const COTACAO_BTC = 126080.33;
const COTACAO_ETH = 8539.07;
const COTACAO_LTC = 375.18;

valido = (caso, valor) => {
    if (caso == 0) {
        if (valor === '' || isNaN(valor) || valor < 0) {
            console.log('\nValor inválido');
            return false;
        }
        return true;
    } else {
        return new Promise((resolve, reject) => {
            if (valor === '' || isNaN(valor) || valor <= 0) {
                reject(new Error('\nExpectativa de valorização inválida'));
            }
            resolve(null);
        });
    }
}

calcularQuantidadeAdquirida = (valorInvestido, cotacao) => valorInvestido / cotacao;

recalcularValorInvestido = (valorInvestido, valorizacao) => valorInvestido * (1 + valorizacao / 100);

calcularValorizacaoTotal = (valorEsperadoA, valorEsperadoB, valorEsperadoC, valorInvestidoA, valorInvestidoB, valorInvestidoC) => {
    return ((valorEsperadoA + valorEsperadoB + valorEsperadoC) / (valorInvestidoA + valorInvestidoB + valorInvestidoC)) - 1;
}

let valorInvestidoBtc;
do {
    valorInvestidoBtc = readline.question('\nDigite quantos reais deseja investir em Bitcoin: ');
} while (!valido(0, valorInvestidoBtc));
valorInvestidoBtc = parseFloat(valorInvestidoBtc);
console.log(`\nQuantidade de Bitcoin adquirida: ${calcularQuantidadeAdquirida(valorInvestidoBtc, COTACAO_BTC)}`);

let valorInvestidoEth;
do {
    valorInvestidoEth = readline.question('\nDigite quantos reais deseja investir em Ethereum: ');
} while (!valido(0, valorInvestidoEth));
valorInvestidoEth = parseFloat(valorInvestidoEth);
console.log(`\nQuantidade de Ethereum adquirida: ${calcularQuantidadeAdquirida(valorInvestidoEth, COTACAO_ETH)}`);

let valorInvestidoLtc;
do {
    valorInvestidoLtc = readline.question('\nDigite quantos reais deseja investir em Litecoin: ');
} while (!valido(0, valorInvestidoLtc));
valorInvestidoLtc = parseFloat(valorInvestidoLtc);
console.log(`\nQuantidade de Litecoin adquirida: ${calcularQuantidadeAdquirida(valorInvestidoLtc, COTACAO_LTC)}`);

let valorEsperadoBtc;
let valorEsperadoEth;
let valorEsperadoLtc;
let valorizacaoBtc = readline.question('\nDigite uma expectativa de valorização para o Bitcoin: ');
valido(1, valorizacaoBtc)
    .then(() => {
        valorizacaoBtc = parseFloat(valorizacaoBtc);
        let valorizacaoEth = readline.question('\nDigite uma expectativa de valorização para o Ethereum: ');
        valido(1, valorizacaoEth)
            .then(() => {
                valorizacaoEth = parseFloat(valorizacaoEth);
                let valorizacaoLtc = readline.question('\nDigite uma expectativa de valorização para o Litecoin: ');
                valido(1, valorizacaoLtc)
                    .then(() => {
                        valorizacaoLtc = parseFloat(valorizacaoLtc);

                        valorEsperadoBtc = recalcularValorInvestido(valorInvestidoBtc, valorizacaoBtc);
                        valorEsperadoEth = recalcularValorInvestido(valorInvestidoEth, valorizacaoEth);
                        valorEsperadoLtc = recalcularValorInvestido(valorInvestidoLtc, valorizacaoLtc);

                        console.log(`\nValor investido inicialmente em Bitcoin: ${valorInvestidoBtc}`);
                        console.log(`Valor total com a expectativa de valorização do Bitcoin: ${valorEsperadoBtc}`);
                        console.log(`\nValor investido inicialmente em Ethereum: ${valorInvestidoEth}`);
                        console.log(`Valor total com a expectativa de valorização do Ethereum: ${valorEsperadoEth}`);
                        console.log(`\nValor investido inicialmente em Litecoin: ${valorInvestidoLtc}`);
                        console.log(`Valor total com a expectativa de valorização do Litecoin: ${valorEsperadoLtc}`);

                        let valorizacaoTotal = calcularValorizacaoTotal(valorEsperadoBtc, valorEsperadoEth, valorEsperadoLtc, valorInvestidoBtc, valorInvestidoEth, valorInvestidoLtc);
                        console.log(`\nValorização total: ${valorizacaoTotal}%`);
                    })
                    .catch(e => console.error(e.message))
            })
            .catch(e => console.error(e.message))
    })
    .catch(e => console.error(e.message))