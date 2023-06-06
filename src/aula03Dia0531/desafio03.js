const numero1 = Number(prompt('Digite o primeiro número: '));
const numero2 = Number(prompt('Digite o segundo número: '));

console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);

if (numero1 == numero2) console.log('Os dois números são iguais entre si.')
else {
    console.log('Os dois números são diferentes entre si.');
    console.log(`O maior número é ${(numero1 > numero2 ? numero1 : numero2)}.`);
}