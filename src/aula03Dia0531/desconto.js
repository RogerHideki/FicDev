let valorDoProduto = prompt('Digite o valor de um produto:');
let desconto = prompt('Digite o percentual de desconto a ser aplicado:');

let valorFinal = valorDoProduto * (1 - desconto/100);

console.log(`Valor final com o desconto: ${valorFinal.toFixed(2)} reais`);