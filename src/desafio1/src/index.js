const readline = require('readline-sync');

valido = (caso, valor) => {
    return new Promise((resolve, reject) => {
        if (caso == 1) {
            if (valor === '' || !isNaN(valor)) {
                reject(new Error('Nome inválido'));
                return;
            }
        } else if (caso == 2) {
            if (valor === '') {
                reject(new Error('Código de registro inválido'));
                return;
            }
        } else {
            if (valor === '' || !isNaN(valor)) {
                reject(new Error('Unidade da Federação inválida'));
                return;
            }
        }
        resolve(null);
    });
}

let opcao;
console.log('\n[1] Incluir nutricionistas');
console.log('[2] Sair do programa');
opcao = readline.keyIn('\nEscolha uma das opções. [1, 2]: ', { limit: '12' });
if (opcao == 1) {
    let nome = readline.question('Digite o nome da nutricionista: ');
    valido(1, nome)
        .then(() => {
            let crn = readline.question('Digite o código de registro no Conselho Regional da nutricionista: ');
            valido(2, crn)
                .then(() => {
                    let uf = readline.question('Digite a Unidade da Federação da nutricionista: ');
                    valido(3, uf)
                        .then(() => {
                            //insert
                        })
                        .catch(e => console.error(e.message))
                })
                .catch(e => console.error(e.message))
        })
        .catch(e => console.error(e.message))
}