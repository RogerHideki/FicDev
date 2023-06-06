const readline = require('readline-sync');

const salario = Number(readline.question('Digite o salário mensal do funcionário: '));
const tempoDeServico = Number(readline.question('Digite o tempo de serviço do funcionário em anos: '));

let bonusSalarial = 0;
if (tempoDeServico >= 5) bonusSalarial = 0.1 * salario;
else if (tempoDeServico >= 1) bonusSalarial = 0.05 * salario;

console.log(`O bônus salarial do funcionário é de ${bonusSalarial.toFixed(2)} reais.`);