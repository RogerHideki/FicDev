const readline = require('readline-sync');

valido = (caso, valor) => {
    return new Promise((resolve, reject) => {
        if (caso == 1) {
            if (valor === '' || !isNaN(valor)) {
                reject(new Error('\nNome inválido'));
                return;
            }
        } else if (caso == 2) {
            if (valor === '') {
                reject(new Error('\nCódigo de registro inválido'));
                return;
            }
        } else {
            if (valor === '' || !isNaN(valor)) {
                reject(new Error('\nUnidade da Federação inválida'));
                return;
            }
        }
        resolve(null);
    });
}

async function main() {
    let opcao;
    do {
        console.log('\n[1] Incluir nutricionistas');
        console.log('[2] Sair do programa');
        opcao = readline.keyIn('\nEscolha uma das opções. [1, 2]: ', { limit: '12' });
        if (opcao == 1) {
            let nome = readline.question('\nDigite o nome da nutricionista: ');
            await valido(1, nome)
                .then(async () => {
                    let crn = readline.question('\nDigite o código de registro no Conselho Regional da nutricionista: ');
                    await valido(2, crn)
                        .then(async () => {
                            let uf = readline.question('\nDigite a Unidade da Federação da nutricionista: ');
                            await valido(3, uf)
                                .then(async () => {
                                    const Sequelize = require('sequelize');
                                    const Op = Sequelize.Op;
                                    const database = require('./database/config/db');
                                    const DadosDeNutricionistas = require('./database/models/dadosdenutricionistas');
                                    await database.sync();

                                    const dadosDeNutricionistas = await DadosDeNutricionistas.create({
                                        nome: `${nome}`,
                                        crn: `${crn}`,
                                        uf: `${uf}`
                                    })
                                })
                                .catch(e => console.error(e.message))
                        })
                        .catch(e => console.error(e.message))
                })
                .catch(e => console.error(e.message))
        }
    } while (opcao != 2);
}

main();