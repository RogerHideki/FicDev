const readline = require('readline-sync');
const TarefaController = require('./tarefaController');

const tarefaController = new TarefaController();

let opcao;
do {
    console.log('\n[1] Criar tarefa');
    console.log('[2] Listar tarefas');
    console.log('[3] Deletar tarefa');
    console.log('[4] Sair do programa');
    opcao = readline.keyIn('\nEscolha uma das opções. [1, 2, 3, 4]: ', { limit: '1234' });
    if (opcao == 1) {
        let descricao = readline.question('\nDigite uma descrição para a tarefa: ');
        tarefaController.criarTarefa(descricao);
    } else if (opcao == 2) {
        tarefaController.listarTarefas();
    } else if (opcao == 3) {
        let id = readline.question('\nDigite o ID da tarefa que será deletada: ');
        tarefaController.deletarTarefa(id);
    }
} while (opcao != 4);