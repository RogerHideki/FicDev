const readline = require('readline-sync');
const database = require('./database/config/db');
const Pessoa = require('./database/models/pessoa');

async function buscaEndereco(cep) {
    return new Promise(async (resolve, reject) => {
        try {
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            const response = await fetch(url, { method: "GET" });
            const data = await response.json();
            if (data.erro) reject(new Error('CEP não encontrado.'));
            else resolve(data);
        } catch {
            reject(new Error('CEP inválido'));
        }
    });
}

async function cadastrar() {
    let nome = readline.question('\nDigite o nome da pessoa: ');
    if (nome === '' || !isNaN(nome)) {
        console.log('\nNome inválido');
        return;
    }

    let cep = readline.question('\nDigite o CEP da pessoa: ');
    await buscaEndereco(cep)
        .then(async () => {
            await database.sync();
            await Pessoa.create({
                nome: `${nome}`,
                cep: `${cep}`
            })
        })
        .catch(e => console.error(e.message))
}

async function main() {
    let opcao;
    do {
        console.log('\n[1] Cadastrar pessoa');
        console.log('[2] Sair do programa');
        opcao = readline.keyIn('\nEscolha uma das opções. [1, 2]: ', { limit: '12' });
        if (opcao == 1) await cadastrar();
    } while (opcao != 2);
}

main();