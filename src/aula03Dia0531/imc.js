let peso = prompt('Digite o peso (em kg): ');
let altura = prompt('Digite a altura (em metros): ');

let imc = peso / altura ** 2;
console.log(`IMC: ${imc}`);