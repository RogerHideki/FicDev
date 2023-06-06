const readline = require('readline-sync');
const MAX = 120, MIN = 0;
let idade = 60, tecla;

console.log('\n' + (new Array(44)).join(' ') + '[Z] <- -> [X]  SELECIONAR: [ESPAÇO]\n');
while (true) {
    console.log('\x1B[1A\x1B[K|' + Array(idade + 1).join('-') + 'O' + 
                Array(MAX - idade + 1).join('-') + '| ' + idade);
    tecla = readline.keyIn('', {hideEchoBack: true, mask: '', limit: 'zx '});
    if (tecla === ' ') break;
    else if (tecla === 'z' && idade > MIN) idade--;
    else if (tecla === 'x' && idade < MAX) idade++;
}

condicoesMedicas = ['Diabetes', 'Hipertensão', 'Doenças cardíacas'];
condicaoMedica = readline.keyInSelect(condicoesMedicas, 'Qual sua condição médica?');

if (idade >= 18 && condicaoMedica != -1) console.log('\nA pessoa é elegível para a vacinação');
else console.log('\nA pessoa não é elegível para a vacinação');