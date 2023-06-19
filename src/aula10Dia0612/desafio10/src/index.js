const readline = require('readline-sync');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const database = require('./database/config/db');
const Aluno = require('./database/models/aluno');

valido = (caso, valor) => {
    return new Promise((resolve, reject) => {
        if (caso == 1) {
            if (valor === '' || !isNaN(valor)) {
                reject(new Error('\nNome inválido'));
                return;
            }
        } else if (caso == 2) {
            const date = new Date();
            if (valor === '' || isNaN(valor) || valor < 1 || valor > date.getFullYear()) {
                reject(new Error('\nAno inválido'));
                return;
            }
        } else if (caso == 3) {
            if (valor === '' || isNaN(valor) || valor < 1 || valor > 31) {
                reject(new Error('\nDia inválido'));
                return;
            }
        } else if (caso == 4) {
            if (valor === '' || !isNaN(valor)) {
                reject(new Error('\nCurso inválido'));
                return;
            }
        } else {
            if (valor === '' || isNaN(valor)) {
                reject(new Error('\nId inválido'));
                return;
            }
        }
        resolve(null);
    });
}

cadastrar = async (caso, id) => {
    let nome = readline.question('\nDigite o nome do aluno: ');
    await valido(1, nome)
        .then(async () => {
            console.log('\nQual o sexo do aluno?');
            console.log('\n[f] Feminino');
            console.log('[m] Masculino');
            let sexo = readline.keyIn('\nEscolha uma das opções. [f, m]: ', { limit: 'fm' });

            let anoNascimento = readline.question('\nDigite a ano de nascimento do aluno: ');
            await valido(2, anoNascimento)
                .then(async () => {
                    let mesNascimento = 1;
                    console.log('\n[Z] <- -> [X]  SELECIONAR: [ESPAÇO]\n');
                    while (true) {
                        console.log('\x1B[1A\x1B[2K' + 'Selecione o mês de nascimento do aluno: ' + mesNascimento);
                        tecla = readline.keyIn('', { hideEchoBack: true, mask: '', limit: 'zx ' });
                        if (tecla === ' ') break;
                        else if (tecla === 'z' && mesNascimento > 1) mesNascimento--;
                        else if (tecla === 'x' && mesNascimento < 12) mesNascimento++;
                    }

                    let diaNascimento = readline.question('\nDigite a dia de nascimento do aluno: ');
                    await valido(3, diaNascimento)
                        .then(async () => {
                            let curso = readline.question('\nDigite o curso do aluno: ');
                            await valido(4, curso)
                                .then(async () => {
                                    console.log('\nO aluno cursa ensino superior?');
                                    console.log('\n[s] Sim');
                                    console.log('[n] Não');
                                    let cursaEnsinoSuperior = readline.keyIn('\nEscolha uma das opções. [s, n]: ', { limit: 'sn' });
                                    if (cursaEnsinoSuperior == 's') cursaEnsinoSuperior = true;
                                    else cursaEnsinoSuperior = false;

                                    console.log('\nO aluno estagia?');
                                    console.log('\n[s] Sim');
                                    console.log('[n] Não');
                                    let estagia = readline.keyIn('\nEscolha uma das opções. [s, n]: ', { limit: 'sn' });
                                    if (estagia == 's') estagia = true;
                                    else estagia = false;

                                    await database.sync();
                                    if (caso == 1) {
                                        await Aluno.create({
                                            nome: `${nome}`,
                                            sexo: `${sexo}`,
                                            dataNascimento: `${anoNascimento}-${mesNascimento}-${diaNascimento}`,
                                            curso: `${curso}`,
                                            cursaEnsinoSuperior: `${cursaEnsinoSuperior}`,
                                            estagia: `${estagia}`,
                                        })
                                    } else {
                                        await Aluno.update({
                                            nome: `${nome}`,
                                            sexo: `${sexo}`,
                                            dataNascimento: `${anoNascimento}-${mesNascimento}-${diaNascimento}`,
                                            curso: `${curso}`,
                                            cursaEnsinoSuperior: `${cursaEnsinoSuperior}`,
                                            estagia: `${estagia}`,
                                        }, {
                                            where: {
                                                id: `${id}`
                                            }
                                        });
                                    }
                                })
                                .catch(e => console.error(e.message))
                        })
                        .catch(e => console.error(e.message))
                })
                .catch(e => console.error(e.message))
        })
        .catch(e => console.error(e.message))
}

alterar = async () => {
    let id = readline.question('\nDigite o id do aluno a ser alterado: ');
    await valido(5, id)
        .then(async () => {
            cadastrar(2, id);
        })
        .catch(e => console.error(e.message))
}

excluir = async () => {
    let id = readline.question('\nDigite o id do aluno a ser excluído: ');
    await valido(5, id)
        .then(async () => {
            await database.sync();

            await Aluno.destroy({
                where: {
                    id: `${id}`
                }
            });
        })
        .catch(e => console.error(e.message))
}

listar = async () => {
    await database.sync();

    const alunos = await Aluno.findAll();
    console.log("Todos os alunos:", JSON.stringify(alunos, null, 2));
}

pesquisar = async () => {
    let nome = readline.question('\nDigite o nome do aluno a ser pesquisado: ');

    await database.sync();

    const aluno = await Aluno.findAll({
        where: {
            nome: {
                [Op.eq]: `${nome}`
            }
        }
    });

    if (aluno.length) console.log(JSON.stringify(aluno, null, 2));
    else console.log('\nAluno não encontrado');
}

async function main() {
    let opcao;
    do {
        console.log('\n[1] Incluir aluno');
        console.log('[2] Alterar aluno');
        console.log('[3] Excluir aluno');
        console.log('[4] Listar alunos');
        console.log('[5] Pesquisar aluno');
        console.log('[6] Sair do programa');
        opcao = readline.keyIn('\nEscolha uma das opções. [1, 2, 3, 4, 5, 6]: ', { limit: '123456' });
        if (opcao == 1) {
            await cadastrar(1);
        } else if (opcao == 2) {
            await alterar();
        } else if (opcao == 3) {
            await excluir();
        } else if (opcao == 4) {
            await listar();
        } else if (opcao == 5) {
            await pesquisar();
        }
    } while (opcao != 6);
}

main();