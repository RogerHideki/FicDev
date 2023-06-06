const readline = require('readline-sync');

function calcularValorTotal(quantidade, valorUnitario) {
    return quantidade * valorUnitario;
}

function aplicarTaxa(origem, valorTotal) {
    if (origem == 0) return valorTotal;
    return 1.2 * valorTotal;
}

function aplicarPoliticaDePagamento(formaDePagamento, valorTotal) {
    let valorPagamento = new Object();
    if (formaDePagamento == 0) {
        valorPagamento.total = 0.9 * valorTotal;
        valorPagamento.parcela = valorPagamento.total;
    } else if (formaDePagamento == 1) {
        valorPagamento.total = 0.95 * valorTotal;
        valorPagamento.parcela = valorPagamento.total;
    } else if (formaDePagamento == 2) {
        valorPagamento.total = valorTotal;
        valorPagamento.parcela = valorTotal / 2;
    } else {
        valorPagamento.total = 1.03 * valorTotal;
        valorPagamento.parcela = valorPagamento.total / 10;
    }
    return valorPagamento;
}

console.log('[0] Nacional');
console.log('[1] Internacional\n');
let origem = readline.keyIn('Qual a origem do produto? [0, 1]: ', {limit: '01'});

const QUANTIDADE_MIN = 1;
let quantidade = 1;
console.log('\n[Z] <- -> [X]  SELECIONAR: [ESPAÇO]\n');
while (true) {
    console.log('\x1B[1A\x1B[2K' + 'Selecione a quantidade de produtos: ' + quantidade);
    tecla = readline.keyIn('', {hideEchoBack: true, mask: '', limit: 'zx '});
    if (tecla === ' ') break;
    else if (tecla === 'z' && quantidade > QUANTIDADE_MIN) quantidade--;
    else if (tecla === 'x') quantidade++;
}

let valorUnitario;
do {
    valorUnitario = readline.question('\nDigite o valor unitário do produto: ');
    if (valorUnitario === '' || isNaN(valorUnitario) || valorUnitario < 0) console.log('Valor inválido');
} while (valorUnitario === '' || isNaN(valorUnitario) || valorUnitario < 0);

let valorTotal = calcularValorTotal(quantidade, valorUnitario);
valorTotal = aplicarTaxa(origem, valorTotal);

console.log('\n[0] PIX com 10% de desconto');
console.log('[1] Boleto com 5% de desconto');
console.log('[2] Cartão de Crédito em 2x sem descontos');
console.log('[3] Cartão de Crédito em 10x com 3% de juros acrescidos ao valor total da compra\n');
let formaDePagamento = readline.keyIn('Qual a forma de pagamento? [0, 1, 2, 3]: ', {limit: '0123'});

let valorPagamento = aplicarPoliticaDePagamento(formaDePagamento, valorTotal);

console.log(`\nValor total a ser pago: ${valorPagamento.total.toFixed(2)} reais`);
console.log(`Valor da parcela a ser paga: ${valorPagamento.parcela.toFixed(2)} reais`);