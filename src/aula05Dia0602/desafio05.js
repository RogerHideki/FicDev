const readline = require('readline-sync');

function cadastrarAluno() {
    let aluno = new Object();
    do {
        aluno.nome = readline.question('Digite o nome do aluno: ');
        if (aluno.nome === '' || !isNaN(aluno.nome)) console.log('Nome inválido');
    } while (aluno.nome === '' || !isNaN(aluno.nome));
    do {
        aluno.idade = readline.question('Digite a idade do aluno: ');
        if (aluno.idade === '' || isNaN(aluno.idade) || aluno.idade < 0) console.log('Idade inválida');
    } while (aluno.idade === '' || isNaN(aluno.idade) || aluno.idade < 0);
    do {
        aluno.curso = readline.question('Digite o curso do aluno: ');
        if (aluno.curso === '' || !isNaN(aluno.curso)) console.log('Curso inválido');
    } while (aluno.curso === '' || !isNaN(aluno.curso));
    aluno.dataNascimento = new Object();
    do {
        aluno.dataNascimento.ano = readline.question('Digite o ano de nascimento do aluno: ');
        if (aluno.dataNascimento.ano === '' || isNaN(aluno.dataNascimento.ano) || aluno.dataNascimento.ano < 1) {
            console.log('Ano inválido');
        }
    } while (aluno.dataNascimento.ano === '' || isNaN(aluno.dataNascimento.ano) || aluno.dataNascimento.ano < 1);
    do {
        aluno.dataNascimento.mes = readline.question('Digite o mês de nascimento do aluno: ');
        if (aluno.dataNascimento.mes === '' || isNaN(aluno.dataNascimento.mes) || aluno.dataNascimento.mes < 1 || aluno.dataNascimento.mes > 12) {
            console.log('Mês inválido');
        }
    } while (aluno.dataNascimento.mes === '' || isNaN(aluno.dataNascimento.mes) || aluno.dataNascimento.mes < 1 || aluno.dataNascimento.mes > 12);
    do {
        aluno.dataNascimento.dia = readline.question('Digite o dia de nascimento do aluno: ');
        if (aluno.dataNascimento.dia === '' || isNaN(aluno.dataNascimento.dia) || aluno.dataNascimento.dia < 1 || aluno.dataNascimento.dia > 31) {
            console.log('Dia inválido');
        }
    } while (aluno.dataNascimento.dia === '' || isNaN(aluno.dataNascimento.dia) || aluno.dataNascimento.dia < 1 || aluno.dataNascimento.dia > 31);
    aluno.notas = [];
    aluno.media = 0;
    disciplinas.forEach(disciplina => {
        let nota;
        do {
            nota = readline.question(`Digite a nota do aluno na disciplina de ${disciplina}: `);
            if (nota === '' || isNaN(nota) || nota < 0 || nota > 10) console.log('Nota inválida');
        } while (nota === '' || isNaN(nota) || nota < 0 || nota > 10);
        aluno.notas.push(nota);
        aluno.media += Number(nota);
    });
    aluno.media /= disciplinas.length;
    alunos.push(aluno);
}

function consultarAluno(aluno) {
    console.log(`\nInformações do aluno cadastrado:`)
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Curso: ${aluno.curso}`);
    console.log(`Data de Nascimento: ${aluno.dataNascimento.dia.padStart(2, 0)}/${aluno.dataNascimento.mes.padStart(2, 0)}/${aluno.dataNascimento.ano}`);
    disciplinas.forEach(function (disciplina, idx) {
        console.log(`Nota na disciplina de ${disciplina}: ${aluno.notas[idx]}`);
    });
    console.log(`Média final: ${aluno.media}\n`);
}

const disciplinas = ['Matemática', 'Ciências', 'História', 'Geografia'];

let nAlunos
do {
    nAlunos = readline.question('Digite a quantidade de alunos que serão cadastrados: ');
    if (nAlunos === '' || isNaN(nAlunos) || nAlunos < 1) console.log('Quantidade inválida');
} while (nAlunos === '' || isNaN(nAlunos) || nAlunos < 1);

let alunos = [];
for (let i = 0; i < nAlunos; i++) {
    cadastrarAluno();
    consultarAluno(alunos[i]);
}